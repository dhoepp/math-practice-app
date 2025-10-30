"""
Database connection and session management
"""

# TODO: Set up SQLAlchemy/SQLModel database connection
# Example structure:
#
# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker
# from sqlmodel import SQLModel
#
# DATABASE_URL = "sqlite:///./math_practice.db"
#
# engine = create_engine(
#     DATABASE_URL,
#     connect_args={"check_same_thread": False}  # Needed for SQLite
# )
#
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
#
# def create_db_and_tables():
#     """Create all database tables"""
#     SQLModel.metadata.create_all(engine)
#
# def get_db():
#     """Dependency for getting database session"""
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
