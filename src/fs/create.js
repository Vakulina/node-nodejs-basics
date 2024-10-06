import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dirName = dirname(fileURLToPath(import.meta.url));

const checkFileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}


const create = async () => {
    const freshFilePath = join(dirName, 'fresh.txt');

    const isFileExist = await checkFileExists(freshFilePath);
    if (isFileExist) {
        throw new Error('FS operation failed');
    } else {
        await fs.appendFile(freshFilePath, 'I am fresh and young');
    }
};

await create();