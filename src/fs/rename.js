import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dirName = dirname(fileURLToPath(import.meta.url));
const oldPath = join(dirName, 'files', 'wrongFilename.txt');
const newPath = join(dirName, 'files', 'properFilename.md')

const checkFileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}
const rename = async () => {
    const isFileExist = await checkFileExists(oldPath);
    if (!isFileExist) {
        throw new Error('FS operation failed');
    } else {
        fs.rename(oldPath, newPath);
    }

};

await rename();