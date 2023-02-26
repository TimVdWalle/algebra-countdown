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
    '-'
];


/************************************************************************************************
 *  functions
 ************************************************************************************************/
function buildExpressions(){
    let expression = 'start';
    let expressions = addPart(expression, 4);
    return expressions;
}

function addPart(expression, number){
    let expressions = []

    if(number === 1){
        return [number];
    }

    let i = 0;
    while (i < operators.length) {
        operator = operators[i];
        i++;


        let results = addPart(expression, number - 1)

        let j = 0;
        while(j < results.length){
            console.log('result = ', results[j])
            expressions.push(number + ' '  +  operator + ' ' + results[j])
            j++
        }
    }


    return expressions;
}

function tryParse(expression){
    try {
        let solution = evaluate(ex);

    } catch(e){
        // ignore
        solution = -1;
    }

    return solution;
}


/************************************************************************************************
 *  main execution
 ************************************************************************************************/
console.log("starting app");

let expressions = buildExpressions();
console.log(expressions);