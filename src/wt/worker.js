import { workerData, parentPort } from 'worker_threads';

// n should be received from main thread
const calculateFibonacci = (num) => {
    if (num < 2) return num;
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
};

// This function sends result of nthFibonacci computations to main thread
const returnResult = () => {
    if (typeof workerData === 'number') {
        const fibonacciResult = calculateFibonacci(workerData);
        parentPort.postMessage({ status: 'resolved', data: fibonacciResult });
    } else {
        parentPort.postMessage({ status: 'error', data: 'Invalid input: not a number' });
    }
};


returnResult();
