import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dirName = dirname(fileURLToPath(import.meta.url));
const filesDir = join(dirName, 'files');
const fileToRemovePath = join(filesDir, 'fileToRemove.txt')

const checkFileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

const remove = async () => {
    const isFileExist = await checkFileExists(fileToRemovePath);
    if (isFileExist) {
        fs.rm(fileToRemovePath)
    } else {
        throw new Error('FS operation failed');
    }

};

await remove();