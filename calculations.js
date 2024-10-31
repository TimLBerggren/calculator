export const power = (firstNumber, secondNumber) => Number(firstNumber) ** Number(secondNumber);
export const add = (firstNumber, secondNumber) => Number(firstNumber) + Number(secondNumber);
export const subtract = (firstNumber, secondNumber) => Number(firstNumber) - Number(secondNumber);
export const multiply = (firstNumber, secondNumber) => Number(firstNumber) * Number(secondNumber);
export const divide = (firstNumber, secondNumber) => (Number(secondNumber) === 0) ? 'Cannot divide by 0' : Number(firstNumber) / Number(secondNumber);