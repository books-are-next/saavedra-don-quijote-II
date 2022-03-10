/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-62a66a0';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./don_quijote_002.html","./don_quijote_003.html","./don_quijote_001.html","./don_quijote_004.html","./don_quijote_005.html","./don_quijote_006.html","./don_quijote_007.html","./don_quijote_008.html","./don_quijote_009.html","./don_quijote_010.html","./don_quijote_011.html","./don_quijote_012.html","./don_quijote_013.html","./don_quijote_014.html","./don_quijote_015.html","./don_quijote_016.html","./don_quijote_017.html","./don_quijote_018.html","./don_quijote_019.html","./don_quijote_020.html","./don_quijote_021.html","./don_quijote_022.html","./don_quijote_023.html","./don_quijote_024.html","./don_quijote_025.html","./don_quijote_026.html","./don_quijote_027.html","./don_quijote_028.html","./don_quijote_029.html","./don_quijote_030.html","./don_quijote_031.html","./don_quijote_032.html","./don_quijote_033.html","./don_quijote_034.html","./don_quijote_035.html","./don_quijote_036.html","./don_quijote_037.html","./don_quijote_038.html","./don_quijote_039.html","./don_quijote_040.html","./don_quijote_041.html","./don_quijote_042.html","./don_quijote_043.html","./don_quijote_044.html","./don_quijote_045.html","./don_quijote_046.html","./don_quijote_047.html","./don_quijote_048.html","./don_quijote_049.html","./don_quijote_050.html","./don_quijote_051.html","./don_quijote_052.html","./don_quijote_053.html","./don_quijote_054.html","./don_quijote_055.html","./don_quijote_056.html","./don_quijote_057.html","./don_quijote_058.html","./don_quijote_059.html","./don_quijote_060.html","./don_quijote_061.html","./don_quijote_062.html","./don_quijote_063.html","./don_quijote_064.html","./don_quijote_065.html","./don_quijote_066.html","./don_quijote_067.html","./don_quijote_068.html","./don_quijote_069.html","./don_quijote_070.html","./don_quijote_071.html","./don_quijote_072.html","./don_quijote_073.html","./don_quijote_074.html","./don_quijote_075.html","./don_quijote_076.html","./don_quijote_077.html","./don_quijote_078.html","./don_quijote_079.html","./don_quijote_080.html","./don_quijote_081.html","./don_quijote_082.html","./don_quijote_083.html","./don_quijote_084.html","./don_quijote_085.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001_fmt.png","./resources/image002_fmt.png","./resources/obalka_don_quijote_ii_fmt.png","./resources/obr1.jpg","./resources/obr2.jpg","./resources/upoutavka_eknihy_fmt.png","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
