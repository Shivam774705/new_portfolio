// Auto-detect production vs local development using the runtime hostname.
// This is bulletproof: Vite .env.production is unreliable on some hosts.
const isProduction =
  typeof window !== 'undefined' &&
  window.location.hostname !== 'localhost' &&
  window.location.hostname !== '127.0.0.1';

export const API = isProduction
  ? 'https://new-portfolio-6ove.onrender.com'   // live backend
  : 'http://localhost:5000';                     // local backend