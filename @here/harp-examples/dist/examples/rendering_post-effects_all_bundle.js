/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/rendering_post-effects_all.ts":
/*!*******************************************!*\
  !*** ./src/rendering_post-effects_all.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EffectsAllExample = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * Harp's effects playground example with GUI to tweak values in one's own map. The effects are
 * adapted from ThreeJS's original effects. They can be tailored from [[MapView]]'s
 * [[MapRenderingManager]]:
 *
 * ```typescript
 * [[include:effects_example.ts]]
 * ```
 *
 * Note that a [[PostEffect]] configuration file can also be written and loaded with a [[Theme]], as
 * visible in the `effects_all` example.
 * ```typescript
 * [[include:effects_example2.ts]]
 * ```
 */
var EffectsAllExample;
(function (EffectsAllExample) {
    function initializeMapView(id) {
        const canvas = document.getElementById(id);
        const mapView = new harp_mapview_1.MapView({
            canvas,
            theme: "resources/berlin_tilezen_base.json"
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", mapView);
        const mapControls = new harp_map_controls_1.MapControls(mapView);
        mapControls.maxTiltAngle = 60;
        const singapour = new harp_geoutils_1.GeoCoordinates(1.2893999, 103.8537169);
        mapView.lookAt({ target: singapour, zoomLevel: 16.1, tilt: 60, heading: 240 });
        mapView.zoomLevel = 16.1;
        const ui = new harp_map_controls_1.MapControlsUI(mapControls);
        canvas.parentElement.appendChild(ui.domElement);
        mapView.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            mapView.resize(window.innerWidth, window.innerHeight);
        });
        return mapView;
    }
    const map = initializeMapView("mapCanvas");
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
    const options = {
        labels: false,
        toneMappingExposure: 1.0,
        outline: {
            enabled: false,
            ghostExtrudedPolygons: false,
            thickness: 0.004,
            color: "#898989"
        },
        bloom: {
            enabled: true,
            strength: 0.5,
            threshold: 0.83,
            radius: 1
        },
        vignette: {
            enabled: true,
            offset: 1.0,
            darkness: 1.0
        },
        sepia: {
            enabled: true,
            amount: 0.55
        }
    };
    const updateRendering = () => {
        // snippet:effects_example.ts
        map.renderLabels = options.labels;
        map.renderer.toneMappingExposure = options.toneMappingExposure;
        map.mapRenderingManager.outline.enabled = options.outline.enabled;
        map.mapRenderingManager.updateOutline(options.outline);
        map.mapRenderingManager.bloom = options.bloom;
        map.mapRenderingManager.vignette = options.vignette;
        map.mapRenderingManager.sepia = options.sepia;
        // end:effects_example.ts
        map.update();
    };
    updateRendering();
    const gui = new dat_gui_1.GUI({ width: 300 });
    gui.add(options, "labels").onChange(updateRendering);
    gui.add(options, "toneMappingExposure", 0.0, 1.5).onChange(updateRendering);
    const outlineFolder = gui.addFolder("Outlines");
    outlineFolder.add(options.outline, "enabled").onChange(updateRendering);
    outlineFolder.add(options.outline, "thickness", 0.001, 0.03).onChange(updateRendering);
    outlineFolder.add(options.outline, "ghostExtrudedPolygons").onChange(updateRendering);
    outlineFolder.addColor(options.outline, "color").onChange(updateRendering);
    const bloomFolder = gui.addFolder("Bloom");
    bloomFolder.add(options.bloom, "enabled").onChange(updateRendering);
    bloomFolder.add(options.bloom, "strength", 0, 2.0).onChange(updateRendering);
    bloomFolder.add(options.bloom, "threshold", 0.0, 1.0).onChange(updateRendering);
    bloomFolder.add(options.bloom, "radius", 0.0, 1.0).onChange(updateRendering);
    const vignetteFolder = gui.addFolder("Vignette");
    vignetteFolder.add(options.vignette, "enabled").onChange(updateRendering);
    const vignetteOffset = vignetteFolder.add(options.vignette, "offset", 0, 2);
    vignetteOffset.onChange(updateRendering);
    vignetteFolder.add(options.vignette, "darkness", 0, 2).onChange(updateRendering);
    const sepiaFolder = gui.addFolder("Sepia");
    sepiaFolder.add(options.sepia, "enabled").onChange(updateRendering);
    sepiaFolder.add(options.sepia, "amount", 0, 1).onChange(updateRendering);
})(EffectsAllExample = exports.EffectsAllExample || (exports.EffectsAllExample = {}));


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
/******/ 			"rendering_post-effects_all": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/rendering_post-effects_all.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=rendering_post-effects_all_bundle.js.map