// Finance Pro • By K-dev
// Neutral Service Worker (Safe)

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
