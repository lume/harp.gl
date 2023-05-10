/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/geojson-viewer.ts":
/*!*******************************!*\
  !*** ./src/geojson-viewer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonExample = void 0;
const harp_features_datasource_1 = __webpack_require__(/*! @here/harp-features-datasource */ "../harp-features-datasource/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
/**
 * In this example we avail ourselves of the [[FeaturesDataSource]] and its `setFromGeoJson` method
 * to read GeoJSON from a file or from a textarea in the page. A default style is applied for all
 * possible geometry types.
 */
var GeoJsonExample;
(function (GeoJsonExample) {
    const editorWidth = "550px";
    const customTheme = {
        extends: "resources/berlin_tilezen_night_reduced.json",
        styles: {
            geojson: getStyleSet()
        }
    };
    const map = createBaseMap(customTheme);
    setUpFilePicker();
    setUpEditor();
    const featuresDataSource = new harp_features_datasource_1.FeaturesDataSource({ styleSetName: "geojson" });
    map.addDataSource(featuresDataSource);
    function setUpEditor() {
        const editorInput = document.querySelector("#editor textarea");
        editorInput.placeholder = `{
    type: "FeatureCollection",
    features:[

    ]
}`;
        const updateButton = document.querySelector("#editor button");
        updateButton.addEventListener("click", () => {
            const geojson = JSON.parse(document.querySelector("#editor textarea").value);
            featuresDataSource.setFromGeojson(geojson);
        });
    }
    function getStyleSet() {
        return [
            {
                when: "$geometryType == 'polygon'",
                technique: "fill",
                renderOrder: 10000,
                attr: {
                    color: "#7cf",
                    transparent: true,
                    opacity: 0.8,
                    lineWidth: 1,
                    lineColor: "#003344"
                }
            },
            {
                when: "$geometryType == 'polygon'",
                technique: "solid-line",
                renderOrder: 10001,
                attr: {
                    color: "#8df",
                    metricUnit: "Pixel",
                    lineWidth: 5
                }
            },
            {
                when: "$geometryType == 'point'",
                technique: "circles",
                renderOrder: 10002,
                attr: {
                    size: 10,
                    color: "#5ad"
                }
            },
            {
                when: "$geometryType == 'line'",
                technique: "solid-line",
                renderOrder: 10000,
                attr: {
                    color: "#8df",
                    metricUnit: "Pixel",
                    lineWidth: 5
                }
            }
        ];
    }
    function processGeoJsonFile(file) {
        const reader = new FileReader();
        reader.onload = () => {
            document.querySelector("#editor textarea").value = reader.result;
            featuresDataSource.setFromGeojson(JSON.parse(reader.result));
            map.update();
        };
        if (file.type === "application/geo+json" || file.type === "application/json") {
            reader.readAsText(file);
        }
    }
    function setUpFilePicker() {
        const input = document.getElementById("input");
        input.addEventListener("change", e => {
            const file = input.files[0];
            processGeoJsonFile(file);
        });
        const overlay = document.getElementById("drag-overlay");
        window.addEventListener("dragover", e => {
            e.preventDefault();
            overlay.style.display = "block";
        });
        const removeOverlay = (e) => {
            e.preventDefault();
            overlay.style.display = "none";
        };
        overlay.addEventListener("dragleave", removeOverlay);
        overlay.addEventListener("dragend", removeOverlay);
        overlay.addEventListener("dragexit", removeOverlay);
        overlay.addEventListener("drop", e => {
            removeOverlay(e);
            const file = e.dataTransfer.files[0];
            processGeoJsonFile(file);
        }, false);
    }
    function createBaseMap(theme) {
        document.body.innerHTML += getExampleHTML();
        const canvas = document.getElementById("mapCanvas");
        const mapView = new harp_mapview_1.MapView({
            canvas,
            theme
        });
        mapView.renderLabels = false;
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", mapView);
        const controls = new harp_map_controls_1.MapControls(mapView);
        const ui = new harp_map_controls_1.MapControlsUI(controls, { projectionSwitch: true });
        const width = innerWidth <= 450 ? 0 : Math.min(parseInt(editorWidth, undefined), innerWidth * 0.4);
        ui.domElement.style.right = width + 10 + "px";
        canvas.parentElement.appendChild(ui.domElement);
        window.addEventListener("resize", () => {
            const _width = innerWidth <= 450
                ? 0
                : Math.min(parseInt(editorWidth, undefined), innerWidth * 0.4);
            canvas.className = "full";
            ui.domElement.style.right = _width + 10 + "px";
            mapView.resize(innerWidth - _width, innerHeight);
        });
        const baseMap = new harp_vectortile_datasource_1.VectorTileDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            authenticationCode: config_1.apikey
        });
        mapView.addDataSource(baseMap);
        return mapView;
    }
    function getExampleHTML() {
        return `
            <link href="https://fonts.googleapis.com/css?family=Fira+Sans&amp;display=swap" rel="stylesheet">
            <style>
                :root{
                    --editor-width:${editorWidth};
                }
                #mapCanvas{
                    top:0;
                    width:calc(100% - var(--editor-width));
                    min-width: 60%;
                }
                #drag-overlay{
                    position:absolute;
                    width:calc(100% - var(--editor-width));
                    min-width: 60%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    display:none
                }
                #drag-dashes{
                    --border-thickness: 9px;
                    --margin:70px;
                    position:absolute;
                    width:calc(100% - var(--margin) * 2 - var(--border-thickness) * 2);
                    height:calc(100% - var(--margin) * 2 - var(--border-thickness) * 2);
                    top:var(--margin);
                    left:var(--margin);
                    border: dashed var(--border-thickness) #fff;
                    border-radius: 25px;
                }
                #editor{
                    font-family: 'Fira Sans', sans-serif;
                    width:var(--editor-width);
                    max-width:40%;
                    right:0;
                    top:0;
                    position:absolute;
                    height:100%;
                    padding:5px;
                    background:hsla(215, 15%, 65%, 1);
                    box-sizing: border-box;
                }
                button{
                    font-family: 'Fira Sans', sans-serif;
                    background: hsla(215, 15%, 17%, 1);
                    height: 21px;
                    border: 0;
                    color: #d2d7de;
                    text-transform: uppercase;
                    cursor: pointer;
                }
                #browse{
                    display:block;
                    position:absolute;
                    right: 5px;
                    top: 5px;
                }
                #editor textarea{
                    font-family: 'Fira Sans', sans-serif;
                    position:absolute;
                    resize: none;
                    width:calc(100% - 10px);
                    height:calc(100% - 36px);
                    padding:0;
                    top:31px;
                    right:5px;
                    border:0
                }
                #info{
                    color: #fff;
                    min-width: 60%;
                    width: calc(100% - var(--editor-width));
                    text-align: center;
                    font-family: monospace;
                    left: 50%;
                    bottom: 10px;
                    font-size: 15px;
                    position: absolute;
                    margin-left: -50%;
                }
                #copyrightNotice{
                    left:0;
                    background:#888;
                    right:inherit;
                }
                @media all and (max-width: 450px) {
                    #editor{
                        display:none;
                    }
                    #mapCanvas, #info, #drag-overlay{
                        width: 100%;
                    }
                }
            </style>
            <div id=editor>
                <button style="left:5px;position:absolute;">Update</button>
                <textarea></textarea>
            </div>

            <input type="file" id="input" style="display: none;" />
            <button id=browse onclick="document.getElementById('input').click();">
                Browse a file
            </button>

            <div id="drag-overlay">
                <div id="drag-dashes"></div>
            </div>
            <p id=info>Drag and drop a GeoJSON or browse a local one.</p>
        `;
    }
})(GeoJsonExample = exports.GeoJsonExample || (exports.GeoJsonExample = {}));


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
/******/ 			"geojson-viewer": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/geojson-viewer.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=geojson-viewer_bundle.js.map