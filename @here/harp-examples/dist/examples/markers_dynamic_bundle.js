/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/markers_dynamic.ts":
/*!********************************!*\
  !*** ./src/markers_dynamic.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicMarkersExample = void 0;
const harp_features_datasource_1 = __webpack_require__(/*! @here/harp-features-datasource */ "../harp-features-datasource/index.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * This examples shows how to render dynamically generated GeoJSON points as markers with picking
 * support.
 */
var DynamicMarkersExample;
(function (DynamicMarkersExample) {
    const icons = [
        {
            name: "redIcon",
            url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSI0NyIgdmlld0JveD0iMCAwIDM4IDQ3Ij48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjMEYxNjIxIiBmaWxsLW9wYWNpdHk9Ii40IiBkPSJNMTUgNDZjMCAuMzE3IDEuNzkuNTc0IDQgLjU3NHM0LS4yNTcgNC0uNTc0YzAtLjMxNy0xLjc5LS41NzQtNC0uNTc0cy00IC4yNTctNCAuNTc0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNiNjAxMDEiIGQ9Ik0zMy4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOCAxOS4wNkMzOCA4LjU0OSAyOS40NzggMCAxOSAwUzAgOC41NSAwIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE4Ljk3NSA0NiAzMy4yNSAzMS42NTJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzZBNkQ3NCIgZmlsbC1vcGFjaXR5PSIuNSIgZD0iTTI2Ljg2MiAzNy41bDQuNzE0LTQuNzdjMy44MjItMy41NzYgNS45MjQtOC40MTEgNS45MjQtMTMuNjJDMzcuNSA4Ljg0NyAyOS4yLjUgMTkgLjVTLjUgOC44NDguNSAxOS4xMWMwIDUuMjA5IDIuMTAyIDEwLjA0NCA1LjkxOSAxMy42MTRsNC43MTkgNC43NzZoMTUuNzI0ek0xOSAwYzEwLjQ5MyAwIDE5IDguNTI1IDE5IDE5LjA0MSAwIDUuNTA3LTIuMzQ4IDEwLjQ1NC02LjA3OSAxMy45MzJMMTkgNDYgNi4wNzkgMzIuOTczQzIuMzQ4IDI5LjQ5NSAwIDI0LjU0OCAwIDE5LjA0IDAgOC41MjUgOC41MDcgMCAxOSAweiI+PC9wYXRoPjwvZz48L3N2Zz4K"
        },
        {
            name: "greenIcon",
            url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSI0NyIgdmlld0JveD0iMCAwIDM4IDQ3Ij48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjMEYxNjIxIiBmaWxsLW9wYWNpdHk9Ii40IiBkPSJNMTUgNDZjMCAuMzE3IDEuNzkuNTc0IDQgLjU3NHM0LS4yNTcgNC0uNTc0YzAtLjMxNy0xLjc5LS41NzQtNC0uNTc0cy00IC4yNTctNCAuNTc0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwNGI2MDEiIGQ9Ik0zMy4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOCAxOS4wNkMzOCA4LjU0OSAyOS40NzggMCAxOSAwUzAgOC41NSAwIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE4Ljk3NSA0NiAzMy4yNSAzMS42NTJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzZBNkQ3NCIgZmlsbC1vcGFjaXR5PSIuNSIgZD0iTTI2Ljg2MiAzNy41bDQuNzE0LTQuNzdjMy44MjItMy41NzYgNS45MjQtOC40MTEgNS45MjQtMTMuNjJDMzcuNSA4Ljg0NyAyOS4yLjUgMTkgLjVTLjUgOC44NDguNSAxOS4xMWMwIDUuMjA5IDIuMTAyIDEwLjA0NCA1LjkxOSAxMy42MTRsNC43MTkgNC43NzZoMTUuNzI0ek0xOSAwYzEwLjQ5MyAwIDE5IDguNTI1IDE5IDE5LjA0MSAwIDUuNTA3LTIuMzQ4IDEwLjQ1NC02LjA3OSAxMy45MzJMMTkgNDYgNi4wNzkgMzIuOTczQzIuMzQ4IDI5LjQ5NSAwIDI0LjU0OCAwIDE5LjA0IDAgOC41MjUgOC41MDcgMCAxOSAweiI+PC9wYXRoPjwvZz48L3N2Zz4K"
        },
        {
            name: "blueIcon",
            url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSI0NyIgdmlld0JveD0iMCAwIDM4IDQ3Ij48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjMEYxNjIxIiBmaWxsLW9wYWNpdHk9Ii40IiBkPSJNMTUgNDZjMCAuMzE3IDEuNzkuNTc0IDQgLjU3NHM0LS4yNTcgNC0uNTc0YzAtLjMxNy0xLjc5LS41NzQtNC0uNTc0cy00IC4yNTctNCAuNTc0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMTgwYjYiIGQ9Ik0zMy4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOCAxOS4wNkMzOCA4LjU0OSAyOS40NzggMCAxOSAwUzAgOC41NSAwIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE4Ljk3NSA0NiAzMy4yNSAzMS42NTJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzZBNkQ3NCIgZmlsbC1vcGFjaXR5PSIuNSIgZD0iTTI2Ljg2MiAzNy41bDQuNzE0LTQuNzdjMy44MjItMy41NzYgNS45MjQtOC40MTEgNS45MjQtMTMuNjJDMzcuNSA4Ljg0NyAyOS4yLjUgMTkgLjVTLjUgOC44NDguNSAxOS4xMWMwIDUuMjA5IDIuMTAyIDEwLjA0NCA1LjkxOSAxMy42MTRsNC43MTkgNC43NzZoMTUuNzI0ek0xOSAwYzEwLjQ5MyAwIDE5IDguNTI1IDE5IDE5LjA0MSAwIDUuNTA3LTIuMzQ4IDEwLjQ1NC02LjA3OSAxMy45MzJMMTkgNDYgNi4wNzkgMzIuOTczQzIuMzQ4IDI5LjQ5NSAwIDI0LjU0OCAwIDE5LjA0IDAgOC41MjUgOC41MDcgMCAxOSAweiI+PC9wYXRoPjwvZz48L3N2Zz4K"
        }
    ];
    /**
     * Creates a new MapView for the HTMLCanvasElement of the given id.
     */
    function initializeMapView(id) {
        const canvas = document.getElementById(id);
        const map = new harp_mapview_1.MapView({
            canvas,
            theme: {
                extends: "resources/berlin_tilezen_base.json",
                styles: {
                    // Specify the styling for the markers.
                    geojson: [
                        {
                            when: ["==", ["geometry-type"], "Point"],
                            technique: "labeled-icon",
                            imageTexture: ["get", "icon"],
                            text: ["get", "text"],
                            size: 15,
                            priority: 1000,
                            color: "black",
                            iconMayOverlap: true,
                            textMayOverlap: true,
                            renderOrder: ["get", "renderOrder"],
                            iconFadeTime: 0,
                            textFadeTime: 0
                        }
                    ]
                }
            },
            target: new harp_geoutils_1.GeoCoordinates(52.52, 13.4),
            zoomLevel: 12,
            delayLabelsUntilMovementFinished: false
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice").attach(map);
        const controls = new harp_map_controls_1.MapControls(map);
        // Add an UI.
        const ui = new harp_map_controls_1.MapControlsUI(controls, { projectionSwitch: true, zoomLevel: "input" });
        canvas.parentElement.appendChild(ui.domElement);
        window.addEventListener("resize", () => {
            map.resize(window.innerWidth, window.innerHeight);
        });
        const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            apiFormat: harp_vectortile_datasource_1.APIFormat.XYZOMV,
            styleSetName: "tilezen",
            maxDataLevel: 17,
            authenticationCode: config_1.apikey,
            authenticationMethod: {
                method: harp_vectortile_datasource_1.AuthenticationMethod.QueryString,
                name: "apikey"
            },
            copyrightInfo: config_1.copyrightInfo
        });
        map.addDataSource(omvDataSource);
        // Register the icon image referenced in the style.
        for (const { name, url } of icons) {
            map.userImageCache.addImage(name, url);
        }
        map.update();
        return map;
    }
    function removeMarker(x, y) {
        var _a;
        // Intersection test filtering the results by layer name to get only markers.
        const layerName = markersDataSource.dataProvider().name;
        const results = mapView.intersectMapObjects(x, y).filter(result => {
            var _a;
            return ((_a = result.userData) === null || _a === void 0 ? void 0 : _a.$layer) === layerName;
        });
        if (results.length === 0) {
            return;
        }
        const uuid = (_a = results[0].userData) === null || _a === void 0 ? void 0 : _a.__mapViewUuid;
        if (uuid !== undefined) {
            const feature = new harp_features_datasource_1.MapViewPointFeature([]);
            feature.uuid = uuid;
            markersDataSource.remove(feature);
        }
    }
    let markerId = 0;
    function addMarker(x, y) {
        const geo = mapView.getGeoCoordinatesAt(x, y);
        if (geo) {
            // Add a new marker to the data source at the click coordinates.
            markersDataSource.add(new harp_features_datasource_1.MapViewPointFeature(geo.toGeoPoint(), {
                text: markerId.toString(),
                id: markerId,
                icon: icons[markerId % icons.length].name,
                renderOrder: markerId
            }));
            markerId++;
        }
    }
    function clearMarkers() {
        markersDataSource.clear();
        markerId = 0;
    }
    function getCanvasPosition(event) {
        const { left, top } = mapView.canvas.getBoundingClientRect();
        return { x: event.clientX - Math.floor(left), y: event.clientY - Math.floor(top) };
    }
    function attachInputEvents() {
        const canvas = mapView.canvas;
        new harp_map_controls_1.LongPressHandler(canvas, event => {
            const canvasPos = getCanvasPosition(event);
            removeMarker(canvasPos.x, canvasPos.y);
        }, event => {
            const canvasPos = getCanvasPosition(event);
            addMarker(canvasPos.x, canvasPos.y);
        });
        window.addEventListener("keypress", event => {
            if (event.key === "c") {
                clearMarkers();
            }
        });
    }
    function addUI() {
        const gui = new dat_gui_1.GUI();
        gui.width = 250;
        gui.add({
            clear: clearMarkers
        }, "clear").name("(C)lear markers");
    }
    function addInstructions() {
        const message = document.createElement("div");
        message.innerHTML = `Tap map to add a marker, long press on a marker to remove it`;
        message.style.position = "relative";
        message.style.top = "60px";
        document.body.appendChild(message);
    }
    addInstructions();
    const mapView = initializeMapView("mapCanvas");
    // Create a [[FeaturesDataSource]] for the markers.
    const markersDataSource = new harp_features_datasource_1.FeaturesDataSource({
        name: "geojson",
        styleSetName: "geojson",
        gatherFeatureAttributes: true
    });
    mapView.addDataSource(markersDataSource);
    attachInputEvents();
    addUI();
})(DynamicMarkersExample = exports.DynamicMarkersExample || (exports.DynamicMarkersExample = {}));


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
/******/ 			"markers_dynamic": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/markers_dynamic.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=markers_dynamic_bundle.js.map