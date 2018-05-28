var Car = (function() {
    "use strict";

    const LPG_FUEL_ADD_TYPE = 'PETROL';

    class Car extends Vehicle {
        constructor(
            make, model, licenseNum, fuelType, 
            tankVol, doorsCount, trunkVol) {
            super(make, model, licenseNum, fuelType, tankVol);
            this.doorsCount = doorsCount;
            this.trunkVol = trunkVol;

            this._hasLpg = false;
        }

        get doorsCount() {
            return this._doorsCount;
        }

        set doorsCount(value) {
            // TODO: validate input value
            this._doorsCount = value;
        }
        
        get trunkVol() {
            return this._trunkVol;
        }

        set trunkVol(value) {
            // TODO: validate if there is time
            this._trunkVol = value;
        }

        get hasLpg() {
            return this._hasLpg;
        }

        toString() {
            return `${super.toString()}; Doors: ${this.doorsCount}; Trunk: ${this.trunkVol}l`;
        }

        addLpg() {
            if (this.fuelType.toUpperCase() == LPG_FUEL_ADD_TYPE) {
                this._hasLpg = true;
            }
        }
    }

    return Car;
}());