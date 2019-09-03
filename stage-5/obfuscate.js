const scrambler = require('javascript-obfuscator');
const defaults = require('../default-obfuscation-options');

const fs = require('fs');

const contents = fs.readFileSync(__dirname + '/original.js', 'utf8');

const options = Object.assign(defaults, {
    identifierNamesGenerator: 'mangled', 
    transformObjectKeys: false,
    unicodeEscapeSequence: false,
    rotateStringArray: false,
    stringArrayThreshold: 0,
    stringArray: false,
    selfDefending: false,
    debugProtection: false,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 1,
});

const result = scrambler.obfuscate(contents, options);

fs.writeFileSync('./original-obfuscated.js', result.getObfuscatedCode());

