import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dirName = dirname(fileURLToPath(import.meta.url));
const sourceDir = join(dirName, 'files');
const destDir = join(dirName, 'files_copy');

const checkFileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

const copy = async () => {
    const isDestDir =await checkFileExists(destDir);
    if (isDestDir) {
        throw new Error('FS operation failed');
    }
    else {
        try {
            await fs.cp(sourceDir, destDir, { errorOnExist: true, recursive: true });
        } catch {
            throw new Error('FS operation failed')
        }
    }

};

copy();