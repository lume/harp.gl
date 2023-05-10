/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/rendering_globe-atmosphere.ts":
/*!*******************************************!*\
  !*** ./src/rendering_globe-atmosphere.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobeAtmosphereExample = void 0;
/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const harp_webtile_datasource_1 = __webpack_require__(/*! @here/harp-webtile-datasource */ "../harp-webtile-datasource/index.ts");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
var GlobeAtmosphereExample;
(function (GlobeAtmosphereExample) {
    let DataSourceVariant;
    (function (DataSourceVariant) {
        DataSourceVariant[DataSourceVariant["Omv"] = 0] = "Omv";
        DataSourceVariant[DataSourceVariant["Satellite"] = 1] = "Satellite";
    })(DataSourceVariant || (DataSourceVariant = {}));
    // Create a new MapView for the HTMLCanvasElement of the given id.
    function initializeMapView(id) {
        const canvas = document.getElementById(id);
        const mapView = new harp_mapview_1.MapView({
            canvas,
            projection: harp_geoutils_1.sphereProjection,
            theme: "resources/berlin_tilezen_base_globe.json"
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", mapView);
        mapView.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            mapView.resize(window.innerWidth, window.innerHeight);
        });
        return mapView;
    }
    function main() {
        const map = initializeMapView("mapCanvas");
        const dataSourceVariant = window.location.href.toLowerCase().includes("datasource=omv")
            ? DataSourceVariant.Omv
            : DataSourceVariant.Satellite;
        let dataSource;
        if (dataSourceVariant === DataSourceVariant.Omv) {
            dataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
                baseUrl: "https://xyz.api.here.com/tiles/herebase.02",
                apiFormat: harp_vectortile_datasource_1.APIFormat.XYZOMV,
                styleSetName: "tilezen",
                maxZoomLevel: 17,
                authenticationCode: config_1.apikey,
                authenticationMethod: {
                    method: harp_vectortile_datasource_1.AuthenticationMethod.QueryString,
                    name: "apikey"
                },
                copyrightInfo: config_1.copyrightInfo
            });
        }
        else {
            dataSource = new harp_webtile_datasource_1.HereWebTileDataSource({
                apikey: config_1.apikey,
                tileBaseAddress: harp_webtile_datasource_1.HereTileProvider.TILE_AERIAL_SATELLITE
            });
        }
        map.addDataSource(dataSource);
        const mapControls = new harp_map_controls_1.MapControls(map);
        mapControls.maxTiltAngle = 90;
        const ui = new harp_map_controls_1.MapControlsUI(mapControls, { zoomLevel: "input" });
        map.canvas.parentElement.appendChild(ui.domElement);
        const { camera, projection, mapAnchors } = map;
        const updateCallback = () => map.update();
        const atmosphere = new harp_mapview_1.MapViewAtmosphere(mapAnchors, camera, projection, map.renderer.capabilities, updateCallback);
        atmosphere.lightMode = harp_mapview_1.AtmosphereLightMode.LightDynamic;
        const coords = new harp_geoutils_1.GeoCoordinates(10.0, -10.0);
        map.lookAt({ target: coords, distance: harp_geoutils_1.EarthConstants.EQUATORIAL_RADIUS * 2.1 });
    }
    main();
})(GlobeAtmosphereExample = exports.GlobeAtmosphereExample || (exports.GlobeAtmosphereExample = {}));


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
/******/ 			"rendering_globe-atmosphere": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/rendering_globe-atmosphere.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=rendering_globe-atmosphere_bundle.js.map