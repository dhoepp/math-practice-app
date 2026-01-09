"""
Problem generation and validation logic
"""

import random
from typing import Literal

from app.models.problem import Problem

def generate_problem(
    mode: Literal["addition", "subtraction", "sub_w_neg"],
    max_number: int = 10,
) -> Problem:
    

    if mode == "addition":
        operand1 = random.randint(0, max_number)
        operand2 = random.randint(0, max_number - operand1) #keeps answer below max_number (eg. max_number is 10, 4+6 or 8+2, instead of 9+8)
        operator = "+"
        answer = operand1 + operand2 
        return Problem(
            operand1=operand1, 
            operand2=operand2, 
            operator=operator, 
            answer=answer)


    elif mode == "subtraction":
        operand1 = random.randint(5, max_number) #5 or higher
        operand2 = random.randint(0, operand1) #to prevent negative numbers
        operator = "-"
        answer = operand1 - operand2
        return Problem(
            operand1=operand1, 
            operand2=operand2, 
            operator=operator, 
            answer=answer)
    
    elif mode == "sub_w_neg":
        operand1 = random.randint(0, max_number) 
        operand2 = random.randint(0, max_number) #negatives_allowed
        operator = "-"
        answer = operand1 - operand2
        return Problem(
            operand1=operand1, 
            operand2=operand2, 
            operator=operator, 
            answer=answer)
           



def validate_answer(
    operand1: int,
    operand2: int,
    operator: Literal["+", "-"],
    user_answer: int,
) -> tuple[bool, int]:
    """
    Validate user's answer to a problem

    TODO: Implement answer validation
    Requirements:
    - Calculate correct answer based on operands and operator
    - Compare with user_answer
    - Return tuple of (is_correct: bool, correct_answer: int)

    Example:
    if operator == "+":
        correct_answer = operand1 + operand2
    else:  # operator == "-"
        correct_answer = operand1 - operand2

    is_correct = user_answer == correct_answer
    return is_correct, correct_answer
    """
    pass


def generate_problem_set(
    mode: Literal["addition", "subtraction"],
    count: int,
    max_number: int = 10,
) -> list[Problem]:
    """
    Generate a set of unique problems for a session

    TODO: Implement problem set generation
    Requirements:
    - Generate 'count' number of problems
    - Ensure no duplicate problems in the set
    - Use generate_problem() for each problem
    - Track (operand1, operand2, operator) tuples to avoid duplicates
    - If can't generate unique problem after N attempts, allow duplicates (edge case)
    """
    pass
