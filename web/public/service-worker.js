
self.addEventListener('install', event => { event.waitUntil(caches.open('gasec-v1').then(c=>c.addAll(['/','/index.html','/login.html']))) })
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request))) })
