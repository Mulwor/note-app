const EventEmitter = require('events');

const emitter = new EventEmitter();

// События - просто сигнал, который сообщает о том что что-то произошло
const log = (msg) => {
  console.log(msg);
  emitter.emit('some_event', { id: 1, text: "События с id"})
}

module.exports = log;

// ? =====================================================================

// ! Чтобы вызвалось события нам необходимо использовать класс который наследуется
class Logger extends EventEmitter {
  log = (msg) => {
    console.log(msg);
    this.emit('some_event', { id: 1, text: "События с id" })
  }
}

module.exports = Logger;