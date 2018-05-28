var Validator = (function () {
    function _validateStringLength(str, min, max, prop) {
        if (str.length < min || str.length > max) {
            throw new RangeError(
                `Invalid range for vehicle's ${prop}: ${str} -> ${str.length}. Range - [${min}-${max}]`);
        }
    }

    function _validateNumberRange(num, min, max, prop) {
        if (num < min || num > max) {
            throw new RangeError(
                `Invalid range for vehicle's ${prop}. Range - [${min}-${max}]`);
        }
    }

    function _validateType(value, expectedType, prop) {
        if (typeof (value) !== expectedType) {
            throw new TypeError(`Invalid ${prop} type. Type was expected to be ${expectedType}`);
        }
    }

    function _validateInstance(object, expectedInstance) {
        if (!(object instanceof expectedInstance)) {
            throw new Error(`Invalid instance.`);
        }
    }

    return {
        validateStringLength: _validateStringLength,
        validateNumberRange: _validateNumberRange,
        validateInstance: _validateInstance,
        validateType: _validateType
    };
}());