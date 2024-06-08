const durable = require('./durable');
const faas = require('./faas');

function* countdown(phone, count, delay) {
    for (let i = 1; i <= count; i++) {
        yield { type: 'call', func: send, args: [phone, count - i] };
        yield { type: 'wait', value: delay };
    }
}

function send(phone, message) {
    return message;
}

faas.handler('countdown', durable.resume(countdown));