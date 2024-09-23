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

const roundResult = (result) => Math.round(result * 100) / 100;

const updateDisplay = (value) => {
  displayValue = value.toString();
  display.textContent = displayValue;
};

const calculate = () => {
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
    updateDisplay(firstNumber);
  }
};

numberButtons.forEach(button => {
  button.addEventListener("click", (e) => {
      const value = e.target.textContent.trim();

      if (operation === '') {
          firstNumber += value;
      } else {
        secondNumber += value;
      }
      updateDisplay(displayValue + value);
  });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const value = e.target.textContent.trim();

      if (firstNumber !== '' && operation !== '' && secondNumber !== '')
        calculate();

      operation = value;
      if (operation === '=') {
        updateDisplay(displayValue);
      } else {
        updateDisplay(displayValue + `${operation}`);
      }
  });
});

equalButton.addEventListener("click", () => {
  calculate();
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
// when a user inputs the equal sign,
// it should not show the eqauls sign,
// it should only execute the calculation and show the result, 
// that result is stored as the number the next operator would consider as the first number.