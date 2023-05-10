/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/camera-animations_key-track.ts":
/*!********************************************!*\
  !*** ./src/camera-animations_key-track.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraAnimationExample = void 0;
/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const THREE = __webpack_require__(/*! three */ "three");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * In this example we use the [[CameraKeyTrackAnimation]] and the [[CameraAnimationBuilder]] to
 * generate animations.
 *
 * First we create a map
 * Then we generate different camera animations.
 *
 *
 * Flying a bow to a next location using a maximum altitude for the bow. As a starting
 * [[ControlPoint]], the current Camera properties are used and converted to a [[ControlPoint]].
 * ```typescript
 * [[include:harp_gl_camera_animation_1.ts]]
 * ```
 * An orbit animation around the current target of the map.
 * ```typescript
 * [[include:harp_gl_camera_animation_2.ts]]
 * ```
 *
 * A [[CameraKeyTrackAnimation]] using some geoLocations to generate the [[ControlPoint]]s
 *
 * The simple [[CameraKeyTrackAnimationOptions]] contain a list of [[ControlPoint]]s
 * ```typescript
 * [[include:harp_gl_camera_animation_3.ts]]
 * ```
 *
 *
 */
var CameraAnimationExample;
(function (CameraAnimationExample) {
    // snippet:harp_gl_camera_animation_0.ts
    const map = createBaseMap();
    // end:harp_gl_camera_animation_0.ts
    const geoLocations = {
        Dubai: new harp_geoutils_1.GeoCoordinates(25.19705, 55.27419),
        BerlinStation: new harp_geoutils_1.GeoCoordinates(52.5250871, 13.367208),
        BerlinReichstag: new harp_geoutils_1.GeoCoordinates(52.5186234, 13.373993),
        BerlinTower: new harp_geoutils_1.GeoCoordinates(52.52081829, 13.407225)
    };
    map.lookAt({
        target: geoLocations.Dubai,
        distance: 1000,
        tilt: 45
    });
    const options = {
        globe: true,
        orbit: false,
        flyTo: "Dubai",
        flyOver: false
    };
    const animationOptions = {
        interpolation: THREE.InterpolateSmooth,
        loop: THREE.LoopOnce,
        repetitions: 1,
        rotateOnlyClockWise: true
    };
    let cameraAnimation;
    // snippet:harp_gl_camera_animation_3.ts
    const flyOverAnimationOptions = {
        controlPoints: [
            new harp_map_controls_1.ControlPoint({
                target: geoLocations.BerlinReichstag,
                timestamp: 0,
                heading: 300,
                tilt: 45,
                distance: 500
            }),
            new harp_map_controls_1.ControlPoint({
                target: geoLocations.BerlinStation,
                timestamp: 10,
                heading: 20,
                tilt: 45,
                distance: 3000
            }),
            new harp_map_controls_1.ControlPoint({
                target: geoLocations.BerlinTower,
                timestamp: 15,
                heading: 180,
                tilt: 35,
                distance: 200
            })
        ]
    };
    // end:harp_gl_camera_animation_3.ts
    const gui = new dat_gui_1.GUI({ width: 300 });
    gui.add(options, "globe").onChange(() => {
        map.projection = options.globe ? harp_geoutils_1.sphereProjection : harp_geoutils_1.mercatorProjection;
    });
    gui.add(options, "orbit").onChange(enableOrbit).listen();
    gui.add(options, "flyTo", [...Object.keys(geoLocations)])
        .onChange(flyTo)
        .listen();
    gui.add(options, "flyOver").onChange(enableFlyOver).listen();
    gui.add(animationOptions, "interpolation", {
        smooth: THREE.InterpolateSmooth,
        linear: THREE.InterpolateLinear,
        discrete: THREE.InterpolateDiscrete
    })
        .onChange(value => {
        animationOptions.interpolation = parseInt(value, 10);
        alert("This will only take effect for the next animation created");
    })
        .listen();
    gui.add(animationOptions, "repetitions", [1, 2, 3, 5, 10, Infinity])
        .onChange(value => {
        if (cameraAnimation) {
            cameraAnimation.repetitions = value;
        }
    })
        .listen();
    gui.add(animationOptions, "loop", {
        once: THREE.LoopOnce,
        pingpong: THREE.LoopPingPong,
        repeat: THREE.LoopRepeat
    }).onChange(value => {
        animationOptions.loop = parseInt(value, 10);
        if (cameraAnimation) {
            cameraAnimation.loop = parseInt(value, 10);
        }
    });
    gui.add(animationOptions, "rotateOnlyClockWise")
        .onChange(value => {
        if (cameraAnimation) {
            cameraAnimation.rotateOnlyClockwise = value;
        }
    })
        .listen();
    function stopAnimation() {
        if (cameraAnimation) {
            cameraAnimation.stop();
            cameraAnimation = undefined;
            options.flyOver = false;
            options.orbit = false;
        }
    }
    function enableOrbit(enable) {
        stopAnimation();
        options.orbit = enable;
        if (enable) {
            cameraAnimation = createOrbitAnimation();
            cameraAnimation.start();
        }
    }
    function flyTo(location) {
        stopAnimation();
        options.flyTo = location;
        if (location !== "") {
            // snippet:harp_gl_camera_animation_1.ts
            const target = new harp_map_controls_1.ControlPoint({
                target: geoLocations[location],
                distance: 800,
                tilt: 25,
                heading: Math.random() * 360,
                timestamp: 10
            });
            const flyToOpts = harp_map_controls_1.CameraAnimationBuilder.createBowFlyToOptions(map, new harp_map_controls_1.ControlPoint(Object.assign(Object.assign({}, harp_map_controls_1.CameraAnimationBuilder.getLookAtFromView(map)), { timestamp: 0 })), target);
            Object.assign(flyToOpts, animationOptions);
            cameraAnimation = new harp_map_controls_1.CameraKeyTrackAnimation(map, flyToOpts);
            // end:harp_gl_camera_animation_1.ts
            cameraAnimation.start();
        }
    }
    function enableFlyOver(enable) {
        stopAnimation();
        options.flyOver = enable;
        if (enable) {
            Object.assign(flyOverAnimationOptions, animationOptions);
            cameraAnimation = new harp_map_controls_1.CameraKeyTrackAnimation(map, flyOverAnimationOptions);
            cameraAnimation.start();
        }
    }
    function createOrbitAnimation() {
        // snippet:harp_gl_camera_animation_2.ts
        const orbitOpts = harp_map_controls_1.CameraAnimationBuilder.createOrbitOptions(new harp_map_controls_1.ControlPoint(Object.assign(Object.assign({}, harp_map_controls_1.CameraAnimationBuilder.getLookAtFromView(map)), { timestamp: 0 })), 3);
        Object.assign(orbitOpts, animationOptions);
        return new harp_map_controls_1.CameraKeyTrackAnimation(map, orbitOpts);
        // end:harp_gl_camera_animation_2.ts
    }
    function createBaseMap() {
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
})(CameraAnimationExample = exports.CameraAnimationExample || (exports.CameraAnimationExample = {}));


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
/******/ 			"camera-animations_key-track": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/camera-animations_key-track.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=camera-animations_key-track_bundle.js.map