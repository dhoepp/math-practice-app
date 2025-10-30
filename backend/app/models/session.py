"""
Session model for practice sessions
"""

from datetime import datetime
from typing import List
from pydantic import BaseModel


class SessionProblemAttempt(BaseModel):
    """Individual problem attempt within a session"""
    problem_id: int | None = None
    operand1: int
    operand2: int
    operator: str
    correct_answer: int
    user_answer: int | None = None
    is_correct: bool | None = None
    attempted_at: datetime | None = None


class SessionBase(BaseModel):
    """Base session schema"""
    mode: str  # "addition" | "subtraction" | "mixed"
    max_number: int = 10
    problems_count: int = 10


class SessionCreate(SessionBase):
    """Schema for creating a session"""
    pass


class Session(SessionBase):
    """
    Complete session schema

    TODO: Add SQLAlchemy/SQLModel fields:
    - id: Primary key
    - started_at: Timestamp
    - completed_at: Timestamp (nullable)
    - problems_attempted: int
    - problems_correct: int
    """
    id: int | None = None
    started_at: datetime | None = None
    completed_at: datetime | None = None
    problems: List[SessionProblemAttempt] = []
    problems_attempted: int = 0
    problems_correct: int = 0

    class Config:
        from_attributes = True


# TODO: Create SQLAlchemy models for Session and SessionProblem tables
# Consider relationship between Session and multiple problem attempts
