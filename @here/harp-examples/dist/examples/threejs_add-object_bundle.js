/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/threejs_add-object.ts":
/*!***********************************!*\
  !*** ./src/threejs_add-object.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThreejsAddSimpleObject = void 0;
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const THREE = __webpack_require__(/*! three */ "three");
const getting_started_hello_world_npm_1 = __webpack_require__(/*! ./getting-started_hello-world_npm */ "./src/getting-started_hello-world_npm.ts");
/**
 * This example builds on top of the [[HelloWorldExample]], so please consult that first for any
 * questions regarding basic setup of the map.
 *
 * This example shows how to add a [THREE.js](https://threejs.org/) object to the scene.
 *
 * For the purposes of the demo, create a simple pink box.
 * ```typescript
 * [[include:harp_gl_threejs_add_simple_object_0.ts]]
 * ```
 * Next we need to find the position to place the cube, we use the helpful method
 * [[getGeoCoordinatesAt]] to get the geo space position under the mouse when it is clicked, this
 * is shown here:
 * ```typescript
 * [[include:harp_gl_threejs_add_simple_object_1.ts]]
 * ```
 *
 * Here the object is created and added to the [[mapAnchors]] node of the [[MapView]] scene.
 * ```typescript
 * [[include:harp_gl_threejs_add_simple_object_2.ts]]
 * ```
 *
 * Finally, in order to see the cube rendered on the map, we need to force an update.
 * ```typescript
 * [[include:harp_gl_threejs_add_simple_object_3.ts]]
 * ```
 */
var ThreejsAddSimpleObject;
(function (ThreejsAddSimpleObject) {
    // snippet:harp_gl_threejs_add_simple_object_0.ts
    const scale = 100;
    const geometry = new THREE.BoxGeometry(1 * scale, 1 * scale, 1 * scale);
    const prePassMaterial = new THREE.MeshStandardMaterial({
        color: "#ff00fe",
        opacity: 0.3,
        depthTest: false,
        transparent: true
    });
    const material = new THREE.MeshStandardMaterial({
        color: "#ff00fe",
        opacity: 0.9,
        transparent: true
    });
    function createPinkCube() {
        // To avoid not seeing the cube at all if it is fully behind the buildings
        // and also to have some nice visuals if it is partially occluded we
        // render two passes:
        // 1. render the cube semi-transparent w/o depth test (renders entire cube)
        // 2. render the cube almost opaque w/ depth test (renders only un-occluded part)
        const cube = new THREE.Object3D();
        const prePassMesh = new THREE.Mesh(geometry, prePassMaterial);
        prePassMesh.renderOrder = Number.MAX_SAFE_INTEGER - 1;
        cube.add(prePassMesh);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.renderOrder = Number.MAX_SAFE_INTEGER;
        cube.add(mesh);
        return cube;
    }
    // end:harp_gl_threejs_add_simple_object_0.ts
    // Create a new MapView for the HTMLCanvasElement of the given id.
    function addMouseEventListener(mapView) {
        const canvas = mapView.canvas;
        mapView.zoomLevel = 15.5;
        new harp_map_controls_1.LongPressHandler(canvas, event => {
            // snippet:harp_gl_threejs_add_simple_object_1.ts
            // Get the position of the mouse in geo space.
            const geoPosition = mapView.getGeoCoordinatesAt(event.pageX, event.pageY);
            if (geoPosition === null) {
                return;
            }
            // Add somealtitude so that the cube is standing on the ground.
            geoPosition.altitude = 50;
            // end:harp_gl_threejs_add_simple_object_1.ts
            // snippet:harp_gl_threejs_add_simple_object_2.ts
            const cube = createPinkCube();
            cube.anchor = geoPosition;
            mapView.mapAnchors.add(cube);
            // end:harp_gl_threejs_add_simple_object_2.ts
            // end:harp_gl_threejs_add_simple_object_3.ts
            // Request an update once the cube [[MapObject]] is added to [[MapView]].
            mapView.update();
            // end:harp_gl_threejs_add_simple_object_3.ts
        });
    }
    const message = document.createElement("div");
    message.innerHTML = `Long click to add a ${scale}m wide cube to the scene.`;
    message.style.cssText = `
        color: #000;
        width: 80%;
        left: 50%;
        position: relative;
        margin-left: -40%;
        font-size: 15px;
    `;
    document.body.appendChild(message);
    addMouseEventListener(getting_started_hello_world_npm_1.HelloWorldExample.mapView);
})(ThreejsAddSimpleObject = exports.ThreejsAddSimpleObject || (exports.ThreejsAddSimpleObject = {}));


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
/******/ 			"threejs_add-object": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/threejs_add-object.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=threejs_add-object_bundle.js.map