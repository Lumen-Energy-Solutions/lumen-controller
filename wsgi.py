# wsgi.py
from src.api_server import app

if __name__ == "__main__":
    app.run()