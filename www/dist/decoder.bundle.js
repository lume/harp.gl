/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@here/harp-datasource-protocol/index-decoder.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/index-decoder.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./lib/StyleSetEvaluator */ "./node_modules/@here/harp-datasource-protocol/lib/StyleSetEvaluator.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/IMeshBuffers */ "./node_modules/@here/harp-datasource-protocol/lib/IMeshBuffers.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Outliner */ "./node_modules/@here/harp-datasource-protocol/lib/Outliner.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/ThreeBufferUtils */ "./node_modules/@here/harp-datasource-protocol/lib/ThreeBufferUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/GeoJsonDataType */ "./node_modules/@here/harp-datasource-protocol/lib/GeoJsonDataType.js"), exports);
//# sourceMappingURL=index-decoder.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Components used for the decoding and styling of data that is used by the Datasources.
 *
 * @remarks
 * The DataSource Protocol package contains components used for the decoding and styling
 * of data that is used by the Datasources.
 * This code is shared between the ui-thread and the web-workers which are
 * used to parallelise the decoding of the data.
 * This module contains interfaces for choosing techniques form the techniques
 * catalog that are applied via the {@link Theme} files to draw geometries on the map canvas.
 *
 * @packageDocumentation
 */
__exportStar(__webpack_require__(/*! ./lib/ColorUtils */ "./node_modules/@here/harp-datasource-protocol/lib/ColorUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Techniques */ "./node_modules/@here/harp-datasource-protocol/lib/Techniques.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/TechniqueParams */ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueParams.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Theme */ "./node_modules/@here/harp-datasource-protocol/lib/Theme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/PostEffects */ "./node_modules/@here/harp-datasource-protocol/lib/PostEffects.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/PropertyValue */ "./node_modules/@here/harp-datasource-protocol/lib/PropertyValue.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/InterpolatedPropertyDefs */ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/WorkerServiceProtocol */ "./node_modules/@here/harp-datasource-protocol/lib/WorkerServiceProtocol.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/WorkerTilerProtocol */ "./node_modules/@here/harp-datasource-protocol/lib/WorkerTilerProtocol.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/WorkerDecoderProtocol */ "./node_modules/@here/harp-datasource-protocol/lib/WorkerDecoderProtocol.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/ITileDecoder */ "./node_modules/@here/harp-datasource-protocol/lib/ITileDecoder.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/ITiler */ "./node_modules/@here/harp-datasource-protocol/lib/ITiler.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/DecodedTile */ "./node_modules/@here/harp-datasource-protocol/lib/DecodedTile.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/TileInfo */ "./node_modules/@here/harp-datasource-protocol/lib/TileInfo.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/GeoJsonDataType */ "./node_modules/@here/harp-datasource-protocol/lib/GeoJsonDataType.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/ThemeVisitor */ "./node_modules/@here/harp-datasource-protocol/lib/ThemeVisitor.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/StringEncodedNumeral */ "./node_modules/@here/harp-datasource-protocol/lib/StringEncodedNumeral.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ColorUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ColorUtils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorUtils = void 0;
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const THREE = __webpack_require__(/*! three */ "three");
const RGBA_1 = __webpack_require__(/*! ./RGBA */ "./node_modules/@here/harp-datasource-protocol/lib/RGBA.js");
const SHIFT_TRANSPARENCY = 24;
const SHIFT_RED = 16;
const SHIFT_GREEN = 8;
const SHIFT_BLUE = 0;
//    Allow bitwise operations for colors decoding
const HEX_FULL_CHANNEL = 0xff;
const HEX_RGB_MASK = 0xffffff;
const HEX_TRGB_MASK = 0xffffffff;
const tmpColor = new THREE.Color();
/**
 * Utilities to convert RGBA colors encoded in custom number (hex) format to THREE.Color objects.
 *
 * The functions provided allows for conversion from and to our custom number based color format,
 * which contains transparency, red, green and blue color channels in a way that each channel
 * occupies 8 bits of resulting number (color format 0xTTRRGGBB).
 * In order to preserve compatibility with THREE.Color class and its hexadecimal color
 * representation, we do not store __alpha__ channel in encoded color's number, but replace it
 * with __transparency__ channel, which is simply opposite to alpha:
 * ```transparency = 0xFF - alpha```
 * Such channel value is stored on the oldest bits (octet) in the integral color (numeric) value,
 * so it is fully compatible with THREE.Color numerical representation (@see [[THREE.Color.getHex]],
 * [[THREE.Color.setHex]]).
 * See also [[getHexFromRgba]] and [[getRgbaFromHex]] for more info about conversion.
 */
var ColorUtils;
(function (ColorUtils) {
    /**
     * Encodes RGBA channels in custom number coded format (represented in hex as 0xTTRRGGBB).
     *
     * We do not use direct alpha channel mapping to hex in order to preserve compatibility
     * with THREE.js color format (0xRRGGBB). This is done by encoding transparency
     * (255 - alpha) instead of alpha on the oldest bits, shifted by [[SHIFT_TRANSPARENCY]].
     * This way simple 0xRRGGBB color is equal to 0x00RRGGBB without transparency and
     * color defining transparency (alpha < 255) is always recognizable by the oldest
     * bit set:
     * ```typescript
     * (color >> SHIFT_TRANSPARENCY) !== 0.
     * ```
     * @note All input components are floating points in <0, 1> range (inclusively).
     * @note Although method encodes transparency channel in single number value, it is still
     * compatible with THREE.js number based color coding (0xRRGGBB), so you may pass this value to
     * [[THREE.Color]] c-tor, but keep in mind that transparency will be silently ignored.
     */
    function getHexFromRgba(r, g, b, a) {
        harp_utils_1.assert(a >= 0 && a <= 1);
        const t = HEX_FULL_CHANNEL - Math.floor(a * HEX_FULL_CHANNEL);
        return ((t << SHIFT_TRANSPARENCY) ^
            ((r * HEX_FULL_CHANNEL) << SHIFT_RED) ^
            ((g * HEX_FULL_CHANNEL) << SHIFT_GREEN) ^
            ((b * HEX_FULL_CHANNEL) << SHIFT_BLUE));
    }
    ColorUtils.getHexFromRgba = getHexFromRgba;
    /**
     * Encodes RGB all color channels in single number with format 0xRRGGBB.
     *
     * All input channels should be in <0, 1> range (inclusively).
     * See also [[getHexFromRgba]] for more information about [[THREE.Color]] compatibility.
     *
     * @note This method is fully compatible with THREE.js color encoding, so
     * you may pass this value directly to THREE.Color c-tor.
     */
    function getHexFromRgb(r, g, b) {
        harp_utils_1.assert(r >= 0 && r <= 1);
        harp_utils_1.assert(g >= 0 && g <= 1);
        harp_utils_1.assert(b >= 0 && b <= 1);
        return (((r * HEX_FULL_CHANNEL) << SHIFT_RED) ^
            ((g * HEX_FULL_CHANNEL) << SHIFT_GREEN) ^
            ((b * HEX_FULL_CHANNEL) << SHIFT_BLUE));
    }
    ColorUtils.getHexFromRgb = getHexFromRgb;
    /**
     * Encode and convert HSL value to number coded color format (0xRRGGBB).
     *
     * @see getHexFromRgb.
     * @param h - Hue component value between 0 and 1.
     * @param s - Saturation value between 0 and 1.
     * @param l - Lightness channel between 0 and 1.
     */
    function getHexFromHsl(h, s, l) {
        harp_utils_1.assert(h >= 0 && h <= 1);
        harp_utils_1.assert(s >= 0 && s <= 1);
        harp_utils_1.assert(l >= 0 && l <= 1);
        return tmpColor.setHSL(h, s, l).getHex();
    }
    ColorUtils.getHexFromHsl = getHexFromHsl;
    /**
     * Retrieve RGBA channels separately from number encoded custom color format.
     *
     * Provides an easy way for channels extraction (r, g, b, a) from custom number coded color
     * format.
     *
     * @see getHexFromRgba.
     * @param hex - The number encoded color value (0xRRGGBB or 0xTTRRGGBB in hex).
     * @returns r, g, b, a channels in simple object, where each channel value is saved as floating
     * point from 0 to 1 inclusively.
     */
    function getRgbaFromHex(hex, target = new RGBA_1.RGBA()) {
        harp_utils_1.assert((hex & ~HEX_TRGB_MASK) === 0, "Wrong hex format");
        target.r = ((hex >> SHIFT_RED) & HEX_FULL_CHANNEL) / HEX_FULL_CHANNEL;
        target.g = ((hex >> SHIFT_GREEN) & HEX_FULL_CHANNEL) / HEX_FULL_CHANNEL;
        target.b = ((hex >> SHIFT_BLUE) & HEX_FULL_CHANNEL) / HEX_FULL_CHANNEL;
        target.a =
            (HEX_FULL_CHANNEL - ((hex >> SHIFT_TRANSPARENCY) & HEX_FULL_CHANNEL)) /
                HEX_FULL_CHANNEL;
        return target;
    }
    ColorUtils.getRgbaFromHex = getRgbaFromHex;
    /**
     * Determines if number encoded color contains alpha (opacity) defined and different then 255.
     *
     * @param hex - The number encoded color (0xRRGGBB or 0xTTRRGGBB in hex).
     * @returns True if color has transparency defined.
     */
    function hasAlphaInHex(hex) {
        harp_utils_1.assert((hex & ~HEX_TRGB_MASK) === 0, "Wrong hex format");
        return hex >> SHIFT_TRANSPARENCY !== 0;
    }
    ColorUtils.hasAlphaInHex = hasAlphaInHex;
    /**
     * Retrieves alpha color channel from hex encoded color value.
     *
     * @see getHexFromRgba.
     * @param hex - The number encoded color value (representable as 0xRRGGBB or 0xTTRRGGBB in hex).
     * @returns The floating point alpha component in <0, 1> range.
     */
    function getAlphaFromHex(hex) {
        harp_utils_1.assert((hex & ~HEX_TRGB_MASK) === 0, "Wrong hex format");
        return (((HEX_FULL_CHANNEL - (hex >> SHIFT_TRANSPARENCY)) & HEX_FULL_CHANNEL) / HEX_FULL_CHANNEL);
    }
    ColorUtils.getAlphaFromHex = getAlphaFromHex;
    /**
     * Remove transparency info from the number coded color, makes it compatible with external libs.
     *
     * @see getAlphaFromHex.
     * @param hex - The number encoded color value (representable as 0xRRGGBB or 0xTTRRGGBB in hex).
     * @returns number coded color value representable as 0xRRGGBB in hex.
     */
    function removeAlphaFromHex(hex) {
        harp_utils_1.assert((hex & ~HEX_TRGB_MASK) === 0, "Wrong hex format");
        return hex & HEX_RGB_MASK;
    }
    ColorUtils.removeAlphaFromHex = removeAlphaFromHex;
})(ColorUtils = exports.ColorUtils || (exports.ColorUtils = {}));
//# sourceMappingURL=ColorUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/DecodedTile.js":
/*!************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/DecodedTile.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scaleHeight = exports.getFeatureText = exports.getFeatureName = exports.getFeatureId = exports.getProjectionName = exports.getProjection = exports.GeometryType = exports.getArrayConstructor = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const TechniqueAttr_1 = __webpack_require__(/*! ./TechniqueAttr */ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueAttr.js");
const Techniques_1 = __webpack_require__(/*! ./Techniques */ "./node_modules/@here/harp-datasource-protocol/lib/Techniques.js");
/**
 * Returns an array with the data type specified as parameter.
 *
 * @param attr - specifies which type of data is being stored in the array
 */
function getArrayConstructor(attr) {
    switch (attr) {
        case "float":
            return Float32Array;
        case "uint8":
            return Uint8Array;
        case "uint16":
            return Uint16Array;
        case "uint32":
            return Uint32Array;
        case "int8":
            return Int8Array;
        case "int16":
            return Int16Array;
        case "int32":
            return Int32Array;
    }
}
exports.getArrayConstructor = getArrayConstructor;
/**
 * Geometry types supported by [[Geometry]] objects.
 */
var GeometryType;
(function (GeometryType) {
    GeometryType[GeometryType["Unspecified"] = 0] = "Unspecified";
    GeometryType[GeometryType["Point"] = 1] = "Point";
    GeometryType[GeometryType["Line"] = 2] = "Line";
    GeometryType[GeometryType["SolidLine"] = 3] = "SolidLine";
    GeometryType[GeometryType["Text"] = 4] = "Text";
    GeometryType[GeometryType["TextPath"] = 5] = "TextPath";
    GeometryType[GeometryType["ExtrudedLine"] = 6] = "ExtrudedLine";
    GeometryType[GeometryType["Polygon"] = 7] = "Polygon";
    GeometryType[GeometryType["ExtrudedPolygon"] = 8] = "ExtrudedPolygon";
    GeometryType[GeometryType["Object3D"] = 9] = "Object3D";
    GeometryType[GeometryType["Other"] = 1000] = "Other";
})(GeometryType = exports.GeometryType || (exports.GeometryType = {}));
/**
 * Returns the projection object specified in the parameter.
 *
 * @param projectionName - string describing projection to be used
 */
function getProjection(projectionName) {
    switch (projectionName) {
        case "mercator":
            return harp_geoutils_1.mercatorProjection;
        case "webMercator":
            return harp_geoutils_1.webMercatorProjection;
        case "sphere":
            return harp_geoutils_1.sphereProjection;
        case "normalizedEquirectangular":
            return harp_geoutils_1.normalizedEquirectangularProjection;
        case "equirectangular":
            return harp_geoutils_1.equirectangularProjection;
        default:
            throw new Error(`Unknown projection ${projectionName}`);
    } // switch
}
exports.getProjection = getProjection;
/**
 * String with the projection's name.
 *
 * @param projection - `Projection` object containing the name of the projection to retrieve
 */
function getProjectionName(projection) {
    if (projection === harp_geoutils_1.mercatorProjection) {
        return "mercator";
    }
    else if (projection === harp_geoutils_1.webMercatorProjection) {
        return "webMercator";
    }
    else if (projection === harp_geoutils_1.sphereProjection) {
        return "sphere";
    }
    else if (projection === harp_geoutils_1.normalizedEquirectangularProjection) {
        return "normalizedEquirectangular";
    }
    else if (projection === harp_geoutils_1.equirectangularProjection) {
        return "equirectangular";
    }
    throw new Error("Unknown projection");
}
exports.getProjectionName = getProjectionName;
/**
 * @returns Feature id from the provided attribute map.
 * @internal
 */
function getFeatureId(attributeMap) {
    if (attributeMap === undefined) {
        return 0;
    }
    if (typeof attributeMap === "string" || typeof attributeMap === "number") {
        return attributeMap;
    }
    else if (attributeMap.hasOwnProperty("$id")) {
        const id = attributeMap.$id;
        if (typeof id === "string" || typeof id === "number") {
            return id;
        }
    }
    return 0;
}
exports.getFeatureId = getFeatureId;
/**
 * Determine the name of (OMV) feature. It implements the special handling required
 * to determine the text content of a feature from its tags, which are passed in as the `env`.
 *
 * @param env - Environment containing the tags from the (OMV) feature.
 * @param useAbbreviation - `true` to use the abbreviation if available.
 * @param useIsoCode - `true` to use the tag "iso_code".
 * @param languages - List of languages to use, for example: Specify "en" to use the tag "name_en"
 *                  as the text of the string. Order reflects priority.
 */
function getFeatureName(env, basePropName, useAbbreviation, useIsoCode, languages) {
    var _a;
    let name;
    if (basePropName === undefined) {
        basePropName = "name";
    }
    if (useAbbreviation) {
        const abbreviation = env.lookup(`${basePropName}:short`);
        if (typeof abbreviation === "string" && abbreviation.length > 0) {
            return abbreviation;
        }
    }
    if (useIsoCode) {
        const isoCode = env.lookup(`iso_code`);
        if (typeof isoCode === "string" && isoCode.length > 0) {
            return isoCode;
        }
    }
    if (languages !== undefined) {
        for (const lang of languages) {
            name = (_a = env.lookup(`${basePropName}:${lang}`)) !== null && _a !== void 0 ? _a : env.lookup(`${basePropName}_${lang}`);
            if (typeof name === "string" && name.length > 0) {
                return name;
            }
        }
    }
    name = env.lookup(basePropName);
    if (typeof name === "string") {
        return name;
    }
    return undefined;
}
exports.getFeatureName = getFeatureName;
/**
 * Determine the text string of the map feature. It implements the special handling required
 * to determine the text content of a feature from its tags, which are passed in as the `env`.
 *
 * @param feature - Feature, including properties from the (OMV) feature.
 * @param technique - technique defining how text should be created from feature
 * @param languages - List of languages to use, for example: Specify "en" to use the tag "name_en"
 *                  as the text of the string. Order reflects priority.
 */
function getFeatureText(context, technique, languages) {
    let useAbbreviation;
    let useIsoCode;
    const env = context instanceof Expr_1.Env ? context : context.env;
    let propName = "name";
    if (Techniques_1.isTextTechnique(technique) ||
        Techniques_1.isPoiTechnique(technique) ||
        Techniques_1.isLineMarkerTechnique(technique)) {
        if (technique.text !== undefined) {
            return TechniqueAttr_1.evaluateTechniqueAttr(context, technique.text);
        }
        if (technique.label !== undefined) {
            propName = TechniqueAttr_1.evaluateTechniqueAttr(context, technique.label);
            if (typeof propName !== "string") {
                return undefined;
            }
        }
        useAbbreviation = technique.useAbbreviation;
        useIsoCode = technique.useIsoCode;
    }
    return getFeatureName(env, propName, useAbbreviation, useIsoCode, languages);
}
exports.getFeatureText = getFeatureText;
/**
 * Determine whether to scale heights by the projection scale factor for geometry
 * using the given technique.
 * @remarks Unless explicitly defined, the scale factor to convert meters to world space units
 * won't be applied if the tile's level is less than a fixed storage level.
 * @param context - Context for evaluation of technique attributes.
 * @param technique - Technique to be evaluated.
 * @param tileLevel - The level of the tile where the geometry is stored.
 * @returns `true` if height must be scaled, `false` otherwise.
 */
function scaleHeight(context, technique, tileLevel) {
    const SCALED_HEIGHT_MIN_STORAGE_LEVEL = 12;
    const useConstantHeight = TechniqueAttr_1.evaluateTechniqueAttr(context, technique.constantHeight, tileLevel < SCALED_HEIGHT_MIN_STORAGE_LEVEL);
    return !useConstantHeight;
}
exports.scaleHeight = scaleHeight;
//# sourceMappingURL=DecodedTile.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Env.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Env.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapEnv = exports.Env = void 0;
/**
 * A class used to lookup properties by name.
 *
 * @remarks
 * Concrete implementation of `Env` like {@link MapEnv} are used
 * to resolve the property names used in {@link Expr | style expressions}.
 *
 * @example
 * ```typescript
 * const env = new MapEnv({
 *     kind: "landuse",
 * });
 *
 * const expr = Expr.fromJson(["get", "kind"]);
 *
 * const value = expr.evaluate(env);
 *
 * console.log(`kind is '${value}`);
 * ```
 */
class Env {
    /**
     * Returns `true` if the given object is an instance of {@link Env}.
     *
     * @param object - The object to test.
     */
    static isEnv(object) {
        return object instanceof Env;
    }
    /**
     * Returns property in {@link Env} by name.
     *
     * @param name - Name of property.
     */
    lookup(name) {
        return undefined;
    }
    /**
     * Return an object containing all properties of this environment. (Here: empty object).
     */
    unmap() {
        return {};
    }
}
exports.Env = Env;
/**
 * `MapEnv` is a concrete implementation of {@link Env} that
 * creates a lookup environment from a set of properties.
 *
 * @example
 * ```typescript
 * const baseEnv = new MapEnv({
 *     $zoom: 14,
 * });
 *
 * // extends baseEnv with a the new binding (kind, "landuse").
 * const env = new MapEnv({ kind: "landuse" }, baseEnv);
 *
 * const zoom = env.lookup("$zoom"); // zoom is 14
 * const kind = env.lookup("kind"); // kind is is "landuse"
 *
 * const expr = Expr.fromJson(["get", "kind"]);
 * const value = expr.evaluate(env); // value is "landuse"
 * ```
 */
class MapEnv extends Env {
    constructor(entries, parent) {
        super();
        this.entries = entries;
        this.parent = parent;
    }
    /**
     * Returns property in {@link Env} by name.
     *
     * @param name - Name of property.
     * @override
     */
    lookup(name) {
        if (this.entries.hasOwnProperty(name)) {
            const value = this.entries[name];
            if (value !== undefined) {
                return value;
            }
        }
        return this.parent ? this.parent.lookup(name) : undefined;
    }
    /**
     * Return an object containing all properties of this environment, takes care of the parent
     * object.
     * @override
     */
    unmap() {
        const obj = this.parent ? this.parent.unmap() : {};
        for (const key in this.entries) {
            if (this.entries.hasOwnProperty(key)) {
                obj[key] = this.entries[key];
            }
        }
        return obj;
    }
}
exports.MapEnv = MapEnv;
//# sourceMappingURL=Env.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Expr.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterpolateExpr = exports.StepExpr = exports.CaseExpr = exports.MatchExpr = exports.LookupExpr = exports.CallExpr = exports.HasAttributeExpr = exports.ObjectLiteralExpr = exports.StringLiteralExpr = exports.NumberLiteralExpr = exports.BooleanLiteralExpr = exports.NullLiteralExpr = exports.LiteralExpr = exports.VarExpr = exports.Expr = exports.ExprScope = exports.isJsonExpr = exports.ExprDependencies = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const THREE = __webpack_require__(/*! three */ "three");
const ExprEvaluator_1 = __webpack_require__(/*! ./ExprEvaluator */ "./node_modules/@here/harp-datasource-protocol/lib/ExprEvaluator.js");
const ExprInstantiator_1 = __webpack_require__(/*! ./ExprInstantiator */ "./node_modules/@here/harp-datasource-protocol/lib/ExprInstantiator.js");
const ExprParser_1 = __webpack_require__(/*! ./ExprParser */ "./node_modules/@here/harp-datasource-protocol/lib/ExprParser.js");
const InterpolatedPropertyDefs_1 = __webpack_require__(/*! ./InterpolatedPropertyDefs */ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js");
const Pixels_1 = __webpack_require__(/*! ./Pixels */ "./node_modules/@here/harp-datasource-protocol/lib/Pixels.js");
const RGBA_1 = __webpack_require__(/*! ./RGBA */ "./node_modules/@here/harp-datasource-protocol/lib/RGBA.js");
const Theme_1 = __webpack_require__(/*! ./Theme */ "./node_modules/@here/harp-datasource-protocol/lib/Theme.js");
__exportStar(__webpack_require__(/*! ./Env */ "./node_modules/@here/harp-datasource-protocol/lib/Env.js"), exports);
const exprEvaluator = new ExprEvaluator_1.ExprEvaluator();
const exprInstantiator = new ExprInstantiator_1.ExprInstantiator();
/**
 * The dependencies of an {@link Expr}.
 * @internal
 */
class ExprDependencies {
    constructor() {
        /**
         * The properties needed to evaluate the {@link Expr}.
         */
        this.properties = new Set();
    }
}
exports.ExprDependencies = ExprDependencies;
class ComputeExprDependencies {
    /**
     * Gets the dependencies of an {@link Expr}.
     *
     * @param expr - The {@link Expr} to process.
     * @param scope - The evaluation scope. Defaults to [[ExprScope.Value]].
     * @param dependencies - The output [[Set]] of dependency names.
     */
    static of(expr) {
        const dependencies = new ExprDependencies();
        expr.accept(this.instance, dependencies);
        return dependencies;
    }
    visitNullLiteralExpr(expr, context) {
        // nothing to do
    }
    visitBooleanLiteralExpr(expr, context) {
        // nothing to do
    }
    visitNumberLiteralExpr(expr, context) {
        // nothing to do
    }
    visitStringLiteralExpr(expr, context) {
        // nothing to do
    }
    visitObjectLiteralExpr(expr, context) {
        // nothing to do
    }
    visitVarExpr(expr, context) {
        context.properties.add(expr.name);
    }
    visitHasAttributeExpr(expr, context) {
        context.properties.add(expr.name);
    }
    visitCallExpr(expr, context) {
        expr.args.forEach(childExpr => childExpr.accept(this, context));
        switch (expr.op) {
            case "dynamic-properties":
                context.volatile = true;
                break;
            case "feature-state":
                context.featureState = true;
                context.properties.add("$state");
                context.properties.add("$id");
                break;
            case "id":
                context.properties.add("$id");
                break;
            case "zoom":
            case "world-ppi-scale":
            case "world-discrete-ppi-scale":
                context.properties.add("$zoom");
                break;
            case "geometry-type":
                context.properties.add("$geometryType");
                break;
            default:
                break;
        }
    }
    visitLookupExpr(expr, context) {
        // Same behaviour as call expressions.
        return this.visitCallExpr(expr, context);
    }
    visitMatchExpr(expr, context) {
        expr.value.accept(this, context);
        expr.branches.forEach(([_, branch]) => branch.accept(this, context));
        expr.fallback.accept(this, context);
    }
    visitCaseExpr(expr, context) {
        expr.branches.forEach(([condition, branch]) => {
            condition.accept(this, context);
            branch.accept(this, context);
        });
        expr.fallback.accept(this, context);
    }
    visitStepExpr(expr, context) {
        expr.input.accept(this, context);
        expr.defaultValue.accept(this, context);
        expr.stops.forEach(([_, value]) => value.accept(this, context));
    }
    visitInterpolateExpr(expr, context) {
        expr.input.accept(this, context);
        expr.stops.forEach(([_, value]) => value.accept(this, context));
    }
}
ComputeExprDependencies.instance = new ComputeExprDependencies();
function isJsonExpr(v) {
    return Array.isArray(v) && v.length > 0 && typeof v[0] === "string";
}
exports.isJsonExpr = isJsonExpr;
/**
 * The evaluation scope of an {@link Expr}.
 * @internal
 */
var ExprScope;
(function (ExprScope) {
    /**
     * The scope of an {@link Expr} used as value of an attribute.
     */
    ExprScope[ExprScope["Value"] = 0] = "Value";
    /**
     * The scope of an {@link Expr} used in a [[Technique]] `when` condition.
     */
    ExprScope[ExprScope["Condition"] = 1] = "Condition";
    /**
     * The scope of an {@link Expr} used as dynamic property attribute value.
     */
    ExprScope[ExprScope["Dynamic"] = 2] = "Dynamic";
})(ExprScope = exports.ExprScope || (exports.ExprScope = {}));
/**
 * Abstract class representing the
 * {@link https://github.com/heremaps/harp.gl/blob/master/%40here/harp-datasource-protocol/StyleExpressions.md | style expressions}
 * used in {@link Theme}.
 */
class Expr {
    /**
     * Tests of given value is an {@link Expr}.
     *
     * @param value - The object to test.
     */
    static isExpr(value) {
        return value instanceof Expr;
    }
    /**
     * Creates an expression from the given `code`.
     *
     * @param code - The code to parse.
     * @returns The parsed {@link Expr}.
     * @deprecated `string` encoded expression are deprecated. Use {@link Expr.fromJSON} instead.
     */
    static parse(code) {
        const parser = new ExprParser_1.ExprParser(code);
        const expr = parser.parse();
        return expr;
    }
    /**
     * Creates a style expression from JSON.
     *
     * @remarks
     * The optional set of {@link Theme.definitions | definitions} is used
     * to resolve the {@link https://github.com/heremaps/harp.gl/blob/master/%40here/harp-datasource-protocol/StyleExpressions.md#ref | ref expressions}.
     *
     * @param json - JSON object representing the expression to parse.
     * @param definitions - Optional set of definitions used to expand references.
     * @param definitionExprCache - Optional cache of `Expr` instances
     *
     * @example
     * ```typescript
     * const expr = Expr.fromJSON(["all",
     *     ["==", ["geometry-type"], "LineString"],
     *     ["has", "text"]
     * ]);
     * ```
     */
    static fromJSON(json, definitions, definitionExprCache) {
        const referenceResolverState = definitions !== undefined
            ? {
                definitions,
                lockedNames: new Set(),
                cache: definitionExprCache !== null && definitionExprCache !== void 0 ? definitionExprCache : new Map()
            }
            : undefined;
        return parseNode(json, referenceResolverState);
    }
    /**
     * Evaluate an expression returning a {@link Value} object.
     *
     * @param env - The {@link Env} used to lookup symbols.
     * @param scope - The evaluation scope. Defaults to [[ExprScope.Value]].
     * @param cache - A cache of previously computed results.
     */
    evaluate(env, scope = ExprScope.Value, cache) {
        return this.accept(exprEvaluator, new ExprEvaluator_1.ExprEvaluatorContext(exprEvaluator, env, scope, cache));
    }
    /**
     * Instantiates this {@link Expr}.
     *
     * @remarks
     * references to the `get` and `has` operator using the given instantiation context.
     *
     * @param context - The [[InstantationContext]] used to resolve names.
     */
    instantiate(context) {
        return this.accept(exprInstantiator, context);
    }
    /**
     * Gets the dependencies of this {@link Expr}.
     */
    dependencies() {
        if (!this.m_dependencies) {
            this.m_dependencies = ComputeExprDependencies.of(this);
        }
        return this.m_dependencies;
    }
    /**
     * Create a unique object that is structurally equivalent to this {@link Expr}.
     *
     * @param pool - The [[ExprPool]] used to create a unique
     * equivalent object of this {@link Expr}.
     */
    intern(pool) {
        return pool.add(this);
    }
    toJSON() {
        return new ExprSerializer().serialize(this);
    }
    /**
     * Returns `true` if a dynamic execution context is required to evaluate this {@link Expr}.
     */
    isDynamic() {
        if (this.m_isDynamic === undefined) {
            this.m_isDynamic = this.exprIsDynamic();
        }
        return this.m_isDynamic;
    }
}
exports.Expr = Expr;
/**
 * A node representing a `get` expression.
 * @internal
 */
class VarExpr extends Expr {
    constructor(name) {
        super();
        this.name = name;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitVarExpr(this, context);
    }
    /** @override */
    exprIsDynamic() {
        return false;
    }
}
exports.VarExpr = VarExpr;
/**
 * A node representing a `literal` expression.
 * @internal
 */
class LiteralExpr extends Expr {
    /**
     * Create a [[LiteralExpr]] from the given value.
     *
     * @param value - A constant value.
     */
    static fromValue(value) {
        switch (typeof value) {
            case "boolean":
                return new BooleanLiteralExpr(value);
            case "number":
                return new NumberLiteralExpr(value);
            case "string":
                return new StringLiteralExpr(value);
            case "object":
                return value === null ? NullLiteralExpr.instance : new ObjectLiteralExpr(value);
            default:
                throw new Error(`failed to create a literal from '${value}'`);
        } // switch
    }
    /** @override */
    exprIsDynamic() {
        return false;
    }
}
exports.LiteralExpr = LiteralExpr;
/**
 * Null literal expression.
 * @internal
 */
class NullLiteralExpr extends LiteralExpr {
    constructor() {
        super();
        /** @override */
        this.value = null;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitNullLiteralExpr(this, context);
    }
    /** @override */
    exprIsDynamic() {
        return false;
    }
}
exports.NullLiteralExpr = NullLiteralExpr;
NullLiteralExpr.instance = new NullLiteralExpr();
/**
 * Boolean literal expression.
 * @internal
 */
class BooleanLiteralExpr extends LiteralExpr {
    constructor(value) {
        super();
        this.value = value;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitBooleanLiteralExpr(this, context);
    }
}
exports.BooleanLiteralExpr = BooleanLiteralExpr;
/**
 * Number literal expression.
 * @internal
 */
class NumberLiteralExpr extends LiteralExpr {
    constructor(value) {
        super();
        this.value = value;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitNumberLiteralExpr(this, context);
    }
}
exports.NumberLiteralExpr = NumberLiteralExpr;
/**
 * String literal expression.
 * @internal
 */
class StringLiteralExpr extends LiteralExpr {
    constructor(value) {
        super();
        this.value = value;
    }
    /**
     * Returns the value of parsing this string as [[RGBA]] or [[Pixels]] constant.
     */
    get promotedValue() {
        var _a, _b, _c;
        if (this.m_promotedValue === undefined) {
            this.m_promotedValue = (_b = (_a = RGBA_1.RGBA.parse(this.value)) !== null && _a !== void 0 ? _a : Pixels_1.Pixels.parse(this.value)) !== null && _b !== void 0 ? _b : null;
        }
        return (_c = this.m_promotedValue) !== null && _c !== void 0 ? _c : undefined;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitStringLiteralExpr(this, context);
    }
}
exports.StringLiteralExpr = StringLiteralExpr;
/**
 * Object literal expression.
 * @internal
 */
class ObjectLiteralExpr extends LiteralExpr {
    constructor(value) {
        super();
        this.value = value;
    }
    get isArrayLiteral() {
        return Array.isArray(this.value);
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitObjectLiteralExpr(this, context);
    }
}
exports.ObjectLiteralExpr = ObjectLiteralExpr;
/**
 * A node reperesenting a `has` expression.
 * @internal
 */
class HasAttributeExpr extends Expr {
    constructor(name) {
        super();
        this.name = name;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitHasAttributeExpr(this, context);
    }
    /** @override */
    exprIsDynamic() {
        return false;
    }
}
exports.HasAttributeExpr = HasAttributeExpr;
/**
 * A node representing a `call` expression.
 * @internal
 */
class CallExpr extends Expr {
    constructor(op, args) {
        super();
        this.op = op;
        this.args = args;
    }
    /**
     * Returns the child nodes of this {@link Expr}.
     *
     * @deprecated Use {@link CallExpr.args} instead.
     */
    get children() {
        return this.args;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitCallExpr(this, context);
    }
    /** @override */
    exprIsDynamic() {
        var _a;
        const descriptor = (_a = this.descriptor) !== null && _a !== void 0 ? _a : ExprEvaluator_1.ExprEvaluator.getOperator(this.op);
        if (descriptor && descriptor.isDynamicOperator && descriptor.isDynamicOperator(this)) {
            return true;
        }
        return this.args.some(e => e.isDynamic());
    }
}
exports.CallExpr = CallExpr;
/**
 * A `lookup` expression is a call expression using the `lookup` operator. Then only difference is
 * that the lookup table definition (first argument) is cached as a map for fast search
 * (see {@link ExprEvaluator.visitLookupExpr}).
 * @internal
 */
class LookupExpr extends CallExpr {
    /**
     * Constructs a LookupExpr instance.
     * @param args Arguments of the lookup expression. At least an argument for the lookup table.
     */
    constructor(args) {
        super("lookup", args);
        this.args = args;
    }
    /**
     * Creates a lookup expression from a {@link JsonArray}.
     * @param node The {@link JsonArray} to parse.
     * @param referenceResolverState Used to resolve references to definitions.
     * @returns A LookupExpr instance.
     */
    static parseArray(node, referenceResolverState) {
        const lookupTableNode = node[1];
        if (lookupTableNode === undefined) {
            throw new Error("missing lookup table in 'lookup' expression");
        }
        const lookupTableExpr = parseNode(lookupTableNode, referenceResolverState);
        if (!Array.isArray(lookupTableNode) || !(lookupTableExpr instanceof ObjectLiteralExpr)) {
            throw new Error(`Invalid lookup table expression for operator 'lookup'. It must be a literal or a ref to one.`);
        }
        const lookupTable = lookupTableExpr.value;
        if (!Array.isArray(lookupTable)) {
            throw new Error(`Invalid lookup table type (${typeof lookupTable}) for operator 'lookup'`);
        }
        // Skip the operator name and the lookup table and parse the rest of the arguments. Then add
        // the lookup table expr as first argument.
        const args = node.slice(2).map(childExpr => parseNode(childExpr, referenceResolverState));
        args.unshift(lookupTableExpr);
        return new LookupExpr(args);
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitLookupExpr(this, context);
    }
}
exports.LookupExpr = LookupExpr;
/**
 * A node representing a `match` expression.
 * @internal
 */
class MatchExpr extends Expr {
    constructor(value, branches, fallback) {
        super();
        this.value = value;
        this.branches = branches;
        this.fallback = fallback;
    }
    /**
     * Tests if the given JSON node is a valid label for the `"match"` operator.
     *
     * @param node - A JSON value.
     */
    static isValidMatchLabel(node) {
        switch (typeof node) {
            case "number":
            case "string":
                return true;
            case "object":
                if (!Array.isArray(node) || node.length === 0) {
                    return false;
                }
                const elementTy = typeof node[0];
                if (elementTy === "number" || elementTy === "string") {
                    return node.every(t => typeof t === elementTy);
                }
                return false;
            default:
                return false;
        } // switch
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitMatchExpr(this, context);
    }
    /** @override */
    exprIsDynamic() {
        return (this.value.isDynamic() ||
            this.branches.some(([_, branch]) => branch.isDynamic()) ||
            this.fallback.isDynamic());
    }
}
exports.MatchExpr = MatchExpr;
/**
 * A node representing a `case` expression.
 * @internal
 */
class CaseExpr extends Expr {
    constructor(branches, fallback) {
        super();
        this.branches = branches;
        this.fallback = fallback;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitCaseExpr(this, context);
    }
    /** @override */
    exprIsDynamic() {
        return (this.branches.some(([cond, branch]) => cond.isDynamic() || branch.isDynamic()) ||
            this.fallback.isDynamic());
    }
}
exports.CaseExpr = CaseExpr;
/**
 * A node representing a `step` expression.
 * @internal
 */
class StepExpr extends Expr {
    constructor(input, defaultValue, stops) {
        super();
        this.input = input;
        this.defaultValue = defaultValue;
        this.stops = stops;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitStepExpr(this, context);
    }
    /** @override */
    exprIsDynamic() {
        return (this.input.isDynamic() ||
            this.defaultValue.isDynamic() ||
            this.stops.some(([_, value]) => value.isDynamic()));
    }
}
exports.StepExpr = StepExpr;
/**
 * A node representing an `interpolate` expression.
 * @internal
 */
class InterpolateExpr extends Expr {
    constructor(mode, input, stops) {
        super();
        this.mode = mode;
        this.input = input;
        this.stops = stops;
    }
    /** @override */
    accept(visitor, context) {
        return visitor.visitInterpolateExpr(this, context);
    }
    /** @override */
    exprIsDynamic() {
        return this.input.isDynamic() || this.stops.some(([_, value]) => value.isDynamic());
    }
}
exports.InterpolateExpr = InterpolateExpr;
/**
 * Serializes the Expr to JSON.
 *
 * @internal
 */
class ExprSerializer {
    serialize(expr) {
        return expr.accept(this, undefined);
    }
    visitNullLiteralExpr(expr, context) {
        return null;
    }
    visitBooleanLiteralExpr(expr, context) {
        return expr.value;
    }
    visitNumberLiteralExpr(expr, context) {
        return expr.value;
    }
    visitStringLiteralExpr(expr, context) {
        return expr.value;
    }
    visitObjectLiteralExpr(expr, context) {
        if (expr.value instanceof THREE.Vector2) {
            return ["make-vector", expr.value.x, expr.value.y];
        }
        else if (expr.value instanceof THREE.Vector3) {
            return ["make-vector", expr.value.x, expr.value.y, expr.value.z];
        }
        else if (expr.value instanceof THREE.Vector4) {
            return ["make-vector", expr.value.x, expr.value.y, expr.value.z, expr.value.w];
        }
        return ["literal", expr.value];
    }
    visitVarExpr(expr, context) {
        return ["get", expr.name];
    }
    visitHasAttributeExpr(expr, context) {
        return ["has", expr.name];
    }
    visitCallExpr(expr, context) {
        return [expr.op, ...expr.args.map(childExpr => this.serialize(childExpr))];
    }
    visitLookupExpr(expr, context) {
        // Same serialization as call expressions.
        return this.visitCallExpr(expr, context);
    }
    visitMatchExpr(expr, context) {
        const branches = [];
        for (const [label, body] of expr.branches) {
            branches.push(label, this.serialize(body));
        }
        return ["match", this.serialize(expr.value), ...branches, this.serialize(expr.fallback)];
    }
    visitCaseExpr(expr, context) {
        const branches = [];
        for (const [condition, body] of expr.branches) {
            branches.push(this.serialize(condition), this.serialize(body));
        }
        return ["case", ...branches, this.serialize(expr.fallback)];
    }
    visitStepExpr(expr, context) {
        const result = ["step"];
        result.push(this.serialize(expr.input));
        result.push(this.serialize(expr.defaultValue));
        expr.stops.forEach(([key, value]) => {
            result.push(key);
            result.push(this.serialize(value));
        });
        return result;
    }
    visitInterpolateExpr(expr, context) {
        const result = ["interpolate", expr.mode];
        result.push(this.serialize(expr.input));
        expr.stops.forEach(([key, value]) => {
            result.push(key);
            result.push(this.serialize(value));
        });
        return result;
    }
}
function parseNode(node, referenceResolverState) {
    if (Array.isArray(node)) {
        return parseCall(node, referenceResolverState);
    }
    else if (node === null) {
        return NullLiteralExpr.instance;
    }
    else if (typeof node === "boolean") {
        return new BooleanLiteralExpr(node);
    }
    else if (typeof node === "number") {
        return new NumberLiteralExpr(node);
    }
    else if (typeof node === "string") {
        return new StringLiteralExpr(node);
    }
    throw new Error(`failed to create expression from: ${JSON.stringify(node)}`);
}
function parseCall(node, referenceResolverState) {
    const op = node[0];
    if (typeof op !== "string") {
        throw new Error("expected a builtin function name");
    }
    switch (op) {
        case "!has":
        case "!in":
            return new CallExpr("!", [parseCall([op.slice(1), ...node.slice(1)])]);
        case "ref":
            return resolveReference(node, referenceResolverState);
        case "get":
            return parseGetExpr(node, referenceResolverState);
        case "has":
            return parseHasExpr(node, referenceResolverState);
        case "literal":
            return parseLiteralExpr(node);
        case "match":
            return parseMatchExpr(node, referenceResolverState);
        case "case":
            return parseCaseExpr(node, referenceResolverState);
        case "interpolate":
            return parseInterpolateExpr(node, referenceResolverState);
        case "step":
            return parseStepExpr(node, referenceResolverState);
        case "lookup":
            return LookupExpr.parseArray(node, referenceResolverState);
        default:
            return makeCallExpr(op, node, referenceResolverState);
    } // switch
}
function parseGetExpr(node, referenceResolverState) {
    if (node[2] !== undefined) {
        return makeCallExpr("get", node, referenceResolverState);
    }
    const name = node[1];
    if (typeof name !== "string") {
        throw new Error(`expected the name of an attribute`);
    }
    return new VarExpr(name);
}
function parseHasExpr(node, referenceResolverState) {
    if (node[2] !== undefined) {
        return makeCallExpr("has", node, referenceResolverState);
    }
    const name = node[1];
    if (typeof name !== "string") {
        throw new Error(`expected the name of an attribute`);
    }
    return new HasAttributeExpr(name);
}
function parseLiteralExpr(node) {
    const obj = node[1];
    if (obj === null || typeof obj !== "object") {
        throw new Error("expected an object or array literal");
    }
    return new ObjectLiteralExpr(obj);
}
function parseMatchExpr(node, referenceResolverState) {
    if (node.length < 4) {
        throw new Error("not enough arguments");
    }
    if (!(node.length % 2)) {
        throw new Error("fallback is missing in 'match' expression");
    }
    const value = parseNode(node[1], referenceResolverState);
    const conditions = [];
    for (let i = 2; i < node.length - 1; i += 2) {
        const label = node[i];
        if (!MatchExpr.isValidMatchLabel(label)) {
            throw new Error(`'${JSON.stringify(label)}' is not a valid label for 'match'`);
        }
        const expr = parseNode(node[i + 1], referenceResolverState);
        conditions.push([label, expr]);
    }
    const fallback = parseNode(node[node.length - 1], referenceResolverState);
    return new MatchExpr(value, conditions, fallback);
}
function parseCaseExpr(node, referenceResolverState) {
    if (node.length < 3) {
        throw new Error("not enough arguments");
    }
    if (node.length % 2) {
        throw new Error("fallback is missing in 'case' expression");
    }
    const branches = [];
    for (let i = 1; i < node.length - 1; i += 2) {
        const condition = parseNode(node[i], referenceResolverState);
        const expr = parseNode(node[i + 1], referenceResolverState);
        branches.push([condition, expr]);
    }
    const caseFallback = parseNode(node[node.length - 1], referenceResolverState);
    return new CaseExpr(branches, caseFallback);
}
function isInterpolationMode(object) {
    if (!Array.isArray(object)) {
        return false;
    }
    switch (object[0]) {
        case "discrete":
        case "linear":
        case "cubic":
        case "exponential":
            return true;
        default:
            return false;
    }
}
function parseInterpolateExpr(node, referenceResolverState) {
    const mode = node[1];
    if (!isInterpolationMode(mode)) {
        throw new Error("expected an interpolation type");
    }
    if (mode[0] === "exponential" && typeof mode[1] !== "number") {
        throw new Error("expected the base of the exponential interpolation");
    }
    const input = node[2] !== undefined ? parseNode(node[2], referenceResolverState) : undefined;
    if (!Expr.isExpr(input)) {
        throw new Error(`expected the input of the interpolation`);
    }
    if (node.length === 3 || !(node.length % 2)) {
        throw new Error("invalid number of samples");
    }
    const stops = [];
    for (let i = 3; i < node.length - 1; i += 2) {
        const key = node[i];
        const value = parseNode(node[i + 1], referenceResolverState);
        stops.push([key, value]);
    }
    return new InterpolateExpr(mode, input, stops);
}
function parseStepExpr(node, referenceResolverState) {
    if (node.length < 2) {
        throw new Error("expected the input of the 'step' operator");
    }
    if (node.length < 3 || !(node.length % 2)) {
        throw new Error("not enough arguments");
    }
    const input = parseNode(node[1], referenceResolverState);
    const defaultValue = parseNode(node[2], referenceResolverState);
    const stops = [];
    for (let i = 3; i < node.length; i += 2) {
        const key = node[i];
        const value = parseNode(node[i + 1], referenceResolverState);
        stops.push([key, value]);
    }
    return new StepExpr(input, defaultValue, stops);
}
function makeCallExpr(op, node, referenceResolverState) {
    return new CallExpr(op, node.slice(1).map(childExpr => parseNode(childExpr, referenceResolverState)));
}
function resolveReference(node, referenceResolverState) {
    if (typeof node[1] !== "string") {
        throw new Error(`expected the name of an attribute`);
    }
    if (referenceResolverState === undefined) {
        throw new Error(`ref used with no definitions`);
    }
    const name = node[1];
    if (referenceResolverState.lockedNames.has(name)) {
        throw new Error(`circular referene to '${name}'`);
    }
    if (!(name in referenceResolverState.definitions)) {
        throw new Error(`definition '${name}' not found`);
    }
    const cachedEntry = referenceResolverState.cache.get(name);
    if (cachedEntry !== undefined) {
        return cachedEntry;
    }
    let definitionEntry = referenceResolverState.definitions[name];
    let result;
    const definitionValue = Theme_1.getDefinitionValue(definitionEntry);
    if (InterpolatedPropertyDefs_1.isInterpolatedPropertyDefinition(definitionValue)) {
        // found a reference to an interpolation using
        // the deprecated object-like syntax.
        return Expr.fromJSON(InterpolatedPropertyDefs_1.interpolatedPropertyDefinitionToJsonExpr(definitionEntry));
    }
    else if (isJsonExpr(definitionValue)) {
        definitionEntry = definitionValue;
    }
    else {
        return Expr.fromJSON(definitionValue);
    }
    if (isJsonExpr(definitionEntry)) {
        referenceResolverState.lockedNames.add(name);
        try {
            result = parseNode(definitionEntry, referenceResolverState);
        }
        finally {
            referenceResolverState.lockedNames.delete(name);
        }
    }
    else {
        throw new Error(`unsupported definition ${name}`);
    }
    referenceResolverState.cache.set(name, result);
    return result;
}
//# sourceMappingURL=Expr.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ExprEvaluator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ExprEvaluator.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExprEvaluator = exports.ExprEvaluatorContext = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const ArrayOperators_1 = __webpack_require__(/*! ./operators/ArrayOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/ArrayOperators.js");
const CastOperators_1 = __webpack_require__(/*! ./operators/CastOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/CastOperators.js");
const ColorOperators_1 = __webpack_require__(/*! ./operators/ColorOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/ColorOperators.js");
const ComparisonOperators_1 = __webpack_require__(/*! ./operators/ComparisonOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/ComparisonOperators.js");
const FeatureOperators_1 = __webpack_require__(/*! ./operators/FeatureOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/FeatureOperators.js");
const FlowOperators_1 = __webpack_require__(/*! ./operators/FlowOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/FlowOperators.js");
const MapOperators_1 = __webpack_require__(/*! ./operators/MapOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/MapOperators.js");
const MathOperators_1 = __webpack_require__(/*! ./operators/MathOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/MathOperators.js");
const MiscOperators_1 = __webpack_require__(/*! ./operators/MiscOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/MiscOperators.js");
const ObjectOperators_1 = __webpack_require__(/*! ./operators/ObjectOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/ObjectOperators.js");
const StringOperators_1 = __webpack_require__(/*! ./operators/StringOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/StringOperators.js");
const TypeOperators_1 = __webpack_require__(/*! ./operators/TypeOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/TypeOperators.js");
const VectorOperators_1 = __webpack_require__(/*! ./operators/VectorOperators */ "./node_modules/@here/harp-datasource-protocol/lib/operators/VectorOperators.js");
const Pixels_1 = __webpack_require__(/*! ./Pixels */ "./node_modules/@here/harp-datasource-protocol/lib/Pixels.js");
const RGBA_1 = __webpack_require__(/*! ./RGBA */ "./node_modules/@here/harp-datasource-protocol/lib/RGBA.js");
const operatorDescriptors = new Map();
/**
 * Promote string literals and values to color and pixel constants.
 *
 * @hidden
 * @internal
 */
function promoteValue(context, expr) {
    var _a, _b, _c;
    if (expr instanceof Expr_1.StringLiteralExpr) {
        return (_a = expr.promotedValue) !== null && _a !== void 0 ? _a : expr.value;
    }
    const value = context.evaluate(expr);
    if (typeof value === "string") {
        return (_c = (_b = RGBA_1.RGBA.parse(value)) !== null && _b !== void 0 ? _b : Pixels_1.Pixels.parse(value)) !== null && _c !== void 0 ? _c : value;
    }
    return value;
}
function cubicInterpolate(context, interp, t) {
    if (t < interp.stops[0][0]) {
        return promoteValue(context, interp.stops[0][1]);
    }
    else if (t >= interp.stops[interp.stops.length - 1][0]) {
        return promoteValue(context, interp.stops[interp.stops.length - 1][1]);
    }
    // indices
    const i1 = interp.stops.findIndex(stop => stop[0] > t);
    const i0 = Math.max(0, i1 - 1);
    const iP = i0 === 0 ? i1 : i0 - 1;
    const iN = i1 < interp.stops.length - 1 ? i1 + 1 : i1 - 1;
    // keys
    const tP = interp.stops[iP][0];
    const t0 = interp.stops[i0][0];
    const t1 = interp.stops[i1][0];
    const tN = interp.stops[iN][0];
    const dt = (t1 - t0) * 0.5;
    const wP = dt / (t0 - tP);
    const wN = dt / (tN - t1);
    const p = (t - t0) / (t1 - t0);
    const pp = p * p;
    const ppp = pp * p;
    // coefficients
    const cP = -wP * ppp + 2 * wP * pp - wP * p;
    const c0 = (1 + wP) * ppp + (-1.5 - 2 * wP) * pp + (-0.5 + wP) * p + 1;
    const c1 = (-1 - wN) * ppp + (1.5 + wN) * pp + 0.5 * p;
    const cN = wN * ppp - wN * pp;
    // values
    const vP = promoteValue(context, interp.stops[iP][1]);
    const v0 = promoteValue(context, interp.stops[i0][1]);
    const v1 = promoteValue(context, interp.stops[i1][1]);
    const vN = promoteValue(context, interp.stops[iN][1]);
    if (typeof vP === "number" &&
        typeof v0 === "number" &&
        typeof v1 === "number" &&
        typeof vN === "number") {
        return cP * vP + c0 * v0 + c1 * v1 + cN * vN;
    }
    else if (vP instanceof RGBA_1.RGBA &&
        v0 instanceof RGBA_1.RGBA &&
        v1 instanceof RGBA_1.RGBA &&
        vN instanceof RGBA_1.RGBA) {
        return new RGBA_1.RGBA(THREE.MathUtils.clamp(cP * vP.r + c0 * v0.r + c1 * v1.r + cN * vN.r, 0, 1), THREE.MathUtils.clamp(cP * vP.g + c0 * v0.g + c1 * v1.g + cN * vN.g, 0, 1), THREE.MathUtils.clamp(cP * vP.b + c0 * v0.b + c1 * v1.b + cN * vN.b, 0, 1), THREE.MathUtils.clamp(cP * vP.a + c0 * v0.a + c1 * v1.a + cN * vN.a, 0, 1));
    }
    else if (vP instanceof Pixels_1.Pixels &&
        v0 instanceof Pixels_1.Pixels &&
        v1 instanceof Pixels_1.Pixels &&
        vN instanceof Pixels_1.Pixels) {
        return new Pixels_1.Pixels(cP * vP.value + c0 * v0.value + c1 * v1.value + cN * vN.value);
    }
    else if (vP instanceof THREE.Color &&
        v0 instanceof THREE.Color &&
        v1 instanceof THREE.Color &&
        vN instanceof THREE.Color) {
        return new THREE.Color(cP * vP.r + c0 * v0.r + c1 * v1.r + cN * vN.r, cP * vP.g + c0 * v0.g + c1 * v1.g + cN * vN.g, cP * vP.b + c0 * v0.b + c1 * v1.b + cN * vN.b);
    }
    else if (vP instanceof THREE.Vector2 &&
        v0 instanceof THREE.Vector2 &&
        v1 instanceof THREE.Vector2 &&
        vN instanceof THREE.Vector2) {
        return new THREE.Vector2(cP * vP.x + c0 * v0.x + c1 * v1.x + cN * vN.x, cP * vP.y + c0 * v0.y + c1 * v1.y + cN * vN.y);
    }
    else if (vP instanceof THREE.Vector3 &&
        v0 instanceof THREE.Vector3 &&
        v1 instanceof THREE.Vector3 &&
        vN instanceof THREE.Vector3) {
        return new THREE.Vector3(cP * vP.x + c0 * v0.x + c1 * v1.x + cN * vN.x, cP * vP.y + c0 * v0.y + c1 * v1.y + cN * vN.y, cP * vP.z + c0 * v0.z + c1 * v1.z + cN * vN.z);
    }
    else if (vP instanceof THREE.Vector4 &&
        v0 instanceof THREE.Vector4 &&
        v1 instanceof THREE.Vector4 &&
        vN instanceof THREE.Vector4) {
        return new THREE.Vector4(cP * vP.x + c0 * v0.x + c1 * v1.x + cN * vN.x, cP * vP.y + c0 * v0.y + c1 * v1.y + cN * vN.y, cP * vP.z + c0 * v0.z + c1 * v1.z + cN * vN.z, cP * vP.w + c0 * v0.w + c1 * v1.w + cN * vN.w);
    }
    else if (Array.isArray(vP) && Array.isArray(v0) && Array.isArray(v1) && Array.isArray(vN)) {
        const N = vP.length;
        const r = [];
        for (let i = 0; i < N; ++i) {
            r[i] = cP * vP[i] + c0 * v0[i] + c1 * v1[i] + cN * vN[i];
        }
        return r;
    }
    throw new Error(`failed to interpolate values`);
}
/*
 * @hidden
 */
class ExprEvaluatorContext {
    constructor(evaluator, env, scope, cache) {
        this.evaluator = evaluator;
        this.env = env;
        this.scope = scope;
        this.cache = cache;
    }
    /**
     * Evaluate the given expression.
     *
     * @param expr - The {@link Expr} to evaluate.
     */
    evaluate(expr) {
        var _a, _b;
        if (expr === undefined) {
            throw new Error("Failed to evaluate expression");
        }
        const cachedResult = (_a = this.cache) === null || _a === void 0 ? void 0 : _a.get(expr);
        if (cachedResult !== undefined) {
            return cachedResult;
        }
        const result = expr.accept(this.evaluator, this);
        (_b = this.cache) === null || _b === void 0 ? void 0 : _b.set(expr, result);
        return result;
    }
    /**
     * Wraps the given value in an {@link Expr} if needed.
     *
     * @param value -
     */
    wrapValue(value) {
        return Expr_1.Expr.isExpr(value) ? value : Expr_1.LiteralExpr.fromValue(value);
    }
}
exports.ExprEvaluatorContext = ExprEvaluatorContext;
/**
 * [[ExprEvaluator]] is used to evaluate {@link Expr} in a given environment.
 *
 * @hidden
 */
class ExprEvaluator {
    static defineOperator(op, builtin) {
        operatorDescriptors.set(op, builtin);
    }
    static defineOperators(builtins) {
        Object.getOwnPropertyNames(builtins).forEach(p => {
            this.defineOperator(p, builtins[p]);
        });
    }
    /**
     * Returns the [[OperatorDescriptor]] for the given operator name.
     * @hidden
     */
    static getOperator(op) {
        return operatorDescriptors.get(op);
    }
    visitVarExpr(expr, context) {
        const value = context.env.lookup(expr.name);
        return value !== undefined ? value : null;
    }
    visitNullLiteralExpr(expr, context) {
        return null;
    }
    visitBooleanLiteralExpr(expr, context) {
        return expr.value;
    }
    visitNumberLiteralExpr(expr, context) {
        return expr.value;
    }
    visitStringLiteralExpr(expr, context) {
        return expr.value;
    }
    visitObjectLiteralExpr(expr, context) {
        return expr.value;
    }
    visitHasAttributeExpr(expr, context) {
        return context.env.lookup(expr.name) !== undefined;
    }
    visitMatchExpr(match, context) {
        const r = context.evaluate(match.value);
        for (const [label, body] of match.branches) {
            if (Array.isArray(label) && label.includes(r)) {
                return context.evaluate(body);
            }
            else if (label === r) {
                return context.evaluate(body);
            }
        }
        return context.evaluate(match.fallback);
    }
    visitCaseExpr(match, context) {
        if (context.scope === Expr_1.ExprScope.Value) {
            const firstDynamicCondition = match.branches.findIndex(([condition, _]) => condition.isDynamic());
            if (firstDynamicCondition !== -1) {
                let branches;
                for (let i = 0; i < match.branches.length; ++i) {
                    const [condition, body] = match.branches[i];
                    const evaluatedCondition = context.evaluate(condition);
                    const evaluatedBody = context.evaluate(body);
                    if (i < firstDynamicCondition && Boolean(evaluatedCondition)) {
                        return evaluatedBody;
                    }
                    if (!Expr_1.Expr.isExpr(evaluatedCondition) && !Boolean(evaluatedCondition)) {
                        // skip this branch, it constantly evaluates to false.
                        continue;
                    }
                    if (branches === undefined) {
                        branches = [];
                    }
                    branches === null || branches === void 0 ? void 0 : branches.push([
                        context.wrapValue(evaluatedCondition),
                        context.wrapValue(evaluatedBody)
                    ]);
                    if (!Expr_1.Expr.isExpr(evaluatedCondition) && Boolean(evaluatedCondition)) {
                        // skip unreachble expressions
                        return new Expr_1.CaseExpr(branches, Expr_1.LiteralExpr.fromValue(null));
                    }
                }
                const fallback = context.evaluate(match.fallback);
                return branches === undefined
                    ? fallback
                    : new Expr_1.CaseExpr(branches, context.wrapValue(fallback));
            }
        }
        for (const [condition, body] of match.branches) {
            if (context.evaluate(condition)) {
                return context.evaluate(body);
            }
        }
        return context.evaluate(match.fallback);
    }
    visitCallExpr(expr, context) {
        var _a;
        const descriptor = (_a = expr.descriptor) !== null && _a !== void 0 ? _a : operatorDescriptors.get(expr.op);
        if (descriptor) {
            expr.descriptor = descriptor;
            let result;
            if (context.scope === Expr_1.ExprScope.Value && expr.isDynamic()) {
                if (expr.descriptor.partialEvaluate) {
                    return expr.descriptor.partialEvaluate(context, expr);
                }
                const args = expr.args.map(arg => {
                    return context.wrapValue(context.evaluate(arg));
                });
                if (args.every((arg, i) => arg === expr.args[i])) {
                    return expr;
                }
                result = new Expr_1.CallExpr(expr.op, args);
            }
            else {
                result = descriptor.call(context, expr);
            }
            return result;
        }
        throw new Error(`undefined operator '${expr.op}'`);
    }
    visitLookupExpr(expr, context) {
        // Same behaviour as call expressions.
        return this.visitCallExpr(expr, context);
    }
    visitStepExpr(expr, context) {
        if (context.scope === Expr_1.ExprScope.Value) {
            const input = context.evaluate(expr.input);
            const defaultValue = context.evaluate(expr.defaultValue);
            return new Expr_1.StepExpr(context.wrapValue(input), context.wrapValue(defaultValue), expr.stops.map(([key, value]) => {
                const v = context.evaluate(value);
                return [key, context.wrapValue(v)];
            }));
        }
        else {
            const input = context.evaluate(expr.input);
            if (typeof input !== "number") {
                throw new Error(`input '${input}' must be a number`);
            }
            if (input < expr.stops[0][0]) {
                return context.evaluate(expr.defaultValue);
            }
            let index = expr.stops.findIndex(s => s[0] > input);
            if (index === -1) {
                index = expr.stops.length;
            }
            return context.evaluate(expr.stops[index - 1][1]);
        }
    }
    visitInterpolateExpr(expr, context) {
        if (context.scope === Expr_1.ExprScope.Value) {
            const input = context.evaluate(expr.input);
            return new Expr_1.InterpolateExpr(expr.mode, context.wrapValue(input), expr.stops.map(([key, value]) => {
                const v = context.evaluate(value);
                return [key, context.wrapValue(v)];
            }));
        }
        else {
            const param = context.evaluate(expr.input);
            if (typeof param !== "number") {
                throw new Error(`input must be a number`);
            }
            if (expr.mode[0] === "cubic") {
                return cubicInterpolate(context, expr, param);
            }
            const keyIndex = expr.stops.findIndex(stop => stop[0] > param);
            if (keyIndex === -1) {
                // all the keys are smaller than the parameter
                return context.evaluate(expr.stops[expr.stops.length - 1][1]);
            }
            else if (keyIndex === 0) {
                return context.evaluate(expr.stops[0][1]);
            }
            const [key, value] = expr.stops[keyIndex];
            const [prevKey, prevValue] = expr.stops[keyIndex - 1];
            const v0 = promoteValue(context, prevValue);
            let t = 0;
            switch (expr.mode[0]) {
                case "discrete":
                    return v0;
                case "linear":
                    t = (param - prevKey) / (key - prevKey);
                    break;
                case "exponential": {
                    const base = expr.mode[1];
                    t =
                        base === 1
                            ? (param - prevKey) / (key - prevKey)
                            : (Math.pow(base, param - prevKey) - 1) /
                                (Math.pow(base, key - prevKey) - 1);
                    break;
                }
                default:
                    throw new Error(`interpolation mode ${JSON.stringify(expr.mode)} is not supported`);
            }
            const v1 = promoteValue(context, value);
            if (typeof v0 === "number" && typeof v1 === "number") {
                return THREE.MathUtils.lerp(v0, v1, t);
            }
            else if (v0 instanceof RGBA_1.RGBA && v1 instanceof RGBA_1.RGBA) {
                return v0.clone().lerp(v1, t);
            }
            else if (v0 instanceof Pixels_1.Pixels && v1 instanceof Pixels_1.Pixels) {
                return new Pixels_1.Pixels(THREE.MathUtils.lerp(v0.value, v1.value, t));
            }
            else if (v0 instanceof THREE.Color && v1 instanceof THREE.Color) {
                return v0.clone().lerp(v1, t);
            }
            else if (v0 instanceof THREE.Vector2 && v1 instanceof THREE.Vector2) {
                return v0.clone().lerp(v1, t);
            }
            else if (v0 instanceof THREE.Vector3 && v1 instanceof THREE.Vector3) {
                return v0.clone().lerp(v1, t);
            }
            else if (v0 instanceof THREE.Vector4 && v1 instanceof THREE.Vector4) {
                return v0.clone().lerp(v1, t);
            }
            else if (Array.isArray(v0) && Array.isArray(v1) && v0.length === v1.length) {
                return v0.map((x, i) => THREE.MathUtils.lerp(x, v1[i], t));
            }
            throw new Error(`todo: mix(${JSON.stringify(v0)}, ${JSON.stringify(v1)}, ${t})`);
        }
    }
}
exports.ExprEvaluator = ExprEvaluator;
ExprEvaluator.defineOperators(CastOperators_1.CastOperators);
ExprEvaluator.defineOperators(ComparisonOperators_1.ComparisonOperators);
ExprEvaluator.defineOperators(MathOperators_1.MathOperators);
ExprEvaluator.defineOperators(StringOperators_1.StringOperators);
ExprEvaluator.defineOperators(ColorOperators_1.ColorOperators);
ExprEvaluator.defineOperators(TypeOperators_1.TypeOperators);
ExprEvaluator.defineOperators(MiscOperators_1.MiscOperators);
ExprEvaluator.defineOperators(FlowOperators_1.FlowOperators);
ExprEvaluator.defineOperators(ArrayOperators_1.ArrayOperators);
ExprEvaluator.defineOperators(ObjectOperators_1.ObjectOperators);
ExprEvaluator.defineOperators(FeatureOperators_1.FeatureOperators);
ExprEvaluator.defineOperators(MapOperators_1.MapOperators);
ExprEvaluator.defineOperators(VectorOperators_1.VectorOperators);
//# sourceMappingURL=ExprEvaluator.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ExprInstantiator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ExprInstantiator.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExprInstantiator = void 0;
const Env_1 = __webpack_require__(/*! ./Env */ "./node_modules/@here/harp-datasource-protocol/lib/Env.js");
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const emptyEnv = new Env_1.Env();
/**
 * @hidden
 */
class ExprInstantiator {
    visitNullLiteralExpr(expr, _context) {
        return expr;
    }
    visitBooleanLiteralExpr(expr, _context) {
        return expr;
    }
    visitNumberLiteralExpr(expr, _context) {
        return expr;
    }
    visitStringLiteralExpr(expr, _context) {
        return expr;
    }
    visitObjectLiteralExpr(expr, _context) {
        return expr;
    }
    visitVarExpr(expr, context) {
        if (context.preserve && context.preserve.has(expr.name)) {
            return expr;
        }
        const value = context.env.lookup(expr.name);
        return Expr_1.LiteralExpr.fromValue(value !== undefined ? value : null);
    }
    visitHasAttributeExpr(expr, context) {
        if (context.preserve && context.preserve.has(expr.name)) {
            return expr;
        }
        const value = context.env.lookup(expr.name) !== undefined;
        return Expr_1.LiteralExpr.fromValue(value);
    }
    visitCallExprImpl(expr, context, constructor) {
        const args = expr.args.map(arg => arg.accept(this, context));
        if (args.some((a, i) => a !== expr.args[i])) {
            return constructor(expr.op, args);
        }
        return expr;
    }
    visitCallExpr(expr, context) {
        return this.visitCallExprImpl(expr, context, (op, args) => {
            return new Expr_1.CallExpr(op, args);
        });
    }
    visitLookupExpr(expr, context) {
        return this.visitCallExprImpl(expr, context, (op, args) => {
            return new Expr_1.LookupExpr(args);
        });
    }
    visitMatchExpr(match, context) {
        const value = match.value.accept(this, context);
        if (value instanceof Expr_1.LiteralExpr) {
            const r = value.value;
            for (const [label, body] of match.branches) {
                if (Array.isArray(label) && label.includes(r)) {
                    return body.accept(this, context);
                }
                else if (label === r) {
                    return body.accept(this, context);
                }
            }
            return match.fallback.accept(this, context);
        }
        let changed = match.value !== value;
        const branches = match.branches.map(([label, branch]) => {
            const newBranch = branch.accept(this, context);
            if (newBranch !== branch) {
                changed = true;
            }
            return [label, newBranch];
        });
        const fallback = match.fallback.accept(this, context);
        if (fallback !== match.fallback) {
            changed = true;
        }
        return changed ? new Expr_1.MatchExpr(value, branches, fallback) : match;
    }
    visitCaseExpr(expr, context) {
        const branches = [];
        let changed = false;
        for (const [condition, branch] of expr.branches) {
            const newCondition = condition.accept(this, context);
            const deps = newCondition.dependencies();
            if (!condition.isDynamic() && deps.properties.size === 0) {
                if (Boolean(newCondition.evaluate(emptyEnv, Expr_1.ExprScope.Condition))) {
                    return branch.accept(this, context);
                }
            }
            else {
                if (newCondition !== condition) {
                    changed = true;
                }
                branches.push([newCondition, branch]);
            }
        }
        if (branches.length === 0) {
            // all the conditions of this CaseExpr evaluated
            // to false, so the resulting of instantiating this CaseExpr
            // is the same as instantiating its fallback expression.
            return expr.fallback.accept(this, context);
        }
        if (branches.length !== expr.branches.length) {
            // the number of branches changed, this means that
            // some of the branches had constant expressions that
            // evaluate to false. In this case the resulting
            // `CaseExpr` has less branches.
            changed = true;
        }
        // Instantiate the body of all the branches of this CaseExpr
        // that have dynamic conditions.
        branches.forEach(branch => {
            const instantiatedBranch = branch[1].accept(this, context);
            if (instantiatedBranch !== branch[1]) {
                changed = true;
            }
            branch[1] = instantiatedBranch;
        });
        const fallback = expr.fallback.accept(this, context);
        if (fallback !== expr.fallback) {
            changed = true;
        }
        if (!changed) {
            // nothing changed, return the old expression.
            return expr;
        }
        return new Expr_1.CaseExpr(branches, fallback);
    }
    visitStepExpr(expr, context) {
        const input = expr.input.accept(this, context);
        const defaultValue = expr.defaultValue.accept(this, context);
        const stops = expr.stops.map(([key, value]) => [
            key,
            value.accept(this, context)
        ]);
        return new Expr_1.StepExpr(input, defaultValue, stops);
    }
    visitInterpolateExpr(expr, context) {
        const input = expr.input.accept(this, context);
        const stops = expr.stops.map(([key, value]) => [
            key,
            value.accept(this, context)
        ]);
        return new Expr_1.InterpolateExpr(expr.mode, input, stops);
    }
}
exports.ExprInstantiator = ExprInstantiator;
//# sourceMappingURL=ExprInstantiator.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ExprParser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ExprParser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExprParser = void 0;
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
/**
 * Character value
 */
var Character;
(function (Character) {
    Character[Character["Tab"] = 9] = "Tab";
    Character[Character["Lf"] = 10] = "Lf";
    Character[Character["Cr"] = 13] = "Cr";
    Character[Character["Space"] = 32] = "Space";
    Character[Character["LParen"] = 40] = "LParen";
    Character[Character["RParen"] = 41] = "RParen";
    Character[Character["Comma"] = 44] = "Comma";
    Character[Character["Dot"] = 46] = "Dot";
    Character[Character["LBracket"] = 91] = "LBracket";
    Character[Character["Backslash"] = 92] = "Backslash";
    Character[Character["RBracket"] = 93] = "RBracket";
    Character[Character["_0"] = 48] = "_0";
    Character[Character["_9"] = 57] = "_9";
    Character[Character["_"] = 95] = "_";
    Character[Character["A"] = 64] = "A";
    Character[Character["Z"] = 90] = "Z";
    Character[Character["a"] = 97] = "a";
    Character[Character["z"] = 122] = "z";
    Character[Character["DoubleQuote"] = 34] = "DoubleQuote";
    Character[Character["SingleQuote"] = 39] = "SingleQuote";
    Character[Character["Exclaim"] = 33] = "Exclaim";
    Character[Character["Equal"] = 61] = "Equal";
    Character[Character["Caret"] = 94] = "Caret";
    Character[Character["Tilde"] = 126] = "Tilde";
    Character[Character["Dollar"] = 36] = "Dollar";
    Character[Character["Less"] = 60] = "Less";
    Character[Character["Greater"] = 62] = "Greater";
    Character[Character["Bar"] = 124] = "Bar";
    Character[Character["Amp"] = 38] = "Amp";
})(Character || (Character = {}));
/**
 * Check if a codepoint is a whitespace character.
 */
function isSpace(codepoint) {
    switch (codepoint) {
        case Character.Tab:
        case Character.Lf:
        case Character.Cr:
        case Character.Space:
            return true;
        default:
            return false;
    } // switch
}
/**
 * Check if codepoint is a digit character.
 */
function isNumber(codepoint) {
    return codepoint >= Character._0 && codepoint <= Character._9;
}
/**
 * Check if codepoint is a letter character.
 */
function isLetter(codepoint) {
    return ((codepoint >= Character.a && codepoint <= Character.z) ||
        (codepoint >= Character.A && codepoint <= Character.Z));
}
/**
 * Check if codepoint is either a digit or a letter character.
 */
function isLetterOrNumber(codepoint) {
    return isLetter(codepoint) || isNumber(codepoint);
}
/**
 * Check if codepoint is an identification character: underscore, dollar sign, dot or bracket.
 */
function isIdentChar(codepoint) {
    return (isLetterOrNumber(codepoint) ||
        codepoint === Character._ ||
        codepoint === Character.Dollar ||
        codepoint === Character.Dot ||
        codepoint === Character.LBracket ||
        codepoint === Character.RBracket);
}
/**
 * Tokens used in theme grammar.
 */
var Token;
(function (Token) {
    Token[Token["Eof"] = 0] = "Eof";
    Token[Token["Error"] = 1] = "Error";
    Token[Token["Identifier"] = 2] = "Identifier";
    Token[Token["Number"] = 3] = "Number";
    Token[Token["String"] = 4] = "String";
    Token[Token["Comma"] = 5] = "Comma";
    Token[Token["LParen"] = 6] = "LParen";
    Token[Token["RParen"] = 7] = "RParen";
    Token[Token["LBracket"] = 8] = "LBracket";
    Token[Token["RBracket"] = 9] = "RBracket";
    Token[Token["Exclaim"] = 10] = "Exclaim";
    Token[Token["TildeEqual"] = 11] = "TildeEqual";
    Token[Token["CaretEqual"] = 12] = "CaretEqual";
    Token[Token["DollarEqual"] = 13] = "DollarEqual";
    Token[Token["EqualEqual"] = 14] = "EqualEqual";
    Token[Token["ExclaimEqual"] = 15] = "ExclaimEqual";
    Token[Token["Less"] = 16] = "Less";
    Token[Token["Greater"] = 17] = "Greater";
    Token[Token["LessEqual"] = 18] = "LessEqual";
    Token[Token["GreaterEqual"] = 19] = "GreaterEqual";
    Token[Token["BarBar"] = 20] = "BarBar";
    Token[Token["AmpAmp"] = 21] = "AmpAmp";
})(Token || (Token = {}));
/**
 * Maps a token to its string name.
 */
function tokenSpell(token) {
    switch (token) {
        case Token.Eof:
            return "eof";
        case Token.Error:
            return "error";
        case Token.Identifier:
            return "identifier";
        case Token.Number:
            return "number";
        case Token.String:
            return "string";
        case Token.Comma:
            return ",";
        case Token.LParen:
            return "(";
        case Token.RParen:
            return ")";
        case Token.LBracket:
            return "[";
        case Token.RBracket:
            return "]";
        case Token.Exclaim:
            return "!";
        case Token.TildeEqual:
            return "~=";
        case Token.CaretEqual:
            return "^=";
        case Token.DollarEqual:
            return "$=";
        case Token.EqualEqual:
            return "==";
        case Token.ExclaimEqual:
            return "!=";
        case Token.Less:
            return "<";
        case Token.Greater:
            return ">";
        case Token.LessEqual:
            return "<=";
        case Token.GreaterEqual:
            return ">=";
        case Token.BarBar:
            return "||";
        case Token.AmpAmp:
            return "&&";
        default:
            throw new Error(`invalid token ${token}`);
    }
}
/**
 * Lexer class implementation.
 */
class Lexer {
    constructor(code) {
        this.code = code;
        this.m_token = Token.Error;
        this.m_index = 0;
        this.m_char = Character.Lf;
    }
    /**
     * Single lexer token.
     */
    token() {
        return this.m_token;
    }
    /**
     * Parsed text.
     */
    text() {
        var _a;
        return (_a = this.m_text) !== null && _a !== void 0 ? _a : "";
    }
    /**
     * Go to the next token.
     */
    next() {
        this.m_token = this.yylex();
        if (this.m_token === Token.Error) {
            throw new Error(`unexpected character ${this.m_char}`);
        }
        return this.m_token;
    }
    yyinp() {
        var _a;
        this.m_char = (_a = this.code.codePointAt(this.m_index++)) !== null && _a !== void 0 ? _a : 0;
    }
    yylex() {
        this.m_text = undefined;
        while (isSpace(this.m_char)) {
            this.yyinp();
        }
        if (this.m_char === 0) {
            return Token.Eof;
        }
        const ch = this.m_char;
        this.yyinp();
        switch (ch) {
            case Character.LParen:
                return Token.LParen;
            case Character.RParen:
                return Token.RParen;
            case Character.LBracket:
                return Token.LBracket;
            case Character.RBracket:
                return Token.RBracket;
            case Character.Comma:
                return Token.Comma;
            case Character.SingleQuote:
            case Character.DoubleQuote: {
                const start = this.m_index - 1;
                while (this.m_char && this.m_char !== ch) {
                    // ### TODO handle escape sequences
                    this.yyinp();
                }
                if (this.m_char !== ch) {
                    throw new Error("Unfinished string literal");
                }
                this.yyinp();
                this.m_text = this.code.substring(start, this.m_index - 2);
                return Token.String;
            }
            case Character.Exclaim:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.ExclaimEqual;
                }
                return Token.Exclaim;
            case Character.Caret:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.CaretEqual;
                }
                return Token.Error;
            case Character.Tilde:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.TildeEqual;
                }
                return Token.Error;
            case Character.Equal:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.EqualEqual;
                }
                return Token.Error;
            case Character.Less:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.LessEqual;
                }
                return Token.Less;
            case Character.Greater:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.GreaterEqual;
                }
                return Token.Greater;
            case Character.Bar:
                if (this.m_char === Character.Bar) {
                    this.yyinp();
                    return Token.BarBar;
                }
                return Token.Error;
            case Character.Amp:
                if (this.m_char === Character.Amp) {
                    this.yyinp();
                    return Token.AmpAmp;
                }
                return Token.Error;
            default: {
                const start = this.m_index - 2;
                if (isLetter(ch) ||
                    ch === Character._ ||
                    (ch === Character.Dollar && isIdentChar(this.m_char))) {
                    while (isIdentChar(this.m_char)) {
                        this.yyinp();
                    }
                    this.m_text = this.code.substring(start, this.m_index - 1);
                    return Token.Identifier;
                }
                else if (isNumber(ch)) {
                    while (isNumber(this.m_char)) {
                        this.yyinp();
                    }
                    if (this.m_char === Character.Dot) {
                        this.yyinp();
                        while (isNumber(this.m_char)) {
                            this.yyinp();
                        }
                    }
                    this.m_text = this.code.substring(start, this.m_index - 1);
                    return Token.Number;
                }
                else if (ch === Character.Dollar) {
                    if (this.m_char === Character.Equal) {
                        this.yyinp();
                        return Token.DollarEqual;
                    }
                    return Token.Error;
                }
            }
        }
        return Token.Error;
    }
}
function getEqualityOp(token) {
    switch (token) {
        case Token.TildeEqual:
            return "~=";
        case Token.CaretEqual:
            return "^=";
        case Token.DollarEqual:
            return "$=";
        case Token.EqualEqual:
            return "==";
        case Token.ExclaimEqual:
            return "!=";
        default:
            return undefined;
    } // switch
}
function getRelationalOp(token) {
    switch (token) {
        case Token.Less:
            return "<";
        case Token.Greater:
            return ">";
        case Token.LessEqual:
            return "<=";
        case Token.GreaterEqual:
            return ">=";
        default:
            return undefined;
    } // switch
}
class ExprParser {
    constructor(code) {
        this.lex = new Lexer(code);
        this.lex.next();
    }
    parse() {
        return this.parseLogicalOr();
    }
    yyexpect(token) {
        if (this.lex.token() !== token) {
            throw new Error(`Syntax error: Expected token '${tokenSpell(token)}' but ` +
                `found '${tokenSpell(this.lex.token())}'`);
        }
        this.lex.next();
    }
    parsePrimary() {
        switch (this.lex.token()) {
            case Token.Identifier: {
                const text = this.lex.text();
                switch (text) {
                    case "has":
                        this.lex.next(); // skip has keyword
                        this.yyexpect(Token.LParen);
                        const hasAttribute = this.lex.text();
                        this.yyexpect(Token.Identifier);
                        this.yyexpect(Token.RParen);
                        return new Expr_1.HasAttributeExpr(hasAttribute);
                    case "length":
                        this.lex.next(); // skip length keyword
                        this.yyexpect(Token.LParen);
                        const value = this.parseLogicalOr();
                        this.yyexpect(Token.RParen);
                        return new Expr_1.CallExpr("length", [value]);
                    default:
                        const expr = new Expr_1.VarExpr(text);
                        this.lex.next();
                        return expr;
                }
            }
            case Token.LParen: {
                this.lex.next();
                const expr = this.parseLogicalOr();
                this.yyexpect(Token.RParen);
                return expr;
            }
            default:
                return this.parseLiteral();
        } // switch
    }
    parseLiteral() {
        switch (this.lex.token()) {
            case Token.Number: {
                const expr = new Expr_1.NumberLiteralExpr(parseFloat(this.lex.text()));
                this.lex.next();
                return expr;
            }
            case Token.String: {
                const expr = new Expr_1.StringLiteralExpr(this.lex.text());
                this.lex.next();
                return expr;
            }
            default:
                throw new Error("Syntax error");
        } // switch
    }
    parseUnary() {
        if (this.lex.token() === Token.Exclaim) {
            this.lex.next();
            return new Expr_1.CallExpr("!", [this.parseUnary()]);
        }
        return this.parsePrimary();
    }
    parseRelational() {
        let expr = this.parseUnary();
        while (true) {
            if (this.lex.token() === Token.Identifier && this.lex.text() === "in") {
                this.lex.next();
                this.yyexpect(Token.LBracket);
                const elements = [this.parseLiteral()];
                while (this.lex.token() === Token.Comma) {
                    this.lex.next();
                    elements.push(this.parseLiteral());
                }
                this.yyexpect(Token.RBracket);
                expr = new Expr_1.CallExpr("in", [
                    expr,
                    Expr_1.LiteralExpr.fromValue(elements.map(({ value }) => value))
                ]);
            }
            else {
                const op = getRelationalOp(this.lex.token());
                if (op === undefined) {
                    break;
                }
                this.lex.next();
                const right = this.parseUnary();
                expr = new Expr_1.CallExpr(op, [expr, right]);
            }
        }
        return expr;
    }
    parseEquality() {
        let expr = this.parseRelational();
        while (true) {
            let op = getEqualityOp(this.lex.token());
            if (op === undefined) {
                break;
            }
            if (op === "~=") {
                op = "in";
            }
            this.lex.next();
            const right = this.parseRelational();
            expr = new Expr_1.CallExpr(op, [expr, right]);
        }
        return expr;
    }
    parseLogicalAnd() {
        const expr = this.parseEquality();
        if (this.lex.token() !== Token.AmpAmp) {
            return expr;
        }
        const expressions = [expr];
        do {
            this.lex.next();
            expressions.push(this.parseEquality());
        } while (this.lex.token() === Token.AmpAmp);
        return new Expr_1.CallExpr("all", expressions);
    }
    parseLogicalOr() {
        const expr = this.parseLogicalAnd();
        if (this.lex.token() !== Token.BarBar) {
            return expr;
        }
        const expressions = [expr];
        do {
            this.lex.next();
            expressions.push(this.parseLogicalAnd());
        } while (this.lex.token() === Token.BarBar);
        return new Expr_1.CallExpr("any", expressions);
    }
}
exports.ExprParser = ExprParser;
//# sourceMappingURL=ExprParser.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ExprPool.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ExprPool.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExprPool = void 0;
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
/**
 * [[ExprPool]] maintains a set of unique interned {@link Expr} objects.
 *
 * @hidden
 */
class ExprPool {
    constructor() {
        this.m_booleanLiterals = new Map();
        this.m_numberLiterals = new Map();
        this.m_stringLiterals = new Map();
        this.m_objectLiterals = new Map();
        this.m_arrayLiterals = [];
        this.m_varExprs = new Map();
        this.m_hasAttributeExprs = new Map();
        this.m_matchExprs = [];
        this.m_caseExprs = [];
        this.m_interpolateExprs = [];
        this.m_stepExprs = [];
        this.m_callExprs = new Map();
    }
    /**
     * Add `expr` to this [[ExprPool]] and return a unique {@link Expr}
     * object that is structurally equivalent to `expr`.
     *
     * @param expr - The {@link Expr} to add to this [[ExprPool]].
     * @returns A unique {@link Expr} that is structurally equivalent to `expr`.
     */
    add(expr) {
        return expr.accept(this, undefined);
    }
    visitNullLiteralExpr(expr, context) {
        return Expr_1.NullLiteralExpr.instance;
    }
    visitBooleanLiteralExpr(expr, context) {
        const e = this.m_booleanLiterals.get(expr.value);
        if (e) {
            return e;
        }
        this.m_booleanLiterals.set(expr.value, expr);
        return expr;
    }
    visitNumberLiteralExpr(expr, context) {
        const e = this.m_numberLiterals.get(expr.value);
        if (e) {
            return e;
        }
        this.m_numberLiterals.set(expr.value, expr);
        return expr;
    }
    visitStringLiteralExpr(expr, context) {
        const e = this.m_stringLiterals.get(expr.value);
        if (e) {
            return e;
        }
        this.m_stringLiterals.set(expr.value, expr);
        return expr;
    }
    visitObjectLiteralExpr(expr, context) {
        const e = this.m_objectLiterals.get(expr.value);
        if (e) {
            return e;
        }
        if (Array.isArray(expr.value)) {
            const array = expr.value;
            const r = this.m_arrayLiterals.find(literal => {
                const elements = literal.value;
                if (elements.length !== array.length) {
                    return false;
                }
                return array.every((x, i) => x === elements[i]);
            });
            if (r !== undefined) {
                return r;
            }
            this.m_arrayLiterals.push(expr);
        }
        this.m_objectLiterals.set(expr.value, expr);
        return expr;
    }
    visitVarExpr(expr, context) {
        const e = this.m_varExprs.get(expr.name);
        if (e) {
            return e;
        }
        this.m_varExprs.set(expr.name, expr);
        return expr;
    }
    visitHasAttributeExpr(expr, context) {
        const e = this.m_hasAttributeExprs.get(expr.name);
        if (e) {
            return e;
        }
        this.m_hasAttributeExprs.set(expr.name, expr);
        return expr;
    }
    visitMatchExpr(expr, context) {
        const value = expr.value.accept(this, context);
        const branches = expr.branches.map(([label, body]) => [
            label,
            body.accept(this, context)
        ]);
        const fallback = expr.fallback.accept(this, context);
        for (const candidate of this.m_matchExprs) {
            if (candidate.value !== value) {
                continue;
            }
            if (candidate.fallback !== fallback) {
                continue;
            }
            if (candidate.branches.length !== branches.length) {
                continue;
            }
            let branchesMatching = true;
            for (let i = 0; i < branches.length; i++) {
                if (branches[i][0] !== candidate.branches[i][0] ||
                    branches[i][1] !== candidate.branches[i][1]) {
                    branchesMatching = false;
                    break;
                }
            }
            if (branchesMatching) {
                return candidate;
            }
        }
        const r = new Expr_1.MatchExpr(value, branches, fallback);
        this.m_matchExprs.push(r);
        return r;
    }
    visitCaseExpr(expr, context) {
        const branches = expr.branches.map(([condition, body]) => [
            condition.accept(this, context),
            body.accept(this, context)
        ]);
        const fallback = expr.fallback.accept(this, context);
        for (const candidate of this.m_caseExprs) {
            if (candidate.fallback !== fallback) {
                continue;
            }
            if (candidate.branches.length !== branches.length) {
                continue;
            }
            let branchesMatching = true;
            for (let i = 0; i < branches.length; i++) {
                if (branches[i][0] !== candidate.branches[i][0] ||
                    branches[i][1] !== candidate.branches[i][1]) {
                    branchesMatching = false;
                    break;
                }
            }
            if (branchesMatching) {
                return candidate;
            }
        }
        const r = new Expr_1.CaseExpr(branches, fallback);
        this.m_caseExprs.push(r);
        return r;
    }
    visitCallExprImpl(expr, context, constructor) {
        // rewrite the actual arguments
        const expressions = expr.args.map(childExpr => childExpr.accept(this, context));
        // ensure we have a valid set of interned expressions for the calls
        if (!this.m_callExprs.has(expr.op)) {
            this.m_callExprs.set(expr.op, []);
        }
        // get the calls for the given operator.
        const calls = this.m_callExprs.get(expr.op);
        for (const call of calls) {
            // check the number of arguments
            if (call.args.length !== expressions.length) {
                continue;
            }
            // find the index of the first mismatch.
            let index = 0;
            for (; index < call.args.length; ++index) {
                if (call.args[index] !== expressions[index]) {
                    break;
                }
            }
            if (index === call.args.length) {
                // no mismatch found, return the 'interned' call.
                return call;
            }
        }
        const e = constructor(expr.op, expressions);
        e.descriptor = expr.descriptor;
        calls.push(e);
        return e;
    }
    visitCallExpr(expr, context) {
        return this.visitCallExprImpl(expr, context, (op, args) => {
            return new Expr_1.CallExpr(op, args);
        });
    }
    visitLookupExpr(expr, context) {
        return this.visitCallExprImpl(expr, context, (op, args) => {
            return new Expr_1.LookupExpr(args);
        });
    }
    visitStepExpr(expr, context) {
        if (this.m_stepExprs.includes(expr)) {
            return expr;
        }
        const input = expr.input.accept(this, context);
        const defaultValue = expr.defaultValue.accept(this, context);
        const stops = expr.stops.map(stop => {
            const key = stop[0];
            const value = stop[1].accept(this, context);
            return value === stop[1] ? stop : [key, value];
        });
        for (const step of this.m_stepExprs) {
            if (step.input === input &&
                step.defaultValue === defaultValue &&
                stops.length === step.stops.length &&
                stops.every(([key, value], i) => key === step.stops[i][0] && value === step.stops[i][1])) {
                return step;
            }
        }
        const e = new Expr_1.StepExpr(input, defaultValue, stops);
        this.m_stepExprs.push(e);
        return e;
    }
    visitInterpolateExpr(expr, context) {
        if (this.m_interpolateExprs.includes(expr)) {
            return expr;
        }
        const input = expr.input.accept(this, context);
        const stops = expr.stops.map(stop => {
            const key = stop[0];
            const value = stop[1].accept(this, context);
            return value === stop[1] ? stop : [key, value];
        });
        for (const interp of this.m_interpolateExprs) {
            if (interp.input === input &&
                interp.mode[0] === expr.mode[0] &&
                interp.mode[1] === expr.mode[1] &&
                stops.length === interp.stops.length &&
                stops.every(([key, value], i) => key === interp.stops[i][0] && value === interp.stops[i][1])) {
                return interp;
            }
        }
        const e = new Expr_1.InterpolateExpr(expr.mode, input, stops);
        this.m_interpolateExprs.push(e);
        return e;
    }
}
exports.ExprPool = ExprPool;
//# sourceMappingURL=ExprPool.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/GeoJsonDataType.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/GeoJsonDataType.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFeatureGeometry = void 0;
function isFeatureGeometry(object) {
    const t = object.type;
    return (t === "Point" ||
        t === "MultiPoint" ||
        t === "LineString" ||
        t === "MultiLineString" ||
        t === "Polygon" ||
        t === "MultiPolygon");
}
exports.isFeatureGeometry = isFeatureGeometry;
//# sourceMappingURL=GeoJsonDataType.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/IMeshBuffers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/IMeshBuffers.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=IMeshBuffers.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ITileDecoder.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ITileDecoder.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ITileDecoder.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ITiler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ITiler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ITiler.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interpolatedPropertyDefinitionToJsonExpr = exports.isInterpolatedPropertyDefinition = exports.InterpolationMode = void 0;
/**
 * Interpolation mode used when computing a [[InterpolatedProperty]] value for a given zoom level.
 * @internal
 */
var InterpolationMode;
(function (InterpolationMode) {
    InterpolationMode[InterpolationMode["Discrete"] = 0] = "Discrete";
    InterpolationMode[InterpolationMode["Linear"] = 1] = "Linear";
    InterpolationMode[InterpolationMode["Cubic"] = 2] = "Cubic";
    InterpolationMode[InterpolationMode["Exponential"] = 3] = "Exponential";
})(InterpolationMode = exports.InterpolationMode || (exports.InterpolationMode = {}));
/**
 * Checks if a property is interpolated.
 * @param p - property to be checked
 * @internal
 */
function isInterpolatedPropertyDefinition(p) {
    if (p &&
        p.interpolationMode === undefined &&
        Array.isArray(p.values) &&
        p.values.length > 0 &&
        p.values[0] !== undefined &&
        Array.isArray(p.zoomLevels) &&
        p.zoomLevels.length > 0 &&
        p.zoomLevels[0] !== undefined &&
        p.values.length === p.zoomLevels.length) {
        return true;
    }
    return false;
}
exports.isInterpolatedPropertyDefinition = isInterpolatedPropertyDefinition;
/**
 * Converts an [[InterpolatedPropertyDefinition]] to a [[JsonExpr]].
 *
 * @param property - A valid [[InterpolatedPropertyDefinition]]
 */
function interpolatedPropertyDefinitionToJsonExpr(property) {
    if (property.interpolation === undefined || property.interpolation === "Discrete") {
        const step = ["step", ["zoom"], property.values[0]];
        for (let i = 1; i < property.zoomLevels.length; ++i) {
            step.push(property.zoomLevels[i], property.values[i]);
        }
        return step;
    }
    const interpolation = ["interpolate"];
    switch (property.interpolation) {
        case "Linear":
            interpolation.push(["linear"]);
            break;
        case "Cubic":
            interpolation.push(["cubic"]);
            break;
        case "Exponential":
            interpolation.push([
                "exponential",
                property.exponent !== undefined ? property.exponent : 2
            ]);
            break;
        default:
            throw new Error(`interpolation mode '${property.interpolation}' is not supported`);
    } //switch
    interpolation.push(["zoom"]);
    for (let i = 0; i < property.zoomLevels.length; ++i) {
        interpolation.push(property.zoomLevels[i], property.values[i]);
    }
    return interpolation;
}
exports.interpolatedPropertyDefinitionToJsonExpr = interpolatedPropertyDefinitionToJsonExpr;
//# sourceMappingURL=InterpolatedPropertyDefs.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Outliner.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Outliner.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addPolygonEdges = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const currEdgeStart = new THREE.Vector2();
const currEdgeGoal = new THREE.Vector2();
const prevEdgeStart = new THREE.Vector2();
const prevEdgeGoal = new THREE.Vector2();
/**
 * Fills an index buffer with the indices for the edges of a polygon contour.
 *
 * @param indexBuffer - Edge index buffer to be filled.
 * @param vertexOffset - Starting offset of the vertices composing the contour.
 * @param vertexStride - Number of elements per contour vertex.
 * @param polygonContour - Vertices that compose the contour.
 * @param polygonContourEdges - Collection of booleans indicating if contour edges should be added.
 */
function addPolygonEdges(indexBuffer, vertexOffset, vertexStride, polygonContour, polygonContourEdges, isExtruded, addFootprintEdges, wallEdgeSlope) {
    for (let i = 0; i < polygonContourEdges.length; ++i) {
        if (polygonContourEdges[i]) {
            if (isExtruded === true) {
                const vFootprint0 = vertexOffset + i * 2;
                const vRoof0 = vFootprint0 + 1;
                const vFootprint1 = vertexOffset + ((i + 1) % polygonContourEdges.length) * 2;
                const vRoof1 = vFootprint1 + 1;
                if (addFootprintEdges === true) {
                    indexBuffer.push(vFootprint0, vFootprint1);
                }
                indexBuffer.push(vRoof0, vRoof1);
                const prevEdgeIdx = (i === 0 ? polygonContourEdges.length : i) - 1;
                if (polygonContourEdges[prevEdgeIdx]) {
                    if (wallEdgeSlope !== undefined) {
                        const v0x = polygonContour[i * vertexStride];
                        const v0y = polygonContour[i * vertexStride + 1];
                        const v1x = polygonContour[((i + 1) % polygonContourEdges.length) * vertexStride];
                        const v1y = polygonContour[((i + 1) % polygonContourEdges.length) * vertexStride + 1];
                        currEdgeStart.set(v0x, v0y);
                        currEdgeGoal.set(v1x, v1y);
                        prevEdgeStart.set(polygonContour[prevEdgeIdx * vertexStride], polygonContour[prevEdgeIdx * vertexStride + 1]);
                        prevEdgeGoal.set(currEdgeStart.x, currEdgeStart.y);
                        if (prevEdgeGoal
                            .sub(prevEdgeStart)
                            .normalize()
                            .dot(currEdgeGoal.sub(currEdgeStart).normalize()) <= wallEdgeSlope) {
                            indexBuffer.push(vFootprint0, vRoof0);
                        }
                    }
                    else {
                        indexBuffer.push(vFootprint0, vRoof0);
                    }
                }
            }
            else {
                const vFoot0 = vertexOffset + i;
                const vRoof0 = vertexOffset + ((i + 1) % polygonContourEdges.length);
                indexBuffer.push(vFoot0, vRoof0);
            }
        }
    }
}
exports.addPolygonEdges = addPolygonEdges;
//# sourceMappingURL=Outliner.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Pixels.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Pixels.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pixels = void 0;
const RX = /^((?=\.\d|\d)(?:\d+)?(?:\.?\d*))px$/;
/**
 * A class representing Pixels.
 *
 * @hidden
 * @internal
 */
class Pixels {
    /**
     * Constructs a [[Pixels]] literal
     *
     * @param value - The number of pixels.
     */
    constructor(value) {
        this.value = value;
    }
    /**
     * Parses a pixel string literal.
     *
     * @param text - The string color literal
     */
    static parse(text) {
        const match = RX.exec(text);
        if (match === null) {
            return undefined;
        }
        return new Pixels(Number(match[1]));
    }
    toJSON() {
        return `${this.value}px`;
    }
}
exports.Pixels = Pixels;
//# sourceMappingURL=Pixels.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/PostEffects.js":
/*!************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/PostEffects.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=PostEffects.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/PropertyValue.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/PropertyValue.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPropertyValue = void 0;
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const Pixels_1 = __webpack_require__(/*! ./Pixels */ "./node_modules/@here/harp-datasource-protocol/lib/Pixels.js");
const RGBA_1 = __webpack_require__(/*! ./RGBA */ "./node_modules/@here/harp-datasource-protocol/lib/RGBA.js");
const StringEncodedNumeral_1 = __webpack_require__(/*! ./StringEncodedNumeral */ "./node_modules/@here/harp-datasource-protocol/lib/StringEncodedNumeral.js");
const logger = harp_utils_1.LoggerManager.instance.create("PropertyValue");
/**
 * Get the value of the specified property in given `env`.
 *
 * @param property - Property of a technique.
 * @param env - The {@link Env} used to evaluate the property
 * @param cache - An optional expression cache.
 */
function getPropertyValue(property, env, cache) {
    var _a, _b, _c;
    if (Expr_1.Expr.isExpr(property)) {
        try {
            let r = property.evaluate(env, Expr_1.ExprScope.Dynamic, cache);
            if (typeof r === "string") {
                r = (_b = (_a = RGBA_1.RGBA.parse(r)) !== null && _a !== void 0 ? _a : Pixels_1.Pixels.parse(r)) !== null && _b !== void 0 ? _b : r;
            }
            if (r instanceof RGBA_1.RGBA) {
                return r.getHex();
            }
            else if (r instanceof Pixels_1.Pixels) {
                return r.value * ((_c = Number(env.lookup("$pixelToMeters"))) !== null && _c !== void 0 ? _c : 1);
            }
            return r;
        }
        catch (error) {
            logger.error("failed to evaluate expression", JSON.stringify(property), "error", String(error));
            return null;
        }
    }
    if (property === null || typeof property === "undefined") {
        return null;
    }
    else if (typeof property !== "string") {
        // Property in numeric or array, etc. format
        return property;
    }
    else {
        // Non-interpolated string encoded numeral parsing
        const pixelToMeters = env.lookup("$pixelToMeters") || 1;
        const value = StringEncodedNumeral_1.parseStringEncodedNumeral(property, pixelToMeters);
        return value !== undefined ? value : property;
    }
}
exports.getPropertyValue = getPropertyValue;
//# sourceMappingURL=PropertyValue.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/RGBA.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/RGBA.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RGBA = void 0;
const three_1 = __webpack_require__(/*! three */ "three");
const ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/@here/harp-datasource-protocol/lib/ColorUtils.js");
const StringEncodedNumeral_1 = __webpack_require__(/*! ./StringEncodedNumeral */ "./node_modules/@here/harp-datasource-protocol/lib/StringEncodedNumeral.js");
/**
 * A class representing RGBA colors.
 *
 * @hidden
 * @internal
 */
class RGBA {
    /**
     * Constructs a [[RGBA]] color using the given components in the [0..1] range.
     */
    constructor(r = 1, g = 1, b = 1, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    /**
     * Parses a string describing a color.
     *
     * @param text - The string color literal
     */
    static parse(text) {
        const color = StringEncodedNumeral_1.parseStringEncodedColor(text);
        if (color === undefined) {
            return undefined;
        }
        return ColorUtils_1.ColorUtils.getRgbaFromHex(color);
    }
    /**
     * Clones this [[RGBA]] color.
     */
    clone() {
        return new RGBA(this.r, this.g, this.b, this.a);
    }
    /**
     * Returns this color encoded as one single number.
     */
    getHex() {
        return ColorUtils_1.ColorUtils.getHexFromRgba(this.r, this.g, this.b, this.a);
    }
    /**
     * Linearly interpolate the components of this color.
     */
    lerp(target, t) {
        this.r = three_1.MathUtils.lerp(this.r, target.r, t);
        this.g = three_1.MathUtils.lerp(this.g, target.g, t);
        this.b = three_1.MathUtils.lerp(this.b, target.b, t);
        this.a = three_1.MathUtils.lerp(this.a, target.a, t);
        return this;
    }
    /**
     * Returns this color encoded as JSON literal.
     */
    toJSON() {
        return `rgba(${(this.r * 255) << 0}, ${(this.g * 255) << 0}, ${(this.b * 255) << 0}, ${this.a})`;
    }
}
exports.RGBA = RGBA;
//# sourceMappingURL=RGBA.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/StringEncodedNumeral.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/StringEncodedNumeral.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseStringEncodedColor = exports.parseStringEncodedNumeral = exports.StringEncodedNumeralFormatMaxSize = exports.StringEncodedNumeralFormats = exports.StringEncodedColorFormats = exports.StringEncodedMetricFormats = exports.StringEncodedNumeralType = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
//@ts-ignore
const csscolorparser_1 = __webpack_require__(/*! csscolorparser */ "./node_modules/csscolorparser/csscolorparser.js");
const ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/@here/harp-datasource-protocol/lib/ColorUtils.js");
/**
 * Enumeration of supported string encoded numerals.
 * @internal
 */
var StringEncodedNumeralType;
(function (StringEncodedNumeralType) {
    StringEncodedNumeralType[StringEncodedNumeralType["Meters"] = 0] = "Meters";
    StringEncodedNumeralType[StringEncodedNumeralType["Pixels"] = 1] = "Pixels";
    StringEncodedNumeralType[StringEncodedNumeralType["Hex"] = 2] = "Hex";
})(StringEncodedNumeralType = exports.StringEncodedNumeralType || (exports.StringEncodedNumeralType = {}));
const StringEncodedMeters = {
    type: StringEncodedNumeralType.Meters,
    size: 1,
    regExp: /^((?=\.\d|\d)(?:\d+)?(?:\.?\d*))m$/,
    decoder: (encodedValue, target) => {
        const match = StringEncodedMeters.regExp.exec(encodedValue);
        return match ? (target[0] = Number(match[1])) !== undefined : false;
    }
};
const StringEncodedPixels = {
    type: StringEncodedNumeralType.Pixels,
    size: 1,
    mask: 1.0,
    regExp: /^((?=\.\d|\d)(?:\d+)?(?:\.?\d*))px$/,
    decoder: (encodedValue, target) => {
        const match = StringEncodedPixels.regExp.exec(encodedValue);
        if (match === null) {
            return false;
        }
        target[0] = Number(match[1]);
        return true;
    }
};
const StringEncodedHex = {
    type: StringEncodedNumeralType.Hex,
    size: 4,
    regExp: /^\#((?:[0-9A-Fa-f][0-9A-Fa-f]){4}|[0-9A-Fa-f]{4})$/,
    decoder: (encodedValue, target) => {
        const match = StringEncodedHex.regExp.exec(encodedValue);
        if (match === null) {
            return false;
        }
        const hex = match[1];
        const size = hex.length;
        // Only few sizes are possible for given reg-exp.
        harp_utils_1.assert(size === 4 || size === 8, `Matched incorrect hex color format`);
        // Note that we simply ignore alpha channel value.
        // TODO: To be resolved with HARP-7517
        if (size === 4) {
            // #RGB or #RGBA
            target[0] = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
            target[1] = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
            target[2] = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;
            target[3] = size === 4 ? parseInt(hex.charAt(3) + hex.charAt(3), 16) / 255 : 1;
        }
        else if (size === 8) {
            // #RRGGBB or #RRGGBBAA
            target[0] = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
            target[1] = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
            target[2] = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;
            target[3] = size === 8 ? parseInt(hex.charAt(6) + hex.charAt(7), 16) / 255 : 1;
        }
        return true;
    }
};
/**
 * Array of all supported [[StringEncodedNumeralFormat]]s describing sizes, lengths and distances.
 * @internal
 */
exports.StringEncodedMetricFormats = [
    StringEncodedMeters,
    StringEncodedPixels
];
const StringEncodedMetricFormatMaxSize = exports.StringEncodedMetricFormats.reduce((a, b) => Math.max(a, b.size), 0);
/**
 * Array of all supported [[StringEncodedNumeralFormat]]s describing color data.
 * @internal
 */
exports.StringEncodedColorFormats = [StringEncodedHex];
const StringEncodedColorFormatMaxSize = exports.StringEncodedColorFormats.reduce((a, b) => Math.max(a, b.size), 0);
/**
 * Array of supported [[StringEncodedNumeralFormat]]s (intended to be indexed with
 * [[StringEncodedNumeralType]] enum).
 * @internal
 */
exports.StringEncodedNumeralFormats = [
    ...exports.StringEncodedMetricFormats,
    ...exports.StringEncodedColorFormats
];
/**
 * @internal
 */
exports.StringEncodedNumeralFormatMaxSize = Math.max(StringEncodedColorFormatMaxSize, StringEncodedMetricFormatMaxSize);
const tmpBuffer = new Array(exports.StringEncodedNumeralFormatMaxSize);
/**
 * Parse string encoded numeral values using all known [[StringEncodedNumeralFormats]].
 *
 * @param numeral - The string representing numeric value.
 * @param pixelToMeters - The ratio used to convert from meters to pixels (default 1.0).
 * @returns Number parsed or __undefined__ if non of the numeral patterns matches the expression
 * provided in [[numeral]].
 */
function parseStringEncodedNumeral(numeral, pixelToMeters = 1.0) {
    return parseStringLiteral(numeral, exports.StringEncodedNumeralFormats, pixelToMeters);
}
exports.parseStringEncodedNumeral = parseStringEncodedNumeral;
/**
 * Parse string encoded color value using all known [[StringEncodedColorFormats]].
 *
 * @param color - The string encoded color expression (i.e. '#FFF', 'rgb(255, 0, 0)', etc.).
 * @returns The color parsed or __undefined__ if non of the known representations matches
 * the expression provided in [[color]].
 */
function parseStringEncodedColor(color) {
    return parseStringLiteral(color, exports.StringEncodedColorFormats);
}
exports.parseStringEncodedColor = parseStringEncodedColor;
function parseStringLiteral(text, formats, pixelToMeters = 1.0) {
    const matchedFormat = formats.find(format => {
        return format.decoder(text, tmpBuffer) ? true : false;
    });
    if (matchedFormat === undefined) {
        const components = csscolorparser_1.parseCSSColor(text);
        return Array.isArray(components) && !components.some(c => isNaN(c))
            ? ColorUtils_1.ColorUtils.getHexFromRgba(components[0] / 255, components[1] / 255, components[2] / 255, components[3])
            : undefined;
    }
    switch (matchedFormat === null || matchedFormat === void 0 ? void 0 : matchedFormat.type) {
        case StringEncodedNumeralType.Pixels:
            return tmpBuffer[0] * pixelToMeters;
        case StringEncodedNumeralType.Hex:
            return ColorUtils_1.ColorUtils.getHexFromRgba(tmpBuffer[0], tmpBuffer[1], tmpBuffer[2], tmpBuffer[3]);
        default:
            return tmpBuffer[0];
    }
}
//# sourceMappingURL=StringEncodedNumeral.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/StyleSetEvaluator.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/StyleSetEvaluator.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeDecodedTechnique = exports.StyleSetEvaluator = void 0;
/*
 * Copyright (C) 2019-2022 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const ExprPool_1 = __webpack_require__(/*! ./ExprPool */ "./node_modules/@here/harp-datasource-protocol/lib/ExprPool.js");
const InterpolatedPropertyDefs_1 = __webpack_require__(/*! ./InterpolatedPropertyDefs */ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js");
const TechniqueDescriptors_1 = __webpack_require__(/*! ./TechniqueDescriptors */ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueDescriptors.js");
const Techniques_1 = __webpack_require__(/*! ./Techniques */ "./node_modules/@here/harp-datasource-protocol/lib/Techniques.js");
const logger = harp_utils_1.LoggerManager.instance.create("StyleSetEvaluator");
const DEFAULT_TECHNIQUE_ATTR_SCOPE = TechniqueDescriptors_1.AttrScope.TechniqueGeometry;
/**
 * Get the attribute scope of the given style property.
 *
 * @remarks
 * Certain Style properties change their dynamic scope behavior
 * based on other properties. For example, the `color` property
 * of `extruded-polygon` change behavior based on the usage
 * of `vertexColors`.
 *
 * @param style A valid Style.
 * @param attrName The name of the attribute of the {@link style}.
 */
function getStyleAttributeScope(style, attrName) {
    var _a, _b;
    if (style.technique === "extruded-polygon") {
        if (attrName === "color" && style.vertexColors !== false) {
            return DEFAULT_TECHNIQUE_ATTR_SCOPE;
        }
    }
    return ((_b = (_a = TechniqueDescriptors_1.getTechniqueAttributeDescriptor(style.technique, attrName)) === null || _a === void 0 ? void 0 : _a.scope) !== null && _b !== void 0 ? _b : DEFAULT_TECHNIQUE_ATTR_SCOPE);
}
/**
 * `StyleConditionClassifier` searches for usages of `$layer` in `when` conditions
 * associated with styling rules.
 *
 * @hidden
 */
class StyleConditionClassifier {
    classify(style) {
        if (style._whenExpr) {
            const savedStyle = this.switchStyle(style);
            style._whenExpr = style._whenExpr.accept(this, undefined);
            this._style = savedStyle;
        }
    }
    visitNullLiteralExpr(expr, enclosingExpr) {
        return expr;
    }
    visitBooleanLiteralExpr(expr, enclosingExpr) {
        return expr;
    }
    visitNumberLiteralExpr(expr, enclosingExpr) {
        return expr;
    }
    visitStringLiteralExpr(expr, enclosingExpr) {
        return expr;
    }
    visitObjectLiteralExpr(expr, enclosingExpr) {
        return expr;
    }
    visitVarExpr(expr, enclosingExpr) {
        return expr;
    }
    visitHasAttributeExpr(expr, enclosingExpr) {
        return expr;
    }
    visitMatchExpr(expr, enclosingExpr) {
        return expr;
    }
    visitCaseExpr(expr, enclosingExpr) {
        return expr;
    }
    visitCallExpr(call, enclosingExpr) {
        if (call.op === "all") {
            // processing of an `["all", e1, e2, ... eN]` expression. In this case
            // search for expressions matching comparison of `$layer` and string literals
            // in the sub expressions.
            const children = call.args
                .map(childExpr => childExpr.accept(this, call))
                .filter(childExpr => childExpr !== undefined);
            return new Expr_1.CallExpr(call.op, children);
        }
        else if (enclosingExpr) {
            // `call` is a direct child expression of an `"all"` operator.
            const matched = this.matchVarStringComparison(call);
            if (matched) {
                if (this._style.layer === undefined && matched.name === "$layer") {
                    // found a subexpression `["==", ["get", "$layer"], "some layer name"]`
                    // enclosed in an `["all", e1...eN]` expression. Remove it from
                    // its parent expression and store the value of the expected $layer in
                    // [[StyleInternalParams]].
                    this._style.layer = matched.value;
                    // return `undefined` to remove this sub expression from its parent.
                    return undefined;
                }
                else if (this._style._geometryType === undefined &&
                    matched.name === "$geometryType") {
                    // found a subexpression `["==", ["get", "$geometryType"], "geometry"]`
                    // enclosed in an `["all", e1...eN]` expression. Remove it from
                    // its parent expression and store the value of the expected $geometryType in
                    // [[StyleInternalParams]].
                    this._style._geometryType = matched.value;
                    // return `undefined` to remove this sub expression from its parent.
                    return undefined;
                }
            }
        }
        return call;
    }
    visitLookupExpr(lookup, enclosingExpr) {
        return this.visitCallExpr(lookup, enclosingExpr);
    }
    visitStepExpr(expr, enclosingExpr) {
        return expr;
    }
    visitInterpolateExpr(expr, enclosingExpr) {
        return expr;
    }
    /**
     * Tests if the given `call` matches the structure ["==", ["get", name], value].
     * If a match is found returns an object containing the `name` and the `value`;
     *
     * @param call - The expression to match.
     */
    matchVarStringComparison(call) {
        if (call.op === "==") {
            const left = call.args[0];
            const right = call.args[1];
            if (left instanceof Expr_1.VarExpr && right instanceof Expr_1.StringLiteralExpr) {
                return { name: left.name, value: right.value };
            }
            if (right instanceof Expr_1.VarExpr && left instanceof Expr_1.StringLiteralExpr) {
                return { name: right.name, value: left.value };
            }
        }
        return undefined;
    }
    /**
     * Sets the given `style` as current.
     *
     * @returns The previous `style`.
     */
    switchStyle(style) {
        const saved = this._style;
        this._style = style;
        return saved;
    }
}
class OptimizedSubSetKey {
    constructor(layer, geometryType) {
        this.key = "";
        this.set(layer, geometryType);
    }
    set(layer, geometryType, env) {
        let keyUpdateNeeded = false;
        if (layer === undefined) {
            const envLayer = env !== undefined ? env.lookup("$layer") : undefined;
            layer = typeof envLayer === "string" ? envLayer : undefined;
        }
        if (this.layer !== layer) {
            this.layer = layer;
            keyUpdateNeeded = true;
        }
        if (geometryType === undefined) {
            const envGeometryType = env !== undefined ? env.lookup("$geometryType") : undefined;
            geometryType = typeof envGeometryType === "string" ? envGeometryType : undefined;
        }
        if (this.geometryType !== geometryType) {
            this.geometryType = geometryType;
            keyUpdateNeeded = true;
        }
        if (keyUpdateNeeded) {
            this.updateKey();
        }
        return this;
    }
    updateKey() {
        if (this.layer !== undefined) {
            if (this.geometryType !== undefined) {
                this.key = `${this.layer}:${this.geometryType}`;
            }
            else {
                this.key = `${this.layer}:`;
            }
        }
        else {
            if (this.geometryType !== undefined) {
                this.key = `:${this.geometryType}`;
            }
            else {
                this.key = "all";
            }
        }
        this.cachedStyleSet = undefined;
    }
}
/**
 * Combine data from datasource and apply the rules from a specified theme to show it on the map.
 */
class StyleSetEvaluator {
    constructor(m_options) {
        this.m_options = m_options;
        this.m_techniques = [];
        this.m_exprPool = new ExprPool_1.ExprPool();
        this.m_cachedResults = new Map();
        this.m_styleConditionClassifier = new StyleConditionClassifier();
        this.m_subStyleSetCache = new Map();
        this.m_definitionExprCache = new Map();
        this.m_tmpOptimizedSubSetKey = new OptimizedSubSetKey();
        this.m_emptyEnv = new Expr_1.Env();
        this.m_featureDependencies = [];
        this.m_nextArrayBufferId = 0;
        this.m_definitions = this.m_options.definitions;
        this.styleSet = resolveReferences(this.m_options.styleSet, this.m_definitions);
        computeDefaultRenderOrder(this.styleSet);
        this.compileStyleSet();
    }
    /**
     * Find all techniques that fit the current objects' environment.
     * *The techniques in the resulting array may not be modified* since they are being reused for
     * identical objects.
     *
     * @param env - The objects environment, i.e. the attributes that are relevant for its
     * representation.
     * @param layer - The optional layer name used to filter techniques.
     * @param geometryType - The optional geometryType used to filter techniques.
     */
    getMatchingTechniques(env, layer, geometryType) {
        if (this.m_previousResult &&
            this.m_previousEnv &&
            this.m_featureDependencies.every(p => { var _a; return ((_a = this.m_previousEnv) === null || _a === void 0 ? void 0 : _a.lookup(p)) === env.lookup(p); })) {
            return this.m_previousResult;
        }
        const result = [];
        this.m_cachedResults.clear();
        const optimizedSubSetKey = this.m_tmpOptimizedSubSetKey;
        optimizedSubSetKey.set(layer, geometryType, env);
        // get the requested $layer and $geometryType, if any.
        this.m_layer = optimizedSubSetKey.layer;
        this.m_geometryType = optimizedSubSetKey.geometryType;
        this.m_zoomLevel = env.lookup("$zoom");
        const searchedStyleSet = this.getOptimizedStyleSet(optimizedSubSetKey);
        for (const currStyle of searchedStyleSet) {
            if (this.processStyle(env, currStyle, result)) {
                break;
            }
        }
        this.m_previousResult = result;
        this.m_previousEnv = env;
        return result;
    }
    /**
     * Check if `styleSet` contains any rule related to `layer`.
     *
     * @param layer - name of layer
     */
    wantsLayer(layer) {
        return (this.getOptimizedStyleSet(this.m_tmpOptimizedSubSetKey.set(layer, undefined)).length > 0);
    }
    /**
     * Check if `styleSet` contains any rule related to particular `[layer, geometryType]` pair.
     *
     * @param layer - name of layer
     * @param geometryType - type of layer - `point`, `line` or `polygon`
     */
    wantsFeature(layer, geometryType) {
        return (this.getOptimizedStyleSet(this.m_tmpOptimizedSubSetKey.set(layer, geometryType))
            .length > 0);
    }
    /**
     * Reset array of techniques.
     *
     * Cleans technique array and indices, so it doesn't accumulate accross several decoding runs.
     */
    resetTechniques() {
        for (const techinque of this.m_techniques) {
            techinque._index = undefined;
        }
        this.m_techniques.length = 0;
        this.m_previousResult = undefined;
        this.m_previousEnv = undefined;
    }
    /**
     * Get the (current) array of techniques that have been created during decoding.
     */
    get techniques() {
        return this.m_techniques;
    }
    /**
     * Get the (current) array of techniques that have been created during decoding.
     */
    get decodedTechniques() {
        return this.m_techniques.map(makeDecodedTechnique);
    }
    getOptimizedStyleSet(subSetKey) {
        if (subSetKey.cachedStyleSet !== undefined) {
            return subSetKey.cachedStyleSet;
        }
        let optimizedStyleSet = this.m_subStyleSetCache.get(subSetKey.key);
        if (optimizedStyleSet !== undefined) {
            subSetKey.cachedStyleSet = optimizedStyleSet;
            return optimizedStyleSet;
        }
        optimizedStyleSet = this.createPreFilteredStyleSet(subSetKey);
        this.m_subStyleSetCache.set(subSetKey.key, optimizedStyleSet);
        subSetKey.cachedStyleSet = optimizedStyleSet;
        return optimizedStyleSet;
    }
    createPreFilteredStyleSet(subSetKey) {
        const { layer, geometryType } = subSetKey;
        return this.styleSet.filter(style => {
            if (layer !== undefined && style.layer !== undefined && style.layer !== layer) {
                return false;
            }
            if (geometryType !== undefined &&
                style._geometryType !== undefined &&
                style._geometryType !== geometryType) {
                return false;
            }
            return true;
        });
    }
    /**
     * Compile the `when` conditions found when traversting the styling rules.
     */
    compileStyleSet() {
        this.m_featureDependencies = ["$layer", "$geometryType", "$zoom"];
        this.styleSet.forEach(style => this.compileStyle(style));
        // Create optimized styleSets for each `layer` & `geometryType` tuple.
        this.styleSet.forEach(style => {
            this.getOptimizedStyleSet(this.m_tmpOptimizedSubSetKey.set(style.layer, style._geometryType));
        });
    }
    /**
     * Compile the `when` conditions reachable from the given `style`.
     *
     * @param style - The current style.
     */
    compileStyle(style) {
        this.checkStyleDynamicAttributes(style);
        if (style.when !== undefined) {
            try {
                style._whenExpr = Array.isArray(style.when)
                    ? Expr_1.Expr.fromJSON(style.when, this.m_definitions, this.m_definitionExprCache)
                    : Expr_1.Expr.parse(style.when);
                // search for usages of '$layer' and any other
                // special symbol that can be used to speed up the evaluation
                // of the `when` conditions associated to this `style`.
                this.m_styleConditionClassifier.classify(style);
                if (style._whenExpr !== undefined) {
                    style._whenExpr = style._whenExpr.intern(this.m_exprPool);
                }
                const deps = style._whenExpr.dependencies();
                deps === null || deps === void 0 ? void 0 : deps.properties.forEach(prop => {
                    if (!this.m_featureDependencies.includes(prop)) {
                        this.m_featureDependencies.push(prop);
                    }
                });
                if (Expr_1.isJsonExpr(style.minZoomLevel)) {
                    style._minZoomLevelExpr = Expr_1.Expr.fromJSON(style.minZoomLevel, this.m_definitions).intern(this.m_exprPool);
                }
                if (Expr_1.isJsonExpr(style.maxZoomLevel)) {
                    style._maxZoomLevelExpr = Expr_1.Expr.fromJSON(style.maxZoomLevel, this.m_definitions).intern(this.m_exprPool);
                }
            }
            catch (err) {
                logger.log("failed to evaluate expression", JSON.stringify(style.when), "error", String(err));
            }
        }
    }
    /**
     * Process a style (and its sub-styles) hierarchically to look for the technique that fits the
     * current objects' environment. The attributes of the styles are assembled to create a unique
     * technique for every object.
     *
     * @param env - The objects environment, i.e. the attributes that are relevant for its
     *            representation.
     * @param style - Current style (could also be top of stack).
     * @param result - The array of resulting techniques. There may be more than one technique per
     *               object, resulting in multiple graphical objects for representation.
     * @returns `true` if style has been found and processing is finished. `false` if not found, or
     *          more than one technique should be applied.
     */
    processStyle(env, style, result) {
        if (!this.checkZoomLevel(env, style)) {
            return false;
        }
        if (this.m_layer !== undefined &&
            style.layer !== undefined &&
            style.layer !== this.m_layer) {
            return false;
        }
        if (this.m_geometryType !== undefined &&
            style._geometryType !== undefined &&
            style._geometryType !== this.m_geometryType) {
            return false;
        }
        if (style._whenExpr) {
            try {
                if (!style._whenExpr.evaluate(env, Expr_1.ExprScope.Condition, this.m_cachedResults)) {
                    // Stop processing this styling rule. The `when` condition
                    // associated with the current `style` evaluates to false so
                    // no techinque defined by this style should be applied.
                    return false;
                }
            }
            catch (error) {
                logger.error(`failed to evaluate expression '${JSON.stringify(style.when)}': ${error}`);
                return false;
            }
        }
        if (style.technique === undefined) {
            return false;
        }
        // we found a technique!
        if (style.technique !== "none") {
            result.push(this.getTechniqueForStyleMatch(env, style));
        }
        // stop processing if "final" is set
        return style.final === true;
    }
    checkZoomLevel(env, style) {
        var _a, _b;
        if (style.minZoomLevel === undefined && style.maxZoomLevel === undefined) {
            return true;
        }
        const zoomLevel = this.m_zoomLevel;
        if (zoomLevel === undefined) {
            return true;
        }
        if (style.minZoomLevel !== undefined) {
            let minZoomLevel = style.minZoomLevel;
            if (((_a = style._minZoomLevelExpr) === null || _a === void 0 ? void 0 : _a.isDynamic()) === false) {
                // Only filter by zoom level if the expression is not dynamic.
                try {
                    minZoomLevel = style._minZoomLevelExpr.evaluate(env, Expr_1.ExprScope.Condition, this.m_cachedResults);
                }
                catch (error) {
                    logger.error(`failed to evaluate expression '${JSON.stringify(style._minZoomLevelExpr)}': ${error}`);
                }
            }
            if (typeof minZoomLevel === "number" && zoomLevel < minZoomLevel) {
                return false;
            }
        }
        if (style.maxZoomLevel !== undefined) {
            let maxZoomLevel = style.maxZoomLevel;
            if (((_b = style._maxZoomLevelExpr) === null || _b === void 0 ? void 0 : _b.isDynamic()) === false) {
                // Only filter by zoom level if the expression is not dynamic.
                try {
                    maxZoomLevel = style._maxZoomLevelExpr.evaluate(env, Expr_1.ExprScope.Condition, this.m_cachedResults);
                }
                catch (error) {
                    logger.error(`failed to evaluate expression '${JSON.stringify(style._maxZoomLevelExpr)}': ${error}`);
                }
            }
            if (typeof maxZoomLevel === "number" && zoomLevel >= maxZoomLevel) {
                return false;
            }
        }
        return true;
    }
    getTechniqueForStyleMatch(env, style) {
        let technique;
        if (style._dynamicTechniques !== undefined) {
            const dynamicAttributes = this.evaluateTechniqueProperties(style, env);
            const key = this.getDynamicTechniqueKey(style, dynamicAttributes);
            technique = style._dynamicTechniques.get(key);
            if (technique === undefined) {
                technique = this.createTechnique(style, key, dynamicAttributes);
                style._dynamicTechniques.set(key, technique);
            }
        }
        else {
            technique = style._staticTechnique;
            if (technique === undefined) {
                style._staticTechnique = technique = this.createTechnique(style, `${style._styleSetIndex}`, []);
            }
        }
        if (technique._index === undefined) {
            technique._index = this.m_techniques.length;
            this.m_techniques.push(technique);
        }
        return technique;
    }
    getDynamicTechniqueKey(style, dynamicAttributes) {
        const dynamicAttrKey = dynamicAttributes
            .map(([_attrName, attrValue]) => {
            if (attrValue === undefined) {
                return "U";
            }
            else if (typeof attrValue === "object") {
                return JSON.stringify(attrValue, (_, value) => {
                    if (value instanceof ArrayBuffer) {
                        // ArrayBuffers cannot be directly stringified. They can be converted
                        // to typed arrays and then stringified, but it's too slow. Instead,
                        // assign them unique ids.
                        let arrayBufferId = value.id;
                        if (arrayBufferId === undefined) {
                            arrayBufferId = value.id = this.m_nextArrayBufferId++;
                        }
                        return arrayBufferId;
                    }
                    return value;
                });
            }
            else {
                return JSON.stringify(attrValue);
            }
        })
            .join(":");
        return `${style._styleSetIndex}:${dynamicAttrKey}`;
    }
    checkStyleDynamicAttributes(style) {
        var _a;
        if (style._dynamicTechniqueAttributes !== undefined || style.technique === "none") {
            return;
        }
        style._dynamicTechniqueAttributes = [];
        style._dynamicFeatureAttributes = [];
        style._dynamicForwardedAttributes = [];
        style._staticAttributes = [];
        const dynamicFeatureAttributes = style._dynamicFeatureAttributes;
        const dynamicTechniqueAttributes = style._dynamicTechniqueAttributes;
        const dynamicForwardedAttributes = style._dynamicForwardedAttributes;
        const targetStaticAttributes = style._staticAttributes;
        const processAttribute = (attrName, attrValue) => {
            if (attrValue === undefined) {
                return;
            }
            if (Expr_1.isJsonExpr(attrValue)) {
                attrValue = Expr_1.Expr.fromJSON(attrValue, this.m_definitions, this.m_definitionExprCache).intern(this.m_exprPool);
            }
            else if (InterpolatedPropertyDefs_1.isInterpolatedPropertyDefinition(attrValue)) {
                // found a property using an object-like interpolation definition.
                attrValue = Expr_1.Expr.fromJSON(InterpolatedPropertyDefs_1.interpolatedPropertyDefinitionToJsonExpr(attrValue)).intern(this.m_exprPool);
            }
            if (Expr_1.Expr.isExpr(attrValue)) {
                const deps = attrValue.dependencies();
                if (deps.featureState) {
                    if (attrName !== "enabled") {
                        logger.log("feature-state is not supported in this context");
                    }
                    else {
                        style._usesFeatureState = true;
                    }
                }
                if (deps.properties.size === 0 && !attrValue.isDynamic()) {
                    // no data-dependencies detected.
                    attrValue = attrValue.evaluate(this.m_emptyEnv);
                }
            }
            if (Expr_1.Expr.isExpr(attrValue)) {
                const attrScope = getStyleAttributeScope(style, attrName);
                const deps = attrValue.dependencies();
                deps.properties.forEach(prop => {
                    if (!this.m_featureDependencies.includes(prop)) {
                        this.m_featureDependencies.push(prop);
                    }
                });
                switch (attrScope) {
                    case TechniqueDescriptors_1.AttrScope.FeatureGeometry:
                        dynamicFeatureAttributes.push([attrName, attrValue]);
                        break;
                    case TechniqueDescriptors_1.AttrScope.TechniqueGeometry:
                        dynamicTechniqueAttributes.push([attrName, attrValue]);
                        break;
                    case TechniqueDescriptors_1.AttrScope.TechniqueRendering:
                        if (deps.properties.size === 0) {
                            dynamicForwardedAttributes.push([attrName, attrValue]);
                        }
                        else {
                            dynamicTechniqueAttributes.push([attrName, attrValue]);
                        }
                        break;
                }
            }
            else if (attrValue !== undefined && attrValue !== null) {
                targetStaticAttributes.push([attrName, attrValue]);
            }
        };
        const replacement = new Map([
            ["category", "_category"],
            ["secondaryCategory", "_secondaryCategory"]
        ]);
        for (const p in style) {
            if (!style.hasOwnProperty(p)) {
                continue;
            }
            if (p.startsWith("_")) {
                continue;
            }
            if (["when", "technique", "layer", "attr", "description"].includes(p)) {
                continue;
            }
            const pp = (_a = replacement.get(p)) !== null && _a !== void 0 ? _a : p;
            processAttribute(pp, style[p]);
        }
        if (style.attr !== undefined) {
            for (const attrName in style.attr) {
                if (!style.attr.hasOwnProperty(attrName)) {
                    continue;
                }
                processAttribute(attrName, style.attr[attrName]);
            }
        }
        if (dynamicTechniqueAttributes.length > 0) {
            style._dynamicTechniques = new Map();
        }
    }
    evaluateTechniqueProperties(style, env) {
        if (style._dynamicTechniqueAttributes === undefined) {
            return [];
        }
        return style._dynamicTechniqueAttributes.map(([attrName, attrExpr]) => {
            try {
                const evaluatedValue = attrExpr.evaluate(env, Expr_1.ExprScope.Value, this.m_cachedResults);
                return [attrName, evaluatedValue];
            }
            catch (error) {
                logger.error(`failed to evaluate expression '${attrExpr.toJSON()}': ${error}`);
                return [attrName, null];
            }
        });
    }
    createTechnique(style, key, dynamicAttrs) {
        var _a, _b;
        const technique = {};
        technique.name = style.technique;
        if (style._staticAttributes !== undefined) {
            for (const [attrName, attrValue] of style._staticAttributes) {
                if (attrValue !== null) {
                    technique[attrName] = attrValue;
                }
            }
        }
        for (const [attrName, attrValue] of dynamicAttrs) {
            if (attrValue !== null) {
                technique[attrName] = attrValue;
            }
        }
        if (style._dynamicFeatureAttributes !== undefined) {
            for (const [attrName, attrValue] of style._dynamicFeatureAttributes) {
                technique[attrName] = attrValue;
            }
        }
        if (style._dynamicForwardedAttributes !== undefined) {
            for (const [attrName, attrValue] of style._dynamicForwardedAttributes) {
                technique[attrName] = attrValue;
            }
        }
        technique._index = this.m_techniques.length;
        technique._styleSetIndex = style._styleSetIndex;
        if (style.styleSet !== undefined) {
            technique._styleSet = style.styleSet;
        }
        if (style._usesFeatureState !== undefined) {
            technique._usesFeatureState = style._usesFeatureState;
        }
        Techniques_1.setTechniqueRenderOrderOrPriority(technique, (_a = this.m_options.priorities) !== null && _a !== void 0 ? _a : [], (_b = this.m_options.labelPriorities) !== null && _b !== void 0 ? _b : []);
        this.m_techniques.push(technique);
        return technique;
    }
}
exports.StyleSetEvaluator = StyleSetEvaluator;
function computeDefaultRenderOrder(styleSet) {
    let techniqueRenderOrder = 0;
    let styleSetIndex = 0;
    for (const style of styleSet) {
        style._styleSetIndex = styleSetIndex++;
        if (style.technique !== undefined && style.renderOrder === undefined) {
            style.renderOrder = techniqueRenderOrder++;
        }
    }
}
function resolveReferences(styleSet, definitions) {
    return styleSet.map(style => resolveStyleReferences(style, definitions));
}
function resolveStyleReferences(style, definitions) {
    return Object.assign({}, style);
}
/**
 * Create transferable representation of dynamic technique.
 *
 * Converts  non-transferable {@link Expr}instances back to JSON form.
 */
function makeDecodedTechnique(technique) {
    const result = {};
    for (const attrName in technique) {
        if (!technique.hasOwnProperty(attrName)) {
            continue;
        }
        let attrValue = technique[attrName];
        if (typeof attrValue === "object" &&
            (attrValue.isVector2 || attrValue.isVector3 || attrValue.isVector4)) {
            attrValue = Expr_1.LiteralExpr.fromValue(attrValue);
        }
        if (Expr_1.Expr.isExpr(attrValue)) {
            attrValue = attrValue.toJSON();
        }
        result[attrName] = attrValue;
    }
    return result;
}
exports.makeDecodedTechnique = makeDecodedTechnique;
//# sourceMappingURL=StyleSetEvaluator.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueAttr.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/TechniqueAttr.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.evaluateTechniqueAttr = void 0;
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const PropertyValue_1 = __webpack_require__(/*! ./PropertyValue */ "./node_modules/@here/harp-datasource-protocol/lib/PropertyValue.js");
function evaluateTechniqueAttr(context, attrValue, defaultValue) {
    if (attrValue === undefined) {
        return defaultValue;
    }
    const result = Expr_1.Env.isEnv(context)
        ? PropertyValue_1.getPropertyValue(attrValue, context)
        : PropertyValue_1.getPropertyValue(attrValue, context.env, context.cachedExprResults);
    return result !== null && result !== void 0 ? result : defaultValue;
}
exports.evaluateTechniqueAttr = evaluateTechniqueAttr;
//# sourceMappingURL=TechniqueAttr.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueDescriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/TechniqueDescriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTechniqueAutomaticAttrs = exports.getTechniqueAttributeDescriptor = exports.getTechniqueDescriptor = exports.AttrScope = void 0;
var AttrScope;
(function (AttrScope) {
    /**
     * Attributes that affect generation of feature geometry and thus must be resolved at decoding
     * time.
     *
     * @remarks
     * They may have huge variancy as they are implemented as vertex attributes or embedded in
     * generated meshes.
     *
     * These attributes are available only in decoding scope.
     */
    AttrScope[AttrScope["FeatureGeometry"] = 0] = "FeatureGeometry";
    /**
     * Attributes that are common to whole group of features drawn with this technique.
     * These attributes affect generated geometry and  thus must be resolved at decoding time.
     *
     * @remarks
     * They shouldn't have big variancy and evaluate to at least dozens of values as each
     * combination of these attributes consitute new technique and material.
     *
     * These attributes are available in decoding and rendering scope.
     */
    AttrScope[AttrScope["TechniqueGeometry"] = 1] = "TechniqueGeometry";
    /**
     * Attributes that are common to whole group of features drawn with this technique.
     *
     * @remarks
     * Attributes that can be changed in resulting object/material from frame to frame. They are
     * usually implemented as uniforms.
     *
     * These attributes may be available only at rendering scope.
     */
    AttrScope[AttrScope["TechniqueRendering"] = 2] = "TechniqueRendering";
})(AttrScope = exports.AttrScope || (exports.AttrScope = {}));
/**
 * @internal
 */
function mergeTechniqueDescriptor(...descriptors) {
    const result = {
        attrDescriptors: {}
    };
    for (const descriptor of descriptors) {
        if (descriptor.attrTransparencyColor !== undefined) {
            result.attrTransparencyColor = descriptor.attrTransparencyColor;
        }
        if (descriptor.attrDescriptors !== undefined) {
            result.attrDescriptors = Object.assign(Object.assign({}, result.attrDescriptors), descriptor.attrDescriptors);
        }
    }
    return result;
}
const baseTechniqueParamsDescriptor = {
    // TODO: Choose which techniques should support color with transparency.
    // For now we chosen all, but it maybe not suitable for text or line marker techniques.
    attrTransparencyColor: "color",
    attrDescriptors: {
        constantHeight: AttrScope.FeatureGeometry,
        enabled: AttrScope.FeatureGeometry,
        fadeFar: AttrScope.TechniqueRendering,
        fadeNear: AttrScope.TechniqueRendering,
        transparent: { scope: AttrScope.TechniqueRendering, automatic: true },
        side: { scope: AttrScope.TechniqueRendering, automatic: true }
    }
};
const pointTechniquePropTypes = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, {
    attrDescriptors: {
        color: { scope: AttrScope.TechniqueRendering, automatic: true },
        size: { scope: AttrScope.TechniqueRendering, automatic: true },
        opacity: { scope: AttrScope.TechniqueRendering, automatic: true }
    }
});
const squaresTechniquePropTypes = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, pointTechniquePropTypes);
const circlesTechniquePropTypes = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, pointTechniquePropTypes);
const lineMarkerTechniquePropTypes = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, {
    attrDescriptors: {
        text: AttrScope.FeatureGeometry,
        label: AttrScope.FeatureGeometry,
        useAbbreviation: AttrScope.FeatureGeometry,
        useIsoCode: AttrScope.FeatureGeometry,
        poiName: AttrScope.FeatureGeometry,
        imageTexture: AttrScope.FeatureGeometry,
        iconColor: AttrScope.TechniqueRendering,
        iconBrightness: AttrScope.TechniqueRendering,
        backgroundColor: AttrScope.TechniqueRendering,
        backgroundSize: AttrScope.TechniqueRendering,
        backgroundOpacity: AttrScope.TechniqueRendering,
        color: AttrScope.TechniqueRendering,
        opacity: AttrScope.TechniqueRendering,
        size: AttrScope.TechniqueRendering
    }
});
const polygonalTechniqueDescriptor = {
    attrDescriptors: {
        polygonOffset: { scope: AttrScope.TechniqueRendering, automatic: true },
        polygonOffsetFactor: { scope: AttrScope.TechniqueRendering, automatic: true },
        polygonOffsetUnits: { scope: AttrScope.TechniqueRendering, automatic: true },
        depthTest: { scope: AttrScope.TechniqueRendering, automatic: true },
        transparent: { scope: AttrScope.TechniqueRendering, automatic: true },
        opacity: { scope: AttrScope.TechniqueRendering, automatic: true },
        color: { scope: AttrScope.TechniqueRendering, automatic: true },
        lineColor: AttrScope.TechniqueRendering,
        lineFadeFar: AttrScope.TechniqueRendering,
        lineFadeNear: AttrScope.TechniqueRendering
    }
};
const solidLineTechniqueDescriptor = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, polygonalTechniqueDescriptor, {
    attrDescriptors: {
        lineWidth: AttrScope.TechniqueRendering,
        secondaryWidth: AttrScope.TechniqueRendering,
        secondaryColor: AttrScope.TechniqueRendering,
        dashSize: AttrScope.TechniqueRendering,
        gapSize: AttrScope.TechniqueRendering,
        outlineColor: { scope: AttrScope.TechniqueRendering, automatic: true },
        caps: { scope: AttrScope.TechniqueRendering, automatic: true },
        drawRangeStart: { scope: AttrScope.TechniqueRendering, automatic: true },
        drawRangeEnd: { scope: AttrScope.TechniqueRendering, automatic: true },
        dashes: { scope: AttrScope.TechniqueRendering, automatic: true },
        dashColor: { scope: AttrScope.TechniqueRendering, automatic: true }
    }
});
const lineTechniqueDescriptor = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, {
    attrDescriptors: {
        // TODO, check, which are really dynamic !
        color: { scope: AttrScope.TechniqueRendering, automatic: true },
        opacity: { scope: AttrScope.TechniqueRendering, automatic: true },
        lineWidth: AttrScope.FeatureGeometry
    }
});
const fillTechniqueDescriptor = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, polygonalTechniqueDescriptor, {
    attrDescriptors: {
        wireframe: { scope: AttrScope.TechniqueRendering, automatic: true },
        color: { scope: AttrScope.TechniqueRendering, automatic: true },
        opacity: { scope: AttrScope.TechniqueRendering, automatic: true },
        transparent: { scope: AttrScope.TechniqueRendering, automatic: true },
        lineWidth: AttrScope.TechniqueRendering,
        map: { scope: AttrScope.TechniqueRendering, automatic: true }
    }
});
const standardTechniqueDescriptor = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, {
    attrDescriptors: {
        color: { scope: AttrScope.TechniqueRendering, automatic: true },
        vertexColors: { scope: AttrScope.TechniqueRendering, automatic: true },
        wireframe: { scope: AttrScope.TechniqueRendering, automatic: true },
        roughness: { scope: AttrScope.TechniqueRendering, automatic: true },
        metalness: { scope: AttrScope.TechniqueRendering, automatic: true },
        alphaTest: { scope: AttrScope.TechniqueRendering, automatic: true },
        depthTest: { scope: AttrScope.TechniqueRendering, automatic: true },
        transparent: { scope: AttrScope.TechniqueRendering, automatic: true },
        opacity: { scope: AttrScope.TechniqueRendering, automatic: true },
        emissive: { scope: AttrScope.TechniqueRendering, automatic: true },
        emissiveIntensity: { scope: AttrScope.TechniqueRendering, automatic: true },
        refractionRatio: { scope: AttrScope.TechniqueRendering, automatic: true },
        normalMapType: { scope: AttrScope.TechniqueRendering, automatic: true },
        map: { scope: AttrScope.TechniqueRendering, automatic: true },
        normalMap: { scope: AttrScope.TechniqueRendering, automatic: true },
        displacementMap: { scope: AttrScope.TechniqueRendering, automatic: true },
        roughnessMap: { scope: AttrScope.TechniqueRendering, automatic: true },
        emissiveMap: { scope: AttrScope.TechniqueRendering, automatic: true },
        bumpMap: { scope: AttrScope.TechniqueRendering, automatic: true },
        metalnessMap: { scope: AttrScope.TechniqueRendering, automatic: true },
        alphaMap: { scope: AttrScope.TechniqueRendering, automatic: true }
    }
});
const extrudedPolygonTechniqueDescriptor = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, standardTechniqueDescriptor, {
    attrDescriptors: {
        height: AttrScope.FeatureGeometry,
        floorHeight: AttrScope.FeatureGeometry,
        color: AttrScope.FeatureGeometry,
        defaultColor: AttrScope.FeatureGeometry,
        defaultHeight: AttrScope.FeatureGeometry,
        boundaryWalls: AttrScope.FeatureGeometry,
        footprint: AttrScope.FeatureGeometry,
        maxSlope: AttrScope.FeatureGeometry,
        animateExtrusion: AttrScope.TechniqueRendering,
        lineWidth: AttrScope.TechniqueRendering,
        lineFadeNear: AttrScope.TechniqueRendering,
        lineFadeFar: AttrScope.TechniqueRendering,
        lineColor: AttrScope.TechniqueRendering
    }
});
const textTechniqueDescriptor = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, {
    attrDescriptors: {
        text: AttrScope.FeatureGeometry,
        label: AttrScope.FeatureGeometry,
        useAbbreviation: AttrScope.FeatureGeometry,
        useIsoCode: AttrScope.FeatureGeometry,
        backgroundColor: AttrScope.TechniqueRendering,
        backgroundSize: AttrScope.TechniqueRendering,
        backgroundOpacity: AttrScope.TechniqueRendering,
        color: AttrScope.TechniqueRendering,
        opacity: AttrScope.TechniqueRendering,
        priority: AttrScope.TechniqueRendering,
        size: AttrScope.TechniqueRendering
    }
});
const shaderTechniqueDescriptor = mergeTechniqueDescriptor(baseTechniqueParamsDescriptor, {
    attrDescriptors: {
        params: AttrScope.TechniqueRendering
    }
});
const techniqueDescriptors = {
    "extruded-polygon": extrudedPolygonTechniqueDescriptor,
    "line-marker": lineMarkerTechniquePropTypes,
    "labeled-icon": lineMarkerTechniquePropTypes,
    "solid-line": solidLineTechniqueDescriptor,
    "dashed-line": solidLineTechniqueDescriptor,
    terrain: standardTechniqueDescriptor,
    standard: standardTechniqueDescriptor,
    squares: squaresTechniquePropTypes,
    circles: circlesTechniquePropTypes,
    line: lineTechniqueDescriptor,
    segments: lineTechniqueDescriptor,
    fill: fillTechniqueDescriptor,
    text: textTechniqueDescriptor,
    shader: shaderTechniqueDescriptor
};
function getTechniqueDescriptor(technique) {
    if (typeof technique !== "string") {
        technique = technique.name;
    }
    return techniqueDescriptors[technique];
}
exports.getTechniqueDescriptor = getTechniqueDescriptor;
function getTechniqueAttributeDescriptor(technique, attrName) {
    const techniqueDescriptor = getTechniqueDescriptor(technique);
    const attrDescriptors = techniqueDescriptor === null || techniqueDescriptor === void 0 ? void 0 : techniqueDescriptor.attrDescriptors;
    const descriptor = attrDescriptors === null || attrDescriptors === void 0 ? void 0 : attrDescriptors[attrName];
    if (typeof descriptor === undefined) {
        return undefined;
    }
    else if (typeof descriptor === "object") {
        return descriptor;
    }
    return { scope: descriptor };
}
exports.getTechniqueAttributeDescriptor = getTechniqueAttributeDescriptor;
const automaticAttributeCache = new Map();
function getTechniqueAutomaticAttrs(technique) {
    var _a;
    if (typeof technique !== "string") {
        technique = technique.name;
    }
    if (automaticAttributeCache.has(technique)) {
        return automaticAttributeCache.get(technique);
    }
    const descriptors = [];
    const attrDescriptors = (_a = getTechniqueDescriptor(technique)) === null || _a === void 0 ? void 0 : _a.attrDescriptors;
    if (attrDescriptors === undefined) {
        return descriptors;
    }
    for (const attrName in attrDescriptors) {
        if (!attrDescriptors.hasOwnProperty(attrName)) {
            continue;
        }
        const descr = attrDescriptors[attrName];
        if (descr === undefined || typeof descr === "number") {
            continue;
        }
        if (descr.automatic === true) {
            descriptors.push(attrName);
        }
    }
    automaticAttributeCache.set(technique, descriptors);
    return descriptors;
}
exports.getTechniqueAutomaticAttrs = getTechniqueAutomaticAttrs;
//# sourceMappingURL=TechniqueDescriptors.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/TechniqueParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isTextureBuffer = exports.PlacementToken = exports.transientToPickability = exports.Pickability = exports.PoiStackMode = exports.TextureCoordinateType = exports.GeometryKindSet = exports.GeometryKind = exports.StandardGeometryKind = void 0;
/**
 * Standard kinds of geometry.
 * @deprecated See {@link BaseTechniqueParams.kind}.
 */
var StandardGeometryKind;
(function (StandardGeometryKind) {
    /**
     * Used in the enabledKinds/disabledKinds filter to match any kind.
     */
    StandardGeometryKind["All"] = "_all_";
    /**
     * Background geometry.
     */
    StandardGeometryKind["Background"] = "background";
    /**
     * Terrain geometry.
     */
    StandardGeometryKind["Terrain"] = "terrain";
    /**
     * Default value for the FillTechnique.
     */
    StandardGeometryKind["Area"] = "area";
    /**
     * Default value for all line techniques.
     */
    StandardGeometryKind["Line"] = "line";
    /**
     * Default value for the FillTechnique.
     */
    StandardGeometryKind["Water"] = "water";
    /**
     * Political borders.
     */
    StandardGeometryKind["Border"] = "border";
    /**
     * Basis for all roads.
     */
    StandardGeometryKind["Road"] = "road";
    /**
     * Default value for the ExtrudedPolygonTechnique.
     */
    StandardGeometryKind["Building"] = "building";
    /**
     * Default value for the TextTechnique, LineMarkerTechnique and the PoiTechnique.
     */
    StandardGeometryKind["Label"] = "label";
    /**
     * Anything that may show up last.
     */
    StandardGeometryKind["Detail"] = "detail";
})(StandardGeometryKind = exports.StandardGeometryKind || (exports.StandardGeometryKind = {}));
// See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md#ignoredeclarationmerge
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.GeometryKind = StandardGeometryKind;
/**
 * A set of {@link GeometryKind}s.
 */
class GeometryKindSet extends Set {
    /**
     * Return `true` if the Set is a superset of the set 'subset'.
     */
    isSuperset(subset) {
        for (const elem of subset) {
            if (!this.has(elem)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Return `true` if the Set intersects Set 'set'.
     */
    hasIntersection(set) {
        for (const elem of set) {
            if (this.has(elem)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Return `true` if the Set either intersects Set 'set' (if set is a Set), of has element 'set'
     * if set is not a Set.
     */
    hasOrIntersects(set) {
        if (set instanceof Set) {
            return this.hasIntersection(set);
        }
        return this.has(set);
    }
    /**
     * Return `true` if this set and the array of elements share at least a single element.
     */
    hasOrIntersectsArray(subset) {
        for (const elem of subset) {
            if (this.has(elem)) {
                return true;
            }
        }
        return false;
    }
}
exports.GeometryKindSet = GeometryKindSet;
var TextureCoordinateType;
(function (TextureCoordinateType) {
    /**
     * Texture coordinates are in tile space.
     *
     * @remarks
     * SW of the tile will have (0,0) and NE will have (1,1).
     */
    TextureCoordinateType["TileSpace"] = "tile-space";
    /**
     * Texture coordinates are in equirectangular space.
     *
     * @remarks
     * (u, v) = ( (longitude+180) / 360, (latitude+90) / 180).
     */
    TextureCoordinateType["EquirectangularSpace"] = "equirectangular-space";
    /**
     * Texture coordinates in feature space.
     *
     * @remarks
     * To compute texture coordinates in feature space,
     * the feature must have a property named `bbox` with value
     * the tuple `[west, south, east, north]`.
     */
    TextureCoordinateType["FeatureSpace"] = "feature-space";
})(TextureCoordinateType = exports.TextureCoordinateType || (exports.TextureCoordinateType = {}));
/**
 * Define the stacking option. Enum values for theme file are in "kebab-case".
 */
var PoiStackMode;
(function (PoiStackMode) {
    /**
     * Show in a stack.
     */
    PoiStackMode["Show"] = "show-in-stack";
    /**
     * Do not show in a stack.
     */
    PoiStackMode["Hide"] = "hide-in-stack";
    /**
     * Show category parent in the stack.
     */
    PoiStackMode["ShowParent"] = "show-parent";
})(PoiStackMode = exports.PoiStackMode || (exports.PoiStackMode = {}));
/**
 * Define the pickability of an object.
 */
var Pickability;
(function (Pickability) {
    /**
     * Pickable if visible.
     */
    Pickability["onlyVisible"] = "only-visible";
    /**
     * Not Pickable at all.
     */
    Pickability["transient"] = "transient";
    /**
     * All objects of this type pickable.
     */
    Pickability["all"] = "all";
})(Pickability = exports.Pickability || (exports.Pickability = {}));
/**
 * Converts backwards compatible transient property to pure {@type Pickabilty} object
 *
 * @param transient The transient property from the style
 */
function transientToPickability(transient) {
    let pickability = Pickability.onlyVisible;
    if (transient !== undefined && transient !== null) {
        pickability =
            typeof transient === "string"
                ? transient
                : transient === true
                    ? Pickability.transient
                    : Pickability.onlyVisible;
    }
    return pickability;
}
exports.transientToPickability = transientToPickability;
/**
 * Defines options (tokens) supported for text placements defined via [[placements]] attribute.
 *
 * @remarks
 * Possible values are defined as vertical placement letter and horizontal letter, where
 * one of the axis may be ignored and then assumed centered. Moving clock-wise, we have:
 * `TL` (top-left), `T` (top-center), `TR` (top-right), `R` (center-right), `BR` (bottom-right),
 * `B` (bottom-center), `BL` (bottom-left), `L` (left), `C` (center-center).
 * Alternatively instead of `T`, `B`, `L`, `R` geographic directions may be used accordingly:
 * `NW` (north-west), `N` (north), `NE` (north-east), `E` (east), `SE` (south-east), `S` (south),
 * `SW` (south-west), `W` (west).
 */
var PlacementToken;
(function (PlacementToken) {
    PlacementToken["TopLeft"] = "TL";
    PlacementToken["Top"] = "T";
    PlacementToken["TopRight"] = "TR";
    PlacementToken["Right"] = "R";
    PlacementToken["BottomRight"] = "BR";
    PlacementToken["Bottom"] = "B";
    PlacementToken["BottomLeft"] = "BL";
    PlacementToken["Left"] = "L";
    PlacementToken["Center"] = "C";
    PlacementToken["NorthWest"] = "NW";
    PlacementToken["North"] = "N";
    PlacementToken["NorthEast"] = "NE";
    PlacementToken["East"] = "E";
    PlacementToken["SouthEast"] = "SE";
    PlacementToken["South"] = "S";
    PlacementToken["SouthWest"] = "SW";
    PlacementToken["West"] = "W";
})(PlacementToken = exports.PlacementToken || (exports.PlacementToken = {}));
/**
 * Type guard to check if an object is an instance of `TextureBuffer`.
 */
function isTextureBuffer(object) {
    return object && object.buffer && typeof object.type === "string";
}
exports.isTextureBuffer = isTextureBuffer;
//# sourceMappingURL=TechniqueParams.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Techniques.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Techniques.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setTechniqueRenderOrderOrPriority = exports.composeTechniqueTextureName = exports.addBuffersToTransferList = exports.textureCoordinateType = exports.supportsTextures = exports.needsVertexNormals = exports.isLabelRejectionLineTechnique = exports.isShaderTechnique = exports.isTextTechnique = exports.isTerrainTechnique = exports.isStandardTechnique = exports.isExtrudedPolygonTechnique = exports.isFillTechnique = exports.isStandardExtrudedLineTechnique = exports.isBasicExtrudedLineTechnique = exports.isExtrudedLineTechnique = exports.isSegmentsTechnique = exports.isSpecialDashesLineTechnique = exports.isSolidLineTechnique = exports.isLineTechnique = exports.isLineMarkerTechnique = exports.isPoiTechnique = exports.isSquaresTechnique = exports.isCirclesTechnique = exports.TRANSPARENCY_PROPERTY_KEYS = exports.TEXTURE_PROPERTY_KEYS = void 0;
const TechniqueParams_1 = __webpack_require__(/*! ./TechniqueParams */ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueParams.js");
/**
 * Names of the supported texture properties.
 * @internal
 */
exports.TEXTURE_PROPERTY_KEYS = [
    "map",
    "normalMap",
    "displacementMap",
    "roughnessMap",
    "emissiveMap",
    "alphaMap",
    "metalnessMap",
    "bumpMap"
];
/**
 * Names of the properties controlling transparency.
 * @internal
 */
exports.TRANSPARENCY_PROPERTY_KEYS = ["opacity", "transparent"];
/**
 * Type guard to check if an object is an instance of `CirclesTechnique`.
 */
function isCirclesTechnique(technique) {
    return technique.name === "circles";
}
exports.isCirclesTechnique = isCirclesTechnique;
/**
 * Type guard to check if an object is an instance of `SquaresTechnique`.
 */
function isSquaresTechnique(technique) {
    return technique.name === "squares";
}
exports.isSquaresTechnique = isSquaresTechnique;
/**
 * Type guard to check if an object is an instance of `PoiTechnique`.
 */
function isPoiTechnique(technique) {
    return technique.name === "labeled-icon";
}
exports.isPoiTechnique = isPoiTechnique;
/**
 * Type guard to check if an object is an instance of `LineMarkerTechnique`.
 */
function isLineMarkerTechnique(technique) {
    return technique.name === "line-marker";
}
exports.isLineMarkerTechnique = isLineMarkerTechnique;
/**
 * Type guard to check if an object is an instance of `LineTechnique`.
 */
function isLineTechnique(technique) {
    return technique.name === "line";
}
exports.isLineTechnique = isLineTechnique;
/**
 * Type guard to check if an object is an instance of `SolidLineTechnique`.
 */
function isSolidLineTechnique(technique) {
    return technique.name === "solid-line" || technique.name === "dashed-line";
}
exports.isSolidLineTechnique = isSolidLineTechnique;
/**
 * Type guard to check if an object is an instance of `SolidLineTechnique` and is a kind that
 * has special dashes.
 * @note Lines with special dashes need line caps to render properly.
 */
function isSpecialDashesLineTechnique(technique) {
    return ((technique.name === "solid-line" || technique.name === "dashed-line") &&
        technique.dashes !== undefined &&
        technique.dashes !== "Square");
}
exports.isSpecialDashesLineTechnique = isSpecialDashesLineTechnique;
/**
 * Type guard to check if an object is an instance of `SegmentsTechnique`.
 */
function isSegmentsTechnique(technique) {
    return technique.name === "segments";
}
exports.isSegmentsTechnique = isSegmentsTechnique;
/**
 * Type guard to check if an object is an instance of `BasicExtrudedLineTechnique`
 * or `StandardExtrudedLineTechnique`.
 */
function isExtrudedLineTechnique(technique) {
    return technique.name === "extruded-line";
}
exports.isExtrudedLineTechnique = isExtrudedLineTechnique;
/**
 * Type guard to check if an object is an instance of `BasicExtrudedLineTechnique`.
 */
function isBasicExtrudedLineTechnique(technique) {
    return isExtrudedLineTechnique(technique) && technique.shading === "basic";
}
exports.isBasicExtrudedLineTechnique = isBasicExtrudedLineTechnique;
/**
 * Type guard to check if an object is an instance of `StandardExtrudedLineTechnique`.
 */
function isStandardExtrudedLineTechnique(technique) {
    return isExtrudedLineTechnique(technique) && technique.shading === "standard";
}
exports.isStandardExtrudedLineTechnique = isStandardExtrudedLineTechnique;
/**
 * Type guard to check if an object is an instance of `FillTechnique`.
 */
function isFillTechnique(technique) {
    return technique.name === "fill";
}
exports.isFillTechnique = isFillTechnique;
/**
 * Type guard to check if an object is an instance of `ExtrudedPolygonTechnique`.
 */
function isExtrudedPolygonTechnique(technique) {
    return technique.name === "extruded-polygon";
}
exports.isExtrudedPolygonTechnique = isExtrudedPolygonTechnique;
/**
 * Type guard to check if an object is an instance of `StandardTechnique`.
 */
function isStandardTechnique(technique) {
    return technique.name === "standard";
}
exports.isStandardTechnique = isStandardTechnique;
/**
 * Type guard to check if an object is an instance of `TerrainTechnique`.
 */
function isTerrainTechnique(technique) {
    return technique.name === "terrain";
}
exports.isTerrainTechnique = isTerrainTechnique;
/**
 * Type guard to check if an object is an instance of `TextTechnique`.
 */
function isTextTechnique(technique) {
    return technique.name === "text";
}
exports.isTextTechnique = isTextTechnique;
/**
 * Type guard to check if an object is an instance of `ShaderTechnique`.
 */
function isShaderTechnique(technique) {
    return technique.name === "shader";
}
exports.isShaderTechnique = isShaderTechnique;
function isLabelRejectionLineTechnique(technique) {
    return technique.name === "label-rejection-line";
}
exports.isLabelRejectionLineTechnique = isLabelRejectionLineTechnique;
/**
 * Check if vertex normals should be generated for this technique (if no normals are in the data).
 * @param technique - Technique to check.
 */
function needsVertexNormals(technique) {
    return (isExtrudedPolygonTechnique(technique) ||
        isFillTechnique(technique) ||
        isStandardTechnique(technique) ||
        isTerrainTechnique(technique) ||
        isStandardExtrudedLineTechnique(technique));
}
exports.needsVertexNormals = needsVertexNormals;
/**
 * Type guard to check if an object is an instance of a technique with textures.
 */
function supportsTextures(technique) {
    return (isFillTechnique(technique) ||
        isStandardTechnique(technique) ||
        isExtrudedPolygonTechnique(technique) ||
        isTerrainTechnique(technique));
}
exports.supportsTextures = supportsTextures;
/**
 * Get the texture coordinate type if the technique supports it.
 */
function textureCoordinateType(technique) {
    return supportsTextures(technique) || isShaderTechnique(technique)
        ? technique.textureCoordinateType
        : undefined;
}
exports.textureCoordinateType = textureCoordinateType;
/**
 * Add all the buffers of the technique to the transfer list.
 */
function addBuffersToTransferList(technique, transferList) {
    if (isStandardTechnique(technique) ||
        isExtrudedPolygonTechnique(technique) ||
        isTerrainTechnique(technique)) {
        for (const texturePropertyKey of exports.TEXTURE_PROPERTY_KEYS) {
            const textureProperty = technique[texturePropertyKey];
            if (TechniqueParams_1.isTextureBuffer(textureProperty)) {
                if (textureProperty.buffer instanceof ArrayBuffer) {
                    transferList.push(textureProperty.buffer);
                }
            }
        }
    }
}
exports.addBuffersToTransferList = addBuffersToTransferList;
/**
 * Compose full texture name for given image name with technique specified.
 * Some techniques allows to add prefix/postfix to icons names specified, this
 * function uses technique information to create fully qualified texture name.
 * @param imageName - base name of the marker icon.
 * @param technique - the technique describing POI or line marker.
 * @returns fully qualified texture name for loading from atlas (without extension).
 */
function composeTechniqueTextureName(imageName, technique) {
    let textureName = imageName;
    if (typeof technique.imageTexturePrefix === "string") {
        textureName = technique.imageTexturePrefix + textureName;
    }
    if (typeof technique.imageTexturePostfix === "string") {
        textureName = textureName + technique.imageTexturePostfix;
    }
    return textureName;
}
exports.composeTechniqueTextureName = composeTechniqueTextureName;
/**
 * Sets a technique's render order (or priority for screen-space techniques) depending on its
 * category and the priorities specified in a given theme.
 * @param technique- The technique whose render order or priority will be set.
 * @param theme - The theme from which the category priorities will be taken.
 */
function setTechniqueRenderOrderOrPriority(technique, priorities, labelPriorities) {
    if (isTextTechnique(technique) ||
        isPoiTechnique(technique) ||
        isLineMarkerTechnique(technique)) {
        // for screen-space techniques the `category` is used to assign
        // priorities.
        if (labelPriorities && typeof technique._category === "string") {
            // override the `priority` when the technique uses `category`.
            const priority = labelPriorities.indexOf(technique._category);
            if (priority !== -1) {
                technique.priority = labelPriorities.length - priority;
            }
        }
    }
    else if (priorities && technique._styleSet !== undefined) {
        // Compute the render order based on the style category and styleSet.
        const computeRenderOrder = (category) => {
            const priority = priorities === null || priorities === void 0 ? void 0 : priorities.findIndex(entry => entry.group === technique._styleSet && entry.category === category);
            return priority !== undefined && priority !== -1 ? (priority + 1) * 10 : undefined;
        };
        if (typeof technique._category === "string") {
            // override the renderOrder when the technique is using categories.
            const renderOrder = computeRenderOrder(technique._category);
            if (renderOrder !== undefined) {
                technique.renderOrder = renderOrder;
            }
        }
        if (typeof technique._secondaryCategory === "string") {
            // override the secondaryRenderOrder when the technique is using categories.
            const secondaryRenderOrder = computeRenderOrder(technique._secondaryCategory);
            if (secondaryRenderOrder !== undefined) {
                technique.secondaryRenderOrder = secondaryRenderOrder;
            }
        }
    }
}
exports.setTechniqueRenderOrderOrPriority = setTechniqueRenderOrderOrPriority;
//# sourceMappingURL=Techniques.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Theme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Theme.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isJsonExprReference = exports.getDefinitionValue = exports.isVerboseDefinition = void 0;
/**
 * This is to distinguish between definition types at runtime, to be deprecated with
 * {@link VerboseDefinition}
 * @deprecated
 *
 * @param definition
 * @returns `true` if the Definition is of the deprecated {@link VerboseDefinition} type
 */
function isVerboseDefinition(definition) {
    var _a;
    return ((_a = definition) === null || _a === void 0 ? void 0 : _a.value) !== undefined;
}
exports.isVerboseDefinition = isVerboseDefinition;
/**
 * This is a utility function to retrive a definitions value until {@link VerboseDefinition} is fully
 * deprecated
 * @deprecated
 *
 * @param definition
 * @returns value of the given definition.
 */
function getDefinitionValue(definition) {
    return isVerboseDefinition(definition)
        ? definition.value
        : definition;
}
exports.getDefinitionValue = getDefinitionValue;
/**
 * Checks if the given value is a reference to a definition.
 *
 * @param value - The value of a technique property.
 */
function isJsonExprReference(value) {
    return (Array.isArray(value) &&
        value.length === 2 &&
        value[0] === "ref" &&
        typeof value[1] === "string");
}
exports.isJsonExprReference = isJsonExprReference;
//# sourceMappingURL=Theme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ThemeVisitor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ThemeVisitor.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemeVisitor = void 0;
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
/**
 * The ThemeVisitor visits every style in the theme in a depth-first fashion.
 */
class ThemeVisitor {
    constructor(theme) {
        this.theme = theme;
    }
    /**
     * Applies a function to every style in the theme.
     *
     * @param visitFunc - Function to be called with `style` as an argument. Function should return
     *                  `true` to cancel visitation.
     * @returns `true` if function has finished prematurely.
     */
    visitStyles(visitFunc) {
        const visit = (style) => {
            if (Expr_1.isJsonExpr(style)) {
                return false;
            }
            if (visitFunc(style)) {
                return true;
            }
            return false;
        };
        if (this.theme.styles !== undefined) {
            for (const styleSetName in this.theme.styles) {
                if (this.theme.styles[styleSetName] !== undefined) {
                    for (const style of this.theme.styles[styleSetName]) {
                        if (visit(style)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
}
exports.ThemeVisitor = ThemeVisitor;
//# sourceMappingURL=ThemeVisitor.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ThreeBufferUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ThreeBufferUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThreeBufferUtils = void 0;
const DecodedTile_1 = __webpack_require__(/*! ./DecodedTile */ "./node_modules/@here/harp-datasource-protocol/lib/DecodedTile.js");
/**
 * Collection of helper methods to convert
 * {@link https://threejs.org/docs/index.html#api/en/core/BufferGeometry|three.js BufferGeometry}
 * to [[Geometry]] that allows creation and transfering of THREE BufferGeometry in webworkers.
 * See also [[CustomDatasourceExample]].
 */
var ThreeBufferUtils;
(function (ThreeBufferUtils) {
    function getBufferElementType(buffer) {
        if (buffer instanceof Int8Array) {
            return "int8";
        }
        else if (buffer instanceof Uint8Array) {
            return "uint8";
        }
        else if (buffer instanceof Int16Array) {
            return "int16";
        }
        else if (buffer instanceof Uint16Array) {
            return "uint16";
        }
        else if (buffer instanceof Int32Array) {
            return "int32";
        }
        else if (buffer instanceof Uint32Array) {
            return "uint32";
        }
        else if (buffer instanceof Float32Array) {
            return "float";
        }
        throw new Error(`Unsupported buffer type ${name}`);
    }
    ThreeBufferUtils.getBufferElementType = getBufferElementType;
    function fromThreeBufferAttribute(bufferAttribute) {
        const buffer = bufferAttribute.array;
        return {
            name: bufferAttribute.name,
            buffer: buffer.buffer,
            type: getBufferElementType(buffer),
            itemCount: bufferAttribute.itemSize,
            normalized: bufferAttribute.normalized
        };
    }
    ThreeBufferUtils.fromThreeBufferAttribute = fromThreeBufferAttribute;
    function fromThreeInterleavedBufferAttribute(bufferAttribute) {
        throw new Error("Not implemented yet");
    }
    ThreeBufferUtils.fromThreeInterleavedBufferAttribute = fromThreeInterleavedBufferAttribute;
    function fromThreeBufferGeometry(bufferGeometry, techniqueIndex) {
        const vertexAttributes = [];
        const attributeNames = Object.getOwnPropertyNames(bufferGeometry.attributes);
        for (const name of attributeNames) {
            const attribute = bufferGeometry.attributes[name];
            // FIXME: Also support InterleavedBufferAttribute
            const vertexAttribute = fromThreeBufferAttribute(attribute);
            vertexAttribute.name = name;
            vertexAttributes.push(vertexAttribute);
        }
        const index = bufferGeometry.index !== null
            ? fromThreeBufferAttribute(bufferGeometry.index)
            : undefined;
        let count = 0;
        if (index !== undefined) {
            count = bufferGeometry.index === null ? 0 : bufferGeometry.index.count;
        }
        else {
            // If there is no index buffer, try to deduce the count from the position attribute.
            const posAttr = bufferGeometry.attributes.position;
            if (posAttr === undefined) {
                throw new Error("Missing position attibute to deduce item count");
            }
            count = posAttr.count;
        }
        return {
            type: DecodedTile_1.GeometryType.Unspecified,
            vertexAttributes,
            index,
            groups: [{ start: 0, count, technique: techniqueIndex }]
        };
    }
    ThreeBufferUtils.fromThreeBufferGeometry = fromThreeBufferGeometry;
})(ThreeBufferUtils = exports.ThreeBufferUtils || (exports.ThreeBufferUtils = {}));
//# sourceMappingURL=ThreeBufferUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/TileInfo.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/TileInfo.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=TileInfo.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/WorkerDecoderProtocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/WorkerDecoderProtocol.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerDecoderProtocol = exports.RequestController = void 0;
/**
 * Allows to cancel and prioritize requests inside the requestQueue.
 *
 * @remarks
 * Useful to optimize the order of decoding tiles during animations and camera movements.
 *
 * `RequestController` is not extending [[AbortController]], because this is not supported in ES5.
 */
class RequestController {
    /**
     * Creates an instance of `RequestController`.
     *
     * @param {number} priority
     * @param {AbortController} abortController Optional [[AbortController]] used internally, since
     *      [[AbortController]]s should not be subclassed.
     */
    constructor(priority = 0, abortController = new AbortController()) {
        this.priority = priority;
        this.abortController = abortController;
    }
    get signal() {
        return this.abortController.signal;
    }
    /**
     * Invoking this method will set this object's AbortSignal's aborted flag and
     * signal to any observers that the associated activity is to be aborted.
     */
    abort() {
        this.abortController.abort();
    }
}
exports.RequestController = RequestController;
/**
 * Communication protocol with [[ITileDecoder]].
 */
var WorkerDecoderProtocol;
(function (WorkerDecoderProtocol) {
    /**
     * Define possible names of messages exchanged with decoder services within `WebWorker`.
     */
    let DecoderMessageName;
    (function (DecoderMessageName) {
        DecoderMessageName["Configuration"] = "configuration";
    })(DecoderMessageName = WorkerDecoderProtocol.DecoderMessageName || (WorkerDecoderProtocol.DecoderMessageName = {}));
    /**
     * Type guard to check if an object is an instance of `ConfigurationMessage`.
     */
    function isConfigurationMessage(message) {
        return (message &&
            typeof message.service === "string" &&
            typeof message.type === "string" &&
            message.type === DecoderMessageName.Configuration);
    }
    WorkerDecoderProtocol.isConfigurationMessage = isConfigurationMessage;
    /**
     * Define possible names of requests called on decoder services within `WebWorker`.
     */
    let Requests;
    (function (Requests) {
        Requests["DecodeTileRequest"] = "decode-tile-request";
        Requests["TileInfoRequest"] = "tile-info-request";
    })(Requests = WorkerDecoderProtocol.Requests || (WorkerDecoderProtocol.Requests = {}));
    /**
     * Type guard to check if an object is a decoded tile object sent to a worker.
     */
    function isDecodeTileRequest(message) {
        return (message &&
            typeof message.type === "string" &&
            message.type === Requests.DecodeTileRequest);
    }
    WorkerDecoderProtocol.isDecodeTileRequest = isDecodeTileRequest;
    /**
     * Type guard to check if an object is an info tile object sent to a worker.
     */
    function isTileInfoRequest(message) {
        return (message && typeof message.type === "string" && message.type === Requests.TileInfoRequest);
    }
    WorkerDecoderProtocol.isTileInfoRequest = isTileInfoRequest;
})(WorkerDecoderProtocol = exports.WorkerDecoderProtocol || (exports.WorkerDecoderProtocol = {}));
//# sourceMappingURL=WorkerDecoderProtocol.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/WorkerServiceProtocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/WorkerServiceProtocol.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerServiceProtocol = void 0;
/**
 * Common communication protocol for [[WorkerService]].
 */
var WorkerServiceProtocol;
(function (WorkerServiceProtocol) {
    /**
     * Service id of worker manager ([[WorkerServiceManager]]) used to create/destroy service
     * instances in workers.
     */
    WorkerServiceProtocol.WORKER_SERVICE_MANAGER_SERVICE_ID = "worker-service-manager";
    /**
     * Define possible names of messages exchanged with services within `WebWorker`.
     */
    let ServiceMessageName;
    (function (ServiceMessageName) {
        ServiceMessageName["Initialized"] = "initialized";
        ServiceMessageName["Request"] = "request";
        ServiceMessageName["Response"] = "response";
    })(ServiceMessageName = WorkerServiceProtocol.ServiceMessageName || (WorkerServiceProtocol.ServiceMessageName = {}));
    /**
     * Type guard to check if an object is a signal message from worker.
     */
    function isInitializedMessage(message) {
        return (message &&
            typeof message.service === "string" &&
            typeof message.type === "string" &&
            message.type === ServiceMessageName.Initialized);
    }
    WorkerServiceProtocol.isInitializedMessage = isInitializedMessage;
    /**
     * Define possible names of requests called on services within `WebWorker`.
     */
    let Requests;
    (function (Requests) {
        Requests["CreateService"] = "create-service";
        Requests["DestroyService"] = "destroy-service";
    })(Requests = WorkerServiceProtocol.Requests || (WorkerServiceProtocol.Requests = {}));
    /**
     * Test if `error` thrown by [[CreateServiceRequest]] was caused by unknown type of service.
     */
    function isUnknownServiceError(error) {
        return error.message.includes("unknown targetServiceType requested: ");
    }
    WorkerServiceProtocol.isUnknownServiceError = isUnknownServiceError;
    /**
     * Type guard to check if an object is a request message sent to a worker.
     */
    function isRequestMessage(message) {
        return (message &&
            typeof message.service === "string" &&
            typeof message.type === "string" &&
            message.type === ServiceMessageName.Request);
    }
    WorkerServiceProtocol.isRequestMessage = isRequestMessage;
    /**
     * Type guard to check if an object is a request message sent to a worker.
     */
    function isResponseMessage(message) {
        return (message &&
            typeof message.service === "string" &&
            typeof message.type === "string" &&
            message.type === ServiceMessageName.Response);
    }
    WorkerServiceProtocol.isResponseMessage = isResponseMessage;
})(WorkerServiceProtocol = exports.WorkerServiceProtocol || (exports.WorkerServiceProtocol = {}));
//# sourceMappingURL=WorkerServiceProtocol.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/WorkerTilerProtocol.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/WorkerTilerProtocol.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerTilerProtocol = void 0;
/**
 * Communication protocol with {@link ITiler}.
 */
var WorkerTilerProtocol;
(function (WorkerTilerProtocol) {
    /**
     * Define possible names of requests called on tiler services within `WebWorker`.
     */
    let Requests;
    (function (Requests) {
        Requests["RegisterIndex"] = "register-index";
        Requests["UpdateIndex"] = "update-index";
        Requests["TileRequest"] = "tile-request";
    })(Requests = WorkerTilerProtocol.Requests || (WorkerTilerProtocol.Requests = {}));
    /**
     * Type guard to check if an object is an index registration request sent to a worker.
     */
    function isRegisterIndexRequest(message) {
        return (message && typeof message.type === "string" && message.type === Requests.RegisterIndex);
    }
    WorkerTilerProtocol.isRegisterIndexRequest = isRegisterIndexRequest;
    /**
     * Type guard to check if an object is an update request for the index registration.
     */
    function isUpdateIndexRequest(message) {
        return message && typeof message.type === "string" && message.type === Requests.UpdateIndex;
    }
    WorkerTilerProtocol.isUpdateIndexRequest = isUpdateIndexRequest;
    /**
     * Type guard to check if an object is a tile request sent to a worker.
     */
    function isTileRequest(message) {
        return message && typeof message.type === "string" && message.type === Requests.TileRequest;
    }
    WorkerTilerProtocol.isTileRequest = isTileRequest;
})(WorkerTilerProtocol = exports.WorkerTilerProtocol || (exports.WorkerTilerProtocol = {}));
//# sourceMappingURL=WorkerTilerProtocol.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/ArrayOperators.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/ArrayOperators.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayOperators = void 0;
const Expr_1 = __webpack_require__(/*! ../Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const VALID_ELEMENT_TYPES = ["boolean", "number", "string"];
function checkElementTypes(arg, array) {
    if (!(arg instanceof Expr_1.StringLiteralExpr) || !VALID_ELEMENT_TYPES.includes(arg.value)) {
        throw new Error(`expected "boolean", "number" or "string" instead of '${JSON.stringify(arg)}'`);
    }
    const ty = arg.value;
    array.forEach((element, index) => {
        if (typeof element !== ty) {
            throw new Error(`expected array element at index ${index} to have type '${ty}'`);
        }
    });
}
function checkArrayLength(arg, array) {
    if (!(arg instanceof Expr_1.NumberLiteralExpr)) {
        throw new Error(`missing expected number of elements`);
    }
    const length = arg.value;
    if (array.length !== length) {
        throw new Error(`the array must have ${length} element(s)`);
    }
}
function checkArray(context, arg) {
    const value = context.evaluate(arg);
    if (!Array.isArray(value)) {
        throw new Error(`'${value}' is not an array`);
    }
    return value;
}
const operators = {
    array: {
        call: (context, call) => {
            switch (call.args.length) {
                case 0:
                    throw new Error("not enough arguments");
                case 1:
                    return checkArray(context, call.args[0]);
                case 2: {
                    const array = checkArray(context, call.args[1]);
                    checkElementTypes(call.args[0], array);
                    return array;
                }
                case 3: {
                    const array = checkArray(context, call.args[2]);
                    checkArrayLength(call.args[1], array);
                    checkElementTypes(call.args[0], array);
                    return array;
                }
                default:
                    throw new Error("too many arguments");
            }
        }
    },
    "make-array": {
        call: (context, call) => {
            if (call.args.length === 0) {
                throw new Error("not enough arguments");
            }
            return [...call.args.map(arg => context.evaluate(arg))];
        }
    },
    at: {
        call: (context, call) => {
            const args = call.args;
            const index = context.evaluate(args[0]);
            if (typeof index !== "number") {
                throw new Error(`expected the index of the element to retrieve`);
            }
            const value = context.evaluate(args[1]);
            if (!Array.isArray(value)) {
                throw new Error(`expected an array`);
            }
            return index >= 0 && index < value.length ? value[index] : null;
        }
    },
    slice: {
        call: (context, call) => {
            if (call.args.length < 2) {
                throw new Error("not enough arguments");
            }
            const input = context.evaluate(call.args[0]);
            if (!(typeof input === "string" || Array.isArray(input))) {
                throw new Error("input must be a string or an array");
            }
            const start = context.evaluate(call.args[1]);
            if (typeof start !== "number") {
                throw new Error("expected an index");
            }
            let end;
            if (call.args.length > 2) {
                end = context.evaluate(call.args[2]);
                if (typeof end !== "number") {
                    throw new Error("expected an index");
                }
            }
            return input.slice(start, end);
        }
    }
};
exports.ArrayOperators = operators;
//# sourceMappingURL=ArrayOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/CastOperators.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/CastOperators.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CastOperators = void 0;
const operators = {
    "to-boolean": {
        call: (context, call) => {
            return Boolean(context.evaluate(call.args[0]));
        }
    },
    "to-string": {
        call: (context, call) => {
            return String(context.evaluate(call.args[0]));
        }
    },
    "to-number": {
        call: (context, call) => {
            for (const arg of call.args) {
                const value = Number(context.evaluate(arg));
                if (!isNaN(value)) {
                    return value;
                }
            }
            throw new Error("cannot convert the value to a number");
        }
    }
};
exports.CastOperators = operators;
//# sourceMappingURL=CastOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/ColorOperators.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/ColorOperators.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorOperators = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const ColorUtils_1 = __webpack_require__(/*! ../ColorUtils */ "./node_modules/@here/harp-datasource-protocol/lib/ColorUtils.js");
const StringEncodedNumeral_1 = __webpack_require__(/*! ../StringEncodedNumeral */ "./node_modules/@here/harp-datasource-protocol/lib/StringEncodedNumeral.js");
const operators = {
    alpha: {
        call: (context, call) => {
            let color = context.evaluate(call.args[0]);
            if (typeof color === "string") {
                color = StringEncodedNumeral_1.parseStringEncodedColor(color);
            }
            const alpha = typeof color === "number" ? ColorUtils_1.ColorUtils.getAlphaFromHex(color) : 1;
            return alpha;
        }
    },
    rgba: {
        call: (context, call) => {
            const r = context.evaluate(call.args[0]);
            const g = context.evaluate(call.args[1]);
            const b = context.evaluate(call.args[2]);
            const a = context.evaluate(call.args[3]);
            if (typeof r === "number" &&
                typeof g === "number" &&
                typeof b === "number" &&
                typeof a === "number" &&
                r >= 0 &&
                g >= 0 &&
                b >= 0 &&
                a >= 0 &&
                a <= 1) {
                return rgbaToHex(r, g, b, a);
            }
            throw new Error(`unknown color 'rgba(${r},${g},${b},${a})'`);
        }
    },
    rgb: {
        call: (context, call) => {
            const r = context.evaluate(call.args[0]);
            const g = context.evaluate(call.args[1]);
            const b = context.evaluate(call.args[2]);
            if (typeof r === "number" &&
                typeof g === "number" &&
                typeof b === "number" &&
                r >= 0 &&
                g >= 0 &&
                b >= 0) {
                return rgbToHex(r, g, b);
            }
            throw new Error(`unknown color 'rgb(${r},${g},${b})'`);
        }
    },
    // Hsl operator contains angle modulated to <0, 360> range, percent of
    // saturation and lightness in <0, 100> range, i.e. hsl(360, 100, 100)
    hsl: {
        call: (context, call) => {
            const h = context.evaluate(call.args[0]);
            const s = context.evaluate(call.args[1]);
            const l = context.evaluate(call.args[2]);
            if (typeof h === "number" &&
                typeof s === "number" &&
                typeof l === "number" &&
                h >= 0 &&
                s >= 0 &&
                l >= 0) {
                return hslToHex(h, s, l);
            }
            throw new Error(`unknown color 'hsl(${h},${s}%,${l}%)'`);
        }
    }
};
function rgbaToHex(r, g, b, a) {
    // We decode rgba color channels using custom hex format with transparency.
    return ColorUtils_1.ColorUtils.getHexFromRgba(THREE.MathUtils.clamp(r, 0, 255) / 255, THREE.MathUtils.clamp(g, 0, 255) / 255, THREE.MathUtils.clamp(b, 0, 255) / 255, THREE.MathUtils.clamp(a, 0, 1));
}
function rgbToHex(r, g, b) {
    return ColorUtils_1.ColorUtils.getHexFromRgb(THREE.MathUtils.clamp(r, 0, 255) / 255, THREE.MathUtils.clamp(g, 0, 255) / 255, THREE.MathUtils.clamp(b, 0, 255) / 255);
}
function hslToHex(h, s, l) {
    return ColorUtils_1.ColorUtils.getHexFromHsl(THREE.MathUtils.euclideanModulo(h, 360) / 360, THREE.MathUtils.clamp(s, 0, 100) / 100, THREE.MathUtils.clamp(l, 0, 100) / 100);
}
exports.ColorOperators = operators;
//# sourceMappingURL=ColorOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/ComparisonOperators.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/ComparisonOperators.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComparisonOperators = void 0;
function compare(context, call, strict = false) {
    const left = context.evaluate(call.args[0]);
    const right = context.evaluate(call.args[1]);
    if (!((typeof left === "number" && typeof right === "number") ||
        (typeof left === "string" && typeof right === "string"))) {
        if (strict) {
            throw new Error(`invalid operands '${left}' and '${right}' for operator '${call.op}'`);
        }
    }
    switch (call.op) {
        case "<":
            return left < right;
        case ">":
            return left > right;
        case "<=":
            return left <= right;
        case ">=":
            return left >= right;
        default:
            throw new Error(`invalid comparison operator '${call.op}'`);
    }
}
const operators = {
    "!": {
        call: (context, call) => {
            return !context.evaluate(call.args[0]);
        }
    },
    "==": {
        call: (context, call) => {
            const left = context.evaluate(call.args[0]);
            const right = context.evaluate(call.args[1]);
            return left === right;
        }
    },
    "!=": {
        call: (context, call) => {
            const left = context.evaluate(call.args[0]);
            const right = context.evaluate(call.args[1]);
            return left !== right;
        }
    },
    "<": { call: (context, call) => compare(context, call) },
    ">": { call: (context, call) => compare(context, call) },
    "<=": { call: (context, call) => compare(context, call) },
    ">=": { call: (context, call) => compare(context, call) }
};
exports.ComparisonOperators = operators;
//# sourceMappingURL=ComparisonOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/FeatureOperators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/FeatureOperators.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureOperators = void 0;
const Env_1 = __webpack_require__(/*! ../Env */ "./node_modules/@here/harp-datasource-protocol/lib/Env.js");
const Expr_1 = __webpack_require__(/*! ../Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const operators = {
    "geometry-type": {
        call: (context, call) => {
            const geometryType = context.env.lookup("$geometryType");
            switch (geometryType) {
                case "point":
                    return "Point";
                case "line":
                    return "LineString";
                case "polygon":
                    return "Polygon";
                default:
                    return null;
            }
        }
    },
    "feature-state": {
        isDynamicOperator: () => true,
        call: (context, call) => {
            var _a, _b;
            if (context.scope !== Expr_1.ExprScope.Dynamic) {
                throw new Error("feature-state cannot be used in this context");
            }
            const property = context.evaluate(call.args[0]);
            if (typeof property !== "string") {
                throw new Error(`expected the name of the property of the feature state`);
            }
            const state = context.env.lookup("$state");
            if (Env_1.Env.isEnv(state)) {
                return (_a = state.lookup(property)) !== null && _a !== void 0 ? _a : null;
            }
            else if (state instanceof Map) {
                return (_b = state.get(property)) !== null && _b !== void 0 ? _b : null;
            }
            return null;
        }
    },
    id: {
        call: (context, call) => {
            var _a;
            return (_a = context.env.lookup("$id")) !== null && _a !== void 0 ? _a : null;
        }
    }
};
exports.FeatureOperators = operators;
//# sourceMappingURL=FeatureOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/FlowOperators.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/FlowOperators.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlowOperators = void 0;
function conditionalCast(context, type, args) {
    switch (type) {
        case "boolean":
        case "number":
        case "string":
            for (const childExpr of args) {
                const value = context.evaluate(childExpr);
                if (typeof value === type) {
                    return value;
                }
            }
            throw new Error(`expected a '${type}'`);
        default:
            throw new Error(`invalid type '${type}'`);
    } // switch
}
const operators = {
    all: {
        call: (context, call) => {
            for (const childExpr of call.args) {
                if (!context.evaluate(childExpr)) {
                    return false;
                }
            }
            return true;
        }
    },
    any: {
        call: (context, call) => {
            for (const childExpr of call.args) {
                if (context.evaluate(childExpr)) {
                    return true;
                }
            }
            return false;
        }
    },
    none: {
        call: (context, call) => {
            for (const childExpr of call.args) {
                if (context.evaluate(childExpr)) {
                    return false;
                }
            }
            return true;
        }
    },
    boolean: {
        call: (context, call) => {
            return conditionalCast(context, "boolean", call.args);
        }
    },
    number: {
        call: (context, call) => {
            return conditionalCast(context, "number", call.args);
        }
    },
    string: {
        call: (context, call) => {
            return conditionalCast(context, "string", call.args);
        }
    }
};
exports.FlowOperators = operators;
//# sourceMappingURL=FlowOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/MapOperators.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/MapOperators.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapOperators = void 0;
const Expr_1 = __webpack_require__(/*! ../Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const operators = {
    "ppi-scale": {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            const scaleFactor = call.args[1] ? context.evaluate(call.args[1]) : 1;
            return value * scaleFactor;
        }
    },
    "world-ppi-scale": {
        isDynamicOperator: () => {
            return true;
        },
        call: (context, call) => {
            const pixels = context.evaluate(call.args[0]);
            const scaleFactor = call.args[1] ? context.evaluate(call.args[1]) : 1;
            const zoom = context.env.lookup("$zoom");
            const zoomWidth = Math.pow(2, 17) / Math.pow(2, zoom);
            const v = pixels * zoomWidth * scaleFactor;
            return v;
        }
    },
    "world-discrete-ppi-scale": {
        isDynamicOperator: () => {
            return true;
        },
        call: (context, call) => {
            const pixels = context.evaluate(call.args[0]);
            const scaleFactor = call.args[1] ? context.evaluate(call.args[1]) : 1;
            const zoom = context.env.lookup("$zoom");
            const zoomWidthDiscrete = Math.pow(2, 17) / Math.pow(2, Math.floor(zoom));
            const v = pixels * zoomWidthDiscrete * scaleFactor;
            return v;
        }
    },
    ppi: {
        call: (context) => {
            const ppi = context.env.lookup("$ppi");
            if (typeof ppi === "number") {
                return ppi;
            }
            return 72;
        }
    },
    zoom: {
        isDynamicOperator: () => {
            return true;
        },
        call: (context, call) => {
            var _a;
            if (context.scope === Expr_1.ExprScope.Value) {
                return call;
            }
            return (_a = context.env.lookup("$zoom")) !== null && _a !== void 0 ? _a : null;
        }
    }
};
exports.MapOperators = operators;
//# sourceMappingURL=MapOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/MathOperators.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/MathOperators.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MathOperators = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const operators = {
    "^": {
        call: (context, call) => {
            const a = context.evaluate(call.args[0]);
            const b = context.evaluate(call.args[1]);
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error(`invalid operands '${typeof a}' and '${typeof b}' for operator '^'`);
            }
            return Math.pow(a, b);
        }
    },
    "-": {
        call: (context, call) => {
            if (call.args.length === 1) {
                const value = context.evaluate(call.args[0]);
                if (typeof value !== "number") {
                    throw new Error(`ìnvalid operand '${typeof value} for operator '-'`);
                }
                return -value;
            }
            const a = context.evaluate(call.args[0]);
            const b = context.evaluate(call.args[1]);
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error(`invalid operands '${typeof a}' and '${typeof b}' for operator '-'`);
            }
            return a - b;
        }
    },
    "/": {
        call: (context, call) => {
            const a = context.evaluate(call.args[0]);
            const b = context.evaluate(call.args[1]);
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error(`invalid operands '${typeof a}' and '${typeof b}' for operator '/'`);
            }
            return a / b;
        }
    },
    "%": {
        call: (context, call) => {
            const a = context.evaluate(call.args[0]);
            const b = context.evaluate(call.args[1]);
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error(`invalid operands '${typeof a}' and '${typeof b}' for operator '%'`);
            }
            return a % b;
        }
    },
    "+": {
        call: (context, call) => {
            return call.args.reduce((a, b) => Number(a) + Number(context.evaluate(b)), 0);
        }
    },
    "*": {
        call: (context, call) => {
            return call.args.reduce((a, b) => Number(a) * Number(context.evaluate(b)), 1);
        }
    },
    abs: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'abs'`);
            }
            return Math.abs(value);
        }
    },
    acos: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'acos'`);
            }
            return Math.acos(value);
        }
    },
    asin: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'asin'`);
            }
            return Math.asin(value);
        }
    },
    atan: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'atan'`);
            }
            return Math.atan(value);
        }
    },
    ceil: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'ceil'`);
            }
            return Math.ceil(value);
        }
    },
    cos: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'cos'`);
            }
            return Math.cos(value);
        }
    },
    e: {
        call: () => {
            return Math.E;
        }
    },
    floor: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'floor'`);
            }
            return Math.floor(value);
        }
    },
    ln: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'ln'`);
            }
            return Math.log(value);
        }
    },
    ln2: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'ln2'`);
            }
            return Math.log2(value);
        }
    },
    log10: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'log10'`);
            }
            return Math.log10(value);
        }
    },
    max: {
        call: (context, call) => {
            return Math.max(...call.args.map(v => Number(context.evaluate(v))));
        }
    },
    min: {
        call: (context, call) => {
            return Math.min(...call.args.map(v => Number(context.evaluate(v))));
        }
    },
    /**
     * Clamp numeric value to given range, inclusive.
     *
     * Synopsis:
     * ```
     * ["clamp", v: number, min: number, max: number]`
     * ```
     */
    clamp: {
        call: (context, call) => {
            const v = context.evaluate(call.args[0]);
            const min = context.evaluate(call.args[1]);
            const max = context.evaluate(call.args[2]);
            if (typeof v !== "number" || typeof min !== "number" || typeof max !== "number") {
                throw new Error(`invalid operands '${v}', ${min}, ${max} for operator 'clamp'`);
            }
            return THREE.MathUtils.clamp(v, min, max);
        }
    },
    pi: {
        call: () => {
            return Math.PI;
        }
    },
    round: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'round'`);
            }
            return Math.round(value);
        }
    },
    sin: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'sin'`);
            }
            return Math.sin(value);
        }
    },
    sqrt: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'sqrt'`);
            }
            return Math.sqrt(value);
        }
    },
    tan: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (typeof value !== "number") {
                throw new Error(`invalid operand '${value}' for operator 'tan'`);
            }
            return Math.tan(value);
        }
    }
};
exports.MathOperators = operators;
//# sourceMappingURL=MathOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/MiscOperators.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/MiscOperators.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MiscOperators = void 0;
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const Expr_1 = __webpack_require__(/*! ../Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
function joinKeyValues(keys) {
    return keys.join("&");
}
function stringifyKeyValue(key, value) {
    return key + "=" + JSON.stringify(value);
}
/**
 * Joins the strings of each given array.
 * @param combinations Array of string arrays that must be joined.
 * @returns The joined strings sorted from longest to shortest (in number of substrings).
 */
function joinCombinations(combinations) {
    // sort from longest (more specific) to shortest (more generic).
    combinations.sort((lhs, rhs) => rhs.length - lhs.length);
    const result = combinations.map((keys) => joinKeyValues(keys));
    // Add the empty combination which will match a default table entry (an entry without keys) if
    // it exists.
    result.push("");
    return result;
}
/**
 * Gets all combinations of all lengths of a list of strings.
 * @param input An array containing all strings.
 * @param index Start index of the strings in `input` that will be considered.
 * @returns An array of all combinations. The strings within each combination are in the inverse
 * order of the input array.
 */
function getAllCombinations(input, index = 0) {
    if (index >= input.length) {
        return [];
    }
    const combinations = getAllCombinations(input, index + 1);
    const initLength = combinations.length;
    for (let i = 0; i < initLength; i += 1) {
        combinations.push([...combinations[i], input[index]]);
    }
    combinations.push([input[index]]);
    return combinations;
}
/**
 * Make all combinations of all lengths with the search keys of the given lookup expression.
 * @param lookupExpr The lookup expression.
 * @param context The context to evaluate expressions.
 * @returns All combinations, sorted from longest(more specific) to shortest (more generic).
 */
function getKeyCombinations(lookupExpr, context) {
    const keys = lookupExpr.args.slice(1);
    const result = [];
    for (let i = 0; i < keys.length; i += 2) {
        const value = context.evaluate(keys[i + 1]);
        // ignore keys whose values evaluate to null.
        if (value === null) {
            continue;
        }
        const key = context.evaluate(keys[i]);
        result.push(stringifyKeyValue(key, value));
    }
    // Reverse sort, getAllCombinations reverses the order.
    result.sort().reverse();
    return joinCombinations(getAllCombinations(result));
}
/**
 * Creates a map from the lookup entries in a given array.
 * @param lookupArray The array to transform.
 * @returns The resulting map.
 */
function createLookupMap(lookupArray) {
    const map = new Map();
    for (const entry of lookupArray) {
        if (typeof entry !== "object") {
            throw new Error(`Invalid lookup table entry type (${typeof entry})`);
        }
        if (!entry.keys) {
            throw new Error(`Lookup table entry has no 'keys' property.`);
        }
        if (!entry.attributes) {
            throw new Error(`Lookup table entry has no 'attributes' property.`);
        }
        const key = joinKeyValues(Object.getOwnPropertyNames(entry.keys)
            .sort()
            .map(key => stringifyKeyValue(key, entry.keys[key])));
        map.set(key, entry.attributes);
    }
    return map;
}
/**
 * Searches matches of the given keys in a map.
 * @param keys Keys to search in the map.
 * @param map The lookup map.
 * @returns The first match (in the order in which keys are given) or null if no match found.
 */
function searchLookupMap(keys, map) {
    for (const key of keys) {
        const matchAttributes = map.get(key);
        if (matchAttributes) {
            return matchAttributes;
        }
    }
    return null;
}
const operators = {
    length: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            if (Array.isArray(value) || typeof value === "string") {
                return value.length;
            }
            throw new Error(`invalid operand '${value}' for operator 'length'`);
        }
    },
    coalesce: {
        call: (context, call) => {
            for (const childExpr of call.args) {
                const value = context.evaluate(childExpr);
                if (value !== null) {
                    return value;
                }
            }
            return null;
        }
    },
    lookup: {
        call: (context, lookup) => {
            // Argument types are checked on parsing, see LookupExpr.parseArray().
            harp_utils_1.assert(lookup.args.length > 0, "missing lookup table");
            const keyCombinations = getKeyCombinations(lookup, context);
            let table = context.evaluate(lookup.args[0]);
            harp_utils_1.assert(Array.isArray(table) || table instanceof Map, "wrong lookup table type");
            if (Array.isArray(table)) {
                // Transform the lookup table into a map to speedup lookup, since the same table
                // might be used by multiple lookup expressions.
                table = createLookupMap(table);
                const lookupMapExpr = new Expr_1.ObjectLiteralExpr(table);
                // Replace the lookup table argument with the map. Next calls to the same expression
                // (e.g. re-evaluations due to data dependencies) will use the map.
                lookup.args[0] = lookupMapExpr;
            }
            return searchLookupMap(keyCombinations, table);
        }
    }
};
exports.MiscOperators = operators;
//# sourceMappingURL=MiscOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/ObjectOperators.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/ObjectOperators.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectOperators = void 0;
const Env_1 = __webpack_require__(/*! ../Env */ "./node_modules/@here/harp-datasource-protocol/lib/Env.js");
const Expr_1 = __webpack_require__(/*! ../Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const hasOwnProperty = Object.prototype.hasOwnProperty;
var LookupMode;
(function (LookupMode) {
    LookupMode[LookupMode["get"] = 0] = "get";
    LookupMode[LookupMode["has"] = 1] = "has";
})(LookupMode || (LookupMode = {}));
function lookupMember(context, args, lookupMode) {
    var _a;
    const memberName = context.evaluate(args[0]);
    if (typeof memberName !== "string") {
        throw new Error(`expected the name of an attribute`);
    }
    const object = context.evaluate(args[1]);
    if (object && typeof object === "object") {
        if (Env_1.Env.isEnv(object)) {
            const value = (_a = object.lookup(memberName)) !== null && _a !== void 0 ? _a : null;
            return lookupMode === LookupMode.get ? value : value !== null;
        }
        if (hasOwnProperty.call(object, memberName)) {
            return lookupMode === LookupMode.get ? object[memberName] : true;
        }
    }
    return lookupMode === LookupMode.get ? null : false;
}
const operators = {
    in: {
        call: (context, call) => {
            const value = context.evaluate(call.args[0]);
            const object = context.evaluate(call.args[1]);
            if (typeof value === "string" && typeof object === "string") {
                return object.includes(value);
            }
            else if (Array.isArray(object)) {
                return object.includes(value);
            }
            return false;
        }
    },
    get: {
        call: (context, call) => lookupMember(context, call.args, LookupMode.get)
    },
    has: {
        call: (context, call) => lookupMember(context, call.args, LookupMode.has)
    },
    "dynamic-properties": {
        isDynamicOperator: () => true,
        call: (context, call) => {
            if (context.scope === Expr_1.ExprScope.Dynamic) {
                return context.env;
            }
            return call;
        }
    }
};
exports.ObjectOperators = operators;
//# sourceMappingURL=ObjectOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/StringOperators.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/StringOperators.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringOperators = void 0;
const operators = {
    concat: {
        call: (context, call) => {
            return "".concat(...call.args.map(a => String(context.evaluate(a))));
        }
    },
    downcase: {
        call: (context, call) => {
            return String(context.evaluate(call.args[0])).toLocaleLowerCase();
        }
    },
    upcase: {
        call: (context, call) => {
            return String(context.evaluate(call.args[0])).toLocaleUpperCase();
        }
    },
    "~=": {
        call: (context, call) => {
            const left = context.evaluate(call.args[0]);
            const right = context.evaluate(call.args[1]);
            if (typeof left === "string" && typeof right === "string") {
                return left.includes(right);
            }
            return false;
        }
    },
    "^=": {
        call: (context, call) => {
            const left = context.evaluate(call.args[0]);
            const right = context.evaluate(call.args[1]);
            if (typeof left === "string" && typeof right === "string") {
                return left.startsWith(right);
            }
            return false;
        }
    },
    "$=": {
        call: (context, call) => {
            const left = context.evaluate(call.args[0]);
            const right = context.evaluate(call.args[1]);
            if (typeof left === "string" && typeof right === "string") {
                return left.endsWith(right);
            }
            return false;
        }
    }
};
exports.StringOperators = operators;
//# sourceMappingURL=StringOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/TypeOperators.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/TypeOperators.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeOperators = void 0;
const operators = {
    typeof: {
        call: (context, call) => {
            return typeof context.evaluate(call.args[0]);
        }
    }
};
exports.TypeOperators = operators;
//# sourceMappingURL=TypeOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/operators/VectorOperators.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/operators/VectorOperators.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VectorOperators = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const Expr_1 = __webpack_require__(/*! ../Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
function isVector(context, call, type) {
    let ctor;
    switch (type) {
        case "vector2":
            ctor = THREE.Vector2;
            break;
        case "vector3":
            ctor = THREE.Vector3;
            break;
        case "vector4":
            ctor = THREE.Vector4;
            break;
    }
    for (const childExpr of call.args) {
        const value = context.evaluate(childExpr);
        if (value instanceof ctor) {
            return value;
        }
    }
    throw new Error(`expected a "${type}"`);
}
function toVector(context, call, type) {
    let VectorCtor;
    let components;
    switch (type) {
        case "vector2":
            VectorCtor = THREE.Vector2;
            components = 2;
            break;
        case "vector3":
            VectorCtor = THREE.Vector3;
            components = 3;
            break;
        case "vector4":
            VectorCtor = THREE.Vector4;
            components = 4;
            break;
    }
    for (const childExpr of call.args) {
        const value = context.evaluate(childExpr);
        if (value instanceof VectorCtor) {
            return value;
        }
        else if (Array.isArray(value) &&
            value.length === components &&
            value.every(v => typeof v === "number")) {
            return new VectorCtor().fromArray(value);
        }
    }
    throw new Error(`expected a "${type}"`);
}
const operators = {
    "make-vector": {
        call: (context, call) => {
            if (call._value !== undefined) {
                return call._value;
            }
            if (call.args.length < 2) {
                throw new Error("not enough arguments");
            }
            else if (call.args.length > 4) {
                throw new Error("too many arguments");
            }
            const components = call.args.map(arg => context.evaluate(arg));
            components.forEach((element, index) => {
                if (typeof element !== "number") {
                    throw new Error(`expected vector component at index ${index} to have type "number"`);
                }
            });
            let result;
            switch (components.length) {
                case 2:
                    result = new THREE.Vector2().fromArray(components);
                    break;
                case 3:
                    result = new THREE.Vector3().fromArray(components);
                    break;
                case 4:
                    result = new THREE.Vector4().fromArray(components);
                    break;
                default:
                    throw new Error("too many arguments");
            }
            if (call.args.every(arg => arg instanceof Expr_1.NumberLiteralExpr)) {
                call._value = result;
            }
            return result;
        }
    },
    vector2: {
        call: (context, call) => isVector(context, call, "vector2")
    },
    vector3: {
        call: (context, call) => isVector(context, call, "vector3")
    },
    vector4: {
        call: (context, call) => isVector(context, call, "vector4")
    },
    "to-vector2": {
        call: (context, call) => toVector(context, call, "vector2")
    },
    "to-vector3": {
        call: (context, call) => toVector(context, call, "vector3")
    },
    "to-vector4": {
        call: (context, call) => toVector(context, call, "vector4")
    }
};
exports.VectorOperators = operators;
//# sourceMappingURL=VectorOperators.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geometry/lib/ClipLineString.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-geometry/lib/ClipLineString.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrapLineString = exports.clipLineString = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const three_1 = __webpack_require__(/*! three */ "three");
/**
 * A clipping edge.
 *
 * @remarks
 * Clip lines using the Sutherland-Hodgman algorithm.
 *
 * @internal
 */
class ClipEdge {
    /**
     * Creates a clipping edge.
     *
     * @param x1 - The x coordinate of the first point of this ClipEdge.
     * @param y1 - The y coordinate of the first point of this ClipEdge.
     * @param x2 - The x coordinate of the second point of this ClipEdge.
     * @param y2 - The y coordinate of the second point of this ClipEdge.
     * @param isInside - The function used to test points against this ClipEdge.
     */
    constructor(x1, y1, x2, y2, isInside) {
        this.isInside = isInside;
        this.p0 = new three_1.Vector2(x1, y1);
        this.p1 = new three_1.Vector2(x2, y2);
    }
    /**
     * Tests if the given point is inside this clipping edge.
     */
    inside(point) {
        return this.isInside(point);
    }
    /**
     * Computes the intersection of a line and this clipping edge.
     *
     * @remarks
     * {@link https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
     *    | line-line intersection}.
     */
    computeIntersection(a, b) {
        const result = new three_1.Vector2();
        harp_utils_1.Math2D.intersectLines(a.x, a.y, b.x, b.y, this.p0.x, this.p0.y, this.p1.x, this.p1.y, result);
        return result;
    }
    /**
     * Clip the input line against this edge.
     */
    clipLine(lineString) {
        const inputList = lineString;
        const result = [];
        lineString = [];
        result.push(lineString);
        const pushPoint = (point) => {
            if (lineString.length === 0 || !lineString[lineString.length - 1].equals(point)) {
                lineString.push(point);
            }
        };
        for (let i = 0; i < inputList.length; ++i) {
            const currentPoint = inputList[i];
            const prevPoint = i > 0 ? inputList[i - 1] : undefined;
            if (this.inside(currentPoint)) {
                if (prevPoint !== undefined && !this.inside(prevPoint)) {
                    if (lineString.length > 0) {
                        lineString = [];
                        result.push(lineString);
                    }
                    pushPoint(this.computeIntersection(prevPoint, currentPoint));
                }
                pushPoint(currentPoint);
            }
            else if (prevPoint !== undefined && this.inside(prevPoint)) {
                pushPoint(this.computeIntersection(prevPoint, currentPoint));
            }
        }
        if (result[result.length - 1].length === 0) {
            result.length = result.length - 1;
        }
        return result;
    }
    /**
     * Clip the input lines against this edge.
     */
    clipLines(lineStrings) {
        const reuslt = [];
        lineStrings.forEach(lineString => {
            this.clipLine(lineString).forEach(clippedLine => {
                reuslt.push(clippedLine);
            });
        });
        return reuslt;
    }
}
/**
 * Clip the input line against the given bounds.
 *
 * @param lineString - The line to clip.
 * @param minX - The minimum x coordinate.
 * @param minY - The minimum y coordinate.
 * @param maxX - The maxumum x coordinate.
 * @param maxY - The maxumum y coordinate.
 */
function clipLineString(lineString, minX, minY, maxX, maxY) {
    const clipEdge0 = new ClipEdge(minX, minY, minX, maxY, p => p.x > minX); // left
    const clipEdge1 = new ClipEdge(minX, maxY, maxX, maxY, p => p.y < maxY); // bottom
    const clipEdge2 = new ClipEdge(maxX, maxY, maxX, minY, p => p.x < maxX); // right
    const clipEdge3 = new ClipEdge(maxX, minY, minX, minY, p => p.y > minY); // top
    let lines = clipEdge0.clipLine(lineString);
    lines = clipEdge1.clipLines(lines);
    lines = clipEdge2.clipLines(lines);
    lines = clipEdge3.clipLines(lines);
    return lines;
}
exports.clipLineString = clipLineString;
/**
 * Helper function to wrap a line string projected in web mercator.
 *
 * @param multiLineString The input to wrap
 * @param edges The clipping edges used to wrap the input.
 * @param offset The x-offset used to displace the result
 *
 * @internal
 */
function wrapMultiLineStringHelper(multiLineString, edges, offset) {
    for (const clip of edges) {
        multiLineString = clip.clipLines(multiLineString);
    }
    const worldP = new three_1.Vector3();
    const coordinates = [];
    multiLineString.forEach(lineString => {
        if (lineString.length === 0) {
            return;
        }
        const coords = lineString.map(({ x, y }) => {
            worldP.set(x, y, 0);
            const geoPoint = harp_geoutils_1.webMercatorProjection.unprojectPoint(worldP);
            geoPoint.longitude += offset;
            return geoPoint;
        });
        coordinates.push(coords);
    });
    return coordinates.length > 0 ? coordinates : undefined;
}
/**
 * Wrap the given line string.
 *
 * @remarks
 * This function splits this input line string in three parts.
 *
 * The `left` member of the result contains the part of the line string with longitude less than `-180`.
 *
 * The `middle` member contains the part of the line string with longitude in the range `[-180, 180]`.
 *
 * The `right` member contains the part of the line string with longitude greater than `180`.
 *
 * @param coordinates The coordinates of the line string to wrap.
 */
function wrapLineString(coordinates) {
    const worldP = new three_1.Vector3();
    const lineString = coordinates.map(g => {
        const { x, y } = harp_geoutils_1.webMercatorProjection.projectPoint(g, worldP);
        return new three_1.Vector2(x, y);
    });
    const multiLineString = [lineString];
    return {
        left: wrapMultiLineStringHelper(multiLineString, WRAP_LEFT_CLIP_EDGES, 360),
        middle: wrapMultiLineStringHelper(multiLineString, WRAP_MIDDLE_CLIP_EDGES, 0),
        right: wrapMultiLineStringHelper(multiLineString, WRAP_RIGHT_CLIP_EDGES, -360)
    };
}
exports.wrapLineString = wrapLineString;
const ec = harp_geoutils_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE;
const border = 0;
const WRAP_MIDDLE_CLIP_EDGES = [
    new ClipEdge(0 - border, ec, 0 - border, 0, p => p.x > 0 - border),
    new ClipEdge(ec + border, 0, ec + border, ec, p => p.x < ec + border)
];
const WRAP_LEFT_CLIP_EDGES = [
    new ClipEdge(-ec - border, ec, -ec - border, 0, p => p.x > -ec - border),
    new ClipEdge(0 + border, 0, 0 + border, ec, p => p.x < 0 + border)
];
const WRAP_RIGHT_CLIP_EDGES = [
    new ClipEdge(ec - border, ec, ec - border, 0, p => p.x > ec - border),
    new ClipEdge(ec * 2 + border, 0, ec * 2 + border, ec, p => p.x < ec * 2 + border)
];
//# sourceMappingURL=ClipLineString.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geometry/lib/ClipPolygon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@here/harp-geometry/lib/ClipPolygon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clipPolygon = exports.ClippingEdge = void 0;
const three_1 = __webpack_require__(/*! three */ "three");
/**
 * Abstract helper class used to implement the Sutherland-Hodgman clipping algorithm.
 *
 * @remarks
 * Concrete implementation of this class are used to clip a polygon
 * against one edge of a bounding box.
 *
 * @internal
 */
class ClippingEdge {
    /**
     * Clip the polygon against this clipping edge.
     *
     * @param polygon Clip the polygon against this edge.
     * @param extent The extent of the bounding box.
     *
     * @return The clipped polygon.
     */
    clipPolygon(polygon, extent) {
        const inputList = polygon;
        polygon = [];
        const pushPoint = (point) => {
            const lastAddedPoint = polygon[polygon.length - 1];
            if (!(lastAddedPoint === null || lastAddedPoint === void 0 ? void 0 : lastAddedPoint.equals(point)) ||
                (point.isClipped === true && !(lastAddedPoint === null || lastAddedPoint === void 0 ? void 0 : lastAddedPoint.isClipped)) ||
                (!point.isClipped && (lastAddedPoint === null || lastAddedPoint === void 0 ? void 0 : lastAddedPoint.isClipped) === true)) {
                polygon.push(point);
            }
        };
        for (let i = 0; i < inputList.length; ++i) {
            const currentPoint = inputList[i];
            const prevPoint = inputList[(i + inputList.length - 1) % inputList.length];
            if (this.inside(currentPoint, extent)) {
                if (!this.inside(prevPoint, extent)) {
                    const p = this.computeIntersection(prevPoint, currentPoint, extent);
                    p.isClipped = true;
                    pushPoint(p);
                }
                pushPoint(currentPoint);
            }
            else if (this.inside(prevPoint, extent)) {
                const p = this.computeIntersection(prevPoint, currentPoint, extent);
                p.isClipped = true;
                pushPoint(p);
            }
        }
        return polygon;
    }
}
exports.ClippingEdge = ClippingEdge;
class TopClippingEdge extends ClippingEdge {
    /** @override */
    inside(point) {
        return point.y >= 0;
    }
    /**
     * Computes the intersection of a line and this clipping edge.
     *
     * @remarks
     * Find the intersection point between the line defined by the points `a` and `b`
     * and the edge defined by the points `(0, 0)` and `(0, extent)`.
     *
     * @override
     *
     */
    computeIntersection(a, b) {
        const { x: x1, y: y1 } = a;
        const { x: x2, y: y2 } = b;
        const v = new three_1.Vector2((x1 * y2 - y1 * x2) / -(y1 - y2), 0).round();
        return v;
    }
}
class RightClippingEdge extends ClippingEdge {
    /**
     * @override
     *
     * See: HARP-14633, this should potentially be changed to < as it was previously.
     * However further investigation is needed to confirm this.
     */
    inside(point, extent) {
        return point.x <= extent;
    }
    /**
     * Computes the intersection of a line and this clipping edge.
     *
     * @remarks
     * Find the intersection point between the line defined by the points `a` and `b`
     * and the edge defined by the points `(extent, 0)` and `(extent, extent)`.
     *
     * @override
     *
     */
    computeIntersection(a, b, extent) {
        const { x: x1, y: y1 } = a;
        const { x: x2, y: y2 } = b;
        const v = new three_1.Vector2(extent, (x1 * y2 - y1 * x2 - (y1 - y2) * -extent) / (x1 - x2)).round();
        return v;
    }
}
class BottomClipEdge extends ClippingEdge {
    /** @override */
    inside(point, extent) {
        return point.y <= extent;
    }
    /**
     * Computes the intersection of a line and this clipping edge.
     *
     * @remarks
     * Find the intersection point between the line defined by the points `a` and `b`
     * and the edge defined by the points `(extent, extent)` and `(0, extent)`.
     *
     * @override
     *
     */
    computeIntersection(a, b, extent) {
        const { x: x1, y: y1 } = a;
        const { x: x2, y: y2 } = b;
        const v = new three_1.Vector2((x1 * y2 - y1 * x2 - (x1 - x2) * extent) / -(y1 - y2), extent).round();
        return v;
    }
}
class LeftClippingEdge extends ClippingEdge {
    /** @override */
    inside(point) {
        return point.x >= 0;
    }
    /**
     * Computes the intersection of a line and this clipping edge.
     *
     * @remarks
     * Find the intersection point between the line defined by the points `a` and `b`
     * and the edge defined by the points `(0, extent)` and `(0, 0)`.
     *
     * @override
     *
     */
    computeIntersection(a, b) {
        const { x: x1, y: y1 } = a;
        const { x: x2, y: y2 } = b;
        const v = new three_1.Vector2(0, (x1 * y2 - y1 * x2) / (x1 - x2)).round();
        return v;
    }
}
const clipEdges = [
    new TopClippingEdge(),
    new RightClippingEdge(),
    new BottomClipEdge(),
    new LeftClippingEdge()
];
/**
 * Clip the given polygon against a rectangle using the Sutherland-Hodgman algorithm.
 *
 * @remarks
 * The coordinates of the polygon must be integer numbers.
 *
 * @param polygon The vertices of the polygon to clip.
 * @param extent The extents of the rectangle to clip against.
 */
function clipPolygon(polygon, extent) {
    if (polygon.length === 0) {
        return polygon;
    }
    if (!polygon[0].equals(polygon[polygon.length - 1])) {
        // close the polygon if needed.
        polygon = [...polygon, polygon[0]];
    }
    for (const clip of clipEdges) {
        polygon = clip.clipPolygon(polygon, extent);
    }
    if (polygon.length < 3) {
        return [];
    }
    return polygon;
}
exports.clipPolygon = clipPolygon;
//# sourceMappingURL=ClipPolygon.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geometry/lib/EdgeLengthGeometrySubdivisionModifier.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@here/harp-geometry/lib/EdgeLengthGeometrySubdivisionModifier.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EdgeLengthGeometrySubdivisionModifier = exports.SubdivisionMode = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const three_1 = __webpack_require__(/*! three */ "three");
const SubdivisionModifier_1 = __webpack_require__(/*! ./SubdivisionModifier */ "./node_modules/@here/harp-geometry/lib/SubdivisionModifier.js");
const VERTEX_POSITION_CACHE = [new three_1.Vector3(), new three_1.Vector3()];
var SubdivisionMode;
(function (SubdivisionMode) {
    /**
     * Subdivide all edges
     */
    SubdivisionMode[SubdivisionMode["All"] = 0] = "All";
    /**
     * Only subdivide horizontal and vertical edges
     */
    SubdivisionMode[SubdivisionMode["NoDiagonals"] = 1] = "NoDiagonals";
})(SubdivisionMode = exports.SubdivisionMode || (exports.SubdivisionMode = {}));
/**
 * The [[EdgeLengthGeometrySubdivisionModifier]] subdivides triangle mesh depending on
 * length of edges.
 */
class EdgeLengthGeometrySubdivisionModifier extends SubdivisionModifier_1.SubdivisionModifier {
    /**
     * Constructs a new [[EdgeLengthGeometrySubdivisionModifier]].
     *
     * @param subdivision - The subdivision factor
     * @param geoBox - The geo bounding box of a tile
     * @param subdivisionMode - Configures what edges to divide
     * @param projection - The projection that defines the world space of this geometry.
     */
    constructor(subdivision, geoBox, subdivisionMode = SubdivisionMode.All, projection) {
        super();
        this.subdivision = subdivision;
        this.geoBox = geoBox;
        this.subdivisionMode = subdivisionMode;
        this.projection = projection;
        harp_utils_1.assert(projection.type === harp_geoutils_1.ProjectionType.Planar, "EdgeLengthGeometrySubdivisionModifier only supports planar projections");
        const northEast = projection.projectPoint(geoBox.northEast, VERTEX_POSITION_CACHE[0]);
        const southWest = projection.projectPoint(geoBox.southWest, VERTEX_POSITION_CACHE[1]);
        this.m_projectedBox = {
            min: {
                x: Math.min(northEast.x, southWest.x),
                y: Math.min(northEast.y, southWest.y),
                z: Math.min(northEast.z, southWest.z)
            },
            max: {
                x: Math.max(northEast.x, southWest.x),
                y: Math.max(northEast.y, southWest.y),
                z: Math.max(northEast.z, southWest.z)
            }
        };
        this.m_maxLengthX = (this.m_projectedBox.max.x - this.m_projectedBox.min.x) / subdivision;
        this.m_maxLengthY = (this.m_projectedBox.max.y - this.m_projectedBox.min.y) / subdivision;
        // Increase max length slightly to account for precision errors
        if (this.subdivisionMode === SubdivisionMode.All) {
            this.m_maxLengthX *= 1.1;
            this.m_maxLengthY *= 1.1;
        }
        this.m_maxLength = Math.sqrt(this.m_maxLengthX * this.m_maxLengthX + this.m_maxLengthY * this.m_maxLengthY);
    }
    /**
     * Return upper bound for length of diagonal edges
     */
    get maxLength() {
        return this.m_maxLength;
    }
    /**
     * Return upper bound for edge length in x direction
     */
    get maxLengthX() {
        return this.m_maxLengthX;
    }
    /**
     * Return upper bound for edge length in y direction
     */
    get maxLengthY() {
        return this.m_maxLengthY;
    }
    /** @override */
    shouldSplitTriangle(a, b, c) {
        const shouldSplitAB = this.shouldSplitEdge(a, b);
        const shouldSplitBC = this.shouldSplitEdge(b, c);
        const shouldSplitCA = this.shouldSplitEdge(c, a);
        const shouldSplit = shouldSplitAB || shouldSplitBC || shouldSplitCA;
        if (!shouldSplit) {
            return;
        }
        const ab = a.distanceTo(b);
        const bc = b.distanceTo(c);
        const ca = c.distanceTo(a);
        const maxDistance = Math.max(shouldSplitAB ? ab : 0, shouldSplitBC ? bc : 0, shouldSplitCA ? ca : 0);
        if (ab === maxDistance) {
            return 0;
        }
        else if (bc === maxDistance) {
            return 1;
        }
        else if (ca === maxDistance) {
            return 2;
        }
        throw new Error("Could not split triangle.");
    }
    shouldSplitEdge(a, b) {
        switch (this.subdivisionMode) {
            case SubdivisionMode.All:
                return ((a.y === b.y && Math.abs(a.x - b.x) > this.m_maxLengthX) ||
                    (a.x === b.x && Math.abs(a.y - b.y) > this.m_maxLengthY) ||
                    a.distanceTo(b) > this.m_maxLength);
            case SubdivisionMode.NoDiagonals:
                return ((a.y === b.y && Math.abs(a.x - b.x) > this.m_maxLengthX) ||
                    (a.x === b.x && Math.abs(a.y - b.y) > this.m_maxLengthY));
        }
    }
}
exports.EdgeLengthGeometrySubdivisionModifier = EdgeLengthGeometrySubdivisionModifier;
//# sourceMappingURL=EdgeLengthGeometrySubdivisionModifier.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geometry/lib/SphericalGeometrySubdivisionModifier.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-geometry/lib/SphericalGeometrySubdivisionModifier.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SphericalGeometrySubdivisionModifier = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const three_1 = __webpack_require__(/*! three */ "three");
const SubdivisionModifier_1 = __webpack_require__(/*! ./SubdivisionModifier */ "./node_modules/@here/harp-geometry/lib/SubdivisionModifier.js");
const VERTEX_POSITION_CACHE = [new three_1.Vector3(), new three_1.Vector3(), new three_1.Vector3()];
/**
 * The [[SphericalGeometrySubdivisionModifier]] subdivides triangle mesh geometries positioned
 * on the surface of a sphere centered at `(0, 0, 0)`.
 */
class SphericalGeometrySubdivisionModifier extends SubdivisionModifier_1.SubdivisionModifier {
    /**
     * Constructs a new [[SphericalGeometrySubdivisionModifier]].
     *
     * @param angle - The maximum angle in radians between two vertices and the origin.
     * @param projection - The projection that defines the world space of this geometry.
     */
    constructor(angle, projection = harp_geoutils_1.sphereProjection) {
        super();
        this.angle = angle;
        this.projection = projection;
    }
    /** @override */
    shouldSplitTriangle(a, b, c) {
        const aa = harp_geoutils_1.sphereProjection.reprojectPoint(this.projection, a, VERTEX_POSITION_CACHE[0]);
        const bb = harp_geoutils_1.sphereProjection.reprojectPoint(this.projection, b, VERTEX_POSITION_CACHE[1]);
        const cc = harp_geoutils_1.sphereProjection.reprojectPoint(this.projection, c, VERTEX_POSITION_CACHE[2]);
        const alpha = aa.angleTo(bb);
        const beta = bb.angleTo(cc);
        const gamma = cc.angleTo(aa);
        // find the maximum angle
        const m = Math.max(alpha, Math.max(beta, gamma));
        // split the triangle if needed.
        if (m < this.angle) {
            return undefined;
        }
        if (m === alpha) {
            return 0;
        }
        else if (m === beta) {
            return 1;
        }
        else if (m === gamma) {
            return 2;
        }
        throw new Error("failed to split triangle");
    }
}
exports.SphericalGeometrySubdivisionModifier = SphericalGeometrySubdivisionModifier;
//# sourceMappingURL=SphericalGeometrySubdivisionModifier.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geometry/lib/SubdivisionModifier.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-geometry/lib/SubdivisionModifier.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubdivisionModifier = void 0;
const three_1 = __webpack_require__(/*! three */ "three");
const tmpVectorA = new three_1.Vector3();
const tmpVectorB = new three_1.Vector3();
const tmpVectorC = new three_1.Vector3();
/**
 * The [[SubdivisionModifier]] subdivides triangle mesh geometries.
 */
class SubdivisionModifier {
    /**
     * Constructs a new [[SubdivisionModifier]].
     */
    constructor() {
        // nothing to do
    }
    /**
     * Subdivides the faces of the given [[THREE.BufferGeometry]].
     *
     * This method modifies (in-place) the vertices and the faces of the geometry.
     * Please note that only the vertex position and their UV coordinates are subdivided.
     * Normals, vertex colors and other attributes are left unmodified.
     *
     * @param geometry - The [[THREE.BufferGeometry]] to subdivide.
     */
    modify(geometry) {
        const positionAttr = geometry.getAttribute("position");
        const position = Array.from(positionAttr.array);
        const uvAttr = geometry.getAttribute("uv");
        const uv = uvAttr !== undefined ? Array.from(uvAttr.array) : undefined;
        const edgeAttr = geometry.getAttribute("edge");
        const edge = edgeAttr !== undefined ? Array.from(edgeAttr.array) : undefined;
        const wallAttr = geometry.getAttribute("wall");
        const wall = wallAttr !== undefined ? Array.from(wallAttr.array) : undefined;
        const indexAttr = geometry.getIndex();
        const indices = Array.from(indexAttr.array);
        // A cache containing the indices of the vertices added
        // when subdiving the faces of the geometry.
        const cache = new Map();
        /**
         * Returns the index of the vertex positioned in the middle of the given vertices.
         */
        function middleVertex(i, j) {
            // Build a unique `key` for the pair of indices `(i, j)`.
            const key = `${Math.min(i, j)}_${Math.max(i, j)}`;
            const h = cache.get(key);
            if (h !== undefined) {
                // Nothing to do, a vertex in the middle of (i, j) was already created.
                return h;
            }
            // The position of the new vertex.
            tmpVectorA.set(position[i * 3], position[i * 3 + 1], position[i * 3 + 2]);
            tmpVectorB.set(position[j * 3], position[j * 3 + 1], position[j * 3 + 2]);
            tmpVectorC.lerpVectors(tmpVectorA, tmpVectorB, 0.5);
            // The index of the new vertex.
            const index = position.length / 3;
            position.push(...tmpVectorC.toArray());
            // Cache the position of the new vertex.
            cache.set(key, index);
            // The uvs of the new vertex.
            if (uv !== undefined) {
                tmpVectorA.set(uv[i * 2], uv[i * 2 + 1], 0);
                tmpVectorB.set(uv[j * 2], uv[j * 2 + 1], 0);
                tmpVectorC.lerpVectors(tmpVectorA, tmpVectorB, 0.5);
                uv.push(tmpVectorC.x, tmpVectorC.y);
            }
            // The edge and wall attributes of the new vertex.
            // If a new vertex has been introduced between i and j, connect the elements
            // accordingly.
            if (edge !== undefined) {
                if (edge[i] === j) {
                    edge.push(j);
                    edge[i] = index;
                }
                else if (edge[j] === i) {
                    edge.push(i);
                    edge[j] = index;
                }
                else {
                    edge.push(-1);
                }
            }
            if (wall !== undefined) {
                if (wall[i] === j) {
                    wall.push(j);
                    wall[i] = index;
                }
                else if (wall[j] === i) {
                    wall.push(i);
                    wall[j] = index;
                }
                else {
                    wall.push(-1);
                }
            }
            return index;
        }
        const newIndices = [];
        while (indices.length >= 3) {
            const v0 = indices.shift();
            const v1 = indices.shift();
            const v2 = indices.shift();
            tmpVectorA.set(position[v0 * 3], position[v0 * 3 + 1], position[v0 * 3 + 2]);
            tmpVectorB.set(position[v1 * 3], position[v1 * 3 + 1], position[v1 * 3 + 2]);
            tmpVectorC.set(position[v2 * 3], position[v2 * 3 + 1], position[v2 * 3 + 2]);
            const edgeToSplit = this.shouldSplitTriangle(tmpVectorA, tmpVectorB, tmpVectorC);
            switch (edgeToSplit) {
                case 0: {
                    const v3 = middleVertex(v0, v1);
                    indices.push(v0, v3, v2, v3, v1, v2);
                    break;
                }
                case 1: {
                    const v3 = middleVertex(v1, v2);
                    indices.push(v0, v1, v3, v0, v3, v2);
                    break;
                }
                case 2: {
                    const v3 = middleVertex(v2, v0);
                    indices.push(v0, v1, v3, v3, v1, v2);
                    break;
                }
                case undefined: {
                    newIndices.push(v0, v1, v2);
                    break;
                }
                default:
                    throw new Error("failed to subdivide the given geometry");
            }
        }
        positionAttr.array =
            positionAttr.array instanceof Float32Array
                ? new Float32Array(position)
                : new Float64Array(position);
        positionAttr.count = position.length / positionAttr.itemSize;
        positionAttr.needsUpdate = true;
        geometry.setIndex(newIndices);
        if (uv !== undefined) {
            uvAttr.array = new Float32Array(uv);
            uvAttr.count = uv.length / uvAttr.itemSize;
            uvAttr.needsUpdate = true;
        }
        if (edge !== undefined) {
            edgeAttr.array = new Float32Array(edge);
            edgeAttr.count = edge.length / edgeAttr.itemSize;
            edgeAttr.needsUpdate = true;
        }
        return geometry;
    }
}
exports.SubdivisionModifier = SubdivisionModifier;
//# sourceMappingURL=SubdivisionModifier.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Utility classes for working with geospatial data.
 *
 * @remarks
 *
 * @packageDocumentation
 */
__exportStar(__webpack_require__(/*! ./lib/coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/coordinates/GeoBoxExtentLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBoxExtentLike.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/coordinates/GeoCoordinatesLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/coordinates/GeoPointLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoPointLike.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/coordinates/GeoPolygonLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoPolygonLike.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/coordinates/GeoPolygon */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoPolygon.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/coordinates/LatLngLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/LatLngLike.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/projection/EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/projection/EquirectangularProjection */ "./node_modules/@here/harp-geoutils/lib/projection/EquirectangularProjection.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/projection/IdentityProjection */ "./node_modules/@here/harp-geoutils/lib/projection/IdentityProjection.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/projection/Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/projection/MercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/projection/TransverseMercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/TransverseMercatorProjection.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/projection/SphereProjection */ "./node_modules/@here/harp-geoutils/lib/projection/SphereProjection.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/FlatTileBoundingBoxGenerator */ "./node_modules/@here/harp-geoutils/lib/tiling/FlatTileBoundingBoxGenerator.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/HalfQuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/HalfQuadTreeSubdivisionScheme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/QuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/QuadTree */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTree.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/SubTiles */ "./node_modules/@here/harp-geoutils/lib/tiling/SubTiles.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/SubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/SubdivisionScheme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/TileKey */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/TileKeyUtils */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKeyUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/TileTreeTraverse */ "./node_modules/@here/harp-geoutils/lib/tiling/TileTreeTraverse.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/HereTilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/HereTilingScheme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/WebMercatorTilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/WebMercatorTilingScheme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/MercatorTilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/MercatorTilingScheme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/tiling/PolarTilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/PolarTilingScheme.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/math/Vector2Like */ "./node_modules/@here/harp-geoutils/lib/math/Vector2Like.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/math/Vector3Like */ "./node_modules/@here/harp-geoutils/lib/math/Vector3Like.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/math/TransformLike */ "./node_modules/@here/harp-geoutils/lib/math/TransformLike.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/math/OrientedBox3 */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js":
/*!********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoBox = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const THREE = __webpack_require__(/*! three */ "three");
const GeoCoordinates_1 = __webpack_require__(/*! ./GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
/**
 * `GeoBox` is used to represent a bounding box in geo coordinates.
 */
class GeoBox {
    /**
     * Constructs a new `GeoBox` with the given geo coordinates.
     *
     * @param southWest - The south west position in geo coordinates.
     * @param northEast - The north east position in geo coordinates.
     */
    constructor(southWest, northEast) {
        this.southWest = southWest;
        this.northEast = northEast;
        if (this.west > this.east) {
            this.northEast.longitude += 360;
        }
    }
    /**
     * Returns a `GeoBox` with the given geo coordinates.
     *
     * @param southWest - The south west position in geo coordinates.
     * @param northEast - The north east position in geo coordinates.
     */
    static fromCoordinates(southWest, northEast) {
        return new GeoBox(southWest, northEast);
    }
    /**
     * Returns a `GeoBox` with the given center and dimensions.
     *
     * @param center - The center position of geo box.
     * @param extent - Box latitude and logitude span
     */
    static fromCenterAndExtents(center, extent) {
        return new GeoBox(new GeoCoordinates_1.GeoCoordinates(center.latitude - extent.latitudeSpan / 2, center.longitude - extent.longitudeSpan / 2), new GeoCoordinates_1.GeoCoordinates(center.latitude + extent.latitudeSpan / 2, center.longitude + extent.longitudeSpan / 2));
    }
    /**
     * Returns the minimum altitude or `undefined`.
     */
    get minAltitude() {
        if (this.southWest.altitude === undefined || this.northEast.altitude === undefined) {
            return undefined;
        }
        return Math.min(this.southWest.altitude, this.northEast.altitude);
    }
    /**
     * Returns the maximum altitude or `undefined`.
     */
    get maxAltitude() {
        if (this.southWest.altitude === undefined || this.northEast.altitude === undefined) {
            return undefined;
        }
        return Math.max(this.southWest.altitude, this.northEast.altitude);
    }
    /**
     * Returns the south latitude in degrees of this `GeoBox`.
     */
    get south() {
        return this.southWest.latitude;
    }
    /**
     * Returns the north altitude in degrees of this `GeoBox`.
     */
    get north() {
        return this.northEast.latitude;
    }
    /**
     * Returns the west longitude in degrees of this `GeoBox`.
     */
    get west() {
        return this.southWest.longitude;
    }
    /**
     * Returns the east longitude in degrees of this `GeoBox`.
     */
    get east() {
        return this.northEast.longitude;
    }
    /**
     * Returns the center of this `GeoBox`.
     */
    get center() {
        const latitude = (this.south + this.north) * 0.5;
        const { west, east } = this;
        const { minAltitude, altitudeSpan } = this;
        let altitude;
        if (minAltitude !== undefined && altitudeSpan !== undefined) {
            altitude = minAltitude + altitudeSpan * 0.5;
        }
        if (west <= east) {
            return new GeoCoordinates_1.GeoCoordinates(latitude, (west + east) * 0.5, altitude);
        }
        let longitude = (360 + east + west) * 0.5;
        if (longitude > 360) {
            longitude -= 360;
        }
        return new GeoCoordinates_1.GeoCoordinates(latitude, longitude, altitude);
    }
    /**
     * Returns the latitude span in radians.
     */
    get latitudeSpanInRadians() {
        return THREE.MathUtils.degToRad(this.latitudeSpan);
    }
    /**
     * Returns the longitude span in radians.
     */
    get longitudeSpanInRadians() {
        return THREE.MathUtils.degToRad(this.longitudeSpan);
    }
    /**
     * Returns the latitude span in degrees.
     */
    get latitudeSpan() {
        return this.north - this.south;
    }
    get altitudeSpan() {
        if (this.maxAltitude === undefined || this.minAltitude === undefined) {
            return undefined;
        }
        return this.maxAltitude - this.minAltitude;
    }
    /**
     * Returns the longitude span in degrees.
     */
    get longitudeSpan() {
        let width = this.northEast.longitude - this.southWest.longitude;
        if (width < 0) {
            width += 360;
        }
        return width;
    }
    /**
     * Returns the latitude span in degrees.
     * @deprecated Use [[latitudeSpan]] instead.
     */
    get latitudeSpanInDegrees() {
        return this.latitudeSpan;
    }
    /**
     * Returns the longitude span in degrees.
     * @deprecated Use [[longitudeSpan]] instead.
     */
    get longitudeSpanInDegrees() {
        return this.longitudeSpan;
    }
    /**
     * Returns `true` if the given geo coordinates are contained in this `GeoBox`.
     *
     * @param point - The geo coordinates.
     */
    contains(point) {
        if (point.altitude === undefined ||
            this.minAltitude === undefined ||
            this.maxAltitude === undefined) {
            return this.containsHelper(point);
        }
        const isFlat = this.minAltitude === this.maxAltitude;
        const isSameAltitude = this.minAltitude === point.altitude;
        const isWithinAltitudeRange = this.minAltitude <= point.altitude && this.maxAltitude > point.altitude;
        // If box is flat, we should check the altitude and containment,
        // otherwise we should check also altitude difference where we consider
        // point to be inside if alt is from [m_minAltitude, m_maxAltitude) range!
        if (isFlat ? isSameAltitude : isWithinAltitudeRange) {
            return this.containsHelper(point);
        }
        return false;
    }
    /**
     * Clones this `GeoBox` instance.
     */
    clone() {
        return new GeoBox(this.southWest.clone(), this.northEast.clone());
    }
    /**
     * Update the bounding box by considering a given point.
     *
     * @param point - The point that may expand the bounding box.
     */
    growToContain(point) {
        this.southWest.latitude = Math.min(this.southWest.latitude, point.latitude);
        this.southWest.longitude = Math.min(this.southWest.longitude, point.longitude);
        this.southWest.altitude =
            this.southWest.altitude !== undefined && point.altitude !== undefined
                ? Math.min(this.southWest.altitude, point.altitude)
                : this.southWest.altitude !== undefined
                    ? this.southWest.altitude
                    : point.altitude !== undefined
                        ? point.altitude
                        : undefined;
        this.northEast.latitude = Math.max(this.northEast.latitude, point.latitude);
        this.northEast.longitude = Math.max(this.northEast.longitude, point.longitude);
        this.northEast.altitude =
            this.northEast.altitude !== undefined && point.altitude !== undefined
                ? Math.max(this.northEast.altitude, point.altitude)
                : this.northEast.altitude !== undefined
                    ? this.northEast.altitude
                    : point.altitude !== undefined
                        ? point.altitude
                        : undefined;
    }
    containsHelper(point) {
        if (point.latitude < this.southWest.latitude || point.latitude >= this.northEast.latitude) {
            return false;
        }
        const { west, east } = this;
        let longitude = point.longitude;
        if (east > GeoCoordinates_1.MAX_LONGITUDE) {
            while (longitude < west) {
                longitude = longitude + 360;
            }
        }
        if (longitude > east) {
            while (longitude > west + 360) {
                longitude = longitude - 360;
            }
        }
        return longitude >= west && longitude < east;
    }
}
exports.GeoBox = GeoBox;
//# sourceMappingURL=GeoBox.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBoxExtentLike.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoBoxExtentLike.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isGeoBoxExtentLike = void 0;
/**
 * Type guard to assert that `object` conforms to {@link GeoBoxExtentLike} interface.
 */
function isGeoBoxExtentLike(obj) {
    return (obj &&
        typeof obj === "object" &&
        typeof obj.latitudeSpan === "number" &&
        typeof obj.longitudeSpan === "number");
}
exports.isGeoBoxExtentLike = isGeoBoxExtentLike;
//# sourceMappingURL=GeoBoxExtentLike.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordLike.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordLike.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isGeoCoordLike = exports.geoCoordLikeToGeoPointLike = exports.geoCoordLikeToGeoCoordinatesLike = void 0;
/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const GeoCoordinatesLike_1 = __webpack_require__(/*! ./GeoCoordinatesLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js");
const GeoPointLike_1 = __webpack_require__(/*! ./GeoPointLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoPointLike.js");
const LatLngLike_1 = __webpack_require__(/*! ./LatLngLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/LatLngLike.js");
function geoCoordLikeToGeoCoordinatesLike(coord) {
    return GeoCoordinatesLike_1.isGeoCoordinatesLike(coord)
        ? coord
        : LatLngLike_1.isLatLngLike(coord)
            ? { latitude: coord.lat, longitude: coord.lng }
            : { latitude: coord[1], longitude: coord[0] };
}
exports.geoCoordLikeToGeoCoordinatesLike = geoCoordLikeToGeoCoordinatesLike;
function geoCoordLikeToGeoPointLike(coord) {
    return GeoPointLike_1.isGeoPointLike(coord)
        ? coord
        : LatLngLike_1.isLatLngLike(coord)
            ? [coord.lng, coord.lat]
            : [coord.longitude, coord.latitude];
}
exports.geoCoordLikeToGeoPointLike = geoCoordLikeToGeoPointLike;
function isGeoCoordLike(object) {
    return GeoCoordinatesLike_1.isGeoCoordinatesLike(object) || LatLngLike_1.isLatLngLike(object) || !GeoPointLike_1.isGeoPointLike(object);
}
exports.isGeoCoordLike = isGeoCoordLike;
//# sourceMappingURL=GeoCoordLike.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoCoordinates = exports.MIN_LONGITUDE = exports.MAX_LONGITUDE = exports.MIN_LATITUDE = exports.MAX_LATITUDE = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const THREE = __webpack_require__(/*! three */ "three");
const GeoCoordinatesLike_1 = __webpack_require__(/*! ./GeoCoordinatesLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js");
const GeoPointLike_1 = __webpack_require__(/*! ./GeoPointLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoPointLike.js");
const LatLngLike_1 = __webpack_require__(/*! ./LatLngLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/LatLngLike.js");
exports.MAX_LATITUDE = 90;
exports.MIN_LATITUDE = -90;
exports.MAX_LONGITUDE = 180;
exports.MIN_LONGITUDE = -180;
const tmpV0 = new THREE.Vector3();
const tmpV1 = new THREE.Vector3();
/**
 * Compute the modulo.
 *
 * @internal
 */
function mod(dividend, divisor) {
    const modulo = dividend % divisor;
    const modulo_sign = modulo < 0;
    const divisor_sign = divisor < 0;
    return modulo_sign === divisor_sign ? modulo : modulo + divisor;
}
/**
 * `GeoCoordinates` is used to represent geo positions.
 */
class GeoCoordinates {
    /**
     * Creates a `GeoCoordinates` from the given latitude, longitude, and optional altitude.
     *
     * @param latitude - Latitude in degrees.
     * @param longitude - Longitude in degrees.
     * @param altitude - Altitude in meters.
     */
    constructor(latitude, longitude, altitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
    /**
     * Returns a `GeoCoordinates` from the given latitude, longitude, and optional altitude.
     *
     * @param latitude - Latitude in degrees.
     * @param longitude - Longitude in degrees.
     * @param altitude - Altitude in meters.
     */
    static fromDegrees(latitude, longitude, altitude) {
        return new GeoCoordinates(latitude, longitude, altitude);
    }
    /**
     * Returns a `GeoCoordinates` from the given latitude, longitude, and optional altitude.
     *
     * @param latitude - Latitude in radians.
     * @param longitude - Longitude in radians.
     * @param altitude - Altitude in meters.
     */
    static fromRadians(latitude, longitude, altitude) {
        return new GeoCoordinates(THREE.MathUtils.radToDeg(latitude), THREE.MathUtils.radToDeg(longitude), altitude);
    }
    /**
     * Creates a {@link GeoCoordinates} from a {@link LatLngLike} literal.
     * ```typescript
     * const center = { lat: 53.3, lng: 13.4 };
     * mapView.geoCenter = GeoCoordinates.fromLatLng(center);
     * ```
     * @param latLng - A {@link LatLngLike} object literal.
     */
    static fromLatLng(latLng) {
        return new GeoCoordinates(latLng.lat, latLng.lng);
    }
    /**
     * Creates a {@link GeoCoordinates} from a [[GeoPointLike]] tuple.
     *
     * Example:
     * ```typescript
     * mapView.geoCenter = GeoCoordinates.fromGeoPoint([longitude, latitude]);
     *
     * let geoCoords: number[] = ...;
     *
     * if (isGeoPointLike(geoCoords)) {
     *     const p = GeoCoordinates.fromGeoPoint(geoCoords);
     * }
     * ```
     * @param geoPoint - An [[Array]] of at least two elements following the order
     * longitude, latitude, altitude.
     */
    static fromGeoPoint(geoPoint) {
        return new GeoCoordinates(geoPoint[1], geoPoint[0], geoPoint[2]);
    }
    /**
     * Creates a {@link GeoCoordinates} from different types of geo coordinate objects.
     *
     * Example:
     * ```typescript
     * const fromGeoPointLike = GeoCoordinates.fromObject([longitude, latitude]);
     * const fromGeoCoordinateLike = GeoCoordinates.fromObject({ longitude, latitude });
     * const fromGeoCoordinate = GeoCoordinates.fromObject(new GeoCoordinates(latitude, longitude));
     * const fromLatLngLike = GeoCoordinates.fromObject({ lat: latitude , lng: longitude });
     * ```
     *
     * @param geoPoint - Either [[GeoPointLike]], {@link GeoCoordinatesLike}
     * or {@link LatLngLike} object literal.
     */
    static fromObject(geoPoint) {
        if (GeoPointLike_1.isGeoPointLike(geoPoint)) {
            return GeoCoordinates.fromGeoPoint(geoPoint);
        }
        else if (GeoCoordinatesLike_1.isGeoCoordinatesLike(geoPoint)) {
            return GeoCoordinates.fromDegrees(geoPoint.latitude, geoPoint.longitude, geoPoint.altitude);
        }
        else if (LatLngLike_1.isLatLngLike(geoPoint)) {
            return GeoCoordinates.fromDegrees(geoPoint.lat, geoPoint.lng);
        }
        throw new Error("Invalid input coordinate format.");
    }
    /**
     * Returns a `GeoCoordinates` resulting from the linear interpolation of other two.
     * @param geoCoords0 - One of the `GeoCoordinates` used for interpolation.
     * @param geoCoords1 - The other `GeoCoordinates` used for interpolation.
     * @param factor - Interpolation factor. If `0` result will be equal to `geoCoords0`, if `1`
     * it'll be equal to `geoCoords1`.
     * @param wrap - If `true`, interpolation will be done across the antimeridian, otherwise it's
     * done across the Greenwich meridian. Supported only if longitude span is less than 360 deg.
     * @default false
     * @param normalize - If `true`, interpolation result will be normalized. @default false
     */
    static lerp(geoCoords0, geoCoords1, factor, wrap = false, normalize = false) {
        var _a, _b;
        if (wrap) {
            if (geoCoords0.lng < geoCoords1.lng) {
                const geoCoordsEnd = geoCoords0.clone();
                geoCoordsEnd.longitude += 360;
                return this.lerp(geoCoords1, geoCoordsEnd, 1 - factor);
            }
            else {
                const geoCoordsEnd = geoCoords1.clone();
                geoCoordsEnd.longitude += 360;
                return this.lerp(geoCoords0, geoCoordsEnd, factor);
            }
        }
        const v0 = tmpV0.set(geoCoords0.lat, geoCoords0.lng, (_a = geoCoords0.altitude) !== null && _a !== void 0 ? _a : 0);
        const v1 = tmpV1.set(geoCoords1.lat, geoCoords1.lng, (_b = geoCoords1.altitude) !== null && _b !== void 0 ? _b : 0);
        v0.lerp(v1, factor);
        const result = new GeoCoordinates(v0.x, v0.y, v0.z);
        return normalize ? result.normalized() : result;
    }
    /**
     * Returns the latitude in radians.
     */
    get latitudeInRadians() {
        return THREE.MathUtils.degToRad(this.latitude);
    }
    /**
     * Returns the longitude in radians.
     */
    get longitudeInRadians() {
        return THREE.MathUtils.degToRad(this.longitude);
    }
    /**
     * Returns the latitude in degrees.
     * @deprecated Use the [[latitude]] property instead.
     */
    get latitudeInDegrees() {
        return this.latitude;
    } // compat api
    /**
     * Returns the longitude in degrees.
     * @deprecated Use the [[longitude]] property instead.
     */
    get longitudeInDegrees() {
        return this.longitude;
    } // compat api
    /**
     * The latitude in the degrees.
     */
    get lat() {
        return this.latitude;
    }
    /**
     * The longitude in the degrees.
     */
    get lng() {
        return this.longitude;
    }
    /**
     * Returns `true` if this `GeoCoordinates` is valid; returns `false` otherwise.
     */
    isValid() {
        return !isNaN(this.latitude) && !isNaN(this.longitude);
    }
    /**
     * Returns the normalized `GeoCoordinates`.
     */
    normalized() {
        let { latitude, longitude } = this;
        if (isNaN(latitude) || isNaN(longitude)) {
            return this;
        }
        if (longitude < -180 || longitude > 180) {
            longitude = mod(longitude + 180, 360) - 180;
        }
        latitude = THREE.MathUtils.clamp(latitude, -90, 90);
        return new GeoCoordinates(latitude, longitude, this.altitude);
    }
    /**
     * Returns `true` if this `GeoCoordinates` is equal to the other.
     *
     * @param other - GeoCoordinatesLike to compare to.
     */
    equals(other) {
        return (this.latitude === other.latitude &&
            this.longitude === other.longitude &&
            this.altitude === other.altitude);
    }
    /**
     * Copy values from the other.
     *
     * @param other - GeoCoordinatesLike to copy all values from.
     */
    copy(other) {
        this.latitude = other.latitude;
        this.longitude = other.longitude;
        this.altitude = other.altitude;
        return this;
    }
    /**
     * Clones this `GeoCoordinates`.
     */
    clone() {
        return new GeoCoordinates(this.latitude, this.longitude, this.altitude);
    }
    /**
     * Returns this {@link GeoCoordinates} as {@link LatLngLike} literal.
     */
    toLatLng() {
        return { lat: this.latitude, lng: this.longitude };
    }
    /**
     * Converts this {@link GeoCoordinates} to a [[GeoPointLike]].
     */
    toGeoPoint() {
        return this.altitude !== undefined
            ? [this.longitude, this.latitude, this.altitude]
            : [this.longitude, this.latitude];
    }
    /**
     * Returns the minimum longitude span from this `GeoCoordinates` to another.
     *
     * @param other - The other GeoCoordinatesLike defining the longitude span.
     */
    minLongitudeSpanTo(other) {
        const minLongitude = Math.min(this.longitude, other.longitude);
        const maxLongitude = Math.max(this.longitude, other.longitude);
        return Math.min(maxLongitude - minLongitude, 360 + minLongitude - maxLongitude);
    }
}
exports.GeoCoordinates = GeoCoordinates;
//# sourceMappingURL=GeoCoordinates.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isGeoCoordinatesLike = void 0;
/**
 * Type guard to assert that `object` conforms to {@link GeoCoordinatesLike} data interface.
 */
function isGeoCoordinatesLike(object) {
    return (object &&
        typeof object.latitude === "number" &&
        typeof object.longitude === "number" &&
        (typeof object.altitude === "number" || typeof object.altitude === "undefined"));
}
exports.isGeoCoordinatesLike = isGeoCoordinatesLike;
//# sourceMappingURL=GeoCoordinatesLike.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoPointLike.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoPointLike.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isGeoPointLike = void 0;
/**
 * Type guard to assert that `object` conforms to [[GeoPointLike]] interface.
 */
function isGeoPointLike(geoPoint) {
    if (Array.isArray(geoPoint)) {
        const [longitude, latitude, altitude] = geoPoint;
        return (typeof longitude === "number" &&
            typeof latitude === "number" &&
            (altitude === undefined || typeof altitude === "number"));
    }
    return false;
}
exports.isGeoPointLike = isGeoPointLike;
//# sourceMappingURL=GeoPointLike.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoPolygon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoPolygon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoPolygon = exports.isAntimeridianCrossing = void 0;
/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const three_1 = __webpack_require__(/*! three */ "three");
const GeoBox_1 = __webpack_require__(/*! ./GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js");
const GeoCoordinates_1 = __webpack_require__(/*! ./GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const GeoCoordLike_1 = __webpack_require__(/*! ./GeoCoordLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordLike.js");
function computeLonSpanAcrossGreewich(lonA, lonB) {
    return Math.max(lonA, lonB) - Math.min(lonA, lonB);
}
function isLeftToRightAntimeridianCrossing(lonStart, lonEnd) {
    return lonStart > 0 && lonEnd < 0 && computeLonSpanAcrossGreewich(lonStart, lonEnd) > 180;
}
function isRightToLeftAntimeridianCrossing(lonStart, lonEnd) {
    return isLeftToRightAntimeridianCrossing(lonEnd, lonStart);
}
function isAntimeridianCrossing(lonStart, lonEnd) {
    return (Math.sign(lonStart) === -Math.sign(lonEnd) &&
        computeLonSpanAcrossGreewich(lonStart, lonEnd) > 180);
}
exports.isAntimeridianCrossing = isAntimeridianCrossing;
/**
 * A GeoPolygon in 2D Space (altitudes will be ignored).
 * Coordinates are expected in counter-clockwise order, for convex polygons a sorting is
 * available.
 * Clockwise ordered or selfintersecting Polygons might lead to no or unexpected results.
 *
 * @beta @internal
 */
class GeoPolygon {
    /**
     * Creates a GeoPolygon instance
     *
     * @param coordinates An array of GeoCoordinates acting as the Vertices of the Polygon.
     * @param needsSort  If `true` it will sort the coordinates in ccw order, this will only
     *  result correctly for convex polygons @default false
     * @param needsWrapping  If `true` it will wrap around coordinates crossing the antemeridian.
     * Only supported for polygons with sides that don't span more than 180 degrees longitude.
     * @default false
     */
    constructor(coordinates, needsSort = false, needsWrapping = false) {
        this.m_coordinates = coordinates.map(coord => {
            return GeoCoordLike_1.geoCoordLikeToGeoCoordinatesLike(coord);
        });
        if (needsSort) {
            this.sortCCW();
        }
        if (needsWrapping) {
            this.wrapCoordinatesAround();
        }
    }
    get coordinates() {
        return this.m_coordinates;
    }
    /**
     * Gets a BoundingBox for the Polygon
     *
     * Might have unexpected results for twisted or concave Polygons
     */
    getGeoBoundingBox() {
        const centroid = this.getCentroid();
        if (centroid === undefined) {
            //return a BBox without extend if the centroid could not be generated
            return GeoBox_1.GeoBox.fromCoordinates(this.coordinates[0], this.coordinates[0]);
        }
        const { east, west } = this.getEastAndWest(centroid);
        const { north, south } = this.getNorthAndSouth();
        return GeoBox_1.GeoBox.fromCoordinates(new GeoCoordinates_1.GeoCoordinates(south, west), new GeoCoordinates_1.GeoCoordinates(north, east));
    }
    /**
     * Gets the Centroid for the Polygon
     *
     * Might be undefined or with unexpected results for twisted or concave Polygons.
     */
    getCentroid() {
        const area = this.getArea();
        if (area === 0) {
            return undefined;
        }
        let latitude = 0;
        let longitude = 0;
        let f;
        let previousIndex = this.m_coordinates.length - 1;
        this.m_coordinates.forEach((coordinate, index) => {
            const previousCoordinate = this.m_coordinates[previousIndex];
            f =
                coordinate.latitude * previousCoordinate.longitude -
                    previousCoordinate.latitude * coordinate.longitude;
            latitude += (coordinate.latitude + previousCoordinate.latitude) * f;
            longitude += (coordinate.longitude + previousCoordinate.longitude) * f;
            previousIndex = index;
        });
        f = area * 6;
        return new GeoCoordinates_1.GeoCoordinates(latitude / f, area < 0 /* antimeridian crossing */ ? -180 + longitude / f : longitude / f);
    }
    sortCCW() {
        const polyCenter = this.getPolyAverageCenter();
        if (!polyCenter) {
            return;
        }
        //sorts by angle from x-axis
        this.m_coordinates.sort((a, b) => {
            const veca = new three_1.Vector2(a.latitude - polyCenter.latitude, a.longitude - polyCenter.longitude).normalize();
            const vecb = new three_1.Vector2(b.latitude - polyCenter.latitude, b.longitude - polyCenter.longitude).normalize();
            return vecb.angle() - veca.angle();
        });
    }
    wrapCoordinatesAround() {
        const firstAntimerCrossIndex = this.m_coordinates.findIndex((val, index) => {
            const prevLonIndex = index === 0 ? this.m_coordinates.length - 1 : index - 1;
            const prevLon = this.m_coordinates[prevLonIndex].longitude;
            const lon = val.longitude;
            return isLeftToRightAntimeridianCrossing(prevLon, lon);
        });
        if (firstAntimerCrossIndex < 0) {
            return;
        }
        let wrapAround = true;
        for (let i = 0; i < this.m_coordinates.length; i++) {
            const index = (firstAntimerCrossIndex + i) % this.m_coordinates.length;
            const currentLon = this.m_coordinates[index].longitude;
            const nextLon = this.m_coordinates[(index + 1) % this.m_coordinates.length].longitude;
            if (wrapAround) {
                this.m_coordinates[index].longitude += 360;
            }
            if (isRightToLeftAntimeridianCrossing(currentLon, nextLon)) {
                wrapAround = false;
            }
            else if (isLeftToRightAntimeridianCrossing(currentLon, nextLon)) {
                wrapAround = true;
            }
        }
    }
    getPolyAverageCenter() {
        const polySum = this.m_coordinates.reduce((prev, curr) => {
            return new GeoCoordinates_1.GeoCoordinates(prev.latitude + curr.latitude, prev.longitude + curr.longitude);
        });
        //create an average center point
        return new GeoCoordinates_1.GeoCoordinates(polySum.latitude / this.m_coordinates.length, polySum.longitude / this.m_coordinates.length);
    }
    getArea() {
        let area = 0;
        let previousIndex = this.m_coordinates.length - 1;
        this.m_coordinates.forEach((coordinate, index) => {
            const previousCoordinate = this.m_coordinates[previousIndex];
            area += coordinate.latitude * previousCoordinate.longitude;
            area -= coordinate.longitude * previousCoordinate.latitude;
            previousIndex = index;
        });
        return (area /= 2);
    }
    getEastAndWest(center) {
        let west = center.longitude;
        let east = center.longitude;
        let previousIndex = this.m_coordinates.length - 1;
        this.m_coordinates.forEach((coordinate, index) => {
            const previousCoordinate = this.m_coordinates[previousIndex];
            previousIndex = index;
            const veca = new three_1.Vector2(coordinate.latitude - center.latitude, coordinate.longitude - center.longitude).normalize();
            const vecb = new three_1.Vector2(previousCoordinate.latitude - center.latitude, previousCoordinate.longitude - center.longitude).normalize();
            let ccw = Math.sign(vecb.angle() - veca.angle()) === 1;
            // overwrite in case of angle over axis
            if (vecb.y >= 0 && veca.y < 0) {
                ccw = true;
            }
            const long = coordinate.longitude;
            if (long < center.longitude) {
                if (ccw) {
                    west = Math.min(west, long);
                }
                else {
                    east = Math.min(east, long);
                }
            }
            else {
                if (ccw) {
                    east = Math.max(east, long);
                }
                else {
                    west = Math.max(west, long);
                }
            }
        });
        return { east, west };
    }
    getNorthAndSouth() {
        let north = GeoCoordinates_1.MIN_LATITUDE;
        let south = GeoCoordinates_1.MAX_LATITUDE;
        this.m_coordinates.forEach((coordinate, index) => {
            north = Math.max(north, coordinate.latitude);
            south = Math.min(south, coordinate.latitude);
        });
        return { north, south };
    }
}
exports.GeoPolygon = GeoPolygon;
//# sourceMappingURL=GeoPolygon.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoPolygonLike.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoPolygonLike.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isGeoPolygonLike = void 0;
/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const GeoCoordLike_1 = __webpack_require__(/*! ./GeoCoordLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordLike.js");
/**
 * Type guard to assert that `object` conforms to {@link GeoPolygonLike} data interface.
 *
 * @beta, @internal
 */
function isGeoPolygonLike(object) {
    if (!object || (!Array.isArray(object.coordinates) && object.coordinates.length > 2)) {
        return false;
    }
    let isValid = true;
    //TODO: this might take a while, not sure this should be that extensive
    object.coordinates.forEach((coord) => {
        if (!GeoCoordLike_1.isGeoCoordLike(object)) {
            isValid = false;
        }
    });
    return isValid;
}
exports.isGeoPolygonLike = isGeoPolygonLike;
//# sourceMappingURL=GeoPolygonLike.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/LatLngLike.js":
/*!************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/LatLngLike.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isLatLngLike = void 0;
/**
 * Type guard to assert that `object` conforms to {@link LatLngLike} interface.
 */
function isLatLngLike(object) {
    return object && typeof object.lat === "number" && typeof object.lng === "number";
}
exports.isLatLngLike = isLatLngLike;
//# sourceMappingURL=LatLngLike.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js":
/*!***************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/Box3Like.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBox3Like = void 0;
/**
 * Returns true if the given object implements the {@link Box3Like} interface.
 *
 * @param object - A valid object.
 */
function isBox3Like(object) {
    const box3 = object;
    return box3.min !== undefined && box3.max !== undefined;
}
exports.isBox3Like = isBox3Like;
//# sourceMappingURL=Box3Like.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/MathUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MathUtils = void 0;
const THREE = __webpack_require__(/*! three */ "three");
var MathUtils;
(function (MathUtils) {
    /**
     * Creates a new empty bounding box.
     *
     * @deprecated Use {@link https://threejs.org/docs/#api/en/math/Box3 | THREE.Box3} instead.
     */
    function newEmptyBox3() {
        return {
            min: { x: Infinity, y: Infinity, z: Infinity },
            max: { x: -Infinity, y: -Infinity, z: -Infinity }
        };
    }
    MathUtils.newEmptyBox3 = newEmptyBox3;
    /**
     * Set the components of the given [Vector3Like] instance.
     *
     * @param x - The x component.
     * @param y - The y component.
     * @param z - The z component.
     * @param v - The [Vector3Like]
     */
    function newVector3(x, y, z, v) {
        if (v === undefined) {
            return { x, y, z };
        }
        v.x = x;
        v.y = y;
        v.z = z;
        return v;
    }
    MathUtils.newVector3 = newVector3;
    /**
     * Copies the vector across.
     *
     * @param from - The vector to copy from.
     * @param to - The resulting [Vector3Like] instance, with the contents copied from from
     */
    function copyVector3(from, to) {
        to.x = from.x;
        to.y = from.y;
        to.z = from.z;
        return to;
    }
    MathUtils.copyVector3 = copyVector3;
    /**
     * Converts an angle measured in degrees to an equivalent value in radians.
     *
     * @param degrees - Value in degrees.
     * @returns Value in radians.
     * @deprecated use THREE.MathUtils.degToRad instead
     */
    MathUtils.degToRad = THREE.MathUtils.degToRad;
    /**
     * Converts an angle measured in radians to an equivalent value in degrees.
     *
     * @param degrees - Value in radians.
     * @returns Value in degrees.
     * @deprecated Use {@link https://threejs.org/docs/#api/en/math/MathUtils.radToDeg
     *                | THREE.MathUtils.radToDeg}.
     */
    MathUtils.radToDeg = THREE.MathUtils.radToDeg;
    /**
     * Ensures that input value fits in a given range.
     *
     * @param value - The value to be clamped.
     * @param min - Minimum value.
     * @param max - Maximum value.
     * @returns Clamped value.
     * @deprecated Use {@link https://threejs.org/docs/#api/en/math/MathUtils.clamp
     *                | THREE.MathUtils.clamp}.
     */
    MathUtils.clamp = THREE.MathUtils.clamp;
    /**
     * Normalize angle in degrees to range `[0, 360)`.
     *
     * @param a - Angle in degrees.
     * @returns Angle in degrees in range `[0, 360)`.
     */
    function normalizeAngleDeg(a) {
        a = a % 360;
        if (a < 0) {
            a = a + 360;
        }
        return a;
    }
    MathUtils.normalizeAngleDeg = normalizeAngleDeg;
    /**
     * Normalize latitude angle in degrees to range `[-180, 180]`.
     *
     * @param a - Latitude angle in degrees.
     * @returns Latitude angle in degrees in range `[-180, 180]`.
     */
    function normalizeLongitudeDeg(a) {
        a = normalizeAngleDeg(a);
        if (a > 180) {
            a = a - 360;
        }
        return a;
    }
    MathUtils.normalizeLongitudeDeg = normalizeLongitudeDeg;
    /**
     * Return the minimal delta between angles `a` and `b` given in degrees.
     *
     * Equivalent to `a - b` in coordinate space with exception vector direction can be reversed
     * that if `abs(a-b) > 180` because trip is shorter in 'other' direction.
     *
     * Useful when interpolating between `b` and `a` in angle space.
     *
     * @param a - Start angle in degrees.
     * @param b - End angle in degrees.
     * @returns Angle that that satisfies condition `a - b - d = 0` in angle space.
     */
    function angleDistanceDeg(a, b) {
        a = normalizeAngleDeg(a);
        b = normalizeAngleDeg(b);
        const d = a - b;
        if (d > 180) {
            return d - 360;
        }
        else if (d <= -180) {
            return d + 360;
        }
        else {
            return d;
        }
    }
    MathUtils.angleDistanceDeg = angleDistanceDeg;
    /**
     * Interpolate linearly between two angles given in degrees.
     *
     * @param p0 - Angle from in degrees
     * @param p1 - Angle to in degrees
     * @param t - Interpolation factor (alpha), in range `0-1`.
     */
    function interpolateAnglesDeg(p0, p1, t) {
        // hand crafted version,
        // see stack for maybe better versions:
        //    https://stackoverflow.com/questions/2708476/rotation-interpolation
        const d = angleDistanceDeg(p1, p0);
        const r = (p0 + d * t) % 360;
        return r;
    }
    MathUtils.interpolateAnglesDeg = interpolateAnglesDeg;
})(MathUtils = exports.MathUtils || (exports.MathUtils = {}));
//# sourceMappingURL=MathUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/OrientedBox3.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrientedBox3 = void 0;
const three_1 = __webpack_require__(/*! three */ "three");
function intersectsSlab(rayDir, p, axis, extent, t) {
    const epsilon = 1e-20;
    const e = axis.dot(p);
    const f = axis.dot(rayDir);
    if (Math.abs(f) < epsilon) {
        // ray parallel to near/far slab lines.
        return Math.abs(e) <= extent;
    }
    // ray intersects near/far slab lines.
    const finv = 1 / f;
    const t1 = (e + extent) * finv;
    const t2 = (e - extent) * finv;
    if (t1 > t2) {
        // t1 is far intersect, t2 is near.
        if (t2 > t.min) {
            t.min = t2;
        }
        if (t1 < t.max) {
            t.max = t1;
        }
    }
    else {
        // t1 is near intersect, t2 is far.
        if (t1 > t.min) {
            t.min = t1;
        }
        if (t2 < t.max) {
            t.max = t2;
        }
    }
    return t.min <= t.max && t.max >= 0;
}
const tmpVec = new three_1.Vector3();
const tmpT = { min: -Infinity, max: Infinity };
class OrientedBox3 {
    /**
     * Creates a new `OrientedBox3`.
     *
     * @hideconstructor
     */
    constructor(position, rotationMatrix, extents) {
        /**
         * The position of the center of this `OrientedBox3`.
         */
        this.position = new three_1.Vector3();
        /**
         * The x-axis of this `OrientedBox3`.
         */
        this.xAxis = new three_1.Vector3(1, 0, 0);
        /**
         * The y-axis of this `OrientedBox3`.
         */
        this.yAxis = new three_1.Vector3(0, 1, 0);
        /**
         * The z-axis of this `OrientedBox3`.
         */
        this.zAxis = new three_1.Vector3(0, 0, 1);
        /**
         * The extents of this `OrientedBox3`.
         */
        this.extents = new three_1.Vector3();
        if (position !== undefined) {
            this.position.copy(position);
        }
        if (rotationMatrix !== undefined) {
            rotationMatrix.extractBasis(this.xAxis, this.yAxis, this.zAxis);
        }
        if (extents !== undefined) {
            this.extents.copy(extents);
        }
    }
    /**
     * Create a copy of this [[OrientedBoundingBox]].
     */
    clone() {
        const newBox = new OrientedBox3();
        newBox.copy(this);
        return newBox;
    }
    /**
     * Copies the values of `other` to this {@link OrientedBox3}.
     * @param other - The other {@link OrientedBox3} to copy.
     */
    copy(other) {
        this.position.copy(other.position);
        this.xAxis.copy(other.xAxis);
        this.yAxis.copy(other.yAxis);
        this.zAxis.copy(other.zAxis);
        this.extents.copy(other.extents);
    }
    /**
     * Gets the center position of this {@link OrientedBox3}.
     *
     * @param center - The returned center position.
     */
    getCenter(center = new three_1.Vector3()) {
        return center.copy(this.position);
    }
    /**
     * Gets the size of this {@link OrientedBox3}.
     *
     * @param size - The returned size.
     */
    getSize(size = new three_1.Vector3()) {
        return size.copy(this.extents).multiplyScalar(2);
    }
    /**
     * Gets the orientation matrix of this `OrientedBox3`.
     * @param matrix - The output orientation matrix.
     */
    getRotationMatrix(matrix = new three_1.Matrix4()) {
        return matrix.makeBasis(this.xAxis, this.yAxis, this.zAxis);
    }
    /**
     * Checks intersection with the given `THREE.Frustum` or array of `THREE.Plane`s.
     *
     * @param frustumOrPlanes - Frustum or array of planes.
     */
    intersects(frustumOrPlanes) {
        const planes = Array.isArray(frustumOrPlanes)
            ? frustumOrPlanes
            : frustumOrPlanes.planes;
        for (const plane of planes) {
            const r = Math.abs(plane.normal.dot(this.xAxis) * this.extents.x) +
                Math.abs(plane.normal.dot(this.yAxis) * this.extents.y) +
                Math.abs(plane.normal.dot(this.zAxis) * this.extents.z);
            const d = plane.distanceToPoint(this.position);
            if (d + r < 0) {
                return false;
            }
        }
        return true;
    }
    /**
     * Checks intersection with the given ray.
     *
     * @param ray - The ray to test.
     * @returns distance from ray origin to intersection point if it exist, undefined otherwise.
     */
    intersectsRay(ray) {
        // Slabs intersection algorithm.
        tmpT.min = -Infinity;
        tmpT.max = Infinity;
        tmpVec.copy(this.position).sub(ray.origin);
        if (!intersectsSlab(ray.direction, tmpVec, this.xAxis, this.extents.x, tmpT)) {
            return undefined;
        }
        if (!intersectsSlab(ray.direction, tmpVec, this.yAxis, this.extents.y, tmpT)) {
            return undefined;
        }
        if (!intersectsSlab(ray.direction, tmpVec, this.zAxis, this.extents.z, tmpT)) {
            return undefined;
        }
        return tmpT.min > 0 ? tmpT.min : tmpT.max;
    }
    /**
     * Returns true if this {@link OrientedBox3} contains the given point.
     *
     * @param point - A valid point.
     */
    contains(point) {
        const dx = point.x - this.position.x;
        const dy = point.y - this.position.y;
        const dz = point.z - this.position.z;
        const x = Math.abs(dx * this.xAxis.x + dy * this.xAxis.y + dz * this.xAxis.z);
        const y = Math.abs(dx * this.yAxis.x + dy * this.yAxis.y + dz * this.yAxis.z);
        const z = Math.abs(dx * this.zAxis.x + dy * this.zAxis.y + dz * this.zAxis.z);
        if (x > this.extents.x || y > this.extents.y || z > this.extents.z) {
            return false;
        }
        return true;
    }
    /**
     * Returns the distance from this {@link OrientedBox3} and the given `point`.
     *
     * @param point - A point.
     */
    distanceToPoint(point) {
        return Math.sqrt(this.distanceToPointSquared(point));
    }
    /**
     * Returns the squared distance from this {@link OrientedBox3} and the given `point`.
     *
     * @param point - A point.
     */
    distanceToPointSquared(point) {
        const d = new three_1.Vector3();
        d.subVectors(point, this.position);
        const lengths = [d.dot(this.xAxis), d.dot(this.yAxis), d.dot(this.zAxis)];
        let result = 0;
        for (let i = 0; i < 3; ++i) {
            const length = lengths[i];
            const extent = this.extents.getComponent(i);
            if (length < -extent) {
                const dd = extent + length;
                result += dd * dd;
            }
            else if (length > extent) {
                const dd = length - extent;
                result += dd * dd;
            }
        }
        return result;
    }
}
exports.OrientedBox3 = OrientedBox3;
//# sourceMappingURL=OrientedBox3.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isOrientedBox3Like = void 0;
/**
 * Returns true if the given object implements the interface {@link OrientedBox3Like}.
 *
 * @param object - The object.
 */
function isOrientedBox3Like(object) {
    const obb = object;
    return (obb.position !== undefined &&
        obb.xAxis !== undefined &&
        obb.yAxis !== undefined &&
        obb.zAxis !== undefined &&
        obb.extents !== undefined);
}
exports.isOrientedBox3Like = isOrientedBox3Like;
//# sourceMappingURL=OrientedBox3Like.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/TransformLike.js":
/*!********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/TransformLike.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isTransformLike = void 0;
/**
 * Returns true if the given object implements the interface {@link TransformLike}.
 *
 * @param object - The object.
 */
function isTransformLike(object) {
    const transform = object;
    return (transform.position !== undefined &&
        transform.xAxis !== undefined &&
        transform.yAxis !== undefined &&
        transform.zAxis !== undefined);
}
exports.isTransformLike = isTransformLike;
//# sourceMappingURL=TransformLike.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/Vector2Like.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/Vector2Like.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isVector2Like = void 0;
function isVector2Like(v) {
    return v && typeof v.x === "number" && typeof v.y === "number";
}
exports.isVector2Like = isVector2Like;
//# sourceMappingURL=Vector2Like.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/Vector3Like.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/Vector3Like.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isVector3Like = void 0;
function isVector3Like(v) {
    return v && typeof v.x === "number" && typeof v.y === "number" && typeof v.z === "number";
}
exports.isVector3Like = isVector3Like;
//# sourceMappingURL=Vector3Like.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EarthConstants = void 0;
class EarthConstants {
}
exports.EarthConstants = EarthConstants;
/** The equatorial circumference in meters. */
EarthConstants.EQUATORIAL_CIRCUMFERENCE = 40075016.6855784861531768177614;
/** The equatorial radius in meters. */
EarthConstants.EQUATORIAL_RADIUS = 6378137.0;
/** The lowest point on earth (Dead Sea) in meters. */
EarthConstants.MIN_ELEVATION = -433.0;
/** The highest point on earth (Mt. Everest) in meters. */
EarthConstants.MAX_ELEVATION = 8848.0;
/** The highest artificial structure (building) on earth, Burj Khalifa tower in Dubai */
EarthConstants.MAX_BUILDING_HEIGHT = 828;
//# sourceMappingURL=EarthConstants.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/EquirectangularProjection.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/EquirectangularProjection.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equirectangularProjection = exports.normalizedEquirectangularProjection = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const GeoBox_1 = __webpack_require__(/*! ../coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js");
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const EarthConstants_1 = __webpack_require__(/*! ./EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
class EquirectangularProjection extends Projection_1.Projection {
    constructor() {
        super(...arguments);
        /** @override */
        this.type = Projection_1.ProjectionType.Planar;
    }
    /** @override */
    getScaleFactor(_worldPoint) {
        return 1;
    }
    /** @override */
    worldExtent(minAltitude, maxAltitude, result) {
        if (!result) {
            result = new THREE.Box3();
        }
        result.min.x = 0.0;
        result.min.y = 0.0;
        result.min.z = minAltitude;
        result.max.x = this.unitScale;
        result.max.y = this.unitScale / 2;
        result.max.z = maxAltitude;
        return result;
    }
    /** @override */
    projectPoint(geoPoint, result) {
        var _a;
        if (result === undefined) {
            result = { x: 0, y: 0, z: 0 };
        }
        result.x =
            (THREE.MathUtils.degToRad(geoPoint.longitude) + Math.PI) *
                EquirectangularProjection.geoToWorldScale *
                this.unitScale;
        result.y =
            (THREE.MathUtils.degToRad(geoPoint.latitude) + Math.PI * 0.5) *
                EquirectangularProjection.geoToWorldScale *
                this.unitScale;
        result.z = (_a = geoPoint.altitude) !== null && _a !== void 0 ? _a : 0;
        return result;
    }
    /** @override */
    unprojectPoint(worldPoint) {
        const geoPoint = GeoCoordinates_1.GeoCoordinates.fromRadians((worldPoint.y * EquirectangularProjection.worldToGeoScale) / this.unitScale -
            Math.PI * 0.5, (worldPoint.x * EquirectangularProjection.worldToGeoScale) / this.unitScale - Math.PI, worldPoint.z);
        return geoPoint;
    }
    /** @override */
    unprojectAltitude(worldPoint) {
        return worldPoint.z;
    }
    /** @override */
    projectBox(geoBox, result) {
        const worldCenter = this.projectPoint(new GeoCoordinates_1.GeoCoordinates(geoBox.center.latitude, geoBox.center.longitude, 0));
        const { latitudeSpanInRadians, longitudeSpanInRadians, altitudeSpan } = geoBox;
        const sizeX = longitudeSpanInRadians * EquirectangularProjection.geoToWorldScale;
        const sizeY = latitudeSpanInRadians * EquirectangularProjection.geoToWorldScale;
        if (!result) {
            result = new THREE.Box3();
        }
        if (Box3Like_1.isBox3Like(result)) {
            result.min.x = worldCenter.x - sizeX * 0.5 * this.unitScale;
            result.min.y = worldCenter.y - sizeY * 0.5 * this.unitScale;
            result.max.x = worldCenter.x + sizeX * 0.5 * this.unitScale;
            result.max.y = worldCenter.y + sizeY * 0.5 * this.unitScale;
            if (altitudeSpan !== undefined) {
                result.min.z = worldCenter.z - altitudeSpan * 0.5;
                result.max.z = worldCenter.z + altitudeSpan * 0.5;
            }
            else {
                result.min.z = 0;
                result.max.z = 0;
            }
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
            result.position.x = worldCenter.x;
            result.position.y = worldCenter.y;
            result.position.z = worldCenter.z;
            result.extents.x = sizeX * 0.5 * this.unitScale;
            result.extents.y = sizeY * 0.5 * this.unitScale;
            result.extents.z = Math.max(Number.EPSILON, (altitudeSpan !== null && altitudeSpan !== void 0 ? altitudeSpan : 0) * 0.5);
        }
        return result;
    }
    /** @override */
    unprojectBox(worldBox) {
        const minGeo = this.unprojectPoint(worldBox.min);
        const maxGeo = this.unprojectPoint(worldBox.max);
        return GeoBox_1.GeoBox.fromCoordinates(minGeo, maxGeo);
    }
    /** @override */
    groundDistance(worldPoint) {
        return worldPoint.z;
    }
    /** @override */
    scalePointToSurface(worldPoint) {
        worldPoint.z = 0;
        return worldPoint;
    }
    /** @override */
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: 1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = 1;
        }
        return normal;
    }
}
EquirectangularProjection.geoToWorldScale = 1.0 / (2.0 * Math.PI);
EquirectangularProjection.worldToGeoScale = (2.0 * Math.PI) / 1.0;
/**
 * Equirectangular {@link Projection} used to convert geo coordinates to unit coordinates and vice
 * versa.
 */
exports.normalizedEquirectangularProjection = new EquirectangularProjection(1);
/**
 * Equirectangular {@link Projection} used to convert geo coordinates to world coordinates and vice
 * versa.
 */
exports.equirectangularProjection = new EquirectangularProjection(EarthConstants_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE);
//# sourceMappingURL=EquirectangularProjection.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/IdentityProjection.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/IdentityProjection.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.identityProjection = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const GeoBox_1 = __webpack_require__(/*! ../coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js");
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
class IdentityProjection extends Projection_1.Projection {
    constructor() {
        super(...arguments);
        /** @override */
        this.type = Projection_1.ProjectionType.Planar;
    }
    /** @override */
    getScaleFactor(_worldPoint) {
        return 1;
    }
    /** @override */
    worldExtent(minAltitude, maxAltitude, result) {
        if (!result) {
            result = new THREE.Box3();
        }
        result.min.x = -Math.PI;
        result.min.y = -Math.PI * 0.5;
        result.min.z = minAltitude;
        result.max.x = Math.PI;
        result.max.y = Math.PI * 0.5;
        result.max.z = maxAltitude;
        return result;
    }
    /** @override */
    projectPoint(geoPoint, result) {
        var _a;
        if (!result) {
            result = { x: 0, y: 0, z: 0 };
        }
        result.x = THREE.MathUtils.degToRad(geoPoint.longitude);
        result.y = THREE.MathUtils.degToRad(geoPoint.latitude);
        result.z = (_a = geoPoint.altitude) !== null && _a !== void 0 ? _a : 0;
        return result;
    }
    /** @override */
    unprojectPoint(worldPoint) {
        const geoPoint = GeoCoordinates_1.GeoCoordinates.fromRadians(worldPoint.y, worldPoint.x, worldPoint.z);
        return geoPoint;
    }
    /** @override */
    unprojectAltitude(worldPoint) {
        return worldPoint.z;
    }
    /** @override */
    projectBox(geoBox, result) {
        if (!result) {
            result = new THREE.Box3();
        }
        const min = this.projectPoint(new GeoCoordinates_1.GeoCoordinates(geoBox.south, geoBox.west, geoBox.minAltitude));
        const max = this.projectPoint(new GeoCoordinates_1.GeoCoordinates(geoBox.north, geoBox.east, geoBox.maxAltitude));
        if (Box3Like_1.isBox3Like(result)) {
            result.min.x = min.x;
            result.min.y = min.y;
            result.min.z = min.z;
            result.max.x = max.x;
            result.max.y = max.y;
            result.max.z = max.z;
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
            result.position.x = (min.x + max.x) * 0.5;
            result.position.y = (min.y + max.y) * 0.5;
            result.position.z = (min.z + max.z) * 0.5;
            result.extents.x = (max.x - min.x) * 0.5;
            result.extents.y = (max.y - min.y) * 0.5;
            result.extents.z = Math.max(Number.EPSILON, (max.z - min.z) * 0.5);
        }
        return result;
    }
    /** @override */
    unprojectBox(worldBox) {
        const minGeo = this.unprojectPoint(worldBox.min);
        const maxGeo = this.unprojectPoint(worldBox.max);
        return GeoBox_1.GeoBox.fromCoordinates(minGeo, maxGeo);
    }
    /** @override */
    groundDistance(worldPoint) {
        return worldPoint.z;
    }
    /** @override */
    scalePointToSurface(worldPoint) {
        worldPoint.z = 0;
        return worldPoint;
    }
    /** @override */
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: 1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = 1;
        }
        return normal;
    }
}
/**
 * Identity {@link Projection} used to convert geo coordinates to unit coordinates and vice versa.
 */
exports.identityProjection = new IdentityProjection(1);
//# sourceMappingURL=IdentityProjection.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.webMercatorProjection = exports.mercatorProjection = exports.MercatorConstants = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const GeoBox_1 = __webpack_require__(/*! ../coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js");
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const GeoCoordinatesLike_1 = __webpack_require__(/*! ../coordinates/GeoCoordinatesLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const EarthConstants_1 = __webpack_require__(/*! ./EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
class MercatorProjection extends Projection_1.Projection {
    constructor() {
        super(...arguments);
        /** @override */
        this.type = Projection_1.ProjectionType.Planar;
    }
    static clamp(val, min, max) {
        return Math.min(Math.max(min, val), max);
    }
    static latitudeClamp(latitude) {
        return MercatorProjection.clamp(latitude, -MercatorConstants.MAXIMUM_LATITUDE, MercatorConstants.MAXIMUM_LATITUDE);
    }
    static latitudeProject(latitude) {
        return Math.log(Math.tan(Math.PI * 0.25 + latitude * 0.5)) / Math.PI;
    }
    static latitudeClampProject(latitude) {
        return MercatorProjection.latitudeProject(MercatorProjection.latitudeClamp(latitude));
    }
    static unprojectLatitude(y) {
        return 2.0 * Math.atan(Math.exp(Math.PI * y)) - Math.PI * 0.5;
    }
    /** @override */
    getScaleFactor(worldPoint) {
        return Math.cosh(2 * Math.PI * (worldPoint.y / this.unitScale - 0.5));
    }
    /** @override */
    worldExtent(minAltitude, maxAltitude, result) {
        if (!result) {
            result = new THREE.Box3();
        }
        result.min.x = 0;
        result.min.y = 0;
        result.min.z = minAltitude;
        result.max.x = this.unitScale;
        result.max.y = this.unitScale;
        result.max.z = maxAltitude;
        return result;
    }
    /** @override */
    projectPoint(geoPointLike, result) {
        var _a;
        let geoPoint;
        if (geoPointLike instanceof GeoCoordinates_1.GeoCoordinates) {
            geoPoint = geoPointLike;
        }
        else {
            geoPoint = new GeoCoordinates_1.GeoCoordinates(geoPointLike.latitude, geoPointLike.longitude, geoPointLike.altitude);
        }
        if (!result) {
            result = { x: 0, y: 0, z: 0 };
        }
        result.x = ((geoPoint.longitude + 180) / 360) * this.unitScale;
        result.y =
            (MercatorProjection.latitudeClampProject(geoPoint.latitudeInRadians) * 0.5 + 0.5) *
                this.unitScale;
        result.z = (_a = geoPoint.altitude) !== null && _a !== void 0 ? _a : 0;
        return result;
    }
    /** @override */
    unprojectPoint(worldPoint) {
        const geoPoint = GeoCoordinates_1.GeoCoordinates.fromRadians(MercatorProjection.unprojectLatitude((worldPoint.y / this.unitScale - 0.5) * 2.0), (worldPoint.x / this.unitScale) * 2 * Math.PI - Math.PI, worldPoint.z);
        return geoPoint;
    }
    /** @override */
    unprojectAltitude(worldPoint) {
        return worldPoint.z;
    }
    /** @override */
    projectBox(geoBox, result) {
        var _a;
        const worldCenter = this.projectPoint(geoBox.center);
        const worldNorth = (MercatorProjection.latitudeClampProject(geoBox.northEast.latitudeInRadians) * 0.5 +
            0.5) *
            this.unitScale;
        const worldSouth = (MercatorProjection.latitudeClampProject(geoBox.southWest.latitudeInRadians) * 0.5 +
            0.5) *
            this.unitScale;
        const worldYCenter = (worldNorth + worldSouth) * 0.5;
        worldCenter.y = worldYCenter;
        const latitudeSpan = worldNorth - worldSouth;
        const longitudeSpan = (geoBox.longitudeSpan / 360) * this.unitScale;
        if (!result) {
            result = new THREE.Box3();
        }
        if (Box3Like_1.isBox3Like(result)) {
            result.min.x = worldCenter.x - longitudeSpan * 0.5;
            result.min.y = worldCenter.y - latitudeSpan * 0.5;
            result.max.x = worldCenter.x + longitudeSpan * 0.5;
            result.max.y = worldCenter.y + latitudeSpan * 0.5;
            const altitudeSpan = geoBox.altitudeSpan;
            if (altitudeSpan !== undefined) {
                result.min.z = worldCenter.z - altitudeSpan * 0.5;
                result.max.z = worldCenter.z + altitudeSpan * 0.5;
            }
            else {
                result.min.z = 0;
                result.max.z = 0;
            }
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
            result.position.x = worldCenter.x;
            result.position.y = worldCenter.y;
            result.position.z = worldCenter.z;
            result.extents.x = longitudeSpan * 0.5;
            result.extents.y = latitudeSpan * 0.5;
            result.extents.z = Math.max(Number.EPSILON, ((_a = geoBox.altitudeSpan) !== null && _a !== void 0 ? _a : 0) * 0.5);
        }
        else {
            throw new Error("invalid bounding box");
        }
        return result;
    }
    /** @override */
    unprojectBox(worldBox) {
        const minGeo = this.unprojectPoint(worldBox.min);
        const maxGeo = this.unprojectPoint(worldBox.max);
        const geoBox = GeoBox_1.GeoBox.fromCoordinates(minGeo, maxGeo);
        return geoBox;
    }
    /** @override */
    groundDistance(worldPoint) {
        return worldPoint.z;
    }
    /** @override */
    scalePointToSurface(worldPoint) {
        worldPoint.z = 0;
        return worldPoint;
    }
    /** @override */
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: 1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = 1;
        }
        return normal;
    }
    /** @override */
    reprojectPoint(sourceProjection, worldPos, result) {
        // this implementation of [[reprojectPoint]] supports both
        // [[WebMercatorProjection]] and [[MercatorProjection]]. The only
        // difference betweeen these two variants of WEB Mercator
        // is in the orientation of the Y axis, so we just flip Y coordinates
        // when reprojecting between them.
        if (sourceProjection !== this &&
            (sourceProjection === exports.webMercatorProjection || sourceProjection === exports.mercatorProjection)) {
            if (result === undefined) {
                result = {};
            }
            result.x = worldPos.x;
            result.y = this.unitScale - worldPos.y;
            result.z = worldPos.z;
            return result;
        }
        return super.reprojectPoint(sourceProjection, worldPos, result);
    }
}
class WebMercatorProjection extends MercatorProjection {
    /** @override */
    projectPoint(geoPointLike, result) {
        var _a;
        let geoPoint;
        if (geoPointLike instanceof GeoCoordinates_1.GeoCoordinates) {
            geoPoint = geoPointLike;
        }
        else {
            geoPoint = new GeoCoordinates_1.GeoCoordinates(geoPointLike.latitude, geoPointLike.longitude, geoPointLike.altitude);
        }
        /*
         * The following tslint:disable is due to the fact that the [[WorldCoordinates]]
         * might be a concrete class which is not available at runtime.
         * Consider the following example:
         *
         *  const x: THREE.Vector3 = new THREE.Vector3(0,0,0);
         *  const result = EquirectangularProjection.projectPoint<THREE.Vector3>(x);
         *
         * Note: type of `result` is Vector3Like and not as expected: THREE.Vector3!
         */
        if (!result) {
            result = { x: 0, y: 0, z: 0 };
        }
        result.x = ((geoPoint.longitude + 180) / 360) * this.unitScale;
        const sy = Math.sin(MercatorProjection.latitudeClamp(geoPoint.latitudeInRadians));
        result.y = (0.5 - Math.log((1 + sy) / (1 - sy)) / (4 * Math.PI)) * this.unitScale;
        result.z = (_a = geoPoint.altitude) !== null && _a !== void 0 ? _a : 0;
        return result;
    }
    /** @override */
    unprojectPoint(worldPoint) {
        const x = worldPoint.x / this.unitScale - 0.5;
        const y = 0.5 - worldPoint.y / this.unitScale;
        const longitude = 360 * x;
        const latitude = 90 - (360 * Math.atan(Math.exp(-y * 2 * Math.PI))) / Math.PI;
        return new GeoCoordinates_1.GeoCoordinates(latitude, longitude, worldPoint.z);
    }
    /** @override */
    projectBox(geoBox, result) {
        const r = super.projectBox(geoBox, result);
        if (Box3Like_1.isBox3Like(r)) {
            // Invert the y axis for web mercator, this means that max => min & min => max
            const maxY = r.max.y;
            r.max.y = this.unitScale - r.min.y;
            r.min.y = this.unitScale - maxY;
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(r)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, r.xAxis);
            MathUtils_1.MathUtils.newVector3(0, -1, 0, r.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, -1, r.zAxis);
            r.position.y = this.unitScale - r.position.y;
        }
        return r;
    }
    /** @override */
    unprojectBox(worldBox) {
        const minGeo = this.unprojectPoint(worldBox.min);
        const maxGeo = this.unprojectPoint(worldBox.max);
        const geoBox = new GeoBox_1.GeoBox(new GeoCoordinates_1.GeoCoordinates(maxGeo.latitude, minGeo.longitude, minGeo.altitude), new GeoCoordinates_1.GeoCoordinates(minGeo.latitude, maxGeo.longitude, maxGeo.altitude));
        return geoBox;
    }
    /** @override */
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: -1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = -1;
        }
        return normal;
    }
    /** @override */
    localTangentSpace(point, result) {
        if (GeoCoordinatesLike_1.isGeoCoordinatesLike(point)) {
            this.projectPoint(point, result.position);
        }
        else {
            MathUtils_1.MathUtils.copyVector3(point, result.position);
        }
        MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
        MathUtils_1.MathUtils.newVector3(0, -1, 0, result.yAxis);
        MathUtils_1.MathUtils.newVector3(0, 0, -1, result.zAxis);
        return result;
    }
}
class MercatorConstants {
}
exports.MercatorConstants = MercatorConstants;
// Math.atan(Math.sinh(Math.PI))
MercatorConstants.MAXIMUM_LATITUDE = 1.4844222297453323;
/**
 * Mercator {@link Projection} used to convert geo coordinates to world coordinates and vice versa.
 */
exports.mercatorProjection = new MercatorProjection(EarthConstants_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE);
/**
 * Web Mercator {@link Projection} used to convert geo coordinates to world coordinates
 * and vice versa.
 */
exports.webMercatorProjection = new WebMercatorProjection(EarthConstants_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE);
//# sourceMappingURL=MercatorProjection.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/Projection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Projection = exports.ProjectionType = void 0;
const GeoCoordinatesLike_1 = __webpack_require__(/*! ../coordinates/GeoCoordinatesLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
/**
 * The type of projection.
 */
var ProjectionType;
(function (ProjectionType) {
    /**
     * A type of [Projection] with zero curvature.
     */
    ProjectionType[ProjectionType["Planar"] = 0] = "Planar";
    /**
     * A spherical [Projection].
     */
    ProjectionType[ProjectionType["Spherical"] = 1] = "Spherical";
})(ProjectionType = exports.ProjectionType || (exports.ProjectionType = {}));
/**
 * `Projection` is used to convert positions from geo coordinates to world coordinates and vice
 * versa.
 */
class Projection {
    /**
     * Constructs the Projection
     *
     * @param unitScale - How to transform the projected coordinates to world units.
     */
    constructor(unitScale) {
        this.unitScale = unitScale;
        //Prevent empty constructor error.
    }
    /**
     * Gets the {@link TransformLike} of the local tangent space at the given point.
     *
     * @param point - The geo / world coordinates.
     * @param result - The {@link TransformLike}.
     */
    localTangentSpace(point, result) {
        if (GeoCoordinatesLike_1.isGeoCoordinatesLike(point)) {
            this.projectPoint(point, result.position);
        }
        else {
            MathUtils_1.MathUtils.copyVector3(point, result.position);
        }
        MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
        MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
        MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
        return result;
    }
    /**
     * Reproject a world position from the given source {@link Projection}.
     * Implementations should be aware of worldPos and result may be one object
     *
     * @param sourceProjection - The source projection.
     * @param worldPos - A valid position in the world space defined by the source projection.
     * @param result - The resulting position reprojected using this {@link Projection}.
     * @hidden
     */
    reprojectPoint(sourceProjection, worldPos, result) {
        if (sourceProjection === this) {
            if (result === undefined) {
                return { x: worldPos.x, y: worldPos.y, z: worldPos.z };
            }
            result.x = worldPos.x;
            result.y = worldPos.y;
            result.z = worldPos.z;
            return result;
        }
        return this.projectPoint(sourceProjection.unprojectPoint(worldPos), result);
    }
}
exports.Projection = Projection;
//# sourceMappingURL=Projection.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/SphereProjection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/SphereProjection.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sphereProjection = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const GeoCoordinatesLike_1 = __webpack_require__(/*! ../coordinates/GeoCoordinatesLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const EarthConstants_1 = __webpack_require__(/*! ./EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js");
const MercatorProjection_1 = __webpack_require__(/*! ./MercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
/**
 * Transforms the given vector using the provided basis.
 */
function apply(xAxis, yAxis, zAxis, v) {
    const x = xAxis.x * v.x + yAxis.x * v.y + zAxis.x * v.z;
    const y = xAxis.y * v.x + yAxis.y * v.y + zAxis.y * v.z;
    const z = xAxis.z * v.x + yAxis.z * v.y + zAxis.z * v.z;
    v.x = x;
    v.y = y;
    v.z = z;
    return v;
}
/**
 * Returns the quadrants for the given longitude. The quadrant is defined as:
 *  - quadrant(+Math.PI * -1.0) = 0
 *  - quadrant(+Math.PI * -0.5) = 1
 *  - quadrant(+Math.PI *  0.0) = 2
 *  - quadrant(+Math.PI *  0.5) = 3
 *  - quadrant(+Math.PI *  1.0) = 4
 *
 * @param longitude - The longitude in radians.
 */
function getLongitudeQuadrant(longitude) {
    const oneOverPI = 1 / Math.PI;
    const quadrantIndex = Math.floor(2 * (longitude * oneOverPI + 1));
    return THREE.MathUtils.clamp(quadrantIndex, 0, 4);
}
function lengthOfVector3(worldPoint) {
    const d = Math.sqrt(worldPoint.x * worldPoint.x + worldPoint.y * worldPoint.y + worldPoint.z * worldPoint.z);
    return d;
}
/**
 * Creates a Box3 enclosing the geobox.
 *
 * @param geoBox - Ghe given geobox
 * @param worldBox - The resulting axis aligned bounding box.
 */
function makeBox3(geoBox, worldBox, unitScale) {
    var _a;
    const halfEquatorialRadius = (unitScale + ((_a = geoBox.maxAltitude) !== null && _a !== void 0 ? _a : 0)) * 0.5;
    const minLongitude = THREE.MathUtils.degToRad(geoBox.west);
    const maxLongitude = THREE.MathUtils.degToRad(geoBox.east);
    const minLongitudeQuadrant = getLongitudeQuadrant(minLongitude);
    const maxLongitudeQuadrant = getLongitudeQuadrant(maxLongitude);
    let xMin = Math.cos(minLongitude);
    let xMax = xMin;
    let yMin = Math.sin(minLongitude);
    let yMax = yMin;
    for (let quadrantIndex = minLongitudeQuadrant + 1; quadrantIndex <= maxLongitudeQuadrant; quadrantIndex++) {
        const x = ((quadrantIndex + 1) & 1) * ((quadrantIndex & 2) - 1);
        xMin = Math.min(x, xMin);
        xMax = Math.max(x, xMax);
        const y = (quadrantIndex & 1) * ((quadrantIndex & 2) - 1);
        yMin = Math.min(y, yMin);
        yMax = Math.max(y, yMax);
    }
    const cosMaxLongitude = Math.cos(maxLongitude);
    xMin = Math.min(cosMaxLongitude, xMin);
    xMax = Math.max(cosMaxLongitude, xMax);
    const sinMaxLongitude = Math.sin(maxLongitude);
    yMin = Math.min(sinMaxLongitude, yMin);
    yMax = Math.max(sinMaxLongitude, yMax);
    const xCenter = (xMax + xMin) * halfEquatorialRadius;
    const xExtent = (xMax - xMin) * halfEquatorialRadius;
    const yCenter = (yMax + yMin) * halfEquatorialRadius;
    const yExtent = (yMax - yMin) * halfEquatorialRadius;
    // Calculate Z boundaries.
    const minLatitude = THREE.MathUtils.degToRad(geoBox.south);
    const maxLatutide = THREE.MathUtils.degToRad(geoBox.north);
    const zMax = Math.sin(maxLatutide);
    const zMin = Math.sin(minLatitude);
    const zCenter = (zMax + zMin) * halfEquatorialRadius;
    const zExtent = (zMax - zMin) * halfEquatorialRadius;
    worldBox.min.x = xCenter - xExtent;
    worldBox.min.y = yCenter - yExtent;
    worldBox.min.z = zCenter - zExtent;
    worldBox.max.x = xCenter + xExtent;
    worldBox.max.y = yCenter + yExtent;
    worldBox.max.z = zCenter + zExtent;
    return worldBox;
}
/**
 * Computes the spherical projection of the given geo coordinates.
 *
 * @param geoPoint - The geo coordinates.
 * @param worldpoint - The resulting world coordinates.
 */
function project(geoPoint, worldpoint, unitScale) {
    var _a;
    const radius = unitScale + ((_a = geoPoint.altitude) !== null && _a !== void 0 ? _a : 0);
    const latitude = THREE.MathUtils.degToRad(geoPoint.latitude);
    const longitude = THREE.MathUtils.degToRad(geoPoint.longitude);
    const cosLatitude = Math.cos(latitude);
    worldpoint.x = radius * cosLatitude * Math.cos(longitude);
    worldpoint.y = radius * cosLatitude * Math.sin(longitude);
    worldpoint.z = radius * Math.sin(latitude);
    return worldpoint;
}
class SphereProjection extends Projection_1.Projection {
    constructor() {
        super(...arguments);
        /** @override */
        this.type = Projection_1.ProjectionType.Spherical;
    }
    /** @override */
    worldExtent(_minElevation, maxElevation, result = new THREE.Box3()) {
        const radius = this.unitScale + maxElevation;
        result.min.x = -radius;
        result.min.y = -radius;
        result.min.z = -radius;
        result.max.x = radius;
        result.max.y = radius;
        result.max.z = radius;
        return result;
    }
    /** @override */
    projectPoint(geoPoint, result = MathUtils_1.MathUtils.newVector3(0, 0, 0)) {
        return project(geoPoint, result, this.unitScale);
    }
    /** @override */
    unprojectPoint(point) {
        const parallelRadiusSq = point.x * point.x + point.y * point.y;
        const parallelRadius = Math.sqrt(parallelRadiusSq);
        const v = point.z / parallelRadius;
        if (isNaN(v)) {
            return GeoCoordinates_1.GeoCoordinates.fromRadians(0, 0, -this.unitScale);
        }
        const radius = Math.sqrt(parallelRadiusSq + point.z * point.z);
        return GeoCoordinates_1.GeoCoordinates.fromRadians(Math.atan(v), Math.atan2(point.y, point.x), radius - this.unitScale);
    }
    /** @override */
    unprojectAltitude(point) {
        const parallelRadiusSq = point.x * point.x + point.y * point.y + point.z * point.z;
        return Math.sqrt(parallelRadiusSq) - EarthConstants_1.EarthConstants.EQUATORIAL_RADIUS;
    }
    /** @override */
    projectBox(geoBox, result = new THREE.Box3()) {
        var _a, _b;
        if (Box3Like_1.isBox3Like(result)) {
            return makeBox3(geoBox, result, this.unitScale);
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            if (geoBox.longitudeSpan >= 90) {
                const bounds = makeBox3(geoBox, new THREE.Box3(), this.unitScale);
                MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
                MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
                MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
                result.position.x = (bounds.max.x + bounds.min.x) * 0.5;
                result.position.y = (bounds.max.y + bounds.min.y) * 0.5;
                result.position.z = (bounds.max.z + bounds.min.z) * 0.5;
                result.extents.x = (bounds.max.x - bounds.min.x) * 0.5;
                result.extents.y = (bounds.max.y - bounds.min.y) * 0.5;
                result.extents.z = (bounds.max.z - bounds.min.z) * 0.5;
                return result;
            }
            const { south, west, north, east, center: mid } = geoBox;
            const midX = mid.longitude;
            const midY = mid.latitude;
            const cosSouth = Math.cos(THREE.MathUtils.degToRad(south));
            const sinSouth = Math.sin(THREE.MathUtils.degToRad(south));
            const cosWest = Math.cos(THREE.MathUtils.degToRad(west));
            const sinWest = Math.sin(THREE.MathUtils.degToRad(west));
            const cosNorth = Math.cos(THREE.MathUtils.degToRad(north));
            const sinNorth = Math.sin(THREE.MathUtils.degToRad(north));
            const cosEast = Math.cos(THREE.MathUtils.degToRad(east));
            const sinEast = Math.sin(THREE.MathUtils.degToRad(east));
            const cosMidX = Math.cos(THREE.MathUtils.degToRad(midX));
            const sinMidX = Math.sin(THREE.MathUtils.degToRad(midX));
            const cosMidY = Math.cos(THREE.MathUtils.degToRad(midY));
            const sinMidY = Math.sin(THREE.MathUtils.degToRad(midY));
            // Build the orientation of the OBB using the normal vector and its partial derivates.
            // the sperical coordinates of the mid point of the geobox.
            MathUtils_1.MathUtils.newVector3(cosMidX * cosMidY, sinMidX * cosMidY, sinMidY, result.zAxis);
            // the partial derivates of the normal vector.
            MathUtils_1.MathUtils.newVector3(-sinMidX, cosMidX, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(-cosMidX * sinMidY, -sinMidX * sinMidY, cosMidY, result.yAxis);
            let width;
            let minY;
            let maxY;
            if (south >= 0) {
                // abs(dot(southWest - southEast, xAxis))
                width = Math.abs(cosSouth * (cosMidX * (sinWest - sinEast) + sinMidX * (cosEast - cosWest)));
                // dot(south, yAxis)
                minY = cosMidY * sinSouth - sinMidY * cosSouth;
                // dot(northEast, zAxis)
                maxY =
                    cosMidY * sinNorth -
                        sinMidY * cosNorth * (cosMidX * cosEast + sinMidX * sinEast);
            }
            else {
                if (north <= 0) {
                    // abs(dot(northWest - northEast, xAxis))
                    width = Math.abs(cosNorth * (cosMidX * (sinWest - sinEast) + sinMidX * (cosEast - cosWest)));
                    // dot(north, yAxis)
                    maxY = cosMidY * sinNorth - sinMidY * cosNorth;
                }
                else {
                    // abs(dot(west - east, xAxis))
                    width = Math.abs(cosMidX * (sinWest - sinEast) + sinMidX * (cosEast - cosWest));
                    // dot(northEast, yAxis)
                    maxY =
                        cosMidY * sinNorth -
                            sinMidY * cosNorth * (sinMidX * sinEast + cosMidX * cosEast);
                }
                // dot(southEast, yAxis)
                minY =
                    cosMidY * sinSouth -
                        sinMidY * cosSouth * (cosMidX * cosEast + sinMidX * sinEast);
            }
            const rMax = (this.unitScale + ((_a = geoBox.maxAltitude) !== null && _a !== void 0 ? _a : 0)) * 0.5;
            const rMin = (this.unitScale + ((_b = geoBox.minAltitude) !== null && _b !== void 0 ? _b : 0)) * 0.5;
            // min(dot(southEast, zAxis), dot(northEast, zAxis))
            const d = cosMidY * (cosMidX * cosEast + sinMidX * sinEast);
            const minZ = Math.min(cosNorth * d + sinNorth * sinMidY, cosSouth * d + sinSouth * sinMidY);
            MathUtils_1.MathUtils.newVector3(width * rMax, (maxY - minY) * rMax, rMax - minZ * rMin, result.extents);
            MathUtils_1.MathUtils.newVector3(0, (minY + maxY) * rMax, rMax + rMax, result.position);
            apply(result.xAxis, result.yAxis, result.zAxis, result.position);
            result.position.x = result.position.x - result.zAxis.x * result.extents.z;
            result.position.y = result.position.y - result.zAxis.y * result.extents.z;
            result.position.z = result.position.z - result.zAxis.z * result.extents.z;
            return result;
        }
        throw new Error("Invalid bounding box");
    }
    /** @override */
    unprojectBox(_worldBox) {
        throw new Error("Method not implemented.");
    }
    /** @override */
    getScaleFactor(_worldPoint) {
        return 1;
    }
    /** @override */
    groundDistance(worldPoint) {
        return lengthOfVector3(worldPoint) - this.unitScale;
    }
    /** @override */
    scalePointToSurface(worldPoint) {
        const scale = this.unitScale / (lengthOfVector3(worldPoint) || 1);
        worldPoint.x *= scale;
        worldPoint.y *= scale;
        worldPoint.z *= scale;
        return worldPoint;
    }
    /** @override */
    surfaceNormal(worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: 0 };
        }
        const scale = 1 / (lengthOfVector3(worldPoint) || 1);
        normal.x = worldPoint.x * scale;
        normal.y = worldPoint.y * scale;
        normal.z = worldPoint.z * scale;
        return normal;
    }
    /** @override */
    reprojectPoint(sourceProjection, worldPos, result) {
        if (sourceProjection === MercatorProjection_1.mercatorProjection || sourceProjection === MercatorProjection_1.webMercatorProjection) {
            const { x, y, z } = worldPos;
            const r = this.unitScale;
            const mx = x / r - Math.PI;
            const my = y / r - Math.PI;
            const w = Math.exp(my);
            const d = w * w;
            const gx = (2 * w) / (d + 1);
            const gy = (d - 1) / (d + 1);
            const scale = r + z;
            if (result === undefined) {
                result = {};
            }
            result.x = Math.cos(mx) * gx * scale;
            result.y = Math.sin(mx) * gx * scale;
            result.z = gy * scale;
            if (sourceProjection === MercatorProjection_1.webMercatorProjection) {
                result.z = -result.z;
            }
            return result;
        }
        return super.reprojectPoint(sourceProjection, worldPos, result);
    }
    /** @override */
    localTangentSpace(point, result) {
        let geoPoint;
        if (GeoCoordinatesLike_1.isGeoCoordinatesLike(point)) {
            this.projectPoint(point, result.position);
            geoPoint = point;
        }
        else {
            MathUtils_1.MathUtils.copyVector3(point, result.position);
            geoPoint = this.unprojectPoint(point);
        }
        const latitude = THREE.MathUtils.degToRad(geoPoint.latitude);
        const longitude = THREE.MathUtils.degToRad(geoPoint.longitude);
        const cosLongitude = Math.cos(longitude);
        const sinLongitude = Math.sin(longitude);
        const cosLatitude = Math.cos(latitude);
        const sinLatitude = Math.sin(latitude);
        MathUtils_1.MathUtils.newVector3(cosLongitude * cosLatitude, sinLongitude * cosLatitude, sinLatitude, result.zAxis);
        MathUtils_1.MathUtils.newVector3(-sinLongitude, cosLongitude, 0, result.xAxis);
        MathUtils_1.MathUtils.newVector3(-cosLongitude * sinLatitude, -sinLongitude * sinLatitude, cosLatitude, result.yAxis);
        return result;
    }
}
exports.sphereProjection = new SphereProjection(EarthConstants_1.EarthConstants.EQUATORIAL_RADIUS);
//# sourceMappingURL=SphereProjection.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/TransverseMercatorProjection.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/TransverseMercatorProjection.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transverseMercatorProjection = exports.TransverseMercatorUtils = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const GeoBox_1 = __webpack_require__(/*! ../coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js");
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const EarthConstants_1 = __webpack_require__(/*! ./EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
/**
 *
 * https://en.wikipedia.org/wiki/Transverse_Mercator_projection
 * http://mathworld.wolfram.com/MercatorProjection.html
 *
 */
class TransverseMercatorProjection extends Projection_1.Projection {
    constructor(unitScale) {
        super(unitScale);
        this.unitScale = unitScale;
        /** @override */
        this.type = Projection_1.ProjectionType.Planar;
        this.m_phi0 = 0;
        this.m_lambda0 = 0;
    }
    /**
     * Like in regular Mercator projection, there are two points on sphere
     * with radius about 5 degrees, that is out of projected space.
     *
     *
     * in regular Mercator these points are:
     *     (90, any), (-90, any)
     *
     * and in transverse Mercator:
     *     (0, 90), (0, -90)
     *
     * So, in transverse we need to compute distnce to poles, and clamp if
     * radius is exceeded
     */
    static clampGeoPoint(geoPoint, _unitScale) {
        const lat = geoPoint.latitude;
        const lon = geoPoint.longitude;
        const r = TransverseMercatorUtils.POLE_RADIUS;
        const rsq = TransverseMercatorUtils.POLE_RADIUS_SQ;
        const nearestQuarter = Math.round(lon / 90);
        const deltaLon = nearestQuarter * 90 - lon;
        if (nearestQuarter % 2 === 0 || Math.abs(deltaLon) > r) {
            return geoPoint;
        }
        const deltaLat = lat - 0;
        const distanceToPoleSq = deltaLon * deltaLon + deltaLat * deltaLat;
        if (distanceToPoleSq < rsq) {
            const distanceToPole = Math.sqrt(distanceToPoleSq);
            const scale = (r - distanceToPole) / distanceToPole;
            // const quarter = ((nearestQuarter % 4) + 4) % 4;
            // const dir = quarter === 1 ? -1 : quarter === 3 ? 1 : 0;
            const dir = 1;
            const offsetLon = deltaLon === 0 && deltaLat === 0 ? r * dir : deltaLon;
            return new GeoCoordinates_1.GeoCoordinates(lat + deltaLat * scale, lon + offsetLon * scale);
        }
        return geoPoint;
    }
    /** @override */
    getScaleFactor(worldPoint) {
        return Math.cosh((worldPoint.x / this.unitScale - 0.5) * 2 * Math.PI);
    }
    /** @override */
    worldExtent(minAltitude, maxAltitude, result) {
        if (!result) {
            result = new THREE.Box3();
        }
        result.min.x = 0;
        result.min.y = 0;
        result.min.z = minAltitude;
        result.max.x = this.unitScale;
        result.max.y = this.unitScale;
        result.max.z = maxAltitude;
        return result;
    }
    /** @override */
    projectPoint(geoPoint, result) {
        var _a;
        if (!result) {
            result = { x: 0, y: 0, z: 0 };
        }
        const clamped = TransverseMercatorProjection.clampGeoPoint(geoPoint, this.unitScale);
        const normalLon = clamped.longitude / 360 + 0.5;
        const offset = normalLon === 1 ? 0 : Math.floor(normalLon);
        const phi = THREE.MathUtils.degToRad(clamped.latitude);
        const lambda = THREE.MathUtils.degToRad(clamped.longitude - offset * 360) - this.m_lambda0;
        const B = Math.cos(phi) * Math.sin(lambda);
        // result.x = 1/2 * Math.log((1 + B) / (1 - B));
        result.x = Math.atanh(B);
        result.y = Math.atan2(Math.tan(phi), Math.cos(lambda)) - this.m_phi0;
        const outScale = 0.5 / Math.PI;
        result.x =
            this.unitScale * (THREE.MathUtils.clamp(result.x * outScale + 0.5, 0, 1) + offset);
        result.y = this.unitScale * THREE.MathUtils.clamp(result.y * outScale + 0.5, 0, 1);
        result.z = (_a = geoPoint.altitude) !== null && _a !== void 0 ? _a : 0;
        return result;
    }
    /** @override */
    unprojectPoint(worldPoint) {
        const tau = Math.PI * 2;
        const nx = worldPoint.x / this.unitScale;
        const ny = worldPoint.y / this.unitScale;
        const offset = nx === 1 ? 0 : Math.floor(nx);
        const x = tau * (nx - 0.5 - offset);
        const y = tau * (ny - 0.5);
        const z = worldPoint.z || 0;
        const D = y + this.m_phi0;
        const phi = Math.asin(Math.sin(D) / Math.cosh(x));
        const lambda = this.m_lambda0 + Math.atan2(Math.sinh(x), Math.cos(D)) + offset * tau;
        const geoPoint = GeoCoordinates_1.GeoCoordinates.fromRadians(phi, lambda, z);
        return geoPoint;
    }
    /** @override */
    projectBox(geoBox, result) {
        const { north, south, east, west } = geoBox;
        const pointsToCheck = [
            geoBox.center,
            geoBox.northEast,
            geoBox.southWest,
            new GeoCoordinates_1.GeoCoordinates(south, east),
            new GeoCoordinates_1.GeoCoordinates(north, west)
        ];
        const E = TransverseMercatorUtils.POLE_EDGE_DEG;
        const containsWestCut = west < -90 && east > -90;
        const containsEastCut = west < 90 && east > 90;
        const containsCenterX = west < 0 && east > 0;
        const containsCenterY = west < E && east > -E && north > 0 && south < 0;
        if (containsWestCut) {
            pointsToCheck.push(new GeoCoordinates_1.GeoCoordinates(north, -90));
            pointsToCheck.push(new GeoCoordinates_1.GeoCoordinates(south, -90));
        }
        if (containsEastCut) {
            pointsToCheck.push(new GeoCoordinates_1.GeoCoordinates(north, 90));
            pointsToCheck.push(new GeoCoordinates_1.GeoCoordinates(south, 90));
        }
        if (containsCenterX) {
            pointsToCheck.push(new GeoCoordinates_1.GeoCoordinates(north, 0));
            pointsToCheck.push(new GeoCoordinates_1.GeoCoordinates(south, 0));
        }
        if (containsCenterY) {
            pointsToCheck.push(new GeoCoordinates_1.GeoCoordinates(0, west));
            pointsToCheck.push(new GeoCoordinates_1.GeoCoordinates(0, east));
        }
        TransverseMercatorUtils.alignLatitude(pointsToCheck, pointsToCheck[0]);
        const projected = pointsToCheck.map(p => this.projectPoint(p));
        const vx = projected.map(p => p.x);
        const vy = projected.map(p => p.y);
        const vz = projected.map(p => p.z);
        const minX = Math.min(...vx);
        const minY = Math.min(...vy);
        const minZ = Math.min(...vz);
        const maxX = Math.max(...vx);
        const maxY = Math.max(...vy);
        const maxZ = Math.max(...vz);
        if (!result) {
            result = new THREE.Box3();
        }
        if (Box3Like_1.isBox3Like(result)) {
            result.min.x = minX;
            result.min.y = minY;
            result.min.z = minZ;
            result.max.x = maxX;
            result.max.y = maxY;
            result.max.z = maxZ;
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
            result.position.x = (minX + maxX) / 2;
            result.position.y = (minY + maxY) / 2;
            result.position.z = (minZ + maxZ) / 2;
            result.extents.x = (maxX - minX) / 2;
            result.extents.y = (maxY - minY) / 2;
            result.extents.z = (maxZ - minZ) / 2;
        }
        else {
            throw new Error("invalid bounding box");
        }
        return result;
    }
    /**
     * There are 8 sub-regions on entire projection space
     * where both longitude and latitude preserve direction.
     * If bounding box hits more than one region, it should be splitted
     * into sub-boxes by regions, (un)projected and then united again.
     *
     *
     * directions in form [latitude / longitude]:
     *    1 ┌─────────|─────────┐
     *      │ dr / dl | dl / ul │
     * 0.75 ----------|----------
     *      │ ur / dr | ul / ur │
     * 0.5  ----------|----------
     *      │ ul / ur | ur / dr │
     * 0.25 ----------|----------
     *      │ dl / ul | dr / dl │
     *      └─────────|─────────┘
     *     0         0.5        1
     *     @override
     */
    unprojectBox(worldBox) {
        const s = this.unitScale;
        const min = worldBox.min;
        const max = worldBox.max;
        const pointsToCheck = [
            { x: (min.x + max.x) / 2, y: (min.y + max.y) / 2, z: 0 },
            min,
            max,
            { x: min.x, y: max.y, z: 0 },
            { x: max.x, y: min.y, z: 0 }
        ];
        const center = 0.5 * s;
        const lowerQ = 0.25 * s;
        const upperQ = 0.75 * s;
        const containsCenterX = min.x < center && max.x > center;
        const containsCenterY = min.y < center && max.y > center;
        const containsLowerQY = min.y < lowerQ && max.y > lowerQ;
        const containsUpperQY = min.y < upperQ && max.y > upperQ;
        if (containsCenterY) {
            pointsToCheck.push({ x: min.x, y: center, z: 0 });
            pointsToCheck.push({ x: max.x, y: center, z: 0 });
            if (containsCenterX) {
                pointsToCheck.push({ x: center, y: center, z: 0 });
            }
        }
        if (containsLowerQY) {
            pointsToCheck.push({ x: min.x, y: lowerQ, z: 0 });
            pointsToCheck.push({ x: max.x, y: lowerQ, z: 0 });
            if (containsCenterX) {
                pointsToCheck.push({ x: center, y: lowerQ, z: 0 });
            }
        }
        if (containsUpperQY) {
            pointsToCheck.push({ x: min.x, y: upperQ, z: 0 });
            pointsToCheck.push({ x: max.x, y: upperQ, z: 0 });
            if (containsCenterX) {
                pointsToCheck.push({ x: center, y: upperQ, z: 0 });
            }
        }
        const geoPoints = pointsToCheck.map(p => this.unprojectPoint(p));
        TransverseMercatorUtils.alignLongitude(geoPoints, geoPoints[0]);
        const latitudes = geoPoints.map(g => g.latitude);
        const longitudes = geoPoints.filter(g => Math.abs(g.latitude) < 90).map(g => g.longitude);
        const altitudes = geoPoints.map(g => { var _a; return (_a = g.altitude) !== null && _a !== void 0 ? _a : 0; });
        const minGeo = new GeoCoordinates_1.GeoCoordinates(Math.min(...latitudes), Math.min(...longitudes), Math.min(...altitudes));
        const maxGeo = new GeoCoordinates_1.GeoCoordinates(Math.max(...latitudes), Math.max(...longitudes), Math.max(...altitudes));
        const geoBox = GeoBox_1.GeoBox.fromCoordinates(minGeo, maxGeo);
        return geoBox;
    }
    /** @override */
    unprojectAltitude(worldPoint) {
        return worldPoint.z;
    }
    /** @override */
    groundDistance(worldPoint) {
        return worldPoint.z;
    }
    /** @override */
    scalePointToSurface(worldPoint) {
        worldPoint.z = 0;
        return worldPoint;
    }
    /** @override */
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: -1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = -1;
        }
        return normal;
    }
}
class TransverseMercatorUtils {
    /**
     * There are two regions on projected space that have same geo coordinates,
     * it's the entire lines   { x: [0..1], y: 0 } and { x: [0..1], y: 1 }
     * they both have geo coordinates of   (0, [-90..+90])
     * and should be aligned somehow to fall into first or second region
     * to make proper bounding boxes, tile bounds, etc.
     */
    static alignLatitude(points, referencePoint) {
        const EPSILON = 1e-9;
        for (const point of points) {
            if (point.latitude === 0) {
                point.latitude = referencePoint.latitude * EPSILON;
            }
        }
    }
    /**
     * There are two regions on projected plane,
     * { x: 0.5, y: [0..0.25] }    and    { x: 0.5, y: [0.75..1] }
     * that represent longitude edge where -180 and +180 met.
     * Points falling in this regions should be aligned to get proper boxes etc.
     */
    static alignLongitude(points, referencePoint) {
        const bad = referencePoint.longitude < 0 ? 180 : -180;
        const good = referencePoint.longitude < 0 ? -180 : 180;
        for (const point of points) {
            if (point.longitude === bad) {
                point.longitude = good;
            }
        }
    }
}
exports.TransverseMercatorUtils = TransverseMercatorUtils;
TransverseMercatorUtils.POLE_EDGE = 1.4844222297453323;
TransverseMercatorUtils.POLE_EDGE_DEG = THREE.MathUtils.radToDeg(TransverseMercatorUtils.POLE_EDGE);
TransverseMercatorUtils.POLE_RADIUS = 90 - TransverseMercatorUtils.POLE_EDGE_DEG;
TransverseMercatorUtils.POLE_RADIUS_SQ = Math.pow(TransverseMercatorUtils.POLE_RADIUS, 2);
/**
 * Transverse Mercator {@link Projection} used to convert geo coordinates to world coordinates
 * and vice versa.
 */
exports.transverseMercatorProjection = new TransverseMercatorProjection(EarthConstants_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE);
//# sourceMappingURL=TransverseMercatorProjection.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/FlatTileBoundingBoxGenerator.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/FlatTileBoundingBoxGenerator.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlatTileBoundingBoxGenerator = void 0;
const THREE = __webpack_require__(/*! three */ "three");
/**
 * `FlatTileBoundingBoxGenerator` generates bounding boxes in world and geo coordinates for a given
 * TilingScheme.
 */
class FlatTileBoundingBoxGenerator {
    /**
     * Creates a new `FlatTileBoundingBoxGenerator` that can generate bounding boxes for the given
     * TilingScheme.
     *
     * @param tilingScheme - The {@link TilingScheme} used to compute bounding boxes.
     * @param minElevation - The minimum elevation in meters.
     * @param maxElevation - The maximum elevation in meters.
     */
    constructor(tilingScheme, minElevation = 0, maxElevation = 0) {
        this.tilingScheme = tilingScheme;
        this.minElevation = minElevation;
        this.maxElevation = maxElevation;
        this.m_tilingScheme = tilingScheme;
        this.m_worldBox = tilingScheme.projection.worldExtent(minElevation, maxElevation);
        const { min, max } = this.m_worldBox;
        this.m_worldDimensions = { x: max.x - min.x, y: max.y - min.y, z: max.z - min.z };
    }
    /**
     * Returns the {@link Projection} of the {@link TilingScheme}.
     */
    get projection() {
        return this.m_tilingScheme.projection;
    }
    /**
     * Returns the {@link SubdivisionScheme} of the {@link TilingScheme}.
     */
    get subdivisionScheme() {
        return this.m_tilingScheme.subdivisionScheme;
    }
    /**
     * Returns the bounding box in world coordinates of the given {@link TileKey}.
     *
     * Example:
     * ```typescript
     * const worldBounds = new THREE.Box3();
     * generator.getWorldBox(geoBox, worldBounds);
     * console.log(worldBounds.getCenter());
     * ```
     *
     * @param tileKey - The TileKey.
     * @param result - The optional object used to store the resulting bounding box in world
     * coordinates.
     */
    getWorldBox(tileKey, result) {
        const level = tileKey.level;
        const levelDimensionX = this.subdivisionScheme.getLevelDimensionX(level);
        const levelDimensionY = this.subdivisionScheme.getLevelDimensionY(level);
        const sizeX = this.m_worldDimensions.x / levelDimensionX;
        const sizeY = this.m_worldDimensions.y / levelDimensionY;
        const originX = this.m_worldBox.min.x + sizeX * tileKey.column;
        const originY = this.m_worldBox.min.y + sizeY * tileKey.row;
        if (!result) {
            result = new THREE.Box3();
        }
        result.min.x = originX;
        result.min.y = originY;
        result.min.z = this.m_worldBox.min.z;
        result.max.x = originX + sizeX;
        result.max.y = originY + sizeY;
        result.max.z = this.m_worldBox.max.z;
        return result;
    }
    /**
     * Returns the bounding box in geo coordinates for the given {@link TileKey}.
     *
     * Example:
     * ```typescript
     * const geoBox = generator.getGeoBox(worldBounds);
     * console.log(geoBox.center);
     * ```
     *
     * @param tileKey - The {@link TileKey}.
     */
    getGeoBox(tileKey) {
        const worldBox = this.getWorldBox(tileKey);
        return this.projection.unprojectBox(worldBox);
    }
}
exports.FlatTileBoundingBoxGenerator = FlatTileBoundingBoxGenerator;
//# sourceMappingURL=FlatTileBoundingBoxGenerator.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/HalfQuadTreeSubdivisionScheme.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/HalfQuadTreeSubdivisionScheme.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.halfQuadTreeSubdivisionScheme = void 0;
class HalfQuadTreeSubdivisionScheme {
    getSubdivisionX() {
        return 2;
    }
    getSubdivisionY(level) {
        return level === 0 ? 1 : 2;
    }
    getLevelDimensionX(level) {
        return 1 << level;
    }
    getLevelDimensionY(level) {
        return level !== 0 ? 1 << (level - 1) : 1;
    }
}
/**
 * A {@link SubdivisionScheme} used to represent half quadtrees.
 * This particular subdivision scheme is
 * used by the HERE tiling scheme.
 */
exports.halfQuadTreeSubdivisionScheme = new HalfQuadTreeSubdivisionScheme();
//# sourceMappingURL=HalfQuadTreeSubdivisionScheme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/HereTilingScheme.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/HereTilingScheme.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hereTilingScheme = void 0;
const EquirectangularProjection_1 = __webpack_require__(/*! ../projection/EquirectangularProjection */ "./node_modules/@here/harp-geoutils/lib/projection/EquirectangularProjection.js");
const HalfQuadTreeSubdivisionScheme_1 = __webpack_require__(/*! ./HalfQuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/HalfQuadTreeSubdivisionScheme.js");
const TilingScheme_1 = __webpack_require__(/*! ./TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js");
/**
 * {@link TilingScheme} used by most of the data published by HERE.
 *
 * The `hereTilingScheme` features a half quadtree subdivision scheme and an equirectangular
 * projection.
 */
exports.hereTilingScheme = new TilingScheme_1.TilingScheme(HalfQuadTreeSubdivisionScheme_1.halfQuadTreeSubdivisionScheme, EquirectangularProjection_1.normalizedEquirectangularProjection);
//# sourceMappingURL=HereTilingScheme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/MercatorTilingScheme.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/MercatorTilingScheme.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mercatorTilingScheme = void 0;
const MercatorProjection_1 = __webpack_require__(/*! ../projection/MercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js");
const QuadTreeSubdivisionScheme_1 = __webpack_require__(/*! ./QuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js");
const TilingScheme_1 = __webpack_require__(/*! ./TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js");
/**
 * The {@link TilingScheme} used by the HERE web tiles.
 *
 * The `mercatorTilingScheme` features a quadtree subdivision scheme and a Mercator projection.
 */
exports.mercatorTilingScheme = new TilingScheme_1.TilingScheme(QuadTreeSubdivisionScheme_1.quadTreeSubdivisionScheme, MercatorProjection_1.mercatorProjection);
//# sourceMappingURL=MercatorTilingScheme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/PolarTilingScheme.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/PolarTilingScheme.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.polarTilingScheme = void 0;
const TransverseMercatorProjection_1 = __webpack_require__(/*! ../projection/TransverseMercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/TransverseMercatorProjection.js");
const QuadTreeSubdivisionScheme_1 = __webpack_require__(/*! ./QuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js");
const TilingScheme_1 = __webpack_require__(/*! ./TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js");
/**
 * A {@link TilingScheme} featuring quadtree subdivision scheme and
 * transverse Mercator projection.
 */
exports.polarTilingScheme = new TilingScheme_1.TilingScheme(QuadTreeSubdivisionScheme_1.quadTreeSubdivisionScheme, TransverseMercatorProjection_1.transverseMercatorProjection);
//# sourceMappingURL=PolarTilingScheme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTree.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/QuadTree.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuadTree = void 0;
const TileKey_1 = __webpack_require__(/*! ./TileKey */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js");
/**
 * A class used to represent a quadtree.
 */
class QuadTree {
    /**
     * Constructs a new `QuadTree` for the given {@link TilingScheme}.
     *
     * Example:
     * ```typescript
     * const quadTree = new QuadTree(hereTilingScheme);
     * const geoBox = quadTree.getGeoBox(tileKey);
     * console.log(geoBox.center);
     * ```
     *
     * @param tilingScheme - The TilingScheme used by this `QuadTree`.
     */
    constructor(tilingScheme) {
        this.tilingScheme = tilingScheme;
    }
    /**
     * Visits this `QuadTree` and invoke the given accept method
     * with the current {@link TileKey} and
     * its bounding box in geo coordinates.
     *
     * Example:
     * ```typescript
     * const geoPos = new GeoCoordinates(latitude, longitude);
     * const quadTree = new QuadTree(hereTilingScheme);
     * quadTree.visit((tileKey, geoBox) => {
     *     if (geoBox.contains(geoPos)) {
     *         console.log("tile", tileKey, "contains", geoPos);
     *         return tileKey.level < 14; // stop visiting the quadtree if the level is >= 14.
     *     }
     *     return false; // stop visiting the quadtree,
     *                   // the tile's geoBox doesn't contain the given coordinates.
     * });
     * ```
     *
     * @param accept - A function that takes a {@link TileKey}
     * and its bounding box in geo coordinates
     * and returns `true` if the visit of the `QuadTree`
     * should continue; otherwise `false`.
     */
    visit(accept) {
        this.visitTileKey(TileKey_1.TileKey.fromRowColumnLevel(0, 0, 0), accept);
    }
    /**
     * Visits the subtree starting from the given tile.
     *
     * @param tileKey - The root of the subtree that should be visited.
     * @param accept - A function that takes a {@link TileKey}
     *                 and its bounding box in geo coordinates
     *                 and returns `true` if the visit of the
     *                 `QuadTree` should continue; otherwise `false`.
     */
    visitTileKey(tileKey, accept) {
        const geoBox = this.tilingScheme.getGeoBox(tileKey);
        if (!accept(tileKey, geoBox)) {
            return;
        }
        for (const subTileKey of this.tilingScheme.getSubTileKeys(tileKey)) {
            this.visitTileKey(subTileKey, accept);
        }
    }
}
exports.QuadTree = QuadTree;
//# sourceMappingURL=QuadTree.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.quadTreeSubdivisionScheme = void 0;
class QuadTreeSubdivisionScheme {
    getSubdivisionX() {
        return 2;
    }
    getSubdivisionY() {
        return 2;
    }
    getLevelDimensionX(level) {
        return 1 << level;
    }
    getLevelDimensionY(level) {
        return 1 << level;
    }
}
/**
 * {@link SubdivisionScheme} representing a quadtree.
 */
exports.quadTreeSubdivisionScheme = new QuadTreeSubdivisionScheme();
//# sourceMappingURL=QuadTreeSubdivisionScheme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/SubTiles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/SubTiles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubTiles = void 0;
const TileKey_1 = __webpack_require__(/*! ./TileKey */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js");
class SubTiles {
    constructor(tileKey, sizeX, sizeY) {
        this.tileKey = tileKey;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    [Symbol.iterator]() {
        return this.sizeX === 2 && this.sizeY === 2
            ? SubTiles.ZCurveIterator(this.tileKey)
            : SubTiles.RowColumnIterator(this.tileKey, this.sizeX, this.sizeY);
    }
}
exports.SubTiles = SubTiles;
(function (SubTiles) {
    function* RowColumnIterator(parentKey, sizeX, sizeY) {
        for (let y = 0; y < sizeY; y++) {
            for (let x = 0; x < sizeX; x++) {
                yield TileKey_1.TileKey.fromRowColumnLevel(parentKey.row * sizeY + y, parentKey.column * sizeX + x, parentKey.level + 1);
            }
        }
    }
    SubTiles.RowColumnIterator = RowColumnIterator;
    function* ZCurveIterator(parentKey) {
        for (let i = 0; i < 4; i++) {
            yield TileKey_1.TileKey.fromRowColumnLevel((parentKey.row << 1) | (i >> 1), (parentKey.column << 1) | (i & 1), parentKey.level + 1);
        }
    }
    SubTiles.ZCurveIterator = ZCurveIterator;
})(SubTiles = exports.SubTiles || (exports.SubTiles = {}));
//# sourceMappingURL=SubTiles.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/SubdivisionScheme.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/SubdivisionScheme.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SubdivisionScheme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileKey = void 0;
/** @hidden */
const powerOfTwo = [
    0x1,
    0x2,
    0x4,
    0x8,
    0x10,
    0x20,
    0x40,
    0x80,
    0x100,
    0x200,
    0x400,
    0x800,
    0x1000,
    0x2000,
    0x4000,
    0x8000,
    0x10000,
    0x20000,
    0x40000,
    0x80000,
    0x100000,
    0x200000,
    0x400000,
    0x800000,
    0x1000000,
    0x2000000,
    0x4000000,
    0x8000000,
    0x10000000,
    0x20000000,
    0x40000000,
    0x80000000,
    0x100000000,
    0x200000000,
    0x400000000,
    0x800000000,
    0x1000000000,
    0x2000000000,
    0x4000000000,
    0x8000000000,
    0x10000000000,
    0x20000000000,
    0x40000000000,
    0x80000000000,
    0x100000000000,
    0x200000000000,
    0x400000000000,
    0x800000000000,
    0x1000000000000,
    0x2000000000000,
    0x4000000000000,
    0x8000000000000,
    0x10000000000000 // Math.pow(2, 52), highest bit that can be set correctly.
];
/**
 * The `TileKey` instances are used to address a tile in a quadtree.
 *
 * A tile key is defined by a row, a column, and a level. The tree has a root at level 0, with one
 * single tile. On every level, each tile is divided into four children (therefore the name
 * quadtree).
 *
 * Within each [[level]], any particular tile is addressed with [[row]] and [[column]]. The number
 * of rows and columns in each level is 2 to the power of the level. This means: On level 0, only
 * one tile exists, [[columnsAtLevel]]() and [[rowsAtLevel]]() are both 1. On level 1, 4 tiles
 * exist, in 2 rows and 2 columns. On level 2 we have 16 tiles, in 4 rows and 4 columns. And so on.
 *
 * A tile key is usually created using [[fromRowColumnLevel]]() method.
 *
 * `TileKey` instances are immutable, all members return new instances of `TileKey` and do not
 * modify the original object.
 *
 * Utility functions like [[parent]](), [[changedLevelBy]](), and [[changedLevelTo]]() allow for
 * easy vertical navigation of the tree. The number of available rows and columns in the tile's
 * level is given with [[rowCount]]() and [[columnCount]]().
 *
 * Tile keys can be created from and converted into various alternative formats:
 *
 *  - [[toQuadKey]]() / [[fromQuadKey]]() - string representation 4-based
 *  - [[toHereTile]]() / [[fromHereTile]]() - string representation 10-based
 *  - [[mortonCode]]() / [[fromMortonCode]]() - number representation
 *
 * Note - as JavaScript's number type can hold 53 bits in its mantissa, only levels up to 26 can be
 * represented in the number representation returned by [[mortonCode]]().
 */
class TileKey {
    /**
     * Constructs a new immutable instance of a `TileKey`.
     *
     * For the better readability, {@link TileKey.fromRowColumnLevel} should be preferred.
     *
     * Note - row and column must not be greater than the maximum rows/columns for the given level.
     *
     * @param row - Represents the row in the quadtree.
     * @param column - Represents the column in the quadtree.
     * @param level - Represents the level in the quadtree.
     */
    constructor(row, column, level) {
        this.row = row;
        this.column = column;
        this.level = level;
    }
    /**
     * Creates a tile key.
     *
     * @param row - The requested row. Must be less than 2 to the power of level.
     * @param column - The requested column. Must be less than 2 to the power of level.
     * @param level - The requested level.
     */
    static fromRowColumnLevel(row, column, level) {
        return new TileKey(row, column, level);
    }
    /**
     * Creates a tile key from a quad string.
     *
     * The quad string can be created with [[toQuadKey]].
     *
     * @param quadkey - The quadkey to convert.
     * @returns A new instance of `TileKey`.
     */
    static fromQuadKey(quadkey) {
        const level = quadkey.length;
        let row = 0;
        let column = 0;
        for (let i = 0; i < quadkey.length; ++i) {
            const mask = 1 << i;
            const d = parseInt(quadkey.charAt(level - i - 1), 10);
            if (d & 0x1) {
                column |= mask;
            }
            if (d & 0x2) {
                row |= mask;
            }
        }
        return TileKey.fromRowColumnLevel(row, column, level);
    }
    /**
     * Creates a tile key from a numeric Morton code representation.
     *
     * You can convert a tile key into a numeric Morton code with [[mortonCode]].
     *
     * @param quadKey64 - The Morton code to be converted.
     * @returns A new instance of {@link TileKey}.
     */
    static fromMortonCode(quadKey64) {
        let level = 0;
        let row = 0;
        let column = 0;
        let quadKey = quadKey64;
        while (quadKey > 1) {
            const mask = 1 << level;
            if (quadKey & 0x1) {
                column |= mask;
            }
            if (quadKey & 0x2) {
                row |= mask;
            }
            level++;
            quadKey = (quadKey - (quadKey & 0x3)) / 4;
        }
        const result = TileKey.fromRowColumnLevel(row, column, level);
        result.m_mortonCode = quadKey64;
        return result;
    }
    /**
     * Creates a tile key from a heretile code string.
     *
     * The string can be created with [[toHereTile]].
     *
     * @param quadkey64 - The string representation of the HERE tile key.
     * @returns A new instance of `TileKey`.
     */
    static fromHereTile(quadkey64) {
        const result = TileKey.fromMortonCode(parseInt(quadkey64, 10));
        result.m_hereTile = quadkey64;
        return result;
    }
    /**
     * Returns the number of available columns at a given level.
     *
     * This is 2 to the power of the level.
     *
     * @param level - The level for which to return the number of columns.
     * @returns The available columns at the given level.
     */
    static columnsAtLevel(level) {
        return Math.pow(2, level);
    }
    /**
     * Returns the number of available rows at a given level.
     *
     * This is 2 to the power of the level.
     *
     * @param level - The level for which to return the number of rows.
     * @returns The available rows at the given level.
     */
    static rowsAtLevel(level) {
        return Math.pow(2, level);
    }
    /**
     * Returns the closest matching `TileKey` in a cartesian coordinate system.
     *
     * @param level - The level for the tile key.
     * @param coordX - The X coordinate.
     * @param coordY - The Y coordinate.
     * @param totalWidth - The maximum X coordinate.
     * @param totalHeight - The maximum Y coordinate.
     * @returns A new tile key at the given level that includes the given coordinates.
     */
    static atCoords(level, coordX, coordY, totalWidth, totalHeight) {
        return TileKey.fromRowColumnLevel(Math.floor(coordY / (totalHeight / TileKey.rowsAtLevel(level))), Math.floor(coordX / (totalWidth / TileKey.columnsAtLevel(level))), level);
    }
    /**
     * Computes the Morton code of the parent tile key of the given Morton code.
     *
     * Note: The parent key of the root key is the root key itself.
     *
     * @param mortonCode - A Morton code, for example, obtained from [[mortonCode]].
     * @returns The Morton code of the parent tile.
     */
    static parentMortonCode(mortonCode) {
        return Math.floor(mortonCode / 4);
    }
    /**
     * Returns a tile key representing the parent of the tile addressed by this tile key.
     *
     * Throws an exception is this tile is already the root.
     */
    parent() {
        if (this.level === 0) {
            throw new Error("Cannot get the parent of the root tile key");
        }
        return TileKey.fromRowColumnLevel(this.row >>> 1, this.column >>> 1, this.level - 1);
    }
    /**
     * Returns a new tile key at a level that differs from this tile's level by delta.
     *
     * Equivalent to `changedLevelTo(level() + delta)`.
     *
     * Note - root key is returned if `delta` is smaller than the level of this tile key.
     *
     * @param delta - The numeric difference between the current level and the requested level.
     */
    changedLevelBy(delta) {
        const level = Math.max(0, this.level + delta);
        let row = this.row;
        let column = this.column;
        if (delta >= 0) {
            row <<= delta;
            column <<= delta;
        }
        else {
            row >>>= -delta;
            column >>>= -delta;
        }
        return TileKey.fromRowColumnLevel(row, column, level);
    }
    /**
     * Returns a new tile key at the requested level.
     *
     * If the requested level is smaller than the tile's level, then the key of an ancestor of this
     * tile is returned. If the requested level is larger than the tile's level, then the key of
     * first child or grandchild of this tile is returned, for example, the child with the lowest
     * row and column number. If the requested level equals this tile's level, then the tile key
     * itself is returned. If the requested level is negative, the root tile key is returned.
     *
     * @param level - The requested level.
     */
    changedLevelTo(level) {
        return this.changedLevelBy(level - this.level);
    }
    /**
     * Converts the tile key to a numeric code representation.
     *
     * You can create a tile key from a numeric Morton code with [[fromMortonCode]].
     *
     * Note - only levels <= 26 are supported.
     */
    mortonCode() {
        if (this.m_mortonCode === undefined) {
            let column = this.column;
            let row = this.row;
            let result = powerOfTwo[this.level << 1];
            for (let i = 0; i < this.level; ++i) {
                if (column & 0x1) {
                    result += powerOfTwo[2 * i];
                }
                if (row & 0x1) {
                    result += powerOfTwo[2 * i + 1];
                }
                column >>>= 1;
                row >>>= 1;
            }
            this.m_mortonCode = result;
        }
        return this.m_mortonCode;
    }
    /**
     * Converts the tile key into a string for using in REST API calls.
     *
     * The string is a quadkey Morton code representation as a string.
     *
     * You can convert back from a quadkey string with [[fromHereTile]].
     */
    toHereTile() {
        if (this.m_hereTile === undefined) {
            this.m_hereTile = this.mortonCode().toString();
        }
        return this.m_hereTile;
    }
    /**
     * Converts the tile key into a string for using in REST API calls.
     *
     * If the tile is the root tile, the quadkey is '-'. Otherwise the string is a number to the
     * base of 4, but without the leading 1, with the following properties:
     *  1. the number of digits equals the level.
     *  2. removing the last digit gives the parent tile's quadkey string, i.e. appending 0,1,2,3
     *     to a quadkey string gives the tiles's children.
     *
     * You can convert back from a quadkey string with [[fromQuadKey]].
     */
    toQuadKey() {
        let result = "";
        for (let i = this.level; i > 0; --i) {
            const mask = 1 << (i - 1);
            const col = (this.column & mask) !== 0;
            const row = (this.row & mask) !== 0;
            if (col && row) {
                result += "3";
            }
            else if (row) {
                result += "2";
            }
            else if (col) {
                result += "1";
            }
            else {
                result += "0";
            }
        }
        return result;
    }
    /**
     * Equality operator.
     *
     * @param qnr - The tile key to compare to.
     * @returns `true` if this tile key has identical row, column and level, `false` otherwise.
     */
    equals(qnr) {
        return this.row === qnr.row && this.column === qnr.column && this.level === qnr.level;
    }
    /**
     * Returns the absolute quadkey that is constructed from its sub quadkey.
     *
     * @param sub - The sub key.
     * @returns The absolute tile key in the quadtree.
     */
    addedSubKey(sub) {
        const subQuad = TileKey.fromQuadKey(sub.length === 0 ? "-" : sub);
        const child = this.changedLevelBy(subQuad.level);
        return TileKey.fromRowColumnLevel(child.row + subQuad.row, child.column + subQuad.column, child.level);
    }
    /**
     * Returns the absolute quadkey that is constructed from its sub HERE tile key.
     *
     * @param sub - The sub HERE key.
     * @returns The absolute tile key in the quadtree.
     */
    addedSubHereTile(sub) {
        const subQuad = TileKey.fromHereTile(sub);
        const child = this.changedLevelBy(subQuad.level);
        return TileKey.fromRowColumnLevel(child.row + subQuad.row, child.column + subQuad.column, child.level);
    }
    /**
     * Returns a sub quadkey that is relative to its parent.
     *
     * This function can be used to generate sub keys that are relative to a parent that is delta
     * levels up in the quadtree.
     *
     * This function can be used to create shortened keys for quads on lower levels if the parent is
     * known.
     *
     * Note - the sub quadkeys fit in a 16-bit unsigned integer if the `delta` is smaller than 8. If
     * `delta` is smaller than 16, the sub quadkey fits into an unsigned 32-bit integer.
     *
     * Deltas larger than 16 are not supported.
     *
     * @param delta - The number of levels relative to its parent quadkey. Must be greater or equal
     * to 0 and smaller than 16.
     * @returns The quadkey relative to its parent that is `delta` levels up the tree.
     */
    getSubHereTile(delta) {
        const key = this.mortonCode();
        const msb = 1 << (delta * 2);
        const mask = msb - 1;
        const result = (key & mask) | msb;
        return result.toString();
    }
    /**
     * Returns the number of available rows in the tile's [[level]].
     *
     * This is 2 to the power of the level.
     */
    rowCount() {
        return TileKey.rowsAtLevel(this.level);
    }
    /**
     * Returns the number of available columns in the tile's [[level]].
     *
     * This is 2 to the power of the level.
     */
    columnCount() {
        return TileKey.columnsAtLevel(this.level);
    }
}
exports.TileKey = TileKey;
//# sourceMappingURL=TileKey.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/TileKeyUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/TileKeyUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileKeyUtils = exports.powerOfTwo = void 0;
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const TileKey_1 = __webpack_require__(/*! ./TileKey */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js");
exports.powerOfTwo = (() => {
    let val = 0.5;
    return new Array(53).fill(0).map(() => (val *= 2));
})();
var TileKeyUtils;
(function (TileKeyUtils) {
    function geoCoordinatesToTileKey(tilingScheme, geoPoint, level) {
        const projection = tilingScheme.projection;
        const worldPoint = projection.projectPoint(geoPoint);
        return worldCoordinatesToTileKey(tilingScheme, worldPoint, level);
    }
    TileKeyUtils.geoCoordinatesToTileKey = geoCoordinatesToTileKey;
    function worldCoordinatesToTileKey(tilingScheme, worldPoint, level) {
        const projection = tilingScheme.projection;
        const subdivisionScheme = tilingScheme.subdivisionScheme;
        const cx = subdivisionScheme.getLevelDimensionX(level);
        const cy = subdivisionScheme.getLevelDimensionY(level);
        const { min, max } = projection.worldExtent(0, 0);
        const worldSizeX = max.x - min.x;
        const worldSizeY = max.y - min.y;
        if (worldPoint.x < min.x || worldPoint.x > max.x) {
            return null;
        }
        if (worldPoint.y < min.y || worldPoint.y > max.y) {
            return null;
        }
        const column = Math.min(cx - 1, Math.floor((cx * (worldPoint.x - min.x)) / worldSizeX));
        const row = Math.min(cy - 1, Math.floor((cy * (worldPoint.y - min.y)) / worldSizeY));
        return TileKey_1.TileKey.fromRowColumnLevel(row, column, level);
    }
    TileKeyUtils.worldCoordinatesToTileKey = worldCoordinatesToTileKey;
    function geoRectangleToTileKeys(tilingScheme, geoBox, level) {
        const wrap = (value, lower, upper) => {
            if (value < lower) {
                return upper - ((lower - value) % (upper - lower));
            }
            return lower + ((value - lower) % (upper - lower));
        };
        const clamp = (x, minVal, maxVal) => {
            return Math.min(Math.max(x, minVal), maxVal);
        };
        // Clamp at the poles and wrap around the international date line.
        const southWestLongitude = wrap(geoBox.southWest.longitudeInRadians, -Math.PI, Math.PI);
        const southWestLatitude = clamp(geoBox.southWest.latitudeInRadians, -(Math.PI * 0.5), Math.PI * 0.5);
        const northEastLongitude = wrap(geoBox.northEast.longitudeInRadians, -Math.PI, Math.PI);
        const northEastLatitude = clamp(geoBox.northEast.latitudeInRadians, -(Math.PI * 0.5), Math.PI * 0.5);
        const minTileKey = TileKeyUtils.geoCoordinatesToTileKey(tilingScheme, GeoCoordinates_1.GeoCoordinates.fromRadians(southWestLatitude, southWestLongitude), level);
        const maxTileKey = TileKeyUtils.geoCoordinatesToTileKey(tilingScheme, GeoCoordinates_1.GeoCoordinates.fromRadians(northEastLatitude, northEastLongitude), level);
        const columnCount = tilingScheme.subdivisionScheme.getLevelDimensionX(level);
        if (!minTileKey || !maxTileKey) {
            throw new Error("Invalid coordinates");
        }
        const minColumn = minTileKey.column;
        let maxColumn = maxTileKey.column;
        // wrap around case
        if (southWestLongitude > northEastLongitude) {
            if (maxColumn !== minColumn) {
                maxColumn += columnCount;
            }
            else {
                // do not duplicate
                maxColumn += columnCount - 1;
            }
        }
        const minRow = Math.min(minTileKey.row, maxTileKey.row);
        const maxRow = Math.max(minTileKey.row, maxTileKey.row);
        const keys = new Array();
        for (let row = minRow; row <= maxRow; ++row) {
            for (let column = minColumn; column <= maxColumn; ++column) {
                keys.push(TileKey_1.TileKey.fromRowColumnLevel(row, column % columnCount, level));
            }
        }
        return keys;
    }
    TileKeyUtils.geoRectangleToTileKeys = geoRectangleToTileKeys;
    /**
     * Creates a unique key based on the supplied parameters. Note, the uniqueness is bounded by the
     * bitshift. The [[TileKey.mortonCode()]] supports currently up to 26 levels (this is because
     * 26*2 equals 52, and 2^52 is the highest bit that can be set in an integer in Javascript), the
     * bitshift reduces this accordingly, so given the default bitshift of four, we support up to 24
     * levels. Given the current support up to level 19 this should be fine.
     *
     * @param tileKey - The unique {@link @here/harp-geoutils#TileKey}
     *                  from which to compute the unique key.
     * @param offset - How much the given {@link @here/harp-geoutils#TileKey} is offset
     * @param bitshift - How much space we have to store the offset. The default of 4 means we have
     *      enough space to store 16 unique tiles in a single view.
     */
    function getKeyForTileKeyAndOffset(tileKey, offset, bitshift = 4) {
        const shiftedOffset = getShiftedOffset(offset, bitshift);
        return tileKey.mortonCode() + shiftedOffset;
    }
    TileKeyUtils.getKeyForTileKeyAndOffset = getKeyForTileKeyAndOffset;
    /**
     * Extracts the offset and morton key from the given key (must be created by:
     * [[getKeyForTileKeyAndOffset]])
     *
     * Note, we can't use bitshift operators in Javascript because they work on 32-bit integers, and
     * would truncate the numbers, hence using powers of two.
     *
     * @param key - Key to extract offset and morton key.
     * @param bitshift - How many bits to shift by, must be the same as was used when creating the
     * key.
     */
    function extractOffsetAndMortonKeyFromKey(key, bitshift = 4) {
        let offset = 0;
        let mortonCode = key;
        let i = 0;
        // Compute the offset
        for (; i < bitshift; i++) {
            // Note, we use 52, because 2^53-1 is the biggest value, the highest value
            // that can be set is the bit in the 52th position.
            const num = exports.powerOfTwo[52 - i];
            if (mortonCode >= num) {
                mortonCode -= num;
                offset += exports.powerOfTwo[bitshift - 1 - i];
            }
        }
        // We subtract half of the total amount, this undoes what is computed in getShiftedOffset
        offset -= exports.powerOfTwo[bitshift - 1];
        return { offset, mortonCode };
    }
    TileKeyUtils.extractOffsetAndMortonKeyFromKey = extractOffsetAndMortonKeyFromKey;
    /**
     * Returns the key of the parent. Key must have been computed using the function
     * [[getKeyForTileKeyAndOffset]].
     *
     * @param calculatedKey - Key to decompose
     * @param bitshift - Bit shift used to create the key
     */
    function getParentKeyFromKey(calculatedKey, bitshift = 4) {
        const { offset, mortonCode } = extractOffsetAndMortonKeyFromKey(calculatedKey, bitshift);
        const parentTileKey = TileKey_1.TileKey.fromMortonCode(TileKey_1.TileKey.parentMortonCode(mortonCode));
        return getKeyForTileKeyAndOffset(parentTileKey, offset, bitshift);
    }
    TileKeyUtils.getParentKeyFromKey = getParentKeyFromKey;
    /**
     * Packs the supplied offset into the high bits, where the highbits are between 2^52 and
     * 2^(52-bitshift).
     *
     * Offsets are wrapped around, to fit in the offsetBits. In practice, this doesn't really
     * matter, this is primarily used to find a unique id, if there is an offset 10, which is
     * wrapped to 2, it doesn't matter, because the offset of 10 is still stored in the tile.
     * What can be a problem though is that the cache gets filled up and isn't emptied.
     *
     * Note, because bit shifting in JavaScript works on 32 bit integers, we use powers of 2 to set
     * the high bits instead.
     *
     * @param offset - Offset to pack into the high bits.
     * @param offsetBits - How many bits to use to pack the offset.
     */
    function getShiftedOffset(offset, offsetBits = 4) {
        let result = 0;
        const totalOffsetsToStore = exports.powerOfTwo[offsetBits];
        //Offsets are stored by adding half 2 ^ (bitshift - 1), i.e.half of the max amount stored,
        //and then wrapped based on this value.For example, given a bitshift of 3, and an offset -
        //3, it would have 4 added(half of 2 ^ 3), and be stored as 1, 3 would have 4 added and be
        //stored as 7, 4 would be added with 4 and be stored as 0 (it wraps around).
        offset += totalOffsetsToStore / 2;
        while (offset < 0) {
            offset += totalOffsetsToStore;
        }
        while (offset >= totalOffsetsToStore) {
            offset -= totalOffsetsToStore;
        }
        // Offset is now a number between >= 0 and < totalOffsetsToStore
        for (let i = 0; i < offsetBits && offset > 0; i++) {
            // 53 is used because 2^53-1 is the biggest number that Javascript can represent as an
            // integer safely.
            if (offset & 0x1) {
                result += exports.powerOfTwo[53 - offsetBits + i];
            }
            offset >>>= 1;
        }
        return result;
    }
})(TileKeyUtils = exports.TileKeyUtils || (exports.TileKeyUtils = {}));
//# sourceMappingURL=TileKeyUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/TileTreeTraverse.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/TileTreeTraverse.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileTreeTraverse = void 0;
const SubTiles_1 = __webpack_require__(/*! ./SubTiles */ "./node_modules/@here/harp-geoutils/lib/tiling/SubTiles.js");
class TileTreeTraverse {
    constructor(subdivisionScheme) {
        this.m_subdivisionScheme = subdivisionScheme;
    }
    subTiles(tileKey) {
        const divX = this.m_subdivisionScheme.getSubdivisionX(tileKey.level);
        const divY = this.m_subdivisionScheme.getSubdivisionY(tileKey.level);
        return new SubTiles_1.SubTiles(tileKey, divX, divY);
    }
}
exports.TileTreeTraverse = TileTreeTraverse;
//# sourceMappingURL=TileTreeTraverse.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TilingScheme = void 0;
const FlatTileBoundingBoxGenerator_1 = __webpack_require__(/*! ./FlatTileBoundingBoxGenerator */ "./node_modules/@here/harp-geoutils/lib/tiling/FlatTileBoundingBoxGenerator.js");
const TileKeyUtils_1 = __webpack_require__(/*! ./TileKeyUtils */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKeyUtils.js");
const TileTreeTraverse_1 = __webpack_require__(/*! ./TileTreeTraverse */ "./node_modules/@here/harp-geoutils/lib/tiling/TileTreeTraverse.js");
/**
 * The `TilingScheme` represents how the data is tiled.
 */
class TilingScheme {
    /**
     * Constructs a new `TilingScheme` with the given subdivision scheme and projection.
     *
     * @param subdivisionScheme - The subdivision scheme used by this `TilingScheme`.
     * @param projection - The projection used by this `TilingScheme`.
     */
    constructor(subdivisionScheme, projection) {
        this.subdivisionScheme = subdivisionScheme;
        this.projection = projection;
        this.boundingBoxGenerator = new FlatTileBoundingBoxGenerator_1.FlatTileBoundingBoxGenerator(this);
        this.tileTreeTraverse = new TileTreeTraverse_1.TileTreeTraverse(subdivisionScheme);
    }
    /**
     * Returns the sub tile keys of the given tile.
     *
     * @param tileKey - The {@link TileKey}.
     * @returns The list of the sub tile keys.
     */
    getSubTileKeys(tileKey) {
        return this.tileTreeTraverse.subTiles(tileKey);
    }
    /**
     * Gets the {@link TileKey} from the given geo position and level.
     *
     * @param geoPoint - The position in geo coordinates.
     * @param level - The level of the resulting `TileKey`.
     */
    getTileKey(geoPoint, level) {
        return TileKeyUtils_1.TileKeyUtils.geoCoordinatesToTileKey(this, geoPoint, level);
    }
    /**
     * Gets the list of {@link TileKey}s contained in the given {@link GeoBox}.
     *
     * @param geoBox - The bounding box in geo coordinates.
     * @param level - The level of the resulting `TileKey`.
     */
    getTileKeys(geoBox, level) {
        return TileKeyUtils_1.TileKeyUtils.geoRectangleToTileKeys(this, geoBox, level);
    }
    /**
     * Returns the bounding box in geo coordinates for the given {@link TileKey}.
     *
     * @param tileKey - The `TileKey`.
     */
    getGeoBox(tileKey) {
        return this.boundingBoxGenerator.getGeoBox(tileKey);
    }
    /**
     * Returns the bounding box in world coordinates.
     *
     * @param tileKey - The `TileKey`.
     * @param result - The optional object that will contain the resulting bounding box.
     */
    getWorldBox(tileKey, result) {
        return this.boundingBoxGenerator.getWorldBox(tileKey, result);
    }
}
exports.TilingScheme = TilingScheme;
//# sourceMappingURL=TilingScheme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/WebMercatorTilingScheme.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/WebMercatorTilingScheme.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.webMercatorTilingScheme = void 0;
const MercatorProjection_1 = __webpack_require__(/*! ../projection/MercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js");
const QuadTreeSubdivisionScheme_1 = __webpack_require__(/*! ./QuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js");
const TilingScheme_1 = __webpack_require__(/*! ./TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js");
/**
 * A {@link TilingScheme} featuring quadtree subdivision scheme and web Mercator projection.
 */
exports.webMercatorTilingScheme = new TilingScheme_1.TilingScheme(QuadTreeSubdivisionScheme_1.quadTreeSubdivisionScheme, MercatorProjection_1.webMercatorProjection);
//# sourceMappingURL=WebMercatorTilingScheme.js.map

/***/ }),

/***/ "./node_modules/@here/harp-lines/lib/Lines.js":
/*!****************************************************!*\
  !*** ./node_modules/@here/harp-lines/lib/Lines.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineGroup = exports.createSimpleLineGeometry = exports.createLineGeometry = exports.LineGeometry = void 0;
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const THREE = __webpack_require__(/*! three */ "three");
// Preallocate temp variables used during line generation.
const tmpV = new THREE.Vector3();
const tmpNormal = new THREE.Vector3();
const tmpTangent0 = new THREE.Vector3();
const tmpTangent1 = new THREE.Vector3();
const tmpBitangent = new THREE.Vector3();
const SEGMENT_OFFSET = 0.1;
/**
 * Declares all the vertex attributes used for rendering a line using the [[SolidLineMaterial]].
 */
/** Base line vertex attributes. */
const LINE_VERTEX_ATTRIBUTES = {
    attributes: [
        // The "extrusionCoord" is a vec4 which represents:
        // xy: Extrusion coordinates
        // sign(xy): Extrusion direction
        // z: Line length
        { name: "extrusionCoord", itemSize: 3, offset: 0 },
        { name: "position", itemSize: 3, offset: 3 },
        { name: "tangent", itemSize: 3, offset: 6 },
        // HARP-17373: Original uniform name 'bitangent' due to shader compilation errors with Metal
        // in Safari 15 on MacOS Monterrey and iPadOS 15.
        { name: "biTangent", itemSize: 4, offset: 9 }
    ],
    stride: 13
};
/** Optional normal and uv coordinates. */
const NORMAL_UV_VERTEX_ATTRIBUTES = {
    attributes: [
        { name: "uv", itemSize: 2, offset: LINE_VERTEX_ATTRIBUTES.stride },
        { name: "normal", itemSize: 3, offset: LINE_VERTEX_ATTRIBUTES.stride + 2 }
    ],
    stride: 5
};
/** Base line vertex attributes plus normals and uv coordinates. */
const LINE_VERTEX_ATTRIBUTES_NUV = {
    attributes: [...LINE_VERTEX_ATTRIBUTES.attributes, ...NORMAL_UV_VERTEX_ATTRIBUTES.attributes],
    stride: LINE_VERTEX_ATTRIBUTES.stride + NORMAL_UV_VERTEX_ATTRIBUTES.stride
};
/**
 * Declares all the vertex attributes used for rendering a line using the
 * [[HighPrecisionLineMaterial]].
 */
const HP_LINE_VERTEX_ATTRIBUTES = {
    attributes: [
        { name: "extrusionCoord", itemSize: 2, offset: 0 },
        { name: "position", itemSize: 3, offset: 2 },
        { name: "positionLow", itemSize: 3, offset: 5 },
        { name: "tangent", itemSize: 3, offset: 8 },
        // HARP-17373: Original uniform name 'bitangent' due to shader compilation errors with Metal
        // in Safari 15 on MacOS Monterrey and iPadOS 15.
        { name: "biTangent", itemSize: 4, offset: 11 }
    ],
    stride: 15
};
/** High precision line vertex attributes plus normals and uv coordinates. */
const HP_LINE_VERTEX_ATTRIBUTES_NUV = {
    attributes: [
        ...HP_LINE_VERTEX_ATTRIBUTES.attributes,
        ...NORMAL_UV_VERTEX_ATTRIBUTES.attributes
    ],
    stride: HP_LINE_VERTEX_ATTRIBUTES.stride + NORMAL_UV_VERTEX_ATTRIBUTES.stride
};
/**
 * Class that holds the vertex and index attributes for a [[Lines]] object.
 */
class LineGeometry {
    constructor() {
        this.vertices = [];
        this.vertexColors = [];
        this.indices = [];
    }
}
exports.LineGeometry = LineGeometry;
function getVertexDescriptor(hasNormalsAndUvs, highPrecision) {
    if (highPrecision) {
        return hasNormalsAndUvs ? HP_LINE_VERTEX_ATTRIBUTES_NUV : HP_LINE_VERTEX_ATTRIBUTES;
    }
    else {
        return hasNormalsAndUvs ? LINE_VERTEX_ATTRIBUTES_NUV : LINE_VERTEX_ATTRIBUTES;
    }
}
/**
 * Creates a [[LineGeometry]] object out of a polyline.
 *
 * @param center - Center of the polyline.
 * @param polyline - Array of `numbers` describing a polyline.
 * @param offsets - Array of `numbers` representing line segment offsets.
 * @param uvs - Array of `numbers` representing texture coordinates.
 * @param colors - Array of `numbers` describing a polyline's colors.
 * @param geometry - [[LineGeometry]] object used to store the vertex and index attributes.
 * @param highPrecision - If `true` will create high-precision vertex information.
 */
function createLineGeometry(center, polyline, projection, offsets, uvs, colors, geometry = new LineGeometry(), highPrecision = false) {
    if (polyline.length === 0) {
        return geometry;
    }
    const stride = getVertexDescriptor(uvs !== undefined, highPrecision).stride;
    const pointCount = polyline.length / 3;
    const segments = new Array(pointCount);
    const tangents = new Array(polyline.length - 3);
    const baseVertex = geometry.vertices.length / stride;
    const hasSegmentOffsets = offsets !== undefined && offsets.length > 0;
    const hasTexCoords = uvs !== undefined && uvs.length > 0;
    const vertexColors = colors !== undefined && colors.length && polyline.length;
    harp_utils_1.assert(!hasSegmentOffsets || offsets.length === pointCount);
    harp_utils_1.assert(!hasTexCoords || uvs.length / 2 === pointCount);
    harp_utils_1.assert(!vertexColors || colors.length === polyline.length);
    // Compute segments and tangents.
    let sum = SEGMENT_OFFSET;
    segments[0] = sum;
    for (let i = 0; i < pointCount - 1; ++i) {
        let sqrLength = 0;
        for (let j = 0; j < 3; ++j) {
            const d = polyline[(i + 1) * 3 + j] - polyline[i * 3 + j];
            tangents[i * 3 + j] = d;
            sqrLength += d * d;
        }
        const len = Math.sqrt(sqrLength);
        sum = sum + len;
        segments[i + 1] = sum;
    }
    const lineCoverage = hasSegmentOffsets
        ? Math.abs(offsets[offsets.length - 1] - offsets[0])
        : 1.0;
    const lineLength = segments[segments.length - 1] / lineCoverage;
    // Override the segments if offsets are explicitly provided.
    if (hasSegmentOffsets) {
        for (let i = 0; i < pointCount; ++i) {
            segments[i] = offsets[i] * lineLength + SEGMENT_OFFSET;
        }
    }
    // Check if we're working with a closed line.
    let isClosed = true;
    for (let j = 0; j < 3; ++j) {
        isClosed = isClosed && polyline[j] === polyline[polyline.length - 3 + j];
    }
    const tmpVertices = [];
    const addVertexPair = (i, T1, T2, segment, extrusionCoord) => {
        tmpVertices.length = 0;
        // Store the segment and extrusionCoord attributes.
        geometry.vertices.push(segment, extrusionCoord * -1, lineLength);
        tmpVertices.push(segment, extrusionCoord * 1, lineLength);
        // Store the position attribute (component-dependant).
        for (let j = 0; j < 3; ++j) {
            if (!highPrecision) {
                geometry.vertices.push(polyline[i * 3 + j]);
                tmpVertices.push(polyline[i * 3 + j]);
            }
            else {
                const highComp = Math.fround(polyline[i * 3 + j]);
                const lowComp = polyline[i * 3 + j] - highComp;
                geometry.vertices.push(highComp, lowComp);
                tmpVertices.push(highComp, lowComp);
            }
            tmpNormal.setComponent(j, polyline[i * 3 + j]);
        }
        // Store the bitangent attribute (component-dependant).
        for (let j = 0; j < 3; ++j) {
            tmpTangent0.setComponent(j, tangents[T1 + j]);
            tmpTangent1.setComponent(j, tangents[T2 + j]);
        }
        tmpTangent0.normalize();
        geometry.vertices.push(tmpTangent0.x, tmpTangent0.y, tmpTangent0.z);
        tmpVertices.push(tmpTangent0.x, tmpTangent0.y, tmpTangent0.z);
        tmpNormal.add(center); // tmpNormal contains world position
        projection.surfaceNormal(tmpNormal, tmpNormal);
        const angle = computeBitangent(tmpNormal, tmpTangent0, tmpTangent1.normalize(), tmpBitangent);
        geometry.vertices.push(tmpBitangent.x, tmpBitangent.y, tmpBitangent.z, angle);
        tmpVertices.push(tmpBitangent.x, tmpBitangent.y, tmpBitangent.z, angle);
        if (hasTexCoords) {
            // uvs
            geometry.vertices.push(uvs[i * 2], uvs[i * 2 + 1]);
            tmpVertices.push(uvs[i * 2], uvs[i * 2 + 1]);
            // normals
            geometry.vertices.push(tmpNormal.x, tmpNormal.y, tmpNormal.z);
            tmpVertices.push(tmpNormal.x, tmpNormal.y, tmpNormal.z);
        }
        geometry.vertices.push(...tmpVertices);
        // Add vertex colors (if supplied).
        if (vertexColors) {
            geometry.vertexColors.push(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
            geometry.vertexColors.push(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
        }
    };
    for (let i = 0; i < pointCount; ++i) {
        // Retrieve the per-point tangents.
        const T1 = isClosed && i === 0 ? tangents.length - 3 : Math.max(0, i - 1) * 3;
        const T2 = isClosed && i === pointCount - 1 ? 0 : Math.min(i * 3, tangents.length - 3);
        // Process v0 and v1.
        if (i > 0) {
            addVertexPair(i, T1, T2, segments[i - 1], segments[i]);
        }
        // Process v2 and v3.
        if (i + 1 < pointCount) {
            addVertexPair(i, T1, T2, segments[Math.min(i, segments.length - 1)] * -1, segments[Math.min(i + 1, segments.length - 1)]);
        }
    }
    // Store the triangle indices in the final index buffer.
    for (let i = 0; i < pointCount - 1; ++i) {
        const base = baseVertex + i * 4;
        geometry.indices.push(base, base + 1, base + 2, base + 2, base + 1, base + 3);
    }
    return geometry;
}
exports.createLineGeometry = createLineGeometry;
/**
 * Creates a [[LineGeometry]] object out of a polyline.
 *
 * @param polyline - Array of `numbers` describing a polyline.
 * @param colors - Array of `numbers` describing a polyline's colors.
 * @param geometry - [[LineGeometry]] object used to store the vertex and index attributes.
 */
function createSimpleLineGeometry(polyline, colors, geometry = new LineGeometry()) {
    if (polyline.length === 0) {
        return geometry;
    }
    const pointCount = polyline.length / 3;
    let index = geometry.vertices.length / 3;
    const vertexColors = colors !== undefined && colors.length && polyline.length;
    for (let i = 0; i < pointCount; ++i, index++) {
        if (i > 0) {
            geometry.indices.push(index);
        }
        if (i < pointCount - 1) {
            geometry.indices.push(index);
        }
        for (let j = 0; j < 3; ++j) {
            geometry.vertices.push(polyline[i * 3 + j]);
            if (vertexColors) {
                geometry.vertexColors.push(colors[i * 3 + j]);
            }
        }
    }
    return geometry;
}
exports.createSimpleLineGeometry = createSimpleLineGeometry;
/**
 * Class used to render groups (or batches) of width-variable lines (in the same tile).
 */
class LineGroup {
    constructor(hasNormalsAndUvs = false, highPrecision = false, isSimple = false) {
        this.hasNormalsAndUvs = hasNormalsAndUvs;
        this.highPrecision = highPrecision;
        this.isSimple = isSimple;
        this.m_geometry = new LineGeometry();
    }
    /**
     * Adds all the attribute data needed to a [[BufferGeometry]] object for rendering `Lines`.
     *
     * @param vertices - Array of vertex attributes.
     * @param colors - Array of vertex colors.
     * @param indices - Array of vertex indices.
     * @param geometry - [[BufferGeometry]] object which will store all the `Lines` attribute data.
     * @param hasNormalsAnUvs - Whether vertices have normal and uv coordinates as attributes.
     * @param highPrecision - If `true` will create high-precision vertex information.
     * @param isSimple - `true` to create simple (nonsolid, nonextruded) lines. Defaults to `false`.
     */
    static createGeometry(vertices, colors, indices, geometry, hasNormalsAndUvs = false, highPrecision = false, isSimple = false) {
        if (isSimple) {
            geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
            if (colors.length === vertices.length) {
                geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
            }
            geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
            return geometry;
        }
        else {
            const vertexDescriptor = getVertexDescriptor(hasNormalsAndUvs, highPrecision);
            const buffer = new THREE.InterleavedBuffer(new Float32Array(vertices), vertexDescriptor.stride);
            vertexDescriptor.attributes.forEach(descr => {
                const attribute = new THREE.InterleavedBufferAttribute(buffer, descr.itemSize, descr.offset, false);
                geometry.setAttribute(descr.name, attribute);
            });
            if (colors.length === vertices.length) {
                geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
            }
            geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
            return geometry;
        }
    }
    /**
     * Clears the list of line strips.
     */
    clear() {
        this.m_geometry.vertices = [];
        this.m_geometry.vertexColors = [];
        this.m_geometry.indices = [];
    }
    /**
     * Add the given points to this line group.
     *
     * @param center - World center of the provided points.
     * @param points - Sequence of (x,y,z) coordinates.
     * @param offsets - Sequence of line segment offsets.
     * @param uvs - Sequence of (u,v) texture coordinates.
     * @param colors - Sequence of (r,g,b) color components.
     */
    add(center, points, projection, offsets, uvs, colors) {
        if (!this.isSimple) {
            harp_utils_1.assert(!this.hasNormalsAndUvs || uvs !== undefined);
            createLineGeometry(center, points, projection, offsets, uvs, colors, this.m_geometry, this.highPrecision);
        }
        else {
            createSimpleLineGeometry(points, colors, this.m_geometry);
        }
        return this;
    }
    /**
     * Returns the list of vertices.
     */
    get vertices() {
        return this.m_geometry.vertices;
    }
    /**
     * Returns the list of vertex colors.
     */
    get vertexColors() {
        return this.m_geometry.vertexColors;
    }
    /**
     * Returns the list of indices.
     */
    get indices() {
        return this.m_geometry.indices;
    }
    /**
     * Returns the list of [[VertexAttributeDescriptor]]s.
     */
    get vertexAttributes() {
        return getVertexDescriptor(this.hasNormalsAndUvs, this.highPrecision).attributes;
    }
    /**
     * Returns the vertex attribute stride.
     */
    get stride() {
        return getVertexDescriptor(this.hasNormalsAndUvs, this.highPrecision).stride;
    }
    /**
     * Creates a three.js geometry.
     */
    createGeometry(geometry) {
        if (geometry === undefined) {
            geometry = new THREE.BufferGeometry();
        }
        return LineGroup.createGeometry(this.m_geometry.vertices, this.m_geometry.vertexColors, this.m_geometry.indices, geometry, this.hasNormalsAndUvs, this.highPrecision);
    }
}
exports.LineGroup = LineGroup;
function computeBitangent(n, t0, t1, bt) {
    let angle = 0;
    if (!t0.equals(t1)) {
        angle = Math.acos(t0.dot(t1)) * Math.sign(n.dot(tmpV.copy(t0).cross(t1)));
        if (Number.isNaN(angle)) {
            angle = 0;
        }
    }
    bt.copy(t0).add(t1).normalize().cross(n).normalize();
    return angle;
}
//# sourceMappingURL=Lines.js.map

/***/ }),

/***/ "./node_modules/@here/harp-lines/lib/TriangulateLines.js":
/*!***************************************************************!*\
  !*** ./node_modules/@here/harp-lines/lib/TriangulateLines.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reconstructLineWidth = exports.reconstructLine = exports.triangulateLine = exports.numCirclePoints = void 0;
const THREE = __webpack_require__(/*! three */ "three");
const UNIT_Z = new THREE.Vector3(0, 0, 1);
const POINTS = [0, 1, 2, 1, 3, 2];
const BEVEL_POINTS = [0, 1, 3, 3, 1, 2, 0, 3, 4, 5, 4, 3];
const SECTORS_IN_CIRCLE = 8;
const STEP = Math.PI / SECTORS_IN_CIRCLE;
/**
 * Adds a half-circle geometry to original line
 *
 * @param x - The line end X (used as circle center X)
 * @param y - The line end Y (used as circle center Y)
 * @param lineAngle - The cap incline angle
 * @param radius - The cap (circle) radius
 * @param vertices - The input vertex buffer (cap vertices are added there)
 * @param indices - The input index buffer (cap indices are is added there)
 */
function addCircle(x, y, lineAngle, radius, vertices, indices) {
    const baseVertex = vertices.length / 3;
    // Add cap center to vertices directly (it doesn't need rotation)
    vertices.push(x, y, 0);
    for (let i = 0; i < SECTORS_IN_CIRCLE + 1; ++i) {
        const angle = STEP * i + Math.PI / 2 + lineAngle; // Start angle is -90deg
        vertices.push(x + radius * Math.cos(angle), y + radius * Math.sin(angle), 0);
        indices.push(baseVertex, baseVertex + i + 1, baseVertex + ((i + 1) % (SECTORS_IN_CIRCLE + 1)) + 1);
    }
}
/**
 * Returns the number of points in circle used for caps.
 *
 * @param lineWidth - Width of line.
 */
function numCirclePoints(lineWidth) {
    return SECTORS_IN_CIRCLE + 1;
}
exports.numCirclePoints = numCirclePoints;
/**
 * Create a triangle mesh from the given polyline.
 *
 * @param points - Sequence of (x,y,z) coordinates.
 * @param width - The width of the extruded line.
 * @param vertices - The output vertex buffer.
 * @param indices - The output index buffer.
 * @param startWithCircle - `true` if the line should start will a circle.
 * @param endWithCircle - `true` if the line should end with a circle.
 */
function triangulateLine(points, width, vertices, indices, startWithCircle = true, endWithCircle = startWithCircle) {
    if (points.length < 3) {
        return;
    }
    // This vector is used for computing cap angle
    const angleVec = new THREE.Vector2();
    if (startWithCircle) {
        // Define lineAngle as (direction - origin) vector angle to X axis
        const lineAngle = points.length !== 3
            ? angleVec.set(points[3] - points[0], points[4] - points[1]).angle()
            : 0;
        addCircle(points[0], points[1], lineAngle, width, vertices, indices);
    }
    const baseVertex = vertices.length / 3;
    // bt = Bitangent (i.e. extrusion vector)
    const prevBt = new THREE.Vector3();
    const p = new THREE.Vector3(); // current point
    const n = new THREE.Vector3(); // next point
    const bt = new THREE.Vector3();
    const averageBt = new THREE.Vector3();
    const p0 = new THREE.Vector3();
    const p1 = new THREE.Vector3();
    const p2 = new THREE.Vector3();
    const p3 = new THREE.Vector3();
    const N = points.length / 3;
    let vertexOffset = 0;
    for (let i = 0; i < N; ++i) {
        let useBevel = false;
        p.set(points[i * 3], points[i * 3 + 1], points[i * 3 + 2]);
        if (i + 1 < N) {
            n.set(points[(i + 1) * 3], points[(i + 1) * 3 + 1], points[(i + 1) * 3 + 2]);
            bt.copy(n).sub(p).normalize().cross(UNIT_Z);
            averageBt.copy(bt);
            if (i > 0) {
                averageBt.add(prevBt).multiplyScalar(1.0 - 0.5 * bt.dot(prevBt));
                useBevel = prevBt.angleTo(bt) > Math.PI / 2;
                if (useBevel) {
                    const inclineWidth = width / Math.cos(bt.angleTo(prevBt) / 2);
                    p0.copy(bt).add(prevBt).normalize().multiplyScalar(-inclineWidth).add(p);
                    p1.copy(prevBt).multiplyScalar(width).add(p);
                    // p2 is used for "miter" connections
                    p2.copy(bt).add(prevBt).normalize().multiplyScalar(inclineWidth).add(p);
                    p3.copy(bt).multiplyScalar(width).add(p);
                }
            }
            if (useBevel) {
                vertices.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
            }
            else {
                p0.copy(averageBt).multiplyScalar(-width).add(p);
                p1.copy(averageBt).multiplyScalar(width).add(p);
                vertices.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
            }
            prevBt.copy(bt);
        }
        else {
            p0.copy(prevBt).multiplyScalar(-width).add(p);
            p1.copy(prevBt).multiplyScalar(width).add(p);
            vertices.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
        }
        if (i !== N - 1) {
            (useBevel ? BEVEL_POINTS : POINTS).forEach(o => indices.push(baseVertex + vertexOffset + o));
            vertexOffset += useBevel ? 4 : 2;
        }
    }
    if (endWithCircle) {
        const lineAngle = points.length !== 2
            ? angleVec
                .set(points[(N - 3) * 3] - points[(N - 2) * 3], points[(N - 3) * 3 + 1] - points[(N - 2) * 3 + 1])
                .angle()
            : Math.PI;
        addCircle(points[(N - 2) * 3], points[(N - 2) * 3 + 1], lineAngle, width, vertices, indices);
    }
}
exports.triangulateLine = triangulateLine;
/**
 * Reconstruct the original points of a line from the vertices of the triangulated line.
 *
 * @param inBuffer - Buffer with vertices.
 * @param startOffset - Start index, will differ from `0` if the line has caps.
 * @returns Buffer containing the original points of the triangulated line.
 */
function reconstructLine(inBuffer, startOffset) {
    const outBuffer = new Float32Array(inBuffer.length / 2);
    for (let i = startOffset * 3, i2 = i * 2; i < outBuffer.length; i += 3, i2 += 6) {
        outBuffer[i] = inBuffer[i2] + (inBuffer[i2 + 3] - inBuffer[i2]) * 0.5;
        outBuffer[i + 1] = inBuffer[i2 + 1] + (inBuffer[i2 + 3 + 1] - inBuffer[i2 + 1]) * 0.5;
        outBuffer[i + 2] = inBuffer[i2 + 2] + (inBuffer[i2 + 3 + 2] - inBuffer[i2 + 2]) * 0.5;
    }
    return outBuffer;
}
exports.reconstructLine = reconstructLine;
/**
 * Extract the line width from a triangulated line.
 *
 * @param inBuffer - Array of vertex elements of a triangulated line.
 * @param startIndex - Start index, will differ from `0` if the line has caps.
 */
function reconstructLineWidth(inBuffer, startIndex) {
    const xd = inBuffer[startIndex * 2 + 3] - inBuffer[startIndex * 2];
    const yd = inBuffer[startIndex * 2 + 3 + 1] - inBuffer[startIndex * 2 + 1];
    const zd = inBuffer[startIndex * 2 + 3 + 2] - inBuffer[startIndex * 2 + 2];
    return Math.sqrt(xd * xd + yd * yd + zd * zd) * 0.5;
}
exports.reconstructLineWidth = reconstructLineWidth;
//# sourceMappingURL=TriangulateLines.js.map

/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/index-worker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/index-worker.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./lib/ThemedTileDecoder */ "./node_modules/@here/harp-mapview-decoder/lib/ThemedTileDecoder.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/TileDecoderService */ "./node_modules/@here/harp-mapview-decoder/lib/TileDecoderService.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/TilerService */ "./node_modules/@here/harp-mapview-decoder/lib/TilerService.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/WorkerService */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/WorkerServiceManager */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerServiceManager.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/GeoJsonTiler */ "./node_modules/@here/harp-mapview-decoder/lib/GeoJsonTiler.js"), exports);
//# sourceMappingURL=index-worker.js.map

/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/GeoJsonTiler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/GeoJsonTiler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonTiler = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
// @ts-ignore
const geojsonvtExport = __webpack_require__(/*! geojson-vt */ "./node_modules/geojson-vt/src/index.js");
// to be able to run tests on nodejs
const geojsonvt = (_a = geojsonvtExport.default) !== null && _a !== void 0 ? _a : geojsonvtExport;
const EXTENT = 4096;
// the factor used to compute the size of the buffer.
const BUFFER_FACTOR = 0.05;
// align the buffer to the next integer multiple of 2.
const BUFFER = -(-Math.ceil(EXTENT * BUFFER_FACTOR) & -2);
class GeoJsonTiler {
    constructor() {
        this.indexes = new Map();
    }
    dispose() {
        /* */
    }
    async connect() {
        return await Promise.resolve();
    }
    async registerIndex(indexId, input) {
        if (this.indexes.has(indexId)) {
            return;
        }
        return await this.updateIndex(indexId, input);
    }
    async updateIndex(indexId, input) {
        if (input instanceof URL) {
            const response = await fetch(input.href);
            if (!response.ok) {
                throw new Error(`GeoJsonTiler: Unable to fetch ${input.href}: ${response.statusText}`);
            }
            input = (await response.json());
        }
        else {
            input = input;
        }
        // Generate ids only if input doesn't have them.
        const generateId = harp_datasource_protocol_1.isFeatureGeometry(input) ||
            input.type === "GeometryCollection" ||
            (input.type === "Feature" && input.id === undefined) ||
            (input.type === "FeatureCollection" &&
                input.features.length > 0 &&
                input.features[0].id === undefined);
        const index = geojsonvt(input, {
            maxZoom: 20,
            indexMaxZoom: 5,
            indexMaxPoints: 100000,
            tolerance: 3,
            extent: EXTENT,
            buffer: BUFFER,
            lineMetrics: false,
            promoteId: null,
            generateId,
            debug: 0 // logging level (0, 1 or 2)
        });
        index.geojson = input;
        this.indexes.set(indexId, index);
    }
    async getTile(indexId, tileKey) {
        const index = this.indexes.get(indexId);
        if (index === undefined) {
            throw new Error("Tile not found");
        }
        const tile = index.getTile(tileKey.level, tileKey.column, tileKey.row);
        if (tile !== null) {
            tile.layer = indexId;
        }
        return tile || {};
    }
}
exports.GeoJsonTiler = GeoJsonTiler;
//# sourceMappingURL=GeoJsonTiler.js.map

/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/ThemedTileDecoder.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/ThemedTileDecoder.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemedTileDecoder = void 0;
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "./node_modules/@here/harp-datasource-protocol/index-decoder.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const logger = harp_utils_1.LoggerManager.instance.create("ThemedTileDecoder");
/**
 * `ThemedTileDecoder` implements an [[ITileDecoder]] which uses a [[Theme]] to apply styles to the
 * objects displayed in the map.
 *
 * By default, decoders are executed in web workers (using [[TileDecoderService]]) for performance
 * reasons.
 */
class ThemedTileDecoder {
    constructor() {
        this.m_storageLevelOffset = 0;
    }
    dispose() {
        // implemented in subclasses
    }
    decodeTile(data, tileKey, projection) {
        if (this.m_styleSetEvaluator === undefined) {
            logger.info("cannot decode tile, as there is not style available");
            return Promise.resolve(undefined);
        }
        return this.decodeThemedTile(data, tileKey, this.m_styleSetEvaluator, projection);
    }
    getTileInfo(data, tileKey, projection) {
        return Promise.resolve(undefined);
    }
    configure(options, customOptions) {
        if ((options === null || options === void 0 ? void 0 : options.styleSet) !== undefined) {
            this.m_styleSetEvaluator = new index_decoder_1.StyleSetEvaluator(options);
        }
        if ((options === null || options === void 0 ? void 0 : options.languages) !== undefined) {
            this.languages = options.languages;
        }
        if (customOptions !== undefined && customOptions.storageLevelOffset !== undefined) {
            this.m_storageLevelOffset = customOptions.storageLevelOffset;
        }
    }
}
exports.ThemedTileDecoder = ThemedTileDecoder;
//# sourceMappingURL=ThemedTileDecoder.js.map

/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/TileDecoderService.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/TileDecoderService.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileDecoderService = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js");
const logger = harp_utils_1.LoggerManager.instance.create("TileDecoderService");
/**
 * An extension to [[WorkerService]], the `TileDecoderService` implements an asynchronous
 * (message based) service to decode tile content in web workers. The `TileDecoderService` itself
 * lives in the web worker, and communicates with messages by means of a [[ConcurrentWorkerSet]]
 * with the application.
 *
 * The `TileDecoderService` handles a [[DecodeTileRequest]], which contains a tile and its freshly
 * loaded binary data, decodes the content with the [[ITileDecoder]] that the service is configured
 * to use, and sends the data back in form of a [[WorkerServiceResponse]].
 */
class TileDecoderService extends WorkerService_1.WorkerService {
    /**
     * Set up the `TileDecoderService`. The name of the service must be unique
     *
     * @param serviceId - Service id. Must be unique.
     * @param m_decoder - Decoder to handle the decoding and info requests.
     */
    constructor(serviceId, m_decoder) {
        super(serviceId);
        this.serviceId = serviceId;
        this.m_decoder = m_decoder;
        this.m_decoder.connect();
    }
    /**
     * Start a [[TileDecoderService]] with a given decoder.
     *
     * @param serviceId - Service id. Must be unique.
     * @param decoder -   [[TileDecoder]] instance.
     */
    static start(serviceId, decoder) {
        return new TileDecoderService(serviceId, decoder);
    }
    /**
     * Handle incoming request messages. Identifies message type and processes the request.
     *
     * @param request - Message that is either a DecodeTileRequest or a TileInfoRequest.
     * @returns A promise which resolves to a [[WorkerServiceResponse]].
     * @override
     */
    handleRequest(request) {
        if (harp_datasource_protocol_1.WorkerDecoderProtocol.isDecodeTileRequest(request)) {
            return this.handleDecodeTileRequest(request);
        }
        else if (harp_datasource_protocol_1.WorkerDecoderProtocol.isTileInfoRequest(request)) {
            return this.handleTileInfoRequest(request);
        }
        else {
            return super.handleRequest(request);
        }
    }
    /**
     * Handle incoming configuration message. Configuration message is passed on to decoder.
     *
     * @param request - Message of type [[ConfigurationMessage]].
     * @override
     */
    handleMessage(message) {
        if (harp_datasource_protocol_1.WorkerDecoderProtocol.isConfigurationMessage(message)) {
            this.handleConfigurationMessage(message);
        }
        else {
            logger.error(`[${this.serviceId}]: invalid message ${message.type}`);
        }
    }
    async handleDecodeTileRequest(request) {
        const tileKey = harp_geoutils_1.TileKey.fromMortonCode(request.tileKey);
        const projection = harp_datasource_protocol_1.getProjection(request.projection);
        const decodedTile = await this.m_decoder.decodeTile(request.data, tileKey, projection);
        const transferList = [];
        const transferBufferAttribute = (attribute) => {
            if (attribute !== undefined &&
                attribute.buffer.byteLength > 0 &&
                !transferList.includes(attribute.buffer)) {
                transferList.push(attribute.buffer);
            }
        };
        decodedTile === null || decodedTile === void 0 ? void 0 : decodedTile.geometries.forEach(geom => {
            var _a, _b, _c;
            (_a = geom.vertexAttributes) === null || _a === void 0 ? void 0 : _a.forEach(attr => transferBufferAttribute(attr));
            (_b = geom.interleavedVertexAttributes) === null || _b === void 0 ? void 0 : _b.forEach(attr => transferBufferAttribute(attr));
            transferBufferAttribute(geom.index);
            transferBufferAttribute(geom.edgeIndex);
            if (Array.isArray(geom.objInfos) &&
                geom.objInfos.length === 1 &&
                typeof geom.objInfos[0] === "object" && ((_c = geom.objInfos[0]) === null || _c === void 0 ? void 0 : _c.hasOwnProperty("displacementMap"))) {
                const obj = geom.objInfos[0];
                transferBufferAttribute(obj.displacementMap);
            }
            if (Array.isArray(geom.attachments)) {
                geom.attachments.forEach(attachment => {
                    transferBufferAttribute(attachment.index);
                    transferBufferAttribute(attachment.edgeIndex);
                });
            }
        });
        decodedTile === null || decodedTile === void 0 ? void 0 : decodedTile.techniques.forEach(technique => {
            harp_datasource_protocol_1.addBuffersToTransferList(technique, transferList);
        });
        return {
            response: decodedTile,
            transferList
        };
    }
    handleTileInfoRequest(request) {
        const tileKey = harp_geoutils_1.TileKey.fromMortonCode(request.tileKey);
        const projection = harp_datasource_protocol_1.getProjection(request.projection);
        return this.m_decoder.getTileInfo(request.data, tileKey, projection).then(tileInfo => {
            const transferList = tileInfo !== undefined && tileInfo.transferList !== undefined
                ? tileInfo.transferList
                : [];
            return {
                response: tileInfo,
                transferList
            };
        });
    }
    handleConfigurationMessage(message) {
        this.m_decoder.configure(message, message.options);
    }
}
exports.TileDecoderService = TileDecoderService;
//# sourceMappingURL=TileDecoderService.js.map

/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/TilerService.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/TilerService.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TilerService = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const GeoJsonTiler_1 = __webpack_require__(/*! ./GeoJsonTiler */ "./node_modules/@here/harp-mapview-decoder/lib/GeoJsonTiler.js");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js");
/**
 * An extension to {@link WorkerService}, the `TilerService`
 * implements an asynchronous (message based)
 * service to tile untiled payloads in web workers.
 *
 * @remarks
 * The `TilerService` itself lives in the web
 * worker, and communicates with messages by means of a `ConcurrentWorkerSet` with the
 * application.
 *
 * The `TilerService` registers tile indices (parent tile to be subdivided) by handling a
 * `RegisterIndexRequest`, and can later retrieve tiled payloads from through the `TileRequest`.
 * The data is sent back in form of a {@link WorkerServiceResponse}.
 */
class TilerService extends WorkerService_1.WorkerService {
    /**
     * Set up the `TilerService`. The name of the service must be unique
     *
     * @param serviceId - Service id. Must be unique.
     */
    constructor(serviceId) {
        super(serviceId);
        this.serviceId = serviceId;
        this.tiler = new GeoJsonTiler_1.GeoJsonTiler();
    }
    /**
     * Start a `TilerService`.
     *
     * @param serviceId - Service id. Must be unique.
     */
    static start(serviceId) {
        return new TilerService(serviceId);
    }
    /**
     * Handle incoming request messages. Identifies message type and processes the request.
     *
     * @param request - {@link WorkerTilerProtocol} request.
     * @returns A promise which resolves to a {@link WorkerServiceResponse}.
     * @override
     */
    handleRequest(request) {
        if (harp_datasource_protocol_1.WorkerTilerProtocol.isRegisterIndexRequest(request)) {
            return this.handleRegisterIndexRequest(request);
        }
        else if (harp_datasource_protocol_1.WorkerTilerProtocol.isUpdateIndexRequest(request)) {
            return this.handleUpdateIndexRequest(request);
        }
        else if (harp_datasource_protocol_1.WorkerTilerProtocol.isTileRequest(request)) {
            return this.handleTileRequest(request);
        }
        else {
            return super.handleRequest(request);
        }
    }
    async handleTileRequest(request) {
        const tileKey = harp_geoutils_1.TileKey.fromMortonCode(request.tileKey);
        const tile = await this.tiler.getTile(request.index, tileKey);
        return { response: tile || {} };
    }
    async handleRegisterIndexRequest(message) {
        const input = typeof message.input === "string" ? new URL(message.input) : message.input;
        await this.tiler.registerIndex(message.id, input);
        return { response: {} };
    }
    async handleUpdateIndexRequest(message) {
        const input = typeof message.input === "string" ? new URL(message.input) : message.input;
        this.tiler.updateIndex(message.id, input);
        return { response: {} };
    }
}
exports.TilerService = TilerService;
//# sourceMappingURL=TilerService.js.map

/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerService = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const logger = harp_utils_1.LoggerManager.instance.create("WorkerService", { enabled: true });
/**
 * Worker Service communication helper.
 *
 * @remarks
 * Listens to Web Worker messages from `entWorkerSet` and implements:
 *  - worker service initialization
 *  - request/response scheme
 *  - error handling.
 *
 * This class should be subclassed to provide concrete like `TileDecoderService`.
 *
 * Communication peer for `ConcurrentWorkerSet`.
 */
class WorkerService {
    /**
     * Sets up the `WorkerService` with the specified name, and starts processing messages.
     *
     * @param serviceId - The service id.
     */
    constructor(serviceId) {
        this.serviceId = serviceId;
        this.m_pendingRequests = new Map();
        /**
         * Central message handler for this service.
         *
         * Responsible for filtering message target and managing request/response sequence.
         *
         * @param message - Message to be dispatched.
         */
        this.onMessage = (message) => {
            if (typeof message.data.service !== "string" || message.data.service !== this.serviceId) {
                return;
            }
            try {
                if (harp_datasource_protocol_1.WorkerServiceProtocol.isRequestMessage(message.data)) {
                    const request = message.data;
                    const requestEntry = {
                        service: request.service,
                        messageId: request.messageId,
                        responseSent: false
                    };
                    this.m_pendingRequests.set(request.messageId, requestEntry);
                    this.tryHandleRequest(request.request)
                        .then(response => {
                        this.doSendResponse(requestEntry, {
                            service: this.serviceId,
                            type: harp_datasource_protocol_1.WorkerServiceProtocol.ServiceMessageName.Response,
                            messageId: request.messageId,
                            response: response.response
                        }, response.transferList);
                    })
                        .catch(error => {
                        this.doSendResponse(requestEntry, {
                            service: this.serviceId,
                            type: harp_datasource_protocol_1.WorkerServiceProtocol.ServiceMessageName.Response,
                            messageId: request.messageId,
                            errorMessage: error.toString(),
                            errorStack: error.stack
                        });
                    });
                }
                else {
                    this.tryHandleMessage(message.data);
                }
            }
            catch (err) {
                logger.error(`[${this.serviceId}]: Unhandled exception when handling ${message.type}`);
            }
        };
        self.addEventListener("message", this.onMessage);
        const isInitializedMessage = {
            service: serviceId,
            type: harp_datasource_protocol_1.WorkerServiceProtocol.ServiceMessageName.Initialized
        };
        self.postMessage(isInitializedMessage);
    }
    /**
     * Destroy the `WorkerService`. Cancels all pending requests ad removes itself from the message
     * queue.
     */
    destroy() {
        this.cancelAllPendingRequests();
        self.removeEventListener("message", this.onMessage);
    }
    /**
     * Message handler to be overridden by implementation.
     *
     * @param message - `MessageEvent.data` as received by `WorkerService`.
     */
    handleMessage(message) {
        logger.error(`[${this.serviceId}]: Invalid message ${message.type}`);
    }
    /**
     * Call request handler to be overridden by implementation.
     *
     * @param request - `RequestMessage.request` as received by `WorkerService`.
     */
    handleRequest(request) {
        throw new Error(`ServiceAdapter[${this.serviceId}]: Invalid request '${request.type}'`);
    }
    /**
     * Safety belt over `handleMessage` for correct exception handling & logging.
     */
    tryHandleMessage(message) {
        try {
            this.handleMessage(message);
        }
        catch (error) {
            logger.error(`[${this.serviceId}]: Failed, handling message ${message.type}`);
        }
    }
    /**
     * Safety belt over `handleRequest` for correct exception handling in promise chain.
     */
    tryHandleRequest(request) {
        try {
            return this.handleRequest(request);
        }
        catch (error) {
            // we don't log exceptions here as they are propagated to client as responses
            logger.error(`[${this.serviceId}]: Failure`, error);
            return Promise.reject(error);
        }
    }
    doSendResponse(requestEntry, response, transferList) {
        if (requestEntry.responseSent) {
            return;
        }
        if (transferList !== undefined) {
            self.postMessage(response, transferList);
        }
        else {
            self.postMessage(response);
        }
        requestEntry.responseSent = true;
        this.m_pendingRequests.delete(requestEntry.messageId);
    }
    cancelAllPendingRequests() {
        this.m_pendingRequests.forEach(requestEntry => {
            this.doSendResponse(requestEntry, {
                service: this.serviceId,
                type: harp_datasource_protocol_1.WorkerServiceProtocol.ServiceMessageName.Response,
                messageId: requestEntry.messageId,
                errorMessage: "cancelled"
            });
        });
    }
}
exports.WorkerService = WorkerService;
//# sourceMappingURL=WorkerService.js.map

/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/WorkerServiceManager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/WorkerServiceManager.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerServiceManager = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js");
/**
 * Manages dynamic worker services in Web Worker context.
 *
 * Handles `CreateService` and `DestroyService` messages sent to Web Worker. Singleton (in scope of
 * one worker runtime!), starts automatically with first [[getInstance]] call.
 */
class WorkerServiceManager extends WorkerService_1.WorkerService {
    constructor(serviceId = harp_datasource_protocol_1.WorkerServiceProtocol.WORKER_SERVICE_MANAGER_SERVICE_ID) {
        super(serviceId);
        /**
         * Contains all registered service factories indexed by `serviceType`.
         */
        this.m_factories = new Map();
        /**
         * Contains all managed worker services indexed by their `serviceId`.
         */
        this.m_services = new Map();
    }
    /**
     * Gets the default instance of `WorkerServiceManager`. Starts the service when first called.
     */
    static getInstance() {
        if (this.m_service === undefined) {
            this.m_service = new WorkerServiceManager(harp_datasource_protocol_1.WorkerServiceProtocol.WORKER_SERVICE_MANAGER_SERVICE_ID);
        }
        return this.m_service;
    }
    /**
     * Register [[WorkerService]] class to this manager.
     *
     * @param workerServiceDescriptor - service type and factory
     */
    register(workerServiceDescriptor) {
        this.m_factories.set(workerServiceDescriptor.serviceType, workerServiceDescriptor.factory);
    }
    /** @override */
    handleRequest(request) {
        if (request.type === harp_datasource_protocol_1.WorkerServiceProtocol.Requests.CreateService) {
            const existingService = this.m_services.get(request.targetServiceId);
            if (existingService !== undefined) {
                throw Error(`error - service with targetServiceId='${request.targetServiceId}' already running, ignoring CreateService request`);
            }
            const factory = this.m_factories.get(request.targetServiceType);
            if (factory === undefined) {
                throw Error(`unknown targetServiceType requested: '${request.targetServiceType}'`);
            }
            const service = factory(request.targetServiceId);
            this.m_services.set(request.targetServiceId, service);
        }
        if (request.type === harp_datasource_protocol_1.WorkerServiceProtocol.Requests.DestroyService) {
            const service = this.m_services.get(request.targetServiceId);
            if (service === undefined) {
                throw Error(`unknown targetServiceId '${request.targetServiceId}'`);
            }
            service.destroy();
            this.m_services.delete(request.targetServiceId);
        }
        return Promise.resolve({
            response: {}
        });
    }
}
exports.WorkerServiceManager = WorkerServiceManager;
//# sourceMappingURL=WorkerServiceManager.js.map

/***/ }),

/***/ "./node_modules/@here/harp-materials/lib/MapMeshMaterialsDefs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-materials/lib/MapMeshMaterialsDefs.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtrusionFeatureDefs = void 0;
var ExtrusionFeatureDefs;
(function (ExtrusionFeatureDefs) {
    /**
     * Minimum ratio value for extrusion effect
     */
    ExtrusionFeatureDefs.DEFAULT_RATIO_MIN = 0.0;
    /**
     * Maximum ratio value for extrusion effect
     */
    ExtrusionFeatureDefs.DEFAULT_RATIO_MAX = 1;
    /**
     * Buildings height used whenever no height-data is present or height is very small.
     *
     * Used to avoid z-fighting between ground plane and building.
     */
    ExtrusionFeatureDefs.MIN_BUILDING_HEIGHT = 0.1;
})(ExtrusionFeatureDefs = exports.ExtrusionFeatureDefs || (exports.ExtrusionFeatureDefs = {}));
//# sourceMappingURL=MapMeshMaterialsDefs.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/index-common.js":
/*!*******************************************************!*\
  !*** ./node_modules/@here/harp-utils/index-common.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./lib/DOMUtils */ "./node_modules/@here/harp-utils/lib/DOMUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/GroupedPriorityList */ "./node_modules/@here/harp-utils/lib/GroupedPriorityList.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Logger */ "./node_modules/@here/harp-utils/lib/Logger/index.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Math2D */ "./node_modules/@here/harp-utils/lib/Math2D.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/MathUtils */ "./node_modules/@here/harp-utils/lib/MathUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Mixins */ "./node_modules/@here/harp-utils/lib/Mixins.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/assert */ "./node_modules/@here/harp-utils/lib/assert.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/CachedResource */ "./node_modules/@here/harp-utils/lib/CachedResource.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/ContextLogger */ "./node_modules/@here/harp-utils/lib/ContextLogger.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/PerformanceTimer */ "./node_modules/@here/harp-utils/lib/PerformanceTimer.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/ObjectUtils */ "./node_modules/@here/harp-utils/lib/ObjectUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/OptionsUtils */ "./node_modules/@here/harp-utils/lib/OptionsUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/TaskQueue */ "./node_modules/@here/harp-utils/lib/TaskQueue.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/UriResolver */ "./node_modules/@here/harp-utils/lib/UriResolver.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/UrlUtils */ "./node_modules/@here/harp-utils/lib/UrlUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/Functions */ "./node_modules/@here/harp-utils/lib/Functions.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/SampleBilinear */ "./node_modules/@here/harp-utils/lib/SampleBilinear.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/AuthenticationUtils */ "./node_modules/@here/harp-utils/lib/AuthenticationUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/GlslUtils */ "./node_modules/@here/harp-utils/lib/GlslUtils.js"), exports);
//# sourceMappingURL=index-common.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/index.js":
/*!************************************************!*\
  !*** ./node_modules/@here/harp-utils/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Provides utilities: logging and debugging.
 *
 * @remarks
 *
 * @packageDocumentation
 */
__exportStar(__webpack_require__(/*! ./index-common */ "./node_modules/@here/harp-utils/index-common.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/UrlPlatformUtils */ "./node_modules/@here/harp-utils/lib/UrlPlatformUtils.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/AuthenticationUtils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/AuthenticationUtils.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=AuthenticationUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/CachedResource.js":
/*!*************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/CachedResource.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=CachedResource.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/ContextLogger.js":
/*!************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/ContextLogger.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContextLogger = void 0;
/**
 * Context-aware logger that decorates log message with stack-based prefix, emits `headerMessage`
 * before first actual log message.
 */
class ContextLogger {
    /**
     * Construct a context-aware logger that logs to `m_logger`.
     */
    constructor(m_logger, headerMessage) {
        this.m_logger = m_logger;
        this.headerMessage = headerMessage;
        this.context = [];
        this.m_headerLogged = false;
        // They, are public member functions it's just tslint who doesn't understand this.
        this.warn = this.createLogMethod("warn");
        this.info = this.createLogMethod("info");
        this.error = this.createLogMethod("error");
    }
    /**
     * Push "attribute-like" context.
     *
     * Following log messages will be prefixed with `name` or `.name` depending on current context.
     */
    pushAttr(name) {
        this.context.push(`${this.context.length > 0 ? "." : ""}${name}`);
    }
    /**
     * Push "index-like" context.
     *
     * Following log messages will be prefixed with `[index]`.
     */
    pushIndex(index) {
        this.context.push(`[${index}]`);
    }
    pop() {
        this.context.pop();
    }
    createLogMethod(severity) {
        return (message, ...rest) => {
            if (!this.m_headerLogged) {
                this.m_logger.info(this.headerMessage);
                this.m_headerLogged = true;
            }
            this.m_logger[severity](`${this.context.join("")}: ${message}`, ...rest);
        };
    }
}
exports.ContextLogger = ContextLogger;
//# sourceMappingURL=ContextLogger.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/DOMUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/DOMUtils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DOMUtils = void 0;
var DOMUtils;
(function (DOMUtils) {
    /**
     * Gets language list used by the browser
     *
     * @returns Array of iso language codes
     */
    function getBrowserLanguages() {
        if (navigator.languages !== undefined && navigator.languages.length > 0) {
            const languageList = [];
            for (const lang of navigator.languages) {
                languageList.push(getIsoLanguageCode(lang));
            }
            return languageList;
        }
        if (navigator.language !== undefined) {
            return [getIsoLanguageCode(navigator.language)];
        }
        return undefined;
    }
    DOMUtils.getBrowserLanguages = getBrowserLanguages;
    /**
     * Gets ISO-639-1 language code from browser's code (ex. en for en-US)
     */
    function getIsoLanguageCode(language) {
        return language.substring(0, 2);
    }
})(DOMUtils = exports.DOMUtils || (exports.DOMUtils = {}));
//# sourceMappingURL=DOMUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Functions.js":
/*!********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Functions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.chainCallbacks = void 0;
/**
 * Chains two functions for further assigning as one wrapped callback function
 */
function chainCallbacks(f1, f2) {
    return function (...args) {
        if (f1) {
            f1.apply(this, args);
        }
        return f2.apply(this, args);
    };
}
exports.chainCallbacks = chainCallbacks;
//# sourceMappingURL=Functions.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/GlslUtils.js":
/*!********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/GlslUtils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertFragmentShaderToWebGL2 = exports.convertVertexShaderToWebGL2 = void 0;
/**
 * Converts webgl1-compatible vertex shader glsl code to webgl2.
 *
 * @param vertexShader - String containing the vertex shader glsl code.
 * @returns the converted glsl code.
 */
function convertVertexShaderToWebGL2(vertexShader) {
    return (["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") +
        "\n" +
        vertexShader);
}
exports.convertVertexShaderToWebGL2 = convertVertexShaderToWebGL2;
/**
 * Converts webgl1-compatible fragment shader glsl code to webgl2.
 *
 * @param fragmentShader - String containing the fragment shader glsl code.
 * @returns the converted glsl code.
 */
function convertFragmentShaderToWebGL2(fragmentShader) {
    return ([
        "#define varying in",
        "out highp vec4 pc_fragColor;",
        "#define gl_FragColor pc_fragColor",
        "#define gl_FragDepthEXT gl_FragDepth",
        "#define texture2D texture",
        "#define textureCube texture",
        "#define texture2DProj textureProj",
        "#define texture2DLodEXT textureLod",
        "#define texture2DProjLodEXT textureProjLod",
        "#define textureCubeLodEXT textureLod",
        "#define texture2DGradEXT textureGrad",
        "#define texture2DProjGradEXT textureProjGrad",
        "#define textureCubeGradEXT textureGrad"
    ].join("\n") +
        "\n" +
        fragmentShader);
}
exports.convertFragmentShaderToWebGL2 = convertFragmentShaderToWebGL2;
//# sourceMappingURL=GlslUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/GroupedPriorityList.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/GroupedPriorityList.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupedPriorityList = exports.PriorityListGroup = void 0;
/**
 * The `PriorityListGroup` contains a list of {@link PriorityListElement}s that all have the same
 * (integer) priority.
 */
class PriorityListGroup {
    constructor(priority, elements = new Array()) {
        this.priority = priority;
        this.elements = elements;
    }
    /**
     * Create and return a deep copy of the `PriorityListGroup<T>`.
     *
     * @returns A clone of the `PriorityListGroup<T>`.
     */
    clone() {
        return new PriorityListGroup(this.priority, this.elements.slice());
    }
    /**
     * Removes an element from the group.
     * @param element - The element to remove.
     * @returns true if the element was removed, false if it was not found in the group.
     */
    remove(element) {
        const foundIndex = this.elements.indexOf(element);
        if (foundIndex === -1) {
            return false;
        }
        this.elements.splice(foundIndex, 1);
        return true;
    }
}
exports.PriorityListGroup = PriorityListGroup;
/**
 * The `GroupedPriorityList` contains a [[PriorityListGroupMap]] to manage a larger number of items
 * in priority groups.
 */
class GroupedPriorityList {
    constructor() {
        this.groups = new Map();
    }
    /**
     * Add an element to the `GroupedPriorityList`. Selects group based on the elements priority.
     *
     * @param element - Element to be added.
     */
    add(element) {
        this.getGroup(element.priority).elements.push(element);
    }
    /**
     * Remove an element from the `GroupedPriorityList`.
     *
     * Note: It is required that the priority is the same as it was when the element has been added.
     * Otherwise, the removal will fail.
     *
     * @param element - Element to be removed.
     * @returns `True` if the element was removed, `false` otherwise.
     */
    remove(element) {
        const group = this.findGroup(element.priority);
        if (group !== undefined && group.remove(element)) {
            if (group.elements.length === 0) {
                this.groups.delete(group.priority);
            }
            return true;
        }
        return false;
    }
    /**
     * Remove all internal {@link PriorityListGroup}s.
     */
    clear() {
        this.groups.clear();
    }
    /**
     * Merge another {@link GroupedPriorityList} into this one.
     *
     * @param other - Other group to merge.
     */
    merge(other) {
        for (const otherGroup of other.groups) {
            const group = this.findGroup(otherGroup[1].priority);
            if (group === undefined) {
                this.groups.set(Math.floor(otherGroup[1].priority), otherGroup[1].clone());
                continue;
            }
            group.elements = group.elements.concat(otherGroup[1].elements);
        }
        return this;
    }
    clone() {
        const clone = new GroupedPriorityList();
        for (const [priority, group] of this.groups) {
            clone.groups.set(priority, group.clone());
        }
        return clone;
    }
    /**
     * Apply function to all elements in this `GroupedPriorityList`.
     *
     * @param {(element: T) => void} fun Function to apply.
     */
    forEach(fun) {
        for (const group of this.groups) {
            group[1].elements.forEach(fun);
        }
    }
    /**
     * Count the number of elements in this `GroupedPriorityList`.
     */
    count() {
        let n = 0;
        for (const group of this.groups) {
            n += group[1].elements.length;
        }
        return n;
    }
    /**
     * Get group of elements that have the same (integer) priority.
     *
     * @param priority - The priority to retrieve all elements from.
     */
    findGroup(priority) {
        const normalizedPriority = Math.floor(priority);
        const group = this.groups.get(normalizedPriority);
        return group;
    }
    /**
     * Get group of elements that have the same (integer) priority.
     *
     * @param priority - The priority to retrieve all elements from.
     */
    getGroup(priority) {
        let group = this.findGroup(priority);
        if (group === undefined) {
            const normalizedPriority = Math.floor(priority);
            group = new PriorityListGroup(normalizedPriority);
            this.groups.set(group.priority, group);
        }
        return group;
    }
}
exports.GroupedPriorityList = GroupedPriorityList;
//# sourceMappingURL=GroupedPriorityList.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/ConsoleChannel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/ConsoleChannel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsoleChannel = void 0;
/**
 * Class for the default console channel.
 */
class ConsoleChannel {
    error(message, ...optionalParams) {
        console.error(message, ...optionalParams);
    }
    debug(message, ...optionalParams) {
        console.debug(message, ...optionalParams);
    }
    info(message, ...optionalParams) {
        console.info(message, ...optionalParams);
    }
    log(message, ...optionalParams) {
        console.log(message, ...optionalParams);
    }
    trace(message, ...optionalParams) {
        console.trace(message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        console.warn(message, ...optionalParams);
    }
}
exports.ConsoleChannel = ConsoleChannel;
//# sourceMappingURL=ConsoleChannel.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/IChannel.js":
/*!**************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/IChannel.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=IChannel.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/ILogger.js":
/*!*************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/ILogger.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerOptions = exports.LogLevel = void 0;
/**
 * Enum log levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Log"] = 2] = "Log";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Warn"] = 4] = "Warn";
    LogLevel[LogLevel["Error"] = 5] = "Error";
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/**
 * Logger options to configure logger
 */
class LoggerOptions {
}
exports.LoggerOptions = LoggerOptions;
//# sourceMappingURL=ILogger.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/Logger.js":
/*!************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/Logger.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const ILogger_1 = __webpack_require__(/*! ./ILogger */ "./node_modules/@here/harp-utils/lib/Logger/ILogger.js");
/**
 * Logger class.
 */
class Logger {
    constructor(name, m_channel, options) {
        this.name = name;
        this.m_channel = m_channel;
        this.enabled = true;
        this.level = ILogger_1.LogLevel.Trace;
        if (options !== undefined) {
            this.update(options);
        }
    }
    error(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Error) {
            this.m_channel.error(this.prefix, message, ...optionalParams);
        }
    }
    debug(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Debug) {
            this.m_channel.debug(this.prefix, message, ...optionalParams);
        }
    }
    info(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Info) {
            this.m_channel.info(this.prefix, message, ...optionalParams);
        }
    }
    log(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Log) {
            this.m_channel.log(this.prefix, message, ...optionalParams);
        }
    }
    trace(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Trace) {
            this.m_channel.trace(this.prefix, message, ...optionalParams);
        }
    }
    warn(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Warn) {
            this.m_channel.warn(this.prefix, message, ...optionalParams);
        }
    }
    update(options) {
        this.enabled = options.enabled === undefined ? this.enabled : options.enabled;
        this.level = options.level === undefined ? this.level : options.level;
    }
    get prefix() {
        return this.name + ":";
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/LoggerManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/LoggerManager.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerManager = void 0;
const LoggerManagerImpl_1 = __webpack_require__(/*! ./LoggerManagerImpl */ "./node_modules/@here/harp-utils/lib/Logger/LoggerManagerImpl.js");
/**
 * The LoggerManager class implements a singleton object that handles logging.
 *
 * Example:
 *
 * ```typescript
 *
 * const logger = LoggerManager.instance.create("MyFontLoaderClass");
 * if (missingFonts.length > 0) {
 *     logger.error("These fonts can not be loaded: ", missingFonts);
 * } else {
 *     logger.log("All fonts have been loaded.");
 * }
 * ```
 */
class LoggerManager {
    static get instance() {
        return this.m_instance || (this.m_instance = new LoggerManagerImpl_1.LoggerManagerImpl());
    }
}
exports.LoggerManager = LoggerManager;
//# sourceMappingURL=LoggerManager.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/LoggerManagerImpl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/LoggerManagerImpl.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerManagerImpl = void 0;
const ConsoleChannel_1 = __webpack_require__(/*! ./ConsoleChannel */ "./node_modules/@here/harp-utils/lib/Logger/ConsoleChannel.js");
const Logger_1 = __webpack_require__(/*! ./Logger */ "./node_modules/@here/harp-utils/lib/Logger/Logger.js");
const WorkerChannel_1 = __webpack_require__(/*! ./WorkerChannel */ "./node_modules/@here/harp-utils/lib/Logger/WorkerChannel.js");
/**
 * LoggerManagerImpl is the class for the singleton instance of the logger manager.
 * It handles channels and loggers.
 */
class LoggerManagerImpl {
    constructor() {
        this.m_loggers = [];
        this.channel =
            typeof self === "undefined" || typeof self.document !== "undefined"
                ? new ConsoleChannel_1.ConsoleChannel()
                : new WorkerChannel_1.WorkerChannel();
    }
    getLoggerNames() {
        return this.m_loggers.map(logger => logger.name);
    }
    getLogger(name) {
        return this.m_loggers.find(logger => logger.name === name);
    }
    create(loggerName, options = {}) {
        if (this.m_levelSetForAll !== undefined &&
            (options.level === undefined || options.level < this.m_levelSetForAll)) {
            options.level = this.m_levelSetForAll;
        }
        const logger = new Logger_1.Logger(loggerName, this.channel, options);
        this.m_loggers.push(logger);
        return logger;
    }
    dispose(logger) {
        const found = this.m_loggers.indexOf(logger);
        if (found < 0) {
            throw new Error(`Cannot unregister "${logger}" : no such logger registered.`);
        }
        this.m_loggers.splice(found, 1);
    }
    updateAll(options) {
        for (const logger of this.m_loggers) {
            logger.update(options);
        }
    }
    update(loggerName, config) {
        for (const logger of this.m_loggers) {
            if (logger.name === loggerName) {
                logger.update(config);
            }
        }
    }
    enableAll(enabled) {
        for (const logger of this.m_loggers) {
            logger.enabled = enabled;
        }
    }
    enable(loggerName, value) {
        this.update(loggerName, { enabled: value });
    }
    setLogLevelForAll(level) {
        this.m_levelSetForAll = level;
        for (const logger of this.m_loggers) {
            logger.level = level;
        }
    }
    setLogLevel(loggerName, level) {
        this.update(loggerName, { level });
    }
    setChannel(channel) {
        this.channel = channel;
    }
}
exports.LoggerManagerImpl = LoggerManagerImpl;
//# sourceMappingURL=LoggerManagerImpl.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/MultiChannel.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/MultiChannel.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultiChannel = void 0;
/**
 * Class allowing mixing several channels.
 */
class MultiChannel {
    constructor(...channels) {
        this.channels = [];
        this.channels = channels;
    }
    error(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.error(message, ...optionalParams);
        }
    }
    debug(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.debug(message, ...optionalParams);
        }
    }
    info(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.info(message, ...optionalParams);
        }
    }
    log(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.log(message, ...optionalParams);
        }
    }
    trace(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.trace(message, ...optionalParams);
        }
    }
    warn(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.warn(message, ...optionalParams);
        }
    }
}
exports.MultiChannel = MultiChannel;
//# sourceMappingURL=MultiChannel.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/WorkerChannel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/WorkerChannel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerChannel = exports.WORKERCHANNEL_MSG_TYPE = void 0;
const ILogger_1 = __webpack_require__(/*! ./ILogger */ "./node_modules/@here/harp-utils/lib/Logger/ILogger.js");
exports.WORKERCHANNEL_MSG_TYPE = "worker-channel-message";
/**
 * The class for the worker channel.
 */
class WorkerChannel {
    error(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Error
        };
        self.postMessage(workerMessage);
    }
    debug(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Debug
        };
        self.postMessage(workerMessage);
    }
    info(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Info
        };
        self.postMessage(workerMessage);
    }
    log(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Log
        };
        self.postMessage(workerMessage);
    }
    trace(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Trace
        };
        self.postMessage(workerMessage);
    }
    warn(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Warn
        };
        self.postMessage(workerMessage);
    }
}
exports.WorkerChannel = WorkerChannel;
//# sourceMappingURL=WorkerChannel.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./ConsoleChannel */ "./node_modules/@here/harp-utils/lib/Logger/ConsoleChannel.js"), exports);
__exportStar(__webpack_require__(/*! ./IChannel */ "./node_modules/@here/harp-utils/lib/Logger/IChannel.js"), exports);
__exportStar(__webpack_require__(/*! ./ILogger */ "./node_modules/@here/harp-utils/lib/Logger/ILogger.js"), exports);
__exportStar(__webpack_require__(/*! ./Logger */ "./node_modules/@here/harp-utils/lib/Logger/Logger.js"), exports);
__exportStar(__webpack_require__(/*! ./LoggerManager */ "./node_modules/@here/harp-utils/lib/Logger/LoggerManager.js"), exports);
__exportStar(__webpack_require__(/*! ./MultiChannel */ "./node_modules/@here/harp-utils/lib/Logger/MultiChannel.js"), exports);
__exportStar(__webpack_require__(/*! ./WorkerChannel */ "./node_modules/@here/harp-utils/lib/Logger/WorkerChannel.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Math2D.js":
/*!*****************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Math2D.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Math2D = void 0;
var Math2D;
(function (Math2D) {
    /**
     * Alternative 2D box object with less memory impact (four numbers instead of two min/max
     * objects with two numbers each). Should be faster.
     */
    class Box {
        /**
         * Alternative 2D box object with less memory impact (four numbers instead of two min/max
         * objects with two numbers each). Should be faster.
         *
         * @param x - New X value.
         * @param y - New y value.
         * @param w - New w value.
         * @param h - New h value.
         */
        constructor(x = 0, y = 0, w = 0, h = 0) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        /**
         * Set new values to all properties of the box.
         *
         * @param x - New X value.
         * @param y - New y value.
         * @param w - New w value.
         * @param h - New h value.
         */
        set(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        /**
         * Copy values from another box.
         *
         * @param box - Another box.
         */
        copy(box) {
            this.x = box.x;
            this.y = box.y;
            this.w = box.w;
            this.h = box.h;
        }
        /**
         * Test box for inclusion of point.
         *
         * @param x - X coordinate of point.
         * @param y - Y coordinate of point.
         */
        contains(x, y) {
            return this.x <= x && this.x + this.w >= x && this.y <= y && this.y + this.h >= y;
        }
        /**
         * Test box for inclusion of another box.
         *
         * @param other - Box 2 to test for inclusion.
         */
        containsBox(other) {
            const xmax = other.x + other.w;
            const ymax = other.y + other.h;
            return (this.contains(other.x, other.y) &&
                this.contains(xmax, other.y) &&
                this.contains(other.x, ymax) &&
                this.contains(xmax, ymax));
        }
        /**
         * Test two boxes for intersection.
         *
         * @param other - Box 2 to test for intersection.
         */
        intersects(other) {
            return (this.x <= other.x + other.w &&
                this.x + this.w >= other.x &&
                this.y <= other.y + other.h &&
                this.y + this.h >= other.y);
        }
    }
    Math2D.Box = Box;
    /**
     * Compute squared distance between two 2D points `a` and `b`.
     *
     * @param ax - Point a.x
     * @param ay - Point a.y
     * @param bx - Point b.x
     * @param by - Point b.y
     * @returns Squared distance between the two points
     */
    function distSquared(ax, ay, bx, by) {
        return (ax - bx) * (ax - bx) + (ay - by) * (ay - by);
    }
    Math2D.distSquared = distSquared;
    /**
     * Computes the squared length of a line.
     *
     * @param line - An array of that forms a line via [x,y,z,x,y,z,...] tuples.
     */
    function computeSquaredLineLength(line) {
        let squaredLineLength = 0;
        const length = line.length - 4;
        for (let i = 0; i < length; i += 3) {
            const xDiff = line[i + 3] - line[i];
            const yDiff = line[i + 4] - line[i + 1];
            squaredLineLength += xDiff * xDiff + yDiff * yDiff;
        }
        return squaredLineLength;
    }
    Math2D.computeSquaredLineLength = computeSquaredLineLength;
    /**
     * Compute squared distance between a 2D point and a 2D line segment.
     *
     * @param px - Test point X
     * @param py - Test point y
     * @param l0x - Line segment start X
     * @param l0y - Line segment start Y
     * @param l1x - Line segment end X
     * @param l1y - Line segment end Y
     * @returns Squared distance between point and line segment
     */
    function distToSegmentSquared(px, py, l0x, l0y, l1x, l1y) {
        const lineLengthSuared = distSquared(l0x, l0y, l1x, l1y);
        if (lineLengthSuared === 0) {
            return distSquared(px, py, l0x, l0y);
        }
        let t = ((px - l0x) * (l1x - l0x) + (py - l0y) * (l1y - l0y)) / lineLengthSuared;
        t = Math.max(0, Math.min(1, t));
        return distSquared(px, py, l0x + t * (l1x - l0x), l0y + t * (l1y - l0y));
    }
    Math2D.distToSegmentSquared = distToSegmentSquared;
    /**
     * Finds the intersections of a line and a circle.
     *
     * @param xLine1 - abscissa of first line point.
     * @param yLine1 - ordinate of second line point.
     * @param xLine2 - abscissa of second line point.
     * @param yLine2 - ordinate of second line point.
     * @param radius - circle radius.
     * @param xCenter - abscissa of circle center.
     * @param yCenter - ordinate of circle center.
     * @returns coordinates of the intersections (1 if the line is tangent to the circle, 2
     * if it's secant) or undefined if there's no intersection.
     */
    function intersectLineAndCircle(xLine1, yLine1, xLine2, yLine2, radius, xCenter = 0, yCenter = 0) {
        // Line equation: dy*x - dx*y = c, c = dy*x1 - dx*y1 = x1*y2 - x2*y1
        // Circle equation: (x-xCenter)^2 + (y-yCenter)^2 = r^2
        // 1. Translate circle center to origin of coordinates:
        // u = x - xCenter
        // v = y - yCenter
        // circle: u^2 + v^2 = r^2
        // line: dy*u - dx*v = cp, cp = c - dy*xCenter - dx*yCenter
        // 2. Intersections are solutions of a quadratic equation:
        // ui = (cp*dy +/- sign(dy)*dx*discriminant / dSq
        // vi = (-cp*dx +/- |dy|*discriminant / dSq
        // discriminant = r^2*dSq - cp^2, dSq = dx^2 + dy^2
        // The sign of the discriminant indicates the number of intersections.
        // 3. Translate intersection coordinates back to original space:
        // xi = xCenter + ui
        // yi = yCenter + yi
        const epsilon = 1e-10;
        const dx = xLine2 - xLine1;
        const dy = yLine2 - yLine1;
        const dSq = dx * dx + dy * dy;
        const rSq = radius * radius;
        const c = xLine1 * yLine2 - xLine2 * yLine1;
        const cp = c - dy * xCenter + dx * yCenter;
        const discriminantSquared = rSq * dSq - cp * cp;
        if (discriminantSquared < -epsilon) {
            // no intersection
            return undefined;
        }
        const xMid = cp * dy;
        const yMid = -cp * dx;
        if (discriminantSquared < epsilon) {
            // 1 intersection (tangent line)
            return { x1: xCenter + xMid / dSq, y1: yCenter + yMid / dSq };
        }
        const discriminant = Math.sqrt(discriminantSquared);
        // 2 intersections (secant line)
        const signDy = dy < 0 ? -1 : 1;
        const absDy = Math.abs(dy);
        const xDist = signDy * dx * discriminant;
        const yDist = absDy * discriminant;
        return {
            x1: xCenter + (xMid + xDist) / dSq,
            y1: yCenter + (yMid + yDist) / dSq,
            x2: xCenter + (xMid - xDist) / dSq,
            y2: yCenter + (yMid - yDist) / dSq
        };
    }
    Math2D.intersectLineAndCircle = intersectLineAndCircle;
    /**
     * Computes the intersection point between two lines.
     *
     * @remarks
     * This functions computes the
     * {@link https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
     *    | line-line intersection} of two lines given two points on each line.
     *
     * @param x1 - x coordinate of the first point of the first line.
     * @param y1 - y coordinate of the first point of the first line.
     * @param x2 - x coordinate of the second point of the first line.
     * @param y2 - y coordinate of the second point of the first line.
     * @param x3 - x coordinate of the first point of the second line.
     * @param y3 - y coordinate of the first point of the second line.
     * @param x4 - x coordinate of the second point of the second line.
     * @param y4 - y coordinate of the second point of the second line.
     * @param result - The resulting point.
     */
    function intersectLines(x1, y1, x2, y2, x3, y3, x4, y4, result = { x: 0, y: 0 }) {
        const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (d === 0) {
            return undefined;
        }
        const px = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / d;
        const py = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / d;
        result.x = px;
        result.y = py;
        return result;
    }
    Math2D.intersectLines = intersectLines;
})(Math2D = exports.Math2D || (exports.Math2D = {}));
//# sourceMappingURL=Math2D.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/MathUtils.js":
/*!********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/MathUtils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MathUtils = void 0;
var MathUtils;
(function (MathUtils) {
    /**
     * Ensures that input value fits in a given range.
     *
     * @param value - The value to be clamped.
     * @param min - Minimum value.
     * @param max - Maximum value.
     *
     * @returns Clamped value.
     */
    function clamp(value, min, max) {
        return value < min ? min : value > max ? max : value;
    }
    MathUtils.clamp = clamp;
    /**
     * Returns a smooth interpolation between the values edge0 and edge1 based on the interpolation
     * factor x. `0 <= x <= 1`.
     * @see https://en.wikipedia.org/wiki/Smoothstep
     *
     * @param edge0 -
     * @param edge1 -
     * @param x -
     */
    function smoothStep(edge0, edge1, x) {
        // Scale, bias and saturate x to 0..1 range
        x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
        // Evaluate polynomial
        return x * x * (3 - 2 * x);
    }
    MathUtils.smoothStep = smoothStep;
    /**
     * Returns a smooth interpolation between the values edge0 and edge1 based on the interpolation
     * factor x. `0 <= x <= 1`.
     *
     * Improved version by Ken Perlin, which has zero 1st- and 2nd-order derivatives at `x = 0` and
     * `x = 1`:
     *
     * @see https://en.wikipedia.org/wiki/Smoothstep
     *
     * @param edge0 -
     * @param edge1 -
     * @param x -
     */
    function smootherStep(edge0, edge1, x) {
        // Scale, and clamp x to 0..1 range
        x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
        // Evaluate polynomial
        return x * x * x * (x * (x * 6 - 15) + 10);
    }
    MathUtils.smootherStep = smootherStep;
    /**
     * Maps a number from one range to another.
     *
     * @param val - The incoming value to be converted.
     * @param inMin - Lower bound of the value's current range.
     * @param inMax - Upper bound of the value's current range.
     * @param outMin - Lower bound of the value's target range.
     * @param outMax - Upper bound of the value's target range.
     */
    function map(val, inMin, inMax, outMin, outMax) {
        return ((val - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
    MathUtils.map = map;
    /**
     * Returns the smaller of the two given numbers. Both numbers may be undefined, in which case
     * the result is undefined. If only one of the numbers is undefined, the other number is
     * returned.
     *
     * @param a - First number.
     * @param b - Second number.
     */
    function min2(a, b) {
        let result;
        if (a !== undefined) {
            result = a;
        }
        if (b !== undefined) {
            result = result === undefined ? b : Math.min(result, b);
        }
        return result;
    }
    MathUtils.min2 = min2;
    /**
     * Returns the larger of the two given numbers. Both numbers may be undefined, in which case
     * the result is undefined. If only one of the numbers is undefined, the other number is
     * returned.
     *
     * @param a - First number.
     * @param b - Second number.
     */
    function max2(a, b) {
        let result;
        if (a !== undefined) {
            result = a;
        }
        if (b !== undefined) {
            result = result === undefined ? b : Math.max(result, b);
        }
        return result;
    }
    MathUtils.max2 = max2;
    /**
     * Checks if the value of a given number is inside an upper or lower bound. The bounds may be
     * undefined, in which case their value is ignored.
     *
     * @param value - Value to check.
     * @param lowerBound - The lower bound to check the value against.
     * @param upperBound - The upper bound to check the value against.
     *
     * @returns `true` if value is inside the bounds or if the bounds are `undefined`, `false`
     *          otherwise.
     */
    function isClamped(value, lowerBound, upperBound) {
        if (lowerBound !== undefined && value < lowerBound) {
            return false;
        }
        if (upperBound !== undefined && value > upperBound) {
            return false;
        }
        return true;
    }
    MathUtils.isClamped = isClamped;
    /**
     * Smoothly interpolates between two values using cubic formula
     *
     * @param startValue -
     * @param endValue -
     * @param time -
     * @returns Result of the interpolation within the range of `[startValue, endValue]`
     */
    function easeInOutCubic(startValue, endValue, time) {
        const timeValue = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
        return startValue + (endValue - startValue) * timeValue;
    }
    MathUtils.easeInOutCubic = easeInOutCubic;
})(MathUtils = exports.MathUtils || (exports.MathUtils = {}));
//# sourceMappingURL=MathUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Mixins.js":
/*!*****************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Mixins.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyMixinsWithoutProperties = exports.applyMixins = void 0;
/**
 * Copy methods and properties from one prototype into another.
 *
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * @param derivedCtor - Class to mix methods and properties into.
 * @param baseCtors - Class to take all methods and properties from.
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
/**
 * Copy methods from one prototype into another.
 *
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * @param derivedCtor - Class to mix methods into.
 * @param baseCtors - Class to take all methods from.
 */
function applyMixinsWithoutProperties(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
            if (descriptor !== undefined &&
                descriptor.get === undefined &&
                name !== "constructor") {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
exports.applyMixinsWithoutProperties = applyMixinsWithoutProperties;
//# sourceMappingURL=Mixins.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/ObjectUtils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/ObjectUtils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pick = exports.cloneDeep = void 0;
/**
 * Deep clone of object.
 *
 * Like `JSON.parse(JSON.stringify(obj))`, but supports basic javascript types (string, number,
 * object), `Date` and `RegExp`s and cycles.
 *
 * Throws error if enounters object with `prototype` assuming that in general class instances
 * cannot be reliably cloned by generic algorithm.
 */
function cloneDeep(obj) {
    const cache = new Map();
    function cloneInternal(src) {
        if (src === null) {
            return null;
        }
        else if (typeof src === "object") {
            const cached = cache.get(src);
            if (cached !== undefined) {
                return cached;
            }
            if (Array.isArray(src)) {
                const result = [];
                cache.set(src, result);
                result.length = src.length;
                for (let i = 0; i < result.length; ++i) {
                    result[i] = cloneInternal(src[i]);
                }
                return result;
            }
            else if (src instanceof Date) {
                const result = new Date(src.getTime());
                cache.set(src, result);
                return result;
            }
            else if (src instanceof RegExp) {
                const result = new RegExp(src.source, src.flags);
                cache.set(src, result);
                return result;
            }
            else if (src.constructor !== Object) {
                throw new Error("cloneDeep doesn't support objects with custom prototypes");
            }
            else {
                const result = {};
                cache.set(src, result);
                for (const key in src) {
                    if (src.hasOwnProperty(key)) {
                        result[key] = cloneInternal(src[key]);
                    }
                }
                return result;
            }
        }
        else {
            // string, number, boolean, undefined and functions are returned as is
            return src;
        }
    }
    const r = cloneInternal(obj);
    cache.clear();
    return r;
}
exports.cloneDeep = cloneDeep;
/**
 * Pick `props` from `object.
 *
 * Runtime version of `Pick<T,K>`.
 */
function pick(object, props) {
    const result = {};
    for (const propName of props) {
        if (object.hasOwnProperty(propName)) {
            result[propName] = object[propName];
        }
    }
    return result;
}
exports.pick = pick;
//# sourceMappingURL=ObjectUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/OptionsUtils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/OptionsUtils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOptionValue = void 0;
function getOptionValue(...values) {
    for (const candidate of values) {
        if (candidate !== undefined && candidate !== null) {
            return candidate;
        }
    }
    return undefined;
}
exports.getOptionValue = getOptionValue;
//# sourceMappingURL=OptionsUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/PerformanceTimer.js":
/*!***************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/PerformanceTimer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceTimer = void 0;
/**
 * See:
 * https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now
 */
class PerformanceTimer {
    /**
     * Returns timestamp in milliseconds since page load.
     *
     * If the [[DOMHighResTimeStamp]] is supported, the resolution is up to 5 microseconds,
     * otherwise it is in milliseconds. Timespans are computed by taking the difference between two
     * samples.
     *
     * Example:
     * ```typescript
     * const now = PerformanceTimer.now();
     * // call some expensive function for which you want to check the duration.
     * const end = PerformanceTimer.now();
     * const elapsedTime = end - now;
     * ```
     */
    static now() {
        return PerformanceTimer.nowFunc();
    }
    static getNowFunc() {
        if (typeof performance !== "undefined" && typeof performance.now !== "undefined") {
            return () => performance.now();
        }
        // fall back to Date.getTime()
        return () => {
            return new Date().getTime();
        };
    }
}
exports.PerformanceTimer = PerformanceTimer;
PerformanceTimer.instance = new PerformanceTimer();
PerformanceTimer.nowFunc = PerformanceTimer.getNowFunc();
//# sourceMappingURL=PerformanceTimer.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/SampleBilinear.js":
/*!*************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/SampleBilinear.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sampleBilinear = void 0;
/**
 * Returns a bilinear-interpolated texture sample for a given texture.
 * @param texture - Two-dimensional texture to sample.
 * @param width - Texture width.
 * @param height - Texture height.
 * @param u - Number between 0 and 1 representing the location to sample in the width dimension.
 * @param v - Number between 0 and 1 representing the location to sample in the height dimension.
 */
function sampleBilinear(texture, width, height, u, v) {
    const maxXIndex = width - 1;
    const maxYIndex = height - 1;
    // Compute the x and y coordinates relative to the mesh size.
    const xIndex = u * maxXIndex;
    const xIndexFloor = Math.floor(xIndex);
    const yIndex = v * maxYIndex;
    const yIndexFloor = Math.floor(yIndex);
    const swIndex = yIndexFloor * width + xIndexFloor;
    const seIndex = xIndexFloor < maxXIndex ? swIndex + 1 : swIndex;
    const nwIndex = yIndexFloor < maxYIndex ? swIndex + width : swIndex;
    const neIndex = xIndexFloor < maxXIndex ? nwIndex + 1 : nwIndex;
    const swElevation = texture[swIndex];
    const seElevation = texture[seIndex];
    const nwElevation = texture[nwIndex];
    const neElevation = texture[neIndex];
    // Get the fractional components to do bilinear interpolation.
    const xFrac = Number.isInteger(xIndex) ? 0 : xIndex - xIndexFloor;
    const xFracInverse = 1 - xFrac;
    const yFrac = Number.isInteger(yIndex) ? 0 : yIndex - yIndexFloor;
    const yFracInverse = 1 - yFrac;
    // The interpolation is the sum of the four closest neighbours each
    // multiplied by the diagonal areas.
    const result = swElevation * xFracInverse * yFracInverse +
        seElevation * xFrac * yFracInverse +
        nwElevation * xFracInverse * yFrac +
        neElevation * xFrac * yFrac;
    return result;
}
exports.sampleBilinear = sampleBilinear;
//# sourceMappingURL=SampleBilinear.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/TaskQueue.js":
/*!********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/TaskQueue.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskQueue = void 0;
/**
 * A Pull-TaskQueue sorted by priority and group-able {@link Task}s by {@link Task.group}.
 *
 * @remarks
 *
 * @example
 * Sample Usage
 * ```
 *  const taskQueue = new TaskQueue({
 *      group: ["group1"]
 *  })
 *  taskQueue.add({
 *     group: "group1",
 *     execute: () => {
 *         console.log("task of group1 executed");
 *     },
 *     getPrio: () => {
 *         return 0;
 *     }
 *   });
 *
 * taskQueue.update();
 * taskQueue.processNext("group1");
 *
 *  ```
 */
class TaskQueue {
    constructor(m_options) {
        var _a;
        this.m_options = m_options;
        this.m_taskLists = new Map();
        (_a = this.m_options.groups) === null || _a === void 0 ? void 0 : _a.forEach(group => {
            this.m_taskLists.set(group, []);
        });
        if (this.m_options.prioSortFn) {
            this.sort = this.m_options.prioSortFn;
        }
    }
    /**
     * Updates the lists in the queue depending on their priority functions and removes
     * expired Tasks, based on their isExpired functions result.
     *
     * @param group The Group to update, if not set all groups will be updated.
     */
    update(group) {
        if (group === undefined) {
            this.m_taskLists.forEach(taskList => {
                this.updateTaskList(taskList);
            });
        }
        else {
            const taskList = this.getTaskList(group);
            if (taskList) {
                this.updateTaskList(taskList);
            }
        }
    }
    /**
     * Adds a Task to the Queue
     *
     * @param task
     * @returns true if succesfully added, otherwise false
     */
    add(task) {
        var _a;
        if (this.m_taskLists.has(task.group)) {
            const taskList = this.m_taskLists.get(task.group);
            if (!(taskList === null || taskList === void 0 ? void 0 : taskList.includes(task))) {
                (_a = this.m_taskLists.get(task.group)) === null || _a === void 0 ? void 0 : _a.push(task);
                return true;
            }
        }
        return false;
    }
    /**
     * Removes a Task from the Queue
     *
     * @param task
     * @returns true if succesfully removed, otherwise false
     */
    remove(task) {
        var _a, _b;
        if (this.m_taskLists.has(task.group)) {
            const index = (_a = this.m_taskLists.get(task.group)) === null || _a === void 0 ? void 0 : _a.indexOf(task);
            if (index !== -1) {
                (_b = this.m_taskLists.get(task.group)) === null || _b === void 0 ? void 0 : _b.splice(index, 1);
                return true;
            }
        }
        return false;
    }
    /**
     * Returns the number of remaining tasks.
     *
     * @param group if group is set, it will return only the remaining tasks for this group,
     * otherwise it will return the complete amount of tasks left.
     */
    numItemsLeft(group) {
        var _a, _b;
        let numLeft = 0;
        if (group === undefined) {
            this.m_taskLists.forEach(tasklist => {
                numLeft += tasklist.length;
            });
        }
        else {
            numLeft += (_b = (_a = this.getTaskList(group)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        }
        return numLeft;
    }
    /**
     * Processes the next Tasks for a group
     *
     * @param group The group the Tasks are pulled from.
     * @param shouldProcess A condition that, if set will be executed before the task is processed,
     * if returns true, the task will run
     * @param n The amount of tasks that should be pulled, @defaults to 1
     * @returns false if thte list was empty
     */
    processNext(group, shouldProcess, n = 1) {
        if (!this.getTaskList(group) || this.numItemsLeft(group) <= 0) {
            return false;
        }
        for (let i = 0; i < n && this.numItemsLeft(group) > 0; i++) {
            const nextTask = this.pull(group, true);
            if (nextTask !== undefined) {
                //if a condition is set, execute it
                if (!shouldProcess || (shouldProcess === null || shouldProcess === void 0 ? void 0 : shouldProcess(nextTask))) {
                    nextTask.execute();
                }
                else {
                    //as the task was not executed but already pulled, add it back
                    //TODO: dont even pull it if it will not execute, this currently
                    // interferes with the skipping and removal of expired tasks on this.pull
                    this.add(nextTask);
                }
            }
        }
        return true;
    }
    clear() {
        this.m_taskLists.clear();
    }
    pull(group, checkIfExpired = false) {
        var _a, _b;
        const taskList = this.getTaskList(group);
        let nextTask;
        if (taskList) {
            nextTask = (_a = this.getTaskList(group)) === null || _a === void 0 ? void 0 : _a.pop();
            if (checkIfExpired && nextTask && ((_b = nextTask.isExpired) === null || _b === void 0 ? void 0 : _b.call(nextTask))) {
                return this.pull(group, checkIfExpired);
            }
        }
        return nextTask;
    }
    sort(a, b) {
        // the highest number in the beginning as the last in the array with
        // highest priority which equals 0 will start to be processed
        return b.getPriority() - a.getPriority();
    }
    getTaskList(group) {
        return this.m_taskLists.get(group);
    }
    updateTaskList(taskList) {
        var _a;
        for (let i = 0; i < taskList.length; i++) {
            const task = taskList[i];
            if ((_a = task === null || task === void 0 ? void 0 : task.isExpired) === null || _a === void 0 ? void 0 : _a.call(task)) {
                taskList.splice(i, 1);
                i--;
            }
        }
        taskList.sort(this.sort);
    }
}
exports.TaskQueue = TaskQueue;
//# sourceMappingURL=TaskQueue.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/UriResolver.js":
/*!**********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/UriResolver.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.composeUriResolvers = exports.RelativeUriResolver = exports.PrefixMapUriResolver = void 0;
const UrlUtils_1 = __webpack_require__(/*! ./UrlUtils */ "./node_modules/@here/harp-utils/lib/UrlUtils.js");
/**
 * Basic, import-map like {@link UriResolver}.
 *
 * Resolves `uris` basing on exact or prefix match of `key` from `definitions`.
 *
 * In definitions, `key` is matched against input uri with following strategy:
 *  - `key` without trailing `/` -> `key` and input `uri` must be identical
 *  - `key` with trailing `/`, -> `key` is treated as "package prefix", so `uri` must start with
 *    `key`
 *
 * Example:
 * ```
 * {
 *     "local://poiMasterList": "/assets/poiMasterList.json"
 *        // will match only 'local://poiMasterList' and resolve `/assets/poiMasterList.json`
 *     "local://icons/": "/assets/icons/"
 *        // will match only 'local://icons/ANYPATH' (and similar) and resolve to
 *        // `/assets/icons/ANYPATH
 * }
 * ```
 * Inspired by [`WICG` import maps proposal](https://github.com/WICG/import-maps#the-import-map).
 */
class PrefixMapUriResolver {
    constructor(definitions) {
        this.definitions = definitions;
    }
    resolveUri(uri) {
        return Object.keys(this.definitions).reduce((r, key) => {
            if (key.endsWith("/") && r.startsWith(key)) {
                const newPrefix = this.definitions[key];
                return newPrefix + r.substr(key.length);
            }
            else if (r === key) {
                return this.definitions[key];
            }
            return r;
        }, uri);
    }
}
exports.PrefixMapUriResolver = PrefixMapUriResolver;
/**
 * [UriResolver] that resolve relative `uri`s against to parent resource `uri`.
 */
class RelativeUriResolver {
    constructor(parentUri) {
        this.parentUri = parentUri;
    }
    resolveUri(uri) {
        return UrlUtils_1.resolveReferenceUri(this.parentUri, uri);
    }
}
exports.RelativeUriResolver = RelativeUriResolver;
/**
 * Compose URI resolvers.
 *
 * Creates new {@link UriResolver} that applies resolvers in orders or arguments.
 *
 * Example:
 *
 *     const themeUrl = ...; // url of parent object
 *     const childUrlResolver = composeUrlResolvers(
 *           new RelativeUriResolver(themeUrl),
 *           defaultUrlResolver
 *     );
 */
function composeUriResolvers(...resolvers) {
    return {
        resolveUri(originalUrl) {
            return resolvers.reduce((url, resolver) => {
                if (resolver !== undefined) {
                    return resolver.resolveUri(url);
                }
                else {
                    return url;
                }
            }, originalUrl);
        }
    };
}
exports.composeUriResolvers = composeUriResolvers;
//# sourceMappingURL=UriResolver.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/UrlPlatformUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/UrlPlatformUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAppBaseUrl = void 0;
const UrlUtils_1 = __webpack_require__(/*! ./UrlUtils */ "./node_modules/@here/harp-utils/lib/UrlUtils.js");
/**
 * Get base URL for from where relative URLs will be loaded.
 *
 * * In browser, it resolves to `baseUrl(location.href)` i.e document's base URL
 * (see: https://www.w3.org/TR/WD-html40-970917/htmlweb.html#h-5.1.2).
 *
 * * In node, it resolves to `file://${process.cwd()}`.
 */
function getAppBaseUrl() {
    if (typeof window === "undefined") {
        return `file://${process.cwd()}/`;
    }
    return UrlUtils_1.baseUrl(window.location.href);
}
exports.getAppBaseUrl = getAppBaseUrl;
//# sourceMappingURL=UrlPlatformUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/UrlUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/UrlUtils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUrlHostAndProtocol = exports.getUrlOrigin = exports.baseUrl = exports.resolveReferenceUri = void 0;
/**
 * Resolve URI of referenced object w.r.t parent URI.
 *
 * Resolves `childUri` as it would be loaded from location specified by `parentUri`.
 *
 * If `childUri` is absolute, then it is returned unchanged.
 * If `childUri` is origin-absolute path, then only origin path is taken from `parentUri`.
 *
 * See [[baseUri]] for reference how base URL of `parentUri` is determined.
 *
 * Supports `http:`, `https:`, `file:`, `data:` schemes.
 *
 * Examples:
 *
 *     // normal case, child is sibling
 *     https://foo.com/themes/day.json + images/foo.png -> https://foo.com/themes/images/foo.png
 *
 *     // parent is "folder", so child is just located in this folder
 *     https://foo.com/themes/ + images/foo.png -> https://foo.com/themes/images/foo.png
 *
 *     // parent looks like leaf, so last component is stripped
 *     https://foo.com/themes + images/foo.png -> https://foo.com/images/foo.png
 *
 *     // origin-absolute URL, takes only origin from parent
 *     https://foo.com/themes/day.json + /fonts/foo.json -> https://foo.com/fonts/foo.json
 *
 * @param parentUri - URI of parent resource
 * @param childUri - URI of child as referenced from parent resource
 * @return `childUrl` as if anchored in location of `parentUrl`
 */
function resolveReferenceUri(parentUri, childUri) {
    if (absoluteUrlWithOriginRe.test(childUri)) {
        return childUri;
    }
    else if (childUri.startsWith("/")) {
        const origin = getUrlOrigin(parentUri);
        return origin + childUri;
    }
    else {
        if (childUri.startsWith("./")) {
            childUri = childUri.substr(2);
        }
        const parentBaseUrl = baseUrl(parentUri);
        return parentBaseUrl + childUri;
    }
}
exports.resolveReferenceUri = resolveReferenceUri;
const absoluteUrlWithOriginRe = new RegExp("^(((?:[a-z]+:)?//)|(file:/)|(data:))", "i");
/**
 * Returns base URL of given resource URL.
 *
 * `Url` with trailing slash are considered genuine 'locations', they are returned as is, however if
 * `url` ends with name component it is treated as "leaf", so last path component is removed.
 *
 * Standalone files (without any folder structure) are considered relative to `./`.
 *
 * Examples:
 * ```
 *     https://foo.com/themes/a.json -> https://foo.com/themes/
 *     https://foo.com/themes/ -> https://foo.com/themes/
 *     https://foo.com/themes -> https://foo.com/ // note, themes is treated as leaf
 *     themes/day.json -> themes/
 *     themes -> ./
 * ```
 */
function baseUrl(url) {
    if (url === undefined) {
        return "./";
    }
    let idx = url.indexOf("#");
    if (idx !== -1) {
        url = url.slice(0, idx);
    }
    idx = url.indexOf("?");
    if (idx !== -1) {
        url = url.slice(0, idx);
    }
    idx = url.lastIndexOf("/");
    if (idx === -1) {
        return "./";
    }
    else {
        return url.substring(0, idx + 1);
    }
}
exports.baseUrl = baseUrl;
/**
 * Get `origin` part of URL.
 *
 * @example
 *    https://example.com/foo -> https://example.com
 *    //example.com:8080/ -> //example.com:8080
 *    file:///etc/hosts ->
 *
 * @param url - input URL
 * @return origin of given URL
 */
function getUrlOrigin(url) {
    if (url === undefined) {
        return "";
    }
    const parsed = getUrlHostAndProtocol(url);
    if (parsed.protocol === "file:") {
        return "file://";
    }
    else if (parsed.host && parsed.protocol) {
        return parsed.protocol + "//" + parsed.host;
    }
    else if (parsed.host) {
        return "//" + parsed.host;
    }
    else if (parsed.protocol) {
        return parsed.protocol + "//";
    }
    else {
        return "";
    }
}
exports.getUrlOrigin = getUrlOrigin;
/**
 * Parse `host` and `protocol` part from URL.
 */
function getUrlHostAndProtocol(url) {
    const urlOriginRe = new RegExp(/^(?:([a-z]+:))?\/\/([^\/]*)/, "i");
    const match = url.match(urlOriginRe);
    if (!match) {
        throw new Error(`getUrlHostAndProtocol: unable to parse URL '${url}'`);
    }
    return {
        protocol: match[1],
        host: match[2]
    };
}
exports.getUrlHostAndProtocol = getUrlHostAndProtocol;
//# sourceMappingURL=UrlUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/assert.js":
/*!*****************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/assert.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertExists = exports.assert = void 0;
// cache value, because access to process.env.NODE_ENV is SLOW!
const isProduction = "development" === "production";
//TODO: Make assertHandler configurable
/**
 * Implementation of assert as a development help
 *
 * Note - this is deliberately a global function so that minimizers remove the
 * entire call when building for production.
 *
 * @hidden
 * @param condition - Condition to match, if false, throws an Error(message)
 * @param message - Optional message, defaults to "ASSERTION failed"
 */
function assert(condition, message) {
    if (!isProduction) {
        if (!condition) {
            throw new Error(message !== undefined ? message : "ASSERTION failed");
        }
    }
}
exports.assert = assert;
function assertExists(element, message) {
    if (!isProduction) {
        if (element === undefined || element === null) {
            throw new Error(message !== undefined ? message : "ASSERTION failed: Element is undefined or null");
        }
    }
    return element;
}
exports.assertExists = assertExists;
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/index-worker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/index-worker.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./lib/VectorTileDecoder */ "./node_modules/@here/harp-vectortile-datasource/lib/VectorTileDecoder.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/GeoJsonTilerService */ "./node_modules/@here/harp-vectortile-datasource/lib/GeoJsonTilerService.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/OmvDecoderDefs */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvDecoderDefs.js"), exports);
__exportStar(__webpack_require__(/*! ./lib/DataAdapter */ "./node_modules/@here/harp-vectortile-datasource/lib/DataAdapter.js"), exports);
//# sourceMappingURL=index-worker.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/DataAdapter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/DataAdapter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=DataAdapter.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/DecodeInfo.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/DecodeInfo.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DecodeInfo = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const THREE = __webpack_require__(/*! three */ "three");
class DecodeInfo {
    /**
     * Constructs a new [[DecodeInfo]].
     *
     * @param targetProjection - The [[Projection]]
     * @param tileKey - The [[TileKey]] of the Tile to decode.
     * @param storageLevelOffset - The storage level offset.
     */
    constructor(targetProjection, tileKey, storageLevelOffset = 0) {
        this.targetProjection = targetProjection;
        this.tileKey = tileKey;
        this.storageLevelOffset = storageLevelOffset;
        this.projectedBoundingBox = new harp_geoutils_1.OrientedBox3();
        /**
         * The tile bounds in the OMV tile space [[webMercatorTilingScheme]].
         */
        this.tileBounds = new THREE.Box3();
        /**
         * The tile size in the OMV tile space [[webMercatorTilingScheme]].
         */
        this.tileSize = new THREE.Vector3();
        /**
         * The center of the Tile in the target [[Projection]] space.
         * Geometries generated by decoding the OMV tile must be relative
         * to this position.
         */
        this.center = new THREE.Vector3();
        this.geoBox = this.tilingScheme.getGeoBox(tileKey);
        this.targetProjection.projectBox(this.geoBox, this.projectedBoundingBox);
        this.projectedBoundingBox.getCenter(this.center);
        this.tilingScheme.getWorldBox(tileKey, this.tileBounds);
        this.tileBounds.getSize(this.tileSize);
        this.tileSizeOnScreen = 256 * Math.pow(2, -this.storageLevelOffset);
        this.columnCount = harp_geoutils_1.webMercatorTilingScheme.subdivisionScheme.getLevelDimensionX(this.tileKey.level);
        this.rowCount = harp_geoutils_1.webMercatorTilingScheme.subdivisionScheme.getLevelDimensionY(this.tileKey.level);
    }
    /**
     * The [[TilingScheme]] of the OMV data, currenly it is defined
     * to be [[webMercatorTilingScheme]].
     */
    get tilingScheme() {
        return harp_geoutils_1.webMercatorTilingScheme;
    }
    /**
     * The [[Projection]] of OMV tiled data, currenly it is defined
     * to be [[webMercatorProjection]].
     */
    get sourceProjection() {
        return this.tilingScheme.projection;
    }
}
exports.DecodeInfo = DecodeInfo;
//# sourceMappingURL=DecodeInfo.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/GeoJsonTilerService.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/GeoJsonTilerService.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonTilerService = void 0;
const index_worker_1 = __webpack_require__(/*! @here/harp-mapview-decoder/index-worker */ "./node_modules/@here/harp-mapview-decoder/index-worker.js");
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvDecoderDefs.js");
/**
 * GeoJson tiler service.
 *
 * @remarks
 * This services instantiates the geojson-vt based tiler
 * service that is responsible to create small tiles from
 * large GeoJson datasets.
 *
 * @example
 * ```typescript
 * // decoder.ts
 * GeoJsonTilerService.start();
 * ```
 */
class GeoJsonTilerService {
    /**
     * Register a vector data tiler service with
     * {@link @here/harp-mapview-decoder#WorkerServiceManager}.
     *
     * @remarks
     * Has to be called during initialization of decoder bundle.
     */
    static start() {
        index_worker_1.WorkerServiceManager.getInstance().register({
            serviceType: OmvDecoderDefs_1.GEOJSON_TILER_SERVICE_TYPE,
            factory: (serviceId) => index_worker_1.TilerService.start(serviceId)
        });
    }
}
exports.GeoJsonTilerService = GeoJsonTilerService;
//# sourceMappingURL=GeoJsonTilerService.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/OmvDataFilter.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/OmvDataFilter.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmvGenericFeatureModifier = exports.ComposedDataFilter = exports.OmvGenericFeatureFilter = exports.OmvFeatureFilterDescriptionBuilder = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvDecoderDefs.js");
/**
 * Builds an `OmvFilterDescription` (internal type) that specifies an [[OmvFeatureFilter]] as well
 * as an [[OmvFeatureModifier]].
 *
 */
class OmvFeatureFilterDescriptionBuilder {
    /**
     * Builds an `OmvFilterDescription` (internal type) that specifies an [[OmvFeatureFilter]] as
     * well as an [[OmvFeatureModifier]].
     *
     * @param processLayersDefault - If `true`, all unspecified layers will be processed.
     * If `false`, all unspecified layers will be ignored.
     * @param processPointsDefault - If `true`, all unspecified point features will be processed. If
     * `false`, all unspecified point features will be ignored.
     * @param processLinesDefault - If `true`, all unspecified line features will be processed. If
     * `false`, all unspecified line features will be ignored.
     * @param processPolygonsDefault - If `true`, all unspecified polygon features will be
     * processed. If `false`, all unspecified polygon features will be ignored.
     */
    constructor(options) {
        this.m_processLayersDefault = true;
        this.m_processPointsDefault = true;
        this.m_processLinesDefault = true;
        this.m_processPolygonsDefault = true;
        this.m_layersToProcess = new Array();
        this.m_layersToIgnore = new Array();
        this.m_pointsToProcess = new Array();
        this.m_ignoredPoints = new Array();
        this.m_linesToProcess = new Array();
        this.m_linesToIgnore = new Array();
        this.m_polygonsToProcess = new Array();
        this.m_polygonsToIgnore = new Array();
        this.m_kindsToProcess = [];
        this.m_kindsToIgnore = [];
        if (options) {
            this.m_processLayersDefault =
                options.processLayersDefault !== undefined ? options.processLayersDefault : true;
            this.m_processPointsDefault =
                options.processPointsDefault !== undefined ? options.processPointsDefault : true;
            this.m_processLinesDefault =
                options.processLinesDefault !== undefined ? options.processLinesDefault : true;
            this.m_processPolygonsDefault =
                options.processPolygonsDefault !== undefined
                    ? options.processPolygonsDefault
                    : true;
        }
    }
    /**
     * Add a layer that should be processed.
     *
     * @param layer - Layer name to be matched.
     * @param match - Match condition.
     */
    processLayer(layer, match = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, minLevel = 0, maxLevel = Infinity) {
        this.m_layersToProcess.push({
            name: { value: layer, match },
            minLevel,
            maxLevel
        });
    }
    /**
     * Add a layer that should be ignored.
     *
     * @param layer - Layer name to be matched.
     * @param match - Match condition.
     */
    ignoreLayer(layer, match = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, minLevel = 0, maxLevel = Infinity) {
        this.m_layersToIgnore.push({
            name: { value: layer, match },
            minLevel,
            maxLevel
        });
    }
    /**
     * Add a valid point feature.
     *
     * @param options - Feature options.
     */
    processPoint(options) {
        this.addItem(this.m_pointsToProcess, options);
    }
    /**
     * Add valid point features.
     *
     * @param options - Multi feature options.
     */
    processPoints(options) {
        this.addItems(this.m_pointsToProcess, options);
    }
    /**
     * Add a point feature that should be ignored.
     *
     * @param options - Feature options.
     */
    ignorePoint(options) {
        this.addItem(this.m_ignoredPoints, options);
    }
    /**
     * Add point features that should be ignored.
     *
     * @param options - Multi feature options.
     */
    ignorePoints(options) {
        this.addItems(this.m_ignoredPoints, options);
    }
    /**
     * Add a valid line feature.
     *
     * @param options - Feature options.
     */
    processLine(options) {
        this.addItem(this.m_linesToProcess, options);
    }
    /**
     * Add valid line features.
     *
     * @param options - Multi feature options.
     */
    processLines(options) {
        this.addItems(this.m_linesToProcess, options);
    }
    /**
     * Ignore a line feature.
     *
     * @param options - Feature options.
     */
    ignoreLine(options) {
        this.addItem(this.m_linesToIgnore, options);
    }
    /**
     * Ignore line features.
     *
     * @param options - Multi feature options.
     */
    ignoreLines(options) {
        this.addItems(this.m_linesToIgnore, options);
    }
    /**
     * Add a valid polygon feature.
     *
     * @param options - Feature options.
     */
    processPolygon(options) {
        this.addItem(this.m_polygonsToProcess, options);
    }
    /**
     * Add valid polygon features.
     *
     * @param options - Multi feature options.
     */
    processPolygons(options) {
        this.addItems(this.m_polygonsToProcess, options);
    }
    /**
     * Ignore a valid polygon feature.
     *
     * @param options - Feature options.
     */
    ignorePolygon(options) {
        this.addItem(this.m_polygonsToIgnore, options);
    }
    /**
     * Ignore polygon features.
     *
     * @param options - Multi feature options.
     */
    ignorePolygons(options) {
        this.addItems(this.m_polygonsToIgnore, options);
    }
    /**
     * Add all the specified strings as "enabledKinds".
     *
     * @param {string[]} enabledKinds List of kinds that should be generated.
     * @deprecated See {@link @here/here-datasource-protocol/BaseTechniqueParams.kind}.
     */
    processKinds(enabledKinds) {
        this.m_kindsToProcess = this.m_kindsToProcess.concat(enabledKinds);
    }
    /**
     * Add all the specified strings as "disabledKinds".
     *
     * @param {string[]} disabledKinds List of kinds that should _not_ be generated.
     * @deprecated See {@link @here/here-datasource-protocol/BaseTechniqueParams.kind}.
     */
    ignoreKinds(disabledKinds) {
        this.m_kindsToIgnore = this.m_kindsToIgnore.concat(disabledKinds);
    }
    /**
     * Create a filter description that can be passed as an option to the [[OmvDataSource]].
     */
    createDescription() {
        return {
            processLayersDefault: this.m_processLayersDefault,
            processPointsDefault: this.m_processPointsDefault,
            processLinesDefault: this.m_processLinesDefault,
            processPolygonsDefault: this.m_processPolygonsDefault,
            layersToProcess: this.m_layersToProcess,
            layersToIgnore: this.m_layersToIgnore,
            pointsToProcess: this.m_pointsToProcess,
            pointsToIgnore: this.m_ignoredPoints,
            linesToProcess: this.m_linesToProcess,
            linesToIgnore: this.m_linesToIgnore,
            polygonsToProcess: this.m_polygonsToProcess,
            polygonsToIgnore: this.m_polygonsToIgnore,
            kindsToProcess: this.m_kindsToProcess,
            kindsToIgnore: this.m_kindsToIgnore
        };
    }
    addItem(items, options) {
        if (options.minLevel === undefined || isNaN(options.minLevel)) {
            options.minLevel = 0;
        }
        if (options.maxLevel === undefined || isNaN(options.maxLevel)) {
            options.maxLevel = Infinity;
        }
        const item = {
            layerName: {
                value: options.layer,
                match: options.matchLayer === undefined
                    ? OmvDecoderDefs_1.OmvFilterString.StringMatch.Match
                    : options.matchLayer
            },
            geometryTypes: options.geomType !== undefined
                ? Array.isArray(options.geomType)
                    ? options.geomType
                    : [options.geomType]
                : undefined,
            classes: [
                {
                    value: options.featureClass,
                    match: options.matchClass === undefined
                        ? OmvDecoderDefs_1.OmvFilterString.StringMatch.Match
                        : options.matchClass
                }
            ],
            minLevel: options.minLevel,
            maxLevel: options.maxLevel,
            featureAttribute: options.featureAttribute
        };
        items.push(item);
    }
    addItems(items, options) {
        if (options.minLevel === undefined || isNaN(options.minLevel)) {
            options.minLevel = 0;
        }
        if (options.maxLevel === undefined || isNaN(options.maxLevel)) {
            options.maxLevel = Infinity;
        }
        const item = {
            layerName: {
                value: options.layer,
                match: options.matchLayer === undefined
                    ? OmvDecoderDefs_1.OmvFilterString.StringMatch.Match
                    : options.matchLayer
            },
            geometryTypes: options.geomTypes !== undefined
                ? Array.isArray(options.geomTypes)
                    ? options.geomTypes
                    : [options.geomTypes]
                : undefined,
            classes: options.featureClasses,
            minLevel: options.minLevel,
            maxLevel: options.maxLevel,
            featureAttribute: options.featureAttribute
        };
        items.push(item);
    }
}
exports.OmvFeatureFilterDescriptionBuilder = OmvFeatureFilterDescriptionBuilder;
/**
 * `OmvFeatureFilter` implementation that uses a `OmvFeatureFilterDescription` to filter `TileData`
 * features before they are completely decoded.
 *
 * @internal
 */
class OmvGenericFeatureFilter {
    constructor(description) {
        this.description = description;
        if (this.description.kindsToProcess.length > 0) {
            this.enabledKinds = new harp_datasource_protocol_1.GeometryKindSet(this.description.kindsToProcess);
        }
        if (this.description.kindsToIgnore.length > 0) {
            this.disabledKinds = new harp_datasource_protocol_1.GeometryKindSet(this.description.kindsToIgnore);
        }
    }
    static matchLayer(layer, layerItems, level) {
        for (const layerItem of layerItems) {
            if (level < layerItem.minLevel || level > layerItem.maxLevel) {
                continue;
            }
            if (OmvDecoderDefs_1.OmvFilterString.matchString(layer, layerItem.name)) {
                return true;
            }
        }
        return false;
    }
    wantsLayer(layer, level) {
        if (OmvGenericFeatureFilter.matchLayer(layer, this.description.layersToProcess, level)) {
            return true;
        }
        if (OmvGenericFeatureFilter.matchLayer(layer, this.description.layersToIgnore, level)) {
            return false;
        }
        return this.description.processLayersDefault;
    }
    wantsPointFeature(layer, geometryType, level) {
        return this.wantsFeature(this.description.pointsToProcess, this.description.pointsToIgnore, layer, geometryType, level, this.description.processPointsDefault);
    }
    wantsLineFeature(layer, geometryType, level) {
        return this.wantsFeature(this.description.linesToProcess, this.description.linesToIgnore, layer, geometryType, level, this.description.processLinesDefault);
    }
    wantsPolygonFeature(layer, geometryType, level) {
        return this.wantsFeature(this.description.polygonsToProcess, this.description.polygonsToIgnore, layer, geometryType, level, this.description.processPolygonsDefault);
    }
    /**
     * @deprecated See {@link @here/here-datasource-protocol/BaseTechniqueParams.kind}.
     */
    wantsKind(kind) {
        // undefined -> no way to filter
        if (kind === undefined) {
            return true;
        }
        return (!(this.disabledKinds !== undefined &&
            this.disabledKinds.hasOrIntersects(kind)) ||
            (this.enabledKinds !== undefined &&
                this.enabledKinds.hasOrIntersects(kind)));
    }
    /**
     * @deprecated See {@link @here/here-datasource-protocol/BaseTechniqueParams.kind}.
     */
    get hasKindFilter() {
        return this.enabledKinds !== undefined || this.disabledKinds !== undefined;
    }
    wantsFeature(itemsToProcess, itemsToIgnore, layer, geometryType, level, defaultResult) {
        for (const item of itemsToProcess) {
            if (level < item.minLevel || level > item.maxLevel) {
                continue;
            }
            if (!OmvDecoderDefs_1.OmvFilterString.matchString(layer, item.layerName)) {
                // this rule is not for this layer
                continue;
            }
            if (item.geometryTypes !== undefined && item.geometryTypes.includes(geometryType)) {
                return true;
            }
        }
        for (const item of itemsToIgnore) {
            if (!OmvDecoderDefs_1.OmvFilterString.matchString(layer, item.layerName)) {
                // this rule is not for this layer
                continue;
            }
            if (item.geometryTypes !== undefined && item.geometryTypes.includes(geometryType)) {
                return false;
            }
        }
        return defaultResult;
    }
}
exports.OmvGenericFeatureFilter = OmvGenericFeatureFilter;
/**
 * An [[OmvFeatureFilter]] implementation that delegates all filter decision
 * returning `true` for any predicate if all delegates return `true`.
 *
 * @internal
 */
class ComposedDataFilter {
    constructor(filters) {
        this.filters = filters;
    }
    /**
     * @deprecated See {@link @here/here-datasource-protocol/BaseTechniqueParams.kind}.
     */
    get hasKindFilter() {
        return this.filters.reduce((result, filter) => result || filter.hasKindFilter, true);
    }
    wantsLayer(layer, level) {
        return this.filters.reduce((result, filter) => result && filter.wantsLayer(layer, level), true);
    }
    wantsPointFeature(layer, geometryType, level) {
        return this.filters.reduce((result, filter) => result && filter.wantsPointFeature(layer, geometryType, level), true);
    }
    wantsLineFeature(layer, geometryType, level) {
        return this.filters.reduce((result, filter) => result && filter.wantsLineFeature(layer, geometryType, level), true);
    }
    wantsPolygonFeature(layer, geometryType, level) {
        return this.filters.reduce((result, filter) => result && filter.wantsPolygonFeature(layer, geometryType, level), true);
    }
    /**
     * @deprecated See {@link @here/here-datasource-protocol/BaseTechniqueParams.kind}.
     */
    wantsKind(kind) {
        return this.filters.reduce((result, filter) => result && filter.wantsKind(kind), true);
    }
}
exports.ComposedDataFilter = ComposedDataFilter;
/**
 * `OmvFeatureModifier` implementation that uses a `OmvFeatureFilterDescription` to filter
 * `TileData` features before they are completely decoded.
 *
 * @internal
 */
class OmvGenericFeatureModifier {
    constructor(description) {
        this.description = description;
    }
    static matchItems(layerName, featureClass, items) {
        for (const item of items) {
            if (item.classes !== undefined) {
                if (!OmvDecoderDefs_1.OmvFilterString.matchString(layerName, item.layerName)) {
                    continue;
                }
                for (const matchClass of item.classes) {
                    if (OmvDecoderDefs_1.OmvFilterString.matchString(featureClass, matchClass)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    static matchAttribute(layerName, env, items) {
        for (const item of items) {
            if (item.featureAttribute !== undefined) {
                if (OmvDecoderDefs_1.OmvFilterString.matchString(layerName, item.layerName) &&
                    env.lookup(item.featureAttribute.key) === item.featureAttribute.value) {
                    return true;
                }
            }
        }
        return false;
    }
    doProcessPointFeature(layer, env) {
        return this.doProcessFeature(this.description.pointsToProcess, this.description.pointsToIgnore, layer, env, this.description.processPointsDefault);
    }
    doProcessLineFeature(layer, env) {
        return this.doProcessFeature(this.description.linesToProcess, this.description.linesToIgnore, layer, env, this.description.processLinesDefault);
    }
    doProcessPolygonFeature(layer, env) {
        return this.doProcessFeature(this.description.polygonsToProcess, this.description.polygonsToIgnore, layer, env, this.description.processPolygonsDefault);
    }
    doProcessFeature(itemsToProcess, itemsToIgnore, layer, env, defaultResult) {
        if (layer === undefined || (itemsToProcess.length === 0 && itemsToIgnore.length === 0)) {
            return defaultResult;
        }
        let featureClass;
        const featureClassThing = env.lookup("class");
        if (featureClassThing !== undefined && featureClassThing !== null) {
            featureClass = featureClassThing.toString();
        }
        if (featureClass &&
            OmvGenericFeatureModifier.matchItems(layer, featureClass, itemsToProcess)) {
            return true;
        }
        if (featureClass &&
            OmvGenericFeatureModifier.matchItems(layer, featureClass, itemsToIgnore)) {
            return false;
        }
        if (OmvGenericFeatureModifier.matchAttribute(layer, env, itemsToProcess)) {
            return true;
        }
        if (OmvGenericFeatureModifier.matchAttribute(layer, env, itemsToIgnore)) {
            return false;
        }
        return defaultResult;
    }
}
exports.OmvGenericFeatureModifier = OmvGenericFeatureModifier;
//# sourceMappingURL=OmvDataFilter.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/OmvDecoderDefs.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/OmvDecoderDefs.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GEOJSON_TILER_SERVICE_TYPE = exports.VECTOR_TILE_DECODER_SERVICE_TYPE = exports.OmvGeometryType = exports.OmvFilterString = exports.FeatureModifierId = void 0;
/**
 * Feature Modifier ids to choose which OmvFeatureModifer should be used in OmvDecoder.
 */
var FeatureModifierId;
(function (FeatureModifierId) {
    /**
     * Generic feature modifier used when no other modifiers are defined.
     *
     * @note You do not need to specify it in [[OmvDataSourceParameters]] as it is added by default
     * if no other feature modifier is used.
     */
    FeatureModifierId[FeatureModifierId["default"] = 0] = "default";
})(FeatureModifierId = exports.FeatureModifierId || (exports.FeatureModifierId = {}));
/**
 * Adding the match condition type and the matching function to the namespace of `OmvFilterString`.
 */
var OmvFilterString;
(function (OmvFilterString) {
    /**
     * Match condition.
     */
    let StringMatch;
    (function (StringMatch) {
        /** Matches any. */
        StringMatch[StringMatch["Any"] = 0] = "Any";
        /** Exact match. */
        StringMatch[StringMatch["Match"] = 1] = "Match";
        /** Matches if a test string starts with a filter string. */
        StringMatch[StringMatch["StartsWith"] = 2] = "StartsWith";
        /** Matches if a test string contains a filter string. */
        StringMatch[StringMatch["Contains"] = 3] = "Contains";
        /** Matches if a test string ends with a filter string. */
        StringMatch[StringMatch["EndsWith"] = 4] = "EndsWith";
    })(StringMatch = OmvFilterString.StringMatch || (OmvFilterString.StringMatch = {}));
    /**
     * Check for a string against a filter.
     *
     * @param str - The string to check against a filter.
     * @param filterString - The filter containing the match condition.
     * @returns `true` if the match condition is satisfied.
     *
     * @internal
     */
    function matchString(str, filterString) {
        switch (filterString.match) {
            case OmvFilterString.StringMatch.Any:
                return true;
            case OmvFilterString.StringMatch.Match:
                return str === filterString.value;
            case OmvFilterString.StringMatch.StartsWith:
                return filterString.value.startsWith(str);
            case OmvFilterString.StringMatch.EndsWith:
                return filterString.value.endsWith(str);
            default:
                return str.includes(filterString.value);
        }
    }
    OmvFilterString.matchString = matchString;
})(OmvFilterString = exports.OmvFilterString || (exports.OmvFilterString = {}));
var OmvGeometryType;
(function (OmvGeometryType) {
    OmvGeometryType[OmvGeometryType["UNKNOWN"] = 0] = "UNKNOWN";
    OmvGeometryType[OmvGeometryType["POINT"] = 1] = "POINT";
    OmvGeometryType[OmvGeometryType["LINESTRING"] = 2] = "LINESTRING";
    OmvGeometryType[OmvGeometryType["POLYGON"] = 3] = "POLYGON";
})(OmvGeometryType = exports.OmvGeometryType || (exports.OmvGeometryType = {}));
/**
 * Vector tile decoder service type id.
 *
 * @remarks
 * Used for requesting decoder services using `WorkerServiceManager`.
 *
 * @internal
 */
exports.VECTOR_TILE_DECODER_SERVICE_TYPE = "vector-tile-decoder";
/**
 * GeoJson tiler service type id.
 *
 * @remarks
 * Used for requesting tiler services using `WorkerServiceManager`.
 *
 * @internal
 */
exports.GEOJSON_TILER_SERVICE_TYPE = "geojson-tiler";
//# sourceMappingURL=OmvDecoderDefs.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/OmvPoliticalViewFeatureModifier.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/OmvPoliticalViewFeatureModifier.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmvPoliticalViewFeatureModifier = void 0;
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const logger = harp_utils_1.LoggerManager.instance.create("OmvPoliticalViewFeatureModifier");
/**
 * Modifies the MapEnv of the Vector Tiles in Tilezen format with different POV.
 *
 * This feature modifier updates feature properties according to different political
 * point of view.
 * Political views (or alternate point of views) are supported in Tilezen by adding
 * country posix (lower-case ISO 3166-1 alpha-2 compliant) to __default__ property name.
 * For example country borders (__boundaries__ layer) may have both __kind__ property for
 * default (commonly accepted point of view) and __kind:xx__ for alternate points of view.
 * This way disputed borders may be visible or not for certain regions and different
 * users (clients).
 *
 * @hidden
 */
class OmvPoliticalViewFeatureModifier {
    /**
     * C-tor.
     *
     * @param pov - The code of the country (in lower-case ISO 3166-1 alpha-2 format) which
     * point of view should be taken into account.
     */
    constructor(pov) {
        this.m_countryCode = pov;
    }
    /**
     * Simply passes all points to rendering, points features does not support PoliticalView.
     *
     * @param layer - Current layer.
     * @param env - Properties of point feature.
     * @param level - Level of tile.
     * @returns always `true` to pass feature.
     */
    doProcessPointFeature(layer, env, level) {
        return true;
    }
    /**
     * Implements line features processing changing "kind" attribute depending on point of view.
     *
     * Currently only line features support different point of view.
     * @param layer - The name of the layer.
     * @param env - The environment to use.
     * @returns always `true` to pass lines for rendering.
     */
    doProcessLineFeature(layer, env, level) {
        this.rewriteEnvironment(layer, env);
        return true;
    }
    /**
     * Simply pass all polygons to rendering, this feature does not support PoliticalView yet.
     *
     * @param layer - Current layer.
     * @param env - Properties of polygon feature.
     * @param level - Level of tile.
     * @returns `true` to pass feature.
     */
    doProcessPolygonFeature(layer, env, level) {
        return true;
    }
    /**
     * Rewrites the Environment to match the different points of view.
     *
     * @param layer - The layer name.
     * @param env - The environment to use.
     */
    rewriteEnvironment(layer, env) {
        // For now we need to rewrite "boundaries" layer only.
        if (this.isPoliticalViewLayer(layer)) {
            this.updateEnvironment(env, this.m_countryCode, "kind");
        }
    }
    updateEnvironment(env, countryCode, propName) {
        const value = this.getAlternativePov(env, countryCode, propName);
        if (value !== undefined) {
            env.entries[propName] = value;
        }
    }
    getAlternativePov(env, countryCode, propName) {
        logger.log("Get alternate POV: ", JSON.stringify(env));
        const cc = countryCode;
        const value = env.lookup(`${propName}:${cc}`);
        logger.log("Lookup POV: ", `${propName}:${cc}`, value);
        if (typeof value === "string" && value.length > 0) {
            logger.log("Found POV: ", `${propName}:${cc}`, value);
            return value;
        }
        else {
            return undefined;
        }
    }
    isPoliticalViewLayer(layer) {
        return layer === "boundaries";
    }
}
exports.OmvPoliticalViewFeatureModifier = OmvPoliticalViewFeatureModifier;
//# sourceMappingURL=OmvPoliticalViewFeatureModifier.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/OmvUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/OmvUtils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.webMercatorTile2TargetTile = exports.webMercatorTile2TargetWorld = exports.world2tile = exports.tile2world = exports.createWorldTileTransformationCookie = exports.tile2lat = exports.lat2tile = exports.isArrayBufferLike = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const THREE = __webpack_require__(/*! three */ "three");
/**
 * @hidden
 */
function isArrayBufferLike(data) {
    if (typeof SharedArrayBuffer !== "undefined") {
        return data instanceof ArrayBuffer || data instanceof SharedArrayBuffer;
    }
    else {
        return data instanceof ArrayBuffer;
    }
}
exports.isArrayBufferLike = isArrayBufferLike;
/**
 * @hidden
 */
function lat2tile(lat, zoom) {
    return Math.round(((1 -
        Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) /
            Math.PI) /
        2) *
        Math.pow(2, zoom));
}
exports.lat2tile = lat2tile;
/**
 * @hidden
 */
function tile2lat(y, level) {
    const n = Math.PI - (2 * Math.PI * y) / Math.pow(2, level);
    return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}
exports.tile2lat = tile2lat;
function createWorldTileTransformationCookie(extents, decodeInfo) {
    const { north, west } = decodeInfo.geoBox;
    const N = Math.log2(extents);
    const scale = Math.pow(2, decodeInfo.tileKey.level + N);
    return {
        extents,
        scale,
        top: lat2tile(north, decodeInfo.tileKey.level + N),
        left: Math.round(((west + 180) / 360) * scale)
    };
}
exports.createWorldTileTransformationCookie = createWorldTileTransformationCookie;
/**
 * @hidden
 */
function tile2world(extents, decodeInfo, position, flipY = false, target) {
    if (decodeInfo.worldTileProjectionCookie === undefined ||
        decodeInfo.worldTileProjectionCookie.extents !== extents) {
        decodeInfo.worldTileProjectionCookie = createWorldTileTransformationCookie(extents, decodeInfo);
    }
    const { top, left, scale } = decodeInfo.worldTileProjectionCookie;
    const R = harp_geoutils_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE;
    target.x = ((left + position.x) / scale) * R;
    target.y = ((top + (flipY ? -position.y : position.y)) / scale) * R;
    target.z = harp_geoutils_1.isVector3Like(position) ? position.z : 0;
    return target;
}
exports.tile2world = tile2world;
/**
 * @hidden
 */
function world2tile(extents, decodeInfo, position, flipY = false, target) {
    if (decodeInfo.worldTileProjectionCookie === undefined ||
        decodeInfo.worldTileProjectionCookie.extents !== extents) {
        decodeInfo.worldTileProjectionCookie = createWorldTileTransformationCookie(extents, decodeInfo);
    }
    const { top, left, scale } = decodeInfo.worldTileProjectionCookie;
    const R = harp_geoutils_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE;
    target.x = Math.round((position.x / R) * scale - left);
    target.y = Math.round((flipY ? -1 : 1) * ((position.y / R) * scale - top));
    if (harp_geoutils_1.isVector3Like(target)) {
        target.z = position.z;
    }
    return target;
}
exports.world2tile = world2tile;
function webMercatorTile2TargetWorld(extents, decodeInfo, position, target, scaleHeight, flipY = false) {
    tile2world(extents, decodeInfo, position, flipY, target);
    decodeInfo.targetProjection.reprojectPoint(harp_geoutils_1.webMercatorProjection, target, target);
    if (position instanceof THREE.Vector3 && scaleHeight) {
        target.z *= decodeInfo.targetProjection.getScaleFactor(target);
    }
}
exports.webMercatorTile2TargetWorld = webMercatorTile2TargetWorld;
function webMercatorTile2TargetTile(extents, decodeInfo, position, target, scaleHeight, flipY = false) {
    webMercatorTile2TargetWorld(extents, decodeInfo, position, target, scaleHeight, flipY);
    target.sub(decodeInfo.center);
}
exports.webMercatorTile2TargetTile = webMercatorTile2TargetTile;
//# sourceMappingURL=OmvUtils.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/Ring.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/Ring.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ring = void 0;
const three_1 = __webpack_require__(/*! three */ "three");
/**
 * A class representing a ring of a polygon geometry.
 */
class Ring {
    /**
     * Creates a new `Ring`.
     *
     * @param points The coordinates of the rings.
     * @param textureCoords The optional `Array` of texture coordinates.
     * @param extents The extents of the tile bounds.
     * @param hasClipInfo A flag indicating that vertices of this `Ring` may be clipped.
     */
    constructor(points, textureCoords, extents = 4 * 1024, hasClipInfo = false) {
        this.points = points;
        this.textureCoords = textureCoords;
        this.extents = extents;
        this.hasClipInfo = hasClipInfo;
        if (textureCoords !== undefined && textureCoords.length !== points.length) {
            throw new Error(`the array of texture coordinates must have the same number of elements of the array of points`);
        }
        this.vertexStride = 2;
        if (textureCoords !== undefined) {
            this.vertexStride = this.vertexStride + 2;
        }
        this.area = three_1.ShapeUtils.area(this.points);
        this.winding = this.area < 0;
    }
    /**
     * Returns a flattened `Array` containing the position and texture coordinates of this `Ring`.
     *
     * @param array The target `Array`.
     * @param offset Optional offset into the array.
     */
    toArray(array = [], offset = 0) {
        var _a;
        this.points.forEach((p, i) => p.toArray(array, offset + this.vertexStride * i));
        (_a = this.textureCoords) === null || _a === void 0 ? void 0 : _a.forEach((p, i) => p.toArray(array, offset + this.vertexStride * i + 2));
        return array;
    }
    /**
     * Tests if the edge connecting the vertex at `index` with
     * the vertex at `index+1` should be connected by a line
     * when stroking the polygon.
     *
     * @param index The index of the first vertex of the outline edge.
     */
    isProperEdge(index) {
        const extents = this.extents;
        const nextIdx = (index + 1) % this.points.length;
        const curr = this.points[index];
        const next = this.points[nextIdx];
        if (this.hasClipInfo) {
            if (curr.x !== next.x && curr.y !== next.y) {
                // `curr` and `next` must be connected with a line
                // because they don't form a vertical or horizontal lines.
                return true;
            }
            const currAtEdge = curr.x % this.extents === 0 || curr.y % this.extents === 0;
            if (!currAtEdge) {
                // the points are connected with a line
                // because at least one of the points is not on
                // the tile boundary.
                return true;
            }
            const nextAtEdge = next.x % this.extents === 0 || next.y % this.extents === 0;
            if (!nextAtEdge) {
                // the points are connected with a line
                // because at least one of the points is not on
                // the tile boundary.
                return true;
            }
            const currWasClipped = curr.isClipped === true;
            const nextWasClipped = next.isClipped === true;
            return !currWasClipped && !nextWasClipped;
        }
        return !((curr.x <= 0 && next.x <= 0) ||
            (curr.x >= extents && next.x >= extents) ||
            (curr.y <= 0 && next.y <= 0) ||
            (curr.y >= extents && next.y >= extents));
    }
}
exports.Ring = Ring;
//# sourceMappingURL=Ring.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/StyleSetDataFilter.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/StyleSetDataFilter.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StyleSetDataFilter = void 0;
/**
 * An [[OmvFeatureFilter]] implementation that queries [[StyleSetEvaluator]]
 * if given layers/features should be processed.
 *
 * Used in [[OmvDecoder]] to skip processing of layers/features that doesn't
 * have associated rules in style.
 *
 * @see [[StyleSetEvaluator.wantsFeature]]
 * @see [[StyleSetEvaluator.wantsLayer]]
 */
class StyleSetDataFilter {
    constructor(styleSetEvaluator) {
        this.styleSetEvaluator = styleSetEvaluator;
        this.hasKindFilter = false;
    }
    wantsLayer(layer, level) {
        return this.styleSetEvaluator.wantsLayer(layer);
    }
    wantsPointFeature(layer) {
        return this.styleSetEvaluator.wantsFeature(layer, "point");
    }
    wantsLineFeature(layer) {
        return this.styleSetEvaluator.wantsFeature(layer, "line");
    }
    wantsPolygonFeature(layer) {
        return this.styleSetEvaluator.wantsFeature(layer, "polygon");
    }
    wantsKind() {
        return true;
    }
}
exports.StyleSetDataFilter = StyleSetDataFilter;
//# sourceMappingURL=StyleSetDataFilter.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/VectorTileDataEmitter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/VectorTileDataEmitter.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VectorTileDataEmitter = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const TechniqueAttr_1 = __webpack_require__(/*! @here/harp-datasource-protocol/lib/TechniqueAttr */ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueAttr.js");
const ClipPolygon_1 = __webpack_require__(/*! @here/harp-geometry/lib/ClipPolygon */ "./node_modules/@here/harp-geometry/lib/ClipPolygon.js");
const EdgeLengthGeometrySubdivisionModifier_1 = __webpack_require__(/*! @here/harp-geometry/lib/EdgeLengthGeometrySubdivisionModifier */ "./node_modules/@here/harp-geometry/lib/EdgeLengthGeometrySubdivisionModifier.js");
const SphericalGeometrySubdivisionModifier_1 = __webpack_require__(/*! @here/harp-geometry/lib/SphericalGeometrySubdivisionModifier */ "./node_modules/@here/harp-geometry/lib/SphericalGeometrySubdivisionModifier.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const Lines_1 = __webpack_require__(/*! @here/harp-lines/lib/Lines */ "./node_modules/@here/harp-lines/lib/Lines.js");
const TriangulateLines_1 = __webpack_require__(/*! @here/harp-lines/lib/TriangulateLines */ "./node_modules/@here/harp-lines/lib/TriangulateLines.js");
const MapMeshMaterialsDefs_1 = __webpack_require__(/*! @here/harp-materials/lib/MapMeshMaterialsDefs */ "./node_modules/@here/harp-materials/lib/MapMeshMaterialsDefs.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const earcut_1 = __webpack_require__(/*! earcut */ "./node_modules/earcut/src/earcut.js");
const THREE = __webpack_require__(/*! three */ "three");
const OmvUtils_1 = __webpack_require__(/*! ./OmvUtils */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvUtils.js");
const Ring_1 = __webpack_require__(/*! ./Ring */ "./node_modules/@here/harp-vectortile-datasource/lib/Ring.js");
const logger = harp_utils_1.LoggerManager.instance.create("OmvDecodedTileEmitter");
const tempTileOrigin = new THREE.Vector3();
const tempVertNormal = new THREE.Vector3();
const tempFootDisp = new THREE.Vector3();
const tempRoofDisp = new THREE.Vector3();
const tmpV2 = new THREE.Vector2();
const tmpV2r = new THREE.Vector2();
const tmpV3 = new THREE.Vector3();
const tmpV3r = new THREE.Vector3();
const tmpV4 = new THREE.Vector3();
const tempP0 = new THREE.Vector2();
const tempP1 = new THREE.Vector2();
const tempPreviousTangent = new THREE.Vector2();
const tmpPointA = new THREE.Vector3();
const tmpPointB = new THREE.Vector3();
const tmpPointC = new THREE.Vector3();
const tmpPointD = new THREE.Vector3();
const tmpPointE = new THREE.Vector3();
const tmpLine = new THREE.Line3();
/**
 * Minimum number of pixels per character. Used during estimation if there is enough screen space
 * available to render a text. Based on the estimated screen size of a tile.
 */
const MIN_AVERAGE_CHAR_WIDTH = 5;
/**
 * Estimation "fudge factor", tweaking the size estimation to
 *
 * a) allow room for zooming in to the tile, and
 *
 * b) allow for some tilting, where the edge of a tile closer to the camera has more space.
 *
 * Useful values are between 0 (allow all labels), 0.5 (allow labels at twice the default display
 * size of the tile) and 1.0 (skip labels that would normally not be displayed at default tile
 * size).
 */
const SIZE_ESTIMATION_FACTOR = 0.5;
/**
 * Maximum allowed corner angle inside a label path.
 */
const MAX_CORNER_ANGLE = Math.PI / 8;
/**
 * Used to identify an invalid (or better: unused) array index.
 */
const INVALID_ARRAY_INDEX = -1;
function createIndexBufferAttribute(elements, maxValue, name = "index") {
    const type = maxValue > 65535 ? "uint32" : "uint16";
    const storage = type === "uint32" ? new Uint32Array(elements) : new Uint16Array(elements);
    const buffer = storage.buffer;
    return {
        itemCount: 1,
        name,
        buffer,
        type
    };
}
// for tilezen by default extrude all buildings even those without height data
class MeshBuffers {
    constructor(type) {
        this.type = type;
        this.positions = [];
        this.normals = [];
        this.textureCoordinates = [];
        this.colors = [];
        this.extrusionAxis = [];
        this.indices = [];
        this.edgeIndices = [];
        this.groups = [];
        this.texts = [];
        this.pathLengths = [];
        this.stringCatalog = [];
        this.imageTextures = [];
        /**
         * Optional list of feature start indices. The indices point into the index attribute.
         */
        this.featureStarts = [];
        /**
         * Optional list of edge feature start indices. The indices point into the edge index attribute.
         */
        this.edgeFeatureStarts = [];
        /**
         * An optional list of additional data that can be used as additional data for the object
         * picking.
         */
        this.objInfos = [];
        /**
         * Angle in degrees from north clockwise which represents the direction the icons can be
         * shifted.
         */
        this.offsetDirections = [];
    }
    addText(text) {
        let index = this.stringCatalog.indexOf(text);
        if (index < 0) {
            index = this.stringCatalog.length;
            this.stringCatalog.push(text);
        }
        return index;
    }
}
var LineType;
(function (LineType) {
    LineType[LineType["Simple"] = 0] = "Simple";
    LineType[LineType["Complex"] = 1] = "Complex";
})(LineType || (LineType = {}));
const tmpColor = new THREE.Color();
class VectorTileDataEmitter {
    constructor(m_decodeInfo, m_styleSetEvaluator, m_options = {}) {
        var _a, _b, _c;
        this.m_decodeInfo = m_decodeInfo;
        this.m_styleSetEvaluator = m_styleSetEvaluator;
        this.m_options = m_options;
        // mapping from style index to mesh buffers
        this.m_meshBuffers = new Map();
        this.m_geometries = [];
        this.m_textGeometries = [];
        this.m_textPathGeometries = [];
        this.m_pathGeometries = [];
        this.m_poiGeometries = [];
        this.m_simpleLines = [];
        this.m_solidLines = [];
        this.m_sources = [];
        this.m_maxGeometryHeight = 0;
        this.m_minGeometryHeight = 0;
        this.m_options.gatherFeatureAttributes = (_a = m_options.gatherFeatureAttributes) !== null && _a !== void 0 ? _a : false;
        this.m_options.skipShortLabels = (_b = m_options.skipShortLabels) !== null && _b !== void 0 ? _b : true;
        this.m_options.enableElevationOverlay = (_c = m_options.enableElevationOverlay) !== null && _c !== void 0 ? _c : false;
    }
    get projection() {
        return this.m_decodeInfo.targetProjection;
    }
    get center() {
        return this.m_decodeInfo.center;
    }
    /**
     * Creates the Point of Interest geometries for the given feature.
     *
     * @param layer - Tile's layer to be processed.
     * @param extents - Tile's layer extents.
     * @param geometry - The feature geometry in local webMercator coordinates.
     * @param env - The [[MapEnv]] containing the environment information for the map.
     * @param techniques - The array of [[Technique]] that will be applied to the geometry.
     */
    processPointFeature(layer, extents, geometry, context, techniques) {
        var _a;
        const env = context.env;
        this.processFeatureCommon(env);
        const { tileKey, columnCount, rowCount } = this.m_decodeInfo;
        // adjust the extents to ensure that points on the right and bottom edges
        // of the tile are discarded.
        const xExtent = tileKey.column + 1 < columnCount ? extents - 1 : extents;
        const yExtent = tileKey.row + 1 < rowCount ? extents - 1 : extents;
        // get the point positions (in tile space) that are inside the tile bounds.
        const tilePositions = geometry.filter(p => {
            return p.x >= 0 && p.x <= xExtent && p.y >= 0 && p.y <= yExtent;
        });
        if (tilePositions.length === 0) {
            // nothing to do, no geometry within the tile bound.
            return;
        }
        for (const technique of techniques) {
            if (technique === undefined) {
                continue;
            }
            const techniqueIndex = technique._index;
            const meshBuffers = this.findOrCreateMeshBuffers(techniqueIndex, harp_datasource_protocol_1.GeometryType.Point);
            if (meshBuffers === undefined) {
                continue;
            }
            const { positions, texts, imageTextures, objInfos, offsetDirections } = meshBuffers;
            const shouldCreateTextGeometries = harp_datasource_protocol_1.isTextTechnique(technique) || harp_datasource_protocol_1.isPoiTechnique(technique);
            let imageTexture;
            const wantsPoi = harp_datasource_protocol_1.isPoiTechnique(technique);
            if (wantsPoi) {
                const poiTechnique = technique;
                imageTexture = TechniqueAttr_1.evaluateTechniqueAttr(context, poiTechnique.imageTexture);
                // TODO: Move to decoder independent parts of code.
                if (poiTechnique.poiName !== undefined) {
                    imageTexture = TechniqueAttr_1.evaluateTechniqueAttr(context, poiTechnique.poiName);
                }
                else if (typeof poiTechnique.poiNameField === "string") {
                    const poiNameFieldValue = env.lookup(poiTechnique.poiNameField);
                    imageTexture = poiNameFieldValue;
                }
                else if (typeof poiTechnique.imageTextureField === "string") {
                    const imageTextureValue = env.lookup(poiTechnique.imageTextureField);
                    imageTexture = harp_datasource_protocol_1.composeTechniqueTextureName(imageTextureValue, poiTechnique);
                }
            }
            const scaleHeights = harp_datasource_protocol_1.scaleHeight(context, technique, this.m_decodeInfo.tileKey.level);
            const featureId = harp_datasource_protocol_1.getFeatureId(env.entries);
            for (const pos of tilePositions) {
                if (shouldCreateTextGeometries) {
                    const textTechnique = technique;
                    const text = harp_datasource_protocol_1.getFeatureText(context, textTechnique, this.m_options.languages);
                    if (text !== undefined && text.length > 0) {
                        texts.push(meshBuffers.addText(text));
                    }
                    else {
                        texts.push(INVALID_ARRAY_INDEX);
                    }
                }
                // Always store the position, otherwise the following POIs will be
                // misplaced.
                if (shouldCreateTextGeometries) {
                    OmvUtils_1.webMercatorTile2TargetWorld(extents, this.m_decodeInfo, pos, tmpV3, scaleHeights);
                }
                else {
                    OmvUtils_1.webMercatorTile2TargetTile(extents, this.m_decodeInfo, pos, tmpV3, scaleHeights);
                }
                // For planar projection the world z coordinate (potentially scaled) is taken,
                // for spherical projection the z coordinate in the source projection (no scaling needed) is taken:
                const height = this.projection.type === harp_geoutils_1.ProjectionType.Planar ? tmpV3.z : pos.z;
                if (height > this.m_maxGeometryHeight) {
                    this.m_maxGeometryHeight = height;
                }
                else if (height < this.m_minGeometryHeight) {
                    this.m_minGeometryHeight = height;
                }
                positions.push(tmpV3.x, tmpV3.y, tmpV3.z);
                objInfos.push(this.m_options.gatherFeatureAttributes ? env.entries : featureId);
                offsetDirections.push((_a = env.lookup("offset_direction")) !== null && _a !== void 0 ? _a : 0);
                if (wantsPoi) {
                    if (imageTexture === undefined) {
                        imageTextures.push(INVALID_ARRAY_INDEX);
                    }
                    else {
                        imageTextures.push(meshBuffers.addText(imageTexture));
                    }
                }
            }
        }
    }
    /**
     *
     * Creates the line geometries for the given feature.
     *
     * @param layer - Tile's layer to be processed.
     * @param extents - Tile's layer extents.
     * @param geometry - The current feature containing the main geometry.
     * @param env - The [[MapEnv]] containing the environment information for the map.
     * @param techniques - The array of [[Technique]] that will be applied to the geometry.
     */
    processLineFeature(layer, extents, geometry, context, techniques) {
        const env = context.env;
        this.processFeatureCommon(env);
        const localLines = []; // lines in target tile space.
        const worldLines = []; // lines in world space.
        const uvs = [];
        const offsets = [];
        const projectedBoundingBox = this.m_decodeInfo.projectedBoundingBox;
        let localLineSegments; // lines in target tile space for special dashes.
        const tileWidth = projectedBoundingBox.extents.x * 2;
        const tileHeight = projectedBoundingBox.extents.y * 2;
        const tileSizeWorld = Math.max(tileWidth, tileHeight);
        let computeTexCoords;
        let texCoordinateType;
        const hasUntiledLines = geometry[0].untiledPositions !== undefined;
        const scaleHeights = false; // No need to scale height, source data is 2D.
        // If true, special handling for dashes is required (round and diamond shaped dashes).
        let hasIndividualLineSegments = false;
        let hasContinuousLineSegments = false;
        // Check if any of the techniques needs texture coordinates
        for (const technique of techniques) {
            if (technique === undefined) {
                continue;
            }
            if (!computeTexCoords) {
                computeTexCoords = this.getComputeTexCoordsFunc(technique);
                texCoordinateType = this.getTextureCoordinateType(technique);
            }
            else {
                // Support generation of only one type of texture coordinates.
                const otherTexCoordType = this.getTextureCoordinateType(technique);
                harp_utils_1.assert(otherTexCoordType === undefined || texCoordinateType === otherTexCoordType);
            }
            hasIndividualLineSegments =
                hasIndividualLineSegments || harp_datasource_protocol_1.isSpecialDashesLineTechnique(technique);
            hasContinuousLineSegments = hasContinuousLineSegments || !hasIndividualLineSegments;
        }
        for (const polyline of geometry) {
            // Compute the world position of the untiled line and its distance to the origin of the
            // line to properly join lines.
            const untiledLine = [];
            let lineDist = 0;
            if (hasUntiledLines) {
                this.m_decodeInfo.targetProjection.projectPoint(polyline.untiledPositions[0], tmpV3r);
                polyline.untiledPositions.forEach(pos => {
                    // Calculate the distance to the next un-normalized point.
                    this.m_decodeInfo.targetProjection.projectPoint(pos, tmpV3);
                    lineDist += tmpV3.distanceTo(tmpV3r);
                    tmpV3r.copy(tmpV3);
                    // Pushed the normalized point for line matching.
                    this.m_decodeInfo.targetProjection.projectPoint(pos.normalized(), tmpV3);
                    untiledLine.push(tmpV3.x, tmpV3.y, tmpV3.z, lineDist);
                });
            }
            // Add continuous line as individual segments to improve special dashes by overlapping
            // their connecting vertices. The technique/style should defined round or rectangular
            // caps.
            if (hasIndividualLineSegments) {
                localLineSegments = [];
                // Compute length of whole line and offsets of individual segments.
                let lineLength = 0;
                const pointCount = polyline.positions.length;
                if (pointCount > 1) {
                    let lastSegmentOffset = 0;
                    for (let i = 0; i < pointCount - 1; i++) {
                        const localLine = [];
                        const worldLine = [];
                        const lineUvs = [];
                        const segmentOffsets = [];
                        const pos1 = polyline.positions[i];
                        const pos2 = polyline.positions[i + 1];
                        OmvUtils_1.webMercatorTile2TargetWorld(extents, this.m_decodeInfo, pos1, tmpV3, scaleHeights);
                        worldLine.push(tmpV3.x, tmpV3.y, tmpV3.z);
                        OmvUtils_1.webMercatorTile2TargetWorld(extents, this.m_decodeInfo, pos2, tmpV4, scaleHeights);
                        worldLine.push(tmpV4.x, tmpV4.y, tmpV4.z);
                        if (computeTexCoords) {
                            computeTexCoords(pos1, extents).toArray(lineUvs, lineUvs.length);
                            computeTexCoords(pos2, extents).toArray(lineUvs, lineUvs.length);
                        }
                        if (hasUntiledLines) {
                            // Find where in the [0...1] range relative to the line our current
                            // vertex lies.
                            let offset = this.findRelativePositionInLine(tmpV3, untiledLine) / lineDist;
                            segmentOffsets.push(offset);
                            offset = this.findRelativePositionInLine(tmpV4, untiledLine) / lineDist;
                            segmentOffsets.push(offset);
                        }
                        else {
                            segmentOffsets.push(lastSegmentOffset);
                            // Compute length of segment and whole line to scale down later.
                            const segmentLength = tmpV3.distanceTo(tmpV4);
                            lineLength += segmentLength;
                            lastSegmentOffset += segmentLength;
                            segmentOffsets.push(lastSegmentOffset);
                        }
                        tmpV3.sub(this.m_decodeInfo.center);
                        localLine.push(tmpV3.x, tmpV3.y, tmpV3.z);
                        tmpV4.sub(this.m_decodeInfo.center);
                        localLine.push(tmpV4.x, tmpV4.y, tmpV4.z);
                        localLineSegments.push(localLine);
                        worldLines.push(worldLine);
                        uvs.push(lineUvs);
                        offsets.push(segmentOffsets);
                    }
                }
                if (!hasUntiledLines && lineLength > 0) {
                    // Scale down each individual segment to range [0..1] for whole line.
                    for (const segOffsets of offsets) {
                        segOffsets.forEach((offs, index) => {
                            segOffsets[index] = offs / lineLength;
                        });
                    }
                }
            }
            // Add continuous lines
            if (hasContinuousLineSegments) {
                const localLine = [];
                const worldLine = [];
                const lineUvs = [];
                const lineOffsets = [];
                polyline.positions.forEach(pos => {
                    OmvUtils_1.webMercatorTile2TargetWorld(extents, this.m_decodeInfo, pos, tmpV3, scaleHeights);
                    worldLine.push(tmpV3.x, tmpV3.y, tmpV3.z);
                    if (computeTexCoords) {
                        computeTexCoords(pos, extents).toArray(lineUvs, lineUvs.length);
                    }
                    if (hasUntiledLines) {
                        // Find where in the [0...1] range relative to the line our current vertex
                        // lines.
                        const offset = this.findRelativePositionInLine(tmpV3, untiledLine) / lineDist;
                        lineOffsets.push(offset);
                    }
                    tmpV3.sub(this.m_decodeInfo.center);
                    localLine.push(tmpV3.x, tmpV3.y, tmpV3.z);
                });
                localLines.push(localLine);
                worldLines.push(worldLine);
                uvs.push(lineUvs);
                offsets.push(lineOffsets);
            }
        }
        const wantCircle = this.m_decodeInfo.tileKey.level >= 11;
        for (const technique of techniques) {
            if (technique === undefined) {
                continue;
            }
            const techniqueIndex = technique._index;
            const techniqueName = technique.name;
            if (harp_datasource_protocol_1.isLineTechnique(technique) || harp_datasource_protocol_1.isSolidLineTechnique(technique)) {
                const lineGeometry = harp_datasource_protocol_1.isLineTechnique(technique)
                    ? this.m_simpleLines
                    : this.m_solidLines;
                const lineType = harp_datasource_protocol_1.isLineTechnique(technique) ? LineType.Simple : LineType.Complex;
                if (hasIndividualLineSegments) {
                    harp_utils_1.assert(localLineSegments !== undefined, "OmvDecodedTileEmitter#processLineFeature: " +
                        "Internal error - No localLineSegments");
                    this.applyLineTechnique(lineGeometry, technique, techniqueIndex, lineType, env.entries, localLineSegments, context, this.getTextureCoordinateType(technique) ? uvs : undefined, offsets);
                }
                if (localLines.length > 0) {
                    this.applyLineTechnique(lineGeometry, technique, techniqueIndex, lineType, env.entries, localLines, context, this.getTextureCoordinateType(technique) ? uvs : undefined, hasUntiledLines ? offsets : undefined);
                }
            }
            else if (harp_datasource_protocol_1.isTextTechnique(technique) ||
                harp_datasource_protocol_1.isPoiTechnique(technique) ||
                harp_datasource_protocol_1.isLineMarkerTechnique(technique)) {
                const textTechnique = technique;
                const text = harp_datasource_protocol_1.getFeatureText(context, textTechnique, this.m_options.languages);
                if (text === undefined || text.length === 0) {
                    continue;
                }
                let validLines = [];
                if (this.m_options.skipShortLabels) {
                    // Filter the lines, keep only those that are long enough for labelling. Also,
                    // split jagged label paths to keep processing and rendering only those that
                    // have no sharp corners, which would not be rendered anyway.
                    const worldUnitsPerPixel = tileSizeWorld / this.m_decodeInfo.tileSizeOnScreen;
                    const minEstimatedLabelLength = MIN_AVERAGE_CHAR_WIDTH *
                        text.length *
                        worldUnitsPerPixel *
                        SIZE_ESTIMATION_FACTOR;
                    const minEstimatedLabelLengthSqr = minEstimatedLabelLength * minEstimatedLabelLength;
                    validLines = this.splitJaggyLines(worldLines, minEstimatedLabelLengthSqr, MAX_CORNER_ANGLE);
                }
                else {
                    validLines = worldLines;
                }
                if (validLines.length === 0) {
                    continue;
                }
                if (harp_datasource_protocol_1.isTextTechnique(technique)) {
                    if (text === undefined) {
                        continue;
                    }
                    for (const path of validLines) {
                        const pathLengthSqr = harp_utils_1.Math2D.computeSquaredLineLength(path);
                        this.m_textPathGeometries.push({
                            technique: techniqueIndex,
                            path,
                            pathLengthSqr,
                            text: String(text),
                            objInfos: this.m_options.gatherFeatureAttributes
                                ? env.entries
                                : harp_datasource_protocol_1.getFeatureId(env.entries)
                        });
                    }
                }
                else {
                    const lineMarkerTechnique = technique;
                    let imageTexture = TechniqueAttr_1.evaluateTechniqueAttr(context, lineMarkerTechnique.imageTexture);
                    // TODO: `imageTextureField` and `imageTexturePrefix` and `imageTexturePostfix`
                    // are now deprecated
                    // TODO: Move to decoder independent parts of code.
                    if (typeof lineMarkerTechnique.imageTextureField === "string") {
                        const imageTextureValue = env.lookup(lineMarkerTechnique.imageTextureField);
                        imageTexture = imageTextureValue;
                        if (typeof lineMarkerTechnique.imageTexturePrefix === "string") {
                            imageTexture = lineMarkerTechnique.imageTexturePrefix + imageTexture;
                        }
                        if (typeof lineMarkerTechnique.imageTexturePostfix === "string") {
                            imageTexture = imageTexture + lineMarkerTechnique.imageTexturePostfix;
                        }
                    }
                    for (const aLine of validLines) {
                        this.m_poiGeometries.push({
                            technique: techniqueIndex,
                            positions: {
                                name: "position",
                                type: "float",
                                buffer: new Float64Array(aLine).buffer,
                                itemCount: 3
                            },
                            texts: [0],
                            stringCatalog: [text, imageTexture],
                            imageTextures: [1],
                            objInfos: this.m_options.gatherFeatureAttributes
                                ? [env.entries]
                                : [harp_datasource_protocol_1.getFeatureId(env.entries)]
                        });
                    }
                }
            }
            else if (harp_datasource_protocol_1.isLabelRejectionLineTechnique(technique)) {
                for (const path of worldLines) {
                    const worldPath = [];
                    for (let i = 0; i < path.length; i += 3) {
                        worldPath.push(new THREE.Vector3().fromArray(path, i));
                    }
                    this.m_pathGeometries.push({
                        path: worldPath
                    });
                }
            }
            else if (harp_datasource_protocol_1.isExtrudedLineTechnique(technique)) {
                const meshBuffers = this.findOrCreateMeshBuffers(techniqueIndex, harp_datasource_protocol_1.GeometryType.ExtrudedLine);
                if (meshBuffers === undefined) {
                    continue;
                }
                const { positions, indices, groups, featureStarts, objInfos } = meshBuffers;
                const start = indices.length;
                const lineWidth = TechniqueAttr_1.evaluateTechniqueAttr(context, technique.lineWidth);
                if (lineWidth === undefined) {
                    continue;
                }
                const techniqueCaps = TechniqueAttr_1.evaluateTechniqueAttr(context, technique.caps, "Circle");
                const addCircle = wantCircle && techniqueCaps === "Circle";
                localLines.forEach(aLine => {
                    TriangulateLines_1.triangulateLine(aLine, lineWidth, positions, indices, addCircle);
                    featureStarts.push(start);
                    objInfos.push(this.m_options.gatherFeatureAttributes
                        ? env.entries
                        : harp_datasource_protocol_1.getFeatureId(env.entries));
                });
                const count = indices.length - start;
                groups.push({ start, count, technique: techniqueIndex });
            }
            else {
                logger.warn(`OmvDecodedTileEmitter#processLineFeature: Invalid line technique
                     ${techniqueName} for layer: ${env.entries.$layer} `);
            }
        }
    }
    /**
     * Creates the polygons geometries for the given feature.
     *
     * @param layer - Tile's layer to be processed.
     * @param extents - Tile's layer extents.
     * @param geometry - The current feature containing the main geometry.
     * @param feature - The [[MapEnv]] containing the environment information for the map.
     * @param techniques - The array of [[Technique]] that will be applied to the geometry.
     */
    processPolygonFeature(layer, extents, geometry, context, techniques) {
        const env = context.env;
        this.processFeatureCommon(env);
        const scaleHeights = false; // No need to scale height, source data is 2D.
        techniques.forEach(technique => {
            if (technique === undefined) {
                return;
            }
            const techniqueIndex = technique._index;
            if (techniqueIndex === undefined) {
                throw new Error("OmvDecodedTileEmitter#processPolygonFeature: " +
                    "Internal error - No technique index");
            }
            let objectBounds;
            const bbox = env.lookup("bbox");
            if (Array.isArray(bbox)) {
                const [west, south, east, north] = bbox;
                const geoBox = new harp_geoutils_1.GeoBox(new harp_geoutils_1.GeoCoordinates(south, west), new harp_geoutils_1.GeoCoordinates(north, east));
                objectBounds = new THREE.Box3();
                harp_geoutils_1.webMercatorProjection.projectBox(geoBox, objectBounds);
            }
            const polygons = [];
            const isExtruded = harp_datasource_protocol_1.isExtrudedPolygonTechnique(technique);
            const isFilled = harp_datasource_protocol_1.isFillTechnique(technique);
            const isStandard = harp_datasource_protocol_1.isStandardTechnique(technique);
            const isPolygon = isExtruded ||
                isFilled ||
                isStandard ||
                (harp_datasource_protocol_1.isShaderTechnique(technique) && technique.primitive === "mesh");
            const computeTexCoords = this.getComputeTexCoordsFunc(technique, objectBounds);
            const shouldClipPolygons = isPolygon && !isExtruded;
            for (const polygon of geometry) {
                const rings = [];
                for (let i = 0; i < polygon.rings.length; i++) {
                    const isExterior = i === 0;
                    let ringCoords = polygon.rings[i];
                    // Disable clipping for the polygon geometries
                    // rendered using the extruded-polygon technique.
                    // We can't clip these polygons for now because
                    // otherwise we could break the current assumptions
                    // used to add oultines around the extruded geometries.
                    if (shouldClipPolygons) {
                        // Quick test to avoid clipping if all the coords
                        // of the current polygon are inside the tile bounds.
                        const hasCoordsOutsideTileBounds = ringCoords.some(p => p.x < 0 || p.x > extents || p.y < 0 || p.y > extents);
                        if (hasCoordsOutsideTileBounds) {
                            ringCoords = ClipPolygon_1.clipPolygon(ringCoords, extents);
                        }
                    }
                    const area = THREE.ShapeUtils.area(ringCoords);
                    // According to MVT spec, the rings defining a polygon follow this layout:
                    // [[ext-ring], seq([int-ring])]
                    //
                    // For example:
                    // ┌───────ext1───────┐
                    // │                  │
                    // │  ┌────hole────┐  │
                    // │  │            │  │
                    // │  │            │  │    w:CW     w:CCW
                    // │  │            │  │   [[ext1], [hole]]
                    // │  │            │  │
                    // │  │            │  │
                    // │  │            │  │
                    // │  └──────>─────┘  │
                    // │                  │
                    // └─────────<────────┘
                    // So, if one exterior ring get clipped to a zero-area polygon we
                    // can imply that all the inner rings collapsed as well.
                    // As per spec, all the inner rings must enclosed within the exterior ring.
                    // Using this assumption, we can skip the whole polygon.
                    if (isExterior && area === 0) {
                        break;
                    }
                    // For holes, push the current ring only if it has a non-zero area
                    if (area !== 0) {
                        let textureCoords;
                        if (computeTexCoords !== undefined) {
                            textureCoords = ringCoords.map(coord => computeTexCoords(coord, extents));
                        }
                        rings.push(new Ring_1.Ring(ringCoords, textureCoords, extents, shouldClipPolygons));
                    }
                }
                if (rings.length > 0) {
                    polygons.push(rings);
                }
            }
            const isLine = harp_datasource_protocol_1.isSolidLineTechnique(technique) || harp_datasource_protocol_1.isLineTechnique(technique);
            if (isPolygon) {
                this.applyPolygonTechnique(polygons, technique, techniqueIndex, context, extents);
            }
            else if (isLine) {
                const lineGeometry = technique.name === "line" ? this.m_simpleLines : this.m_solidLines;
                const lineType = technique.name === "line" ? LineType.Simple : LineType.Complex;
                // Use individual line segments instead of a continuous line in special cases (round
                // and diamond shaped dashes).
                const needIndividualLineSegments = harp_datasource_protocol_1.isSpecialDashesLineTechnique(technique);
                polygons.forEach(rings => {
                    const lines = [];
                    const offsets = needIndividualLineSegments
                        ? []
                        : undefined;
                    rings.forEach(ring => {
                        const length = ring.points.length;
                        let line = [];
                        // Compute length of whole line and offsets of individual segments.
                        let ringLength = 0;
                        let lastSegmentOffset = 0;
                        let segmentOffsets = needIndividualLineSegments
                            ? []
                            : undefined;
                        for (let i = 0; i < length; ++i) {
                            if (needIndividualLineSegments && line.length > 0) {
                                // Allocate a line for every segment.
                                line = [];
                                segmentOffsets = [];
                            }
                            const nextIdx = (i + 1) % length;
                            const curr = ring.points[i];
                            const next = ring.points[nextIdx];
                            const properEdge = ring.isProperEdge(i);
                            if (!properEdge && line.length !== 0) {
                                lines.push(line);
                                line = [];
                            }
                            else if (properEdge && line.length === 0) {
                                OmvUtils_1.webMercatorTile2TargetTile(extents, this.m_decodeInfo, tmpV2.copy(curr), tmpV3, scaleHeights);
                                line.push(tmpV3.x, tmpV3.y, tmpV3.z);
                                if (needIndividualLineSegments) {
                                    // Add next point as the end point of this line segment.
                                    OmvUtils_1.webMercatorTile2TargetTile(extents, this.m_decodeInfo, tmpV2.copy(next), tmpV4, scaleHeights);
                                    line.push(tmpV4.x, tmpV4.y, tmpV4.z);
                                    segmentOffsets.push(lastSegmentOffset);
                                    // Compute length of segment and whole line to scale down later.
                                    const segmentLength = tmpV3.distanceTo(tmpV4);
                                    ringLength += segmentLength;
                                    lastSegmentOffset += segmentLength;
                                    segmentOffsets.push(lastSegmentOffset);
                                }
                            }
                            if (properEdge && !needIndividualLineSegments) {
                                OmvUtils_1.webMercatorTile2TargetTile(extents, this.m_decodeInfo, tmpV2.copy(next), tmpV3, scaleHeights);
                                line.push(tmpV3.x, tmpV3.y, tmpV3.z);
                            }
                            if (needIndividualLineSegments && line.length > 0 && ringLength > 0) {
                                // Scale down each individual segment to range [0..1] for the whole
                                // line.
                                segmentOffsets.forEach((offs, index) => {
                                    segmentOffsets[index] = offs / ringLength;
                                });
                                // Close the line segment as a single line.
                                lines.push(line);
                                offsets.push(segmentOffsets);
                            }
                        }
                        if (!needIndividualLineSegments && line.length > 0) {
                            lines.push(line);
                        }
                    });
                    if (lines.length === 0) {
                        return;
                    }
                    this.applyLineTechnique(lineGeometry, technique, techniqueIndex, lineType, env.entries, lines, context, undefined, offsets);
                });
            }
        });
    }
    /**
     * Creates the geometries that belongs to the [[Tile].
     *
     * @returns The [[DecodedTile]]
     */
    getDecodedTile() {
        this.createGeometries();
        this.processSimpleLines(this.m_simpleLines);
        this.processLines(this.m_solidLines);
        const decodedTile = {
            techniques: this.m_styleSetEvaluator.decodedTechniques,
            geometries: this.m_geometries,
            decodeTime: undefined
        };
        if (this.m_textGeometries.length > 0) {
            decodedTile.textGeometries = this.m_textGeometries;
        }
        if (this.m_poiGeometries.length > 0) {
            decodedTile.poiGeometries = this.m_poiGeometries;
        }
        if (this.m_textPathGeometries.length > 0) {
            decodedTile.textPathGeometries = this.m_textPathGeometries;
        }
        if (this.m_pathGeometries.length > 0) {
            decodedTile.pathGeometries = this.m_pathGeometries;
        }
        if (this.m_sources.length !== 0) {
            decodedTile.copyrightHolderIds = this.m_sources;
        }
        decodedTile.maxGeometryHeight = this.m_maxGeometryHeight;
        decodedTile.minGeometryHeight = this.m_minGeometryHeight;
        return decodedTile;
    }
    /**
     * Split the lines array into multiple parts if there are sharp corners. Reject parts that are
     * too short to display the label text.
     *
     * @param {number[][]} lines Array containing the points of the paths.
     * @param {number} minEstimatedLabelLengthSqr Minimum label size squared.
     * @param {number} maxCornerAngle Maximum angle between consecutive path segments in radians.
     * @returns The split and filtered lines array.
     */
    splitJaggyLines(lines, minEstimatedLabelLengthSqr, maxCornerAngle) {
        const validLines = [];
        const computeBoundingBoxSizeSqr = (aLine, startIndex, endIndex) => {
            let minX = Number.MAX_SAFE_INTEGER;
            let maxX = Number.MIN_SAFE_INTEGER;
            let minY = Number.MAX_SAFE_INTEGER;
            let maxY = Number.MIN_SAFE_INTEGER;
            for (let i = startIndex; i < endIndex; i += 3) {
                const x = aLine[i];
                const y = aLine[i + 1];
                if (x < minX) {
                    minX = x;
                }
                if (x > maxX) {
                    maxX = x;
                }
                if (y < minY) {
                    minY = y;
                }
                if (y > maxY) {
                    maxY = y;
                }
            }
            return (maxX - minX) * (maxX - minX) + (maxY - minY) * (maxY - minY);
        };
        // Work on a copy of the path.
        const pathsToCheck = lines.slice();
        while (pathsToCheck.length > 0) {
            const path = pathsToCheck.pop();
            if (path === undefined || path.length < 6) {
                continue;
            }
            let splitIndex = -1;
            for (let i = 0; i < path.length - 3; i += 3) {
                tempP0.set(path[i], path[i + 1]);
                tempP1.set(path[i + 3], path[i + 4]);
                const tangent = tempP1.sub(tempP0).normalize();
                if (i > 0) {
                    const theta = Math.atan2(tempPreviousTangent.x * tangent.y - tangent.x * tempPreviousTangent.y, tangent.dot(tempPreviousTangent));
                    if (Math.abs(theta) > maxCornerAngle) {
                        splitIndex = i;
                        break;
                    }
                }
                tempPreviousTangent.set(tangent.x, tangent.y);
            }
            if (splitIndex > 0) {
                // Estimate if the first part of the path is long enough for the label.
                const firstPathLengthSqr = computeBoundingBoxSizeSqr(path, 0, splitIndex + 3);
                // Estimate if the second part of the path is long enough for the label.
                const secondPathLengthSqr = computeBoundingBoxSizeSqr(path, splitIndex, path.length);
                if (firstPathLengthSqr > minEstimatedLabelLengthSqr) {
                    // Split off the valid first path points with a clone of the path.
                    validLines.push(path.slice(0, splitIndex + 3));
                }
                if (secondPathLengthSqr > minEstimatedLabelLengthSqr) {
                    // Now process the second part of the path, it may have to be split
                    // again.
                    pathsToCheck.push(path.slice(splitIndex));
                }
            }
            else {
                // Estimate if the path is long enough for the label, otherwise ignore
                // it for rendering text. First, compute the bounding box in world
                // coordinates.
                const pathLengthSqr = computeBoundingBoxSizeSqr(path, 0, path.length);
                if (pathLengthSqr > minEstimatedLabelLengthSqr) {
                    validLines.push(path);
                }
            }
        }
        return validLines;
    }
    getTextureCoordinateType(technique) {
        // Set TileSpace coordinate type to generate texture coordinates for the displacement map
        // used in elevation overlay.
        if ((harp_datasource_protocol_1.isFillTechnique(technique) ||
            harp_datasource_protocol_1.isSolidLineTechnique(technique) ||
            harp_datasource_protocol_1.isExtrudedPolygonTechnique(technique)) &&
            this.m_options.enableElevationOverlay) {
            return harp_datasource_protocol_1.TextureCoordinateType.TileSpace;
        }
        return harp_datasource_protocol_1.textureCoordinateType(technique);
    }
    getComputeTexCoordsFunc(technique, objectBounds) {
        const texCoordType = this.getTextureCoordinateType(technique);
        switch (texCoordType) {
            case harp_datasource_protocol_1.TextureCoordinateType.TileSpace:
                return (tilePos, tileExtents) => {
                    const uv = tilePos.clone().divideScalar(tileExtents);
                    uv.y = 1 - uv.y;
                    return uv;
                };
            case harp_datasource_protocol_1.TextureCoordinateType.EquirectangularSpace:
                return (tilePos, extents) => {
                    const worldPos = OmvUtils_1.tile2world(extents, this.m_decodeInfo, tilePos, false, tmpV3r);
                    const uv = harp_geoutils_1.normalizedEquirectangularProjection.reprojectPoint(harp_geoutils_1.webMercatorProjection, worldPos);
                    return new THREE.Vector2(uv.x, uv.y);
                };
            case harp_datasource_protocol_1.TextureCoordinateType.FeatureSpace:
                if (!objectBounds) {
                    return undefined;
                }
                return (tilePos, extents) => {
                    const worldPos = OmvUtils_1.tile2world(extents, this.m_decodeInfo, tilePos, false, tmpV3r);
                    const uv = new THREE.Vector2(worldPos.x, worldPos.y);
                    if (objectBounds) {
                        uv.x -= objectBounds.min.x;
                        uv.y -= objectBounds.min.y;
                        uv.x /= objectBounds.max.x - objectBounds.min.x;
                        uv.y /= objectBounds.max.y - objectBounds.min.y;
                    }
                    uv.y = 1 - uv.y;
                    return uv;
                };
            default:
                return undefined;
        }
    }
    applyLineTechnique(linesGeometry, technique, techniqueIndex, lineType = LineType.Complex, featureAttributes, lines, context, uvs, offsets) {
        let lineGroup;
        const lineGroupGeometries = linesGeometry.find(aLine => aLine.technique === techniqueIndex);
        const hasNormalsAndUvs = uvs !== undefined;
        if (lineGroupGeometries === undefined) {
            lineGroup = new Lines_1.LineGroup(hasNormalsAndUvs, undefined, lineType === LineType.Simple);
            const aLine = {
                type: lineType === LineType.Complex ? harp_datasource_protocol_1.GeometryType.SolidLine : harp_datasource_protocol_1.GeometryType.Line,
                technique: techniqueIndex,
                lines: lineGroup
            };
            if (this.m_options.gatherFeatureAttributes) {
                aLine.objInfos = [featureAttributes];
                aLine.featureStarts = [0];
            }
            linesGeometry.push(aLine);
        }
        else {
            lineGroup = lineGroupGeometries.lines;
            if (this.m_options.gatherFeatureAttributes &&
                lineGroupGeometries.objInfos &&
                lineGroupGeometries.featureStarts) {
                // Add ID to tag the geometry, also provide the current length of the index
                // attribute
                lineGroupGeometries.objInfos.push(featureAttributes);
                lineGroupGeometries.featureStarts.push(lineGroup.indices.length);
            }
        }
        let i = 0;
        lines.forEach(aLine => {
            lineGroup.add(this.m_decodeInfo.center, aLine, this.projection, offsets ? offsets[i] : undefined, uvs ? uvs[i] : undefined);
            i++;
        });
    }
    applyPolygonTechnique(polygons, technique, techniqueIndex, context, extents) {
        var _a, _b;
        if (polygons.length === 0) {
            return;
        }
        const isExtruded = harp_datasource_protocol_1.isExtrudedPolygonTechnique(technique);
        const geometryType = isExtruded ? harp_datasource_protocol_1.GeometryType.ExtrudedPolygon : harp_datasource_protocol_1.GeometryType.Polygon;
        const meshBuffers = this.findOrCreateMeshBuffers(techniqueIndex, geometryType);
        if (meshBuffers === undefined) {
            return;
        }
        const extrudedPolygonTechnique = technique;
        const fillTechnique = technique;
        const boundaryWalls = extrudedPolygonTechnique.boundaryWalls === true;
        const isFilled = harp_datasource_protocol_1.isFillTechnique(technique);
        const texCoordType = this.getTextureCoordinateType(technique);
        let height = TechniqueAttr_1.evaluateTechniqueAttr(context, extrudedPolygonTechnique.height);
        let floorHeight = TechniqueAttr_1.evaluateTechniqueAttr(context, extrudedPolygonTechnique.floorHeight);
        if (height === undefined) {
            // Get the height values for the footprint and extrusion.
            const featureHeight = context.env.lookup("height");
            const styleSetDefaultHeight = TechniqueAttr_1.evaluateTechniqueAttr(context, extrudedPolygonTechnique.defaultHeight);
            height =
                featureHeight !== undefined
                    ? featureHeight
                    : styleSetDefaultHeight !== undefined
                        ? styleSetDefaultHeight
                        : 0;
        }
        if (floorHeight === undefined) {
            const featureMinHeight = context.env.lookup("min_height");
            floorHeight = featureMinHeight !== undefined && !isFilled ? featureMinHeight : 0;
        }
        // Prevent that extruded buildings are completely flat (can introduce errors in normal
        // computation and extrusion).
        height = Math.max(floorHeight + MapMeshMaterialsDefs_1.ExtrusionFeatureDefs.MIN_BUILDING_HEIGHT, height);
        const tileLevel = this.m_decodeInfo.tileKey.level;
        const scaleHeights = isExtruded && harp_datasource_protocol_1.scaleHeight(context, extrudedPolygonTechnique, tileLevel);
        this.m_decodeInfo.tileBounds.getCenter(tempTileOrigin);
        const { positions, normals, textureCoordinates, colors, extrusionAxis, indices, edgeIndices, groups } = meshBuffers;
        const isSpherical = this.m_decodeInfo.targetProjection.type === harp_geoutils_1.ProjectionType.Spherical;
        const edgeWidth = isExtruded
            ? (_a = extrudedPolygonTechnique.lineWidth) !== null && _a !== void 0 ? _a : 0.0 : isFilled
            ? (_b = fillTechnique.lineWidth) !== null && _b !== void 0 ? _b : 0.0 : 0.0;
        const hasEdges = typeof edgeWidth === "number" ? edgeWidth > 0.0 : true;
        let color;
        if (harp_datasource_protocol_1.isExtrudedPolygonTechnique(technique)) {
            if (harp_utils_1.getOptionValue(technique.vertexColors, false)) {
                let colorValue = TechniqueAttr_1.evaluateTechniqueAttr(context, technique.color);
                if (colorValue === undefined) {
                    const featureColor = context.env.lookup("color");
                    if (this.isColorStringValid(featureColor)) {
                        colorValue = String(featureColor);
                    }
                }
                if (colorValue === undefined) {
                    colorValue = TechniqueAttr_1.evaluateTechniqueAttr(context, technique.defaultColor, 0x000000);
                }
                if (colorValue === undefined) {
                    colorValue = 0x000000;
                }
                tmpColor.set(colorValue);
                color = tmpColor;
            }
        }
        for (const polygon of polygons) {
            const startIndexCount = indices.length;
            const edgeStartIndexCount = edgeIndices.length;
            // Iterate over the exterior ring of the current polygon
            const vertices = [];
            const polygonBaseVertex = positions.length / 3;
            const exteriorRing = polygon[0];
            const featureStride = exteriorRing.vertexStride;
            const vertexStride = featureStride + 2;
            // The exterior ring is always the first
            for (let i = 0; i < exteriorRing.points.length; ++i) {
                const point = exteriorRing.points[i];
                // Invert the Y component to preserve the correct winding without transforming
                // from webMercator's local to global space.
                vertices.push(point.x, -point.y);
                if (exteriorRing.textureCoords !== undefined) {
                    vertices.push(exteriorRing.textureCoords[i].x, exteriorRing.textureCoords[i].y);
                }
                const nextIdx = (i + 1) % exteriorRing.points.length;
                const properEdge = exteriorRing.isProperEdge(i);
                // Calculate nextEdge and nextWall.
                vertices.push(properEdge ? nextIdx : -1, boundaryWalls || properEdge ? nextIdx : -1);
            }
            // Iterate over the inner rings - if any
            const holes = [];
            let ringIndex = 1;
            while (ringIndex < polygon.length) {
                const vertexOffset = vertices.length / vertexStride;
                holes.push(vertexOffset);
                const hole = polygon[ringIndex++];
                for (let i = 0; i < hole.points.length; ++i) {
                    const nextIdx = (i + 1) % hole.points.length;
                    const point = hole.points[i];
                    // Invert the Y component to preserve the correct winding without
                    // transforming from webMercator's local to global space.
                    vertices.push(point.x, -point.y);
                    if (hole.textureCoords !== undefined) {
                        vertices.push(hole.textureCoords[i].x, hole.textureCoords[i].y);
                    }
                    // Calculate nextEdge and nextWall.
                    const insideExtents = hole.isProperEdge(i);
                    vertices.push(insideExtents ? vertexOffset + nextIdx : -1, boundaryWalls || insideExtents ? vertexOffset + nextIdx : -1);
                }
            }
            try {
                // Triangulate the footprint polyline.
                const triangles = earcut_1.default(vertices, holes, vertexStride);
                const originalVertexCount = vertices.length / vertexStride;
                // Subdivide for spherical projections if needed.
                if (isSpherical) {
                    const geom = new THREE.BufferGeometry();
                    const positionArray = [];
                    const uvArray = [];
                    const edgeArray = [];
                    const wallArray = [];
                    // Transform to global webMercator coordinates to be able to reproject to
                    // sphere.
                    for (let i = 0; i < vertices.length; i += vertexStride) {
                        const worldPos = OmvUtils_1.tile2world(extents, this.m_decodeInfo, tmpV2.set(vertices[i], vertices[i + 1]), true, tmpV3r);
                        positionArray.push(worldPos.x, worldPos.y, 0);
                        if (texCoordType !== undefined) {
                            uvArray.push(vertices[i + 2], vertices[i + 3]);
                        }
                        edgeArray.push(vertices[i + featureStride]);
                        wallArray.push(vertices[i + featureStride + 1]);
                    }
                    // Create the temporary geometry used for subdivision.
                    const posAttr = new THREE.BufferAttribute(new Float32Array(positionArray), 3);
                    geom.setAttribute("position", posAttr);
                    let uvAttr;
                    if (texCoordType !== undefined) {
                        uvAttr = new THREE.BufferAttribute(new Float32Array(uvArray), 2);
                        geom.setAttribute("uv", uvAttr);
                    }
                    const edgeAttr = new THREE.BufferAttribute(new Float32Array(edgeArray), 1);
                    geom.setAttribute("edge", edgeAttr);
                    const wallAttr = new THREE.BufferAttribute(new Float32Array(wallArray), 1);
                    geom.setAttribute("wall", edgeAttr);
                    const index = createIndexBufferAttribute(triangles, posAttr.count - 1);
                    const indexAttr = index.type === "uint32"
                        ? new THREE.Uint32BufferAttribute(index.buffer, 1)
                        : new THREE.Uint16BufferAttribute(index.buffer, 1);
                    geom.setIndex(indexAttr);
                    // Increase tesselation of polygons for certain zoom levels
                    // to remove mixed LOD cracks
                    const zoomLevel = this.m_decodeInfo.tileKey.level;
                    if (zoomLevel >= 3 && zoomLevel < 9) {
                        const subdivision = Math.pow(2, 9 - zoomLevel);
                        const { geoBox } = this.m_decodeInfo;
                        const edgeModifier = new EdgeLengthGeometrySubdivisionModifier_1.EdgeLengthGeometrySubdivisionModifier(subdivision, geoBox, EdgeLengthGeometrySubdivisionModifier_1.SubdivisionMode.NoDiagonals, harp_geoutils_1.webMercatorProjection);
                        edgeModifier.modify(geom);
                    }
                    // FIXME(HARP-5700): Subdivision modifier ignores texture coordinates.
                    const modifier = new SphericalGeometrySubdivisionModifier_1.SphericalGeometrySubdivisionModifier(THREE.MathUtils.degToRad(10), harp_geoutils_1.webMercatorProjection);
                    modifier.modify(geom);
                    // Reassemble the vertex buffer, transforming the subdivided global
                    // webMercator points back to local space.
                    vertices.length = 0;
                    triangles.length = 0;
                    for (let i = 0; i < posAttr.array.length; i += 3) {
                        const tilePos = OmvUtils_1.world2tile(extents, this.m_decodeInfo, tmpV3.set(posAttr.array[i], posAttr.array[i + 1], 0), true, tmpV2r);
                        vertices.push(tilePos.x, tilePos.y);
                        if (texCoordType !== undefined) {
                            vertices.push(uvAttr.array[(i / 3) * 2]);
                            vertices.push(uvAttr.array[(i / 3) * 2 + 1]);
                        }
                        vertices.push(edgeAttr.array[i / 3]);
                        vertices.push(wallAttr.array[i / 3]);
                    }
                    const geomIndex = geom.getIndex();
                    if (geomIndex !== null) {
                        triangles.push(...geomIndex.array);
                    }
                }
                // Add the footprint/roof vertices to the position buffer.
                tempVertNormal.set(0, 0, 1);
                // Assemble the vertex buffer.
                for (let i = 0; i < vertices.length; i += vertexStride) {
                    OmvUtils_1.webMercatorTile2TargetWorld(extents, this.m_decodeInfo, tmpV2.set(vertices[i], vertices[i + 1]), tmpV3, false, // no need to scale height (source data is 2D).
                    true);
                    const scaleFactor = scaleHeights
                        ? this.m_decodeInfo.targetProjection.getScaleFactor(tmpV3)
                        : 1.0;
                    this.m_maxGeometryHeight = Math.max(this.m_maxGeometryHeight, scaleFactor * height);
                    this.m_minGeometryHeight = Math.min(this.m_minGeometryHeight, scaleFactor * height);
                    if (isSpherical) {
                        tempVertNormal.set(tmpV3.x, tmpV3.y, tmpV3.z).normalize();
                    }
                    tmpV3.sub(this.center);
                    tempFootDisp.copy(tempVertNormal).multiplyScalar(floorHeight * scaleFactor);
                    positions.push(tmpV3.x + tempFootDisp.x, tmpV3.y + tempFootDisp.y, tmpV3.z + tempFootDisp.z);
                    if (texCoordType !== undefined) {
                        textureCoordinates.push(vertices[i + 2], vertices[i + 3]);
                    }
                    if (this.m_options.enableElevationOverlay) {
                        normals.push(...tempVertNormal.toArray());
                    }
                    if (isExtruded) {
                        tempRoofDisp.copy(tempVertNormal).multiplyScalar(height * scaleFactor);
                        positions.push(tmpV3.x + tempRoofDisp.x, tmpV3.y + tempRoofDisp.y, tmpV3.z + tempRoofDisp.z);
                        extrusionAxis.push(0.0, 0.0, 0.0, 0.0, tempRoofDisp.x - tempFootDisp.x, tempRoofDisp.y - tempFootDisp.y, tempRoofDisp.z - tempFootDisp.z, 1.0);
                        if (texCoordType !== undefined) {
                            textureCoordinates.push(vertices[i + 2], vertices[i + 3]);
                        }
                        if (this.m_options.enableElevationOverlay) {
                            normals.push(...tempVertNormal.toArray());
                        }
                        if (color !== undefined) {
                            colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
                        }
                    }
                }
                // Add the footprint/roof indices to the index buffer.
                for (let i = 0; i < triangles.length; i += 3) {
                    if (isExtruded) {
                        // When extruding we duplicate the vertices, so that all even vertices
                        // belong to the bottom and all odd vertices belong to the top.
                        const i0 = polygonBaseVertex + triangles[i + 0] * 2 + 1;
                        const i1 = polygonBaseVertex + triangles[i + 1] * 2 + 1;
                        const i2 = polygonBaseVertex + triangles[i + 2] * 2 + 1;
                        indices.push(i0, i1, i2);
                    }
                    else {
                        const i0 = polygonBaseVertex + triangles[i + 0];
                        const i1 = polygonBaseVertex + triangles[i + 1];
                        const i2 = polygonBaseVertex + triangles[i + 2];
                        indices.push(i0, i1, i2);
                    }
                }
                // Assemble the index buffer for edges (follow vertices as linked list).
                if (hasEdges) {
                    this.addEdges(polygonBaseVertex, originalVertexCount, vertexStride, featureStride, positions, vertices, edgeIndices, isExtruded, extrudedPolygonTechnique.footprint, extrudedPolygonTechnique.maxSlope);
                }
                if (isExtruded) {
                    this.addWalls(polygonBaseVertex, originalVertexCount, vertexStride, featureStride, vertices, indices);
                }
            }
            catch (err) {
                logger.error(`cannot triangulate geometry`, err);
            }
            if (this.m_options.gatherFeatureAttributes) {
                meshBuffers.objInfos.push(context.env.entries);
                meshBuffers.featureStarts.push(startIndexCount);
                meshBuffers.edgeFeatureStarts.push(edgeStartIndexCount);
            }
            const count = indices.length - startIndexCount;
            if (count > 0) {
                groups.push({
                    start: startIndexCount,
                    count,
                    technique: techniqueIndex
                });
            }
        }
    }
    createGeometries() {
        this.m_meshBuffers.forEach((meshBuffers, techniqueIdx) => {
            if (meshBuffers.positions.length === 0) {
                return;
            } // nothing to do
            if (!this.m_styleSetEvaluator.techniques ||
                this.m_styleSetEvaluator.techniques.length <= techniqueIdx) {
                throw new Error("Invalid technique index");
            }
            const technique = this.m_styleSetEvaluator.techniques[techniqueIdx];
            if (technique === undefined) {
                return;
            }
            if (meshBuffers.texts.length > 0) {
                const geometry = {
                    positions: {
                        name: "position",
                        type: "float",
                        buffer: new Float64Array(meshBuffers.positions).buffer,
                        itemCount: 3
                    },
                    texts: meshBuffers.texts,
                    technique: techniqueIdx,
                    stringCatalog: meshBuffers.stringCatalog,
                    objInfos: meshBuffers.objInfos
                };
                if (harp_datasource_protocol_1.isTextTechnique(technique)) {
                    this.m_textGeometries.push(geometry);
                }
                else {
                    harp_utils_1.assert(harp_datasource_protocol_1.isPoiTechnique(technique));
                    const poiGeometry = geometry;
                    poiGeometry.imageTextures = meshBuffers.imageTextures;
                    poiGeometry.offsetDirections = meshBuffers.offsetDirections;
                    this.m_poiGeometries.push(poiGeometry);
                }
                return;
            }
            const positionElements = new Float32Array(meshBuffers.positions);
            if (meshBuffers.groups.length === 0) {
                // create a default group containing all the vertices in the position attribute.
                meshBuffers.groups.push({
                    start: 0,
                    count: positionElements.length / 3,
                    technique: techniqueIdx
                });
            }
            const vertexAttributes = [
                {
                    name: "position",
                    buffer: positionElements.buffer,
                    itemCount: 3,
                    type: "float"
                }
            ];
            const geometry = {
                type: meshBuffers.type,
                vertexAttributes,
                groups: meshBuffers.groups
            };
            if (meshBuffers.normals.length > 0) {
                const normals = new Float32Array(meshBuffers.normals);
                harp_utils_1.assert(normals.length === positionElements.length, "length of normals buffer is different than the length of the " +
                    "position buffer");
                vertexAttributes.push({
                    name: "normal",
                    buffer: normals.buffer,
                    itemCount: 3,
                    type: "float"
                });
            }
            if (meshBuffers.colors.length > 0) {
                const colors = new Float32Array(meshBuffers.colors);
                harp_utils_1.assert(colors.length === positionElements.length, "length of colors buffer is different than the length of the " +
                    "position buffer");
                vertexAttributes.push({
                    name: "color",
                    buffer: colors.buffer,
                    itemCount: 3,
                    type: "float"
                });
            }
            const positionCount = meshBuffers.positions.length / 3;
            if (meshBuffers.textureCoordinates.length > 0) {
                const texCoordCount = meshBuffers.textureCoordinates.length / 2;
                harp_utils_1.assert(texCoordCount === positionCount, "length of textureCoordinates buffer is different than the length of the" +
                    "position buffer");
                const textureCoordinates = new Float32Array(meshBuffers.textureCoordinates);
                vertexAttributes.push({
                    name: "uv",
                    buffer: textureCoordinates.buffer,
                    itemCount: 2,
                    type: "float"
                });
            }
            if (meshBuffers.extrusionAxis.length > 0) {
                const extrusionAxis = new Float32Array(meshBuffers.extrusionAxis);
                harp_utils_1.assert(extrusionAxis.length / 4 === positionElements.length / 3, "length of extrusionAxis buffer is different than the length of the " +
                    "position buffer");
                vertexAttributes.push({
                    name: "extrusionAxis",
                    buffer: extrusionAxis.buffer,
                    itemCount: 4,
                    type: "float"
                });
            }
            if (meshBuffers.indices.length > 0) {
                geometry.index = createIndexBufferAttribute(meshBuffers.indices, positionCount - 1);
            }
            if (meshBuffers.edgeIndices.length > 0) {
                geometry.edgeIndex = createIndexBufferAttribute(meshBuffers.edgeIndices, positionCount - 1, "edgeIndex");
            }
            geometry.featureStarts = meshBuffers.featureStarts;
            geometry.edgeFeatureStarts = meshBuffers.edgeFeatureStarts;
            geometry.objInfos = meshBuffers.objInfos;
            this.m_geometries.push(geometry);
        });
    }
    processLines(linesArray) {
        linesArray.forEach(linesGeometry => {
            const { vertices, indices } = linesGeometry.lines;
            const technique = linesGeometry.technique;
            const buffer = new Float32Array(vertices).buffer;
            const index = createIndexBufferAttribute(indices, vertices.length / linesGeometry.lines.stride - 1);
            const attr = {
                type: "float",
                stride: linesGeometry.lines.stride,
                buffer,
                attributes: linesGeometry.lines.vertexAttributes
            };
            const geometry = {
                type: harp_datasource_protocol_1.GeometryType.SolidLine,
                index,
                interleavedVertexAttributes: [attr],
                groups: [{ start: 0, count: indices.length, technique }],
                vertexAttributes: [],
                featureStarts: linesGeometry.featureStarts,
                objInfos: linesGeometry.objInfos
            };
            this.m_geometries.push(geometry);
        });
    }
    processSimpleLines(linesArray) {
        linesArray.forEach(linesGeometry => {
            const { vertices, indices } = linesGeometry.lines;
            const technique = linesGeometry.technique;
            const buffer = new Float32Array(vertices).buffer;
            const attr = {
                buffer,
                itemCount: 3,
                type: "float",
                name: "position"
            };
            const geometry = {
                type: harp_datasource_protocol_1.GeometryType.Line,
                index: createIndexBufferAttribute(indices, vertices.length / attr.itemCount - 1),
                vertexAttributes: [attr],
                groups: [{ start: 0, count: indices.length, technique }],
                featureStarts: linesGeometry.featureStarts,
                objInfos: linesGeometry.objInfos
            };
            this.m_geometries.push(geometry);
        });
    }
    findOrCreateMeshBuffers(index, type) {
        let buffers = this.m_meshBuffers.get(index);
        if (buffers !== undefined) {
            if (buffers.type !== type) {
                logger.error(`MeshBuffer has been created with wrong type "${harp_datasource_protocol_1.GeometryType[type]}"
                instead of "${harp_datasource_protocol_1.GeometryType[buffers.type]}"`);
                return undefined;
            }
            return buffers;
        }
        buffers = new MeshBuffers(type);
        this.m_meshBuffers.set(index, buffers);
        return buffers;
    }
    processFeatureCommon(env) {
        const source = env.lookup("source");
        if (typeof source === "string" && source !== "") {
            if (!this.m_sources.includes(source)) {
                this.m_sources.push(source);
            }
        }
    }
    isColorStringValid(color) {
        return typeof color === "string" && color.length > 0;
    }
    addEdges(featureBaseVertex, featureVertexCount, vertexStride, featureStride, positions, vertices, indices, isExtruded, hasFootprint, maxSlope) {
        const tmpEdgeA = new THREE.Vector3();
        const tmpEdgeB = new THREE.Vector3();
        let firstRingVertex;
        let prevRingVertex;
        let currRingVertex = 0;
        let maxRingVertex = 0;
        while (currRingVertex < featureVertexCount) {
            while (currRingVertex !== firstRingVertex) {
                if (firstRingVertex === undefined) {
                    firstRingVertex = currRingVertex;
                }
                if (currRingVertex < featureVertexCount) {
                    maxRingVertex = Math.max(maxRingVertex, currRingVertex);
                }
                const nextRingVertex = vertices[currRingVertex * vertexStride + featureStride];
                if (nextRingVertex < 0) {
                    break;
                }
                else {
                    if (!isExtruded) {
                        indices.push(featureBaseVertex + currRingVertex, featureBaseVertex + nextRingVertex);
                    }
                    else {
                        if (hasFootprint === true) {
                            indices.push(featureBaseVertex + currRingVertex * 2, featureBaseVertex + nextRingVertex * 2);
                        }
                        indices.push(featureBaseVertex + currRingVertex * 2 + 1, featureBaseVertex + nextRingVertex * 2 + 1);
                        if (maxSlope !== undefined) {
                            if (prevRingVertex !== undefined) {
                                const prevPos = (featureBaseVertex + prevRingVertex * 2) * 3;
                                const currPos = (featureBaseVertex + currRingVertex * 2) * 3;
                                const nextPos = (featureBaseVertex + nextRingVertex * 2) * 3;
                                tmpEdgeA
                                    .set(positions[currPos] - positions[prevPos], positions[currPos + 1] - positions[prevPos + 1], positions[currPos + 2] - positions[prevPos + 2])
                                    .normalize();
                                tmpEdgeB
                                    .set(positions[nextPos] - positions[currPos], positions[nextPos + 1] - positions[currPos + 1], positions[nextPos + 2] - positions[currPos + 2])
                                    .normalize();
                                if (tmpEdgeA.dot(tmpEdgeB) <= maxSlope) {
                                    indices.push(featureBaseVertex + currRingVertex * 2, featureBaseVertex + currRingVertex * 2 + 1);
                                }
                            }
                        }
                        else {
                            indices.push(featureBaseVertex + currRingVertex * 2, featureBaseVertex + currRingVertex * 2 + 1);
                        }
                    }
                    prevRingVertex = currRingVertex;
                    currRingVertex = nextRingVertex;
                }
            }
            currRingVertex = maxRingVertex + 1;
            firstRingVertex = undefined;
            prevRingVertex = undefined;
        }
    }
    addWalls(featureBaseVertex, featureVertexCount, vertexStride, featureStride, vertices, indices) {
        let firstRingVertex;
        let currRingVertex = 0;
        let maxRingVertex = 0;
        while (currRingVertex < featureVertexCount) {
            while (currRingVertex !== firstRingVertex) {
                if (firstRingVertex === undefined) {
                    firstRingVertex = currRingVertex;
                }
                if (currRingVertex < featureVertexCount) {
                    maxRingVertex = Math.max(maxRingVertex, currRingVertex);
                }
                const nextRingVertex = vertices[currRingVertex * vertexStride + featureStride + 1];
                if (nextRingVertex < 0) {
                    break;
                }
                else {
                    indices.push(featureBaseVertex + currRingVertex * 2, featureBaseVertex + currRingVertex * 2 + 1, featureBaseVertex + nextRingVertex * 2 + 1, featureBaseVertex + nextRingVertex * 2 + 1, featureBaseVertex + nextRingVertex * 2, featureBaseVertex + currRingVertex * 2);
                }
                currRingVertex = nextRingVertex;
            }
            currRingVertex = maxRingVertex + 1;
            firstRingVertex = undefined;
        }
    }
    findRelativePositionInLine(p, line) {
        let lineDist = Infinity;
        let lineOffset = 0;
        for (let i = 0; i < line.length; i += 4) {
            // Find the closest point C in segment AB to point P.
            tmpLine.set(tmpPointA.set(line[i], line[i + 1], line[i + 2]), tmpPointB.set(line[i + 4], line[i + 5], line[i + 6]));
            tmpLine.closestPointToPoint(p, true, tmpPointC);
            // If P is in AB (or really close), save A as anchor point and C (to estimate distance
            // from segment origin).
            const dist = tmpPointC.distanceTo(p);
            if (dist < lineDist) {
                tmpPointD.copy(tmpPointC);
                tmpPointE.copy(tmpPointA);
                lineDist = dist;
                lineOffset = line[i + 3];
            }
        }
        // Return the relative position of P inside the line.
        return lineOffset + tmpPointD.distanceTo(tmpPointE);
    }
}
exports.VectorTileDataEmitter = VectorTileDataEmitter;
//# sourceMappingURL=VectorTileDataEmitter.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/VectorTileDecoder.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/VectorTileDecoder.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VectorTileDecoderService = exports.VectorTileDecoder = exports.VectorTileDataProcessor = void 0;
/*
 * Copyright (C) 2019-2022 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "./node_modules/@here/harp-datasource-protocol/index-decoder.js");
const index_worker_1 = __webpack_require__(/*! @here/harp-mapview-decoder/index-worker */ "./node_modules/@here/harp-mapview-decoder/index-worker.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const GeoJsonDataAdapter_1 = __webpack_require__(/*! ./adapters/geojson/GeoJsonDataAdapter */ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/geojson/GeoJsonDataAdapter.js");
const GeoJsonVtDataAdapter_1 = __webpack_require__(/*! ./adapters/geojson-vt/GeoJsonVtDataAdapter */ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/geojson-vt/GeoJsonVtDataAdapter.js");
const OmvDataAdapter_1 = __webpack_require__(/*! ./adapters/omv/OmvDataAdapter */ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/OmvDataAdapter.js");
const DecodeInfo_1 = __webpack_require__(/*! ./DecodeInfo */ "./node_modules/@here/harp-vectortile-datasource/lib/DecodeInfo.js");
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvDecoderDefs.js");
const VectorTileDataEmitter_1 = __webpack_require__(/*! ./VectorTileDataEmitter */ "./node_modules/@here/harp-vectortile-datasource/lib/VectorTileDataEmitter.js");
const logger = harp_utils_1.LoggerManager.instance.create("VectorTileDecoder", { enabled: false });
/**
 * Geometry processor for vector tiles.
 * @internal
 */
class VectorTileDataProcessor {
    constructor(m_tileKey, m_projection, m_styleSetEvaluator, m_dataAdapter, m_options = {}, m_dataFilter) {
        var _a, _b;
        this.m_tileKey = m_tileKey;
        this.m_projection = m_projection;
        this.m_styleSetEvaluator = m_styleSetEvaluator;
        this.m_dataAdapter = m_dataAdapter;
        this.m_options = m_options;
        this.m_dataFilter = m_dataFilter;
        m_options.storageLevelOffset = (_a = m_options.storageLevelOffset) !== null && _a !== void 0 ? _a : 0;
        m_options.showMissingTechniques = (_b = m_options.showMissingTechniques) !== null && _b !== void 0 ? _b : false;
    }
    /**
     * Decodes the given tile data.
     *
     * @param data - The tile data to decode.
     * @returns A [[DecodedTile]]
     */
    getDecodedTile(data) {
        this.m_styleSetEvaluator.resetTechniques();
        const decodeInfo = new DecodeInfo_1.DecodeInfo(this.m_projection, this.m_tileKey, this.m_options.storageLevelOffset);
        this.m_decodedTileEmitter = new VectorTileDataEmitter_1.VectorTileDataEmitter(decodeInfo, this.m_styleSetEvaluator, this.m_options);
        this.m_dataAdapter.process(data, decodeInfo, this);
        return this.m_decodedTileEmitter.getDecodedTile();
    }
    /** @override */
    processPointFeature(layer, extents, geometry, properties, featureId) {
        harp_utils_1.assert(this.m_decodedTileEmitter !== undefined);
        this.processFeature(layer, extents, geometry, "point", properties, featureId, this.m_decodedTileEmitter.processPointFeature, harp_datasource_protocol_1.GeometryKind.Label);
    }
    /** @override */
    processLineFeature(layer, extents, geometry, properties, featureId) {
        harp_utils_1.assert(this.m_decodedTileEmitter !== undefined);
        this.processFeature(layer, extents, geometry, "line", properties, featureId, this.m_decodedTileEmitter.processLineFeature, harp_datasource_protocol_1.GeometryKind.Line);
    }
    /** @override */
    processPolygonFeature(layer, extents, geometry, properties, featureId) {
        harp_utils_1.assert(this.m_decodedTileEmitter !== undefined);
        this.processFeature(layer, extents, geometry, "polygon", properties, featureId, this.m_decodedTileEmitter.processPolygonFeature, harp_datasource_protocol_1.GeometryKind.Area);
    }
    processFeature(layer, extents, geometry, geometryType, properties, featureId, emitterFunc, geometryKind) {
        const env = this.createMapEnv(properties, featureId, layer, geometryType);
        const techniques = this.applyKindFilter(this.m_styleSetEvaluator.getMatchingTechniques(env, layer, geometryType), geometryKind);
        if (techniques.length === 0) {
            if (this.m_options.showMissingTechniques) {
                logger.log("VectorTileDataProcessor#processFeature: no techniques for object:", JSON.stringify(env.unmap()));
            }
            return;
        }
        const context = {
            env,
            cachedExprResults: new Map()
        };
        if (this.m_decodedTileEmitter) {
            emitterFunc.apply(this.m_decodedTileEmitter, [
                layer,
                extents,
                geometry,
                context,
                techniques
            ]);
        }
    }
    createMapEnv(properties, featureId, layer, geometryType) {
        const level = this.m_tileKey.level;
        return new index_decoder_1.MapEnv(Object.assign({ $layer: layer, $id: featureId !== null && featureId !== void 0 ? featureId : null, $level: level, $zoom: Math.max(0, level - this.m_options.storageLevelOffset), $geometryType: geometryType }, properties));
    }
    applyKindFilter(techniques, defaultKind) {
        if (this.m_dataFilter !== undefined && this.m_dataFilter.hasKindFilter) {
            techniques = techniques.filter(technique => {
                const kind = technique.kind === undefined ? defaultKind : technique.kind;
                return this.m_dataFilter.wantsKind(kind);
            });
        }
        return techniques;
    }
}
exports.VectorTileDataProcessor = VectorTileDataProcessor;
/**
 * The vector tile decoder.
 */
class VectorTileDecoder extends index_worker_1.ThemedTileDecoder {
    constructor() {
        super();
        this.m_roundUpCoordinatesIfNeeded = false;
        this.m_options = { map: {}, changed: false };
        this.m_defaultDataAdapters = [];
        this.m_defaultDataAdapters.push(new OmvDataAdapter_1.OmvDataAdapter(), new GeoJsonVtDataAdapter_1.GeoJsonVtDataAdapter(), new GeoJsonDataAdapter_1.GeoJsonDataAdapter());
    }
    /** @override */
    connect() {
        return Promise.resolve();
    }
    /** @override */
    decodeThemedTile(data, tileKey, styleSetEvaluator, projection) {
        const startTime = harp_utils_1.PerformanceTimer.now();
        if (!this.m_dataAdapter) {
            this.m_dataAdapter = this.getDataAdapter(data);
            if (!this.m_dataAdapter) {
                return Promise.reject(new Error("Unsupported data format."));
            }
        }
        const dataAdapter = this.m_dataAdapter;
        harp_utils_1.assert(dataAdapter.canProcess(data));
        if (this.m_options.changed) {
            if (dataAdapter instanceof OmvDataAdapter_1.OmvDataAdapter) {
                const omvOptions = this.m_options.map;
                dataAdapter.configure(omvOptions, styleSetEvaluator);
                this.m_featureFilter = dataAdapter.dataFilter;
            }
            this.m_options.changed = false;
        }
        const decoder = new VectorTileDataProcessor(tileKey, projection, styleSetEvaluator, dataAdapter, this.m_options.map, this.m_featureFilter);
        const decodedTile = decoder.getDecodedTile(data);
        decodedTile.decodeTime = harp_utils_1.PerformanceTimer.now() - startTime;
        return Promise.resolve(decodedTile);
    }
    /** @override */
    configure(options, customOptions) {
        super.configure(options, customOptions);
        this.m_options.map = Object.assign(Object.assign(Object.assign({}, this.m_options.map), options), customOptions);
        this.m_options.changed = true;
    }
    /**
     * Returns the appropiate data adapter to convert the given data into the format expected by
     * VectorTileDecoder.
     * @note Default adapters are available for GeoJson and OMV formats.
     * Child classes may override this function to support additional formats.
     *
     * @param data - The input data to be coverted.
     * @returns The DataAdapter to convert the data, or undefined if there's no adapter for that
     * data format.
     */
    getDataAdapter(data) {
        for (const adapter of this.m_defaultDataAdapters) {
            if (adapter.canProcess(data)) {
                return adapter;
            }
        }
        return undefined;
    }
}
exports.VectorTileDecoder = VectorTileDecoder;
/**
 * Vector Tile Decoder Service.
 */
class VectorTileDecoderService {
    /**
     * Register a vector tile decoder service.
     *
     * @remarks
     * Has to be called during initialization of decoder bundle.
     */
    static start() {
        index_worker_1.WorkerServiceManager.getInstance().register({
            serviceType: OmvDecoderDefs_1.VECTOR_TILE_DECODER_SERVICE_TYPE,
            factory: (serviceId) => index_worker_1.TileDecoderService.start(serviceId, new VectorTileDecoder())
        });
    }
}
exports.VectorTileDecoderService = VectorTileDecoderService;
//# sourceMappingURL=VectorTileDecoder.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/geojson-vt/GeoJsonVtDataAdapter.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/adapters/geojson-vt/GeoJsonVtDataAdapter.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonVtDataAdapter = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const three_1 = __webpack_require__(/*! three */ "three");
const OmvUtils_1 = __webpack_require__(/*! ../../OmvUtils */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvUtils.js");
const VT_JSON_EXTENTS = 4096;
var VTJsonGeometryType;
(function (VTJsonGeometryType) {
    VTJsonGeometryType[VTJsonGeometryType["Unknown"] = 0] = "Unknown";
    VTJsonGeometryType[VTJsonGeometryType["Point"] = 1] = "Point";
    VTJsonGeometryType[VTJsonGeometryType["LineString"] = 2] = "LineString";
    VTJsonGeometryType[VTJsonGeometryType["Polygon"] = 3] = "Polygon";
})(VTJsonGeometryType || (VTJsonGeometryType = {}));
const worldPos = new three_1.Vector3();
/**
 * The class `GeoJsonVtDataAdapter` converts VT-json data to geometries for the given
 * {@link IGeometryProcessor}.
 */
class GeoJsonVtDataAdapter {
    /**
     * @override
     */
    canProcess(data) {
        if (OmvUtils_1.isArrayBufferLike(data)) {
            return false;
        }
        const tile = data;
        if (tile.features === undefined ||
            tile.source === undefined ||
            tile.x === undefined ||
            tile.y === undefined ||
            tile.z === undefined) {
            return false;
        }
        return true;
    }
    /**
     * @override
     */
    process(tile, decodeInfo, geometryProcessor) {
        for (const feature of tile.features) {
            switch (feature.type) {
                case VTJsonGeometryType.Point: {
                    for (const pointGeometry of feature.geometry) {
                        const x = pointGeometry[0];
                        const y = pointGeometry[1];
                        const position = new three_1.Vector3(x, y, 0);
                        geometryProcessor.processPointFeature(tile.layer, VT_JSON_EXTENTS, [position], feature.tags, feature.id);
                    }
                    break;
                }
                case VTJsonGeometryType.LineString: {
                    const lineGeometries = feature.geometry;
                    let lastLine;
                    const lines = [];
                    lineGeometries.forEach(lineGeometry => {
                        const lastPos = lastLine === null || lastLine === void 0 ? void 0 : lastLine.positions[lastLine.positions.length - 1];
                        const [startx, starty] = lineGeometry[0];
                        if ((lastPos === null || lastPos === void 0 ? void 0 : lastPos.x) === startx && (lastPos === null || lastPos === void 0 ? void 0 : lastPos.y) === starty) {
                            // continue the last line
                            for (let i = 1; i < lineGeometry.length; ++i) {
                                const [x, y] = lineGeometry[i];
                                lastLine === null || lastLine === void 0 ? void 0 : lastLine.positions.push(new three_1.Vector2(x, y));
                            }
                        }
                        else {
                            // start a new line
                            const positions = lineGeometry.map(([x, y]) => new three_1.Vector2(x, y));
                            lines.push({ positions });
                            lastLine = lines[lines.length - 1];
                        }
                    });
                    lines.forEach(line => {
                        line.untiledPositions = line.positions.map(tilePos => {
                            OmvUtils_1.tile2world(VT_JSON_EXTENTS, decodeInfo, tilePos, false, worldPos);
                            return harp_geoutils_1.webMercatorProjection.unprojectPoint(worldPos);
                        });
                    });
                    geometryProcessor.processLineFeature(tile.layer, VT_JSON_EXTENTS, lines, feature.tags, feature.id);
                    break;
                }
                case VTJsonGeometryType.Polygon: {
                    const polygons = [];
                    let polygon;
                    for (const outline of feature.geometry) {
                        const ring = [];
                        for (const [currX, currY] of outline) {
                            const position = new three_1.Vector2(currX, currY);
                            ring.push(position);
                        }
                        // MVT spec defines that each exterior ring signals the beginning of a new polygon.
                        // See https://github.com/mapbox/vector-tile-spec/tree/master/2.1
                        if (three_1.ShapeUtils.area(ring) > 0) {
                            // Create a new polygon and push it into the collection of polygons
                            polygon = { rings: [] };
                            polygons.push(polygon);
                        }
                        // Push the ring into the current polygon
                        polygon === null || polygon === void 0 ? void 0 : polygon.rings.push(ring);
                    }
                    geometryProcessor.processPolygonFeature(tile.layer, VT_JSON_EXTENTS, polygons, feature.tags, feature.id);
                    break;
                }
                case VTJsonGeometryType.Unknown: {
                    break;
                }
            }
        }
    }
}
exports.GeoJsonVtDataAdapter = GeoJsonVtDataAdapter;
//# sourceMappingURL=GeoJsonVtDataAdapter.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/geojson/GeoJsonDataAdapter.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/adapters/geojson/GeoJsonDataAdapter.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonDataAdapter = void 0;
const ClipLineString_1 = __webpack_require__(/*! @here/harp-geometry/lib/ClipLineString */ "./node_modules/@here/harp-geometry/lib/ClipLineString.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const three_1 = __webpack_require__(/*! three */ "three");
const OmvUtils_1 = __webpack_require__(/*! ../../OmvUtils */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvUtils.js");
const DEFAULT_EXTENTS = 4 * 1024;
const worldP = new three_1.Vector3();
/**
 * Converts a `geoPoint` to local tile space.
 *
 * @param geoPoint - The input [[GeoPointLike]].
 * @param decodeInfo - The [[DecodeInfo]].
 * @param target - A [[VectorLike]] used as target of the converted coordinates.
 * @return A [[VectorLike]] with the converted point.
 * @hidden
 */
function convertPoint(geoPoint, decodeInfo, target) {
    harp_geoutils_1.webMercatorProjection.projectPoint(harp_geoutils_1.GeoCoordinates.fromGeoPoint(geoPoint), worldP);
    return OmvUtils_1.world2tile(DEFAULT_EXTENTS, decodeInfo, worldP, false, target);
}
function convertLineStringGeometry(coordinates, decodeInfo) {
    const untiledPositions = coordinates.map(geoPoint => {
        return harp_geoutils_1.GeoCoordinates.fromGeoPoint(geoPoint);
    });
    const positions = coordinates.map(geoPoint => convertPoint(geoPoint, decodeInfo, new three_1.Vector2()));
    return { untiledPositions, positions };
}
function convertLineGeometry(geometry, decodeInfo) {
    if (geometry.type === "LineString") {
        return [convertLineStringGeometry(geometry.coordinates, decodeInfo)];
    }
    return geometry.coordinates.map(lineString => convertLineStringGeometry(lineString, decodeInfo));
}
function convertRings(coordinates, decodeInfo) {
    const rings = coordinates.map((ring, i) => {
        const isOuterRing = i === 0;
        const { positions } = convertLineStringGeometry(ring, decodeInfo);
        const isClockWise = three_1.ShapeUtils.area(positions) > 0;
        if ((isOuterRing && !isClockWise) || (!isOuterRing && isClockWise)) {
            positions.reverse();
        }
        return positions;
    });
    return { rings };
}
function convertPolygonGeometry(geometry, decodeInfo) {
    if (geometry.type === "Polygon") {
        return [convertRings(geometry.coordinates, decodeInfo)];
    }
    return geometry.coordinates.map(polygon => convertRings(polygon, decodeInfo));
}
function convertPointGeometry(geometry, decodeInfo) {
    if (geometry.type === "Point") {
        return [convertPoint(geometry.coordinates, decodeInfo, new three_1.Vector3())];
    }
    return geometry.coordinates.map(geoPoint => convertPoint(geoPoint, decodeInfo, new three_1.Vector3()));
}
class GeoJsonDataAdapter {
    /**
     * @override
     */
    canProcess(featureCollection) {
        return (featureCollection &&
            featureCollection.type === "FeatureCollection" &&
            Array.isArray(featureCollection.features));
    }
    /** @override */
    process(featureCollection, decodeInfo, geometryProcessor, layer = "geojson") {
        if (!Array.isArray(featureCollection.features) || featureCollection.features.length === 0) {
            return;
        }
        for (const feature of featureCollection.features) {
            switch (feature.geometry.type) {
                case "LineString":
                case "MultiLineString": {
                    let geometry = convertLineGeometry(feature.geometry, decodeInfo);
                    const clippedGeometries = [];
                    const DEFAULT_BORDER = 100;
                    geometry.forEach(g => {
                        const clipped = ClipLineString_1.clipLineString(g.positions, -DEFAULT_BORDER, -DEFAULT_BORDER, DEFAULT_EXTENTS + DEFAULT_BORDER, DEFAULT_EXTENTS + DEFAULT_BORDER);
                        clipped.forEach(positions => {
                            clippedGeometries.push({ positions });
                        });
                    });
                    geometry = clippedGeometries;
                    if (geometry.length > 0) {
                        geometryProcessor.processLineFeature(layer, DEFAULT_EXTENTS, clippedGeometries, feature.properties, feature.id);
                    }
                    break;
                }
                case "Polygon":
                case "MultiPolygon": {
                    const geometry = convertPolygonGeometry(feature.geometry, decodeInfo);
                    geometryProcessor.processPolygonFeature(layer, DEFAULT_EXTENTS, geometry, feature.properties, feature.id);
                    break;
                }
                case "Point":
                case "MultiPoint": {
                    const geometry = convertPointGeometry(feature.geometry, decodeInfo);
                    geometryProcessor.processPointFeature(layer, DEFAULT_EXTENTS, geometry, feature.properties, feature.id);
                    break;
                }
            }
        }
    }
}
exports.GeoJsonDataAdapter = GeoJsonDataAdapter;
//# sourceMappingURL=GeoJsonDataAdapter.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/OmvData.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/OmvData.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeometryCommands = exports.FeatureAttributes = exports.visitOmvLayer = exports.visitOmv = exports.isClosePathCommand = exports.isLineToCommand = exports.isMoveToCommand = exports.CommandKind = void 0;
const three_1 = __webpack_require__(/*! three */ "three");
const vector_tile_1 = __webpack_require__(/*! ./proto/vector_tile */ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/proto/vector_tile.js");
/**
 * @hidden
 */
var CommandKind;
(function (CommandKind) {
    CommandKind[CommandKind["MoveTo"] = 1] = "MoveTo";
    CommandKind[CommandKind["LineTo"] = 2] = "LineTo";
    CommandKind[CommandKind["ClosePath"] = 7] = "ClosePath";
})(CommandKind = exports.CommandKind || (exports.CommandKind = {}));
/**
 * @hidden
 */
function isMoveToCommand(command) {
    return command.kind === CommandKind.MoveTo;
}
exports.isMoveToCommand = isMoveToCommand;
/**
 * @hidden
 */
function isLineToCommand(command) {
    return command.kind === CommandKind.LineTo;
}
exports.isLineToCommand = isLineToCommand;
/**
 * @hidden
 */
function isClosePathCommand(command) {
    return command.kind === CommandKind.ClosePath;
}
exports.isClosePathCommand = isClosePathCommand;
/**
 * @hidden
 */
function visitOmv(vectorTile, visitor) {
    if (!vectorTile.layers) {
        return;
    }
    for (const layer of vectorTile.layers) {
        if (!visitor.visitLayer || visitor.visitLayer(layer)) {
            visitOmvLayer(layer, visitor);
        }
        if (visitor.endVisitLayer) {
            visitor.endVisitLayer(layer);
        }
    }
}
exports.visitOmv = visitOmv;
/**
 * @hidden
 */
function visitOmvLayer(layer, visitor) {
    if (!visitor.visitLayer || visitor.visitLayer(layer)) {
        if (layer.features) {
            for (const feature of layer.features) {
                switch (feature.type) {
                    case vector_tile_1.com.mapbox.pb.Tile.GeomType.UNKNOWN:
                        break;
                    case vector_tile_1.com.mapbox.pb.Tile.GeomType.POINT:
                        if (visitor.visitPointFeature) {
                            visitor.visitPointFeature(feature);
                        }
                        break;
                    case vector_tile_1.com.mapbox.pb.Tile.GeomType.LINESTRING:
                        if (visitor.visitLineFeature) {
                            visitor.visitLineFeature(feature);
                        }
                        break;
                    case vector_tile_1.com.mapbox.pb.Tile.GeomType.POLYGON:
                        if (visitor.visitPolygonFeature) {
                            visitor.visitPolygonFeature(feature);
                        }
                        break;
                }
            }
        }
    }
    if (visitor.endVisitLayer) {
        visitor.endVisitLayer(layer);
    }
}
exports.visitOmvLayer = visitOmvLayer;
/**
 * @hidden
 */
class FeatureAttributes {
    accept(layer, feature, visitor) {
        const { keys, values } = layer;
        const tags = feature.tags;
        if (!tags || !keys || !values) {
            return;
        }
        for (let i = 0; i < tags.length; i += 2) {
            const key = keys[tags[i]];
            const value = values[tags[i + 1]];
            if (!visitor.visitAttribute(key, value)) {
                break;
            }
        }
    }
}
exports.FeatureAttributes = FeatureAttributes;
/**
 * @hidden
 */
class GeometryCommands {
    accept(geometry, visitor) {
        if (!geometry) {
            return;
        }
        const geometryCount = geometry.length;
        let currX = 0;
        let currY = 0;
        const xCoords = [];
        const yCoords = [];
        const commands = [];
        for (let cmdIndex = 0; cmdIndex < geometryCount;) {
            const kind = (geometry[cmdIndex] & 0x7);
            const count = geometry[cmdIndex] >> 0x3;
            ++cmdIndex;
            if (kind === CommandKind.MoveTo || kind === CommandKind.LineTo) {
                for (let n = 0; n < count; ++n) {
                    const xx = geometry[cmdIndex++];
                    const yy = geometry[cmdIndex++];
                    currX += (xx >> 1) ^ -(xx & 1);
                    currY += (yy >> 1) ^ -(yy & 1);
                    if (visitor.type === "Polygon") {
                        xCoords.push(currX);
                        yCoords.push(currY);
                    }
                    const position = new three_1.Vector2(currX, currY);
                    commands.push({ kind, position });
                }
            }
            else {
                for (const command of commands) {
                    visitor.visitCommand(command);
                }
                visitor.visitCommand({ kind });
                xCoords.length = 0;
                yCoords.length = 0;
                commands.length = 0;
            }
        }
        if (commands.length > 0) {
            for (const command of commands) {
                visitor.visitCommand(command);
            }
        }
    }
}
exports.GeometryCommands = GeometryCommands;
//# sourceMappingURL=OmvData.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/OmvDataAdapter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/OmvDataAdapter.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmvDataAdapter = exports.asGeometryType = void 0;
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "./node_modules/@here/harp-datasource-protocol/index-decoder.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const Long = __webpack_require__(/*! long */ "./node_modules/long/src/long.js");
const three_1 = __webpack_require__(/*! three */ "three");
const OmvDataFilter_1 = __webpack_require__(/*! ../../OmvDataFilter */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvDataFilter.js");
const OmvDecoderDefs_1 = __webpack_require__(/*! ../../OmvDecoderDefs */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvDecoderDefs.js");
const OmvPoliticalViewFeatureModifier_1 = __webpack_require__(/*! ../../OmvPoliticalViewFeatureModifier */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvPoliticalViewFeatureModifier.js");
const OmvUtils_1 = __webpack_require__(/*! ../../OmvUtils */ "./node_modules/@here/harp-vectortile-datasource/lib/OmvUtils.js");
const StyleSetDataFilter_1 = __webpack_require__(/*! ../../StyleSetDataFilter */ "./node_modules/@here/harp-vectortile-datasource/lib/StyleSetDataFilter.js");
const OmvData_1 = __webpack_require__(/*! ./OmvData */ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/OmvData.js");
const vector_tile_1 = __webpack_require__(/*! ./proto/vector_tile */ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/proto/vector_tile.js");
const propertyCategories = [
    "stringValue",
    "floatValue",
    "doubleValue",
    "intValue",
    "uintValue",
    "sintValue",
    "boolValue"
];
const logger = harp_utils_1.LoggerManager.instance.create("OmvDataAdapter", { enabled: false });
function simplifiedValue(value) {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    for (const category of propertyCategories) {
        if (hasOwnProperty.call(value, category)) {
            const v = value[category];
            if (v === undefined) {
                throw new Error("unpexted undefined value");
            }
            return Long.isLong(v) ? v.toNumber() : v;
        }
    }
    throw new Error("not happening");
}
function decodeFeatureId(feature, properties, logger) {
    if (properties.id !== undefined && properties.id !== null) {
        return properties.id;
    }
    if (feature.hasOwnProperty("id")) {
        const id = feature.id;
        if (typeof id === "number") {
            return id;
        }
        else if (id) {
            if (logger !== undefined && id.greaterThan(Number.MAX_SAFE_INTEGER)) {
                logger.error("Invalid ID: Larger than largest available Number in feature: ", feature);
            }
            return id.toNumber();
        }
    }
    return undefined;
}
function readAttributes(layer, feature) {
    const attrs = new OmvData_1.FeatureAttributes();
    const attributes = {};
    attrs.accept(layer, feature, {
        visitAttribute: (name, value) => {
            attributes[name] = simplifiedValue(value);
            return true;
        }
    });
    return attributes;
}
function asGeometryType(feature) {
    if (feature === undefined) {
        return OmvDecoderDefs_1.OmvGeometryType.UNKNOWN;
    }
    switch (feature.type) {
        case vector_tile_1.com.mapbox.pb.Tile.GeomType.UNKNOWN:
            return OmvDecoderDefs_1.OmvGeometryType.UNKNOWN;
        case vector_tile_1.com.mapbox.pb.Tile.GeomType.POINT:
            return OmvDecoderDefs_1.OmvGeometryType.POINT;
        case vector_tile_1.com.mapbox.pb.Tile.GeomType.LINESTRING:
            return OmvDecoderDefs_1.OmvGeometryType.LINESTRING;
        case vector_tile_1.com.mapbox.pb.Tile.GeomType.POLYGON:
            return OmvDecoderDefs_1.OmvGeometryType.POLYGON;
        default:
            return OmvDecoderDefs_1.OmvGeometryType.UNKNOWN;
    } // switch
}
exports.asGeometryType = asGeometryType;
// Ensures ring winding follows Mapbox Vector Tile specification: outer rings must be clockwise,
// inner rings counter-clockwise.
// See https://docs.mapbox.com/vector-tiles/specification/
function checkWinding(multipolygon) {
    const firstPolygon = multipolygon[0];
    if (firstPolygon === undefined || firstPolygon.rings.length === 0) {
        return;
    }
    // Opposite sign to ShapeUtils.isClockWise, since webMercator tile space has top-left origin.
    // For example:
    // Given the ring = [(1,2), (2,2), (2,1), (1,1)]
    // ShapeUtils.area(ring) > 0    -> false
    // ShapeUtils.isClockWise(ring) -> true
    // ^
    // |  1,2 -> 2,2
    // |          |
    // |  1,1 <- 2,1
    // |_______________>
    //
    // Tile space axis
    //  ______________>
    // |  1,1 <- 2,1
    // |          |
    // |  1,2 ->  2,2
    // V
    const isOuterRingClockWise = three_1.ShapeUtils.area(firstPolygon.rings[0]) > 0;
    if (!isOuterRingClockWise) {
        for (const polygon of multipolygon) {
            for (const ring of polygon.rings) {
                ring.reverse();
            }
        }
    }
}
function roundUpCoordinates(coordinates, layerExtents) {
    coordinates.forEach(p => {
        if (p.x === layerExtents - 1) {
            p.x = layerExtents;
        }
    });
}
function roundUpPolygonCoordinates(geometry, layerExtents) {
    geometry.forEach(polygon => polygon.rings.forEach(r => roundUpCoordinates(r, layerExtents)));
}
function roundUpLineCoordinates(geometry, layerExtents) {
    geometry.forEach(line => roundUpCoordinates(line.positions, layerExtents));
}
function createFeatureModifier(filterDescription, featureModifierId) {
    switch (featureModifierId) {
        case OmvDecoderDefs_1.FeatureModifierId.default:
            return new OmvDataFilter_1.OmvGenericFeatureModifier(filterDescription);
        default:
            harp_utils_1.assert(!"Unrecognized feature modifier id, using default!");
            return new OmvDataFilter_1.OmvGenericFeatureModifier(filterDescription);
    }
}
/**
 * The class `OmvDataAdapter` converts OMV protobuf geo data
 * to geometries for the given `IGeometryProcessor`.
 */
class OmvDataAdapter {
    constructor() {
        this.m_geometryCommands = new OmvData_1.GeometryCommands();
        this.m_roundUpCoordinatesIfNeeded = false;
    }
    /**
     * The [[OmvFeatureFilter]] used to filter features.
     */
    get dataFilter() {
        return this.m_dataFilter;
    }
    /**
     * Configures the OMV adapter.
     *
     * @param options - Configuration options.
     * @param styleSetEvaluator - Style set evaluator instance, used for filtering.
     */
    configure(options, styleSetEvaluator) {
        var _a;
        if (options.filterDescription !== undefined) {
            if (options.filterDescription !== null) {
                // TODO: Feature modifier is always used only with feature filter.
                // At best the filtering feature should be excluded from other feature
                // modifiers and be performed solely via OmvGenericFeature modifier or filter.
                const filterDescription = options.filterDescription;
                const featureModifiersIds = options.featureModifiers;
                // Create new filter from description.
                this.m_dataFilter = new OmvDataFilter_1.OmvGenericFeatureFilter(filterDescription);
                // Create feature modifiers.
                const featureModifiers = [];
                if (featureModifiersIds !== undefined) {
                    featureModifiersIds.forEach(fmId => {
                        featureModifiers.push(createFeatureModifier(filterDescription, fmId));
                    });
                }
                else {
                    featureModifiers.push(createFeatureModifier(filterDescription, OmvDecoderDefs_1.FeatureModifierId.default));
                }
                this.m_featureModifiers = featureModifiers;
            }
            else {
                // null is the signal to clear the filter/modifier
                this.m_dataFilter = undefined;
                this.m_featureModifiers = undefined;
            }
            const styleSetDataFilter = new StyleSetDataFilter_1.StyleSetDataFilter(styleSetEvaluator);
            this.m_dataFilter = this.m_dataFilter
                ? new OmvDataFilter_1.ComposedDataFilter([styleSetDataFilter, this.m_dataFilter])
                : styleSetDataFilter;
        }
        if (options.politicalView !== undefined) {
            const politicalView = options.politicalView;
            let featureModifiers = this.m_featureModifiers;
            // Remove existing political view modifiers, this actually setups default,
            // commonly accepted point of view - without feature modifier.
            if (featureModifiers) {
                featureModifiers = featureModifiers.filter(fm => !(fm instanceof OmvPoliticalViewFeatureModifier_1.OmvPoliticalViewFeatureModifier));
            }
            // If political view is indeed requested append feature modifier at the end of list.
            if (politicalView.length !== 0) {
                harp_utils_1.assert(politicalView.length === 2, "The political view must be specified as two letters ISO 3166-1 standard!");
                const povFeatureModifier = new OmvPoliticalViewFeatureModifier_1.OmvPoliticalViewFeatureModifier(politicalView);
                if (featureModifiers) {
                    featureModifiers.push(povFeatureModifier);
                }
                else {
                    featureModifiers = [povFeatureModifier];
                }
            }
            // Reset modifiers if nothing was added.
            this.m_featureModifiers =
                featureModifiers && featureModifiers.length > 0 ? featureModifiers : undefined;
        }
        this.m_roundUpCoordinatesIfNeeded = (_a = options.roundUpCoordinatesIfNeeded) !== null && _a !== void 0 ? _a : false;
    }
    /**
     * @override
     */
    canProcess(data) {
        return OmvUtils_1.isArrayBufferLike(data);
    }
    /**
     * @override
     */
    process(data, decodeInfo, geometryProcessor) {
        const { tileKey } = decodeInfo;
        const payload = new Uint8Array(data);
        const proto = vector_tile_1.com.mapbox.pb.Tile.decode(payload);
        this.m_tileKey = tileKey;
        this.m_processor = geometryProcessor;
        OmvData_1.visitOmv(proto, this);
    }
    /**
     * Visits the OMV layer.
     *
     * @param layer - The OMV layer to process.
     */
    visitLayer(layer) {
        this.m_layer = layer;
        const storageLevel = this.m_tileKey.level;
        const layerName = layer.name;
        if (this.m_dataFilter !== undefined &&
            !this.m_dataFilter.wantsLayer(layerName, storageLevel)) {
            return false;
        }
        return true;
    }
    /**
     * Visits point features.
     *
     * @param feature - The OMV point features to process.
     */
    visitPointFeature(feature) {
        var _a, _b, _c;
        if (feature.geometry === undefined) {
            return;
        }
        // Pass feature modifier method to processFeature if there's any modifier. Get it from any
        // modifier, processFeature will later apply it to all using Function.apply().
        const modifierFunc = (_a = this.m_featureModifiers) === null || _a === void 0 ? void 0 : _a[0].doProcessPointFeature;
        const properties = this.filterAndModifyFeature(feature, (_b = this.m_dataFilter) === null || _b === void 0 ? void 0 : _b.wantsPointFeature, modifierFunc);
        if (!properties) {
            return;
        }
        const layerName = this.m_layer.name;
        const layerExtents = (_c = this.m_layer.extent) !== null && _c !== void 0 ? _c : 4096;
        const geometry = [];
        this.m_geometryCommands.accept(feature.geometry, {
            type: "Point",
            visitCommand: command => {
                if (OmvData_1.isMoveToCommand(command)) {
                    geometry.push(new three_1.Vector3(command.position.x, command.position.y, 0));
                }
            }
        });
        if (geometry.length === 0) {
            return;
        }
        this.m_processor.processPointFeature(layerName, layerExtents, geometry, properties, decodeFeatureId(feature, properties, logger));
    }
    /**
     * Visits the line features.
     *
     * @param feature - The line features to process.
     */
    visitLineFeature(feature) {
        var _a, _b, _c;
        if (feature.geometry === undefined) {
            return;
        }
        // Pass feature modifier method to processFeature if there's any modifier. Get it from any
        // modifier, processFeature will later apply it to all using Function.apply().
        const modifierFunc = (_a = this.m_featureModifiers) === null || _a === void 0 ? void 0 : _a[0].doProcessLineFeature;
        const properties = this.filterAndModifyFeature(feature, (_b = this.m_dataFilter) === null || _b === void 0 ? void 0 : _b.wantsLineFeature, modifierFunc);
        if (!properties) {
            return;
        }
        const layerName = this.m_layer.name;
        const layerExtents = (_c = this.m_layer.extent) !== null && _c !== void 0 ? _c : 4096;
        const geometry = [];
        let positions;
        this.m_geometryCommands.accept(feature.geometry, {
            type: "Line",
            visitCommand: command => {
                if (OmvData_1.isMoveToCommand(command)) {
                    positions = [command.position];
                    geometry.push({ positions });
                }
                else if (OmvData_1.isLineToCommand(command)) {
                    positions.push(command.position);
                }
            }
        });
        if (geometry.length === 0) {
            return;
        }
        if (this.mustRoundUpCoordinates) {
            roundUpLineCoordinates(geometry, layerExtents);
        }
        this.m_processor.processLineFeature(layerName, layerExtents, geometry, properties, decodeFeatureId(feature, properties, logger));
    }
    /**
     * Visits the polygon features.
     *
     * @param feature - The polygon features to process.
     */
    visitPolygonFeature(feature) {
        var _a, _b, _c;
        if (feature.geometry === undefined) {
            return;
        }
        // Pass feature modifier method to processFeature if there's any modifier. Get it from any
        // modifier, processFeature will later apply it to all using Function.apply().
        const modifierFunc = (_a = this.m_featureModifiers) === null || _a === void 0 ? void 0 : _a[0].doProcessPolygonFeature;
        const properties = this.filterAndModifyFeature(feature, (_b = this.m_dataFilter) === null || _b === void 0 ? void 0 : _b.wantsPolygonFeature, modifierFunc);
        if (!properties) {
            return;
        }
        const layerName = this.m_layer.name;
        const layerExtents = (_c = this.m_layer.extent) !== null && _c !== void 0 ? _c : 4096;
        const geometry = [];
        let currentPolygon;
        let currentRing;
        let exteriorWinding;
        this.m_geometryCommands.accept(feature.geometry, {
            type: "Polygon",
            visitCommand: command => {
                if (OmvData_1.isMoveToCommand(command)) {
                    currentRing = [command.position];
                }
                else if (OmvData_1.isLineToCommand(command)) {
                    currentRing.push(command.position);
                }
                else if (OmvData_1.isClosePathCommand(command)) {
                    if (currentRing !== undefined && currentRing.length > 0) {
                        const currentRingWinding = Math.sign(three_1.ShapeUtils.area(currentRing));
                        // Winding order from XYZ spaces might be not MVT spec compliant, see HARP-11151.
                        // We take the winding of the very first ring as reference.
                        if (exteriorWinding === undefined) {
                            exteriorWinding = currentRingWinding;
                        }
                        // MVT spec defines that each exterior ring signals the beginning of a new polygon.
                        // see https://github.com/mapbox/vector-tile-spec/tree/master/2.1
                        if (currentRingWinding === exteriorWinding) {
                            // Create a new polygon and push it into the collection of polygons
                            currentPolygon = { rings: [] };
                            geometry.push(currentPolygon);
                        }
                        // Push the ring into the current polygon
                        currentRing.push(currentRing[0].clone());
                        currentPolygon === null || currentPolygon === void 0 ? void 0 : currentPolygon.rings.push(currentRing);
                    }
                }
            }
        });
        if (geometry.length === 0) {
            return;
        }
        if (this.mustRoundUpCoordinates) {
            roundUpPolygonCoordinates(geometry, layerExtents);
        }
        checkWinding(geometry);
        this.m_processor.processPolygonFeature(layerName, layerExtents, geometry, properties, decodeFeatureId(feature, properties, logger));
    }
    /**
     * Applies any filter and modifiers to a given feature.
     *
     * @param feature - The feature to filter and modify.
     * @param filterFunc - The filtering function.
     * @param modifierFunc - The modifier function.
     * @returns The modified feature properties or `undefined` if feature is filtered out.
     */
    filterAndModifyFeature(feature, filterFunc, modifierFunc) {
        var _a;
        const storageLevel = this.m_tileKey.level;
        const layerName = this.m_layer.name;
        const geometryType = asGeometryType(feature);
        if (this.m_dataFilter &&
            filterFunc.apply(this.m_dataFilter, [layerName, geometryType, storageLevel]) === false) {
            return undefined;
        }
        const properties = readAttributes(this.m_layer, feature);
        const env = new index_decoder_1.MapEnv(properties);
        if (((_a = this.m_featureModifiers) === null || _a === void 0 ? void 0 : _a.find(fm => {
            // TODO: The logic of feature ignore should be actually in the feature filtering
            // mechanism - see OmvFeatureFilter.
            harp_utils_1.assert(modifierFunc !== undefined);
            return !modifierFunc.apply(fm, [layerName, env, this.m_tileKey.level]);
        })) !== undefined) {
            return undefined;
        }
        return properties;
    }
    get mustRoundUpCoordinates() {
        return (this.m_roundUpCoordinatesIfNeeded &&
            this.m_tileKey.level < 5 &&
            this.m_tileKey.column === this.m_tileKey.columnCount() - 1);
    }
}
exports.OmvDataAdapter = OmvDataAdapter;
//# sourceMappingURL=OmvDataAdapter.js.map

/***/ }),

/***/ "./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/proto/vector_tile.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@here/harp-vectortile-datasource/lib/adapters/omv/proto/vector_tile.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/


var $protobuf = __webpack_require__(/*! protobufjs/minimal */ "./node_modules/protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.mapbox = (function() {

        /**
         * Namespace mapbox.
         * @memberof com
         * @namespace
         */
        var mapbox = {};

        mapbox.pb = (function() {

            /**
             * Namespace pb.
             * @memberof com.mapbox
             * @namespace
             */
            var pb = {};

            pb.Tile = (function() {

                /**
                 * Properties of a Tile.
                 * @memberof com.mapbox.pb
                 * @interface ITile
                 * @property {Array.<com.mapbox.pb.Tile.ILayer>|null} [layers] Tile layers
                 */

                /**
                 * Constructs a new Tile.
                 * @memberof com.mapbox.pb
                 * @classdesc Represents a Tile.
                 * @implements ITile
                 * @constructor
                 * @param {com.mapbox.pb.ITile=} [properties] Properties to set
                 */
                function Tile(properties) {
                    this.layers = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Tile layers.
                 * @member {Array.<com.mapbox.pb.Tile.ILayer>} layers
                 * @memberof com.mapbox.pb.Tile
                 * @instance
                 */
                Tile.prototype.layers = $util.emptyArray;

                /**
                 * Decodes a Tile message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.mapbox.pb.Tile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.mapbox.pb.Tile} Tile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Tile.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapbox.pb.Tile();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3:
                            if (!(message.layers && message.layers.length))
                                message.layers = [];
                            message.layers.push($root.com.mapbox.pb.Tile.Layer.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Tile message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.mapbox.pb.Tile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.mapbox.pb.Tile} Tile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Tile.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Creates a Tile message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.mapbox.pb.Tile
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.mapbox.pb.Tile} Tile
                 */
                Tile.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.mapbox.pb.Tile)
                        return object;
                    var message = new $root.com.mapbox.pb.Tile();
                    if (object.layers) {
                        if (!Array.isArray(object.layers))
                            throw TypeError(".com.mapbox.pb.Tile.layers: array expected");
                        message.layers = [];
                        for (var i = 0; i < object.layers.length; ++i) {
                            if (typeof object.layers[i] !== "object")
                                throw TypeError(".com.mapbox.pb.Tile.layers: object expected");
                            message.layers[i] = $root.com.mapbox.pb.Tile.Layer.fromObject(object.layers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Tile message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.mapbox.pb.Tile
                 * @static
                 * @param {com.mapbox.pb.Tile} message Tile
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Tile.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.layers = [];
                    if (message.layers && message.layers.length) {
                        object.layers = [];
                        for (var j = 0; j < message.layers.length; ++j)
                            object.layers[j] = $root.com.mapbox.pb.Tile.Layer.toObject(message.layers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Tile to JSON.
                 * @function toJSON
                 * @memberof com.mapbox.pb.Tile
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Tile.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * GeomType enum.
                 * @name com.mapbox.pb.Tile.GeomType
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} POINT=1 POINT value
                 * @property {number} LINESTRING=2 LINESTRING value
                 * @property {number} POLYGON=3 POLYGON value
                 */
                Tile.GeomType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "POINT"] = 1;
                    values[valuesById[2] = "LINESTRING"] = 2;
                    values[valuesById[3] = "POLYGON"] = 3;
                    return values;
                })();

                Tile.Value = (function() {

                    /**
                     * Properties of a Value.
                     * @memberof com.mapbox.pb.Tile
                     * @interface IValue
                     * @property {string|null} [stringValue] Value stringValue
                     * @property {number|null} [floatValue] Value floatValue
                     * @property {number|null} [doubleValue] Value doubleValue
                     * @property {number|Long|null} [intValue] Value intValue
                     * @property {number|Long|null} [uintValue] Value uintValue
                     * @property {number|Long|null} [sintValue] Value sintValue
                     * @property {boolean|null} [boolValue] Value boolValue
                     */

                    /**
                     * Constructs a new Value.
                     * @memberof com.mapbox.pb.Tile
                     * @classdesc Represents a Value.
                     * @implements IValue
                     * @constructor
                     * @param {com.mapbox.pb.Tile.IValue=} [properties] Properties to set
                     */
                    function Value(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Value stringValue.
                     * @member {string} stringValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.stringValue = "";

                    /**
                     * Value floatValue.
                     * @member {number} floatValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.floatValue = 0;

                    /**
                     * Value doubleValue.
                     * @member {number} doubleValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.doubleValue = 0;

                    /**
                     * Value intValue.
                     * @member {number|Long} intValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Value uintValue.
                     * @member {number|Long} uintValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.uintValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Value sintValue.
                     * @member {number|Long} sintValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.sintValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Value boolValue.
                     * @member {boolean} boolValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.boolValue = false;

                    /**
                     * Decodes a Value message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapbox.pb.Tile.Value
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapbox.pb.Tile.Value} Value
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Value.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapbox.pb.Tile.Value();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.stringValue = reader.string();
                                break;
                            case 2:
                                message.floatValue = reader.float();
                                break;
                            case 3:
                                message.doubleValue = reader.double();
                                break;
                            case 4:
                                message.intValue = reader.int64();
                                break;
                            case 5:
                                message.uintValue = reader.uint64();
                                break;
                            case 6:
                                message.sintValue = reader.sint64();
                                break;
                            case 7:
                                message.boolValue = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Value message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapbox.pb.Tile.Value
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapbox.pb.Tile.Value} Value
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Value.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Value message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapbox.pb.Tile.Value
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapbox.pb.Tile.Value} Value
                     */
                    Value.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapbox.pb.Tile.Value)
                            return object;
                        var message = new $root.com.mapbox.pb.Tile.Value();
                        if (object.stringValue != null)
                            message.stringValue = String(object.stringValue);
                        if (object.floatValue != null)
                            message.floatValue = Number(object.floatValue);
                        if (object.doubleValue != null)
                            message.doubleValue = Number(object.doubleValue);
                        if (object.intValue != null)
                            if ($util.Long)
                                (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                            else if (typeof object.intValue === "string")
                                message.intValue = parseInt(object.intValue, 10);
                            else if (typeof object.intValue === "number")
                                message.intValue = object.intValue;
                            else if (typeof object.intValue === "object")
                                message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
                        if (object.uintValue != null)
                            if ($util.Long)
                                (message.uintValue = $util.Long.fromValue(object.uintValue)).unsigned = true;
                            else if (typeof object.uintValue === "string")
                                message.uintValue = parseInt(object.uintValue, 10);
                            else if (typeof object.uintValue === "number")
                                message.uintValue = object.uintValue;
                            else if (typeof object.uintValue === "object")
                                message.uintValue = new $util.LongBits(object.uintValue.low >>> 0, object.uintValue.high >>> 0).toNumber(true);
                        if (object.sintValue != null)
                            if ($util.Long)
                                (message.sintValue = $util.Long.fromValue(object.sintValue)).unsigned = false;
                            else if (typeof object.sintValue === "string")
                                message.sintValue = parseInt(object.sintValue, 10);
                            else if (typeof object.sintValue === "number")
                                message.sintValue = object.sintValue;
                            else if (typeof object.sintValue === "object")
                                message.sintValue = new $util.LongBits(object.sintValue.low >>> 0, object.sintValue.high >>> 0).toNumber();
                        if (object.boolValue != null)
                            message.boolValue = Boolean(object.boolValue);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Value message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapbox.pb.Tile.Value
                     * @static
                     * @param {com.mapbox.pb.Tile.Value} message Value
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Value.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.stringValue = "";
                            object.floatValue = 0;
                            object.doubleValue = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.intValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.intValue = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.uintValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.uintValue = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.sintValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.sintValue = options.longs === String ? "0" : 0;
                            object.boolValue = false;
                        }
                        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                            object.stringValue = message.stringValue;
                        if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                            object.floatValue = options.json && !isFinite(message.floatValue) ? String(message.floatValue) : message.floatValue;
                        if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                            object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                        if (message.intValue != null && message.hasOwnProperty("intValue"))
                            if (typeof message.intValue === "number")
                                object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                            else
                                object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                        if (message.uintValue != null && message.hasOwnProperty("uintValue"))
                            if (typeof message.uintValue === "number")
                                object.uintValue = options.longs === String ? String(message.uintValue) : message.uintValue;
                            else
                                object.uintValue = options.longs === String ? $util.Long.prototype.toString.call(message.uintValue) : options.longs === Number ? new $util.LongBits(message.uintValue.low >>> 0, message.uintValue.high >>> 0).toNumber(true) : message.uintValue;
                        if (message.sintValue != null && message.hasOwnProperty("sintValue"))
                            if (typeof message.sintValue === "number")
                                object.sintValue = options.longs === String ? String(message.sintValue) : message.sintValue;
                            else
                                object.sintValue = options.longs === String ? $util.Long.prototype.toString.call(message.sintValue) : options.longs === Number ? new $util.LongBits(message.sintValue.low >>> 0, message.sintValue.high >>> 0).toNumber() : message.sintValue;
                        if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                            object.boolValue = message.boolValue;
                        return object;
                    };

                    /**
                     * Converts this Value to JSON.
                     * @function toJSON
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Value.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Value;
                })();

                Tile.Feature = (function() {

                    /**
                     * Properties of a Feature.
                     * @memberof com.mapbox.pb.Tile
                     * @interface IFeature
                     * @property {number|Long|null} [id] Feature id
                     * @property {Array.<number>|null} [tags] Feature tags
                     * @property {com.mapbox.pb.Tile.GeomType|null} [type] Feature type
                     * @property {Array.<number>|null} [geometry] Feature geometry
                     */

                    /**
                     * Constructs a new Feature.
                     * @memberof com.mapbox.pb.Tile
                     * @classdesc Represents a Feature.
                     * @implements IFeature
                     * @constructor
                     * @param {com.mapbox.pb.Tile.IFeature=} [properties] Properties to set
                     */
                    function Feature(properties) {
                        this.tags = [];
                        this.geometry = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Feature id.
                     * @member {number|Long} id
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     */
                    Feature.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Feature tags.
                     * @member {Array.<number>} tags
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     */
                    Feature.prototype.tags = $util.emptyArray;

                    /**
                     * Feature type.
                     * @member {com.mapbox.pb.Tile.GeomType} type
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     */
                    Feature.prototype.type = 0;

                    /**
                     * Feature geometry.
                     * @member {Array.<number>} geometry
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     */
                    Feature.prototype.geometry = $util.emptyArray;

                    /**
                     * Decodes a Feature message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapbox.pb.Tile.Feature} Feature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Feature.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapbox.pb.Tile.Feature();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                if (!(message.tags && message.tags.length))
                                    message.tags = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.tags.push(reader.uint32());
                                } else
                                    message.tags.push(reader.uint32());
                                break;
                            case 3:
                                message.type = reader.int32();
                                break;
                            case 4:
                                if (!(message.geometry && message.geometry.length))
                                    message.geometry = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.geometry.push(reader.uint32());
                                } else
                                    message.geometry.push(reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Feature message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapbox.pb.Tile.Feature} Feature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Feature.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Feature message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapbox.pb.Tile.Feature} Feature
                     */
                    Feature.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapbox.pb.Tile.Feature)
                            return object;
                        var message = new $root.com.mapbox.pb.Tile.Feature();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.tags) {
                            if (!Array.isArray(object.tags))
                                throw TypeError(".com.mapbox.pb.Tile.Feature.tags: array expected");
                            message.tags = [];
                            for (var i = 0; i < object.tags.length; ++i)
                                message.tags[i] = object.tags[i] >>> 0;
                        }
                        switch (object.type) {
                        case "UNKNOWN":
                        case 0:
                            message.type = 0;
                            break;
                        case "POINT":
                        case 1:
                            message.type = 1;
                            break;
                        case "LINESTRING":
                        case 2:
                            message.type = 2;
                            break;
                        case "POLYGON":
                        case 3:
                            message.type = 3;
                            break;
                        }
                        if (object.geometry) {
                            if (!Array.isArray(object.geometry))
                                throw TypeError(".com.mapbox.pb.Tile.Feature.geometry: array expected");
                            message.geometry = [];
                            for (var i = 0; i < object.geometry.length; ++i)
                                message.geometry[i] = object.geometry[i] >>> 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Feature message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @static
                     * @param {com.mapbox.pb.Tile.Feature} message Feature
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Feature.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.tags = [];
                            object.geometry = [];
                        }
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.type = options.enums === String ? "UNKNOWN" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.tags && message.tags.length) {
                            object.tags = [];
                            for (var j = 0; j < message.tags.length; ++j)
                                object.tags[j] = message.tags[j];
                        }
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.com.mapbox.pb.Tile.GeomType[message.type] : message.type;
                        if (message.geometry && message.geometry.length) {
                            object.geometry = [];
                            for (var j = 0; j < message.geometry.length; ++j)
                                object.geometry[j] = message.geometry[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Feature to JSON.
                     * @function toJSON
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Feature.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Feature;
                })();

                Tile.Layer = (function() {

                    /**
                     * Properties of a Layer.
                     * @memberof com.mapbox.pb.Tile
                     * @interface ILayer
                     * @property {number} version Layer version
                     * @property {string} name Layer name
                     * @property {Array.<com.mapbox.pb.Tile.IFeature>|null} [features] Layer features
                     * @property {Array.<string>|null} [keys] Layer keys
                     * @property {Array.<com.mapbox.pb.Tile.IValue>|null} [values] Layer values
                     * @property {number|null} [extent] Layer extent
                     */

                    /**
                     * Constructs a new Layer.
                     * @memberof com.mapbox.pb.Tile
                     * @classdesc Represents a Layer.
                     * @implements ILayer
                     * @constructor
                     * @param {com.mapbox.pb.Tile.ILayer=} [properties] Properties to set
                     */
                    function Layer(properties) {
                        this.features = [];
                        this.keys = [];
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Layer version.
                     * @member {number} version
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.version = 1;

                    /**
                     * Layer name.
                     * @member {string} name
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.name = "";

                    /**
                     * Layer features.
                     * @member {Array.<com.mapbox.pb.Tile.IFeature>} features
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.features = $util.emptyArray;

                    /**
                     * Layer keys.
                     * @member {Array.<string>} keys
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.keys = $util.emptyArray;

                    /**
                     * Layer values.
                     * @member {Array.<com.mapbox.pb.Tile.IValue>} values
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.values = $util.emptyArray;

                    /**
                     * Layer extent.
                     * @member {number} extent
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.extent = 4096;

                    /**
                     * Decodes a Layer message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapbox.pb.Tile.Layer} Layer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Layer.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapbox.pb.Tile.Layer();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 15:
                                message.version = reader.uint32();
                                break;
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                if (!(message.features && message.features.length))
                                    message.features = [];
                                message.features.push($root.com.mapbox.pb.Tile.Feature.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                if (!(message.keys && message.keys.length))
                                    message.keys = [];
                                message.keys.push(reader.string());
                                break;
                            case 4:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                message.values.push($root.com.mapbox.pb.Tile.Value.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                message.extent = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("version"))
                            throw $util.ProtocolError("missing required 'version'", { instance: message });
                        if (!message.hasOwnProperty("name"))
                            throw $util.ProtocolError("missing required 'name'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a Layer message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapbox.pb.Tile.Layer} Layer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Layer.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Layer message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapbox.pb.Tile.Layer} Layer
                     */
                    Layer.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapbox.pb.Tile.Layer)
                            return object;
                        var message = new $root.com.mapbox.pb.Tile.Layer();
                        if (object.version != null)
                            message.version = object.version >>> 0;
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.features) {
                            if (!Array.isArray(object.features))
                                throw TypeError(".com.mapbox.pb.Tile.Layer.features: array expected");
                            message.features = [];
                            for (var i = 0; i < object.features.length; ++i) {
                                if (typeof object.features[i] !== "object")
                                    throw TypeError(".com.mapbox.pb.Tile.Layer.features: object expected");
                                message.features[i] = $root.com.mapbox.pb.Tile.Feature.fromObject(object.features[i]);
                            }
                        }
                        if (object.keys) {
                            if (!Array.isArray(object.keys))
                                throw TypeError(".com.mapbox.pb.Tile.Layer.keys: array expected");
                            message.keys = [];
                            for (var i = 0; i < object.keys.length; ++i)
                                message.keys[i] = String(object.keys[i]);
                        }
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".com.mapbox.pb.Tile.Layer.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".com.mapbox.pb.Tile.Layer.values: object expected");
                                message.values[i] = $root.com.mapbox.pb.Tile.Value.fromObject(object.values[i]);
                            }
                        }
                        if (object.extent != null)
                            message.extent = object.extent >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Layer message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @static
                     * @param {com.mapbox.pb.Tile.Layer} message Layer
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Layer.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.features = [];
                            object.keys = [];
                            object.values = [];
                        }
                        if (options.defaults) {
                            object.name = "";
                            object.extent = 4096;
                            object.version = 1;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.features && message.features.length) {
                            object.features = [];
                            for (var j = 0; j < message.features.length; ++j)
                                object.features[j] = $root.com.mapbox.pb.Tile.Feature.toObject(message.features[j], options);
                        }
                        if (message.keys && message.keys.length) {
                            object.keys = [];
                            for (var j = 0; j < message.keys.length; ++j)
                                object.keys[j] = message.keys[j];
                        }
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.com.mapbox.pb.Tile.Value.toObject(message.values[j], options);
                        }
                        if (message.extent != null && message.hasOwnProperty("extent"))
                            object.extent = message.extent;
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        return object;
                    };

                    /**
                     * Converts this Layer to JSON.
                     * @function toJSON
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Layer.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Layer;
                })();

                return Tile;
            })();

            return pb;
        })();

        return mapbox;
    })();

    return com;
})();

module.exports = $root;


/***/ }),

/***/ "./node_modules/@protobufjs/aspromise/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@protobufjs/aspromise/index.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ "./node_modules/@protobufjs/base64/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@protobufjs/base64/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ "./node_modules/@protobufjs/eventemitter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@protobufjs/eventemitter/index.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ "./node_modules/@protobufjs/float/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@protobufjs/float/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ "./node_modules/@protobufjs/inquire/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@protobufjs/inquire/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ "./node_modules/@protobufjs/pool/index.js":
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/pool/index.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ "./node_modules/@protobufjs/utf8/index.js":
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/utf8/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ "./node_modules/csscolorparser/csscolorparser.js":
/*!*******************************************************!*\
  !*** ./node_modules/csscolorparser/csscolorparser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

// (c) Dean McNamee <dean@gmail.com>, 2012.
//
// https://github.com/deanm/css-color-parser-js
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

// http://www.w3.org/TR/css3-color/
var kCSSColorTable = {
  "transparent": [0,0,0,0], "aliceblue": [240,248,255,1],
  "antiquewhite": [250,235,215,1], "aqua": [0,255,255,1],
  "aquamarine": [127,255,212,1], "azure": [240,255,255,1],
  "beige": [245,245,220,1], "bisque": [255,228,196,1],
  "black": [0,0,0,1], "blanchedalmond": [255,235,205,1],
  "blue": [0,0,255,1], "blueviolet": [138,43,226,1],
  "brown": [165,42,42,1], "burlywood": [222,184,135,1],
  "cadetblue": [95,158,160,1], "chartreuse": [127,255,0,1],
  "chocolate": [210,105,30,1], "coral": [255,127,80,1],
  "cornflowerblue": [100,149,237,1], "cornsilk": [255,248,220,1],
  "crimson": [220,20,60,1], "cyan": [0,255,255,1],
  "darkblue": [0,0,139,1], "darkcyan": [0,139,139,1],
  "darkgoldenrod": [184,134,11,1], "darkgray": [169,169,169,1],
  "darkgreen": [0,100,0,1], "darkgrey": [169,169,169,1],
  "darkkhaki": [189,183,107,1], "darkmagenta": [139,0,139,1],
  "darkolivegreen": [85,107,47,1], "darkorange": [255,140,0,1],
  "darkorchid": [153,50,204,1], "darkred": [139,0,0,1],
  "darksalmon": [233,150,122,1], "darkseagreen": [143,188,143,1],
  "darkslateblue": [72,61,139,1], "darkslategray": [47,79,79,1],
  "darkslategrey": [47,79,79,1], "darkturquoise": [0,206,209,1],
  "darkviolet": [148,0,211,1], "deeppink": [255,20,147,1],
  "deepskyblue": [0,191,255,1], "dimgray": [105,105,105,1],
  "dimgrey": [105,105,105,1], "dodgerblue": [30,144,255,1],
  "firebrick": [178,34,34,1], "floralwhite": [255,250,240,1],
  "forestgreen": [34,139,34,1], "fuchsia": [255,0,255,1],
  "gainsboro": [220,220,220,1], "ghostwhite": [248,248,255,1],
  "gold": [255,215,0,1], "goldenrod": [218,165,32,1],
  "gray": [128,128,128,1], "green": [0,128,0,1],
  "greenyellow": [173,255,47,1], "grey": [128,128,128,1],
  "honeydew": [240,255,240,1], "hotpink": [255,105,180,1],
  "indianred": [205,92,92,1], "indigo": [75,0,130,1],
  "ivory": [255,255,240,1], "khaki": [240,230,140,1],
  "lavender": [230,230,250,1], "lavenderblush": [255,240,245,1],
  "lawngreen": [124,252,0,1], "lemonchiffon": [255,250,205,1],
  "lightblue": [173,216,230,1], "lightcoral": [240,128,128,1],
  "lightcyan": [224,255,255,1], "lightgoldenrodyellow": [250,250,210,1],
  "lightgray": [211,211,211,1], "lightgreen": [144,238,144,1],
  "lightgrey": [211,211,211,1], "lightpink": [255,182,193,1],
  "lightsalmon": [255,160,122,1], "lightseagreen": [32,178,170,1],
  "lightskyblue": [135,206,250,1], "lightslategray": [119,136,153,1],
  "lightslategrey": [119,136,153,1], "lightsteelblue": [176,196,222,1],
  "lightyellow": [255,255,224,1], "lime": [0,255,0,1],
  "limegreen": [50,205,50,1], "linen": [250,240,230,1],
  "magenta": [255,0,255,1], "maroon": [128,0,0,1],
  "mediumaquamarine": [102,205,170,1], "mediumblue": [0,0,205,1],
  "mediumorchid": [186,85,211,1], "mediumpurple": [147,112,219,1],
  "mediumseagreen": [60,179,113,1], "mediumslateblue": [123,104,238,1],
  "mediumspringgreen": [0,250,154,1], "mediumturquoise": [72,209,204,1],
  "mediumvioletred": [199,21,133,1], "midnightblue": [25,25,112,1],
  "mintcream": [245,255,250,1], "mistyrose": [255,228,225,1],
  "moccasin": [255,228,181,1], "navajowhite": [255,222,173,1],
  "navy": [0,0,128,1], "oldlace": [253,245,230,1],
  "olive": [128,128,0,1], "olivedrab": [107,142,35,1],
  "orange": [255,165,0,1], "orangered": [255,69,0,1],
  "orchid": [218,112,214,1], "palegoldenrod": [238,232,170,1],
  "palegreen": [152,251,152,1], "paleturquoise": [175,238,238,1],
  "palevioletred": [219,112,147,1], "papayawhip": [255,239,213,1],
  "peachpuff": [255,218,185,1], "peru": [205,133,63,1],
  "pink": [255,192,203,1], "plum": [221,160,221,1],
  "powderblue": [176,224,230,1], "purple": [128,0,128,1],
  "rebeccapurple": [102,51,153,1],
  "red": [255,0,0,1], "rosybrown": [188,143,143,1],
  "royalblue": [65,105,225,1], "saddlebrown": [139,69,19,1],
  "salmon": [250,128,114,1], "sandybrown": [244,164,96,1],
  "seagreen": [46,139,87,1], "seashell": [255,245,238,1],
  "sienna": [160,82,45,1], "silver": [192,192,192,1],
  "skyblue": [135,206,235,1], "slateblue": [106,90,205,1],
  "slategray": [112,128,144,1], "slategrey": [112,128,144,1],
  "snow": [255,250,250,1], "springgreen": [0,255,127,1],
  "steelblue": [70,130,180,1], "tan": [210,180,140,1],
  "teal": [0,128,128,1], "thistle": [216,191,216,1],
  "tomato": [255,99,71,1], "turquoise": [64,224,208,1],
  "violet": [238,130,238,1], "wheat": [245,222,179,1],
  "white": [255,255,255,1], "whitesmoke": [245,245,245,1],
  "yellow": [255,255,0,1], "yellowgreen": [154,205,50,1]}

function clamp_css_byte(i) {  // Clamp to integer 0 .. 255.
  i = Math.round(i);  // Seems to be what Chrome does (vs truncation).
  return i < 0 ? 0 : i > 255 ? 255 : i;
}

function clamp_css_float(f) {  // Clamp to float 0.0 .. 1.0.
  return f < 0 ? 0 : f > 1 ? 1 : f;
}

function parse_css_int(str) {  // int or percentage.
  if (str[str.length - 1] === '%')
    return clamp_css_byte(parseFloat(str) / 100 * 255);
  return clamp_css_byte(parseInt(str));
}

function parse_css_float(str) {  // float or percentage.
  if (str[str.length - 1] === '%')
    return clamp_css_float(parseFloat(str) / 100);
  return clamp_css_float(parseFloat(str));
}

function css_hue_to_rgb(m1, m2, h) {
  if (h < 0) h += 1;
  else if (h > 1) h -= 1;

  if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
  if (h * 2 < 1) return m2;
  if (h * 3 < 2) return m1 + (m2 - m1) * (2/3 - h) * 6;
  return m1;
}

function parseCSSColor(css_str) {
  // Remove all whitespace, not compliant, but should just be more accepting.
  var str = css_str.replace(/ /g, '').toLowerCase();

  // Color keywords (and transparent) lookup.
  if (str in kCSSColorTable) return kCSSColorTable[str].slice();  // dup.

  // #abc and #abc123 syntax.
  if (str[0] === '#') {
    if (str.length === 4) {
      var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xfff)) return null;  // Covers NaN.
      return [((iv & 0xf00) >> 4) | ((iv & 0xf00) >> 8),
              (iv & 0xf0) | ((iv & 0xf0) >> 4),
              (iv & 0xf) | ((iv & 0xf) << 4),
              1];
    } else if (str.length === 7) {
      var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xffffff)) return null;  // Covers NaN.
      return [(iv & 0xff0000) >> 16,
              (iv & 0xff00) >> 8,
              iv & 0xff,
              1];
    }

    return null;
  }

  var op = str.indexOf('('), ep = str.indexOf(')');
  if (op !== -1 && ep + 1 === str.length) {
    var fname = str.substr(0, op);
    var params = str.substr(op+1, ep-(op+1)).split(',');
    var alpha = 1;  // To allow case fallthrough.
    switch (fname) {
      case 'rgba':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
        // Fall through.
      case 'rgb':
        if (params.length !== 3) return null;
        return [parse_css_int(params[0]),
                parse_css_int(params[1]),
                parse_css_int(params[2]),
                alpha];
      case 'hsla':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
        // Fall through.
      case 'hsl':
        if (params.length !== 3) return null;
        var h = (((parseFloat(params[0]) % 360) + 360) % 360) / 360;  // 0 .. 1
        // NOTE(deanm): According to the CSS spec s/l should only be
        // percentages, but we don't bother and let float or percentage.
        var s = parse_css_float(params[1]);
        var l = parse_css_float(params[2]);
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;
        return [clamp_css_byte(css_hue_to_rgb(m1, m2, h+1/3) * 255),
                clamp_css_byte(css_hue_to_rgb(m1, m2, h) * 255),
                clamp_css_byte(css_hue_to_rgb(m1, m2, h-1/3) * 255),
                alpha];
      default:
        return null;
    }
  }

  return null;
}

try { exports.parseCSSColor = parseCSSColor } catch(e) { }


/***/ }),

/***/ "./node_modules/earcut/src/earcut.js":
/*!*******************************************!*\
  !*** ./node_modules/earcut/src/earcut.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = earcut;
module.exports["default"] = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim | 0);
            triangles.push(ear.i / dim | 0);
            triangles.push(next.i / dim | 0);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

    // triangle bbox; min & max are calculated like this for speed
    var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
        y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
        x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
        y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

    var p = c.next;
    while (p !== a) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

    // triangle bbox; min & max are calculated like this for speed
    var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
        y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
        x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
        y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(x0, y0, minX, minY, invSize),
        maxZ = zOrder(x1, y1, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
            pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim | 0);
            triangles.push(p.i / dim | 0);
            triangles.push(b.i / dim | 0);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
                earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    var bridge = findHoleBridge(hole, outerNode);
    if (!bridge) {
        return outerNode;
    }

    var bridgeReverse = splitPolygon(bridge, hole);

    // filter collinear points around the cuts
    filterPoints(bridgeReverse, bridgeReverse.next);
    return filterPoints(bridge, bridge.next);
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                m = p.x < p.next.x ? p : p.next;
                if (x === hx) return m; // hole touches outer segment; pick leftmost endpoint
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m;

    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if (locallyInside(p, hole) &&
                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    } while (p !== stop);

    return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = (x - minX) * invSize | 0;
    y = (y - minY) * invSize | 0;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) >= (ax - px) * (cy - py) &&
           (ax - px) * (by - py) >= (bx - px) * (ay - py) &&
           (bx - px) * (cy - py) >= (cx - px) * (by - py);
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign(area(p1, q1, p2));
    var o2 = sign(area(p1, q1, q2));
    var o3 = sign(area(p2, q2, p1));
    var o4 = sign(area(p2, q2, q1));

    if (o1 !== o2 && o3 !== o4) return true; // general case

    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

    return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = 0;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ }),

/***/ "./node_modules/geojson-vt/src/clip.js":
/*!*********************************************!*\
  !*** ./node_modules/geojson-vt/src/clip.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clip)
/* harmony export */ });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/geojson-vt/src/feature.js");



/* clip features between two axis-parallel lines:
 *     |        |
 *  ___|___     |     /
 * /   |   \____|____/
 *     |        |
 */

function clip(features, scale, k1, k2, axis, minAll, maxAll, options) {

    k1 /= scale;
    k2 /= scale;

    if (minAll >= k1 && maxAll < k2) return features; // trivial accept
    else if (maxAll < k1 || minAll >= k2) return null; // trivial reject

    var clipped = [];

    for (var i = 0; i < features.length; i++) {

        var feature = features[i];
        var geometry = feature.geometry;
        var type = feature.type;

        var min = axis === 0 ? feature.minX : feature.minY;
        var max = axis === 0 ? feature.maxX : feature.maxY;

        if (min >= k1 && max < k2) { // trivial accept
            clipped.push(feature);
            continue;
        } else if (max < k1 || min >= k2) { // trivial reject
            continue;
        }

        var newGeometry = [];

        if (type === 'Point' || type === 'MultiPoint') {
            clipPoints(geometry, newGeometry, k1, k2, axis);

        } else if (type === 'LineString') {
            clipLine(geometry, newGeometry, k1, k2, axis, false, options.lineMetrics);

        } else if (type === 'MultiLineString') {
            clipLines(geometry, newGeometry, k1, k2, axis, false);

        } else if (type === 'Polygon') {
            clipLines(geometry, newGeometry, k1, k2, axis, true);

        } else if (type === 'MultiPolygon') {
            for (var j = 0; j < geometry.length; j++) {
                var polygon = [];
                clipLines(geometry[j], polygon, k1, k2, axis, true);
                if (polygon.length) {
                    newGeometry.push(polygon);
                }
            }
        }

        if (newGeometry.length) {
            if (options.lineMetrics && type === 'LineString') {
                for (j = 0; j < newGeometry.length; j++) {
                    clipped.push((0,_feature__WEBPACK_IMPORTED_MODULE_0__["default"])(feature.id, type, newGeometry[j], feature.tags));
                }
                continue;
            }

            if (type === 'LineString' || type === 'MultiLineString') {
                if (newGeometry.length === 1) {
                    type = 'LineString';
                    newGeometry = newGeometry[0];
                } else {
                    type = 'MultiLineString';
                }
            }
            if (type === 'Point' || type === 'MultiPoint') {
                type = newGeometry.length === 3 ? 'Point' : 'MultiPoint';
            }

            clipped.push((0,_feature__WEBPACK_IMPORTED_MODULE_0__["default"])(feature.id, type, newGeometry, feature.tags));
        }
    }

    return clipped.length ? clipped : null;
}

function clipPoints(geom, newGeom, k1, k2, axis) {
    for (var i = 0; i < geom.length; i += 3) {
        var a = geom[i + axis];

        if (a >= k1 && a <= k2) {
            newGeom.push(geom[i]);
            newGeom.push(geom[i + 1]);
            newGeom.push(geom[i + 2]);
        }
    }
}

function clipLine(geom, newGeom, k1, k2, axis, isPolygon, trackMetrics) {

    var slice = newSlice(geom);
    var intersect = axis === 0 ? intersectX : intersectY;
    var len = geom.start;
    var segLen, t;

    for (var i = 0; i < geom.length - 3; i += 3) {
        var ax = geom[i];
        var ay = geom[i + 1];
        var az = geom[i + 2];
        var bx = geom[i + 3];
        var by = geom[i + 4];
        var a = axis === 0 ? ax : ay;
        var b = axis === 0 ? bx : by;
        var exited = false;

        if (trackMetrics) segLen = Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));

        if (a < k1) {
            // ---|-->  | (line enters the clip region from the left)
            if (b > k1) {
                t = intersect(slice, ax, ay, bx, by, k1);
                if (trackMetrics) slice.start = len + segLen * t;
            }
        } else if (a > k2) {
            // |  <--|--- (line enters the clip region from the right)
            if (b < k2) {
                t = intersect(slice, ax, ay, bx, by, k2);
                if (trackMetrics) slice.start = len + segLen * t;
            }
        } else {
            addPoint(slice, ax, ay, az);
        }
        if (b < k1 && a >= k1) {
            // <--|---  | or <--|-----|--- (line exits the clip region on the left)
            t = intersect(slice, ax, ay, bx, by, k1);
            exited = true;
        }
        if (b > k2 && a <= k2) {
            // |  ---|--> or ---|-----|--> (line exits the clip region on the right)
            t = intersect(slice, ax, ay, bx, by, k2);
            exited = true;
        }

        if (!isPolygon && exited) {
            if (trackMetrics) slice.end = len + segLen * t;
            newGeom.push(slice);
            slice = newSlice(geom);
        }

        if (trackMetrics) len += segLen;
    }

    // add the last point
    var last = geom.length - 3;
    ax = geom[last];
    ay = geom[last + 1];
    az = geom[last + 2];
    a = axis === 0 ? ax : ay;
    if (a >= k1 && a <= k2) addPoint(slice, ax, ay, az);

    // close the polygon if its endpoints are not the same after clipping
    last = slice.length - 3;
    if (isPolygon && last >= 3 && (slice[last] !== slice[0] || slice[last + 1] !== slice[1])) {
        addPoint(slice, slice[0], slice[1], slice[2]);
    }

    // add the final slice
    if (slice.length) {
        newGeom.push(slice);
    }
}

function newSlice(line) {
    var slice = [];
    slice.size = line.size;
    slice.start = line.start;
    slice.end = line.end;
    return slice;
}

function clipLines(geom, newGeom, k1, k2, axis, isPolygon) {
    for (var i = 0; i < geom.length; i++) {
        clipLine(geom[i], newGeom, k1, k2, axis, isPolygon, false);
    }
}

function addPoint(out, x, y, z) {
    out.push(x);
    out.push(y);
    out.push(z);
}

function intersectX(out, ax, ay, bx, by, x) {
    var t = (x - ax) / (bx - ax);
    out.push(x);
    out.push(ay + (by - ay) * t);
    out.push(1);
    return t;
}

function intersectY(out, ax, ay, bx, by, y) {
    var t = (y - ay) / (by - ay);
    out.push(ax + (bx - ax) * t);
    out.push(y);
    out.push(1);
    return t;
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/convert.js":
/*!************************************************!*\
  !*** ./node_modules/geojson-vt/src/convert.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convert)
/* harmony export */ });
/* harmony import */ var _simplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplify */ "./node_modules/geojson-vt/src/simplify.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature */ "./node_modules/geojson-vt/src/feature.js");




// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data

function convert(data, options) {
    var features = [];
    if (data.type === 'FeatureCollection') {
        for (var i = 0; i < data.features.length; i++) {
            convertFeature(features, data.features[i], options, i);
        }

    } else if (data.type === 'Feature') {
        convertFeature(features, data, options);

    } else {
        // single geometry or a geometry collection
        convertFeature(features, {geometry: data}, options);
    }

    return features;
}

function convertFeature(features, geojson, options, index) {
    if (!geojson.geometry) return;

    var coords = geojson.geometry.coordinates;
    var type = geojson.geometry.type;
    var tolerance = Math.pow(options.tolerance / ((1 << options.maxZoom) * options.extent), 2);
    var geometry = [];
    var id = geojson.id;
    if (options.promoteId) {
        id = geojson.properties[options.promoteId];
    } else if (options.generateId) {
        id = index || 0;
    }
    if (type === 'Point') {
        convertPoint(coords, geometry);

    } else if (type === 'MultiPoint') {
        for (var i = 0; i < coords.length; i++) {
            convertPoint(coords[i], geometry);
        }

    } else if (type === 'LineString') {
        convertLine(coords, geometry, tolerance, false);

    } else if (type === 'MultiLineString') {
        if (options.lineMetrics) {
            // explode into linestrings to be able to track metrics
            for (i = 0; i < coords.length; i++) {
                geometry = [];
                convertLine(coords[i], geometry, tolerance, false);
                features.push((0,_feature__WEBPACK_IMPORTED_MODULE_1__["default"])(id, 'LineString', geometry, geojson.properties));
            }
            return;
        } else {
            convertLines(coords, geometry, tolerance, false);
        }

    } else if (type === 'Polygon') {
        convertLines(coords, geometry, tolerance, true);

    } else if (type === 'MultiPolygon') {
        for (i = 0; i < coords.length; i++) {
            var polygon = [];
            convertLines(coords[i], polygon, tolerance, true);
            geometry.push(polygon);
        }
    } else if (type === 'GeometryCollection') {
        for (i = 0; i < geojson.geometry.geometries.length; i++) {
            convertFeature(features, {
                id: id,
                geometry: geojson.geometry.geometries[i],
                properties: geojson.properties
            }, options, index);
        }
        return;
    } else {
        throw new Error('Input data is not a valid GeoJSON object.');
    }

    features.push((0,_feature__WEBPACK_IMPORTED_MODULE_1__["default"])(id, type, geometry, geojson.properties));
}

function convertPoint(coords, out) {
    out.push(projectX(coords[0]));
    out.push(projectY(coords[1]));
    out.push(0);
}

function convertLine(ring, out, tolerance, isPolygon) {
    var x0, y0;
    var size = 0;

    for (var j = 0; j < ring.length; j++) {
        var x = projectX(ring[j][0]);
        var y = projectY(ring[j][1]);

        out.push(x);
        out.push(y);
        out.push(0);

        if (j > 0) {
            if (isPolygon) {
                size += (x0 * y - x * y0) / 2; // area
            } else {
                size += Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)); // length
            }
        }
        x0 = x;
        y0 = y;
    }

    var last = out.length - 3;
    out[2] = 1;
    (0,_simplify__WEBPACK_IMPORTED_MODULE_0__["default"])(out, 0, last, tolerance);
    out[last + 2] = 1;

    out.size = Math.abs(size);
    out.start = 0;
    out.end = out.size;
}

function convertLines(rings, out, tolerance, isPolygon) {
    for (var i = 0; i < rings.length; i++) {
        var geom = [];
        convertLine(rings[i], geom, tolerance, isPolygon);
        out.push(geom);
    }
}

function projectX(x) {
    return x / 360 + 0.5;
}

function projectY(y) {
    var sin = Math.sin(y * Math.PI / 180);
    var y2 = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
    return y2 < 0 ? 0 : y2 > 1 ? 1 : y2;
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/feature.js":
/*!************************************************!*\
  !*** ./node_modules/geojson-vt/src/feature.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFeature)
/* harmony export */ });

function createFeature(id, type, geom, tags) {
    var feature = {
        id: typeof id === 'undefined' ? null : id,
        type: type,
        geometry: geom,
        tags: tags,
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
    calcBBox(feature);
    return feature;
}

function calcBBox(feature) {
    var geom = feature.geometry;
    var type = feature.type;

    if (type === 'Point' || type === 'MultiPoint' || type === 'LineString') {
        calcLineBBox(feature, geom);

    } else if (type === 'Polygon' || type === 'MultiLineString') {
        for (var i = 0; i < geom.length; i++) {
            calcLineBBox(feature, geom[i]);
        }

    } else if (type === 'MultiPolygon') {
        for (i = 0; i < geom.length; i++) {
            for (var j = 0; j < geom[i].length; j++) {
                calcLineBBox(feature, geom[i][j]);
            }
        }
    }
}

function calcLineBBox(feature, geom) {
    for (var i = 0; i < geom.length; i += 3) {
        feature.minX = Math.min(feature.minX, geom[i]);
        feature.minY = Math.min(feature.minY, geom[i + 1]);
        feature.maxX = Math.max(feature.maxX, geom[i]);
        feature.maxY = Math.max(feature.maxY, geom[i + 1]);
    }
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/geojson-vt/src/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geojsonvt)
/* harmony export */ });
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert */ "./node_modules/geojson-vt/src/convert.js");
/* harmony import */ var _clip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clip */ "./node_modules/geojson-vt/src/clip.js");
/* harmony import */ var _wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrap */ "./node_modules/geojson-vt/src/wrap.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform */ "./node_modules/geojson-vt/src/transform.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile */ "./node_modules/geojson-vt/src/tile.js");

     // GeoJSON conversion and preprocessing
           // stripe clipping algorithm
           // date line processing
 // coordinate transformation
     // final simplified tile generation

function geojsonvt(data, options) {
    return new GeoJSONVT(data, options);
}

function GeoJSONVT(data, options) {
    options = this.options = extend(Object.create(this.options), options);

    var debug = options.debug;

    if (debug) console.time('preprocess data');

    if (options.maxZoom < 0 || options.maxZoom > 24) throw new Error('maxZoom should be in the 0-24 range');
    if (options.promoteId && options.generateId) throw new Error('promoteId and generateId cannot be used together.');

    var features = (0,_convert__WEBPACK_IMPORTED_MODULE_0__["default"])(data, options);

    this.tiles = {};
    this.tileCoords = [];

    if (debug) {
        console.timeEnd('preprocess data');
        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);
        console.time('generate tiles');
        this.stats = {};
        this.total = 0;
    }

    features = (0,_wrap__WEBPACK_IMPORTED_MODULE_2__["default"])(features, options);

    // start slicing from the top tile down
    if (features.length) this.splitTile(features, 0, 0, 0);

    if (debug) {
        if (features.length) console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints);
        console.timeEnd('generate tiles');
        console.log('tiles generated:', this.total, JSON.stringify(this.stats));
    }
}

GeoJSONVT.prototype.options = {
    maxZoom: 14,            // max zoom to preserve detail on
    indexMaxZoom: 5,        // max zoom in the tile index
    indexMaxPoints: 100000, // max number of points per tile in the tile index
    tolerance: 3,           // simplification tolerance (higher means simpler)
    extent: 4096,           // tile extent
    buffer: 64,             // tile buffer on each side
    lineMetrics: false,     // whether to calculate line metrics
    promoteId: null,        // name of a feature property to be promoted to feature.id
    generateId: false,      // whether to generate feature ids. Cannot be used with promoteId
    debug: 0                // logging level (0, 1 or 2)
};

GeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {

    var stack = [features, z, x, y],
        options = this.options,
        debug = options.debug;

    // avoid recursion by using a processing queue
    while (stack.length) {
        y = stack.pop();
        x = stack.pop();
        z = stack.pop();
        features = stack.pop();

        var z2 = 1 << z,
            id = toID(z, x, y),
            tile = this.tiles[id];

        if (!tile) {
            if (debug > 1) console.time('creation');

            tile = this.tiles[id] = (0,_tile__WEBPACK_IMPORTED_MODULE_4__["default"])(features, z, x, y, options);
            this.tileCoords.push({z: z, x: x, y: y});

            if (debug) {
                if (debug > 1) {
                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',
                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);
                    console.timeEnd('creation');
                }
                var key = 'z' + z;
                this.stats[key] = (this.stats[key] || 0) + 1;
                this.total++;
            }
        }

        // save reference to original geometry in tile so that we can drill down later if we stop now
        tile.source = features;

        // if it's the first-pass tiling
        if (!cz) {
            // stop tiling if we reached max zoom, or if the tile is too simple
            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) continue;

        // if a drilldown to a specific tile
        } else {
            // stop tiling if we reached base zoom or our target tile zoom
            if (z === options.maxZoom || z === cz) continue;

            // stop tiling if it's not an ancestor of the target tile
            var m = 1 << (cz - z);
            if (x !== Math.floor(cx / m) || y !== Math.floor(cy / m)) continue;
        }

        // if we slice further down, no need to keep source geometry
        tile.source = null;

        if (features.length === 0) continue;

        if (debug > 1) console.time('clipping');

        // values we'll use for clipping
        var k1 = 0.5 * options.buffer / options.extent,
            k2 = 0.5 - k1,
            k3 = 0.5 + k1,
            k4 = 1 + k1,
            tl, bl, tr, br, left, right;

        tl = bl = tr = br = null;

        left  = (0,_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(features, z2, x - k1, x + k3, 0, tile.minX, tile.maxX, options);
        right = (0,_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(features, z2, x + k2, x + k4, 0, tile.minX, tile.maxX, options);
        features = null;

        if (left) {
            tl = (0,_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(left, z2, y - k1, y + k3, 1, tile.minY, tile.maxY, options);
            bl = (0,_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(left, z2, y + k2, y + k4, 1, tile.minY, tile.maxY, options);
            left = null;
        }

        if (right) {
            tr = (0,_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(right, z2, y - k1, y + k3, 1, tile.minY, tile.maxY, options);
            br = (0,_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(right, z2, y + k2, y + k4, 1, tile.minY, tile.maxY, options);
            right = null;
        }

        if (debug > 1) console.timeEnd('clipping');

        stack.push(tl || [], z + 1, x * 2,     y * 2);
        stack.push(bl || [], z + 1, x * 2,     y * 2 + 1);
        stack.push(tr || [], z + 1, x * 2 + 1, y * 2);
        stack.push(br || [], z + 1, x * 2 + 1, y * 2 + 1);
    }
};

GeoJSONVT.prototype.getTile = function (z, x, y) {
    var options = this.options,
        extent = options.extent,
        debug = options.debug;

    if (z < 0 || z > 24) return null;

    var z2 = 1 << z;
    x = ((x % z2) + z2) % z2; // wrap tile x coordinate

    var id = toID(z, x, y);
    if (this.tiles[id]) return (0,_transform__WEBPACK_IMPORTED_MODULE_3__["default"])(this.tiles[id], extent);

    if (debug > 1) console.log('drilling down to z%d-%d-%d', z, x, y);

    var z0 = z,
        x0 = x,
        y0 = y,
        parent;

    while (!parent && z0 > 0) {
        z0--;
        x0 = Math.floor(x0 / 2);
        y0 = Math.floor(y0 / 2);
        parent = this.tiles[toID(z0, x0, y0)];
    }

    if (!parent || !parent.source) return null;

    // if we found a parent tile containing the original geometry, we can drill down from it
    if (debug > 1) console.log('found parent tile z%d-%d-%d', z0, x0, y0);

    if (debug > 1) console.time('drilling down');
    this.splitTile(parent.source, z0, x0, y0, z, x, y);
    if (debug > 1) console.timeEnd('drilling down');

    return this.tiles[id] ? (0,_transform__WEBPACK_IMPORTED_MODULE_3__["default"])(this.tiles[id], extent) : null;
};

function toID(z, x, y) {
    return (((1 << z) * y + x) * 32) + z;
}

function extend(dest, src) {
    for (var i in src) dest[i] = src[i];
    return dest;
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/simplify.js":
/*!*************************************************!*\
  !*** ./node_modules/geojson-vt/src/simplify.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ simplify)
/* harmony export */ });

// calculate simplification data using optimized Douglas-Peucker algorithm

function simplify(coords, first, last, sqTolerance) {
    var maxSqDist = sqTolerance;
    var mid = (last - first) >> 1;
    var minPosToMid = last - first;
    var index;

    var ax = coords[first];
    var ay = coords[first + 1];
    var bx = coords[last];
    var by = coords[last + 1];

    for (var i = first + 3; i < last; i += 3) {
        var d = getSqSegDist(coords[i], coords[i + 1], ax, ay, bx, by);

        if (d > maxSqDist) {
            index = i;
            maxSqDist = d;

        } else if (d === maxSqDist) {
            // a workaround to ensure we choose a pivot close to the middle of the list,
            // reducing recursion depth, for certain degenerate inputs
            // https://github.com/mapbox/geojson-vt/issues/104
            var posToMid = Math.abs(i - mid);
            if (posToMid < minPosToMid) {
                index = i;
                minPosToMid = posToMid;
            }
        }
    }

    if (maxSqDist > sqTolerance) {
        if (index - first > 3) simplify(coords, first, index, sqTolerance);
        coords[index + 2] = maxSqDist;
        if (last - index > 3) simplify(coords, index, last, sqTolerance);
    }
}

// square distance from a point to a segment
function getSqSegDist(px, py, x, y, bx, by) {

    var dx = bx - x;
    var dy = by - y;

    if (dx !== 0 || dy !== 0) {

        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
            x = bx;
            y = by;

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }

    dx = px - x;
    dy = py - y;

    return dx * dx + dy * dy;
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/tile.js":
/*!*********************************************!*\
  !*** ./node_modules/geojson-vt/src/tile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTile)
/* harmony export */ });

function createTile(features, z, tx, ty, options) {
    var tolerance = z === options.maxZoom ? 0 : options.tolerance / ((1 << z) * options.extent);
    var tile = {
        features: [],
        numPoints: 0,
        numSimplified: 0,
        numFeatures: 0,
        source: null,
        x: tx,
        y: ty,
        z: z,
        transformed: false,
        minX: 2,
        minY: 1,
        maxX: -1,
        maxY: 0
    };
    for (var i = 0; i < features.length; i++) {
        tile.numFeatures++;
        addFeature(tile, features[i], tolerance, options);

        var minX = features[i].minX;
        var minY = features[i].minY;
        var maxX = features[i].maxX;
        var maxY = features[i].maxY;

        if (minX < tile.minX) tile.minX = minX;
        if (minY < tile.minY) tile.minY = minY;
        if (maxX > tile.maxX) tile.maxX = maxX;
        if (maxY > tile.maxY) tile.maxY = maxY;
    }
    return tile;
}

function addFeature(tile, feature, tolerance, options) {

    var geom = feature.geometry,
        type = feature.type,
        simplified = [];

    if (type === 'Point' || type === 'MultiPoint') {
        for (var i = 0; i < geom.length; i += 3) {
            simplified.push(geom[i]);
            simplified.push(geom[i + 1]);
            tile.numPoints++;
            tile.numSimplified++;
        }

    } else if (type === 'LineString') {
        addLine(simplified, geom, tile, tolerance, false, false);

    } else if (type === 'MultiLineString' || type === 'Polygon') {
        for (i = 0; i < geom.length; i++) {
            addLine(simplified, geom[i], tile, tolerance, type === 'Polygon', i === 0);
        }

    } else if (type === 'MultiPolygon') {

        for (var k = 0; k < geom.length; k++) {
            var polygon = geom[k];
            for (i = 0; i < polygon.length; i++) {
                addLine(simplified, polygon[i], tile, tolerance, true, i === 0);
            }
        }
    }

    if (simplified.length) {
        var tags = feature.tags || null;
        if (type === 'LineString' && options.lineMetrics) {
            tags = {};
            for (var key in feature.tags) tags[key] = feature.tags[key];
            tags['mapbox_clip_start'] = geom.start / geom.size;
            tags['mapbox_clip_end'] = geom.end / geom.size;
        }
        var tileFeature = {
            geometry: simplified,
            type: type === 'Polygon' || type === 'MultiPolygon' ? 3 :
                type === 'LineString' || type === 'MultiLineString' ? 2 : 1,
            tags: tags
        };
        if (feature.id !== null) {
            tileFeature.id = feature.id;
        }
        tile.features.push(tileFeature);
    }
}

function addLine(result, geom, tile, tolerance, isPolygon, isOuter) {
    var sqTolerance = tolerance * tolerance;

    if (tolerance > 0 && (geom.size < (isPolygon ? sqTolerance : tolerance))) {
        tile.numPoints += geom.length / 3;
        return;
    }

    var ring = [];

    for (var i = 0; i < geom.length; i += 3) {
        if (tolerance === 0 || geom[i + 2] > sqTolerance) {
            tile.numSimplified++;
            ring.push(geom[i]);
            ring.push(geom[i + 1]);
        }
        tile.numPoints++;
    }

    if (isPolygon) rewind(ring, isOuter);

    result.push(ring);
}

function rewind(ring, clockwise) {
    var area = 0;
    for (var i = 0, len = ring.length, j = len - 2; i < len; j = i, i += 2) {
        area += (ring[i] - ring[j]) * (ring[i + 1] + ring[j + 1]);
    }
    if (area > 0 === clockwise) {
        for (i = 0, len = ring.length; i < len / 2; i += 2) {
            var x = ring[i];
            var y = ring[i + 1];
            ring[i] = ring[len - 2 - i];
            ring[i + 1] = ring[len - 1 - i];
            ring[len - 2 - i] = x;
            ring[len - 1 - i] = y;
        }
    }
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/transform.js":
/*!**************************************************!*\
  !*** ./node_modules/geojson-vt/src/transform.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformTile)
/* harmony export */ });

// Transforms the coordinates of each feature in the given tile from
// mercator-projected space into (extent x extent) tile space.
function transformTile(tile, extent) {
    if (tile.transformed) return tile;

    var z2 = 1 << tile.z,
        tx = tile.x,
        ty = tile.y,
        i, j, k;

    for (i = 0; i < tile.features.length; i++) {
        var feature = tile.features[i],
            geom = feature.geometry,
            type = feature.type;

        feature.geometry = [];

        if (type === 1) {
            for (j = 0; j < geom.length; j += 2) {
                feature.geometry.push(transformPoint(geom[j], geom[j + 1], extent, z2, tx, ty));
            }
        } else {
            for (j = 0; j < geom.length; j++) {
                var ring = [];
                for (k = 0; k < geom[j].length; k += 2) {
                    ring.push(transformPoint(geom[j][k], geom[j][k + 1], extent, z2, tx, ty));
                }
                feature.geometry.push(ring);
            }
        }
    }

    tile.transformed = true;

    return tile;
}

function transformPoint(x, y, extent, z2, tx, ty) {
    return [
        Math.round(extent * (x * z2 - tx)),
        Math.round(extent * (y * z2 - ty))];
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/wrap.js":
/*!*********************************************!*\
  !*** ./node_modules/geojson-vt/src/wrap.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var _clip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clip */ "./node_modules/geojson-vt/src/clip.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature */ "./node_modules/geojson-vt/src/feature.js");




function wrap(features, options) {
    var buffer = options.buffer / options.extent;
    var merged = features;
    var left  = (0,_clip__WEBPACK_IMPORTED_MODULE_0__["default"])(features, 1, -1 - buffer, buffer,     0, -1, 2, options); // left world copy
    var right = (0,_clip__WEBPACK_IMPORTED_MODULE_0__["default"])(features, 1,  1 - buffer, 2 + buffer, 0, -1, 2, options); // right world copy

    if (left || right) {
        merged = (0,_clip__WEBPACK_IMPORTED_MODULE_0__["default"])(features, 1, -buffer, 1 + buffer, 0, -1, 2, options) || []; // center world copy

        if (left) merged = shiftFeatureCoords(left, 1).concat(merged); // merge left into center
        if (right) merged = merged.concat(shiftFeatureCoords(right, -1)); // merge right into center
    }

    return merged;
}

function shiftFeatureCoords(features, offset) {
    var newFeatures = [];

    for (var i = 0; i < features.length; i++) {
        var feature = features[i],
            type = feature.type;

        var newGeometry;

        if (type === 'Point' || type === 'MultiPoint' || type === 'LineString') {
            newGeometry = shiftCoords(feature.geometry, offset);

        } else if (type === 'MultiLineString' || type === 'Polygon') {
            newGeometry = [];
            for (var j = 0; j < feature.geometry.length; j++) {
                newGeometry.push(shiftCoords(feature.geometry[j], offset));
            }
        } else if (type === 'MultiPolygon') {
            newGeometry = [];
            for (j = 0; j < feature.geometry.length; j++) {
                var newPolygon = [];
                for (var k = 0; k < feature.geometry[j].length; k++) {
                    newPolygon.push(shiftCoords(feature.geometry[j][k], offset));
                }
                newGeometry.push(newPolygon);
            }
        }

        newFeatures.push((0,_feature__WEBPACK_IMPORTED_MODULE_1__["default"])(feature.id, type, newGeometry, feature.tags));
    }

    return newFeatures;
}

function shiftCoords(points, offset) {
    var newPoints = [];
    newPoints.size = points.size;

    if (points.start !== undefined) {
        newPoints.start = points.start;
        newPoints.end = points.end;
    }

    for (var i = 0; i < points.length; i += 3) {
        newPoints.push(points[i] + offset, points[i + 1], points[i + 2]);
    }
    return newPoints;
}


/***/ }),

/***/ "./node_modules/long/src/long.js":
/*!***************************************!*\
  !*** ./node_modules/long/src/long.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = Long;

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm.mul(this.low,
                           this.high,
                           multiplier.low,
                           multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
        return this;
    else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits === 32)
            return fromBits(high, 0, this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, this.unsigned);
    }
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};


/***/ }),

/***/ "./node_modules/protobufjs/minimal.js":
/*!********************************************!*\
  !*** ./node_modules/protobufjs/minimal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(/*! ./src/index-minimal */ "./node_modules/protobufjs/src/index-minimal.js");


/***/ }),

/***/ "./node_modules/protobufjs/src/index-minimal.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/index-minimal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(/*! ./writer */ "./node_modules/protobufjs/src/writer.js");
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ "./node_modules/protobufjs/src/writer_buffer.js");
protobuf.Reader       = __webpack_require__(/*! ./reader */ "./node_modules/protobufjs/src/reader.js");
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ "./node_modules/protobufjs/src/reader_buffer.js");

// Utility
protobuf.util         = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");
protobuf.rpc          = __webpack_require__(/*! ./rpc */ "./node_modules/protobufjs/src/rpc.js");
protobuf.roots        = __webpack_require__(/*! ./roots */ "./node_modules/protobufjs/src/roots.js");
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
}

// Set up buffer utility according to the environment
configure();


/***/ }),

/***/ "./node_modules/protobufjs/src/reader.js":
/*!***********************************************!*\
  !*** ./node_modules/protobufjs/src/reader.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup(buffer) {
            return (Reader.create = function create_buffer(buffer) {
                return util.Buffer.isBuffer(buffer)
                    ? new BufferReader(buffer)
                    /* istanbul ignore next */
                    : create_array(buffer);
            })(buffer);
        }
        /* istanbul ignore next */
        : create_array;
};

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = create();

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),

/***/ "./node_modules/protobufjs/src/reader_buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/reader_buffer.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(/*! ./reader */ "./node_modules/protobufjs/src/reader.js");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

BufferReader._configure = function () {
    /* istanbul ignore else */
    if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
};


/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice
        ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len))
        : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

BufferReader._configure();


/***/ }),

/***/ "./node_modules/protobufjs/src/roots.js":
/*!**********************************************!*\
  !*** ./node_modules/protobufjs/src/roots.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),

/***/ "./node_modules/protobufjs/src/rpc.js":
/*!********************************************!*\
  !*** ./node_modules/protobufjs/src/rpc.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ "./node_modules/protobufjs/src/rpc/service.js");


/***/ }),

/***/ "./node_modules/protobufjs/src/rpc/service.js":
/*!****************************************************!*\
  !*** ./node_modules/protobufjs/src/rpc/service.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/util/longbits.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/util/longbits.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/util/minimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/protobufjs/src/util/minimal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "./node_modules/@protobufjs/aspromise/index.js");

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(/*! @protobufjs/base64 */ "./node_modules/@protobufjs/base64/index.js");

// base class of rpc.Service
util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ "./node_modules/@protobufjs/eventemitter/index.js");

// float handling accross browsers
util.float = __webpack_require__(/*! @protobufjs/float */ "./node_modules/@protobufjs/float/index.js");

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(/*! @protobufjs/inquire */ "./node_modules/@protobufjs/inquire/index.js");

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ "./node_modules/@protobufjs/utf8/index.js");

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(/*! @protobufjs/pool */ "./node_modules/@protobufjs/pool/index.js");

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(/*! ./longbits */ "./node_modules/protobufjs/src/util/longbits.js");

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */
util.isNode = Boolean(typeof __webpack_require__.g !== "undefined"
                   && __webpack_require__.g
                   && __webpack_require__.g.process
                   && __webpack_require__.g.process.versions
                   && __webpack_require__.g.process.versions.node);

/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */
util.global = util.isNode && __webpack_require__.g
           || typeof window !== "undefined" && window
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};


/***/ }),

/***/ "./node_modules/protobufjs/src/writer.js":
/*!***********************************************!*\
  !*** ./node_modules/protobufjs/src/writer.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup() {
            return (Writer.create = function create_buffer() {
                return new BufferWriter();
            })();
        }
        /* istanbul ignore next */
        : function create_array() {
            return new Writer();
        };
};

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = create();

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
};


/***/ }),

/***/ "./node_modules/protobufjs/src/writer_buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/writer_buffer.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(/*! ./writer */ "./node_modules/protobufjs/src/writer.js");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

BufferWriter._configure = function () {
    /**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */
    BufferWriter.alloc = util._Buffer_allocUnsafe;

    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set"
        ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
          // also works for plain array values
        }
        /* istanbul ignore next */
        : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
          else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
        };
};


/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
        buf.utf8Write(val, pos);
    else
        buf.write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

BufferWriter._configure();


/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/***/ ((module) => {

"use strict";
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!************************!*\
  !*** ./src/decoder.ts ***!
  \************************/

/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
self.importScripts("three.min.js");
const index_worker_1 = __webpack_require__(/*! @here/harp-vectortile-datasource/index-worker */ "./node_modules/@here/harp-vectortile-datasource/index-worker.js");
index_worker_1.VectorTileDecoderService.start();

})();

/******/ })()
;
//# sourceMappingURL=decoder.bundle.js.map