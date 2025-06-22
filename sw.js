// ===== SERVICE WORKER =====
// Acme Tech Website - Progressive Web App

const CACHE_NAME = 'acme-tech-v2.0';
const STATIC_CACHE = 'acme-static-v2.0';
const DYNAMIC_CACHE = 'acme-dynamic-v2.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/img/logo_acme.png',
  '/img/fondo_tech.png',
  '/html/servicios.html',
  '/html/quienes_somos.html',
  '/html/contacto.html',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Error caching static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (url.origin === self.location.origin) {
    // Same-origin requests
    event.respondWith(handleSameOriginRequest(request));
  } else if (url.origin === 'https://fonts.googleapis.com' || 
             url.origin === 'https://fonts.gstatic.com' ||
             url.origin === 'https://cdnjs.cloudflare.com') {
    // External resources (fonts, CDN)
    event.respondWith(handleExternalRequest(request));
  } else {
    // Other external requests
    event.respondWith(fetch(request));
  }
});

// Handle same-origin requests
async function handleSameOriginRequest(request) {
  try {
    // Try to serve from cache first
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      // Update cache in background
      updateCacheInBackground(request);
      return cachedResponse;
    }

    // If not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Error handling same-origin request:', error);
    
    // Return offline page for navigation requests
    if (request.destination === 'document') {
      return caches.match('/index.html');
    }
    
    throw error;
  }
}

// Handle external requests (fonts, CDN)
async function handleExternalRequest(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }

    // Fetch from network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Error handling external request:', error);
    throw error;
  }
}

// Update cache in background
async function updateCacheInBackground(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response);
    }
  } catch (error) {
    console.error('Service Worker: Background cache update failed:', error);
  }
}

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(handleBackgroundSync());
  }
});

// Handle background sync
async function handleBackgroundSync() {
  try {
    // Get stored form data
    const formData = await getStoredFormData();
    
    if (formData) {
      // Process stored form submissions
      for (const data of formData) {
        await processFormSubmission(data);
      }
      
      // Clear stored data
      await clearStoredFormData();
    }
  } catch (error) {
    console.error('Service Worker: Background sync failed:', error);
  }
}

// Store form data for offline processing
async function storeFormData(formData) {
  try {
    const storedData = await getStoredFormData();
    storedData.push({
      id: Date.now(),
      data: formData,
      timestamp: new Date().toISOString()
    });
    
    localStorage.setItem('offlineForms', JSON.stringify(storedData));
  } catch (error) {
    console.error('Service Worker: Error storing form data:', error);
  }
}

// Get stored form data
async function getStoredFormData() {
  try {
    const data = localStorage.getItem('offlineForms');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Service Worker: Error getting stored form data:', error);
    return [];
  }
}

// Process form submission
async function processFormSubmission(formData) {
  try {
    // Simulate form processing
    console.log('Service Worker: Processing form submission:', formData);
    
    // Here you would typically send the data to your server
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData.data)
    // });
    
    return true;
  } catch (error) {
    console.error('Service Worker: Error processing form submission:', error);
    return false;
  }
}

// Clear stored form data
async function clearStoredFormData() {
  try {
    localStorage.removeItem('offlineForms');
  } catch (error) {
    console.error('Service Worker: Error clearing stored form data:', error);
  }
}

// Push notification handling
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva notificación de Acme Tech',
    icon: '/img/logo_acme.png',
    badge: '/img/logo_acme.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver más',
        icon: '/img/logo_acme.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/img/logo_acme.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Acme Tech', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling from main thread
self.addEventListener('message', event => {
  console.log('Service Worker: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'STORE_FORM_DATA') {
    storeFormData(event.data.formData);
  }
});

// Error handling
self.addEventListener('error', event => {
  console.error('Service Worker: Error occurred:', event.error);
});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', event => {
  console.error('Service Worker: Unhandled rejection:', event.reason);
}); 