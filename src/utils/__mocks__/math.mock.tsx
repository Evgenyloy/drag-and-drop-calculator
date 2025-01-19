export const multiply = [
  {
    currentOperand: '5',
    previousOperand: '10',
    operation: '*',
    expected: '50',
  },
  {
    currentOperand: '3',
    previousOperand: '8.5',
    operation: '*',
    expected: '25.5',
  },
  {
    currentOperand: '10',
    previousOperand: '0',
    operation: '*',
    expected: '0',
  },
];

export const divide = [
  {
    currentOperand: '2',
    previousOperand: '10',
    operation: '/',
    expected: '5',
  },
  {
    currentOperand: '3',
    previousOperand: '149',
    operation: '/',
    expected: '49.666666666666664',
  },
  {
    currentOperand: '0',
    previousOperand: '2',
    operation: '/',
    expected: 'Infinity',
  },
];
export const subtract = [
  {
    currentOperand: '5',
    previousOperand: '10',
    operation: '-',
    expected: '5',
  },
  {
    currentOperand: '0',
    previousOperand: '10',
    operation: '-',
    expected: '10',
  },
  {
    currentOperand: '2.5',
    previousOperand: '7',
    operation: '-',
    expected: '4.5',
  },
];
export const addition = [
  {
    currentOperand: '5',
    previousOperand: '10',
    operation: '+',
    expected: '15',
  },
  {
    currentOperand: '0',
    previousOperand: '10',
    operation: '+',
    expected: '10',
  },
  {
    currentOperand: '2.5',
    previousOperand: '7',
    operation: '+',
    expected: '9.5',
  },
];
