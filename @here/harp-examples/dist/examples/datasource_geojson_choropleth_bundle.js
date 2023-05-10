/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/datasource_geojson_choropleth.ts":
/*!**********************************************!*\
  !*** ./src/datasource_geojson_choropleth.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonHeatmapExample = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const THREE = __webpack_require__(/*! three */ "three");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * This example demonstrates how to generate a heatmap-like [[StyleSet]] for a GeoJson. To do so,
 * each [[Style]] needs to define its own color shade, and they all need to be staggered on a
 * specific range of values. Here, the values are brought directly in the data of the GeoJson,
 * through the properties held in each feature. This GeoJson is a map of Italy, each feature
 * represents a region, and the properties bear the population density of that region. We can
 * narrow the `when` [[Expr]] condition of a [[Style]] to a value in a property, by simply writing
 * `propertyName` in the condition. The algorithm then reads:
 * ```typescript
 * [[include:geojson_heatmap1.ts]]
 * ```
 *
 * The algorithm loops through a range of values to create the [[Style]]s based on a range of
 * values, hence the variables in use. Externally it is wrapped in a more readable function where we
 * can simply describe the heatmap desired:
 * ```typescript
 * [[include:geojson_heatmap2.ts]]
 * ```
 *
 * Finally this [[StyleSet]] is assigned to the [[DataSource]]:
 * ```typescript
 * [[include:geojson_heatmap3.ts]]
 * ```
 */
var GeoJsonHeatmapExample;
(function (GeoJsonHeatmapExample) {
    document.body.innerHTML += `
        <style>
            #mapCanvas {
              top: 0;
            }
            #info{
                color: #fff;
                width: 80%;
                left: 50%;
                position: relative;
                margin: 10px 0 0 -40%;
                font-size: 15px;
            }
            @media screen and (max-width: 700px) {
                #info{
                    font-size:11px;
                }
            }
        </style>
        <p id=info></p>
    `;
    /**
     * Creates a new MapView for the HTMLCanvasElement of the given id.
     */
    function initializeBaseMap(id, theme) {
        const canvas = document.getElementById(id);
        const mapView = new harp_mapview_1.MapView({
            canvas,
            theme
        });
        mapView.lookAt({
            target: new harp_geoutils_1.GeoCoordinates(42, 14),
            zoomLevel: 7,
            tilt: 40,
            heading: -70
        });
        const controls = new harp_map_controls_1.MapControls(mapView);
        // Add an UI.
        const ui = new harp_map_controls_1.MapControlsUI(controls);
        canvas.parentElement.appendChild(ui.domElement);
        window.addEventListener("resize", () => {
            mapView.resize(window.innerWidth, window.innerHeight);
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", mapView);
        const baseMapDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            authenticationCode: config_1.apikey
        });
        mapView.addDataSource(baseMapDataSource);
        return mapView;
    }
    /**
     * A generator for a heatmap-like [[StyleSet]].
     *
     * @param options - Heatmap settings.
     */
    function generateHeatStyleSet(options) {
        const styleSet = [];
        const length = options.thresholds.length;
        for (let i = 0; i < length; i++) {
            const color = new THREE.Color(options.color);
            color.multiplyScalar(((i + 1) * 0.8) / length + 0.2);
            const max = options.thresholds[i];
            const min = i - 1 < 0 ? 0 : options.thresholds[i - 1];
            // snippet:geojson_heatmap1.ts
            const propertyName = options.property;
            const style = {
                description: "geoJson property-based style",
                technique: "extruded-polygon",
                when: `$geometryType == 'polygon'` +
                    `&& ${propertyName} > ${min}` +
                    `&& ${propertyName} <= ${max}`,
                attr: {
                    color: "#" + color.getHexString(),
                    transparent: true,
                    opacity: 0.8,
                    constantHeight: true,
                    boundaryWalls: false,
                    lineWidth: {
                        interpolation: "Discrete",
                        zoomLevels: [10, 11, 12],
                        values: [1.0, 1.0, 1.0]
                    }
                },
                renderOrder: 1000
            };
            // end:geojson_heatmap1.ts
            styleSet.push(style);
        }
        return styleSet;
    }
    // snippet:geojson_heatmap2.ts
    const densityStyleSet = generateHeatStyleSet({
        property: "density",
        thresholds: [50, 100, 150, 200, 250, 300, 350, 400, 450],
        color: "#ff6600"
    });
    // end:geojson_heatmap2.ts
    // snippet:geojson_heatmap3.ts
    const customTheme = {
        extends: "resources/berlin_tilezen_night_reduced.json",
        styles: {
            geojson: densityStyleSet
        }
    };
    // end:geojson_heatmap3.ts
    const baseMap = initializeBaseMap("mapCanvas", customTheme);
    const geoJsonDataProvider = new harp_vectortile_datasource_1.GeoJsonDataProvider("italy", new URL("resources/italy.json", window.location.href));
    const geoJsonDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
        dataProvider: geoJsonDataProvider,
        styleSetName: "geojson",
        addGroundPlane: false
    });
    baseMap.addDataSource(geoJsonDataSource);
    const infoElement = document.getElementById("info");
    infoElement.innerHTML =
        `This choropleth shows how to use custom styling to highlight specific features in the` +
            ` map. Here some height is given to the extruded polygons directly in the GeoJSON, ` +
            `whereas the color comes from the population density given in the properties.`;
})(GeoJsonHeatmapExample = exports.GeoJsonHeatmapExample || (exports.GeoJsonHeatmapExample = {}));


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
/******/ 			"datasource_geojson_choropleth": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/datasource_geojson_choropleth.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=datasource_geojson_choropleth_bundle.js.map