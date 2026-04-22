// In dev: reads from .env (localhost:5000)
// In production build: reads from .env.production (live Render URL)
export const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';