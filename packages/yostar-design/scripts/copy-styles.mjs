import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const packageDir = join(currentDir, '..');

const stylePairs = [
  ['src/style', 'dist/style'],
  ['src/components/button/style', 'dist/components/button/style'],
  ['src/components/cascader/style', 'dist/components/cascader/style'],
  ['src/components/checkbox/style', 'dist/components/checkbox/style'],
  ['src/components/date-picker/style', 'dist/components/date-picker/style'],
  ['src/components/input/style', 'dist/components/input/style'],
  ['src/components/input-number/style', 'dist/components/input-number/style'],
  ['src/components/radio/style', 'dist/components/radio/style'],
  ['src/components/select/style', 'dist/components/select/style'],
  ['src/components/switch/style', 'dist/components/switch/style'],
  ['src/components/time-picker/style', 'dist/components/time-picker/style'],
];

stylePairs.forEach(([from, to]) => {
  const source = join(packageDir, from);
  const target = join(packageDir, to);

  if (!existsSync(source)) {
    return;
  }

  mkdirSync(dirname(target), { recursive: true });
  cpSync(source, target, { recursive: true });
});

const cssPairs = [
  ['src/components/button/style/index.less', 'dist/button/style.css'],
  ['src/components/cascader/style/index.less', 'dist/cascader/style.css'],
  ['src/components/checkbox/style/index.less', 'dist/checkbox/style.css'],
  [null, 'dist/config-provider/style.css'],
  ['src/components/date-picker/style/index.less', 'dist/date-picker/style.css'],
  ['src/components/input/style/index.less', 'dist/input/style.css'],
  ['src/components/input-number/style/index.less', 'dist/input-number/style.css'],
  ['src/components/radio/style/index.less', 'dist/radio/style.css'],
  ['src/components/select/style/index.less', 'dist/select/style.css'],
  [null, 'dist/space/style.css'],
  ['src/components/switch/style/index.less', 'dist/switch/style.css'],
  ['src/components/time-picker/style/index.less', 'dist/time-picker/style.css'],
];

cssPairs.forEach(([from, to]) => {
  const source = from ? join(packageDir, from) : null;
  const target = join(packageDir, to);
  const baseStyle = join(packageDir, 'src/style/index.less');

  if (source && !existsSync(source)) {
    return;
  }

  mkdirSync(dirname(target), { recursive: true });
  const content = [
    existsSync(baseStyle) ? readFileSync(baseStyle, 'utf-8') : '',
    source ? readFileSync(source, 'utf-8') : '',
  ]
    .filter(Boolean)
    .join('\n\n');

  writeFileSync(target, content);
});
