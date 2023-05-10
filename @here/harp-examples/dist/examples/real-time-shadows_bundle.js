/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/real-time-shadows.ts":
/*!**********************************!*\
  !*** ./src/real-time-shadows.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RealTimeShadows = void 0;
/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
__webpack_require__(/*! three/examples/js/controls/OrbitControls */ "../../node_modules/three/examples/js/controls/OrbitControls.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const harp_webtile_datasource_1 = __webpack_require__(/*! @here/harp-webtile-datasource */ "../harp-webtile-datasource/index.ts");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const THREE = __webpack_require__(/*! three */ "three");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
const SunCalc = __webpack_require__(/*! suncalc */ "../../node_modules/suncalc/suncalc.js");
const FADE_DURATION = 30 * 60 * 1000; // in ms
const COLOR_CHANGE_DURATION = 2 * FADE_DURATION; // in ms
const TOTAL_FADE_DURATION = FADE_DURATION + COLOR_CHANGE_DURATION;
const COLOR_INTENSITY_FACTOR = 1.5;
const SUNRISE_COLOR = new THREE.Color("hsl(45, 100%, 75%)");
const SUNSET_COLOR = new THREE.Color("hsl(30, 100%, 60%)");
let map;
let mapControls;
let trackball;
let debugCamera;
let directionalLightHelper;
let shadowCameraHelper;
let sun;
let MAX_SUN_INTENSITY;
const MAIN_SUN_COLOR = new THREE.Color();
const HERE = new harp_geoutils_1.GeoCoordinates(52.530932, 13.3849151);
const date = new Date();
const guiOptions = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    time: date.getHours() + date.getMinutes() / 60,
    timeIndicator: `${date.getHours()}:${date.getMinutes()}`,
    debugCamera: false,
    enableRasterTiles: false,
    textureSquareSize: 1024
};
// Reference solar noon time is used to calculate time offsets at specific coordinates.
const refSolarNoon = SunCalc.getTimes(date, 0, 0).solarNoon;
// Main time offset.
const refTime = refSolarNoon.getTime() + date.getTimezoneOffset() * 60 * 1000;
function swapCamera() {
    mapControls.enabled = !mapControls.enabled;
    trackball.enabled = !trackball.enabled;
    map.pointOfView = mapControls.enabled ? undefined : debugCamera;
    directionalLightHelper.visible = !directionalLightHelper.visible;
    shadowCameraHelper.visible = !shadowCameraHelper.visible;
}
const hereWebTileDataSource = new harp_webtile_datasource_1.HereWebTileDataSource({
    apikey: config_1.apikey,
    renderingOptions: { renderOrder: 50 },
    name: "raster-tiles"
});
function setupDebugStuff() {
    const mapCameraHelper = new THREE.CameraHelper(map["m_rteCamera"]);
    mapCameraHelper.renderOrder = Number.MAX_SAFE_INTEGER;
    map.scene.add(mapCameraHelper);
    debugCamera = new THREE.PerspectiveCamera(map.camera.fov, map.canvas.width / map.canvas.height, 100, 100000000);
    map.scene.add(debugCamera);
    debugCamera.position.set(6000, 2000, 1000);
    trackball = new THREE.OrbitControls(debugCamera, map.canvas);
    trackball.enabled = false;
    trackball.addEventListener("start", () => {
        map.beginAnimation();
    });
    trackball.addEventListener("end", () => {
        map.endAnimation();
    });
    trackball.addEventListener("change", () => {
        map.update();
    });
    trackball.staticMoving = true;
    // trackball.rotateSpeed = 3.0;
    trackball.zoomSpeed = 4.0;
    trackball.panSpeed = 2.0;
    directionalLightHelper = new THREE.DirectionalLightHelper(sun, 500);
    directionalLightHelper.visible = false;
    map.scene.add(directionalLightHelper);
    shadowCameraHelper = new THREE.CameraHelper(sun.shadow.camera);
    shadowCameraHelper.visible = false;
    map.scene.add(shadowCameraHelper);
    let lastZoomLevel = map.zoomLevel;
    map.addEventListener(harp_mapview_1.MapViewEventNames.Render, () => {
        const trackballTarget = trackball.target;
        if (lastZoomLevel !== map.zoomLevel) {
            trackballTarget.set(0, 0, -map.targetDistance);
            lastZoomLevel = map.zoomLevel;
        }
        trackball.update();
        const enableCameraHelpers = map.pointOfView !== undefined;
        if (enableCameraHelpers) {
            mapCameraHelper.update();
        }
        mapCameraHelper.visible = enableCameraHelpers;
        directionalLightHelper.update();
        shadowCameraHelper.update();
    });
}
function update() {
    guiOptions.time = guiOptions.hours + guiOptions.minutes / 60;
    guiOptions.timeIndicator = `${guiOptions.hours}:${guiOptions.minutes}`;
    const { latitude, longitude } = map.geoCenter;
    const lightPos = sun.position;
    // Dirty time is a time without taking into account the time offset at the specific coordinates.
    const dirtyTime = new Date(guiOptions.year, guiOptions.month - 1, guiOptions.day, guiOptions.hours, guiOptions.minutes, 0);
    // Calculating time offset at current location.
    const timeOffset = SunCalc.getTimes(date, latitude, longitude).solarNoon.getTime() - refTime;
    // Time with corrected offset.
    const locationDate = new Date(dirtyTime.getTime() + timeOffset);
    const sunTimes = SunCalc.getTimes(locationDate, latitude, longitude);
    const sunPosition = SunCalc.getPosition(locationDate, latitude, longitude);
    const azimuth = sunPosition.azimuth;
    const altitude = sunPosition.altitude - Math.PI / 2;
    const r = map.targetDistance;
    lightPos.setX(r * Math.sin(altitude) * Math.sin(azimuth));
    lightPos.setY(r * Math.sin(altitude) * Math.cos(azimuth));
    lightPos.setZ(r * Math.cos(altitude) - r);
    // Resetting the target is important, because this is overriden in the MapView.
    // This is an ugly hack and HARP-10353 should improve this.
    sun.target.position.set(0, 0, -r);
    sun.color.set(MAIN_SUN_COLOR);
    const location_ms = locationDate.getTime();
    const sunriseDiff = location_ms - sunTimes.sunriseEnd.getTime();
    const sunsetDiff = sunTimes.sunsetStart.getTime() - location_ms;
    if (sunriseDiff > 0 && sunsetDiff > 0) {
        if (sunriseDiff < TOTAL_FADE_DURATION || sunsetDiff < TOTAL_FADE_DURATION) {
            let color;
            let colorDiff;
            if (azimuth < 0) {
                color = SUNRISE_COLOR;
                colorDiff = sunriseDiff;
            }
            else {
                color = SUNSET_COLOR;
                colorDiff = sunsetDiff;
            }
            sun.color.lerpHSL(color, THREE.MathUtils.clamp(1 - (colorDiff - FADE_DURATION) / COLOR_CHANGE_DURATION, 0, 1));
            if (colorDiff <= FADE_DURATION) {
                sun.intensity = THREE.MathUtils.lerp(0, MAX_SUN_INTENSITY * COLOR_INTENSITY_FACTOR, colorDiff / FADE_DURATION);
            }
            else {
                sun.intensity = THREE.MathUtils.lerp(MAX_SUN_INTENSITY, MAX_SUN_INTENSITY * COLOR_INTENSITY_FACTOR, THREE.MathUtils.clamp(1 - (colorDiff - FADE_DURATION) / COLOR_CHANGE_DURATION, 0, 1));
            }
        }
        else {
            sun.intensity = MAX_SUN_INTENSITY;
        }
    }
    else {
        sun.intensity = 0;
    }
    map.update();
}
function initializeMapView(id, theme) {
    const canvas = document.getElementById(id);
    map = new harp_mapview_1.MapView({
        canvas,
        theme,
        enableShadows: true,
        projection: harp_geoutils_1.sphereProjection
    });
    map.renderLabels = false;
    map.fog.enabled = false;
    harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", map);
    mapControls = new harp_map_controls_1.MapControls(map);
    mapControls.maxTiltAngle = 50;
    const ui = new harp_map_controls_1.MapControlsUI(mapControls);
    canvas.parentElement.appendChild(ui.domElement);
    map.lookAt({ target: HERE, zoomLevel: 17 });
    map.resize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", () => {
        map.resize(window.innerWidth, window.innerHeight);
    });
    addVectorTileDataSource().then(() => {
        const light = map.lights.find(item => item instanceof THREE.DirectionalLight);
        if (light === undefined) {
            throw new Error("Light for a sun was not found.");
        }
        sun = light;
        MAX_SUN_INTENSITY = sun.intensity;
        MAIN_SUN_COLOR.copy(sun.color);
        map.addEventListener(harp_mapview_1.MapViewEventNames.MovementFinished, update);
        addGuiElements();
        setupDebugStuff();
        update();
    });
    return map;
}
const addVectorTileDataSource = () => {
    const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
        baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
        authenticationCode: config_1.apikey
    });
    return map.addDataSource(omvDataSource);
};
function addGuiElements() {
    // Control light direction
    const gui = new dat_gui_1.GUI({ width: 300 });
    gui.add(guiOptions, "year").onChange(update);
    gui.add(guiOptions, "month").onChange(update);
    gui.add(guiOptions, "day").onChange(update);
    const timeSlider = gui.add(guiOptions, "time", 0, 24, 0.01);
    const timeIndicator = gui.add(guiOptions, "timeIndicator");
    timeSlider.onChange(() => {
        guiOptions.hours = Math.floor(guiOptions.time);
        guiOptions.minutes = Math.floor((guiOptions.time - guiOptions.hours) * 60);
        update();
        timeIndicator.updateDisplay();
    });
    timeIndicator.onChange(() => {
        const time = guiOptions.timeIndicator.split(":");
        guiOptions.hours = parseInt(time[0], 10);
        guiOptions.minutes = parseInt(time[1], 10);
        update();
        timeSlider.updateDisplay();
    });
    gui.add(guiOptions, "debugCamera").onChange(swapCamera);
    gui.add(guiOptions, "enableRasterTiles").onChange((enable) => {
        const rasterSource = map.getDataSourceByName("raster-tiles");
        if (rasterSource && !enable) {
            map.removeDataSource(rasterSource);
        }
        else if (!rasterSource && enable) {
            map.addDataSource(hereWebTileDataSource);
        }
    });
    gui.add(guiOptions, "textureSquareSize", 256, 4096, 32).onChange(size => {
        sun.shadow.map.dispose();
        sun.shadow.map = null;
        sun.shadow.mapSize.width = size;
        sun.shadow.mapSize.height = size;
        map.update();
    });
}
var RealTimeShadows;
(function (RealTimeShadows) {
    const theme = {
        extends: "resources/berlin_tilezen_base.json",
        lights: [
            {
                type: "ambient",
                color: "#ffffff",
                name: "ambientLight",
                intensity: 0.9
            },
            {
                type: "directional",
                color: "#ffffff",
                name: "light1",
                intensity: 1,
                // Will be overriden immediately, see `update`
                direction: {
                    x: 0,
                    y: 0.01,
                    z: -1
                },
                castShadow: true
            }
        ],
        definitions: {
            // Opaque buildings
            defaultBuildingColor: { value: "#EDE7E1FF" }
        }
    };
    initializeMapView("mapCanvas", theme);
})(RealTimeShadows = exports.RealTimeShadows || (exports.RealTimeShadows = {}));


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
/******/ 			"real-time-shadows": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/real-time-shadows.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=real-time-shadows_bundle.js.map