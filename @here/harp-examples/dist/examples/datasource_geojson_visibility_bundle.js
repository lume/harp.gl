/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../harp-vectortile-datasource/lib/adapters/omv/proto/vector_tile.js":
/*!***************************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/adapters/omv/proto/vector_tile.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/


var $protobuf = __webpack_require__(/*! protobufjs/minimal */ "../../node_modules/protobufjs/minimal.js");

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

/***/ "./src/datasource_geojson_visibility.ts":
/*!**********************************************!*\
  !*** ./src/datasource_geojson_visibility.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonVisibilityExample = void 0;
const harp_map_controls_1 = __webpack_require__(/*! @here/harp-map-controls */ "../harp-map-controls/index.ts");
const harp_mapview_1 = __webpack_require__(/*! @here/harp-mapview */ "../harp-mapview/index.ts");
const GeoJsonTiler_1 = __webpack_require__(/*! @here/harp-mapview-decoder/lib/GeoJsonTiler */ "../harp-mapview-decoder/lib/GeoJsonTiler.ts");
const harp_vectortile_datasource_1 = __webpack_require__(/*! @here/harp-vectortile-datasource */ "../harp-vectortile-datasource/index.ts");
const index_worker_1 = __webpack_require__(/*! @here/harp-vectortile-datasource/index-worker */ "../harp-vectortile-datasource/index-worker.ts");
const turf = __webpack_require__(/*! @turf/turf */ "../../node_modules/@turf/turf/turf.min.js");
const config_1 = __webpack_require__(/*! ../config */ "./config.ts");
var GeoJsonVisibilityExample;
(function (GeoJsonVisibilityExample) {
    async function main(id) {
        const canvas = document.getElementById(id);
        const NY = [-74.01, 40.707];
        const mapView = new harp_mapview_1.MapView({
            canvas,
            theme: "resources/berlin_tilezen_base.json",
            target: NY,
            zoomLevel: 15.1
        });
        harp_mapview_1.CopyrightElementHandler.install("copyrightNotice", mapView);
        const mapControls = new harp_map_controls_1.MapControls(mapView);
        mapControls.maxTiltAngle = 50;
        const ui = new harp_map_controls_1.MapControlsUI(mapControls, { zoomLevel: "input" });
        canvas.parentElement.appendChild(ui.domElement);
        mapView.resize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            mapView.resize(window.innerWidth, window.innerHeight);
        });
        const omvDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            authenticationCode: config_1.apikey
        });
        mapView.addDataSource(omvDataSource);
        omvDataSource.dataSourceOrder = 0;
        const circle = turf.circle(NY, 1000, {
            units: "meters"
        });
        const points = turf.randomPoint(100, {
            bbox: turf.bbox(circle)
        });
        points.features = points.features.filter(feature => turf.distance(NY, feature.geometry.coordinates, { units: "meters" }) < 1000);
        const dataProvider = new harp_vectortile_datasource_1.GeoJsonDataProvider("geojson", turf.featureCollection([circle, ...points.features]), { tiler: new GeoJsonTiler_1.GeoJsonTiler() });
        const featuresDataSource = new harp_vectortile_datasource_1.VectorTileDataSource({
            decoder: new index_worker_1.VectorTileDecoder(),
            styleSetName: "geojson",
            dataProvider,
            addGroundPlane: false
        });
        featuresDataSource.dataSourceOrder = 1;
        await mapView.addDataSource(featuresDataSource);
        await featuresDataSource.setTheme({
            styles: [
                {
                    styleSet: "geojson",
                    when: ["==", ["geometry-type"], "Polygon"],
                    technique: "fill",
                    color: "rgba(200,94,202,0.5)",
                    minZoomLevel: 15,
                    maxZoomLevel: 17
                },
                {
                    styleSet: "geojson",
                    when: ["==", ["geometry-type"], "Point"],
                    technique: "circles",
                    color: "rgba(94,0,202,1)",
                    size: 30,
                    minZoomLevel: 15,
                    maxZoomLevel: 17
                }
            ]
        });
        dataProvider.onDidInvalidate(() => {
            mapView.update();
        });
        const animate = () => {
            turf.transformRotate(points, 5, {
                pivot: NY,
                mutate: true
            });
            dataProvider.updateInput(turf.featureCollection([circle, ...points.features]));
        };
        setInterval(animate, 100);
        return mapView;
    }
    // eslint-disable-next-line no-console
    main("mapCanvas").catch(console.error);
})(GeoJsonVisibilityExample = exports.GeoJsonVisibilityExample || (exports.GeoJsonVisibilityExample = {}));


/***/ }),

/***/ "../harp-geometry/lib/ClipLineString.ts":
/*!**********************************************!*\
  !*** ../harp-geometry/lib/ClipLineString.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrapLineString = exports.clipLineString = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
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


/***/ }),

/***/ "../harp-geometry/lib/ClipPolygon.ts":
/*!*******************************************!*\
  !*** ../harp-geometry/lib/ClipPolygon.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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


/***/ }),

/***/ "../harp-mapview-decoder/index-worker.ts":
/*!***********************************************!*\
  !*** ../harp-mapview-decoder/index-worker.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
__exportStar(__webpack_require__(/*! ./lib/ThemedTileDecoder */ "../harp-mapview-decoder/lib/ThemedTileDecoder.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/TileDecoderService */ "../harp-mapview-decoder/lib/TileDecoderService.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/TilerService */ "../harp-mapview-decoder/lib/TilerService.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/WorkerService */ "../harp-mapview-decoder/lib/WorkerService.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/WorkerServiceManager */ "../harp-mapview-decoder/lib/WorkerServiceManager.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/GeoJsonTiler */ "../harp-mapview-decoder/lib/GeoJsonTiler.ts"), exports);


/***/ }),

/***/ "../harp-mapview-decoder/lib/GeoJsonTiler.ts":
/*!***************************************************!*\
  !*** ../harp-mapview-decoder/lib/GeoJsonTiler.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonTiler = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "../harp-datasource-protocol/index.ts");
// @ts-ignore
const geojsonvtExport = __webpack_require__(/*! geojson-vt */ "../../node_modules/geojson-vt/src/index.js");
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


/***/ }),

/***/ "../harp-mapview-decoder/lib/ThemedTileDecoder.ts":
/*!********************************************************!*\
  !*** ../harp-mapview-decoder/lib/ThemedTileDecoder.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemedTileDecoder = void 0;
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "../harp-datasource-protocol/index-decoder.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
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


/***/ }),

/***/ "../harp-mapview-decoder/lib/TileDecoderService.ts":
/*!*********************************************************!*\
  !*** ../harp-mapview-decoder/lib/TileDecoderService.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileDecoderService = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "../harp-datasource-protocol/index.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "../harp-mapview-decoder/lib/WorkerService.ts");
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


/***/ }),

/***/ "../harp-mapview-decoder/lib/TilerService.ts":
/*!***************************************************!*\
  !*** ../harp-mapview-decoder/lib/TilerService.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TilerService = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "../harp-datasource-protocol/index.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const GeoJsonTiler_1 = __webpack_require__(/*! ./GeoJsonTiler */ "../harp-mapview-decoder/lib/GeoJsonTiler.ts");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "../harp-mapview-decoder/lib/WorkerService.ts");
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


/***/ }),

/***/ "../harp-mapview-decoder/lib/WorkerService.ts":
/*!****************************************************!*\
  !*** ../harp-mapview-decoder/lib/WorkerService.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerService = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "../harp-datasource-protocol/index.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
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


/***/ }),

/***/ "../harp-mapview-decoder/lib/WorkerServiceManager.ts":
/*!***********************************************************!*\
  !*** ../harp-mapview-decoder/lib/WorkerServiceManager.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerServiceManager = void 0;
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "../harp-datasource-protocol/index.ts");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "../harp-mapview-decoder/lib/WorkerService.ts");
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


/***/ }),

/***/ "../harp-vectortile-datasource/index-worker.ts":
/*!*****************************************************!*\
  !*** ../harp-vectortile-datasource/index-worker.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
__exportStar(__webpack_require__(/*! ./lib/VectorTileDecoder */ "../harp-vectortile-datasource/lib/VectorTileDecoder.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/GeoJsonTilerService */ "../harp-vectortile-datasource/lib/GeoJsonTilerService.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/OmvDecoderDefs */ "../harp-vectortile-datasource/lib/OmvDecoderDefs.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib/DataAdapter */ "../harp-vectortile-datasource/lib/DataAdapter.ts"), exports);


/***/ }),

/***/ "../harp-vectortile-datasource/lib/DataAdapter.ts":
/*!********************************************************!*\
  !*** ../harp-vectortile-datasource/lib/DataAdapter.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../harp-vectortile-datasource/lib/DecodeInfo.ts":
/*!*******************************************************!*\
  !*** ../harp-vectortile-datasource/lib/DecodeInfo.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DecodeInfo = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/GeoJsonTilerService.ts":
/*!****************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/GeoJsonTilerService.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonTilerService = void 0;
const index_worker_1 = __webpack_require__(/*! @here/harp-mapview-decoder/index-worker */ "../harp-mapview-decoder/index-worker.ts");
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "../harp-vectortile-datasource/lib/OmvDecoderDefs.ts");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/OmvPoliticalViewFeatureModifier.ts":
/*!****************************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/OmvPoliticalViewFeatureModifier.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmvPoliticalViewFeatureModifier = void 0;
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/OmvUtils.ts":
/*!*****************************************************!*\
  !*** ../harp-vectortile-datasource/lib/OmvUtils.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.webMercatorTile2TargetTile = exports.webMercatorTile2TargetWorld = exports.world2tile = exports.tile2world = exports.createWorldTileTransformationCookie = exports.tile2lat = exports.lat2tile = exports.isArrayBufferLike = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/Ring.ts":
/*!*************************************************!*\
  !*** ../harp-vectortile-datasource/lib/Ring.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/StyleSetDataFilter.ts":
/*!***************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/StyleSetDataFilter.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/VectorTileDataEmitter.ts":
/*!******************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/VectorTileDataEmitter.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VectorTileDataEmitter = void 0;
/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "../harp-datasource-protocol/index.ts");
const TechniqueAttr_1 = __webpack_require__(/*! @here/harp-datasource-protocol/lib/TechniqueAttr */ "../harp-datasource-protocol/lib/TechniqueAttr.ts");
const ClipPolygon_1 = __webpack_require__(/*! @here/harp-geometry/lib/ClipPolygon */ "../harp-geometry/lib/ClipPolygon.ts");
const EdgeLengthGeometrySubdivisionModifier_1 = __webpack_require__(/*! @here/harp-geometry/lib/EdgeLengthGeometrySubdivisionModifier */ "../harp-geometry/lib/EdgeLengthGeometrySubdivisionModifier.ts");
const SphericalGeometrySubdivisionModifier_1 = __webpack_require__(/*! @here/harp-geometry/lib/SphericalGeometrySubdivisionModifier */ "../harp-geometry/lib/SphericalGeometrySubdivisionModifier.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const Lines_1 = __webpack_require__(/*! @here/harp-lines/lib/Lines */ "../harp-lines/lib/Lines.ts");
const TriangulateLines_1 = __webpack_require__(/*! @here/harp-lines/lib/TriangulateLines */ "../harp-lines/lib/TriangulateLines.ts");
const MapMeshMaterialsDefs_1 = __webpack_require__(/*! @here/harp-materials/lib/MapMeshMaterialsDefs */ "../harp-materials/lib/MapMeshMaterialsDefs.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
const earcut_1 = __webpack_require__(/*! earcut */ "../../node_modules/earcut/src/earcut.js");
const THREE = __webpack_require__(/*! three */ "three");
const OmvUtils_1 = __webpack_require__(/*! ./OmvUtils */ "../harp-vectortile-datasource/lib/OmvUtils.ts");
const Ring_1 = __webpack_require__(/*! ./Ring */ "../harp-vectortile-datasource/lib/Ring.ts");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/VectorTileDecoder.ts":
/*!**************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/VectorTileDecoder.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VectorTileDecoderService = exports.VectorTileDecoder = exports.VectorTileDataProcessor = void 0;
/*
 * Copyright (C) 2019-2022 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "../harp-datasource-protocol/index.ts");
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "../harp-datasource-protocol/index-decoder.ts");
const index_worker_1 = __webpack_require__(/*! @here/harp-mapview-decoder/index-worker */ "../harp-mapview-decoder/index-worker.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
const GeoJsonDataAdapter_1 = __webpack_require__(/*! ./adapters/geojson/GeoJsonDataAdapter */ "../harp-vectortile-datasource/lib/adapters/geojson/GeoJsonDataAdapter.ts");
const GeoJsonVtDataAdapter_1 = __webpack_require__(/*! ./adapters/geojson-vt/GeoJsonVtDataAdapter */ "../harp-vectortile-datasource/lib/adapters/geojson-vt/GeoJsonVtDataAdapter.ts");
const OmvDataAdapter_1 = __webpack_require__(/*! ./adapters/omv/OmvDataAdapter */ "../harp-vectortile-datasource/lib/adapters/omv/OmvDataAdapter.ts");
const DecodeInfo_1 = __webpack_require__(/*! ./DecodeInfo */ "../harp-vectortile-datasource/lib/DecodeInfo.ts");
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "../harp-vectortile-datasource/lib/OmvDecoderDefs.ts");
const VectorTileDataEmitter_1 = __webpack_require__(/*! ./VectorTileDataEmitter */ "../harp-vectortile-datasource/lib/VectorTileDataEmitter.ts");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/adapters/geojson-vt/GeoJsonVtDataAdapter.ts":
/*!*************************************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/adapters/geojson-vt/GeoJsonVtDataAdapter.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonVtDataAdapter = void 0;
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const three_1 = __webpack_require__(/*! three */ "three");
const OmvUtils_1 = __webpack_require__(/*! ../../OmvUtils */ "../harp-vectortile-datasource/lib/OmvUtils.ts");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/adapters/geojson/GeoJsonDataAdapter.ts":
/*!********************************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/adapters/geojson/GeoJsonDataAdapter.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoJsonDataAdapter = void 0;
const ClipLineString_1 = __webpack_require__(/*! @here/harp-geometry/lib/ClipLineString */ "../harp-geometry/lib/ClipLineString.ts");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "../harp-geoutils/index.ts");
const three_1 = __webpack_require__(/*! three */ "three");
const OmvUtils_1 = __webpack_require__(/*! ../../OmvUtils */ "../harp-vectortile-datasource/lib/OmvUtils.ts");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/adapters/omv/OmvData.ts":
/*!*****************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/adapters/omv/OmvData.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2020-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeometryCommands = exports.FeatureAttributes = exports.visitOmvLayer = exports.visitOmv = exports.isClosePathCommand = exports.isLineToCommand = exports.isMoveToCommand = exports.CommandKind = void 0;
const three_1 = __webpack_require__(/*! three */ "three");
const vector_tile_1 = __webpack_require__(/*! ./proto/vector_tile */ "../harp-vectortile-datasource/lib/adapters/omv/proto/vector_tile.js");
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


/***/ }),

/***/ "../harp-vectortile-datasource/lib/adapters/omv/OmvDataAdapter.ts":
/*!************************************************************************!*\
  !*** ../harp-vectortile-datasource/lib/adapters/omv/OmvDataAdapter.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmvDataAdapter = exports.asGeometryType = void 0;
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "../harp-datasource-protocol/index-decoder.ts");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "../harp-utils/index.js");
const Long = __webpack_require__(/*! long */ "../../node_modules/long/src/long.js");
const three_1 = __webpack_require__(/*! three */ "three");
const OmvDataFilter_1 = __webpack_require__(/*! ../../OmvDataFilter */ "../harp-vectortile-datasource/lib/OmvDataFilter.ts");
const OmvDecoderDefs_1 = __webpack_require__(/*! ../../OmvDecoderDefs */ "../harp-vectortile-datasource/lib/OmvDecoderDefs.ts");
const OmvPoliticalViewFeatureModifier_1 = __webpack_require__(/*! ../../OmvPoliticalViewFeatureModifier */ "../harp-vectortile-datasource/lib/OmvPoliticalViewFeatureModifier.ts");
const OmvUtils_1 = __webpack_require__(/*! ../../OmvUtils */ "../harp-vectortile-datasource/lib/OmvUtils.ts");
const StyleSetDataFilter_1 = __webpack_require__(/*! ../../StyleSetDataFilter */ "../harp-vectortile-datasource/lib/StyleSetDataFilter.ts");
const OmvData_1 = __webpack_require__(/*! ./OmvData */ "../harp-vectortile-datasource/lib/adapters/omv/OmvData.ts");
const vector_tile_1 = __webpack_require__(/*! ./proto/vector_tile */ "../harp-vectortile-datasource/lib/adapters/omv/proto/vector_tile.js");
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
/******/ 			"datasource_geojson_visibility": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/datasource_geojson_visibility.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=datasource_geojson_visibility_bundle.js.map