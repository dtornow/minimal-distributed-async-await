const faas = {};

faas._handlers = {};

faas.handler = function(name, handlerFunction) {
    faas._handlers[name] = handlerFunction;
};

faas.queue = async function(queue, event) {
    console.log(JSON.stringify({ queue, event }));
};

faas.process = function(input) {
    try {
        const message = JSON.parse(input);
        const handler = faas._handlers[message.queue];
        if (handler) {
            handler(message.queue, message.event);
        }
    } catch (err) {
        console.error('Failed to process message:', err);
    }
};

module.exports = faas;