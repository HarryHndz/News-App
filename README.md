<!-- prettier-ignore -->
# Clarity — News verification app

A lightweight React + Vite frontend that helps you verify news articles using AI and external sources. Paste a news URL or article text in the chat and get a trust analysis, highlighted claims and evidence links.

<!-- Quick visual summary -->
> Built with React + TypeScript, styled with Tailwind CSS, and using Firebase for auth. The heavy lifting (news lookups + LLM analysis) runs on a backend service.

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Quick start (Windows / PowerShell)](#quick-start-windows--powershell)
- [Environment variables (.env.example)](#environment-variables-envexample)
- [Firebase setup snippet](#firebase-setup-snippet)
- [Project structure](#project-structure)
- [Backend expectations](#backend-expectations)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Chat-style interface for verifying news articles or pasted article text
- Accepts both article URLs and raw text input
- Shows a trust verdict, highlighted claims and source links (provided by the backend)
- Session-based chats (Firebase auth + per-session history)
- Responsive UI powered by Tailwind CSS

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- Firebase Authentication
- Backend: Python services (deployed to Google Cloud Run)
- LLM: Gemini-2.5-Flash (server-side)
- World News API (aggregated news metadata)

---

## Quick start (Windows / PowerShell)

1. Clone the repository

```powershell
git clone <repo-url>
cd news-fake-app
```

2. Install dependencies

```powershell
npm install
```

3. Create a `.env` file (see example below)

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

---

## Environment variables (.env.example)

Create a file named `.env` in the project root (Vite loads variables prefixed with `VITE_`).

Example `.env.example` (copy to `.env` and edit values):

```text
VITE_URL_SERVER=http://localhost:3000
# Optional: if you place Firebase config in env vars, add them here
# VITE_FIREBASE_API_KEY=...
# VITE_FIREBASE_AUTH_DOMAIN=...
# VITE_FIREBASE_PROJECT_ID=...
```

If you prefer, I can create a `.env.example` file in the repo — tell me and I will add it.

---

## Firebase setup snippet

This project initializes Firebase in `src/utils/firebaseConfig.ts`. A minimal snippet you can paste into that file (or wire from env vars):

```ts
// src/utils/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.VITE_FIREBASE_API_KEY ?? '<your-api-key>',
	authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN ?? '<your-auth-domain>',
	projectId: process.env.VITE_FIREBASE_PROJECT_ID ?? '<your-project-id>',
	// ...other values
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
```

Replace the placeholders with your Firebase project values (or add them to `.env` and keep secrets out of the repo).

---

## Project structure (high level)

- `src/main.tsx` — app entry point
- `src/routes.tsx` — React Router configuration
- `src/pages/` — pages (chat, landing, login)
- `src/components/` — reusable UI components (Header, Chat, Message, Input)
- `src/hooks/` — custom hooks (e.g. `useSession`, `useHistoryChat`)
- `src/services/` — API wrappers (`chatService.ts`)
- `src/utils/firebaseConfig.ts` — Firebase initialization

---

## Backend expectations

The frontend expects a backend service with these endpoints (see `src/services/chatService.ts`):

- `POST /start` — start a chat or append a message
- `GET /sessions` — list chat sessions
- `GET /sessions/:id/history` — retrieve conversation history

The backend is responsible for news lookups and LLM analysis (Gemini). Make sure `VITE_URL_SERVER` points to a reachable backend and that CORS is configured to allow the frontend origin.

---

## Troubleshooting

- CORS or network errors: verify `VITE_URL_SERVER` and backend CORS headers.
- Firebase auth errors: ensure `src/utils/firebaseConfig.ts` has valid credentials.
- Session/redirect problems: ensure `SessionProvider` is wrapped at the app root (it should wrap the Router).
- Duplicate messages on first message: the app uses a ref-based guard to avoid immediate duplicate fetches when a session is created — if you still see duplicates, check `src/hooks/useHistoryChat.ts`.

If you run into an issue and want me to inspect logs or specific files, tell me which flow is failing and I'll debug it.

---

## Contributing

1. Fork the repo and create a feature branch
2. Implement changes, add tests where relevant
3. Open a pull request describing your change

Small contribution ideas:

- Add `.env.example` to the repo
- Add screenshots or a short demo GIF to the README
- Improve message parsing (markdown support, richer link previews)

---

## License

MIT

---

If you want, I can also:

- add a `.env.example` file to the repo now
- include a small set of screenshots or a demo GIF (you can attach images)
- create a short `DEPLOY.md` describing how to deploy the backend to Cloud Run

Tell me which of those you want next and I will add it.
