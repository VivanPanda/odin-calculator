// get dom properties

const upperText = document.querySelector('.result-text');
const acButton = document.querySelector('#ac-button');
const ceButton = document.querySelector('#ce-button');

let currentUpperText;
let currentTotal;
let numbers = [];
let operators = [];

// basic arithmetic functions

function add (a, b) {
    let sum = a + b;
    return sum;
}

function subtract (a, b) {
    let difference = a - b;
    return difference;
}

function multiply (a, b) {
    let product = a * b;
    return product;
}

function divide (a, b) {
    let quotient = a / b;
    return quotient;
}

function operate (a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    }
    if (operator === "-") {
        return subtract(a, b);
    }
    if (operator === "*") {
        return multiply(a, b);
    }
    if (operator === "/") {
        return divide(a, b);
    }
}

const numberButtons = document.querySelectorAll('.number-button')
const operatorButtons = document.querySelectorAll('.operation-button')

const additionButton = document.querySelector('#addition-button')
const subtractionButton = document.querySelector('#subtraction-button')
const multiplicationButton = document.querySelector('#multiplication-button')
const divisionButton = document.querySelector('#division-button')
const equalButton = document.querySelector('#equal-button')

function addNumberToText(e) {
    const buttonValue = e.target.value;
    upperText.innerHTML += buttonValue;
    currentUpperText = upperText.innerHTML;    
}

function pushToArrayAndUpdateText(e) {
    numbers.push(parseInt(upperText.innerHTML))
    operators.push(e.target.value)
    upperText.innerHTML = '';
}

function handleOperator(e) {
    if (numbers.length === 0) {
      pushToArrayAndUpdateText(e)
    } else if (numbers.length === 1) {
        pushToArrayAndUpdateText(e)
        let a = numbers[0]
        let b = numbers[1]
        let operator = operators[0]
        let result = operate(a, b, operator);
        numbers.pop()
        numbers[0] = result;
        operators[0] = operators[1]
        operators.pop()
    }
}
  
function checkZero() {
    if (upperText.innerHTML == 0) {
      upperText.innerHTML = ''
    }
}

divisionButton.addEventListener('click', handleOperator)
multiplicationButton.addEventListener('click', handleOperator)
subtractionButton.addEventListener('click', handleOperator)
additionButton.addEventListener('click', handleOperator)

numberButtons.forEach(function (button) {
    button.addEventListener('click', (e) => {
        checkZero();
        addNumberToText(e);
    })
})

equalButton.addEventListener('click', () => {
    if (numbers[0] !== undefined && upperText.innerHTML !== '') {
        numbers.push(parseInt(upperText.innerHTML))
        let a = numbers[0]
        let b = numbers[1]
        let operator = operators[0]
        upperText.innerHTML = operate(a, b, operator);
        numbers = [];
        operators = [];
    }

    console.log(operators)
    console.log(numbers)
})
