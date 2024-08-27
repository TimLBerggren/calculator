let firstNumber = '';
let operation = '';
let secondNumber = '';
let displayValue = '';

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector("#delete");


const operators = {
    '^': 'power',
    '+': 'plus',
    '-': 'minus',
    '*': 'multiply',
    '/': 'divide'
  };

const power = (a, b) => a ** b;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0) ? 'Cannot divide by 0' : a / b;

const operate = (firstNumber, operation, secondNumber) => {
  if (operation === 'power') {
    return power(firstNumber, secondNumber);
  } else if (operation === 'plus') {
    return add(firstNumber, secondNumber);
  } else if (operation === 'minus') {
    return subtract(firstNumber, secondNumber);
  } else if (operation === 'multiply') {
    return multiply(firstNumber, secondNumber);
  } else if (operation === 'divide') {
    return divide(firstNumber, secondNumber);
  }

  return 'Invalid operation';
}

const updateDisplay = (value) => {
  if (displayValue === '' && value === '.') {
    displayValue = '0.';
  } else {
    displayValue += value;
  }
  display.textContent = displayValue;
}

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent.trim();
        if (displayValue === '0') {
            displayValue = '';
        }
        updateDisplay(value);
    });
});

clearButton.addEventListener("click", () => {
    firstNumber = '';
    operation = '';
    secondNumber = '';
    displayValue = '';
    display.textContent = "0";
});

deleteButton.addEventListener("click", () => {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    display.textContent = '0';
  } else {
    display.textContent = displayValue;
  }
});

//TODO
// add event listener to the delete button: when a user clicks the backspace/delete button, it should remove the most recent value on the display and keep the other values that have been displayed
// when a user inputs the second number, the operation should be executed and return the result
