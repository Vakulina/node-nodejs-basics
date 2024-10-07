import { pipeline } from 'node:stream/promises';
import * as fs from 'node:fs';
import * as zlib from 'node:zlib';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = dirname(fileURLToPath(import.meta.url));
const filePath = join(dirName, "files", "fileToCompress.txt");

const compress =    async () => {
    await pipeline(
        fs.createReadStream(filePath),
        zlib.createGzip(),
        fs.createWriteStream(join(dirName, "files",'archive.gz')),
      );
      console.log('Pipeline succeeded.');
};

await compress();
