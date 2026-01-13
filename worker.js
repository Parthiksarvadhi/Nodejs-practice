// worker.js
import { parentPort } from 'worker_threads';

let sum = 0;
for (let i = 0; i < 1e9; i++) sum++;

parentPort.postMessage(sum);
