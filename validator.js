var Validator = (function () {
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

    return {
        validateStringLength: _validateStringLength,
        validateType: _validateType
    };
}());