/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/PerformanceConfig.ts":
/*!**********************************!*\
  !*** ./lib/PerformanceConfig.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceTestData = void 0;
/**
 * Configurations for benchmark example.
 */
var PerformanceTestData;
(function (PerformanceTestData) {
    const REDUCED_ZOOM_LEVELS = [1, 2, 3, 7, 11, 15, 16, 17, 18, 19];
    const REDUCED_ZOOM_LEVEL_TILTS = [0, 0, 0, 30, 48, 55, 55, 55, 55, 55];
    const ALL_ZOOM_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const ALL_ZOOM_LEVEL_TILTS = [
        0,
        0,
        0,
        10,
        10,
        20,
        30,
        35,
        38,
        42,
        48,
        50,
        52,
        55,
        55,
        55,
        55,
        55,
        55,
        55
    ];
    const TEST_ALL_ZOOM_LEVELS = true;
    const ZOOM_LEVELS_TO_TEST = TEST_ALL_ZOOM_LEVELS ? ALL_ZOOM_LEVELS : REDUCED_ZOOM_LEVELS;
    const ZOOM_LEVEL_TILTS_TO_TEST = TEST_ALL_ZOOM_LEVELS
        ? ALL_ZOOM_LEVEL_TILTS
        : REDUCED_ZOOM_LEVEL_TILTS;
    PerformanceTestData.NEW_YORK_FLYOVER = {
        controlPoints: [
            40.5833105,
            -73.9754567,
            40.7088095,
            -74.0143577,
            40.7589052,
            -73.9848074,
            40.6442765,
            -73.7719587
        ],
        zoomLevels: [10, 14, 18, 5],
        tilts: [42, 55, 55, 10],
        numberOfDrawPoints: 1000
    };
    PerformanceTestData.NEW_YORK_FLYOVER_ZL17 = {
        controlPoints: [
            40.706346,
            -74.010112,
            40.760026,
            -73.968245,
            40.796438,
            -73.940555,
            40.85468,
            -73.931703
        ],
        zoomLevels: [17.1, 17.1, 17.1, 17.1],
        tilts: [0, 0, 0, 0],
        numberOfDrawPoints: 1000
    };
    PerformanceTestData.NEW_YORK_ZOOM = {
        lat: 40.71455,
        long: -74.00714,
        zoomLevels: ZOOM_LEVELS_TO_TEST,
        tilts: ZOOM_LEVEL_TILTS_TO_TEST
    };
    PerformanceTestData.NEW_YORK_ZOOM_REDUCED = {
        lat: 40.71455,
        long: -74.00714,
        zoomLevels: [16],
        tilts: ZOOM_LEVEL_TILTS_TO_TEST
    };
    PerformanceTestData.BERLIN_ZOOM = {
        lat: 52.52,
        long: 13.405,
        zoomLevels: ZOOM_LEVELS_TO_TEST,
        tilts: ZOOM_LEVEL_TILTS_TO_TEST
    };
    PerformanceTestData.PARIS_ZOOM = {
        lat: 48.8566,
        long: 2.3522,
        zoomLevels: ZOOM_LEVELS_TO_TEST,
        tilts: ZOOM_LEVEL_TILTS_TO_TEST
    };
    PerformanceTestData.BELLINZONA_ZOOM = {
        lat: 46.2177542,
        long: 9.0448866,
        zoomLevels: ZOOM_LEVELS_TO_TEST,
        tilts: ZOOM_LEVEL_TILTS_TO_TEST
    };
    // Around the world 4 times
    PerformanceTestData.PARIS_ZOOM_PROXY = {
        lat: 48.8566,
        long: 2.3522 + 4 * 360,
        zoomLevels: ZOOM_LEVELS_TO_TEST,
        tilts: ZOOM_LEVEL_TILTS_TO_TEST
    };
    PerformanceTestData.IZMIR_ZOOM = {
        lat: 38.40389671,
        long: 27.15224164,
        zoomLevels: ZOOM_LEVELS_TO_TEST,
        tilts: ZOOM_LEVEL_TILTS_TO_TEST
    };
    PerformanceTestData.PARIS_FLYOVER = {
        controlPoints: [
            48.7551441,
            2.3409459,
            48.8025186,
            2.3438523,
            48.8556621,
            2.3462173,
            48.8562293,
            2.3058694,
            48.8578814,
            2.2614787
        ],
        zoomLevels: [10, 14, 18, 14, 10],
        tilts: [42, 55, 55, 55, 42],
        numberOfDrawPoints: 5000
    };
    PerformanceTestData.PARIS__LONDON_FLYOVER = {
        controlPoints: [
            48.7551441,
            2.3409459,
            48.8025186,
            2.3438523,
            48.8556621,
            2.3462173,
            48.8562293,
            2.3058694,
            48.8578814,
            2.2614787,
            51.2824072,
            1.0160497,
            51.5078224,
            -0.1281347
        ],
        zoomLevels: [10, 14, 18, 14, 10, 1, 19],
        tilts: [42, 55, 55, 55, 42, 0, 55],
        numberOfDrawPoints: 5000
    };
    PerformanceTestData.PARIS_ZOOM_IN_AND_OUT = {
        controlPoints: [
            48.8566,
            2.3522,
            48.8566,
            2.3522,
            48.8566,
            2.3522,
            48.8566,
            2.3522,
            48.8566,
            2.3522,
            48.8566,
            2.3522
        ],
        zoomLevels: [10, 18, 14, 18, 13, 15],
        tilts: [0, 0, 0, 0, 0, 0],
        numberOfDrawPoints: 250
    };
    PerformanceTestData.BERLIN_ZOOM_IN = {
        controlPoints: [
            52.5,
            13.4,
            52.5,
            13.4,
            52.5,
            13.4,
            52.5,
            13.4,
            52.5,
            13.4,
            52.5,
            13.4,
            52.5,
            13.4,
            52.5,
            13.4,
            52.5,
            13.4
        ],
        zoomLevels: [12, 13, 14, 15, 16, 17, 18, 19, 20],
        tilts: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        numberOfDrawPoints: 250
    };
    PerformanceTestData.PARIS_ZOOM_IN_AND_OUT_2 = {
        controlPoints: [
            48.8566,
            2.3522,
            48.8566,
            2.3522,
            48.8566,
            2.3522,
            48.8566,
            2.3522,
            48.8566,
            2.3522,
            48.8566,
            2.3522
        ],
        zoomLevels: [13, 15, 14, 16, 15, 19],
        tilts: [0, 0, 0, 0, 0, 0],
        numberOfDrawPoints: 100
    };
    PerformanceTestData.MILAN_FLYOVER = {
        controlPoints: [
            42.35882085,
            11.08081451,
            44.61121843,
            9.40003743,
            45.45194999,
            9.18193952,
            45.49194999,
            9.18193952,
            46.45194999,
            8.60979084,
            46.13418703,
            7.48400961,
            45.85169705,
            6.87959287,
            46.3686498,
            8.0091825
        ],
        zoomLevels: [7, 9, 19, 18, 8, 9, 13, 7],
        tilts: [44, 55, 55, 55, 55, 44, 55, 0],
        numberOfDrawPoints: 5000
    };
    PerformanceTestData.EUROPE_FLYOVER = {
        controlPoints: [
            48.51,
            2.21,
            41.23,
            2.1,
            48.21,
            16.36,
            37.98,
            23.73,
            50.27,
            30.31,
            52.52,
            13.4
        ],
        zoomLevels: [10, 17, 9, 1, 8, 16],
        tilts: [42, 55, 38, 0, 35, 55],
        numberOfDrawPoints: 10000
    };
})(PerformanceTestData = exports.PerformanceTestData || (exports.PerformanceTestData = {}));


/***/ }),

/***/ "./lib/PerformanceUtils.ts":
/*!*********************************!*\
  !*** ./lib/PerformanceUtils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceUtils = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "../harp-datasource-protocol/index.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const DebugContext_1 = __webpack_require__(/*! @here/harp-mapview/lib/DebugContext */ "../harp-mapview/lib/DebugContext.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const THREE = __webpack_require__(/*! three */ "three");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
const logger = harp_utils_1.LoggerManager.instance.create("PerformanceUtils");
var PerformanceUtils;
(function (PerformanceUtils) {
    let StatisticsMode;
    (function (StatisticsMode) {
        StatisticsMode[StatisticsMode["None"] = 0] = "None";
        StatisticsMode[StatisticsMode["LastFrame"] = 1] = "LastFrame";
        StatisticsMode[StatisticsMode["All"] = 2] = "All";
    })(StatisticsMode || (StatisticsMode = {}));
    const appStartTime = harp_utils_1.PerformanceTimer.now();
    const DECODER_VALUES = [
        "decode.decodingTime",
        "decode.decodedTiles",
        "geometry.geometryCreationTime",
        "geometryCount.numGeometries",
        "geometryCount.numPoiGeometries",
        "geometryCount.numTechniques",
        "geometryCount.numTextGeometries",
        "geometryCount.numTextPathGeometries"
    ];
    const DEFAULT_THEME = {
        resource: "resources/normal.day.json"
    };
    function getVendorFomContext(context) {
        const availableExtensions = context.getSupportedExtensions();
        if (availableExtensions !== null &&
            availableExtensions.includes("WEBGL_debug_renderer_info")) {
            const infoExtension = context.getExtension("WEBGL_debug_renderer_info");
            if (infoExtension !== null) {
                return {
                    vendor: context.getParameter(infoExtension.UNMASKED_VENDOR_WEBGL),
                    renderer: context.getParameter(infoExtension.UNMASKED_RENDERER_WEBGL)
                };
            }
        }
        return { vendor: "", renderer: "" };
    }
    function initializeMapViewApp(id, decoderCount, powerPreference, theme = DEFAULT_THEME) {
        const canvas = document.getElementById(id);
        const canvasOverlay = document.getElementById("mapOverlay");
        const mapView = new harp_mapview_1.MapView({
            canvas,
            decoderUrl: "./decoder.bundle.js",
            decoderCount,
            theme: theme.resource,
            enableStatistics: true,
            collisionDebugCanvas: canvasOverlay,
            powerPreference
        });
        const zoomLevel = harp_mapview_1.MapViewUtils.calculateZoomLevelFromDistance(mapView, 8000);
        mapView.lookAt({
            target: new harp_geoutils_1.GeoCoordinates(52.518611, 13.376111),
            zoomLevel
        });
        const mapControls = harp_map_controls_1.MapControls.create(mapView);
        mapView.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            if (mapView.canvas.parentNode.style.position !== "absolute") {
                mapView.resize(window.innerWidth, window.innerHeight);
            }
        });
        const glInfo = getVendorFomContext(mapView.renderer.context);
        harp_mapview_1.PerformanceStatistics.instance.configs.set("gl.vendor", glInfo.vendor);
        harp_mapview_1.PerformanceStatistics.instance.configs.set("gl.renderer", glInfo.renderer);
        return {
            mapView,
            mapControls,
            omvDataSourceConnected: false,
            mainDataSource: undefined
        };
    }
    PerformanceUtils.initializeMapViewApp = initializeMapViewApp;
    async function initializeMapView(id, dataSourceType, decoderCount, powerPreference, storageLevelOffsetModifier = 0, theme = DEFAULT_THEME) {
        const mapViewApp = initializeMapViewApp(id, decoderCount, powerPreference, theme);
        // Store time MapView has been initialized
        const appInitTime = harp_utils_1.PerformanceTimer.now();
        // Set to `true` to visualize the text placement collisions
        DebugContext_1.debugContext.setValue("DEBUG_SCREEN_COLLISIONS", false);
        return await new Promise((resolve, reject) => {
            const dataSourceInitialized = connectDataSources(mapViewApp, dataSourceType, storageLevelOffsetModifier);
            dataSourceInitialized
                .then(() => {
                harp_mapview_1.PerformanceStatistics.instance.appResults.set("startTime", appStartTime);
                harp_mapview_1.PerformanceStatistics.instance.appResults.set("initTime", appInitTime);
                resolve(mapViewApp);
            })
                .catch(err => {
                reject(new Error("Failed to initialize WARP datasource"));
            });
        });
    }
    PerformanceUtils.initializeMapView = initializeMapView;
    function connectDataSources(mapViewApp, dataSourceTypes, storageLevelOffsetModifier) {
        const createDataSource = (dataSourceType) => {
            let dataSource;
            switch (dataSourceType) {
                case "OMV":
                    dataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
                        baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
                        apiFormat: harp_vectortile_datasource_1.APIFormat.XYZOMV,
                        styleSetName: "tilezen",
                        authenticationCode: config_1.apikey,
                        authenticationMethod: {
                            method: harp_vectortile_datasource_1.AuthenticationMethod.QueryString,
                            name: "apikey"
                        },
                        copyrightInfo: config_1.copyrightInfo
                    });
                    break;
                default:
                    throw new Error("Unknown data source");
            }
            return dataSource;
        };
        return Promise.all(dataSourceTypes.map(dataSourceType => {
            const dataSource = createDataSource(dataSourceType);
            if (storageLevelOffsetModifier !== undefined && storageLevelOffsetModifier !== 0) {
                dataSource.storageLevelOffset =
                    dataSource.storageLevelOffset + storageLevelOffsetModifier;
            }
            return mapViewApp.mapView.addDataSource(dataSource).then(() => {
                if (dataSource instanceof harp_vectortile_datasource_1.VectorTileDataSource) {
                    mapViewApp.omvDataSourceConnected = true;
                }
                return dataSource;
            });
        }));
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    PerformanceUtils.delay = delay;
    async function setMapCenter(mapViewApp, lat, long, cameraHeight, force) {
        const mapView = mapViewApp.mapView;
        let zoomLevel;
        if (cameraHeight !== undefined) {
            zoomLevel = harp_mapview_1.MapViewUtils.calculateZoomLevelFromDistance(mapView, cameraHeight);
        }
        mapView.lookAt({
            target: new harp_geoutils_1.GeoCoordinates(lat, long),
            zoomLevel
        });
        if (force === true) {
            await delay(0);
            return await setMapCenter(mapViewApp, lat, long, cameraHeight, false);
        }
        else {
            return await new Promise((resolve, reject) => {
                resolve();
            });
        }
    }
    /**
     * Render a frame. Can be used to gather the latest statistics of rendering just this last
     * frame.
     *
     * @param clearFrameEvents - If `true` the current frameEvents are cleared.
     */
    async function renderMapFrame(mapViewApp, returnLastFrameStats = StatisticsMode.All) {
        const mapView = mapViewApp.mapView;
        const currentFrame = mapView.frameNumber;
        return await new Promise((resolve, reject) => {
            const renderCallback = (event) => {
                mapView.removeEventListener(harp_mapview_1.MapViewEventNames.AfterRender, renderCallback);
                const renderedFrames = mapView.frameNumber - currentFrame;
                let lastFrameStats;
                if (returnLastFrameStats !== StatisticsMode.None) {
                    lastFrameStats = harp_mapview_1.PerformanceStatistics.instance.getAsSimpleFrameStatistics(returnLastFrameStats === StatisticsMode.LastFrame);
                }
                resolve({ renderedFrames, lastFrameStats });
            };
            mapView.addEventListener(harp_mapview_1.MapViewEventNames.AfterRender, renderCallback);
            mapView.update();
        });
    }
    /**
     * Record the specified number of frames.
     *
     * @param {MapViewApp} mapViewApp
     * @param {*} clearFrameEvents
     * @param {*} numFrames
     */
    async function recordFramesInner(mapViewApp, numFrames, waitForFinish) {
        const frameResults = await renderMapFrame(mapViewApp, waitForFinish !== true || numFrames >= 1 ? StatisticsMode.All : StatisticsMode.None);
        const isFinished = waitForFinish !== true || !harp_mapview_1.MapViewUtils.mapViewIsLoading(mapViewApp.mapView);
        if (numFrames > 1 || !isFinished) {
            return await new Promise((resolve, reject) => {
                recordFrames(mapViewApp, numFrames - 1, waitForFinish)
                    .then(results => {
                    resolve(results);
                })
                    .catch(() => resolve(undefined));
            });
        }
        else {
            return new Promise((resolve, reject) => {
                resolve(frameResults);
            });
        }
    }
    /**
     * Record the specified number of frames.
     *
     * @param {MapViewApp} mapViewApp
     * @param {*} clearFrameEvents
     * @param {*} numFrames
     */
    async function recordFrames(mapViewApp, numFrames, waitForFinish) {
        const frameResults = await recordFramesInner(mapViewApp, numFrames, waitForFinish);
        if (frameResults !== undefined) {
            frameResults.renderedFrames = numFrames;
        }
        return await new Promise((resolve, reject) => {
            resolve(frameResults);
        });
    }
    function recordRendering(mapViewApp) {
        return new Promise((resolve, reject) => {
            ensureRenderFinished(mapViewApp).then(() => {
                const decodingStatistics = {};
                const statistics = harp_mapview_1.PerformanceStatistics.instance.getAsSimpleFrameStatistics();
                for (const decoderValue of DECODER_VALUES) {
                    const frameValue = statistics.frames.get(decoderValue);
                    if (frameValue !== undefined) {
                        // Use single result per frame containing total for decoding statistics
                        decodingStatistics[decoderValue] = frameValue.reduce((a, b) => a + b, 0);
                    }
                    else {
                        logger.log("Missing decoding statistics for: ", decoderValue);
                    }
                }
                harp_mapview_1.PerformanceStatistics.instance.clearFrames();
                // Run the measurement code, and hopefully trigger all JIT compilation
                recordFrames(mapViewApp, 40, true).then(() => {
                    // Clear the stats, and render the the last frame again and then gather
                    // results.
                    harp_mapview_1.PerformanceStatistics.instance.clearFrames();
                    recordFrames(mapViewApp, 20).then(frameResults => {
                        if (frameResults !== undefined) {
                            const appValues = frameResults.lastFrameStats.appResults;
                            for (const decoderValue of DECODER_VALUES) {
                                frameResults.lastFrameStats.frames.delete(decoderValue);
                                appValues.set(decoderValue, decodingStatistics[decoderValue]);
                            }
                            const lastFrameStats = addStatistics(frameResults.lastFrameStats);
                            resolve(lastFrameStats);
                        }
                        else {
                            resolve(undefined);
                        }
                    });
                });
            });
        });
    }
    /**
     * Measure the time to show the map at the specified location.
     *
     * @export
     * @param {MapViewApp} mapViewApp
     * @param {string} locationName
     * @param {number} lat
     * @param {number} long
     * @param {number} height
     */
    async function measureOpenMapAtLocation(mapViewApp, lat, long, height, showLabels) {
        return await new Promise((resolve, reject) => {
            setMapCenter(mapViewApp, lat, long, height, true).then(() => {
                applyDataFilter(mapViewApp.mapView, showLabels);
                ensureRenderFinished(mapViewApp).then(() => {
                    harp_mapview_1.PerformanceStatistics.instance.clear();
                    mapViewApp.mapView.clearTileCache();
                    mapViewApp.mapView.resetFrameNumber();
                    resolve(recordRendering(mapViewApp));
                });
            });
        });
    }
    PerformanceUtils.measureOpenMapAtLocation = measureOpenMapAtLocation;
    /**
     * Add statistics to the result (avg, median, etc.).
     */
    function addStatistics(frameStatistics) {
        frameStatistics.frameStats = new Map();
        for (const framesObj of frameStatistics.frames) {
            const values = framesObj[1];
            if (Array.isArray(values)) {
                frameStatistics.frameStats.set(framesObj[0], harp_mapview_1.computeArrayStats(values));
            }
        }
        return frameStatistics;
    }
    async function setCamera(mapViewApp, lat, long, zoomLevel, yaw, pitch, force) {
        const mapView = mapViewApp.mapView;
        const target = new harp_geoutils_1.GeoCoordinates(lat, long);
        const tilt = THREE.MathUtils.radToDeg(pitch);
        const heading = -THREE.MathUtils.radToDeg(yaw);
        mapView.lookAt({ target, zoomLevel, tilt, heading });
        if (force === true) {
            await delay(0);
            setCamera(mapViewApp, lat, long, zoomLevel, yaw, pitch, false);
        }
    }
    /**
     * Measure the performance at a specified location and zoom level.
     *
     * @param {*} browser
     * @param {*} locationName
     * @param {*} screenshotsFolder
     * @param {*} lat
     * @param {*} long
     * @param {*} zoomLevel
     * @param {*} tilt
     * @param {*} results
     */
    async function measureOpenMapAtZoomLevel(mapViewApp, lat, long, zoomLevel, tilt, showLabels) {
        return await new Promise((resolve, reject) => {
            ensureRenderFinished(mapViewApp).then(() => {
                harp_mapview_1.PerformanceStatistics.instance.clear();
                mapViewApp.mapView.clearTileCache();
                mapViewApp.mapView.resetFrameNumber();
                setMapCenter(mapViewApp, lat, long);
                setCamera(mapViewApp, lat, long, zoomLevel, 0, tilt);
                resolve(recordRendering(mapViewApp));
            });
        });
    }
    async function zoomLevelTest(mapViewApp, locationName, config, use2D, showLabels, isCancelled) {
        applyDataFilter(mapViewApp.mapView, showLabels);
        return await new Promise(async (resolve, reject) => {
            const mapView = mapViewApp.mapView;
            const zoomLevelResults = {
                configs: new Map(),
                appResults: new Map(),
                frames: new Map(),
                messages: [],
                zoomLevelLabels: [],
                zoomLevelData: undefined
            };
            mapView.resetFrameNumber();
            for (let i = 0; i < config.zoomLevels.length; i++) {
                if (isCancelled !== undefined && isCancelled()) {
                    break;
                }
                // copy decoding and geometry values
                const frameResults = await measureOpenMapAtZoomLevel(mapViewApp, config.lat, config.long, config.zoomLevels[i], use2D ? 0 : config.tilts[i], showLabels);
                if (frameResults !== undefined) {
                    let perZoomLevelData = zoomLevelResults.zoomLevelData;
                    if (perZoomLevelData === undefined) {
                        perZoomLevelData = zoomLevelResults.zoomLevelData = new Map();
                        for (const zoomLevel of config.zoomLevels) {
                            zoomLevelResults.zoomLevelLabels.push(zoomLevel.toString());
                        }
                        for (const series of frameResults.frames) {
                            perZoomLevelData.set(series[0], []);
                        }
                        for (const series of frameResults.appResults) {
                            perZoomLevelData.set(series[0], []);
                        }
                    }
                    const stats = addStatistics(frameResults);
                    for (const series of stats.frameStats) {
                        const value = series[1];
                        if (perZoomLevelData.has(series[0])) {
                            perZoomLevelData.get(series[0]).push(value !== undefined ? value.avg : Number.NaN);
                        }
                    }
                    for (const series of stats.appResults) {
                        const value = series[1];
                        if (perZoomLevelData.has(series[0])) {
                            perZoomLevelData.get(series[0]).push(value);
                        }
                    }
                }
            }
            resolve(zoomLevelResults);
        });
    }
    PerformanceUtils.zoomLevelTest = zoomLevelTest;
    async function executeFlyover(mapViewApp, locations, waitForFrameLoaded, isCancelled) {
        const mapView = mapViewApp.mapView;
        const firstLocation = locations[0];
        setCamera(mapViewApp, firstLocation.lat, firstLocation.long, firstLocation.zoomLevel, 0, firstLocation.tilt, true);
        await ensureRenderFinished(mapViewApp);
        await delay(1000);
        let currentFrameNumber = 0;
        const newStats = new harp_mapview_1.PerformanceStatistics(true, waitForFrameLoaded ? locations.length : locations.length * 2);
        const startTime = harp_utils_1.PerformanceTimer.now();
        return await new Promise((resolve, reject) => {
            const renderCallback = () => {
                if (isCancelled !== undefined && isCancelled()) {
                    mapView.endAnimation();
                    mapView.removeEventListener(harp_mapview_1.MapViewEventNames.AfterRender, renderCallback);
                    resolve(undefined);
                }
                if (waitForFrameLoaded && harp_mapview_1.MapViewUtils.mapViewIsLoading(mapViewApp.mapView)) {
                    mapViewApp.mapView.update();
                }
                else if (currentFrameNumber >= locations.length) {
                    mapView.removeEventListener(harp_mapview_1.MapViewEventNames.AfterRender, renderCallback);
                    const totalTime = harp_utils_1.PerformanceTimer.now() - startTime;
                    newStats.appResults.set("flyoverFPS", (1000 * currentFrameNumber) / totalTime);
                    newStats.appResults.set("flyoverSeconds", totalTime / 1000);
                    newStats.appResults.set("flyoverFrames", currentFrameNumber);
                    if (currentFrameNumber > 1) {
                        const frameEntries = newStats.frameEvents.frameEntries;
                        // The first frame time is the wrong one, it contains the time stamp from
                        // the last frame of the previous benchmark run. To get proper statistics,
                        // we duplicate the value of the seconds frame.
                        const fullFrameTime = frameEntries.get("render.fullFrameTime");
                        fullFrameTime.buffer[0] = fullFrameTime.buffer[1];
                        // Same for the FPS of that first frame.
                        const fps = frameEntries.get("render.fps");
                        fps.buffer[0] = fps.buffer[1];
                    }
                    const flyoverStatistics = newStats.getAsSimpleFrameStatistics();
                    addStatistics(flyoverStatistics);
                    mapView.endAnimation();
                    logger.log("actual number of frames rendered", mapView.frameNumber);
                    resolve(flyoverStatistics);
                }
                else {
                    const location = locations[currentFrameNumber++];
                    setCamera(mapViewApp, location.lat, location.long, location.zoomLevel, 0, location.tilt);
                }
            };
            mapView.addEventListener(harp_mapview_1.MapViewEventNames.AfterRender, renderCallback);
            harp_mapview_1.PerformanceStatistics.instance.clear();
            mapView.resetFrameNumber();
            mapView.beginAnimation();
        });
    }
    async function ensureRenderFinished(mapViewApp) {
        const mapView = mapViewApp.mapView;
        return await new Promise((resolve, reject) => {
            const renderCallback = () => {
                if (mapViewApp.mapView.isDynamicFrame ||
                    harp_mapview_1.MapViewUtils.mapViewIsLoading(mapViewApp.mapView)) {
                    mapViewApp.mapView.update();
                }
                else {
                    mapView.removeEventListener(harp_mapview_1.MapViewEventNames.AfterRender, renderCallback);
                    resolve();
                }
            };
            mapView.addEventListener(harp_mapview_1.MapViewEventNames.AfterRender, renderCallback);
            mapView.update();
        });
    }
    function applyDataFilter(mapView, showLabels) {
        for (const dataSource of mapView.dataSources) {
            if (dataSource instanceof harp_vectortile_datasource_1.VectorTileDataSource) {
                applyDataFilterToDataSource(mapView, dataSource, showLabels);
            }
        }
    }
    function applyDataFilterToDataSource(mapView, dataSource, showLabels) {
        const tileGeometryManager = mapView.tileGeometryManager;
        if (tileGeometryManager === undefined || dataSource === undefined) {
            return;
        }
        tileGeometryManager.clear();
        mapView.clearTileCache(dataSource.name);
        tileGeometryManager.disableKind(harp_datasource_protocol_1.GeometryKind.Label, !showLabels);
    }
    async function measureFlyoverSpline(mapViewApp, _locationName, spline, numFramesOverride, verifyLoaded, use2D, showLabels, laps = 1, isCancelled) {
        harp_utils_1.assert(spline.controlPoints.length / 2 === spline.zoomLevels.length, "Control points and zoom levels must have same number of entries");
        harp_utils_1.assert(spline.controlPoints.length / 2 === spline.tilts.length, "Control points and tilts must have same number of entries");
        applyDataFilter(mapViewApp.mapView, showLabels);
        return await new Promise((resolve, reject) => {
            const numberOfDrawPoints = numFramesOverride !== undefined ? numFramesOverride : spline.numberOfDrawPoints;
            const segments = Math.ceil(numberOfDrawPoints / (spline.controlPoints.length / 2 - 1));
            const controlPoints = [];
            for (let j = 0; j < spline.controlPoints.length / 2; j++) {
                controlPoints.push(new THREE.Vector2(spline.controlPoints[j * 2], spline.controlPoints[j * 2 + 1]));
            }
            const splinePoints = new THREE.SplineCurve(controlPoints).getPoints(numberOfDrawPoints);
            let controlPoint = 0;
            let zoomLevel = 0.0;
            let zoomIncrement = 0.0;
            let tilt = 0.0;
            let tiltIncrement = 0.0;
            let locations = [];
            for (let i = 0; i < numberOfDrawPoints; i++) {
                const pt = splinePoints[i];
                const lat = pt.x;
                const long = pt.y;
                if (i % segments === 0) {
                    zoomLevel = spline.zoomLevels[controlPoint];
                    tilt = use2D ? 0 : spline.tilts[controlPoint];
                    if (++controlPoint < spline.zoomLevels.length) {
                        zoomIncrement = (spline.zoomLevels[controlPoint] - zoomLevel) / segments;
                        tiltIncrement = use2D ? 0 : (spline.tilts[controlPoint] - tilt) / segments;
                    }
                    else {
                        zoomIncrement = 0;
                        tiltIncrement = 0;
                    }
                }
                else {
                    zoomLevel += zoomIncrement;
                    tilt += tiltIncrement;
                }
                locations.push({ lat, long, zoomLevel, tilt });
            }
            if (laps > 1) {
                const originalLocations = locations;
                for (let j = 1; j < laps; ++j) {
                    locations = locations.concat(originalLocations);
                }
            }
            executeFlyover(mapViewApp, locations, verifyLoaded, isCancelled).then(frameStats => {
                resolve(frameStats);
            });
        });
    }
    PerformanceUtils.measureFlyoverSpline = measureFlyoverSpline;
})(PerformanceUtils = exports.PerformanceUtils || (exports.PerformanceUtils = {}));


/***/ }),

/***/ "./src/performance_benchmark.ts":
/*!**************************************!*\
  !*** ./src/performance_benchmark.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceBenchmark = void 0;
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
const dat_gui_1 = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
const PerformanceConfig_1 = __webpack_require__(/*! ../lib/PerformanceConfig */ "./lib/PerformanceConfig.ts");
const PerformanceUtils_1 = __webpack_require__(/*! ../lib/PerformanceUtils */ "./lib/PerformanceUtils.ts");
const logger = harp_utils_1.LoggerManager.instance.create("PerformanceUtils");
const NAME_NUM_DECODER_OPTION = "Num Decoders";
const NAME_POWER_PREFERENCE_OPTION = "Power Preference";
function getDecoderCount(str) {
    const numDecodersStr = encodeURIComponent(NAME_NUM_DECODER_OPTION) + "=";
    const strIndex = str.indexOf(numDecodersStr);
    if (strIndex > 0) {
        const numberSubStr = str.substr(strIndex + numDecodersStr.length);
        const numDecodersParam = parseInt(numberSubStr, 10);
        if (isNaN(numDecodersParam)) {
            logger.warn("Illegal NAN for 'Num Decoders'", numberSubStr);
            return undefined;
        }
        if (numDecodersParam < -1 || numDecodersParam > 32) {
            logger.log(`Illegal value for 'Num Decoders' ${numDecodersParam}. ` +
                "Setting default value for DecoderCount");
            return undefined;
        }
        if (numDecodersParam === -1) {
            return undefined;
        }
        logger.log("Setting DecoderCount to", numDecodersParam);
        return numDecodersParam;
    }
    return undefined;
}
function getPowerPreference(str) {
    const powerPreferenceOptionString = encodeURIComponent(NAME_POWER_PREFERENCE_OPTION) + "=";
    const strIndex = str.indexOf(powerPreferenceOptionString);
    if (strIndex > 0) {
        const endIndex = str.indexOf("&", strIndex + 1);
        const optionSubStr = str.substr(strIndex + powerPreferenceOptionString.length, endIndex > 0 ? endIndex - strIndex : undefined);
        logger.log("Power preference initialized to", optionSubStr);
        return optionSubStr;
    }
    return undefined;
}
function updateUrlOptions() {
    const numDecodersOptionValueStr = decoderCount !== undefined ? decoderCount.toFixed(0) : undefined;
    let searchStr = "";
    if (numDecodersOptionValueStr !== undefined) {
        searchStr +=
            encodeURIComponent(NAME_NUM_DECODER_OPTION) +
                "=" +
                encodeURIComponent(numDecodersOptionValueStr);
    }
    if (powerPreference !== undefined && powerPreference !== "Default") {
        if (searchStr.length > 0) {
            searchStr += "&";
        }
        searchStr +=
            encodeURIComponent(NAME_POWER_PREFERENCE_OPTION) +
                "=" +
                encodeURIComponent(powerPreference);
    }
    if (parent.window.location.search !== searchStr) {
        parent.window.location.search = searchStr;
    }
}
let decoderCount = getDecoderCount(parent.window.location.search);
let powerPreference = getPowerPreference(parent.window.location.search);
const powerPreferenceMap = new Map();
powerPreferenceMap.set("Default", harp_mapview_1.MapViewPowerPreference.Default);
powerPreferenceMap.set("LowPower", harp_mapview_1.MapViewPowerPreference.LowPower);
powerPreferenceMap.set("HighPerformance", harp_mapview_1.MapViewPowerPreference.HighPerformance);
// Append the HTML code for the table styles.
document.head.innerHTML += `
<style>

#canvasDiv {
    pointer-events: none;
}

.labelLine {
    height: 2px;
    text-align: left;
}

.label,
.value {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 0.3;
    font-size: small;
}

.label {
    display: inline-block;
    width: 10em;
}

table {
    border-collapse: collapse;
    width: 100%;
}

table,
th,
td {
    border: 1px solid black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
}

th,
td {
    padding: 1px;
    text-align: left;
}

th {
    background-color: #b9dfbc;
}

.th-row {
    background-color: #809982;
}

tr:hover {
    background-color: #6fceeb;
}

th:hover {
    background-color: #447f90;
}

#tableDiv {
    padding: 10px;
    width: 100%;
    background-color: #f0fef1;
    display: none;
    overflow: scroll;
}

#copyrightNotice {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #f0fef1;
    z-index: 100;
    padding: 2px 5px;
    font-family: sans-serif;
    font-size: 0.8em;
    font-weight: normal;
}
</style>
`;
// Add the HTML code for the table.
const canvasParent = document.getElementById("mapCanvas").parentNode;
canvasParent.innerHTML += `
<div id="tableDiv">
<p class="labelLine">
    <span class="label">Benchmark:</span>
    <span id="testTitle" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">Location:</span>
    <span id="testLocation" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">Canvas Size:</span>
    <span id="testCanvasSize" class="value"></span>
</p>

<p class="labelLine">
    <span class="label">Theme:</span>
    <span id="theme" class="value"></span>
</p>

<p class="labelLine">
    <span class="label" style="">PixelRatio:</span>
    <span id="pixelRatio" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">2D:</span>
    <span id="2D" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">ShowLabels:</span>
    <span id="showLabels" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">FpsLimit:</span>
    <span id="fpsLimit" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">NumDecoders:</span>
    <span id="numDecoders" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">PhasedLoading:</span>
    <span id="phasedLoading" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">Cancelled:</span>
    <span id="cancelled" class="value"></span>
</p>

<p class="labelLine">
    <span class="label">Start:</span>
    <span id="testStart" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">End:</span>
    <span id="testEnd" class="value"></span>
</p>
<p class="labelLine">
    <span class="label">Duration:</span>
    <span id="testDuration" class="value"></span>
</p>
<table id="resultTable"> </table>
</div>
`;
var PerformanceBenchmark;
(function (PerformanceBenchmark) {
    let mapViewApp;
    let gui;
    let benchmarksFolder;
    let openAndZoomFolder;
    let flyOversFolder;
    let cancelButton;
    let isCancelled = false;
    let use2D = false;
    let showLabels = true;
    let disableFading = false;
    let testStart;
    let testEnd;
    let title;
    let location;
    let theme;
    let canvasSize;
    let pixelRatio;
    let fpsLimit = 0;
    let flyoverNumRuns = 1;
    let flyoverNumFrames;
    let numDecoders;
    let latestResult;
    function startTest(testTitle, testLocation) {
        isCancelled = false;
        benchmarksFolder.close();
        title = testTitle;
        location = testLocation;
        testStart = new Date();
        cancelButton.domElement.setAttribute("disabled", "");
        mapViewApp.mapView.disableFading = disableFading;
        hideTable();
    }
    function finishTest() {
        if (benchmarksFolder.closed) {
            benchmarksFolder.open();
        }
        cancelButton.domElement.removeAttribute("disabled");
        testEnd = new Date();
        showTable();
    }
    function cancelRunningTest() {
        if (gui.closed) {
            gui.open();
        }
        logger.warn("Canceling running benchmark");
        isCancelled = true;
    }
    function checkIfCancelled() {
        return isCancelled;
    }
    async function openMapBerlin() {
        startTest("Show Map", "Berlin");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureOpenMapAtLocation(mapViewApp, 52.52, 13.405, 1600, showLabels);
        finishTest();
    }
    async function openMapParis() {
        startTest("Show Map", "Paris");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureOpenMapAtLocation(mapViewApp, 48.8566, 2.3522, 1600, showLabels);
        finishTest();
    }
    async function openMapBellinzona() {
        startTest("Show Map", "Bellinzona");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureOpenMapAtLocation(mapViewApp, 46.2177542, 9.0448866, 10000, showLabels);
        finishTest();
    }
    async function openMapIzmir() {
        startTest("Show Map", "Izmir");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureOpenMapAtLocation(mapViewApp, 38.40389671, 27.15224164, 5000, showLabels);
        finishTest();
    }
    async function doZoom(label, zoomConfig) {
        startTest("Load and Render All Zoom Levels", label);
        latestResult = await PerformanceUtils_1.PerformanceUtils.zoomLevelTest(mapViewApp, label, zoomConfig, use2D, showLabels, checkIfCancelled);
        finishTest();
    }
    async function flyoverNY() {
        startTest("FlyOver", "NewYork");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_NewYork", PerformanceConfig_1.PerformanceTestData.NEW_YORK_FLYOVER, flyoverNumFrames, false, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function flyoverNYZl17() {
        startTest("FlyOver", "NewYork Zl17");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_NewYork_Zl17", PerformanceConfig_1.PerformanceTestData.NEW_YORK_FLYOVER_ZL17, flyoverNumFrames, false, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function flyoverNyLoaded() {
        startTest("FlyOver (All frames loaded)", "NewYork");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_NewYork_Loaded", PerformanceConfig_1.PerformanceTestData.NEW_YORK_FLYOVER, flyoverNumFrames, true, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function flyoverParis() {
        startTest("FlyOver", "Paris");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_Paris", PerformanceConfig_1.PerformanceTestData.PARIS_FLYOVER, flyoverNumFrames, false, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function flyoverParisLoaded() {
        startTest("FlyOver (All frames loaded)", "Paris");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_Paris_Loaded", PerformanceConfig_1.PerformanceTestData.PARIS_FLYOVER, flyoverNumFrames, true, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function flyoverParisLondon() {
        startTest("FlyOver", "Paris/London");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_Paris_London", PerformanceConfig_1.PerformanceTestData.PARIS__LONDON_FLYOVER, flyoverNumFrames, false, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function flyoverParisLondonLoaded() {
        startTest("FlyOver (All frames loaded)", "Paris/London");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_Paris_London_Loaded", PerformanceConfig_1.PerformanceTestData.PARIS__LONDON_FLYOVER, flyoverNumFrames, true, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function flyoverEurope() {
        startTest("FlyOver", "Europe");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_Europe", PerformanceConfig_1.PerformanceTestData.EUROPE_FLYOVER, flyoverNumFrames, false, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function flyoverEuropeLoaded() {
        startTest("FlyOver (All frames loaded)", "Europe");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "Flyover_Europe_Loaded", PerformanceConfig_1.PerformanceTestData.EUROPE_FLYOVER, flyoverNumFrames, true, use2D, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function ZoomInBerlin() {
        startTest("ZoomIn", "Berlin");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "ZoomIn_Berlin", PerformanceConfig_1.PerformanceTestData.BERLIN_ZOOM_IN, flyoverNumFrames, false, true, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function ZoomInOutParis() {
        startTest("ZoomInOut", "Paris");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "ZoomInOut_Paris", PerformanceConfig_1.PerformanceTestData.PARIS_ZOOM_IN_AND_OUT, flyoverNumFrames, false, true, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    async function ZoomInOutParis2() {
        startTest("ZoomInOut2", "Paris");
        latestResult = await PerformanceUtils_1.PerformanceUtils.measureFlyoverSpline(mapViewApp, "ZoomInOut_Paris2", PerformanceConfig_1.PerformanceTestData.PARIS_ZOOM_IN_AND_OUT_2, flyoverNumFrames, false, true, showLabels, flyoverNumRuns, checkIfCancelled);
        finishTest();
    }
    function initGui() {
        gui = new dat_gui_1.GUI({ width: 300 });
        let settingUpGui = true;
        const guiOptions = {
            Theme: {"default":"resources/berlin_tilezen_base.json","berlinDay":"resources/berlin_tilezen_base.json","berlinReducedDay":"resources/berlin_tilezen_day_reduced.json","berlinReducedNight":"resources/berlin_tilezen_night_reduced.json","berlinStreets":"resources/berlin_tilezen_effects_streets.json","berlinOutlines":"resources/berlin_tilezen_effects_outlines.json"},
            PixelRatio: {
                default: undefined,
                "1.5": 1.5,
                "1.0": 1.0,
                "0.5": 0.5
            },
            CanvasSize: {
                default: undefined,
                "1100×900": "1100×900",
                "640×400": "640×400",
                "1024×768": "1024×768",
                "1024×1024": "1024×1024",
                "1280×720": "1280×720",
                "1680×1024": "1680×1024",
                "1920×1080": "1920×1080",
                "2560×1440": "2560×1440",
                "2560×1600": "2560×1600"
            },
            PowerPreference: {
                Default: "Default",
                LowPower: "LowPower",
                HighPerformance: "HighPerformance"
            },
            FpsLimit: {
                "No Limit": 0,
                "1": 1,
                "2": 2,
                "5": 5,
                "10": 10,
                "15": 15,
                "20": 20,
                "30": 30,
                "60": 60
            },
            Use2D: false,
            DisableFading: false,
            ShowLabels: true,
            NumRuns: {
                "1": 1,
                "5": 5,
                "10": 10,
                "25": 25,
                "50": 50,
                "100": 100,
                "1000": 1000
            },
            NumFrames: {
                default: undefined,
                "10": 10,
                "25": 25,
                "50": 50,
                "100": 100,
                "250": 250,
                "500": 500,
                "1000": 1000,
                "2500": 2500,
                "5000": 5000,
                "10000": 10000
            },
            NumDecoders: {
                default: undefined,
                "1": 1,
                "2": 2,
                "3": 3,
                "4": 4,
                "6": 6,
                "8": 8
            },
            throttlingEnabled: mapViewApp.mapView.throttlingEnabled,
            maxTilesPerFrame: mapViewApp.mapView.visibleTileSet.maxTilesPerFrame,
            PhasedLoading: false,
            Berlin: () => {
                openMapBerlin();
            },
            Paris: () => {
                openMapParis();
            },
            Bellinzona: () => {
                openMapBellinzona();
            },
            Izmir: () => {
                openMapIzmir();
            },
            ZoomNY: () => {
                doZoom("Zoom_NewYork", PerformanceConfig_1.PerformanceTestData.NEW_YORK_ZOOM);
            },
            ZoomParis: () => {
                doZoom("Zoom_Paris", PerformanceConfig_1.PerformanceTestData.PARIS_ZOOM);
            },
            ZoomBellinzona: () => {
                doZoom("Zoom_Bellinzona", PerformanceConfig_1.PerformanceTestData.BELLINZONA_ZOOM);
            },
            ZoomIzmir: () => {
                doZoom("Zoom_Izmir", PerformanceConfig_1.PerformanceTestData.IZMIR_ZOOM);
            },
            FlyOverNY: () => {
                flyoverNY();
            },
            FlyOverNYZl17: () => {
                flyoverNYZl17();
            },
            FlyOverNYLoaded: () => {
                flyoverNyLoaded();
            },
            FlyOverParis: () => {
                flyoverParis();
            },
            FlyOverParisLoaded: () => {
                flyoverParisLoaded();
            },
            FlyOverParisLondon: () => {
                flyoverParisLondon();
            },
            FlyOverParisLondonLoaded: () => {
                flyoverParisLondonLoaded();
            },
            FlyOverEurope: () => {
                flyoverEurope();
            },
            FlyOverEuropeLoaded: () => {
                flyoverEuropeLoaded();
            },
            ZoomInBerlin: () => {
                ZoomInBerlin();
            },
            ZoomInOutParis: () => {
                ZoomInOutParis();
            },
            ZoomInOutParis2: () => {
                ZoomInOutParis2();
            },
            Cancel: () => {
                cancelRunningTest();
            },
            HideResults: () => {
                hideTable();
            },
            SaveResults: () => {
                saveTable();
            }
        };
        benchmarksFolder = gui.addFolder("Benchmarks");
        benchmarksFolder
            .add(guiOptions, "Theme", guiOptions.Theme)
            .onChange((themeUrl) => {
            theme = themeUrl;
            const fontUriResolver = {
                resolveUri: (uri) => {
                    // FIXME: Style file should contain proper URI with schema like font://...
                    if (uri === "fonts/Default_FontCatalog.json") {
                        return harp_utils_1.getAppBaseUrl() + "resources/fonts/Default_FontCatalog.json";
                    }
                    else {
                        return uri;
                    }
                }
            };
            harp_mapview_1.ThemeLoader.load(themeUrl, { uriResolver: fontUriResolver }).then(async (newTheme) => {
                mapViewApp.mapView.clearTileCache();
                await mapViewApp.mapView.setTheme(newTheme);
            });
        })
            .setValue({"default":"resources/berlin_tilezen_base.json","berlinDay":"resources/berlin_tilezen_base.json","berlinReducedDay":"resources/berlin_tilezen_day_reduced.json","berlinReducedNight":"resources/berlin_tilezen_night_reduced.json","berlinStreets":"resources/berlin_tilezen_effects_streets.json","berlinOutlines":"resources/berlin_tilezen_effects_outlines.json"}.default);
        benchmarksFolder
            .add(guiOptions, "CanvasSize", guiOptions.CanvasSize)
            .onChange((size) => {
            const theCanvasElement = document.getElementById("mapCanvas");
            const canvasDiv = theCanvasElement.parentNode;
            if (size !== undefined && size !== "undefined") {
                const w = size.split("×")[0];
                const h = size.split("×")[1];
                canvasDiv.style.width = w + "px";
                canvasDiv.style.height = h + "px";
                canvasDiv.style.position = "absolute";
                mapViewApp.mapView.resize(theCanvasElement.clientWidth, theCanvasElement.clientHeight);
            }
            else {
                canvasDiv.style.removeProperty("position");
                canvasDiv.style.removeProperty("width");
                canvasDiv.style.removeProperty("height");
                mapViewApp.mapView.resize(theCanvasElement.clientWidth, theCanvasElement.clientHeight);
            }
            canvasSize = `${theCanvasElement.clientWidth}×${theCanvasElement.clientHeight}`;
        })
            .setValue(undefined);
        benchmarksFolder
            .add(guiOptions, "PowerPreference", guiOptions.PowerPreference)
            .onChange((powerPreferenceValue) => {
            powerPreference = powerPreferenceValue;
            if (!settingUpGui) {
                alert("New value for 'PowerPreference' active after browser reload");
                updateUrlOptions();
            }
        })
            .setValue(powerPreference === undefined ? "Default" : powerPreference);
        benchmarksFolder
            .add(guiOptions, "NumDecoders", guiOptions.NumDecoders)
            .onChange((numDecodersString) => {
            decoderCount =
                numDecodersString !== undefined && numDecodersString !== "undefined"
                    ? parseFloat(numDecodersString)
                    : undefined;
            if (!settingUpGui) {
                alert("New value for 'NumDecoders' active after browser reload");
            }
            updateUrlOptions();
        })
            .setValue(decoderCount === undefined ? undefined : decoderCount.toFixed(0));
        benchmarksFolder
            .add(guiOptions, "throttlingEnabled")
            .onFinishChange(value => {
            mapViewApp.mapView.throttlingEnabled = value;
        })
            .listen();
        benchmarksFolder
            .add(guiOptions, "PixelRatio", guiOptions.PixelRatio)
            .onChange((ratioString) => {
            const ratio = ratioString === "undefined" ? undefined : parseFloat(ratioString);
            pixelRatio = ratio;
            mapViewApp.mapView.dynamicPixelRatio = ratio;
        })
            .setValue("undefined");
        benchmarksFolder
            .add(guiOptions, "FpsLimit", guiOptions.FpsLimit)
            .onChange((limit) => {
            fpsLimit = limit;
            mapViewApp.mapView.maxFps = limit;
        })
            .setValue(0);
        benchmarksFolder
            .add(guiOptions, "Use2D", guiOptions.Use2D)
            .onChange((d2) => {
            use2D = d2 === true;
        });
        benchmarksFolder
            .add(guiOptions, "DisableFading", guiOptions.DisableFading)
            .onChange((disable) => {
            disableFading = disable === true;
        });
        benchmarksFolder
            .add(guiOptions, "ShowLabels", guiOptions.ShowLabels)
            .onChange((labels) => {
            showLabels = labels === true;
        });
        benchmarksFolder
            .add(guiOptions, "maxTilesPerFrame", 0, 10, 1)
            .onFinishChange(value => {
            mapViewApp.mapView.visibleTileSet.maxTilesPerFrame = value;
        })
            .listen();
        openAndZoomFolder = benchmarksFolder.addFolder("OpenAndZoom");
        openAndZoomFolder.add(guiOptions, "Berlin");
        openAndZoomFolder.add(guiOptions, "Paris");
        openAndZoomFolder.add(guiOptions, "Bellinzona");
        openAndZoomFolder.add(guiOptions, "Izmir");
        openAndZoomFolder.add(guiOptions, "ZoomNY");
        openAndZoomFolder.add(guiOptions, "ZoomParis");
        openAndZoomFolder.add(guiOptions, "ZoomBellinzona");
        openAndZoomFolder.add(guiOptions, "ZoomIzmir");
        flyOversFolder = benchmarksFolder.addFolder("FlyOvers");
        flyOversFolder
            .add(guiOptions, "NumRuns", guiOptions.NumRuns)
            .onChange((numRuns) => {
            flyoverNumRuns = numRuns;
        })
            .setValue(1);
        flyOversFolder
            .add(guiOptions, "NumFrames", guiOptions.NumFrames)
            .onChange((numFrames) => {
            flyoverNumFrames = numFrames;
        })
            .setValue(undefined);
        flyOversFolder.add(guiOptions, "ZoomInBerlin");
        flyOversFolder.add(guiOptions, "ZoomInOutParis");
        flyOversFolder.add(guiOptions, "ZoomInOutParis2");
        flyOversFolder.add(guiOptions, "FlyOverNY");
        flyOversFolder.add(guiOptions, "FlyOverNYZl17");
        flyOversFolder.add(guiOptions, "FlyOverNYLoaded");
        flyOversFolder.add(guiOptions, "FlyOverParis");
        flyOversFolder.add(guiOptions, "FlyOverParisLoaded");
        flyOversFolder.add(guiOptions, "FlyOverParisLondon");
        flyOversFolder.add(guiOptions, "FlyOverParisLondonLoaded");
        flyOversFolder.add(guiOptions, "FlyOverEurope");
        flyOversFolder.add(guiOptions, "FlyOverEuropeLoaded");
        benchmarksFolder.open();
        openAndZoomFolder.open();
        flyOversFolder.open();
        cancelButton = gui.add(guiOptions, "Cancel");
        gui.add(guiOptions, "HideResults");
        gui.add(guiOptions, "SaveResults");
        cancelButton.domElement.setAttribute("disabled", "");
        settingUpGui = false;
    }
    async function init() {
        mapViewApp = await PerformanceUtils_1.PerformanceUtils.initializeMapView("mapCanvas", ["OMV"], decoderCount, powerPreferenceMap.get(powerPreference === undefined ? "Default" : powerPreference), undefined, { resource: {"default":"resources/berlin_tilezen_base.json","berlinDay":"resources/berlin_tilezen_base.json","berlinReducedDay":"resources/berlin_tilezen_day_reduced.json","berlinReducedNight":"resources/berlin_tilezen_night_reduced.json","berlinStreets":"resources/berlin_tilezen_effects_streets.json","berlinOutlines":"resources/berlin_tilezen_effects_outlines.json"}.default });
        if (mapViewApp.mainDataSource !== undefined) {
            if (mapViewApp.mainDataSource.decoder instanceof harp_mapview_1.WorkerBasedDecoder) {
                numDecoders = mapViewApp.mainDataSource.decoder.workerCount;
            }
        }
        initGui();
    }
    function showTable() {
        createTable(latestResult);
        const tableDiv = document.getElementById("tableDiv");
        tableDiv.style.display = "block";
    }
    function hideTable() {
        const tableDiv = document.getElementById("tableDiv");
        tableDiv.style.display = "none";
    }
    function saveTable() {
        const stats = latestResult;
        if (stats) {
            let resultCSV = "Name, Avg, Min, Max, Median, Med 75, Med 90, Med 95, Med 97, Med 99, Med 999\n";
            const frameStatsStrings = Array.from(stats.frameStats.keys()).sort();
            for (const stat of frameStatsStrings) {
                const frameStat = stats.frameStats.get(stat);
                const row = `${stat}, ${valueString(frameStat.avg)}, ${valueString(frameStat.min)}, ${valueString(frameStat.max)}, ${valueString(frameStat.median)}, ${valueString(frameStat.median75)}, ${valueString(frameStat.median90)}, ${valueString(frameStat.median95)}, ${valueString(frameStat.median97)}, ${valueString(frameStat.median99)}, ${valueString(frameStat.median999)}\n`;
                resultCSV += row;
            }
            const type = "text/csv";
            const blob = new Blob([resultCSV], { type });
            const a = document.createElement("a");
            const url = URL.createObjectURL(blob);
            a.download = `results.csv`;
            a.href = url;
            a.dispatchEvent(new MouseEvent(`click`, {
                bubbles: true,
                cancelable: true,
                view: window
            }));
        }
    }
    const million = 1024 * 1024;
    const digits = 2;
    function valueString(value) {
        const isHuge = value > million;
        if (isHuge) {
            value = value / million;
        }
        let str = value.toFixed(digits);
        while (str.length > 1 && str.includes(".") && (str.endsWith("0") || str.endsWith("."))) {
            str = str.substr(0, str.length - 1);
        }
        return str + (isHuge ? " M" : "");
    }
    function addHeaderCell(row, text, cssClass) {
        const cell = document.createElement("th");
        if (cssClass !== undefined) {
            cell.className = cssClass;
        }
        cell.appendChild(document.createTextNode(text));
        row.appendChild(cell);
    }
    function addCell(row, text) {
        const cell = document.createElement("td");
        cell.appendChild(document.createTextNode(text));
        row.appendChild(cell);
    }
    function createTable(stats) {
        document.getElementById("testTitle").innerHTML = title;
        document.getElementById("testLocation").innerHTML = location;
        document.getElementById("testCanvasSize").innerHTML = canvasSize;
        document.getElementById("pixelRatio").innerHTML = String(pixelRatio);
        document.getElementById("theme").innerHTML = theme;
        document.getElementById("2D").innerHTML = String(use2D);
        document.getElementById("showLabels").innerHTML = String(showLabels);
        document.getElementById("fpsLimit").innerHTML = String(fpsLimit);
        document.getElementById("numDecoders").innerHTML = String(numDecoders);
        document.getElementById("cancelled").innerHTML = String(isCancelled);
        document.getElementById("testStart").innerHTML = testStart.toLocaleTimeString();
        document.getElementById("testEnd").innerHTML = testEnd.toLocaleTimeString();
        document.getElementById("testDuration").innerHTML = ((testEnd.valueOf() - testStart.valueOf()) /
            1000).toFixed(2);
        const tableDiv = document.getElementById("tableDiv");
        const table = document.getElementById("resultTable");
        table.innerHTML = "";
        if (stats !== undefined && stats.frameStats !== undefined) {
            const frameStatsStrings = Array.from(stats.frameStats.keys()).sort();
            let headerRow = table.insertRow();
            if (stats.appResults.size > 0) {
                addHeaderCell(headerRow, "Name", "th-row");
                addHeaderCell(headerRow, "Value", "th-row");
                for (const appValue of stats.appResults) {
                    const tr = table.insertRow();
                    addHeaderCell(tr, appValue[0]);
                    addCell(tr, valueString(appValue[1]));
                }
                headerRow = table.insertRow();
                headerRow = table.insertRow();
            }
            addHeaderCell(headerRow, "Name", "th-row");
            addHeaderCell(headerRow, "Avg", "th-row");
            addHeaderCell(headerRow, "Min", "th-row");
            addHeaderCell(headerRow, "Max", "th-row");
            addHeaderCell(headerRow, "Median", "th-row");
            addHeaderCell(headerRow, "Med 75", "th-row");
            addHeaderCell(headerRow, "Med 90", "th-row");
            addHeaderCell(headerRow, "Med 95", "th-row");
            addHeaderCell(headerRow, "Med 97", "th-row");
            addHeaderCell(headerRow, "Med 99", "th-row");
            addHeaderCell(headerRow, "Med 999", "th-row");
            for (const stat of frameStatsStrings) {
                const frameStat = stats.frameStats.get(stat);
                const tr = table.insertRow();
                addHeaderCell(tr, stat);
                addCell(tr, valueString(frameStat.avg));
                addCell(tr, valueString(frameStat.min));
                addCell(tr, valueString(frameStat.max));
                addCell(tr, valueString(frameStat.median));
                addCell(tr, valueString(frameStat.median75));
                addCell(tr, valueString(frameStat.median90));
                addCell(tr, valueString(frameStat.median95));
                addCell(tr, valueString(frameStat.median97));
                addCell(tr, valueString(frameStat.median99));
                addCell(tr, valueString(frameStat.median999));
            }
        }
        if (stats !== undefined &&
            stats.zoomLevelData !== undefined &&
            stats.zoomLevelData.size > 0) {
            if (stats.zoomLevelLabels !== undefined) {
                table.insertRow();
                const tr = table.insertRow();
                addHeaderCell(tr, "Value", "th-row");
                for (const label of stats.zoomLevelLabels) {
                    addHeaderCell(tr, label, "th-row");
                }
            }
            const zoomLevelEntries = Array.from(stats.zoomLevelData.keys()).sort();
            const firstZoomLevelEntry = stats.zoomLevelData.get(zoomLevelEntries[0]);
            if (Array.isArray(firstZoomLevelEntry) && firstZoomLevelEntry.length < 30) {
                table.insertRow();
                table.insertRow();
                for (const stat of zoomLevelEntries) {
                    const value = stats.zoomLevelData.get(stat);
                    const tr = table.insertRow();
                    addHeaderCell(tr, stat);
                    if (Array.isArray(value)) {
                        for (const v of value) {
                            addCell(tr, valueString(v));
                        }
                    }
                    else {
                        addCell(tr, valueString(value));
                    }
                }
            }
        }
        tableDiv.style.display = "block";
    }
    init();
})(PerformanceBenchmark = exports.PerformanceBenchmark || (exports.PerformanceBenchmark = {}));


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
/******/ 			"performance_benchmark": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/performance_benchmark.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=performance_benchmark_bundle.js.map