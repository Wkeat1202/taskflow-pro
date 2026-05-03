# TaskFlow Pro

A team task management SaaS with real-time collaboration

## Stack
- **Frontend**: Next.js 14 + React 18 + Tailwind CSS
- **Backend**: Firebase Auth + Firestore + Storage
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

## Quick Start

```bash
npm install
cp .env.example .env.local
# Fill Firebase credentials in .env.local
npm run dev
```

> Never commit real credentials. Use .env.local locally and GitHub Secrets for CI/CD.