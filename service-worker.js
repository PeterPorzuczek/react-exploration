"use strict";var precacheConfig=[["/index.html","a65f19f4f61b19dc56f1a2d94d24eae8"],["/static/css/main.a6db8dc0.css","ff0043d7cdf0cbafd91d3bdb62f06032"],["/static/js/main.6d1eb1c7.js","5463dca9bed1f3a662d89cc492e4699d"],["/static/media/Logo.cb9db6cc.svg","cb9db6ccd49589d21efedb7e5567cdb7"],["/static/media/favicon.21672d52.ico","21672d5221fb6cb608ee01ab8e87aa93"],["/static/media/open-sans-v15-latin-ext_latin-700.15df1fb3.woff2","15df1fb3e82321d94a0ca758c62e25d2"],["/static/media/open-sans-v15-latin-ext_latin-700.2e00b263.svg","2e00b2635b51ba336b4b67a5d0bc03c7"],["/static/media/open-sans-v15-latin-ext_latin-700.81ca5af4.ttf","81ca5af45045261f536c71baafd77298"],["/static/media/open-sans-v15-latin-ext_latin-700.e5abc8bf.eot","e5abc8bf8bd5635024706adffbed5846"],["/static/media/open-sans-v15-latin-ext_latin-700.efe9ead0.woff","efe9ead0aecdedc597ec9d4e745e0a58"],["/static/media/open-sans-v15-latin-ext_latin-italic.7131a88d.woff2","7131a88d0a6fdeedd782ffe1b680b988"],["/static/media/open-sans-v15-latin-ext_latin-italic.af3f8a1f.woff","af3f8a1faecd92fed018201d8647399c"],["/static/media/open-sans-v15-latin-ext_latin-italic.cf57aca9.eot","cf57aca9187ea7c0353f4f6fdfb58b9c"],["/static/media/open-sans-v15-latin-ext_latin-italic.e1f3bdfc.ttf","e1f3bdfc7adb9f6ef7b6f913c4df2aa7"],["/static/media/open-sans-v15-latin-ext_latin-italic.fd2ba750.svg","fd2ba7503f70aafcdcc45211a481684d"],["/static/media/open-sans-v15-latin-ext_latin-regular.2b6f63fc.woff","2b6f63fce9104d1223d83dd12cd6038e"],["/static/media/open-sans-v15-latin-ext_latin-regular.7aab4c13.svg","7aab4c13671282c90669eb6a10357e41"],["/static/media/open-sans-v15-latin-ext_latin-regular.81d0487b.woff2","81d0487ba73afd292730e6f89e83c2ea"],["/static/media/open-sans-v15-latin-ext_latin-regular.916fcc0b.eot","916fcc0b03b40457b311609ac7226183"],["/static/media/open-sans-v15-latin-ext_latin-regular.abd464fd.ttf","abd464fd52dec0108904f062f30b31d4"],["/static/media/react.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});