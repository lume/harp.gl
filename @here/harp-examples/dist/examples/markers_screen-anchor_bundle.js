/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/markers_screen-anchor.ts":
/*!**************************************!*\
  !*** ./src/markers_screen-anchor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoToScreenExample = void 0;
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
var GeoToScreenExample;
(function (GeoToScreenExample) {
    var _a;
    document.body.innerHTML += `
        <style>
        .message {
            position: absolute;
            top: 10px;
            left: 100px;
            text-align: left;
            max-width: 40%;
            color: #eee;
        }
        @media screen and (max-width: 600px) {
            .message {
                display: none;
            }
        }
        </style>
    `;
    const BERLIN = new harp_geoutils_1.GeoCoordinates(52.5186234, 13.373993);
    const geoPosition = {
        latitude: BERLIN.lat,
        longitude: BERLIN.lng,
        altitude: (_a = BERLIN.altitude) !== null && _a !== void 0 ? _a : 0
    };
    // Create a new MapView for the HTMLCanvasElement of the given id.
    function initializeMapView(id) {
        const canvas = document.getElementById(id);
        // Look at BERLIN
        const map = new harp_mapview_1.MapView({
            canvas,
            projection: harp_geoutils_1.mercatorProjection,
            tileWrappingEnabled: false,
            theme: "resources/berlin_tilezen_night_reduced.json",
            target: BERLIN,
            zoomLevel: 8,
            tilt: 45,
            heading: -80
        });
        map.renderLabels = false;
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", map);
        const mapControls = new harp_map_controls_1.MapControls(map);
        mapControls.maxTiltAngle = 180;
        const ui = new harp_map_controls_1.MapControlsUI(mapControls, { zoomLevel: "input" });
        canvas.parentElement.appendChild(ui.domElement);
        map.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            map.resize(window.innerWidth, window.innerHeight);
        });
        addVectorTileDataSource(map);
        return map;
    }
    function addGuiElements() {
        const gui = new dat_gui_1.GUI({ width: 300 });
        gui.add(geoPosition, "latitude").step(0.0001).onChange(updateAnchors);
        gui.add(geoPosition, "longitude").step(0.0001).onChange(updateAnchors);
        gui.add(geoPosition, "altitude").step(0.0001).onChange(updateAnchors);
        gui.add(GeoToScreenExample.mapView, "tileWrappingEnabled").onChange((value) => {
            GeoToScreenExample.mapView.tileWrappingEnabled = value;
        });
        const options = {
            projection: "mercatorProjection"
        };
        gui.add(options, "projection", ["sphereProjection", "mercatorProjection"]).onChange((value) => {
            GeoToScreenExample.mapView.projection =
                value === "sphereProjection" ? harp_geoutils_1.sphereProjection : harp_geoutils_1.mercatorProjection;
        });
        return gui;
    }
    function addVectorTileDataSource(map) {
        const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            authenticationCode: config_1.apikey
        });
        map.addDataSource(omvDataSource);
        return map;
    }
    function updateScreenAnchor(screenpos) {
        if (screenAnchor !== undefined && screenpos !== undefined) {
            screenAnchor.style.left = screenpos.x.toString() + "px";
            screenAnchor.style.top = screenpos.y.toString() + "px";
            screenAnchor.style.opacity = "0.8";
        }
        else {
            screenAnchor.style.opacity = "0.1";
        }
    }
    function updateScreenAnchorValues(screenpos) {
        if (screenAnchor !== undefined && screenpos !== undefined) {
            screenAnchorValues.innerHTML =
                "x: " + Math.round(screenpos.x) + " y: " + Math.round(screenpos.y);
        }
        else {
            screenAnchorValues.innerHTML = "x: undefined , y: undefined";
        }
    }
    function updateMapAnchor() {
        if (mapAnchor !== undefined && mapAnchor.anchor !== undefined) {
            const scaleFactor = GeoToScreenExample.mapView.targetDistance / 10000;
            if (mapAnchor.scale.x !== scaleFactor) {
                mapAnchor.scale.set(scaleFactor, scaleFactor, scaleFactor);
                GeoToScreenExample.mapView.update();
            }
            if (!mapAnchor.anchor.equals(geoPosition)) {
                mapAnchor.anchor = harp_geoutils_1.GeoCoordinates.fromObject(geoPosition);
                GeoToScreenExample.mapView.update();
            }
        }
    }
    function updateAnchors() {
        gui.updateDisplay();
        const screenpos = GeoToScreenExample.mapView.getScreenPosition({
            latitude: geoPosition.latitude,
            longitude: geoPosition.longitude,
            altitude: geoPosition.altitude
        });
        updateScreenAnchor(screenpos);
        updateScreenAnchorValues(screenpos);
        updateMapAnchor();
    }
    function addMapAnchor(mapView) {
        const mapAnchor = new THREE.Mesh(new THREE.BoxBufferGeometry(100, 100, 100), new THREE.MeshBasicMaterial({ color: "green" }));
        mapAnchor.anchor = BERLIN;
        mapAnchor.overlay = true;
        mapAnchor.renderOrder = Number.MAX_SAFE_INTEGER;
        mapView.mapAnchors.add(mapAnchor);
        return mapAnchor;
    }
    function addScreenAnchor() {
        const screenAnchor = document.createElement("div");
        screenAnchor.id = "screenAnchor";
        screenAnchor.style.position = "absolute";
        screenAnchor.style.zIndex = "-1"; // move it below GUI controls
        screenAnchor.style.backgroundColor = "red";
        screenAnchor.style.width = "10px";
        screenAnchor.style.height = "10px";
        screenAnchor.style.pointerEvents = "none";
        document.body.appendChild(screenAnchor);
        return screenAnchor;
    }
    function addInfoMessage() {
        const message = document.createElement("div");
        message.className = "message";
        message.innerHTML = `
   <p>
     This example shows how MapView.getScreenPosition works for various cases
     the red square is painted on the screen in screen coordinates, whereas the green cube
     lives in the world.
   </p>
   <p>
     Use the arrow keys or the GUI to change the position.
     Jump to next worlds with "j" and "l"
   </p>
   `;
        document.body.appendChild(message);
    }
    function addScreenAnchorValues() {
        const screenAnchorOutput = document.createElement("div");
        screenAnchorOutput.id = "screenAnchorOutput";
        screenAnchorOutput.style.position = "absolute";
        screenAnchorOutput.style.cssFloat = "bottom-right";
        screenAnchorOutput.style.bottom = "10px";
        screenAnchorOutput.style.left = "10px";
        screenAnchorOutput.style.textAlign = "left";
        screenAnchorOutput.style.textShadow = "0px 0px 2px gray";
        document.body.appendChild(screenAnchorOutput);
        return screenAnchorOutput;
    }
    window.addEventListener("keydown", event => {
        switch (event.key) {
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowUp":
            case "ArrowDown":
                startAnchorUpdate(event.key);
                break;
            default:
                break;
        }
    });
    let anchorUpdateTimeout;
    function startAnchorUpdate(direction) {
        const step = 1 / Math.pow(GeoToScreenExample.mapView.zoomLevel, 2);
        switch (direction) {
            case "ArrowLeft":
                geoPosition.longitude -= step;
                break;
            case "ArrowRight":
                geoPosition.longitude += step;
                break;
            case "ArrowUp":
                geoPosition.latitude += step;
                break;
            case "ArrowDown":
                geoPosition.latitude -= step;
                break;
            default:
                stopAnchorUpdate();
                break;
        }
        anchorUpdateTimeout = setTimeout(updateAnchors, 0.1);
    }
    function stopAnchorUpdate() {
        if (anchorUpdateTimeout !== undefined || anchorUpdateTimeout !== 0) {
            clearTimeout(anchorUpdateTimeout);
        }
    }
    window.addEventListener("keyup", event => {
        switch (event.key) {
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowUp":
            case "ArrowDown":
                stopAnchorUpdate();
                break;
            case "j":
                GeoToScreenExample.mapView.lookAt({
                    target: new harp_geoutils_1.GeoCoordinates(GeoToScreenExample.mapView.target.latitude, (GeoToScreenExample.mapView.target.longitude -= 360))
                });
                break;
            case "l":
                GeoToScreenExample.mapView.lookAt({
                    target: new harp_geoutils_1.GeoCoordinates(GeoToScreenExample.mapView.target.latitude, (GeoToScreenExample.mapView.target.longitude += 360))
                });
                break;
            case "p":
                // eslint-disable-next-line no-console
                console.log("target: ", GeoToScreenExample.mapView.target, " tilt: ", GeoToScreenExample.mapView.tilt, " heading: ", GeoToScreenExample.mapView.heading, " zoom: ", GeoToScreenExample.mapView.zoomLevel, " canvassize: ", GeoToScreenExample.mapView.canvas.height, GeoToScreenExample.mapView.canvas.width, "near: ", GeoToScreenExample.mapView.camera.near, "far: ", GeoToScreenExample.mapView.camera.far);
                break;
            default:
                break;
        }
    });
    GeoToScreenExample.mapView = initializeMapView("mapCanvas");
    const gui = addGuiElements();
    const screenAnchor = addScreenAnchor();
    const screenAnchorValues = addScreenAnchorValues();
    const mapAnchor = addMapAnchor(GeoToScreenExample.mapView);
    addInfoMessage();
    GeoToScreenExample.mapView.addEventListener(harp_mapview_1.MapViewEventNames.Update, updateAnchors);
})(GeoToScreenExample = exports.GeoToScreenExample || (exports.GeoToScreenExample = {}));


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
/******/ 			"markers_screen-anchor": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/markers_screen-anchor.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=markers_screen-anchor_bundle.js.map