"""
Problem model for math practice problems
"""

from typing import Literal
from pydantic import BaseModel

# TODO: Set up SQLAlchemy/SQLModel for database ORM
# For now, using Pydantic models for API validation


class ProblemBase(BaseModel):
    """Base problem schema"""
    operand1: int
    operand2: int
    operator: Literal["+", "-"]
    answer: int


class ProblemCreate(ProblemBase):
    """Schema for creating a problem"""
    pass


class Problem(ProblemBase):
    """
    Problem schema with database fields

    TODO: Add SQLAlchemy/SQLModel fields:
    - id: Primary key
    - created_at: Timestamp
    - difficulty_level: int (optional for future)
    """
    id: int | None = None

    class Config:
        from_attributes = True


# TODO: Create SQLAlchemy model
# Example:
# class ProblemDB(SQLModel, table=True):
#     id: int | None = Field(default=None, primary_key=True)
#     operand1: int
#     operand2: int
#     operator: str
#     answer: int
#     created_at: datetime = Field(default_factory=datetime.utcnow)
