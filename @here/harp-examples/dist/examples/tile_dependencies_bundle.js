/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tile_dependencies.ts":
/*!**********************************!*\
  !*** ./src/tile_dependencies.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileDependenciesExample = void 0;
const harp_debug_datasource_1 = __webpack_require__(/*! @here/harp-debug-datasource */ "../harp-debug-datasource/index.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_mapview_decoder_1 = __webpack_require__(/*! @here/harp-mapview-decoder */ "../harp-mapview-decoder/index.ts");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const custom_decoder_defs_1 = __webpack_require__(/*! ../decoder/custom_decoder_defs */ "./decoder/custom_decoder_defs.ts");
/**
 * This example shows how to use the {@link @here/harp-mapview#Tile.dependencies} property to ensure
 * that tiles which have geometry overlapping other.
 *
 * If you pan further enough left / right, you will see that the tile disappears.
 *
 * It combines part of the https://www.harp.gl/docs/master/examples/#object-picking.html and
 * https://www.harp.gl/docs/master/examples/#datasource_custom.html examples.
 * ```
 * {@link @here/harp-mapview#Tile}s that contain the geometry from another Tile need to have a
 * reference to the Tile containing the overlapping geometry, this is achieved using the
 * `dependencies` property of the {@link @here/harp-datasource-protocol#DecodedTile}
 * ```typescript
 * [[include:tile_dependencies.ts]]
 * ```
 **/
var TileDependenciesExample;
(function (TileDependenciesExample) {
    const guiOptions = { tileDependencies: false };
    document.body.innerHTML += `
        <style>
            #mouse-picked-result{
                position:absolute;
                bottom:5px;
                border-radius: 5px;
                margin-left:10px;
                padding: 9px 12px;
                background: #37afaa;
                display: inline-block;
                visibility: hidden;
                text-align: left;
                right:50px;
            }
            #mapCanvas {
              top: 0;
            }
        </style>
        <pre id="mouse-picked-result"></pre>
    `;
    class CustomDataProvider extends harp_mapview_decoder_1.DataProvider {
        constructor(mainTileKey) {
            super();
            this.mainTileKey = mainTileKey;
            this.enableTileDependencies = false;
        }
        connect() {
            // Here you could connect to the service.
            return Promise.resolve();
        }
        ready() {
            // Return true if connect was successful.
            return true;
        }
        getTile(tileKey, abortSignal) {
            // Generate some artificial data. Normally you would do a fetch here.
            // In this example we create some geometry in geo space that will be converted to
            // local world space by [[CustomDecoder.convertToLocalWorldCoordinates]]
            const data = new Array();
            // Do some scaling so that the data fits into the tile.
            const scale = 10.0 / (1 << tileKey.level);
            data.push(0.0, 0.0);
            for (let t = 0.0; t < Math.PI * 4; t += 0.1) {
                const x = Math.cos(t) * t * scale;
                const y = Math.sin(t) * t * scale * 10;
                data.push(x, y);
            }
            if (tileKey.mortonCode() === this.mainTileKey.mortonCode()) {
                return Promise.resolve(new Float32Array([data.length, ...data, 0]));
            }
            else {
                // Simulate that the tile contents spread over multiple tiles
                if (this.enableTileDependencies &&
                    (tileKey.column >= this.mainTileKey.column - 3 ||
                        tileKey.column <= this.mainTileKey.column + 3) &&
                    tileKey.row === this.mainTileKey.row) {
                    //snippet:tile_dependencies.ts
                    const { row, column, level } = this.mainTileKey;
                    return Promise.resolve(new Float32Array([0, 1, row, column, level]));
                    //end:tile_dependencies.ts
                }
            }
            return Promise.resolve({});
        }
        /** @override */ dispose() {
            // Nothing to be done here.
        }
    }
    // It is not mandatory to create a derived class to represent the tiles from the
    // CustomDataSource. It is just done here to show that it's possible.
    class CustomTile extends harp_mapview_1.Tile {
    }
    class CustomDataSource extends harp_mapview_decoder_1.TileDataSource {
        constructor(options) {
            super(new harp_mapview_decoder_1.TileFactory(CustomTile), options);
        }
    }
    // Create a custom theme that will be used to style the data from the CustomDataSource.
    function customTheme() {
        const theme = {
            // Create some lights for the "standard" technique.
            lights: [
                {
                    type: "ambient",
                    color: "#FFFFFF",
                    name: "ambientLight",
                    intensity: 0.9
                }
            ],
            styles: {
                // "customStyleSet" has to match the StyleSetName that is passed when creating
                // the CustomDataSource.
                // We distinguish different data by using the layer attribute that comes with the
                // data.
                customStyleSet: [
                    {
                        when: ["==", ["get", "layer"], "line-layer"],
                        technique: "solid-line",
                        attr: {
                            color: "#ff0000",
                            lineWidth: "10px",
                            clipping: false
                        }
                    }
                ]
            }
        };
        return theme;
    }
    function getCanvasPosition(event, canvas) {
        const { left, top } = canvas.getBoundingClientRect();
        return { x: event.clientX - Math.floor(left), y: event.clientY - Math.floor(top) };
    }
    let lastCanvasPosition;
    // Trigger picking event only if there's (almost) no dragging.
    function isPick(eventPosition) {
        const MAX_MOVE = 5;
        return (lastCanvasPosition &&
            Math.abs(lastCanvasPosition.x - eventPosition.x) <= MAX_MOVE &&
            Math.abs(lastCanvasPosition.y - eventPosition.y) <= MAX_MOVE);
    }
    const element = document.getElementById("mouse-picked-result");
    let current;
    function handlePick(mapViewUsed, x, y) {
        // get an array of intersection results from MapView
        let usableIntersections = mapViewUsed
            .intersectMapObjects(x, y)
            .filter(pr => pr.intersection.object.userData.dataSource !== "background");
        if (usableIntersections.length > 1) {
            usableIntersections = usableIntersections.filter(item => item !== current);
        }
        if (usableIntersections.length === 0) {
            // Hide helper box
            element.style.visibility = "hidden";
            return;
        }
        // Get userData from the first result;
        current = usableIntersections[0];
        // Show helper box
        element.style.visibility = "visible";
        // Display userData inside of helper box
        element.innerText = JSON.stringify(current.point, undefined, 2);
    }
    // Create a new MapView for the HTMLCanvasElement of the given id.
    function initializeMapView(id) {
        const canvas = document.getElementById(id);
        const map = new harp_mapview_1.MapView({
            canvas,
            theme: customTheme(),
            decoderUrl: "decoder.bundle.js"
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", map);
        const mapControls = new harp_map_controls_1.MapControls(map);
        mapControls.tiltEnabled = false;
        map.lookAt({ target: [0, 0], zoomLevel: 16 });
        const ui = new harp_map_controls_1.MapControlsUI(mapControls);
        canvas.parentElement.appendChild(ui.domElement);
        map.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            map.resize(window.innerWidth, window.innerHeight);
        });
        const customDP1 = new CustomDataProvider(new harp_geoutils_1.TileKey(16385, 16384, 15));
        const customDP = new CustomDataProvider(new harp_geoutils_1.TileKey(16384, 16384, 15));
        // snippet:tile_dependencies_create.ts
        const customDatasource = new CustomDataSource({
            name: "customDatasource",
            styleSetName: "customStyleSet",
            tilingScheme: harp_geoutils_1.webMercatorTilingScheme,
            dataProvider: customDP,
            concurrentDecoderServiceName: custom_decoder_defs_1.CUSTOM_DECODER_SERVICE_TYPE,
            storageLevelOffset: -1
        });
        const customDatasource1 = new CustomDataSource({
            name: "customDatasource1",
            styleSetName: "customStyleSet",
            tilingScheme: harp_geoutils_1.webMercatorTilingScheme,
            dataProvider: customDP1,
            concurrentDecoderServiceName: custom_decoder_defs_1.CUSTOM_DECODER_SERVICE_TYPE,
            storageLevelOffset: -1
        });
        map.addDataSource(customDatasource1);
        map.addDataSource(customDatasource);
        // Also visualize the tile borders:
        const debugDataSource = new harp_debug_datasource_1.DebugTileDataSource(harp_geoutils_1.webMercatorTilingScheme, "debug", 20);
        map.addDataSource(debugDataSource);
        canvas.addEventListener("mouseup", event => {
            const canvasPos = getCanvasPosition(event, canvas);
            if (isPick(canvasPos)) {
                handlePick(map, canvasPos.x, canvasPos.y);
            }
        });
        canvas.addEventListener("mousedown", event => {
            lastCanvasPosition = getCanvasPosition(event, canvas);
        });
        const gui = new dat_gui_1.GUI({ width: 300 });
        gui.add(guiOptions, "tileDependencies").onChange(val => {
            customDP.enableTileDependencies = !customDP.enableTileDependencies;
            customDP1.enableTileDependencies = !customDP1.enableTileDependencies;
            map.clearTileCache();
            map.update();
        });
        return map;
    }
    initializeMapView("mapCanvas");
    const instructions = `
Pan to the left / right until the tile in the center disappears.<br/>
To enable usage of the tile dependencies, check the checkbox,<br/>
the geometry will now always be visible.
Clicking on the geometry will show a box showing where you clicked.
If the tile dependencies checkbox is disabled, this will only work in
the center tile, because otherwise we assume that the contents of any
given tile remain in its boundaries.`;
    const message = document.createElement("div");
    message.style.position = "absolute";
    message.style.cssFloat = "right";
    message.style.top = "60px";
    message.style.right = "10px";
    message.style.backgroundColor = "grey";
    message.innerHTML = instructions;
    document.body.appendChild(message);
})(TileDependenciesExample = exports.TileDependenciesExample || (exports.TileDependenciesExample = {}));


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
/******/ 			"tile_dependencies": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/tile_dependencies.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=tile_dependencies_bundle.js.map