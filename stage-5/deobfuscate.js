const { RefactorSession } = require("shift-refactor");
const { parseScript } = require("shift-parser");
const Shift = require("shift-ast");

const fileContents = require("fs").readFileSync(
  "./original-obfuscated.js",
  "utf8"
);

const ast = parseScript(fileContents);

const refactor = new RefactorSession(ast);

const strings = refactor.query("Script :first-child ArrayExpression .elements");

const destringifyDeclarator = refactor.query(
  'VariableDeclarator[binding.name="b"]'
);

refactor.rename(destringifyDeclarator, "destringify");

const destringifyOffset = refactor.queryFrom(
  destringifyDeclarator,
  "BinaryExpression > LiteralNumericExpression"
)[0].value;

refactor.replace('CallExpression[callee.name="destringify"]', node => {
  const rv = new Shift.LiteralStringExpression({
    value: strings[node.arguments[0].value - destringifyOffset].value
  });
  return rv;
});

refactor.delete(ast.statements[0]);
refactor.delete(ast.statements[0]);
refactor.convertComputedToStatic();


refactor.replace("IfStatement > .test", node => {
  if (node.left.type.match(/^Literal/) && node.right.type.match(/^Literal/)) {
    if (node.operator === "===") {
      return new Shift.LiteralBooleanExpression({
        value: node.left.value === node.right.value
      });
    } else if (node.operator === "!==") {
      return new Shift.LiteralBooleanExpression({
        value: node.left.value !== node.right.value
      });
    }
  }
  return node;
});

refactor.replace("IfStatement", node => {
    if (node.test.type === 'LiteralBooleanExpression') {
        if (node.test.value) {
            return node.consequent;
        } else {
            return node.alternate;
        }
    }
    return node;
});

const dumbBodies = refactor.query("FunctionBody").filter(body => body.statements.length === 1 && body.statements[0].type === 'BlockStatement');

dumbBodies.forEach(node => {
    node.statements = node.statements[0].block.statements;
})

console.log(refactor.print());
