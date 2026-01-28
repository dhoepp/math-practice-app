export type Mode = "addition" | "subtraction" | "sub_w_neg";

export interface Problem {
  operand1: number;
  operand2: number;
  operator: "+" | "-";
  answer: number;
}

export function generateProblem(mode: Mode, maxNumber: number = 10): Problem {
  if (mode === "addition") {
    const answer = Math.floor(Math.random() * (maxNumber - 5 + 1)) + 5; //added answer to distribute probability
    const operand1 = Math.floor(Math.random() * (answer + 1));
    const operand2 = answer - operand1;
    return {
      operand1,
      operand2,
      operator: "+",
      answer
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