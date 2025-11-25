"""
FastAPI application entry point
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import problems, sessions

app = FastAPI(
    title="Math Practice API",
    description="Backend API for 1st grade math practice app",
    version="0.1.0",
)

# TODO: Configure CORS properly for your frontend URL
# For development, allowing all origins is fine
# For production, restrict to your frontend domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: Update in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Health check endpoint"""
    return {"status": "ok", "message": "Math Practice API is running"}


@app.get("/health")
async def health_check():
    """Detailed health check"""
    # TODO: Add database connection check
    return {
        "status": "healthy",
        "version": "0.1.0",
        "database": "not_implemented",
    }


# TODO: Include routers for different endpoints
app.include_router(problems.router, prefix="/api/problems", tags=["problems"])
# app.include_router(sessions.router, prefix="/api/sessions", tags=["sessions"])


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
