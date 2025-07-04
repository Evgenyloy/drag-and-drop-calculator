export function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";

  let computation: number = 0;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
  }

  return computation.toString();
}
