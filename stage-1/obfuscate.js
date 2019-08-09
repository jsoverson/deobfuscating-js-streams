const scrambler = require('javascript-obfuscator');
const defaults = require('../default-obfuscation-options');

const fs = require('fs');

const contents = fs.readFileSync(__dirname + '/original.js', 'utf8');

const options = Object.assign(defaults, {
    identifierNamesGenerator: 'mangled', 
    transformObjectKeys: true,
    unicodeEscapeSequence: true,
    rotateStringArray: false
});

const result = scrambler.obfuscate(contents, options);

console.log(result.getObfuscatedCode());