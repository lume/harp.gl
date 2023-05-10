/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bounds-generation.ts":
/*!**********************************!*\
  !*** ./src/bounds-generation.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoundsExample = void 0;
/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_features_datasource_1 = __webpack_require__(/*! @here/harp-features-datasource */ "../harp-features-datasource/index.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const GeoCoordLike_1 = __webpack_require__(/*! @here/harp-geoutils/lib/coordinates/GeoCoordLike */ "../harp-geoutils/lib/coordinates/GeoCoordLike.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
var BoundsExample;
(function (BoundsExample) {
    // Create a new MapView for the HTMLCanvasElement of the given id.
    function initMapView(id) {
        const canvas = document.getElementById(id);
        // Look at BERLIN
        const BERLIN = new harp_geoutils_1.GeoCoordinates(52.5186234, 13.373993);
        const map = new harp_mapview_1.MapView({
            canvas,
            projection: harp_geoutils_1.mercatorProjection,
            tileWrappingEnabled: false,
            theme: {
                extends: "resources/berlin_tilezen_night_reduced.json",
                styles: {
                    geojson: [
                        {
                            when: [
                                "all",
                                ["==", ["geometry-type"], "Polygon"],
                                ["==", ["get", "name"], "bounds"]
                            ],
                            technique: "fill",
                            renderOrder: 10003,
                            attr: {
                                color: ["get", "color"],
                                opacity: 0.2,
                                lineWidth: 1,
                                lineColor: "#ff0000",
                                enabled: true
                            }
                        },
                        {
                            when: [
                                "all",
                                ["==", ["geometry-type"], "Polygon"],
                                ["==", ["get", "name"], "bbox"]
                            ],
                            technique: "solid-line",
                            renderOrder: 10005,
                            attr: {
                                color: "#0ff",
                                lineWidth: "5px"
                            }
                        },
                        {
                            when: [
                                "all",
                                ["==", ["geometry-type"], "Point"],
                                ["==", ["get", "name"], "bbox"]
                            ],
                            technique: "circles",
                            renderOrder: 10006,
                            attr: {
                                color: "#00f",
                                size: 20
                            }
                        },
                        {
                            when: "$geometryType == 'point'",
                            technique: "circles",
                            renderOrder: 10004,
                            attr: {
                                color: "#f0f",
                                size: 10
                            }
                        }
                    ]
                }
            },
            target: BERLIN,
            zoomLevel: 8,
            tilt: 45,
            heading: -80
        });
        map.renderLabels = false;
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", map);
        const mapControls = new harp_map_controls_1.MapControls(map);
        mapControls.maxTiltAngle = 180;
        const ui = new harp_map_controls_1.MapControlsUI(mapControls, { zoomLevel: "input", projectionSwitch: true });
        canvas.parentElement.appendChild(ui.domElement);
        map.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            map.resize(window.innerWidth, window.innerHeight);
        });
        addVectorTileDataSource(map);
        return map;
    }
    let viewpoly;
    let cornerpoints;
    let bboxFeature;
    let bboxPolygonFeature;
    function updateBoundsFeatures(polygon, featuresDataSource) {
        const corners = polygon.coordinates;
        if (corners && corners.length > 0) {
            //add starting vertex to the end to close the polygon
            corners.push(corners[0].clone());
        }
        //convert the array to an array usable for the MapViewPolygonFeature
        const polygonArray = [];
        const pointArray = [];
        polygonArray.push(pointArray);
        corners.forEach(corner => {
            if (corner === null) {
                return;
            }
            pointArray.push(GeoCoordLike_1.geoCoordLikeToGeoPointLike(corner));
        });
        if (viewpoly) {
            //remove the former polygon
            featuresDataSource === null || featuresDataSource === void 0 ? void 0 : featuresDataSource.remove(viewpoly);
        }
        //add the new polygon
        viewpoly = new harp_features_datasource_1.MapViewPolygonFeature(polygonArray, {
            name: "bounds",
            height: 10000,
            color: "#ffff00"
        });
        featuresDataSource === null || featuresDataSource === void 0 ? void 0 : featuresDataSource.add(viewpoly);
        // add circles at the corner points
        if (cornerpoints) {
            featuresDataSource === null || featuresDataSource === void 0 ? void 0 : featuresDataSource.remove(cornerpoints);
        }
        cornerpoints = new harp_features_datasource_1.MapViewMultiPointFeature(pointArray, {
            name: "cornerpoints"
        });
        featuresDataSource === null || featuresDataSource === void 0 ? void 0 : featuresDataSource.add(cornerpoints);
    }
    function updateBoundingBoxFeatures(geoPolygon, featuresDataSource, isVisible = true) {
        if (bboxFeature) {
            featuresDataSource === null || featuresDataSource === void 0 ? void 0 : featuresDataSource.remove(bboxFeature);
        }
        if (bboxPolygonFeature) {
            featuresDataSource === null || featuresDataSource === void 0 ? void 0 : featuresDataSource.remove(bboxPolygonFeature);
        }
        if (isVisible) {
            const geoBBox = geoPolygon.getGeoBoundingBox();
            const geoBBoxCornerArray = [];
            [
                new harp_geoutils_1.GeoCoordinates(geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.south, geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.west, 70),
                new harp_geoutils_1.GeoCoordinates(geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.south, geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.east, 70),
                new harp_geoutils_1.GeoCoordinates(geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.north, geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.east, 70),
                new harp_geoutils_1.GeoCoordinates(geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.north, geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.west, 70),
                new harp_geoutils_1.GeoCoordinates(geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.south, geoBBox === null || geoBBox === void 0 ? void 0 : geoBBox.west, 70)
            ].forEach(point => {
                if (!point) {
                    return;
                }
                geoBBoxCornerArray.push([
                    point.longitude,
                    point.latitude,
                    point.altitude
                ]);
            });
            const centroid = geoPolygon.getCentroid();
            bboxFeature = new harp_features_datasource_1.MapViewMultiPointFeature([[centroid.longitude, centroid.latitude, 70]].concat(geoBBoxCornerArray), {
                name: "bbox"
            });
            featuresDataSource === null || featuresDataSource === void 0 ? void 0 : featuresDataSource.add(bboxFeature);
            bboxPolygonFeature = new harp_features_datasource_1.MapViewPolygonFeature([geoBBoxCornerArray], {
                name: "bbox"
            });
            featuresDataSource === null || featuresDataSource === void 0 ? void 0 : featuresDataSource.add(bboxPolygonFeature);
        }
    }
    function addVectorTileDataSource(map) {
        const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            authenticationCode: config_1.apikey
        });
        map.addDataSource(omvDataSource);
        return map;
    }
    function addFeaturesDataSource(map, featureList) {
        const featuresDataSource = new harp_features_datasource_1.FeaturesDataSource({
            name: "featureDataSource",
            styleSetName: "geojson",
            features: featureList,
            gatherFeatureAttributes: true
        });
        map.addDataSource(featuresDataSource);
        return featuresDataSource;
    }
    function addButton(gui, name, callback) {
        return gui.add({
            [name]: callback
        }, name);
    }
    function initGUI(map, boundsGenerator, viewBoundsDataSource) {
        const gui = new dat_gui_1.GUI();
        gui.width = 350;
        let bounds;
        const options = {
            bbox: false,
            wrap: false,
            ppalPointX: 0,
            ppalPointY: 0
        };
        addButton(gui, "Draw view bounds polygon", () => {
            // Generate the the bounds  of the current view and add them as a feature
            bounds = boundsGenerator.generate();
            if (bounds) {
                updateBoundsFeatures(bounds, viewBoundsDataSource);
                updateBoundingBoxFeatures(bounds, viewBoundsDataSource, options.bbox);
            }
        });
        addButton(gui, "Look at bounds bbox", () => {
            map.lookAt({ bounds: bounds === null || bounds === void 0 ? void 0 : bounds.getGeoBoundingBox() });
        });
        addButton(gui, "Look at bounds polygon", () => {
            map.lookAt({ bounds });
        });
        gui.add(options, "bbox")
            .onChange((enabled) => {
            if (bounds) {
                updateBoundingBoxFeatures(bounds, viewBoundsDataSource, enabled);
            }
        })
            .name("Show polygon's bbox");
        gui.add(options, "wrap")
            .onChange((enabled) => {
            map.tileWrappingEnabled = enabled;
            map.update();
        })
            .name("Repeat world (planar)");
        const ppFolder = gui.addFolder("Principal point (NDC)");
        ppFolder
            .add(options, "ppalPointX", -1, 1, 0.1)
            .onChange((x) => {
            harp_mapview_1.CameraUtils.setPrincipalPoint(map.camera, {
                x,
                y: harp_mapview_1.CameraUtils.getPrincipalPoint(map.camera).y
            });
            map.update();
        })
            .name("x");
        ppFolder
            .add(options, "ppalPointY", -1, 1, 0.1)
            .onChange((y) => {
            harp_mapview_1.CameraUtils.setPrincipalPoint(map.camera, {
                x: harp_mapview_1.CameraUtils.getPrincipalPoint(map.camera).x,
                y
            });
            map.update();
        })
            .name("y");
        addButton(gui, "Log camera settings", () => {
            // eslint-disable-next-line no-console
            console.log("target: ", map.target, " tilt: ", map.tilt, " heading: ", map.heading, " zoom: ", map.zoomLevel, " canvassize: ", map.canvas.height, map.canvas.width, "near: ", map.camera.near, "far: ", map.camera.far);
        });
    }
    BoundsExample.mapView = initMapView("mapCanvas");
    const boundsGenerator = new harp_mapview_1.BoundsGenerator(BoundsExample.mapView);
    const viewBoundsDataSource = addFeaturesDataSource(BoundsExample.mapView, []);
    initGUI(BoundsExample.mapView, boundsGenerator, viewBoundsDataSource);
})(BoundsExample = exports.BoundsExample || (exports.BoundsExample = {}));


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
/******/ 			"bounds-generation": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/bounds-generation.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bounds-generation_bundle.js.map