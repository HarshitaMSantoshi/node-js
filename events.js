let events = require('events');

let emitter = new events.EventEmitter();

emitter.setMaxListeners(12);

emitter.on('knock', function(){
    console.log('Whos there?');
});

/*emitter.on('knock', () => console.log(2))
emitter.on('knock', () => console.log(3))
emitter.on('knock', () => console.log(4))
emitter.on('knock', () => console.log(5))
emitter.on('knock', () => console.log(6))
emitter.on('knock', () => console.log(7))
emitter.on('knock', () => console.log(8))
emitter.on('knock', () => console.log(9))
emitter.on('knock', () => console.log(10))
emitter.on('knock', () => console.log(11))
emitter.on('knock', () => console.log(12))*/

emitter.emit('knock');
emitter.emit('knock');

/*emitter.once('greet', function(){
    console.log('Hey there!')
})*/

emitter.once('greet', function(name){
    console.log('Hey ' +name +'!')
})

emitter.emit('greet','Harshita');
emitter.emit('greet');

//Remove listener

function exiting(){
    console.log('exit');
}

emitter.on('exit',exiting);
emitter.emit('exit');
emitter.removeListener('exit', exiting);
emitter.emit('exit');

//To remove all listeners against a single event
emitter.emit('knock');
emitter.removeAllListeners('knock');
emitter.emit('knock');