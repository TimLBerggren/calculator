let firstNumber = '';
let operation = '';
let secondNumber = '';
let displayValue = '';

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

const power = (firstNumber, secondNumber) => Number(firstNumber) ** Number(secondNumber);
const add = (firstNumber, secondNumber) => Number(firstNumber) + Number(secondNumber);
const subtract = (firstNumber, secondNumber) => Number(firstNumber) - Number(secondNumber);
const multiply = (firstNumber, secondNumber) => Number(firstNumber) * Number(secondNumber);
const divide = (firstNumber, secondNumber) => (Number(secondNumber) === 0) ? 'Cannot divide by 0' : Number(firstNumber) / Number(secondNumber);

const roundResult = (result) => Math.round(result * 1000) / 1000

const updateDisplay = (value) => {
  displayValue += value.toString();
  display.textContent = displayValue;
};

equalButton.addEventListener("click", () => {
  if (firstNumber !== '' && operation !== '' && secondNumber !== '') {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    let result = '';

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
  displayValue = result.toString();
  display.textContent = displayValue;

  firstNumber = result.toString();
  secondNumber = '';
  operation = '';
  }
});

numberButtons.forEach(button => {
  button.addEventListener("click", (e) => {
      const value = e.target.textContent.trim();

      if (operation === '') {
          firstNumber += value;
      } else {
        secondNumber += value;
      }
      updateDisplay(value);
  });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const value = e.target.textContent.trim();

      if (operation !== '' && secondNumber === '')
        return;

      operation = value;

      updateDisplay(`${operation}`);
      displayValue = (`${firstNumber}${secondNumber}`);
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
// when a user inputs the second number, the operation should be executed and return the result


// Other stuff
// const operators = {
//     '^': 'power',
//     '+': 'plus',
//     '-': 'minus',
//     '*': 'multiply',
//     '/': 'divide'
//   };


// const operate = (firstNumber, operation, secondNumber) => {
//   if (operation === 'power') {
//     return power(firstNumber, secondNumber);
//   } else if (operation === 'plus') {
//     return add(firstNumber, secondNumber);
//   } else if (operation === 'minus') {
//     return subtract(firstNumber, secondNumber);
//   } else if (operation === 'multiply') {
//     return multiply(firstNumber, secondNumber);
//   } else if (operation === 'divide') {
//     return divide(firstNumber, secondNumber);
//   }

//   return 'Invalid operation';
// }


// const updateDisplay = (value) => {
//   if (displayValue === '' && value === '.') {
//     displayValue = '0.';
//   } else {
//     displayValue += value;
//   }
//   display.textContent = displayValue;
// }