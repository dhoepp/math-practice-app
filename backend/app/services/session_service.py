"""
Practice session management logic
"""

from datetime import datetime
from typing import Literal

from app.models.session import Session, SessionCreate, SessionProblemAttempt
from app.services.problem_service import generate_problem_set


def create_session(session_data: SessionCreate) -> Session:
    """
    Create a new practice session with problems

    TODO: Implement session creation
    Requirements:
    - Generate problem set using generate_problem_set()
    - Create Session object with problems
    - For MVP: might not need database, could return for client-side storage
    - For full version: save to database and return session_id

    Example:
    problems = generate_problem_set(
        mode=session_data.mode,
        count=session_data.problems_count,
        max_number=session_data.max_number
    )

    session = Session(
        mode=session_data.mode,
        max_number=session_data.max_number,
        problems_count=session_data.problems_count,
        started_at=datetime.utcnow(),
        problems=[create_attempt_from_problem(p) for p in problems]
    )

    # TODO: Save to database
    # return saved session
    """
    pass


def submit_answer(
    session_id: int,
    problem_index: int,
    user_answer: int,
) -> Session:
    """
    Process user's answer for a problem in the session

    TODO: Implement answer submission
    Requirements:
    - Fetch session from database (or client state for MVP)
    - Validate answer using problem_service.validate_answer()
    - Update the problem attempt with user_answer, is_correct, attempted_at
    - Increment problems_attempted counter
    - Increment problems_correct if correct
    - Save updated session
    - Return updated session
    """
    pass


def complete_session(session_id: int) -> Session:
    """
    Mark session as complete and finalize stats

    TODO: Implement session completion
    Requirements:
    - Fetch session from database
    - Set completed_at timestamp
    - Ensure all stats are calculated (problems_attempted, problems_correct)
    - Save session
    - Return completed session for summary display
    """
    pass


def get_session(session_id: int) -> Session:
    """
    Retrieve a session by ID

    TODO: Implement session retrieval
    Requirements:
    - Query database by session_id
    - Include all related problem attempts
    - Return Session object
    - Raise 404 if not found
    """
    pass
