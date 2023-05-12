// get dom properties

const upperText = document.querySelector('.upper-display-text');
const resultText = document.querySelector('.result-text');
const acButton = document.querySelector('#ac-button');
const ceButton = document.querySelector('#ce-button');

const divisionButton = document.querySelector('#division-button');
const multiplicationButton = document.querySelector('#multiplication-button');
const subtractionButton = document.querySelector('#subtraction-button');
const additionButton = document.querySelector('#addition-button');
const dotButton = document.querySelector('#decimal-button');
const equalButton = document.querySelector('#equal-button');

const number0Button = document.querySelector('#number-0-button');
const number1Button = document.querySelector('#number-1-button');
const number2Button = document.querySelector('#number-2-button');
const number3Button = document.querySelector('#number-3-button');
const number4Button = document.querySelector('#number-4-button');
const number5Button = document.querySelector('#number-5-button');
const number6Button = document.querySelector('#number-6-button');
const number7Button = document.querySelector('#number-7-button');
const number8Button = document.querySelector('#number-8-button');
const number9Button = document.querySelector('#number-9-button');

let runningTotal = 0;

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

function operate () {
    
}


