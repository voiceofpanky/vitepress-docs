<!-- # STEMSpark4Kids Developer Guide

STEMSpark4Kids is a learning platform with a React frontend and a FastAPI backend. This guide covers the local development workflow and the project structure.

For a screen-by-screen explanation of the application, see the [User guide](/user-guide).

## Prerequisites

- Node.js and npm
- Python 3.11 or newer
- MongoDB running locally on port `27017`
- VS Code with the Python extension and Pylance

## Start the frontend

From the `frontend` directory:

```bash
npm install
npm start
```

The React application runs at `http://localhost:3000`.

## Start the backend

Create and activate the backend virtual environment, then install its dependencies:

```powershell
cd ../backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Start the API with:

```bash
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
```

The API is available at `http://localhost:8000/api/`. Its health endpoint is `http://localhost:8000/api/health`.

## Project structure

| Path | Purpose |
| --- | --- |
| `frontend/src/App.js` | Frontend application routing and composition |
| `frontend/src/pages` | Route-level screens |
| `frontend/src/components` | Shared React components |
| `frontend/src/lib` | API, authentication, and curriculum helpers |
| `backend/server.py` | FastAPI application entrypoint |
| `backend/tests` | Backend tests |
| `frontend/docs` | This VitePress documentation site |

## Common commands

Run these from `frontend`:

| Command | Description |
| --- | --- |
| `npm start` | Start the React development server |
| `npm run build` | Create the production frontend and documentation builds |
| `npm run build:docs` | Generate the static VitePress documentation site |
| `npm test` | Run the frontend test runner |
| `npm run doc` | Start the VitePress developer guide |

Open the documentation site at `http://localhost:5173` after running `npm run doc`.

## Configuration

Frontend environment variables use the `REACT_APP_` prefix. For Google authentication, create `frontend/.env` with:

```env
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
```

Backend environment variables are loaded from `backend/.env`. At minimum, configure the MongoDB connection, database name, CORS origins, and JWT secret for local development.

## Testing the backend

From the `backend` directory, with the virtual environment activated:

```bash
pytest
```

For a quick API check:

```bash
curl http://localhost:8000/api/health
```

The expected response is:

```json
{"status":"ok"}
```

## Updating this guide

Edit Markdown files under `frontend/docs`. VitePress reloads the page while `npm run doc` is running. Add new pages to the sidebar in `frontend/docs/.vitepress/config.js`. -->