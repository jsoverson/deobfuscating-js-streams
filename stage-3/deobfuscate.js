const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');

const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./original-obfuscated.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

const strings = refactor.query('Script :first-child ArrayExpression')[0].elements;

const offset = refactor.query('.expression[arguments.length=2][arguments.0.name="a"]')[0].arguments[1];

function rotate(offset) {
    while (--offset) {
        strings.push(strings.shift());
    }
};

rotate(offset.value + 1);

const destringifyDeclarator = refactor.query('Script > :nth-child(3)')[0].declaration.declarators[0];

refactor.rename(destringifyDeclarator, 'destringify')

const destringifyOffset = refactor.queryFrom(
    destringifyDeclarator,
    'BinaryExpression > LiteralNumericExpression'
)[0].value;

refactor.query('CallExpression[callee.name="destringify"]');

refactor.replace(
    'CallExpression[callee.name="destringify"]',
    node => {
        const rv = new Shift.LiteralStringExpression({
            value : strings[node.arguments[0].value - destringifyOffset].value
        });
        return rv;
    });

refactor._queueDeletion(tree.statements[0]);
refactor._queueDeletion(tree.statements[1]);
refactor._queueDeletion(tree.statements[2]);
refactor.cleanup();
const internalStatements = tree.statements[0].expression.callee.body.statements;
refactor._queueDeletion(internalStatements[0]);
refactor._queueDeletion(internalStatements[1]);
refactor._queueDeletion(internalStatements[2]);
refactor._queueDeletion(internalStatements[3]);
refactor._queueDeletion(internalStatements[4]);
refactor._queueDeletion(tree.statements[1]);
refactor.cleanup();

refactor.convertComputedToStatic();

console.log(refactor.print());