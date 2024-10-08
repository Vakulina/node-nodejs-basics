import * as fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dirName = dirname(fileURLToPath(import.meta.url));
const filePath = join(dirName, "files", "fileToWrite.txt");

const write = async () => {
  const writableStream = fs.createWriteStream(filePath);

  process.stdin.on("data", (chunk) => {
    writableStream.write(chunk);
  });

  writableStream.on("error", (err) => {
    console.error("Ошибка записи в файл:", err);
  });
};

await write();
