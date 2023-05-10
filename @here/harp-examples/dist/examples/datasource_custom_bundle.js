/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/datasource_custom.ts":
/*!**********************************!*\
  !*** ./src/datasource_custom.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomDatasourceExample = void 0;
const harp_debug_datasource_1 = __webpack_require__(/*! @here/harp-debug-datasource */ "../harp-debug-datasource/index.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_mapview_decoder_1 = __webpack_require__(/*! @here/harp-mapview-decoder */ "../harp-mapview-decoder/index.ts");
const custom_decoder_defs_1 = __webpack_require__(/*! ../decoder/custom_decoder_defs */ "./decoder/custom_decoder_defs.ts");
/**
 * This example shows how to create your own datasource with following features:
 * 1. Decoding and processing in a web-worker
 * 2. Usage of the styling engine in a custom datasource
 * 3. Creation of three.js objects in a web-worker
 * 4. Creating data that appears above and below ground level
 *
 * To achieve all this we have to implement a custom decoder:
 * ```typescript
 * [[include:custom_datasource_example_custom_decoder.ts]]
 * ```
 * A decoder is a class that encapsulates all the work that should be done in
 * a web-worker (i.e. decoding and processing).
 *
 * In this example we derive from [[ThemedTileDecoder]] b/c we also want to use
 * the styling capabilities of harp.gl. If styling is not needed one could also
 * derive from [[ITileDecoder]] directly.
 *
 * The main entry point for the decoder is the [[ThemedTileDecoder.decodeThemedTile]]
 * method (or [[ITileDecoder.decodeTile]] if no styling is needed). All CPU intensive
 * work, like decoding and processing, should go here, because this method is executed
 * in a web-worker. The input to this method (`data`) is coming from the main-thread
 * and is the result of the [[DataProvider.getTile]] method.
 *
 * The [[DataProvider]] is the component that is telling harp.gl where to get the data from.
 * The main method that has to be implemented is the [[DataProvider.getTile]] method.
 * This method is executed in the main thread and should not do any CPU intense work.
 * Normally you would just do a fetch here. The result is passed to a web-worker and gets
 * processed further. In this example we don't fetch any data, but just create some data on the
 * fly.
 * ```typescript
 * [[include:custom_datasource_example_custom_data_provider.ts]]
 * ```
 *
 * Finally we can create our `CustomDataSource`:
 * ```typescript
 * [[include:custom_datasource_example_custom_data_source.ts]]
 * ```
 * As you can see there is no functionality added but everything is used from [[TileDataSource]].
 * It is not mandatory to create a derived class but most likely it is needed at some point to
 * add custom logic.
 *
 * The more interesting part is the instantiation of our `CustomDataSource`:
 * ```typescript
 * [[include:custom_datasource_example_custom_data_source_create.ts]]
 * ```
 * There are two ways to tell the [[DataSource]] about our decoder. Either by setting a
 * [[TileDataSourceOptions.decoder|decoder]] instance or by specifying a
 * [[TileDataSourceOptions.concurrentDecoderServiceName|concurrentDecoderServiceName]].
 * The first approach would result in decoding the data in the main thread. That might
 * be useful for debugging or simple data sources, but we want to show the decoding in
 * a web-worker here, so we use
 * [[TileDataSourceOptions.concurrentDecoderServiceName|concurrentDecoderServiceName]].
 *
 * To understand the
 * [[TileDataSourceOptions.concurrentDecoderServiceName|concurrentDecoderServiceName]]
 * parameter we have to first understand the decoder bundle. All web-workers that are
 * created by harp.gl are loading the decoder bundle that
 * was specified in [[MapViewOptions.decoderUrl]] when creating the [[MapView]]:
 * ```typescript
 * [[include:custom_datasource_example_map_view_decoder_bundle.ts]]
 * ```
 * By default the url of the decoder bundle is "decoder.bundle.js" and is generated out of
 * {@link https://github.com/lume/harp.gl/blob/master/%40here/harp-examples/decoder/decoder.ts|decoder.ts}
 * (Assuming you created your app with the
 * {@link https://github.com/lume/harp.gl/blob/master/docs/GettingStartedGuide.md#yeoman|Yeoman generator}).
 *
 * The [[CustomDecoder]] has to be registered in the [[WorkerServiceManager]] during the
 * initialization of the decoder bundle. This is done in [[CustomDecoderService.start]]
 * ```typescript
 * [[include:custom_datasource_example_custom_decoder_service.ts]]
 * ```
 * We call [[CustomDecoderService.start]] in the previously mentioned decoder.ts.
 * ```typescript
 * [[include:custom_datasource_example_custom_decoder_service_start.ts]]
 * ```
 *
 * To properly geometry that is considerable higher or lower than the ground level, the bounding
 * boxes of the [[Tile]]s have to be enlarged to contain that geometry. If that is not done, the
 * tile may not be rendered at all, or the geometry may be clipped in some circumstances.
 *
 * In this example, the line is rendered at an altitude of -100m, making the line appear on
 * ground level when zoomed out, but increasingly far below ground level when zoomed in.
 *
 **/
var CustomDatasourceExample;
(function (CustomDatasourceExample) {
    const MAX_GEOMETRY_HEIGHT = 100;
    const MIN_GEOMETRY_HEIGHT = -100;
    // snippet:custom_datasource_example_custom_data_provider.ts
    class CustomDataProvider extends harp_mapview_decoder_1.DataProvider {
        // end:custom_datasource_example_custom_data_provider.ts
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
                const x = Math.cos(t) * t * scale * 0.5;
                const y = Math.sin(t) * t * scale;
                data.push(x, y);
            }
            return Promise.resolve(new Float32Array([data.length, ...data]));
        }
        /** @override */ dispose() {
            // Nothing to be done here.
        }
    }
    // It is not mandatory to create a derived class to represent the tiles from the
    // CustomDataSource. It is just done here to show that it's possible.
    class CustomTile extends harp_mapview_1.Tile {
    }
    // snippet:custom_datasource_example_custom_data_source.ts
    class CustomDataSource extends harp_mapview_decoder_1.TileDataSource {
        // end:custom_datasource_example_custom_data_source.ts
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
                },
                {
                    type: "directional",
                    color: "#CCCBBB",
                    name: "light1",
                    intensity: 0.8,
                    direction: {
                        x: 1,
                        y: 5,
                        z: 0.5
                    }
                },
                {
                    type: "directional",
                    color: "#F4DB9C",
                    name: "light2",
                    intensity: 0.8,
                    direction: {
                        x: -1,
                        y: -3,
                        z: 1
                    }
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
                            lineWidth: "10px"
                        }
                    },
                    {
                        // We can have the same rule multiple times, so the source data will be
                        // used multiple times to generate the desired output geometry.
                        when: ["==", ["get", "layer"], "line-layer"],
                        technique: "dashed-line",
                        attr: {
                            color: "#ffff00",
                            dashSize: "30px",
                            gapSize: "20px",
                            lineWidth: "4px"
                        }
                    },
                    {
                        when: ["==", ["get", "layer"], "mesh-layer"],
                        technique: "standard",
                        attr: {
                            color: "#0000ff",
                            depthTest: true
                        }
                    }
                ]
            }
        };
        return theme;
    }
    // Create a new MapView for the HTMLCanvasElement of the given id.
    async function initializeMapView(id) {
        const canvas = document.getElementById(id);
        const map = new harp_mapview_1.MapView({
            canvas,
            theme: customTheme(),
            // The geometry below ground can create a large number of tiles at lower levels.
            // Increasing number of visible tiles to minimize gaps.
            maxVisibleDataSourceTiles: 300,
            // snippet:custom_datasource_example_map_view_decoder_bundle.ts
            decoderUrl: "decoder.bundle.js"
            // end:custom_datasource_example_map_view_decoder_bundle.ts
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", map);
        const mapControls = new harp_map_controls_1.MapControls(map);
        mapControls.maxTiltAngle = 50;
        const NY = new harp_geoutils_1.GeoCoordinates(40.707, -74.01);
        map.lookAt({ target: NY, zoomLevel: 16, tilt: 50, heading: -20 });
        const ui = new harp_map_controls_1.MapControlsUI(mapControls);
        canvas.parentElement.appendChild(ui.domElement);
        map.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            map.resize(window.innerWidth, window.innerHeight);
        });
        // snippet:custom_datasource_example_custom_data_source_create.ts
        const customDatasource = new CustomDataSource({
            name: "customDatasource",
            styleSetName: "customStyleSet",
            tilingScheme: harp_geoutils_1.webMercatorTilingScheme,
            dataProvider: new CustomDataProvider(),
            // If you specify the decoder directly instead of the
            // concurrentDecoderServiceName the decoding will
            // happen in the main thread. This is useful for
            // debugging or if creating a decoder bundle is not
            // possible.
            // decoder: new CustomDecoder(),
            concurrentDecoderServiceName: custom_decoder_defs_1.CUSTOM_DECODER_SERVICE_TYPE,
            storageLevelOffset: -1,
            minGeometryHeight: MIN_GEOMETRY_HEIGHT,
            maxGeometryHeight: MAX_GEOMETRY_HEIGHT
        });
        map.addDataSource(customDatasource);
        // end:custom_datasource_example_custom_data_source_create.ts
        // Also visualize the tile borders:
        const debugDataSource = new harp_debug_datasource_1.DebugTileDataSource(harp_geoutils_1.webMercatorTilingScheme, "debug", 20);
        map.addDataSource(debugDataSource);
        return map;
    }
    initializeMapView("mapCanvas");
})(CustomDatasourceExample = exports.CustomDatasourceExample || (exports.CustomDatasourceExample = {}));


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
/******/ 			"datasource_custom": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/datasource_custom.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=datasource_custom_bundle.js.map