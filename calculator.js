let firstNumber = ''
let operation = ''
let secondNumber = ''

const operators = {
    '+': 'plus',
    '-': 'minus',
    '*': 'multiply',
    '/': 'divide',
  };

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b === 0) ? 'Cannot divide by 0' : a / b;

const operate = (firstNumber, operation, secondNumber) => {
  if (operation === 'plus') {
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

// TODO MAYBE
// if there needs to be an event listener then we do the following instead:
// when a user inputs the second number, the operation should be executed and return the result
// let operate = document.querySelector('')
