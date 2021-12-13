// Service worker 

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