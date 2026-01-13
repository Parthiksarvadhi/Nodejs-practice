import { Worker } from 'worker_threads';

console.log('🧵 Main thread started');

// Create worker
const worker = new Worker('./worker.js');

function data(){setTimeout(() => {
    console.log('⏰ Timeout completed in main thread'); 
}, 10);}
data();
// Listen for message from worker
worker.on('message', (result) => {
  console.log('✅ Result from worker:', result);
});

// Listen for errors
worker.on('error', (err) => {
  console.error('❌ Worker error:', err);
});

// Listen when worker exits
worker.on('exit', (code) => {
  console.log('👋 Worker exited with code', code);
});

// Main thread continues working
console.log('🚀 Main thread is free and running');
