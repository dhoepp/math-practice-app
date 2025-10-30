"""
Practice session endpoints
"""

from fastapi import APIRouter, HTTPException
from typing import List

from app.models.session import Session, SessionCreate, SessionProblemAttempt
# from app.services.session_service import create_session, update_session

router = APIRouter()


@router.post("/", response_model=Session)
async def create_practice_session(session_data: SessionCreate):
    """
    Create a new practice session

    TODO: Implement session creation
    - Generate specified number of problems based on mode
    - Store in database (or just return for client-side storage in MVP)
    - Return session with problems (without answers exposed)
    """
    raise HTTPException(status_code=501, detail="Not implemented yet")


@router.get("/{session_id}", response_model=Session)
async def get_session(session_id: int):
    """
    Get session details

    TODO: Implement session retrieval
    - Fetch from database
    - Include all problem attempts
    - Return full session data
    """
    raise HTTPException(status_code=501, detail="Not implemented yet")


@router.post("/{session_id}/submit", response_model=Session)
async def submit_problem_answer(
    session_id: int,
    problem_index: int,
    user_answer: int,
):
    """
    Submit answer for a problem in the session

    TODO: Implement answer submission
    - Validate answer
    - Update session progress
    - Return updated session with feedback
    - Check if session is complete
    """
    raise HTTPException(status_code=501, detail="Not implemented yet")


@router.post("/{session_id}/complete", response_model=Session)
async def complete_session(session_id: int):
    """
    Mark session as complete and get summary

    TODO: Implement session completion
    - Mark completed_at timestamp
    - Calculate final stats (problems_attempted, problems_correct)
    - Return session summary for results screen
    """
    raise HTTPException(status_code=501, detail="Not implemented yet")


# TODO: Consider for MVP or Phase 2:
# - GET /sessions/recent (get recent sessions for progress tracking)
# - DELETE /sessions/{id} (cleanup old sessions)
