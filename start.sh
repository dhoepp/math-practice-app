#!/bin/bash
cd backend && source venv/bin/activate || sleep 2 
pip install -r requirements.txt || pip3 install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

