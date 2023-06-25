// get dom properties

const upperText = document.querySelector('.result-text');
const acButton = document.querySelector('#ac-button');
const ceButton = document.querySelector('#ce-button');
const decimalButton = document.querySelector('#decimal-button')

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
    if (!upperText.textContent.includes('.') && buttonValue === '.') {
        upperText.textContent += buttonValue;
    } else if(upperText.textContent.includes('.') && buttonValue === '.') {
        return
    } else {
        upperText.textContent += buttonValue;
    }

console.log(upperText.textContent)
console.log(upperText.innerHTML)
} 

function pushToArrayAndUpdateText(e) {
    numbers.push(parseFloat(upperText.textContent))
    operators.push(e.target.value)
    upperText.textContent = '';
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
    if (upperText.textContent == 0) {
      upperText.textContent = ''
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
    if (numbers[0] !== undefined && upperText.textContent !== '') {
        numbers.push(parseFloat(upperText.textContent))
        let a = numbers[0]
        let b = numbers[1]
        let operator = operators[0]
        if (numbers[1] == 0 && operators.includes('/')) {
            upperText.textContent = 'Error';
        } else {
            let finalValue = (operate(a, b, operator)).toFixed(2);
            finalValue = finalValue.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/(\.\d*?[0-9])0+$/, "$1").replace(/\.0$/, "").replace(/\.$/, ""); // regex to remove unwanted 0s
            upperText.textContent = finalValue;
        }

        numbers = [];
        operators = [];
    }
})

acButton.addEventListener('click', () => {
    decimalButton.removeAttribute('disabled', '');
    upperText.textContent = '0';
    numbers = [];
    operators = [];
})

ceButton.addEventListener('click', () => {
    if (upperText.textContent !== '') {
      upperText.textContent = upperText.textContent.slice(0, -1);
    } else if (operators.length > 0) {
      operators.pop();
      upperText.textContent = numbers[numbers.length - 1].toString();
      numbers.pop();
    }
});
