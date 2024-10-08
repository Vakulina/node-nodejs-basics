import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os'
import { createRequire } from "module";
import * as path from 'path'
import * as c from './files/c.js'

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
import { createServer as createServerHttp } from 'http';

const random = Math.random();

let unknownObject;
const require = createRequire(import.meta.url);

if (random > 0.5) {
  unknownObject = require('./files/a.json');
} else {
  unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dirName}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
};
