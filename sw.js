// A simple service worker to satisfy PWA install requirements
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // We leave this empty so it doesn't interfere with your real-time Firebase sync
});
