const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');

const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./original-obfuscated.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

const strings = refactor.query('Script :first-child ArrayExpression .elements');

const destringifyDeclarator = refactor.query('VariableDeclarator[binding.name="b"]');

refactor.rename(destringifyDeclarator, 'destringify')

const destringifyOffset = refactor.queryFrom(
    destringifyDeclarator,
    'BinaryExpression > LiteralNumericExpression'
)[0].value;

refactor.replace(
    'CallExpression[callee.name="destringify"]',
    node => {
        const rv = new Shift.LiteralStringExpression({
            value : strings[node.arguments[0].value - destringifyOffset].value
        });
        return rv;
    });

refactor.delete('VariableDeclarator[binding.name="destringify"]');
refactor.delete('VariableDeclarator[binding.name="a"]');

refactor.convertComputedToStatic();

console.log(refactor.print());

