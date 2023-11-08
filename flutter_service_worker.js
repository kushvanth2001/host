'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b48c205970f0e1e32ad47263761fb8b2",
"assets/AssetManifest.json": "6b6f1f417d78c4a0338618ab4b300975",
"assets/assets/design/images/basil-instagram-solid.png": "99f78d300018523ab8229429fdb2ae8d",
"assets/assets/design/images/blueberry-2.png": "94d0e6c2c6c06ee387ee890c99b5e31d",
"assets/assets/design/images/cabbage.png": "a7d506b9f1bccae9a27fbb48178f17bb",
"assets/assets/design/images/carrot.png": "09a2aa2f3f92772fc108a3d91b1d1732",
"assets/assets/design/images/clients.png": "ea7baf4a2a3bf8b4ff8e456f6a847f4b",
"assets/assets/design/images/eggplant.png": "75e1edf22e813c9fe047bc8206565837",
"assets/assets/design/images/ellipse-13-bg.png": "62e3aa585b4d50e81433efb2ec30a1bc",
"assets/assets/design/images/farmerallylogo.png": "523cb6bd32d393d7602cf05d5a4d56ee",
"assets/assets/design/images/fontisto-quote-right.png": "5e77046ca20643a9975af9d94b3a1aa6",
"assets/assets/design/images/growth-1-ECZ.png": "b8284d63b5fc7f9028c88478f37715f0",
"assets/assets/design/images/growth-1.png": "b8284d63b5fc7f9028c88478f37715f0",
"assets/assets/design/images/icon-strawberry.png": "a59abf5013e072cb1c6f77743bb574e1",
"assets/assets/design/images/icon.png": "24bff5300987fbe3ad6c7a35062e7678",
"assets/assets/design/images/iconapple.png": "332b4dddfa244edf027d240eb5337f15",
"assets/assets/design/images/image-11-bg.png": "6177435cb8384062c9aa0c5be8e7ffed",
"assets/assets/design/images/image-12.png": "b7d19a2a7ef2bfe8aaee623fca4141c4",
"assets/assets/design/images/image-13.png": "e5d98d534e1d9c48e8c4f590b6630ae3",
"assets/assets/design/images/image-18.png": "c0fcd0c03eb2ac887a062ae1f2fa586e",
"assets/assets/design/images/image-20.png": "d52e7def34a32741b9295922eb5f04dc",
"assets/assets/design/images/image-21.png": "4a2851e920cbac0b90a68ba635e085ee",
"assets/assets/design/images/image-26-bg-KMT.png": "0b2368a6dac6c285af1960cd3b28c228",
"assets/assets/design/images/image-26-bg-ygD.png": "ff545b4f0a4780d7eec7ea6158b14234",
"assets/assets/design/images/image-26-bg.png": "52a3179b6d3006343dbd159b0c3f2f24",
"assets/assets/design/images/image-5.png": "1ff146fd408b331d371872b4cb575367",
"assets/assets/design/images/image-6.png": "1a2f6e6e7e194269574c859a45140cdf",
"assets/assets/design/images/image-bg-fcM.png": "e27ed4905e3970bf4e02d6bd3eb7a693",
"assets/assets/design/images/image-bg.png": "b20c2447b4e188766ddd8cf4cf56d57e",
"assets/assets/design/images/logo-NG9.png": "afdc75712aa210ec1cc70a1456df6b23",
"assets/assets/design/images/logo.png": "afdc75712aa210ec1cc70a1456df6b23",
"assets/assets/design/images/material-symbols-check-circle-3hj.png": "056fc2986af85c393edb311dacf1ae29",
"assets/assets/design/images/material-symbols-check-circle-JpZ.png": "056fc2986af85c393edb311dacf1ae29",
"assets/assets/design/images/material-symbols-check-circle.png": "056fc2986af85c393edb311dacf1ae29",
"assets/assets/design/images/material-symbols-line-start-arrow-notch.png": "b360bcec8a4f348e5f55f2425575c310",
"assets/assets/design/images/mdi-twitter.png": "be313b61d24317877ed8f0afbd35223a",
"assets/assets/design/images/mdi-youtube.png": "cba0269fa17ba5cbff44c6101a19a5cb",
"assets/assets/design/images/message-circle-9Xo.png": "63d4769bd6879ac002567dcc2367b51f",
"assets/assets/design/images/message-circle-NED.png": "382b2426b630f3ffcfa8847a158783cd",
"assets/assets/design/images/message-circle.png": "382b2426b630f3ffcfa8847a158783cd",
"assets/assets/design/images/play-btn-2.png": "9db1edaa7430b643fd52584bb413b033",
"assets/assets/design/images/ri-facebook-fill.png": "599b66c04a9ccfd4c9094fb9ff52419e",
"assets/assets/design/images/style-bg.png": "42ab402ed7ca215c5e7bb22216033572",
"assets/assets/design/images/style-hE1.png": "5b572615840f1b34a02c7b86701cd4f8",
"assets/assets/design/images/style-Xsf.png": "c412fe579b61ebed902179600f33dac2",
"assets/assets/design/images/style.png": "f3e63f9822b3ecf69188dc89fd7b1e55",
"assets/assets/design/images/underline01.png": "9056458ecc409446c95cd701cf7f225b",
"assets/assets/design/images/user-aTb.png": "b162a53a3cb783004128ce641f3a17aa",
"assets/assets/design/images/user-en5.png": "7c0086af11b38509e99bf23de1b3bcb0",
"assets/assets/design/images/user.png": "cb41180f06e9f98a4dbb57ad30a61099",
"assets/assets/design/images/vegetables-1-1.png": "44745f2ab653e1187f9da00dda200c55",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "24b63c3e9fc56dbcdddedd6fae23565a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "523cb6bd32d393d7602cf05d5a4d56ee",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e1b71fe13e3193b456ba6f914efc343",
"/": "3e1b71fe13e3193b456ba6f914efc343",
"main.dart.js": "2f11bd152e9ccc7bdde38980b5b83493",
"manifest.json": "c51e01f23b70c3a84da60af9a4357166",
"version.json": "423bdee675a1180174be2316b7631375"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
