/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1", debug: false});

workbox.core.setCacheNameDetails({prefix: "angular-pwa-blog"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-a6f5d57f3870a1203c56.js"
  },
  {
    "url": "app-af949ef63476ffe8f911.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9637d26a834abd82553a3d890a923f6a"
  },
  {
    "url": "styles.58be12f541bdcc10ef66.css"
  },
  {
    "url": "google-fonts/s/caveat/v5/Wnz6HAc5bAfYB2Q7ZjYY.woff2",
    "revision": "313ecae23d6bc8b2ac7137df1c952b26"
  },
  {
    "url": "google-fonts/s/poppins/v6/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    "revision": "e535f7856b24153e0f3146e8f90a45c5"
  },
  {
    "url": "google-fonts/s/poppins/v6/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "revision": "e8794816c5eaeaa9dd20a6d77ea3b272"
  },
  {
    "url": "google-fonts/s/poppins/v6/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "revision": "1a280523d375e9358d5229df34fc8e94"
  },
  {
    "url": "1-bcc08505f36b6513edde.js"
  },
  {
    "url": "component---src-pages-404-tsx-7df511e5ca2bd146d70a.js"
  },
  {
    "url": "styles-4f8afe187849ba081d66.js"
  },
  {
    "url": "static/d/285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8.json"
  },
  {
    "url": "component---plugins-gatsby-plugin-offline-app-shell-js-62d0f50da7b0e7fc2c26.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d0307839e040e1d9e513b97c3bcd0b2f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?:.*.pwawithangular.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/.*(?:googleapis|gstatic)\.com.*/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`);
const WHITELIST_KEY = `custom-navigation-whitelist`;

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url);

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`;
      const cacheName = workbox.core.cacheNames.precache;

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse;

        console.error(`The offline shell (${offlineShell}) was not found ` + `while attempting to serve a response for ${pathname}`);

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response),
            );
          } else {
            return fetch(event.request);
          }
        });
      });
    }

    return fetch(event.request);
  });
});

workbox.routing.registerRoute(navigationRoute);

let updatingWhitelist = null;

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames));
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname);
      });

      return idbKeyval.set(WHITELIST_KEY, customWhitelist);
    })
    .then(() => {
      updatingWhitelist = null;
    });

  return updatingWhitelist;
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist());
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null;
  });

  return updatingWhitelist;
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data;

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`;
      } else {
        return pathname;
      }
    });

    event.waitUntil(rawWhitelistPathnames(pathnames));
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist());
  },
};

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data;
  if (gatsbyApi) messageApi[gatsbyApi](event);
});
