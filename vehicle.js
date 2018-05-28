var Vehicle = (function () {
    "use strict";

    const MIN_MAKE_LENGTH = 2;
    const MAX_MAKE_LENGTH = 25;

    const MIN_MODEL_LENGTH = 2;
    const MAX_MODEL_LENGTH = 25;

    const LICENSE_NUM_LENGTH = 8;

    class Vehicle {
        constructor(make, model, licenseNum) {
            this.make = make;
            this.model = model;
            this.licenseNum = licenseNum;
            this._miliage = 0;
        }

        set make(value) {
            _validateStringLength(
                value, MIN_MAKE_LENGTH, MAX_MAKE_LENGTH, 'make');
            _validateType(value, 'string');

            this._make = value;
        }

        get make() {
            return this._make;
        }

        set model(value) {
            _validateStringLength(
                value, MIN_MODEL_LENGTH, MAX_MODEL_LENGTH, 'model');
            _validateType(value, 'string');

            this._model = value;
        }

        get model() {
            return this._model;
        }

        set licenseNum(value) {
            _validateStringLength(
                value, LICENSE_NUM_LENGTH, LICENSE_NUM_LENGTH, 'licenseNum');
            _validateType(value, 'string');

            this._licenseNum = value;
        }

        get licenseNum() {
            return this._licenseNum;
        }

        get miliage() {
            return this._miliage;
        }

        drive(distance) {
            // TODO: Validate distance
            this._miliage += distance;
        }
    }

    function _validateStringLength(str, min, max, prop) {
        if (str.length < min || str.length > max) {
            throw new RangeError(
                `Invalid range for vehicle's ${prop}: ${str} -> ${str.length}. Range - [${min}-${max}]`);
        }
    }

    function _validateType(value, expectedType, prop) {
        if (typeof (value) !== expectedType) {
            throw new TypeError(`Invalid ${prop} type. Type was expected to be ${expectedType}`);
        }
    }

    return Vehicle;
}());