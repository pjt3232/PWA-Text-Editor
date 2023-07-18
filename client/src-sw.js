const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute, NavigationRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

//precaching static assets
precacheAndRoute(self.__WB_MANIFEST);

//function to set up page cache
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

//function to set up cache for other assets
const assetsCache = new StaleWhileRevalidate({
  cacheName: 'assets-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200]
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 7*24*60*60
    }),
  ],
})

//function to precache the service worker when it's installed so that it is immediately available
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

//register routes for navigate, style, script, and worker using request.destination
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  assetsCache
);

//function to handle offline feedback
async function handleOfflineFallback ({ event }) {
  try {
    return await pageCache.handle({ event });
  } catch (error) {
    return caches.match('/offline.html');
  }
}

//use a navigation route for offline feedback
const navigationRoute = new NavigationRoute(handleOfflineFallback);
registerRoute(navigationRoute);

//adds offline.html to your cache during install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(pageCache.cacheName).then((cache) => cache.add('/offline.html'))
  );
});

registerRoute();