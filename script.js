// get dom properties

const upperText = document.querySelector('.upper-display-text');
const resultText = document.querySelector('.result-text');
const acButton = document.querySelector('#ac-button');
const ceButton = document.querySelector('#ce-button');

let currentUpperText;
let currentTotal;
let numbers = [];
let operators = [];

const numberButtons = document.querySelectorAll('.number-button')
const operatorButtons = document.querySelectorAll('.operation-button')

function addNumberToText(e) {
    const buttonValue = e.target.value;
    upperText.innerHTML += buttonValue;
    currentUpperText = upperText.innerHTML;    
}

numberButtons.forEach(function (button) {
    button.addEventListener('click', addNumberToText)
})

operatorButtons.forEach(function (button) {
    button.addEventListener('click', () => {

    })
})

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
    if (operator === "x") {
        return multiply(a, b);
    }
    if (operator === "/") {
        return divide(a, b);
    }
}