// Arquivo: sw.js (Salvar na raiz do projeto)
const CACHE_NAME = 'futuragro-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './monitoramento.html',
  './recomendacao.html',
  './programacao.html',
  './logo_futuragro.png',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

// Instala o Service Worker e armazena os arquivos em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Responde com o cache quando estiver offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});