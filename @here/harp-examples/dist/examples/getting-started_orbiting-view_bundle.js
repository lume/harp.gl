/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getting-started_orbiting-view.ts":
/*!**********************************************!*\
  !*** ./src/getting-started_orbiting-view.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraOrbitExample = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const Stats = __webpack_require__(/*! stats.js */ "../../node_modules/stats.js/build/stats.min.js");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * In this example we simply use the `lookAt` method to make the camera orbit around a geolocation.
 *
 * First we create the map.
 * ```typescript
 * [[include:harp_gl_camera_orbit_example_0.ts]]
 * ```
 *
 * Then we listen to render events to trigger new `lookAt` calls with progressing yaw angle offsets:
 * ```typescript
 * [[include:harp_gl_camera_orbit_example_1.ts]]
 * ```
 *
 * Here a GUI is also set up so as to fiddle with the tilt and distance from the page.
 */
var CameraOrbitExample;
(function (CameraOrbitExample) {
    // snippet:harp_gl_camera_orbit_example_0.ts
    const map = createBaseMap();
    // end:harp_gl_camera_orbit_example_0.ts
    // snippet:harp_gl_camera_orbit_example_1.ts
    const dubai = new harp_geoutils_1.GeoCoordinates(25.19705, 55.27419);
    const options = {
        target: dubai,
        tilt: 25,
        zoomLevel: 16.1,
        heading: 0,
        globe: true,
        headingSpeed: 0.1
    };
    map.addEventListener(harp_mapview_1.MapViewEventNames.AfterRender, () => {
        options.heading = (options.heading + options.headingSpeed) % 360;
        map.lookAt(options);
        map.update();
        updateHTML();
    });
    // end:harp_gl_camera_orbit_example_1.ts
    const gui = new dat_gui_1.GUI({ width: 300 });
    gui.add(options, "tilt", 0, 80, 0.1);
    gui.add(options, "zoomLevel", 1, 20, 0.1);
    gui.add(options, "globe").onChange(() => {
        map.projection = options.globe ? harp_geoutils_1.sphereProjection : harp_geoutils_1.mercatorProjection;
    });
    gui.add(options, "headingSpeed", 0.1, 10, 0.1);
    const stats = new Stats();
    stats.dom.style.bottom = "0px";
    stats.dom.style.top = "";
    document.body.appendChild(stats.dom);
    map.addEventListener(harp_mapview_1.MapViewEventNames.Render, () => {
        stats.end();
        stats.begin();
    });
    function createBaseMap() {
        document.body.innerHTML += getExampleHTML();
        const canvas = document.getElementById("mapCanvas");
        const mapView = new harp_mapview_1.MapView({
            canvas,
            projection: harp_geoutils_1.sphereProjection,
            theme: "resources/berlin_tilezen_base_globe.json"
        });
        canvas.addEventListener("contextmenu", e => e.preventDefault());
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", mapView);
        mapView.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            mapView.resize(window.innerWidth, window.innerHeight);
        });
        const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            authenticationCode: config_1.apikey
        });
        mapView.addDataSource(omvDataSource);
        return mapView;
    }
    function updateHTML() {
        const infoElement = document.getElementById("info");
        infoElement.innerHTML =
            `This view is set through the lookAt method: map.lookAt({target: dubai, ` +
                `zoomLevel: ${options.zoomLevel.toFixed(1)}, ` +
                `tilt: ${options.tilt.toFixed(1)}, ` +
                `heading: ${options.heading.toFixed(1)}})`;
    }
    function getExampleHTML() {
        return `
            <style>
                #mapCanvas{
                    top:0
                }
                #info{
                    color: #fff;
                    width: 80%;
                    left: 50%;
                    position: relative;
                    margin: 10px 0 0 -40%;
                    font-size: 15px;
                }
                @media screen and (max-width: 700px) {
                    #info{
                        font-size:11px;
                    }
                }
                </style>
                <p id=info></p>
        `;
    }
})(CameraOrbitExample = exports.CameraOrbitExample || (exports.CameraOrbitExample = {}));


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
/******/ 			"getting-started_orbiting-view": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/getting-started_orbiting-view.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=getting-started_orbiting-view_bundle.js.map