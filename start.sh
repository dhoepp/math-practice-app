#!/bin/bash
cd backend && source venv/bin/activate && sleep 2 &&uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload&
cd frontend && npm run dev
