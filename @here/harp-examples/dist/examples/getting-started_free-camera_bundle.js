/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getting-started_free-camera.ts":
/*!********************************************!*\
  !*** ./src/getting-started_free-camera.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FreeCameraAppDebuggingToolExample = void 0;
const harp_debug_datasource_1 = __webpack_require__(/*! @here/harp-debug-datasource */ "../harp-debug-datasource/index.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const THREE = __webpack_require__(/*! three */ "three");
const TrackballControls_1 = __webpack_require__(/*! three/examples/jsm/controls/TrackballControls */ "../../node_modules/three/examples/jsm/controls/TrackballControls.js");
const TransformControls_1 = __webpack_require__(/*! three/examples/jsm/controls/TransformControls */ "../../node_modules/three/examples/jsm/controls/TransformControls.js");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * This app adds another freely moveable camera into the map view scene.
 * It can be used as a handy map inspection/debugging tool
 * easily enabling visual checks of the map rendering with different camera settings.
 *
 * The app enables to change the position of the camera: translate it, rotate it
 * as well as change the point of view (to the one the user would actually see).
 *
 * ```typescript
 * [[include:harp_gl_freecamera_app_0.ts]]
 * ```
 *
 */
var FreeCameraAppDebuggingToolExample;
(function (FreeCameraAppDebuggingToolExample) {
    /**
     * [[FreeCameraApp]] class adds a debug camera view which enables to see the rendered map view
     * from a third person perspective as well as allows to freely modify the debug camera
     * position/rotation.
     *
     * The parameters of the [[FreeCameraApp]] are set in the [[FreeCameraAppOptions]] object.
     *
     * ```typescript
     * [[include:harp_gl_freecamera_app_0.ts]]
     * ```
     *
     */
    class FreeCameraApp {
        // creates a new MapView for the HTMLCanvasElement of the given id
        constructor(options) {
            this.options = options;
            this.helpers = [];
            this.mapView = new harp_mapview_1.MapView(options);
            this.mapView.fog.enabled = false;
            // Set the view over Geneva.
            const startLocation = new harp_geoutils_1.GeoCoordinates(46.207, 6.147);
            this.mapView.lookAt({ target: startLocation, zoomLevel: 16.5 });
            this.mapControls = new harp_map_controls_1.MapControls(this.mapView);
            this.mapControls.maxTiltAngle = 90;
            this.mapControls.enabled = false;
            harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", this.mapView);
            // center the camera somewhere around Berlin geo locations
            if (options.geoCenter !== undefined) {
                this.mapView.geoCenter = options.geoCenter;
            }
            // resize the mapView to maximum
            this.mapView.resize(window.innerWidth, window.innerHeight);
            // react on resize events
            window.addEventListener("resize", () => {
                this.mapView.resize(window.innerWidth, window.innerHeight);
            });
        }
        /**
         * Attaches the [[VectorTileDataSource]] and [[DebugTileDataSource]] to the map as well as
         * initializes the debug view (making the: `R`, `T` and `V` keys modify the camera's current
         * rotation (`R`), translation/postion (`T`) and changing the camera view to the one the
         * user is seeing (`V`).
         */
        start() {
            const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
                baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
                authenticationCode: config_1.apikey
            });
            const debugTileDataSource = new harp_debug_datasource_1.DebugTileDataSource(harp_geoutils_1.webMercatorTilingScheme);
            this.mapView.addDataSource(omvDataSource);
            this.mapView.addDataSource(debugTileDataSource);
            this.initializeDebugView();
        }
        initializeDebugView() {
            const pointOfView = new THREE.PerspectiveCamera(this.mapView.camera.fov, this.mapView.canvas.width / this.mapView.canvas.height, 100, 400000); // use an arbitrary large distance for the far plane.
            this.mapView.scene.add(pointOfView);
            // Setup relative to eye camera which is actually used in
            // map view to render tiles thus increasing data accuracy.
            const cameraRelativeToEye = new THREE.PerspectiveCamera();
            this.mapView.scene.add(cameraRelativeToEye);
            pointOfView.position.set(0, -4000, 2700);
            this.mapView.pointOfView = pointOfView;
            const transformControls = new TransformControls_1.TransformControls(pointOfView, this.mapView.canvas);
            transformControls.setSpace("world");
            transformControls.attach(cameraRelativeToEye);
            const applyTransformControls = () => {
                // Apply helper camera offset to main (map view) camera.
                this.mapView.camera.position.add(cameraRelativeToEye.position);
                // Make sure that the pitch limit constraint is preserved
                const ypr = harp_mapview_1.MapViewUtils.extractAttitude(this.mapView, cameraRelativeToEye);
                ypr.pitch = Math.max(Math.min(ypr.pitch, THREE.MathUtils.degToRad(this.mapControls.maxTiltAngle)), 0);
                // Finally apply rotation from transformation gizmo.
                harp_mapview_1.MapViewUtils.setRotation(this.mapView, THREE.MathUtils.radToDeg(ypr.yaw), THREE.MathUtils.radToDeg(ypr.pitch));
                // Reset RTE camera orientation according to constraints applied.
                cameraRelativeToEye.copy(this.mapView.camera);
                // Reset RTE camera position to origin.
                cameraRelativeToEye.position.setScalar(0);
            };
            applyTransformControls();
            const applyMapControls = () => {
                cameraRelativeToEye.copy(this.mapView.camera, true);
                cameraRelativeToEye.position.setScalar(0);
            };
            transformControls.addEventListener("mouseDown", () => {
                trackball.enabled = false;
            });
            transformControls.addEventListener("mouseUp", () => {
                trackball.enabled = true;
            });
            transformControls.addEventListener("objectChange", () => {
                applyTransformControls();
                this.mapView.update();
            });
            this.mapView.scene.add(transformControls);
            const cameraHelper = new THREE.CameraHelper(cameraRelativeToEye);
            // Set the renderOrder to an arbitrary large number, just to be sure that the camera
            // helpers are rendered on top of the map objects.
            cameraHelper.renderOrder = 5000;
            this.mapView.scene.add(cameraHelper);
            this.helpers.push(cameraHelper);
            // Set up the trackball gesture handler
            const trackball = new TrackballControls_1.TrackballControls(pointOfView, this.mapView.canvas);
            trackball.target.set(0, 0, -2000);
            trackball.staticMoving = true;
            trackball.rotateSpeed = 3.0;
            trackball.zoomSpeed = 4.0;
            trackball.panSpeed = 2.0;
            trackball.addEventListener("start", () => {
                this.mapView.beginAnimation();
            });
            trackball.addEventListener("end", () => {
                this.mapView.endAnimation();
            });
            // Update the debug controls.
            this.mapView.addEventListener(harp_mapview_1.MapViewEventNames.Render, () => {
                trackball.update();
                this.helpers.forEach(helper => helper.update());
            });
            window.focus();
            window.addEventListener("resize", () => {
                const { width, height } = this.mapView.canvas;
                pointOfView.aspect = width / height;
                pointOfView.updateProjectionMatrix();
                this.mapView.update();
            });
            window.addEventListener("keydown", event => {
                switch (event.code) {
                    case "KeyT":
                        transformControls.setMode("translate");
                        // Allow translations at any axis.
                        transformControls.showX = true;
                        transformControls.showY = true;
                        transformControls.showZ = true;
                        this.mapView.update();
                        break;
                    case "KeyR":
                        transformControls.setMode("rotate");
                        // Only pitch and yaw may be adjusted.
                        transformControls.showX = true;
                        transformControls.showY = false;
                        transformControls.showZ = true;
                        this.mapView.update();
                        break;
                    case "KeyV":
                        if (this.mapView.pointOfView !== undefined) {
                            this.mapView.pointOfView = undefined;
                            this.mapControls.enabled = true;
                            transformControls.enabled = false;
                            trackball.enabled = false;
                            applyTransformControls();
                        }
                        else {
                            this.mapView.pointOfView = pointOfView;
                            this.mapControls.enabled = false;
                            transformControls.enabled = true;
                            trackball.enabled = true;
                            applyMapControls();
                        }
                        this.mapView.update();
                        break;
                    default:
                        break;
                } // switch
            });
        }
    }
    FreeCameraAppDebuggingToolExample.FreeCameraApp = FreeCameraApp;
    function main() {
        const message = document.createElement("div");
        message.innerHTML = `
Press 'R' to rotate<br>
Press 'T' to translate<br>
Press 'V' to change the scene point of view<br>`;
        message.style.position = "absolute";
        message.style.cssFloat = "right";
        message.style.top = "10px";
        message.style.right = "10px";
        document.body.appendChild(message);
        const canvas = document.getElementById("mapCanvas");
        // snippet:harp_gl_freecamera_app_0.ts
        const app = new FreeCameraApp({
            decoderUrl: "./decoder.bundle.js",
            canvas,
            theme: "./resources/berlin_tilezen_base.json",
            projection: harp_geoutils_1.sphereProjection
        });
        app.start();
        // end:harp_gl_freecamera_app_0.ts
    }
    main();
})(FreeCameraAppDebuggingToolExample = exports.FreeCameraAppDebuggingToolExample || (exports.FreeCameraAppDebuggingToolExample = {}));


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
/******/ 			"getting-started_free-camera": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/getting-started_free-camera.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=getting-started_free-camera_bundle.js.map