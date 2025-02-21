const OPERATIONS = new Map([
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
]);

export const calculate = (num1, num2, operator) => {
  const operation = OPERATIONS.get(operator);
  if (!operation) {
    return { success: false, error: 'Unknown operator' };
  }
  return { success: true, result: operation(num1, num2) };
};
