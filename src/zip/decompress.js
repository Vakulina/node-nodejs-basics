import fs from 'fs';
import zlib from 'zlib';
import { dirname, join } from 'path';
import {  fileURLToPath } from 'url';

const dirName = dirname(fileURLToPath(import.meta.url));
const archivePath = join(dirName, 'files', 'archive.gz');
const outputPath = join(dirName, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const gunzip = zlib.createGunzip(); 

  const writeStream = fs.createWriteStream(outputPath);

  fs.createReadStream(archivePath) 
    .pipe(gunzip)                  
    .pipe(writeStream)            
    .on('finish', () => {
      console.log('Распаковка завершена.');
    })
    .on('error', (err) => {
      console.error('Ошибка при распаковке:', err);
    });
};


await decompress();
