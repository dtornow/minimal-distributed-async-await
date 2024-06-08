const faas = require('./faas');

require('./user');

if (process.argv.length > 2) {
    const input = process.argv[2];
    faas.process(input);
}