var Vehicle = (function () {
    "use strict";

    const MIN_MAKE_LENGTH = 2;
    const MAX_MAKE_LENGTH = 25;

    const MIN_MODEL_LENGTH = 2;
    const MAX_MODEL_LENGTH = 25;

    const LICENSE_NUM_LENGTH = 8;

    const MAX_DISTANCE = 1000;

    const FUEL_TYPES = ['lpg', 'diesel', 'petrol', 'electricity'];

    class Vehicle {
        constructor(make, model, licenseNum, fuelType, tankVol) {
            this.make = make;
            this.model = model;
            this.licenseNum = licenseNum;
            this.fuelType = fuelType;
            this.tankVol = tankVol;

            this._miliage = 0;
            this._fuelQty = 0;
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

        get tankVol() {
            return `${this._tankVol}l.`;
        }

        set tankVol(value) {
            // TODO: validate
            this._tankVol = value;
        }

        get fuelType() {
            return this._fuelType.toUpperCase();
        }

        set fuelType(value) {
            if (FUEL_TYPES.indexOf(value.toLowerCase()) < 0) {
                throw new Error(`${value} was not found in ${FUEL_TYPES.join('|')}`)
            }

            this._fuelType = value;
        }

        get fuelQty() {
            return this._fuelQty;
        }

        drive(distance) {
            // TODO: Validate distance
            this._miliage += distance;
            if (this._miliage >= MAX_DISTANCE) {
                this._miliage = this._miliage - MAX_DISTANCE;
            }
        }

        loadFuel(fuelQty, fuelType) {
            // TODO: Validate fuelQty
            if (fuelType.toLowerCase() === this.fuelType.toLowerCase()) {
                this._fuelQty += fuelQty;
            } else {
                throw new Error(
                    `Loading fuel failed. Invalid fuel type: ${fuelType}. 
                    Expected fuel: ${this.fuelType}`);
            }
        }

        toString() {
            return `Make: ${this.make}; Model: ${this.model}; License: ${this.licenseNum}`;
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