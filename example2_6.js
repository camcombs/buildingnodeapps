// example 2-6

var events = require('events');
var eventEmitter = new events.EventEmitter();

function mainLoop() {
    console.log('Starting application');
    eventEmitter.emit('ApplicationRun');
    
    console.log('Running application');
    eventEmitter.emit('ApplicationStart');
    
    console.log('Stopping Application');
    eventEmitter.emit('ApplicationStop');
}

function onApplicationStart() {
    console.log('handling application start event');
}

function onApplicationRun() {
    console.log('handling application run event');
}

function onApplicationStop() {
    console.log('handling application stop event');
}

eventEmitter.on('ApplicationStart',onApplicationStart);
eventEmitter.on('ApplicationRun',onApplicationRun);
eventEmitter.on('ApplicationStop',onApplicationStop);

mainLoop();