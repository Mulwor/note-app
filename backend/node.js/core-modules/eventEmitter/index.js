const EventEmitter = require('events');
const calculator = new EventEmitter();
calculator.on('sum', (a, b) => console.log(`Result is ${a + b}`))
calculator.emit('sum', 1, 3 )


// !================= ==================== ===============================

// Модули события

const EventEmitter = require('events');
const log = require('./log');
const Logger = require('./log');

const emitter_01 = new EventEmitter();

// События - просто сигнал, который сообщает о том что что-то произошло
emitter_01.on('some_event', (text) => {
  console.log(text)
})

// Вызываем событие
emitter_01.emit('some_event', 'Произошло вызов просто текста события');

// !================= ==================== ===============================
const emitter_02 = new EventEmitter();

emitter_02.on('some_event', (args) => {
  const { id, text} = args;

  console.log(id, text)
})

emitter_02.emit('some_event', { id: 1, text: "События с id"})

// !================= ==================== ===============================
const emitter_03 = new EventEmitter();

emitter_03.on('some_event', (args) => {
  const { id, text} = args;
  console.log(id, text)
})

// log('User logged')

const logger = new Logger();

logger.on('some_event', (args) => {
  const { id, text} = args;
  console.log(id, text)
})

logger.log('User logged')

