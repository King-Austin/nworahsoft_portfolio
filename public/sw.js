const CACHE_NAME = 'nworahsoft-v1.0.0';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/vendor/bootstrap/css/bootstrap.min.css',
  '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
  '/assets/vendor/aos/aos.css',
  '/assets/js/main.js',
  '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
  '/assets/vendor/aos/aos.js',
  '/assets/img/logo.webp',
  '/assets/img/favicon-32x32.png',
  '/assets/img/apple-touch-icon.png',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('NworahSoft: Cache opened');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('NworahSoft: All resources cached');
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('NworahSoft: Cache install failed:', error);
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          console.log('NworahSoft: Serving from cache:', event.request.url);
          return response;
        }
        
        return fetch(event.request)
          .then(function(response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(function() {
            // Return offline page for navigation requests
            if (event.request.destination === 'document') {
              return caches.match('/offline.html');
            }
            
            // Return placeholder for images
            if (event.request.destination === 'image') {
              return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f85d23"/><text x="100" y="100" text-anchor="middle" fill="white" font-family="Arial" font-size="16">🇳🇬 NworahSoft</text></svg>', {
                headers: { 'Content-Type': 'image/svg+xml' }
              });
            }
          });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('NworahSoft: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('NworahSoft: Service worker activated');
      return self.clients.claim();
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', function(event) {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      handleOfflineFormSubmission()
    );
  }
});

function handleOfflineFormSubmission() {
  // Retrieve stored form data and submit when online
  return new Promise((resolve) => {
    // Implementation for handling offline form submissions
    console.log('NworahSoft: Handling offline form submission');
    resolve();
  });
}

// Push notification handler
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'New update from NworahSoft Technologies',
    icon: '/assets/img/android-chrome-192x192.png',
    badge: '/assets/img/favicon-32x32.png',
    vibrate: [200, 100, 200],
    data: {
      url: 'https://nworahsoft.com'
    },
    actions: [
      {
        action: 'view',
        title: 'View Website',
        icon: '/assets/img/favicon-32x32.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assets/img/favicon-32x32.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('NworahSoft Technologies 🇳🇬', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('https://nworahsoft.com')
    );
  }
});
