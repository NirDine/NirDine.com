self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('parallax-store').then((cache) => cache.addAll([
        'img/parallax/art/parallax1.png/',
        'img/parallax/art/parallax2.png/',
        'img/parallax/art/parallax3.png/',     'img/parallax/art/parallax4.png/',     'img/parallax/art/parallax5.png/',     'img/parallax/art/parallax6.webp/',     'img/parallax/art/parallax7.webp/',     'img/parallax/art/parallax8.webp/',     'img/parallax/art/parallax9.webp/',     'img/parallax/art/parallax10.webp/',     'img/parallax/art/parallax11.webp/'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});