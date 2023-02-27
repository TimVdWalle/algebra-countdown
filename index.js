/************************************************************************************************
 *  load modules
 ************************************************************************************************/
// load math.js (using node.js)
const { simplify, parse, derivative, evaluate, expression, exp} = require('mathjs')


/************************************************************************************************
 *  local data
 ************************************************************************************************/
// const operators = [
//     // ' ',
//     // '(',
//     // ')',
//     '+',
//     '-',
//     // '*',
//     // '/'
// ];


const operators = [
    '+',
    '-',
    '*',
    '/',
    // '(',
    // ')',
    '^',
];

const startingNumber = 10;
const resultMinimum = 2020;
const resultMaximum = 2030;


/************************************************************************************************
 *  functions
 ************************************************************************************************/
function buildExpressions(){
    let expression = '';
    let expressions = addPart(expression, startingNumber);
    return expressions;
}

// recursive function to build all possible combinations of operators and numbers 10 to 1
// end condition = when number is 1
// from there, we build the results by adding the previous recursive results to the current expression, and passing those results one level up
function addPart(expression, number){
    let expressions = []

    if(number === 1){
        return [number];
    }

    let i = 0;
    while (i < operators.length) {
        let operator = operators[i];
        i++;

        let results = addPart(expression, number - 1)

        let j = 0;
        while(j < results.length){
            let newExpression = operator + ' ' + results[j];
            expressions.push(number + ''  +  operator + '' + results[j])
            j++
        }
    }

    return expressions;
}

function evaluateExpressions(expressions){
    let i = 0;
    while (i < expressions.length) {
        let expression = expressions[i]
        let evaluated = tryParse(expression)

        if(evaluated >= resultMinimum && evaluated <= resultMaximum && Number.isInteger(evaluated)){
            console.log(expression, ' = ', evaluated)
        }


        i++
    }
}

function tryParse(expression){
    try {
        let solution = evaluate(expression);
        return solution

    } catch(e){
        // ignore
        return -1;
    }
}


/************************************************************************************************
 *  main execution
 ************************************************************************************************/
console.log("starting app");

// get all possible expressions, including badly formatted ones (tryParse will filter those out)
let expressions = buildExpressions();

// evaluate all expressions (including badly formatted ones)
evaluateExpressions(expressions)

// let test = tryParse('10 + 1')
// console.log(test)

console.log("finished");
