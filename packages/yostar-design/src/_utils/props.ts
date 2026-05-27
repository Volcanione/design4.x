export type RuntimeProps = Record<string, unknown>;

export function omitProps<T extends RuntimeProps>(props: T, excludes: string[]) {
  const excludeSet = new Set(excludes);
  const nextProps: RuntimeProps = {};

  Object.entries(props).forEach(([key, value]) => {
    if (!excludeSet.has(key)) {
      nextProps[key] = value;
    }
  });

  return nextProps;
}
