/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/synchronized-views.ts":
/*!***********************************!*\
  !*** ./src/synchronized-views.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TripleViewExample = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * An example showing triple map view build with 3 [[MapView]]s each with a different theme and/or
 * datasource.
 *
 * Creates 3 views with their own MapView and MapControl as WebTileDataSourceOptions:
 * ```typescript
 * [[include:harp_gl_multiview_tripleView_1.ts]]
 * ```
 *
 * Create 3 separate [[MapView]]s and datasources that will populate them.
 * ```typescript
 * [[include:harp_gl_multiview_tripleView_2.ts]]
 * ```
 * After adding the MapViews and their dedicated datasources (each one possibly with different
 * theme, added event handlers to sync between them [[MapView]]s:
 * ```typescript
 * [[include:harp_gl_multiview_tripleView_3.ts]]
 * ```
 */
var TripleViewExample;
(function (TripleViewExample) {
    // inject HTML code to page to show additional map canvases and position them side-by-side
    document.body.innerHTML += getExampleHTML();
    const numberOfSyncXViews = 3;
    // Adjust CSS to see more then 1 row in Y axis
    const numberOfSyncYViews = 1;
    function setupSyncViewsGrid(mapView, gridPosX, gridPosY) {
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const chunkW = window.innerWidth / numberOfSyncXViews;
        const chunkH = window.innerHeight / numberOfSyncYViews;
        // force camera aspect
        mapView.forceCameraAspect = winW / winH;
        // resize the mapView to maximum
        if (gridPosX !== 1) {
            mapView.resize(chunkW, chunkH);
            mapView.camera.setViewOffset(winW, winH, gridPosX * chunkW, gridPosY * chunkH, chunkW, chunkH);
        }
        else {
            mapView.resize(winW, winH);
        }
    }
    function initMapView(id, gridPositionX, gridPositionY, theme, decoderUrl) {
        const canvas = document.getElementById(id);
        const mapView = new harp_mapview_1.MapView({
            canvas,
            theme,
            decoderUrl
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", mapView);
        // instantiate the default map controls, allowing the user to pan around freely.
        const mapControls = new harp_map_controls_1.MapControls(mapView);
        // Add an UI.
        if (gridPositionX === 1) {
            const ui = new harp_map_controls_1.MapControlsUI(mapControls);
            canvas.parentElement.appendChild(ui.domElement);
        }
        const frankfurt = new harp_geoutils_1.GeoCoordinates(50.1125867, 8.6720831);
        mapView.lookAt({ target: frankfurt, zoomLevel: 18, tilt: 45, heading: 200 });
        mapView.zoomLevel = 16.2;
        setupSyncViewsGrid(mapView, gridPositionX, gridPositionY);
        // react on resize events
        window.addEventListener("resize", () => {
            setupSyncViewsGrid(mapView, gridPositionX, gridPositionY);
        });
        return { mapView, mapControls };
    }
    // create `${numberOfSyncXViews}` MapViews, each with their own theme file
    // snippet:harp_gl_multiview_tripleView_1.ts
    const mapViews = {
        view1: initMapView("mapCanvas", 0, 0, "./resources/berlin_tilezen_base.json", "./decoder.bundle.js"),
        view2: initMapView("mapCanvas2", 1, 0, "./resources/berlin_tilezen_night_reduced.json", "./decoder.bundle.js"),
        view3: initMapView("mapCanvas3", 2, 0, "./resources/berlin_tilezen_day_reduced.json", "./decoder.bundle.js")
    };
    // end:harp_gl_multiview_tripleView_1.ts
    // snippet:harp_gl_multiview_tripleView_2.ts
    const xyzDataSourceParams = {
        baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
        apiFormat: harp_vectortile_datasource_1.APIFormat.XYZOMV,
        styleSetName: "tilezen",
        authenticationCode: config_1.apikey,
        authenticationMethod: {
            method: harp_vectortile_datasource_1.AuthenticationMethod.QueryString,
            name: "apikey"
        },
        copyrightInfo: config_1.copyrightInfo
    };
    const dataSources = {
        omvDataSource1: new harp_vectortile_datasource_1.VectorTileDataSource(xyzDataSourceParams),
        omvDataSource2: new harp_vectortile_datasource_1.VectorTileDataSource(xyzDataSourceParams),
        omvDataSource3: new harp_vectortile_datasource_1.VectorTileDataSource(xyzDataSourceParams)
    };
    mapViews.view1.mapView.addDataSource(dataSources.omvDataSource1);
    mapViews.view2.mapView.addDataSource(dataSources.omvDataSource2);
    mapViews.view3.mapView.addDataSource(dataSources.omvDataSource3);
    // end:harp_gl_multiview_tripleView_2.ts
    const syncMapViews = (srcView, destView) => {
        const ypr = srcView.mapControls.attitude;
        harp_mapview_1.MapViewUtils.setRotation(destView.mapView, ypr.yaw, ypr.pitch);
        destView.mapView.camera.position.copy(srcView.mapView.camera.position);
        destView.mapControls.cameraHeight = srcView.mapControls.cameraHeight;
        destView.mapView.camera.aspect = numberOfSyncXViews;
        destView.mapView.camera.updateProjectionMatrix();
        // force update on changed MapView
        destView.mapView.update();
    };
    mapViews.view2.mapControls.addEventListener("update", () => {
        syncMapViews(mapViews.view2, mapViews.view1);
        syncMapViews(mapViews.view2, mapViews.view3);
    });
    // end:harp_gl_multiview_tripleView_3.ts
    function getExampleHTML() {
        return `
            <style>
                .themeName {
                    font-weight: bold;
                    padding: 1em;
                    position: absolute
                    margin-bottom: 0.5em;
                    margin: 0 auto;
                    width: 33%;
                    text-align:center;
                    text-transform:uppercase;
                    font-family: 'Fira Sans', sans-serif;
                }

                .titleRow
                {
                    display: table;
                    table-layout: fixed;
                    width: 100%;
                }

                #mapTheme1,#mapTheme2,#mapTheme3 {
                    background: hsl(218, 17%, 18%);
                    color: hsl(218, 17%, 85%);
                    display: table-cell;
                    left: 66%;
                }

                #mapCanvas {
                    border: 0px;
                    height: 100%;
                    left: 0;
                    overflow: hidden;
                    position: absolute;
                    pointer-events:none;
                    width: calc(100%/3);
                    z-index: -1
                }

                #mapCanvas2 {
                    border: 0px;
                    height: 100%;
                    left: 0;
                    overflow: hidden;
                    position: absolute;
                    width: 100%;
                    z-index: -2
                }

                #mapCanvas3 {
                    border: 0px;
                    height: 100%;
                    left: 66.6%;
                    pointer-events:none;
                    overflow: hidden;
                    position: absolute;
                    width: calc(100%/3);
                    z-index: -1
                }

            </style>

            <canvas id="mapCanvas2"></canvas>
            <canvas id="mapCanvas3"></canvas>
            <div class="titleRow">
                <div class="themeName" id="mapTheme1">
                    Base theme
                </div>
                <div class="themeName" id="mapTheme2">
                    Night reduced theme
                </div>
                <div class="themeName" id="mapTheme3">
                    Day reduced theme
                </div>
            </div>
        `;
    }
})(TripleViewExample = exports.TripleViewExample || (exports.TripleViewExample = {}));


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
/******/ 			"synchronized-views": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/synchronized-views.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=synchronized-views_bundle.js.map