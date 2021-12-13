// Service worker 
/*
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "sw.js",
                "manifest.json",
                "index.html",
                "./src/",
                "./src/index.js", 
                "./src/master.css",
                "./images/",
                "./images/vetter_solutions_129.png",
                "./images/vetter_solutions_512.png",
                ]);
        })
    );
});

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "sw.js",
                "manifest.json",
                "index.html",
                "./src/",
                "./src/index.js", 
                "./src/master.css",
                "./images/",
                "./images/vetter_solutions_129.png",
                "./images/vetter_solutions_512.png",
                ]);
        })
    );
});


// Runs whenever there is a fetch request
// If there is an event listener for the fetch request, it means, that the application can be installed
self.addEventListener("fetch", e => {
    //console.log(`Intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request).catch(function (e){
                console.log('webserver is offline');
            });
        })
    );
});
*/

// test github sw
var APP_PREFIX = 'ApplicationName_'     // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = 'version_01'              // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [                            // Add URL you want to cache in this list.
  '/nico-eggert.github.io/',                     // If you have separate JS/CSS files,
  '/nico-eggert.github.io/index.html',            // add path to those files here
  '/nico-eggert.github.io/src/index.js',
  '/nico-eggert.github.io/src/master.css',
  '/nico-eggert.github.io/manifest.json',
  '/nico-eggert.github.io/images',
  '/nico-eggert.github.io/images/vetter_solutions_129.png',
  '/nico-eggert.github.io/images/vetter_solutions_512.png'

]

// Respond with cached resources
console.log("cached resources");

self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { // if cache is available, respond with cache
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {       // if there are no cache, try fetching request
        console.log('file is not cached, fetching : ' + e.request.url)
        return fetch(e.request)
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  )
})

// Cache resources
console.log("install resources");
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  )
})

// Delete outdated caches
console.log("delete resources");
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create white list
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})