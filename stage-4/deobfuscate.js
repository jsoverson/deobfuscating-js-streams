const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');

const { traverse } = require('shift-traverser');

const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./original-obfuscated.js', 'utf8');

const ast = parseScript(fileContents);

const refactor = new RefactorSession(ast);

const whileNodes = refactor.query('WhileStatement[test.operand.type="UnaryExpression"]');

const parentFunctions = [];

traverse(ast, {
    enter(node, parent){
        if (whileNodes.indexOf(node) > -1) {
            parentFunctions.push(parent);
        }
    }
})

const dataObject = ast.statements[0].expression.callee.body.statements[0].declaration.declarators[0];

function unflatten(functionBody) {
    const keyStringPropertyName = functionBody.statements[0].declaration.declarators[0].init.callee.object.expression.value;
    const keyString = dataObject.init.properties.find(_ => _.name.value === keyStringPropertyName);

    const order = keyString.expression.value.split('|');

    const switchCases = functionBody.statements[1].body.block.statements[0].cases;

    const reorderedSwitchCases = order.map(_ => switchCases[_]);

    return reorderedSwitchCases.map(_ => _.consequent[0]);
}

parentFunctions.forEach(fn => {
    fn.statements = unflatten(fn);
})

refactor.convertComputedToStatic();

console.log(refactor.print());