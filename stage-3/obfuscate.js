const scrambler = require('javascript-obfuscator');
const defaults = require('../default-obfuscation-options');

const fs = require('fs');

const contents = fs.readFileSync(__dirname + '/original.js', 'utf8');

const options = Object.assign(defaults, {
    identifierNamesGenerator: 'mangled', 
    transformObjectKeys: true,
    unicodeEscapeSequence: true,
    rotateStringArray: true,
    stringArray: true,
    selfDefending: true,
    debugProtection: true
});

const result = scrambler.obfuscate(contents, options);

fs.writeFileSync('./original-obfuscated.js', result.getObfuscatedCode());

