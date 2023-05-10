/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getting-started_look-at.ts":
/*!****************************************!*\
  !*** ./src/getting-started_look-at.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LookAtExample = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const getting_started_hello_world_npm_1 = __webpack_require__(/*! ./getting-started_hello-world_npm */ "./src/getting-started_hello-world_npm.ts");
/**
 * This example builds on top of the [[HelloWorldExample]], so please consult that first for any
 * questions regarding basic setup of the map.
 *
 * In this example we show use the of [[MapView.lookAt]] method to focus camera on certain
 * world features (continents, countries, cities).
 *
 * Here a GUI is also set up so as to fiddle with the tilt and distance from the page.
 */
var LookAtExample;
(function (LookAtExample) {
    const mapView = getting_started_hello_world_npm_1.HelloWorldExample.mapView;
    mapView.projection = harp_geoutils_1.sphereProjection;
    mapView.setTheme({ extends: "resources/berlin_tilezen_base_globe.json" });
    mapView.tilt = 0;
    mapView.heading = 0;
    const exampleActions = {
        CenterGlobe() {
            mapView.lookAt({ target: { lat: 0, lng: 0 } });
        },
        ResetView() {
            mapView.lookAt({ heading: 0, tilt: 0 });
        },
        LookEast() {
            mapView.lookAt({ heading: 90 });
        },
        LookWest() {
            mapView.lookAt({ heading: -90 });
        },
        LookSouth() {
            mapView.lookAt({ heading: 180 });
        },
        Tilt45() {
            mapView.lookAt({ tilt: 45 });
        },
        Tilt0() {
            mapView.lookAt({ tilt: 0 });
        },
        GeoExtent10() {
            mapView.lookAt({ bounds: { latitudeSpan: 10, longitudeSpan: 10 } });
        },
        GeoExtentGlobe() {
            mapView.lookAt({ bounds: { latitudeSpan: 180, longitudeSpan: 360 } });
        }
    };
    const exampleBounds = {
        ["London"]: new harp_geoutils_1.GeoBox(new harp_geoutils_1.GeoCoordinates(51.28043, -0.56316), new harp_geoutils_1.GeoCoordinates(51.68629, 0.28206)),
        ["Berlin"]: new harp_geoutils_1.GeoBox(new harp_geoutils_1.GeoCoordinates(52.37615, 13.11938), new harp_geoutils_1.GeoCoordinates(52.66058, 13.65801)),
        ["France"]: new harp_geoutils_1.GeoBox(new harp_geoutils_1.GeoCoordinates(41.33374, -5.1406), new harp_geoutils_1.GeoCoordinates(51.08906, 9.55932)),
        ["India"]: new harp_geoutils_1.GeoBox(new harp_geoutils_1.GeoCoordinates(6.75649, 68.17939), new harp_geoutils_1.GeoCoordinates(33.25441, 97.16157)),
        ["USA"]: new harp_geoutils_1.GeoBox(new harp_geoutils_1.GeoCoordinates(24.527135, -131.660156), new harp_geoutils_1.GeoCoordinates(51.289406, -71.367188)),
        ["World"]: new harp_geoutils_1.GeoBox(new harp_geoutils_1.GeoCoordinates(-55, -180), new harp_geoutils_1.GeoCoordinates(78, 180)),
        ["Europe"]: new harp_geoutils_1.GeoBox(new harp_geoutils_1.GeoCoordinates(34.307144, -25.839844), new harp_geoutils_1.GeoCoordinates(66.548263, 44.121094)),
        // These features are defined by random points surrouding them to show that [[lookAt]]
        // can work with arbitrary point clouds too.
        ["Africa"]: [
            new harp_geoutils_1.GeoCoordinates(32.66827, 36.15456),
            new harp_geoutils_1.GeoCoordinates(9.87776, 55.79889),
            new harp_geoutils_1.GeoCoordinates(-21.14927, 55.41922),
            new harp_geoutils_1.GeoCoordinates(-37.23619, 10.88411),
            new harp_geoutils_1.GeoCoordinates(-34.66981, 39.03188),
            new harp_geoutils_1.GeoCoordinates(12.9366, -25.47008),
            new harp_geoutils_1.GeoCoordinates(37.64753, -10.81045)
        ],
        ["Australia"]: [
            new harp_geoutils_1.GeoCoordinates(0.319314, 130.85031),
            new harp_geoutils_1.GeoCoordinates(-4.03136, 153.57669),
            new harp_geoutils_1.GeoCoordinates(-28.94059, 156.3926),
            new harp_geoutils_1.GeoCoordinates(-45.25263, 147.50161),
            new harp_geoutils_1.GeoCoordinates(-36.99093, 113.46194),
            new harp_geoutils_1.GeoCoordinates(-21.93939, 112.09722)
        ],
        ["Asia"]: [
            new harp_geoutils_1.GeoCoordinates(38.70557, 25.095676273814004),
            new harp_geoutils_1.GeoCoordinates(40.46185, 25.83294696123821),
            new harp_geoutils_1.GeoCoordinates(47.56539, 49.337120152451824),
            new harp_geoutils_1.GeoCoordinates(73.83876, 68.08862941747252),
            new harp_geoutils_1.GeoCoordinates(81.76084, 90.62772020101889),
            new harp_geoutils_1.GeoCoordinates(67.63809, -168.68095103187997),
            new harp_geoutils_1.GeoCoordinates(62.90522, -171.40633287870494),
            new harp_geoutils_1.GeoCoordinates(48.53365, 157.00900173445882),
            new harp_geoutils_1.GeoCoordinates(34.06298, 141.58701888473408),
            new harp_geoutils_1.GeoCoordinates(-4.09993, 131.63498333285776),
            new harp_geoutils_1.GeoCoordinates(-10.31057, 127.50500787226275),
            new harp_geoutils_1.GeoCoordinates(-12.24436, 115.18798058166826),
            new harp_geoutils_1.GeoCoordinates(12.1344, 43.53950783023524),
            new harp_geoutils_1.GeoCoordinates(28.33851, 32.586304605269305)
        ],
        ["SouthAmerica"]: [
            new harp_geoutils_1.GeoCoordinates(-0.037727, -85.18558),
            new harp_geoutils_1.GeoCoordinates(12.08309, -79.51376),
            new harp_geoutils_1.GeoCoordinates(14.99663, -62.62817),
            new harp_geoutils_1.GeoCoordinates(-5.82442, -30.97989),
            new harp_geoutils_1.GeoCoordinates(-58.76469, -63.97934),
            new harp_geoutils_1.GeoCoordinates(-55.51751, -77.08135)
        ],
        ["NorthAmerica"]: [
            new harp_geoutils_1.GeoCoordinates(51.95849, -169.69321),
            new harp_geoutils_1.GeoCoordinates(82.20267, -5.83541),
            new harp_geoutils_1.GeoCoordinates(68.46351, -20.30972),
            new harp_geoutils_1.GeoCoordinates(46.1365, -51.80882),
            new harp_geoutils_1.GeoCoordinates(17.92657, -65.01497),
            new harp_geoutils_1.GeoCoordinates(4.20772, -79.38697),
            new harp_geoutils_1.GeoCoordinates(20.15675, -112.33495)
        ],
        // These features cross antimeridian and/or include poles to showcase that we support
        // these weird scenarios too.
        ["Antarctica"]: [
            new harp_geoutils_1.GeoCoordinates(-65.29705, 51.32607),
            new harp_geoutils_1.GeoCoordinates(-67.30229, -5.99415),
            new harp_geoutils_1.GeoCoordinates(-60.20446, -57.72913),
            new harp_geoutils_1.GeoCoordinates(-69.89815, -123.99539),
            new harp_geoutils_1.GeoCoordinates(-64.45382, 157.49746),
            new harp_geoutils_1.GeoCoordinates(-58.62286, 98.65179),
            new harp_geoutils_1.GeoCoordinates(-90, 180),
            new harp_geoutils_1.GeoCoordinates(-90, -180)
        ],
        ["PacificOcean"]: [
            new harp_geoutils_1.GeoCoordinates(27.0819, 116.99188331207404),
            new harp_geoutils_1.GeoCoordinates(64.74506, -175.21090904770676),
            new harp_geoutils_1.GeoCoordinates(7.32805, -78.13612731489623),
            new harp_geoutils_1.GeoCoordinates(-55.58942, -70.25827916326132),
            new harp_geoutils_1.GeoCoordinates(-75.2942, -123.99212082420046),
            new harp_geoutils_1.GeoCoordinates(-16.05847, 146.5315368832761)
        ],
        ["ArcticOcean"]: [
            new harp_geoutils_1.GeoCoordinates(68.45423, -67.72241699176338),
            new harp_geoutils_1.GeoCoordinates(65.63336, -17.597189318841238),
            new harp_geoutils_1.GeoCoordinates(63.30735, 38.63837863819523),
            new harp_geoutils_1.GeoCoordinates(66.05542, 73.80738827811217),
            new harp_geoutils_1.GeoCoordinates(70.19595, 131.7552825070622),
            new harp_geoutils_1.GeoCoordinates(65.12073, -168.5813757864778),
            new harp_geoutils_1.GeoCoordinates(50.9709, -81.03147632358663),
            new harp_geoutils_1.GeoCoordinates(90, 180),
            new harp_geoutils_1.GeoCoordinates(90, -180)
        ],
        ["BeringSea"]: [
            new harp_geoutils_1.GeoCoordinates(50.95019, -179.1428493376325),
            new harp_geoutils_1.GeoCoordinates(52.91106, 159.02544759162745),
            new harp_geoutils_1.GeoCoordinates(69.90354, 179.15147738391926),
            new harp_geoutils_1.GeoCoordinates(70.25714, -161.597647174786),
            new harp_geoutils_1.GeoCoordinates(55.76049, -157.31410465785078)
        ]
    };
    let lastLocationName;
    function useLocation(name) {
        mapView.lookAt({ bounds: exampleBounds[name] });
        lastLocationName = name;
    }
    useLocation("Europe");
    const gui = new dat_gui_1.GUI();
    const options = { globe: true };
    gui.add(options, "globe").onChange(() => {
        mapView.projection = options.globe ? harp_geoutils_1.sphereProjection : harp_geoutils_1.mercatorProjection;
        mapView.lookAt({ bounds: exampleBounds[lastLocationName] });
    });
    for (const exampleAction of Object.keys(exampleActions)) {
        const name = exampleAction.replace(/example/i, "");
        guiAddButton(gui, name, exampleActions[exampleAction]);
    }
    const boundsFolder = gui.addFolder("Bounds");
    for (const areaName of Object.keys(exampleBounds)) {
        guiAddButton(boundsFolder, areaName, () => {
            useLocation(areaName);
        });
    }
})(LookAtExample = exports.LookAtExample || (exports.LookAtExample = {}));
function guiAddButton(gui, name, callback) {
    gui.add({
        [name]: callback
    }, name);
}


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
/******/ 			"getting-started_look-at": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/getting-started_look-at.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=getting-started_look-at_bundle.js.map