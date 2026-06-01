import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export type YoTimezone = 'local' | string | number;

export interface YoTimezoneInfo {
  offsetMinutes: number;
  label: string;
}

function formatUtcOffset(offsetMinutes: number) {
  const sign = offsetMinutes >= 0 ? '+' : '-';
  const absoluteMinutes = Math.abs(offsetMinutes);
  const hours = Math.floor(absoluteMinutes / 60);
  const minutes = absoluteMinutes % 60;

  if (minutes === 0) {
    return `UTC${sign}${hours}`;
  }

  return `UTC${sign}${hours}:${String(minutes).padStart(2, '0')}`;
}

function parseTimezoneString(timezone: string) {
  const normalized = timezone.trim();

  if (!normalized) {
    return undefined;
  }

  if (normalized.toLowerCase() === 'local') {
    return -new Date().getTimezoneOffset();
  }

  if (/^utc$/i.test(normalized) || /^z$/i.test(normalized)) {
    return 0;
  }

  const match = normalized.match(/^(?:UTC|GMT)?\s*([+-])?\s*(\d{1,2})(?::?(\d{2}))?$/i);

  if (!match) {
    return undefined;
  }

  const sign = match[1] === '-' ? -1 : 1;
  const hours = Number(match[2]);
  const minutes = Number(match[3] ?? 0);

  if (hours > 14 || minutes >= 60) {
    return undefined;
  }

  return sign * (hours * 60 + minutes);
}

export function getYoTimezoneInfo(timezone?: YoTimezone): YoTimezoneInfo | undefined {
  if (timezone === undefined || timezone === null) {
    return undefined;
  }

  const offsetMinutes =
    typeof timezone === 'number'
      ? Math.abs(timezone) <= 14
        ? timezone * 60
        : timezone
      : parseTimezoneString(timezone);

  if (typeof offsetMinutes !== 'number' || Number.isNaN(offsetMinutes)) {
    return undefined;
  }

  return {
    offsetMinutes,
    label: formatUtcOffset(offsetMinutes),
  };
}

export function toTimezoneDisplayValue<T>(value: T, timezoneInfo?: YoTimezoneInfo): T {
  if (!timezoneInfo) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => toTimezoneDisplayValue(item, timezoneInfo)) as T;
  }

  if (dayjs.isDayjs(value)) {
    return value.utcOffset(timezoneInfo.offsetMinutes) as T;
  }

  return value;
}

export function toTimezoneOutputValue<T>(value: T, timezoneInfo?: YoTimezoneInfo): T {
  if (!timezoneInfo) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => toTimezoneOutputValue(item, timezoneInfo)) as T;
  }

  if (dayjs.isDayjs(value)) {
    return value.utcOffset(timezoneInfo.offsetMinutes, true) as T;
  }

  return value;
}

function appendTimezoneToFormat(format: string, timezoneInfo: YoTimezoneInfo) {
  return `${format} [${timezoneInfo.label}]`;
}

export function mergeTimezoneFormat(
  format: unknown,
  timezoneInfo: YoTimezoneInfo | undefined,
  defaultFormat: string,
): unknown {
  if (!timezoneInfo) {
    return format;
  }

  if (Array.isArray(format)) {
    return format.map(item => (typeof item === 'string' ? appendTimezoneToFormat(item, timezoneInfo) : item));
  }

  if (typeof format === 'function') {
    return (value: unknown) => `${(format as (nextValue: unknown) => string)(value)} ${timezoneInfo.label}`;
  }

  if (typeof format === 'string') {
    return appendTimezoneToFormat(format, timezoneInfo);
  }

  return appendTimezoneToFormat(defaultFormat, timezoneInfo);
}

export function callTimezoneHandler(handler: unknown, ...args: unknown[]) {
  if (Array.isArray(handler)) {
    handler.forEach(item => {
      if (typeof item === 'function') {
        item(...args);
      }
    });
    return;
  }

  if (typeof handler === 'function') {
    handler(...args);
  }
}
