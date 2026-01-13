import EventEmitter from "events";

const eventEmitter = new EventEmitter();
eventEmitter.on('hii',()=>{
    console.log('hello world');
});
eventEmitter.once('hii',()=>{
    console.log('hello sarvadhisolution');//once time j run thase pachi delete...
});
eventEmitter.emit('hii');

console.log(eventEmitter.listenerCount('hii'));// to count number of listener for particular event
eventEmitter.removeListener('hii',()=>{
    console.log('hello world');
});
eventEmitter.emit('hii');// after remove listener event will not run
//removelistener() --remove one listener
//removealllisteners()