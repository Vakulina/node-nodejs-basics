import { fork } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dirName = dirname(fileURLToPath(import.meta.url));
const childPath = join(dirName, "files", "script.js");

const spawnChildProcess = async (args) => {
  const arg = process.argv.slice(2);

  const child_1 = fork(childPath, arg);
  child_1.send(process.stdin);
};

spawnChildProcess();
