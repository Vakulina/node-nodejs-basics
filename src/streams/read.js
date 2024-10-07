import * as fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dirName = dirname(fileURLToPath(import.meta.url));
const filesDir = join(dirName, "files");

const read = async () => {
  const stream = fs.createReadStream(join(filesDir, "fileToRead.txt"));
  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => {
    console.log("\n");
  });

};

await read();
