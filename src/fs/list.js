import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dirName = dirname(fileURLToPath(import.meta.url));
const filesDir = join(dirName, 'files');

const checkFileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

const list = async () => {
    const isFilesExist = await checkFileExists(filesDir)
    if (!isFilesExist) {
        throw new Error('FS operation failed')
    }
    const list = []
    const files = await fs.readdir(filesDir);
    for (const file of files) list.push(file);
    console.log(list)

};

await list();