# Clarity — News verification app

A small React + Vite frontend for verifying news using AI and external news sources. The app provides a chat interface where you can paste a news URL or an article excerpt and receive a trust analysis, highlighted claims and evidence links.

This repository contains the frontend (React + TypeScript + Vite) and integrates with a backend service responsible for news lookups and LLM analysis. Authentication and session handling use Firebase.

---

## Features

- Chat-style UI for verifying news articles or article text
- Supports both URL input and pasted article text
- Trust score, highlighted claims and source links (from backend)
- Session management via Firebase
- Responsive UI built with Tailwind CSS

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- Firebase (Auth, realtime/session handling)
- Backend: Python services deployed on Google Cloud Run
- Gemini-2.5-Flash (LLM) for analysis and summarization
- World News API for aggregated news metadata

## Quick start (Windows / PowerShell)

1. Clone the repo

```powershell
git clone <repo-url>
cd news-fake-app
```

2. Install dependencies

```powershell
npm install
```

3. Environment variables

Create a `.env` file in the project root. Vite loads variables prefixed with `VITE_`.

Example `.env`:

```text
VITE_URL_SERVER=http://localhost:3000
# Add your Firebase config values if you use environment-driven config
```

Note: Firebase initialization happens in `src/utils/firebaseConfig.ts`. Edit that file to add your Firebase project values (apiKey, authDomain, projectId, etc.) or wire them from env variables as needed.

4. Run the app (development)

```powershell
npm run dev
```

Open the address shown by Vite (usually http://localhost:5173).

5. Build for production

```powershell
npm run build
```

6. Preview the production build locally

```powershell
npm run preview
```

## Important files & folders

- `src/main.tsx` — app entry point
- `src/routes.tsx` — React Router config
- `src/pages/` — pages (chat, landing, login)
- `src/components/` — reusable UI components
- `src/hooks/` — custom hooks (e.g. `useSession`, `useHistoryChat`)
- `src/services/` — API wrappers (e.g. `chatService.ts`)
- `src/utils/firebaseConfig.ts` — Firebase initialization

## Backend expectations

The frontend expects a backend service with the following endpoints (see `src/services/chatService.ts`):

- `POST /start` — start a chat or append a message
- `GET /sessions` — list chat sessions
- `GET /sessions/:id/history` — retrieve conversation history

The LLM (Gemini) and news lookups are handled server-side. Ensure your backend is reachable from `VITE_URL_SERVER` and supports CORS for your frontend origin.

## Troubleshooting

- **CORS or network errors**: verify `VITE_URL_SERVER` points to the running backend and that the backend allows your origin.
- **Firebase auth issues**: ensure `src/utils/firebaseConfig.ts` contains valid Firebase credentials.
- **Session/redirect issues**: ensure `SessionProvider` is mounted at the app root (it should wrap the Router).

## Contributing

1. Fork the repo and create a feature branch
2. Implement changes and add tests if applicable
3. Open a pull request with a description of the change

## License

MIT

---

If you want, I can:

- add an example `.env.example` file with recommended keys
- add a short Firebase setup snippet showing where to paste config values
- include screenshots or a demo GIF in this README

Tell me which addition you prefer and I will add it.
