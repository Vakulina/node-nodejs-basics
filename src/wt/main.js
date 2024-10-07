import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const os = await import("node:os");
const { Worker } = await import("node:worker_threads");

const dirName = dirname(fileURLToPath(import.meta.url));
const workerFilePath = join(dirName, 'worker.js');

const cpuCount = os.cpus().length; 

const performCalculations = async () => {
  const runWorker = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerFilePath, { workerData });

      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  };

  const promises = [];
  let startNumber = 10; 

  for (let i = 0; i < cpuCount; i++, startNumber++) {
    promises.push(runWorker(startNumber).catch((error) => {
      console.error(`Error in worker for ${startNumber}:`, error);
      return { status: 'error', data: null };
    }));
  }

  const results = await Promise.all(promises);
  console.log('Results:', results); 
};


await performCalculations();
