export type Mode = "addition" | "subtraction" | "sub_w_neg";

export interface Problem {
  operand1: number;
  operand2: number;
  operator: "+" | "-";
  answer: number;
}

export function generateProblem(mode: Mode, maxNumber: number = 10): Problem {
  if (mode === "addition") {
    const operand1 = Math.floor(Math.random() * (maxNumber + 1));
    const operand2 = Math.floor(Math.random() * (maxNumber - operand1 + 1));
    return {
      operand1,
      operand2,
      operator: "+",
      answer: operand1 + operand2
    };
  } 
  
  if (mode === "subtraction") {
    const operand1 = Math.floor(Math.random() * (maxNumber - 5 + 1)) + 5;
    const operand2 = Math.floor(Math.random() * (operand1 + 1));
    return {
      operand1,
      operand2,
      operator: "-",
      answer: operand1 - operand2
    };
  }
  
  // sub_w_neg
  const operand1 = Math.floor(Math.random() * (maxNumber + 1));
  const operand2 = Math.floor(Math.random() * (maxNumber + 1));
  return {
    operand1,
    operand2,
    operator: "-",
    answer: operand1 - operand2
  };
}