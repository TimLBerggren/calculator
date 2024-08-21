const add = (...args) => args.reduce((acc, val) => acc + val, 0);

const subtract = (...args) => args.reduce((acc, val) => acc - val);

const sum = (total) => total.reduce((acc, val) => acc + val, 0);

const multiply = (multiplication) => multiplication.reduce((acc, val) => acc * val);