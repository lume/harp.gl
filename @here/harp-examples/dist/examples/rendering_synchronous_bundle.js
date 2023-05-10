/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/rendering_synchronous.ts":
/*!**************************************!*\
  !*** ./src/rendering_synchronous.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SynchronousRendering = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const THREE = __webpack_require__(/*! three */ "three");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * The example shows how to render map synchronously within your own render loop.
 * By default, when map is updated, changes will be rendered in the next animation frame.
 *
 * Setting `synchronousRendering` to `true` allows to control rendering process
 * and by calling `mapView.renderSync()`.
 *
 * ```typescript
 * [[include:harp_gl_rendering_synchronous_1.ts]]
 * ```
 *
 * `MapViewEventNames.Update` event fired when [[MapView]] requests for a redraw.
 * E.g.: Tiles asynchronously decoded and ready for rendering, labels animation, etc...
 *
 * Subscribe to this event, and call your `update` method.
 *
 * ```typescript
 * [[include:harp_gl_rendering_synchronous_2.ts]]
 * ```
 *
 * Implement your own render loop like in the example below.
 * With `mapView.renderSync()` you will immediately redraw the map scene.
 *
 * Make checks to avoid multiple redrawing at one frame.
 *
 * ```typescript
 * [[include:harp_gl_rendering_synchronous_3.ts]]
 * ```
 *
 */
var SynchronousRendering;
(function (SynchronousRendering) {
    // Creates a new MapView for the HTMLCanvasElement of the given id
    function initializeMapView(id) {
        const canvas = document.getElementById(id);
        // snippet:harp_gl_rendering_synchronous_1.ts
        const map = new harp_mapview_1.MapView({
            canvas,
            theme: "resources/berlin_tilezen_base.json",
            synchronousRendering: true
        });
        // end:harp_gl_rendering_synchronous_1.ts
        map.renderLabels = false;
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", map);
        // Resize the mapView to maximum
        map.resize(window.innerWidth, window.innerHeight);
        // React on resize events
        window.addEventListener("resize", () => {
            map.resize(window.innerWidth, window.innerHeight);
        });
        const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            apiFormat: harp_vectortile_datasource_1.APIFormat.XYZOMV,
            styleSetName: "tilezen",
            authenticationCode: config_1.apikey,
            authenticationMethod: {
                method: harp_vectortile_datasource_1.AuthenticationMethod.QueryString,
                name: "apikey"
            },
            copyrightInfo: config_1.copyrightInfo
        });
        map.addDataSource(omvDataSource);
        return map;
    }
    class Popup {
        constructor(text, coordinates) {
            this.coordinates = coordinates;
            this.addHTMLElements(text);
            this.canvas = document.getElementById("popupLine");
            this.context = this.canvas.getContext("2d");
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            window.addEventListener("resize", () => {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            });
        }
        addHTMLElements(text) {
            document.body.innerHTML += `
                <style>
                    #popupLine {
                        position: absolute;
                        border: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        overflow: hidden;
                        z-index: 1;
                    }
                    .popup {
                        background: #000;
                        position: absolute;
                        right: 75%;
                        bottom: 75%;
                        color: #cceeff;
                        margin: 0 -1px -1px 0;
                        padding: 3px 10px;
                    }
                </style>
                <canvas id="popupLine"></canvas>
                <div class="popup">${text}</div>
            `;
        }
        drawConnectionLine() {
            if (this.context) {
                const width = this.canvas.width;
                const height = this.canvas.height;
                const position = mapView.projection.projectPoint(this.coordinates, new THREE.Vector3());
                const vector = position.project(mapView.camera);
                vector.x = ((vector.x + 1) / 2) * width;
                vector.y = (-(vector.y - 1) / 2) * height;
                this.context.lineWidth = 2;
                this.context.clearRect(0, 0, width, height);
                this.context.beginPath();
                this.context.moveTo(width / 4, height / 4);
                this.context.lineTo(vector.x, vector.y);
                this.context.stroke();
            }
        }
    }
    const popup = new Popup("One World Trade Center", new harp_geoutils_1.GeoCoordinates(40.713, -74.013, 541.3));
    const state = {
        target: new harp_geoutils_1.GeoCoordinates(40.707, -74.01, 0),
        zoomLevel: 16,
        tilt: 35,
        heading: 0
    };
    const mapView = initializeMapView("mapCanvas");
    // snippet:harp_gl_rendering_synchronous_2.ts
    mapView.addEventListener(harp_mapview_1.MapViewEventNames.Update, requestDraw);
    // end:harp_gl_rendering_synchronous_2.ts
    // snippet:harp_gl_rendering_synchronous_3.ts
    let requestDrawPending = false;
    let drawing = false;
    // Requests a redraw of the scene.
    function requestDraw() {
        // Cancel request for redrawing if already pending
        if (requestDrawPending) {
            return;
        }
        requestDrawPending = true;
        requestAnimationFrame(draw);
    }
    function draw(frameStartTime) {
        // Avoids multiple redrawing
        if (drawing) {
            return;
        }
        requestDrawPending = false;
        drawing = true;
        // Draw popup's connection line
        popup.drawConnectionLine();
        state.heading += 0.1;
        // Set target and camera rotation
        mapView.lookAt(state);
        // Draw map scene
        mapView.renderSync(frameStartTime);
        drawing = false;
    }
    // end:harp_gl_rendering_synchronous_3.ts
})(SynchronousRendering = exports.SynchronousRendering || (exports.SynchronousRendering = {}));


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
/******/ 			"rendering_synchronous": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/rendering_synchronous.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=rendering_synchronous_bundle.js.map