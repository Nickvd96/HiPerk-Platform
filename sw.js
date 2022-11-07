self.addEventListener("install", e =>{
    e.waitUntil
    (
        caches.open("static").then(cache =>{
            return cache.addAll(["Beperkingen.html",
                                "Contact.html",
                                "FavorieteGames.html",
                                "Gamezoeken.html",
                                "Homepage.html",
                                "./Images/HiPerksLogo.png.png",
                                "./Images/background.png"
                            ]);
        })
    );
    console.log("installed!");
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
    console.log(`Interscepting fetch request for:  ${e.request.url}`);
});