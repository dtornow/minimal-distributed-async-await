const faas = require('./faas');

const durable = {};

durable.resume = function(generatorFunc) {
    return async function(queue, event) {
        const { args, history = [] } = event;
        const generator = generatorFunc(...args);

        for (let entry of history) {
            generator.next(entry.value);
        }

        let result = generator.next();
        while (!result.done) {
            const yielded = result.value;
            if (yielded.type === 'call') {
                const returnValue = await yielded.func(...yielded.args);
                history.push({ type: 'call', value: returnValue });
            } else if (yielded.type === 'wait') {
                await faas.queue(queue, { args, history: [...history, { type: 'wait', value: yielded.value }] });
                return;
            }
            result = generator.next();
        }
    };
}

module.exports = durable;