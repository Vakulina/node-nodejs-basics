import { cp, } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';



const dirName = dirname(fileURLToPath(import.meta.url));

const create = async () => {


    /* creates new file fresh.txt with content
    I am fresh and young inside of the files folder
        (if file already exists Error with message FS operation failed must be thrown)*/
};

await create();