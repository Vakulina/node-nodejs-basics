import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises'; // Импортируем readFile из 'fs/promises'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = dirname(fileURLToPath(import.meta.url));
const sourceDir = join(dirName, 'files');
const filePath = join(sourceDir, 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const content = await readFile(filePath, { encoding: 'utf8' });

    const hash = createHash('sha256');
    console.log(hash.update(content).digest('hex'));
};

await calculateHash();
