/*
// Service worker 
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "master.css",
                "sw.js",
                "manifest.json",
                "index.html",
                "./css/",
                "./css/bootstrap.min.css",
                "./css/bootstrap.min.css.map",
                "./js/",
                "./js/bootstrap.bundle.min.js",
                "./js/bootstrap.bundle.min.js.map",
                "./js/brightness.js",
                "./js/connect.js",
                "./js/length.js",
                "./js/mode.js",
                "./js/XBee3.js",
                "./src/",
                "./src/index.js",
                "./images/",
                "./images/Flaggen/de.png",
                "./images/Flaggen/gb.png",
                "./images/Flaggen/us.png",
                "./images/Logo/vetter_solutions_129.png",
                "./images/Logo/vetter_solutions_512.png",
                "./images/335.png",
                "./images/335mm_transparent.png",
                "./images/635.png",
                "./images/635mm_transparent.png",
                "./images/935.png",
                "./images/935mm_transparent.png",
                "./images/1870.png",
                "./images/1870mm_transparent.png",
                "./images/bulb_eco_transparent.png",
                "./images/bulb_med_transparent.png",
                "./images/bulb_max_transparent.png",
                "./images/eco.png",
                "./images/greenstripe_transparent.png",
                "./images/greenstripe.png",
                "./images/M_transparent.png",
                "./images/M.png",
                "./images/marker_preview.png",
                "./images/redstripe_transparent.png",
                "./images/redstripe.png",
                "./images/redwhite.png",
                "./images/runninglight_1.png",
                "./images/runninglight_2.png",
                "./images/runninglight_empty.png",
                "./images/runninglight_transparent.png",
                "./images/save.png",
                "./fontawesome/", // TODO: durch eigene Images ersetzen
                "./html/",
                "./html/brightness.html",
                "./html/connect.html",
                "./html/length.html",
                "./html/mode.html",
            ]);
        })
    );
});
*/
/*
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

// test of sw for github webpage
// test github sw
var APP_PREFIX = 'ApplicationName_'     // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = 'version_0.03'              // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [                            // Add URL you want to cache in this list.
    'https://nico-eggert.github.io/',                     // If you have separate JS/CSS files,
    'https://nico-eggert.github.io/master.css',        // add path to those files here
    'https://nico-eggert.github.io/sw.js',
    'https://nico-eggert.github.io/manifest.json',
    'https://nico-eggert.github.io/index.html',
    //'https://nico-eggert.github.io/css/',
    'https://nico-eggert.github.io/css/bootstrap.min.css',
    'https://nico-eggert.github.io/css/bootstrap.min.css.map',
    //'https://nico-eggert.github.io/js/',
    'https://nico-eggert.github.io/js/bootstrap.bundle.min.js',
    'https://nico-eggert.github.io/js/bootstrap.bundle.min.js.map',
    'https://nico-eggert.github.io/js/brightness.js',
    'https://nico-eggert.github.io/js/connect.js',
    'https://nico-eggert.github.io/js/length.js',
    'https://nico-eggert.github.io/js/mode.js',
    'https://nico-eggert.github.io/js/XBee3.js',
    //'https://nico-eggert.github.io/src/',
    'https://nico-eggert.github.io/src/index.js',
    //'https://nico-eggert.github.io/images/',
    'https://nico-eggert.github.io/images/Flaggen/de.png',
    'https://nico-eggert.github.io/images/Flaggen/gb.png',
    'https://nico-eggert.github.io/images/Flaggen/us.png',
    'https://nico-eggert.github.io/images/Logo/vetter_solutions_129.png',
    'https://nico-eggert.github.io/images/Logo/vetter_solutions_512.png',
    'https://nico-eggert.github.io/images/335.png',
    'https://nico-eggert.github.io/images/335mm_transparent.png',
    'https://nico-eggert.github.io/images/635.png',
    'https://nico-eggert.github.io/images/635mm_transparent.png',
    'https://nico-eggert.github.io/images/935.png',
    'https://nico-eggert.github.io/images/935mm_transparent.png',
    'https://nico-eggert.github.io/images/1870.png',
    'https://nico-eggert.github.io/images/1870mm_transparent.png',
    'https://nico-eggert.github.io/images/bulb_eco_transparent.png',
    'https://nico-eggert.github.io/images/bulb_med_transparent.png',
    'https://nico-eggert.github.io/images/bulb_max_transparent.png',
    'https://nico-eggert.github.io/images/eco.png',
    'https://nico-eggert.github.io/images/greenstripe_transparent.png',
    'https://nico-eggert.github.io/images/greenstripe.png',
    'https://nico-eggert.github.io/images/M_transparent.png',
    'https://nico-eggert.github.io/images/M.png',
    'https://nico-eggert.github.io/images/marker_preview.png',
    'https://nico-eggert.github.io/images/redstripe_transparent.png',
    'https://nico-eggert.github.io/images/redstripe.png',
    'https://nico-eggert.github.io/images/redwhite.png',
    'https://nico-eggert.github.io/images/runninglight_1.png',
    'https://nico-eggert.github.io/images/runninglight_2.png',
    'https://nico-eggert.github.io/images/runninglight_empty.png',
    'https://nico-eggert.github.io/images/runninglight_transparent.png',
    'https://nico-eggert.github.io/images/save.png',
    //'https://nico-eggert.github.io/fontawesome/', // TODO: durch eigene Images ersetzen
    //'https://nico-eggert.github.io/html/',
    'https://nico-eggert.github.io/html/brightness.html',
    'https://nico-eggert.github.io/html/connect.html',
    'https://nico-eggert.github.io/html/length.html',
    'https://nico-eggert.github.io/html/mode.html',
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
                    console.log('deleting cache : ' + keyList[i])
                    return caches.delete(keyList[i])
                }
            }))
        })
    )
})