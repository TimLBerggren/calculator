import { power, add, subtract, multiply, divide } from './calculations.js';
import { updateDisplay, setupEventListeners } from './dom.js';
import { roundResult } from './utils.js';

let firstNumber = '';
let operation = '';
let secondNumber = '';
let displayValue = '';

export const getDisplayValue = () => displayValue;

export const calculate = () => {
  if (firstNumber !== '' && operation !== '' && secondNumber !== '') {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    let result;

    switch (operation) {
      case "+":
        result = add(a, b);
        break;
      case "-":
        result = subtract(a, b);
        break;
      case "x":
        result = multiply(a, b);
        break;
      case "÷":
        result = divide(a, b);
        break;
      case "^":
        result = power(a, b);
        break;
    }

    if (typeof result === "number") {
      result = roundResult(result);
    }

    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
    displayValue = firstNumber;
    updateDisplay(displayValue);
  }
};

export const handleNumberClick = (value) => {
  if (value === '.') {
    if (operation === '' && firstNumber.includes('.')) return;
    if (operation !== '' && secondNumber.includes('.')) return;
  }

  if (operation === '') {
    firstNumber += value;
  } else {
    secondNumber += value;
  }

  displayValue += value;
  updateDisplay(displayValue);
};

export const handleOperatorClick = (value) => {
  if (firstNumber !== '' && operation !== '' && secondNumber !== '') {
    calculate();
  }
  if (value !== '=') {
    operation = value;
    updateDisplay(displayValue + `${operation}`);
  } else {
    updateDisplay(displayValue);
  }
  if (value !== '=') {
    displayValue += value;
  }
};

export const clearCalculator = () => {
  firstNumber = '';
  operation = '';
  secondNumber = '';
  displayValue = '';
  updateDisplay("0");
};

export const deleteLastInput = () => {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    displayValue = '0';
  }
  updateDisplay(displayValue);
};

setupEventListeners();
