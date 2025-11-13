# Math Practice App - Backend

FastAPI backend for the 1st grade math practice application.

## Setup

### Prerequisites

- Python 3.11 or higher
- pip

### Installation

```bash
# Install dependencies
pip install -r requirements.txt
```

## Running the Server

### Development Mode

```bash
# From the backend directory
uvicorn app.main:app --reload

# Or run directly
python -m app.main
```

The API will be available at:

- API: <http://localhost:8000>
- Interactive API docs (Swagger): <http://localhost:8000/docs>
- Alternative API docs (ReDoc): <http://localhost:8000/redoc>

## API Endpoints

### Health Check

- `GET /` - Basic health check
- `GET /health` - Detailed health check

### Problems (TODO)

- `POST /api/problems/generate` - Generate a random math problem
- `POST /api/problems/validate` - Validate user's answer

### Sessions (TODO)

- `POST /api/sessions` - Create a new practice session
- `GET /api/sessions/{session_id}` - Get session details
- `POST /api/sessions/{session_id}/submit` - Submit answer for a problem
- `POST /api/sessions/{session_id}/complete` - Complete session and get summary

## Database

Using SQLite for MVP. Database file will be created at `math_practice.db` in the backend directory.

TODO: Set up database initialization and migrations.

## Testing

```bash
# Test add/subtract problem generator
python cli_practice.py

# Run all tests 
pytest

# Run with coverage
pytest --cov=app tests/
```

## Project Structure

```plain
backend/
├── app/
│   ├── __init__.py
│   ├── main.py           # FastAPI app entry point
│   ├── models/           # Database models and schemas
│   ├── routes/           # API endpoints
│   ├── services/         # Business logic
│   └── utils/            # Helper functions
├── tests/                # Test files
├── requirements.txt      # Python dependencies
└── README.md            # This file
```

## Development Notes

- Keep functions small (<20 lines)
- Use type hints everywhere
- Comment the "why" not the "what"
- Test with frontend on iPad to ensure CORS is working
- For MVP, focus on getting one feature working end-to-end before adding more
