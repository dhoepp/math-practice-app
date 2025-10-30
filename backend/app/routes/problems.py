"""
Problem generation endpoints
"""

from fastapi import APIRouter, HTTPException
from typing import Literal

from app.models.problem import Problem, ProblemCreate
# from app.services.problem_service import generate_problem

router = APIRouter()


@router.post("/generate", response_model=Problem)
async def generate_problem_endpoint(
    mode: Literal["addition", "subtraction"],
    max_number: int = 10,
):
    """
    Generate a random math problem

    TODO: Implement problem generation logic
    - Call problem_service.generate_problem()
    - Validate max_number range (1-20 reasonable for 1st grade)
    - Ensure answer is non-negative for subtraction
    - Return problem without answer for frontend
    """
    # Example stub:
    # problem = generate_problem(mode, max_number)
    # return problem

    raise HTTPException(status_code=501, detail="Not implemented yet")


@router.post("/validate", response_model=dict)
async def validate_answer(
    problem_id: int,
    operand1: int,
    operand2: int,
    operator: str,
    user_answer: int,
):
    """
    Validate user's answer to a problem

    TODO: Implement answer validation
    - Calculate correct answer
    - Compare with user_answer
    - Return {"is_correct": bool, "correct_answer": int}
    - Consider storing attempt in database (optional for MVP)
    """
    raise HTTPException(status_code=501, detail="Not implemented yet")


# TODO: Consider additional endpoints:
# - GET /problems/history (for future progress tracking)
# - GET /problems/stats (for future analytics)
