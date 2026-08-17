const CACHE = 'edris-education-v1-1';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/app.css",
  "./assets/js/content.js",
  "./assets/js/app.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/images/content/exercise-jogging.webp",
  "./assets/images/content/food-belacan.webp",
  "./assets/images/content/food-budu.webp",
  "./assets/images/content/food-cube.webp",
  "./assets/images/content/food-mikari.webp",
  "./assets/images/content/food-murtabak.webp",
  "./assets/images/content/food-sardin.webp",
  "./assets/images/content/food-seasoning.webp",
  "./assets/images/content/food-tomyam.webp",
  "./assets/images/content/kidney-diagram.webp",
  "./assets/images/content/natural-seasoning.webp",
  "./assets/images/content/salt-bowl.webp",
  "./assets/images/content/smoking-kidney.webp",
  "./assets/images/content/vascular-access.webp",
  "./assets/images/content/vascular-handwash.webp",
  "./assets/images/topics/ckd.webp",
  "./assets/images/topics/dialysis.webp",
  "./assets/images/topics/exercise.webp",
  "./assets/images/topics/nutrition.webp",
  "./assets/images/topics/smoking.webp",
  "./assets/images/topics/spiritual.webp"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
