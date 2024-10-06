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
    // Write your code here 
};

await list();