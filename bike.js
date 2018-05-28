var Bike = (function () {
    "use strict";

    const DEFAULT_FUEL_TYPE = 'PETROL';
    class Bike extends Vehicle {
        constructor(make, model, licenseNum, tankVol, type) {
            super(make, model, licenseNum, DEFAULT_FUEL_TYPE, tankVol);
            this.type = type;
        }

        get type() {
            return this._type;
        }

        set type(value) {
            this._type = value;
        }
    }

    return Bike;
}());