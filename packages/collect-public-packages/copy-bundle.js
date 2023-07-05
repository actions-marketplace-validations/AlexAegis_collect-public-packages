import { cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageDir = dirname(fileURLToPath(import.meta.url));

await cp(join(packageDir, 'dist', 'index.js'), join(packageDir, '..', '..', 'public', 'index.js'));
