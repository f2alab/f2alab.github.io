'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c40da5a3f367d0eff41545377203ac29",
"assets/AssetManifest.bin.json": "4e60b48412c7d61ad5c342452db7e6e8",
"assets/AssetManifest.json": "ef70bb0952ce12c26a84a0644f206ecd",
"assets/assets/fonts/jost_bold.ttf": "76eb83c74dcd2522b10cf958893d3182",
"assets/assets/fonts/jost_bolditalic.ttf": "0f2cc11068d98a81e1436fc4286229af",
"assets/assets/fonts/jost_italic.ttf": "2302db2d0563c508e40a966b37e210c8",
"assets/assets/fonts/jost_regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/assets/fonts/laila_bold.ttf": "b01f5ca7bb96162721379ce505358b34",
"assets/assets/fonts/laila_regular.ttf": "b51616787590e61c0198962dfd3872ca",
"assets/assets/fonts/outfit_bold.ttf": "c878bcb88f0e62bf70bd3129efb099ae",
"assets/assets/fonts/outfit_light.ttf": "905f109c79bd9683fc22eaffe4808ffe",
"assets/assets/fonts/outfit_regular.ttf": "9f444021dd670d995f9341982c396a1d",
"assets/assets/fonts/outfit_variable_weight.ttf": "2ae0c727dcda849692792f9c99bbfa2c",
"assets/assets/fonts/philosopher_bold.ttf": "8c1d45b95e683ac107f6dc53444b19c6",
"assets/assets/fonts/philosopher_bolditalic.ttf": "c45d7dc43804f2d63c949cfe31af59aa",
"assets/assets/fonts/philosopher_italic.ttf": "72aa376558426fe13071a55fbaf2acf5",
"assets/assets/fonts/philosopher_regular.ttf": "af6ea62714f4dc4aff98b14cc8ff23db",
"assets/assets/fonts/sabonltpaneuropean_bold.ttf": "24e8f0494cafe06ee353cb64b14b5308",
"assets/assets/fonts/sabonltpaneuropean_bolditalic.ttf": "a4225d3f76eed3b7aec0f639d12e60d9",
"assets/assets/fonts/sabonltpaneuropean_italic.ttf": "c3f8a3e09c5f7d4bd4017fdd071b8862",
"assets/assets/fonts/sabonltpaneuropean_regular.ttf": "bd154763d101fe9954fff49a925745c1",
"assets/assets/fonts/ysabeauoffice_bold.ttf": "ad9460b80a31851e54bd3724a7ab6636",
"assets/assets/fonts/ysabeauoffice_bolditalic.ttf": "0da9a15c13b647297fe06c9ee2e958ca",
"assets/assets/fonts/ysabeauoffice_italic.ttf": "ef1a349817f0cf01fed96c93acab6453",
"assets/assets/fonts/ysabeauoffice_regular.ttf": "e2b5f26b713d7f634c9b5de97cd76281",
"assets/assets/icon/foreground_icon.png": "4ed2c888586ef4a9156e217ea2cf23ae",
"assets/assets/icon/icon.png": "4ed2c888586ef4a9156e217ea2cf23ae",
"assets/assets/images/logo.png": "ccf91e98578964c9145bb14abd505892",
"assets/assets/images/logo.svg": "597a465b23d5f1447395fe5d26a1d4cf",
"assets/assets/images/no_image.png": "d39ecec55e090d1106cc4ceb20708ed2",
"assets/FontManifest.json": "a2b0c9e14ff88bf6df69a2091d0b742f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7319f7f64d85b24950f8945d3a5b1c00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "033b573b1cd75f36b0b99150b8d7a6c8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61ce0011e2760870e9edab98471a77e7",
"/": "61ce0011e2760870e9edab98471a77e7",
"main.dart.js": "06cc809909af0c5bbccd4669967b9183",
"manifest.json": "e30aecdea68a1abaeac1d4819e7f187c",
"version.json": "d55e963b7424e87665f195f8284bb567"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
