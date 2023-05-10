/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/textcanvas.ts":
/*!***************************!*\
  !*** ./src/textcanvas.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextCanvasDynamicExample = void 0;
const harp_text_canvas_1 = __webpack_require__(/*! @here/harp-text-canvas */ "../harp-text-canvas/index.js");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const Stats = __webpack_require__(/*! stats.js */ "../../node_modules/stats.js/build/stats.min.js");
const THREE = __webpack_require__(/*! three */ "three");
/**
 * This example showcases how [[TextCanvas]] can handle dynamic loading of multiple [[FontCatalog]]
 * assets, as well as dynamic real-time text styling.
 *
 */
var TextCanvasDynamicExample;
(function (TextCanvasDynamicExample) {
    const stats = new Stats();
    const gui = new dat_gui_1.GUI({ hideable: false });
    const guiOptions = {
        input: "Type to start...",
        fontName: "",
        gridEnabled: true,
        boundsEnabled: true,
        color: {
            r: 0.0,
            g: 0.0,
            b: 0.0
        },
        backgroundColor: {
            r: 0.0,
            g: 0.0,
            b: 0.0
        }
    };
    let webglRenderer;
    let camera;
    let textCanvas;
    let textRenderStyle;
    let assetsLoaded = false;
    const characterCount = 256;
    let textSample = guiOptions.input;
    const penPosition = new THREE.Vector3(Math.floor(-window.innerWidth / 4.0), 0, 0);
    const textBounds = new THREE.Box2(new THREE.Vector2(), new THREE.Vector2());
    const characterBounds = [];
    let boundsScene;
    let boundsVertexBuffer;
    let boundsGeometry;
    let boundsObject;
    const boundsPosition = penPosition.clone();
    let gridScene;
    let penObject;
    let upperCase = false;
    function addGUIControls() {
        guiOptions.color.r = textRenderStyle.color.r * 255.0;
        guiOptions.color.g = textRenderStyle.color.g * 255.0;
        guiOptions.color.b = textRenderStyle.color.b * 255.0;
        guiOptions.backgroundColor.r = textRenderStyle.backgroundColor.r * 255.0;
        guiOptions.backgroundColor.g = textRenderStyle.backgroundColor.g * 255.0;
        guiOptions.backgroundColor.b = textRenderStyle.backgroundColor.b * 255.0;
        gui.add(guiOptions, "input").onFinishChange((value) => {
            textSample = harp_text_canvas_1.ContextualArabicConverter.instance.convert(value);
            assetsLoaded = false;
            textCanvas.fontCatalog.loadCharset(textSample, textRenderStyle).then(() => {
                assetsLoaded = true;
            });
        });
        gui.add(guiOptions, "gridEnabled");
        gui.add(guiOptions, "boundsEnabled");
        gui.add(textRenderStyle.fontSize, "unit", {
            Em: harp_text_canvas_1.FontUnit.Em,
            Pixel: harp_text_canvas_1.FontUnit.Pixel,
            Point: harp_text_canvas_1.FontUnit.Point,
            Percent: harp_text_canvas_1.FontUnit.Percent
        }).onChange((value) => {
            textRenderStyle.fontSize.unit = Number(value);
        });
        gui.add(textRenderStyle.fontSize, "size", 0.1, 100, 0.1);
        gui.add(textRenderStyle.fontSize, "backgroundSize", 0.0, 100, 0.1);
        gui.addColor(guiOptions, "color").onChange(() => {
            textRenderStyle.color.r = guiOptions.color.r / 255.0;
            textRenderStyle.color.g = guiOptions.color.g / 255.0;
            textRenderStyle.color.b = guiOptions.color.b / 255.0;
        });
        gui.add(textRenderStyle, "opacity", 0.0, 1.0, 0.01);
        gui.addColor(guiOptions, "backgroundColor").onChange(() => {
            textRenderStyle.backgroundColor.r = guiOptions.backgroundColor.r / 255.0;
            textRenderStyle.backgroundColor.g = guiOptions.backgroundColor.g / 255.0;
            textRenderStyle.backgroundColor.b = guiOptions.backgroundColor.b / 255.0;
        });
        gui.add(textRenderStyle, "backgroundOpacity", 0.0, 1.0, 0.1);
        gui.add(guiOptions, "fontName").onFinishChange((value) => {
            textRenderStyle.fontName = value;
            assetsLoaded = false;
            textCanvas.fontCatalog.loadCharset(textSample, textRenderStyle).then(() => {
                assetsLoaded = true;
            });
        });
        gui.add(textRenderStyle, "fontStyle", {
            Regular: harp_text_canvas_1.FontStyle.Regular,
            Bold: harp_text_canvas_1.FontStyle.Bold,
            Italic: harp_text_canvas_1.FontStyle.Italic,
            BoldItalic: harp_text_canvas_1.FontStyle.BoldItalic
        }).onChange((value) => {
            textRenderStyle.fontStyle = Number(value);
            assetsLoaded = false;
            textCanvas.fontCatalog.loadCharset(textSample, textRenderStyle).then(() => {
                assetsLoaded = true;
            });
        });
        gui.add(textRenderStyle, "fontVariant", {
            Regular: harp_text_canvas_1.FontVariant.Regular,
            AllCaps: harp_text_canvas_1.FontVariant.AllCaps,
            SmallCaps: harp_text_canvas_1.FontVariant.SmallCaps
        }).onChange((value) => {
            textRenderStyle.fontVariant = Number(value);
            assetsLoaded = false;
            textCanvas.fontCatalog.loadCharset(textSample, textRenderStyle).then(() => {
                assetsLoaded = true;
            });
        });
    }
    function initDebugGrid() {
        gridScene = new THREE.Scene();
        gridScene.add(new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.PlaneBufferGeometry(window.innerWidth - 1, window.innerHeight - 1, window.innerWidth / 16, window.innerHeight / 16)), new THREE.LineBasicMaterial({
            color: 0x999999,
            depthWrite: false,
            depthTest: false
        })), new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.PlaneBufferGeometry(window.innerWidth - 1, window.innerHeight - 1, 2, 2)), new THREE.LineBasicMaterial({
            color: 0xff0000,
            depthWrite: false,
            depthTest: false
        })));
        penObject = new THREE.Mesh(new THREE.SphereBufferGeometry(4, 4, 4), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        gridScene.add(penObject);
    }
    function initDebugBounds() {
        boundsScene = new THREE.Scene();
        boundsVertexBuffer = new THREE.BufferAttribute(new Float32Array(32 * 4 * characterCount), 4);
        boundsVertexBuffer.setUsage(THREE.DynamicDrawUsage);
        boundsGeometry = new THREE.BufferGeometry();
        boundsGeometry.setAttribute("position", boundsVertexBuffer);
        boundsObject = new THREE.Line(boundsGeometry, new THREE.LineBasicMaterial({
            color: 0xff0000,
            depthTest: false,
            depthWrite: false,
            transparent: true,
            opacity: 0.2
        }));
        boundsScene.add(boundsObject);
    }
    function updateDebugBounds(position) {
        const vertexArray = boundsVertexBuffer.array;
        let arrayIdx = 0;
        vertexArray[arrayIdx++] = textBounds.min.x;
        vertexArray[arrayIdx++] = textBounds.min.y;
        vertexArray[arrayIdx++] = 0.0;
        vertexArray[arrayIdx++] = 1.0;
        vertexArray[arrayIdx++] = textBounds.min.x;
        vertexArray[arrayIdx++] = textBounds.max.y;
        vertexArray[arrayIdx++] = 0.0;
        vertexArray[arrayIdx++] = 1.0;
        vertexArray[arrayIdx++] = textBounds.max.x;
        vertexArray[arrayIdx++] = textBounds.max.y;
        vertexArray[arrayIdx++] = 0.0;
        vertexArray[arrayIdx++] = 1.0;
        vertexArray[arrayIdx++] = textBounds.max.x;
        vertexArray[arrayIdx++] = textBounds.min.y;
        vertexArray[arrayIdx++] = 0.0;
        vertexArray[arrayIdx++] = 1.0;
        vertexArray[arrayIdx++] = textBounds.min.x;
        vertexArray[arrayIdx++] = textBounds.min.y;
        vertexArray[arrayIdx++] = 0.0;
        vertexArray[arrayIdx++] = 1.0;
        for (const bounds of characterBounds) {
            vertexArray[arrayIdx++] = bounds.min.x;
            vertexArray[arrayIdx++] = bounds.min.y;
            vertexArray[arrayIdx++] = 0.0;
            vertexArray[arrayIdx++] = 1.0;
            vertexArray[arrayIdx++] = bounds.min.x;
            vertexArray[arrayIdx++] = bounds.max.y;
            vertexArray[arrayIdx++] = 0.0;
            vertexArray[arrayIdx++] = 1.0;
            vertexArray[arrayIdx++] = bounds.max.x;
            vertexArray[arrayIdx++] = bounds.max.y;
            vertexArray[arrayIdx++] = 0.0;
            vertexArray[arrayIdx++] = 1.0;
            vertexArray[arrayIdx++] = bounds.max.x;
            vertexArray[arrayIdx++] = bounds.min.y;
            vertexArray[arrayIdx++] = 0.0;
            vertexArray[arrayIdx++] = 1.0;
            vertexArray[arrayIdx++] = bounds.min.x;
            vertexArray[arrayIdx++] = bounds.min.y;
            vertexArray[arrayIdx++] = 0.0;
            vertexArray[arrayIdx++] = 1.0;
        }
        boundsVertexBuffer.needsUpdate = true;
        boundsVertexBuffer.updateRange.offset = 0;
        boundsVertexBuffer.updateRange.count = arrayIdx;
        boundsGeometry.setDrawRange(0, arrayIdx / 4);
        boundsObject.position.x = position.x;
        boundsObject.position.y = position.y;
    }
    function onWindowResize() {
        webglRenderer.setSize(window.innerWidth, window.innerHeight);
        camera.left = -window.innerWidth / 2.0;
        camera.right = window.innerWidth / 2.0;
        camera.bottom = -window.innerHeight / 2.0;
        camera.top = window.innerHeight / 2.0;
        camera.updateProjectionMatrix();
    }
    function onKeyUp(event) {
        const key = event.keyCode || event.which;
        if (key === 16) {
            upperCase = false;
        }
    }
    function onKeyDown(event) {
        const key = event.keyCode || event.which;
        // Handle backspaces.
        if (key === 8) {
            textSample = textSample.slice(0, textSample.length - 1);
        }
        else if (key === 16) {
            upperCase = true;
        }
        else {
            const char = upperCase
                ? String.fromCharCode(key)
                : String.fromCharCode(key).toLowerCase();
            textSample += char;
            assetsLoaded = false;
            textCanvas.fontCatalog.loadCharset(char, textRenderStyle).then(() => {
                assetsLoaded = true;
            });
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        webglRenderer.clear();
        if (guiOptions.gridEnabled) {
            penObject.position.set(penPosition.x, penPosition.y, -4.0);
            webglRenderer.render(gridScene, camera);
        }
        penPosition.set(Math.floor(-window.innerWidth / 4.0), 0, 0);
        boundsPosition.copy(penPosition);
        if (assetsLoaded) {
            textCanvas.clear();
            textCanvas.textRenderStyle = textRenderStyle;
            if (guiOptions.boundsEnabled) {
                textCanvas.measureText(textSample, textBounds, {
                    outputCharacterBounds: characterBounds
                });
            }
            textCanvas.addText(textSample, penPosition, { updatePosition: true });
            textCanvas.render(camera);
        }
        if (guiOptions.boundsEnabled) {
            updateDebugBounds(boundsPosition);
            webglRenderer.render(boundsScene, camera);
        }
        stats.update();
    }
    function main() {
        var _a;
        // Init Three.JS, enable backward compatibility with three.js <= 0.117
        webglRenderer = new ((_a = THREE.WebGL1Renderer) !== null && _a !== void 0 ? _a : THREE.WebGLRenderer)({
            canvas: document.getElementById("mapCanvas")
        });
        webglRenderer.domElement.addEventListener("contextmenu", e => e.preventDefault());
        webglRenderer.autoClear = false;
        webglRenderer.setClearColor(0xffffff);
        webglRenderer.setPixelRatio(window.devicePixelRatio);
        webglRenderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(webglRenderer.domElement);
        document.body.appendChild(stats.dom);
        window.addEventListener("resize", onWindowResize);
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
        camera = new THREE.OrthographicCamera(-window.innerWidth / 2.0, window.innerWidth / 2.0, window.innerHeight / 2.0, -window.innerHeight / 2.0);
        camera.position.z = 1.0;
        camera.near = 0.0;
        camera.updateProjectionMatrix();
        // Init TextCanvas
        textRenderStyle = new harp_text_canvas_1.TextRenderStyle({
            fontSize: { unit: harp_text_canvas_1.FontUnit.Pixel, size: 64.0, backgroundSize: 8.0 },
            color: new THREE.Color(0xff0000),
            backgroundColor: new THREE.Color(0x000000),
            backgroundOpacity: 1.0
        });
        harp_text_canvas_1.FontCatalog.load("resources/fonts/Default_FontCatalog.json", 2048).then((loadedFontCatalog) => {
            textCanvas = new harp_text_canvas_1.TextCanvas({
                renderer: webglRenderer,
                fontCatalog: loadedFontCatalog,
                minGlyphCount: 16,
                maxGlyphCount: characterCount
            });
            loadedFontCatalog.loadCharset(textSample, textRenderStyle).then(() => {
                assetsLoaded = true;
            });
        });
        // Init Debug Visualization
        initDebugBounds();
        initDebugGrid();
        addGUIControls();
        // Animation loop
        animate();
    }
    main();
})(TextCanvasDynamicExample = exports.TextCanvasDynamicExample || (exports.TextCanvasDynamicExample = {}));


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
/******/ 			"textcanvas": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/textcanvas.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=textcanvas_bundle.js.map