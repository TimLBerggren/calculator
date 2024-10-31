import { handleNumberClick, handleOperatorClick, calculate, clearCalculator, deleteLastInput, getDisplayValue } from './main.js';

const display = document.querySelector(".display");

export const updateDisplay = (value) => {
  display.textContent = value;
};

export const setupEventListeners = () => {
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");
  const equalButton = document.querySelector("#equal");
  const clearButton = document.querySelector("#clear");
  const deleteButton = document.querySelector("#delete");

  numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      handleNumberClick(e.target.textContent.trim());
      updateDisplay(getDisplayValue());
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      handleOperatorClick(e.target.textContent.trim());
      updateDisplay(getDisplayValue());
    });
  });

  equalButton.addEventListener("click", () => {
    calculate();
    updateDisplay(getDisplayValue());
  });

  clearButton.addEventListener("click", () => {
    clearCalculator();
    updateDisplay("0");
  });

  deleteButton.addEventListener("click", () => {
    deleteLastInput();
    updateDisplay(getDisplayValue());
  });
};
