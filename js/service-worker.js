const cacheName = 'nirdine-v1';
const appShellFiles = [
    './',
    './index.html',
    './css/reset.css',
    './css/structure.css',
    './css/theme.css',
    './css/desktop-sm.css',
    './css/desktop-md.css',
    './js/observers.js',
    './js/parallax.js',
    './js/jquery-3.6.0.min.js',
    './slick/slick.ajax-loader.gif',
    './slick/slick.css',
    './slick/slick.min.js',
    './slick/config.rb',
    './img/art/stars.webp',
    './img/art/twinkling.webp',
    './img/art/parallax/no-parallax.png',
    './img/art/parallax/parallax1.png',
    './img/art/parallax/parallax2.png',
    './img/art/parallax/parallax3.png',
    './img/art/parallax/parallax4.png',
    './img/art/parallax/parallax5.png',
    './img/art/parallax/parallax6.webp',
    './img/art/parallax/parallax7.webp',
    './img/art/parallax/parallax8.webp',
    './img/art/parallax/parallax9.webp',
    './img/art/parallax/parallax10.webp',
    './img/art/parallax/parallax11.webp',
    './img/buttons/close.svg',
    './img/buttons/close-dark.svg',
    './img/buttons/close-contrast.svg',
    './img/buttons/menu.svg',
    './img/buttons/menu-dark.svg',
    './img/buttons/menu-contrast.svg',
    './img/buttons/play.svg',
    './img/buttons/play-dark.svg',
    './img/buttons/pause.svg',
    './img/buttons/pause-dark.svg',
    './img/buttons/moon.svg',
    './img/buttons/sun.svg',
    './img/favicon/android-chrome-192x192.png',
    './img/favicon/android-chrome-512x512.png',
    './img/favicon/apple-touch-icon.png',
    './img/favicon/favicon.ico',
    './img/favicon/favicon-16x16.png',
    './img/favicon/favicon-32x32.png',
    './img/favicon/mstile-150x150.png',
    './img/favicon/safari-pinned-tab.svg',
    './img/logo/avatar.png',
    './img/products/doors.webp',
    './img/products/prophecies.webp',
    './img/products/personality.webp',
    './img/products/ghastly.webp',
    './img/socials/discord.svg',
    './img/socials/twitter.svg',
    './img/socials/patreon.svg'
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(appShellFiles);
  })());
});


self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key === cacheName) { return; }
      return caches.delete(key);
    }))
  }));
});