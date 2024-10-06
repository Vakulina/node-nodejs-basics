import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dirName = dirname(fileURLToPath(import.meta.url));
const filePath = join(dirName,'files', 'fileToRead.txt');

const checkFileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

const read = async () => {

    const isFileExist = await checkFileExists(filePath);
    if (!isFileExist) throw new Error('FS operation failed');
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data); // Вывод содержимого файла
};

await read();