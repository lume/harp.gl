/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/datasource_geojson_points.ts":
/*!******************************************!*\
  !*** ./src/datasource_geojson_points.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiledGeoJsonPointExample = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * This examples is a stress-test of tiled GeoJson perfomance, which consist of rendering 10000
 * [[TextElement]]s read from GeoJson on top of [[MapView]].
 */
var TiledGeoJsonPointExample;
(function (TiledGeoJsonPointExample) {
    document.body.innerHTML += `
        <style>
            #mapCanvas {
              top: 0;
            }
        </style>
    `;
    const imageString = 
    // tslint:disable-next-line:max-line-length
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiIHZlcnNpb249IjEuMSIgaWQ9Imx1aS1pY29uLWRlc3RpbmF0aW9ucGluLW9uZGFyay1zb2xpZC1sYXJnZSIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4IDQ4IgoJIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ4IDQ4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0ibHVpLWljb24tZGVzdGluYXRpb25waW4tb25kYXJrLXNvbGlkLWxhcmdlLWJvdW5kaW5nLWJveCIgb3BhY2l0eT0iMCI+CgkJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTQ3LDF2NDZIMVYxSDQ3IE00OCwwSDB2NDhoNDhWMEw0OCwweiIvPgoJPC9nPgoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNCwyQzEzLjg3MDgsMiw1LjY2NjcsMTAuMTU4NCw1LjY2NjcsMjAuMjIzMwoJCWMwLDUuMDMyNSwyLjA1MzMsOS41ODg0LDUuMzcxNywxMi44ODgzTDI0LDQ2bDEyLjk2MTctMTIuODg4M2MzLjMxODMtMy4zLDUuMzcxNy03Ljg1NTgsNS4zNzE3LTEyLjg4ODMKCQlDNDIuMzMzMywxMC4xNTg0LDM0LjEyOTIsMiwyNCwyeiBNMjQsMjVjLTIuNzY1LDAtNS0yLjIzNS01LTVzMi4yMzUtNSw1LTVzNSwyLjIzNSw1LDVTMjYuNzY1LDI1LDI0LDI1eiIvPgo8L2c+Cjwvc3ZnPgo=";
    const mapView = initializeMapView("mapCanvas");
    const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
        baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
        apiFormat: harp_vectortile_datasource_1.APIFormat.XYZOMV,
        styleSetName: "tilezen",
        maxDataLevel: 17,
        authenticationCode: config_1.apikey,
        authenticationMethod: {
            method: harp_vectortile_datasource_1.AuthenticationMethod.QueryString,
            name: "apikey"
        },
        copyrightInfo: config_1.copyrightInfo
    });
    mapView.addDataSource(omvDataSource);
    /**
     * Creates a new MapView for the HTMLCanvasElement of the given id.
     */
    // snippet:datasource_geojson_load1.ts
    function initializeMapView(id) {
        const canvas = document.getElementById(id);
        const map = new harp_mapview_1.MapView({
            canvas,
            theme: {
                extends: "resources/berlin_tilezen_night_reduced.json",
                styles: {
                    geojson: [
                        {
                            when: ["==", ["geometry-type"], "Point"],
                            technique: "labeled-icon",
                            text: ["get", "text"],
                            priority: 10000,
                            size: 14,
                            imageTexture: "custom-icon",
                            screenHeight: 32,
                            iconScale: 0.5,
                            distanceScale: 1,
                            iconYOffset: 20
                        }
                    ]
                },
                images: {
                    "custom-icon": {
                        url: imageString,
                        preload: true
                    }
                },
                imageTextures: [
                    {
                        name: "custom-icon",
                        image: "custom-icon"
                    }
                ]
            },
            target: new harp_geoutils_1.GeoCoordinates(41.9028, 12.4964),
            zoomLevel: 5.5
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice").attach(map);
        const controls = new harp_map_controls_1.MapControls(map);
        // Add an UI.
        const ui = new harp_map_controls_1.MapControlsUI(controls, { projectionSwitch: true });
        canvas.parentElement.appendChild(ui.domElement);
        window.addEventListener("resize", () => {
            map.resize(window.innerWidth, window.innerHeight);
        });
        // Create a [[GeoJsonDataProvider]] from a GeoJson URL and plug it into an OmvDataSource.
        const geoJsonDataProvider = new harp_vectortile_datasource_1.GeoJsonDataProvider("points", new URL("resources/points.json", window.location.href));
        const geoJsonDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            dataProvider: geoJsonDataProvider,
            name: "geojson",
            styleSetName: "geojson",
            addGroundPlane: false
        });
        map.addDataSource(geoJsonDataSource);
        map.update();
        return map;
    }
})(TiledGeoJsonPointExample = exports.TiledGeoJsonPointExample || (exports.TiledGeoJsonPointExample = {}));


/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/***/ ((module) => {

module.exports = THREE;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"datasource_geojson_points": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_here_harp_examples"] = self["webpackChunk_here_harp_examples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/datasource_geojson_points.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=datasource_geojson_points_bundle.js.map