var Garage = (function () {
    "use strict";

    const MIN_NAME_LENGTH = 3;
    const MAX_NAME_LENGTH = 40;

    const MIN_VEHICLE_COUNT = 0;
    const MAX_VEHICLE_COUNT = 100;

    class Garage {
        constructor(name, maxVehicleCount) {
            this.name = name;
            this.maxVehicleCount = maxVehicleCount;
            this.vehicles = [];
        }

        get currentVehicleCount() {
            return this.vehicles.length;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            Validator.validateStringLength(value, MIN_NAME_LENGTH, MAX_NAME_LENGTH, 'name');
            Validator.validateType(value, 'string');
            this._name = value;
        }

        get maxVehicleCount() {
            return this._maxVehicleCount;
        }

        set maxVehicleCount(value) {
            Validator.validateNumberRange(value, MIN_VEHICLE_COUNT, MAX_VEHICLE_COUNT, 'maxVehicleCount');
            this._maxVehicleCount = value;
        }

        parkVehicle(vehicle) {
            Validator.validateInstance(vehicle, Vehicle);
            if (this.currentVehicleCount < this.maxVehicleCount) {
                this.vehicles.push(vehicle);
            } else {
                console.log('Garage limit reached!');
            }
        }

        removeVehicle(license) {
            var foundIndex = -1;
            for (let i = 0; i < this.vehicles.length; i++) {
                var current = this.vehicles[i];
                if (current.licenseNum.toUpperCase() === license.toUpperCase()) {
                    foundIndex = i;
                    break;
                }
            }

            if (foundIndex >= 0) {
                this.vehicles = this.vehicles.splice(foundIndex, 1);
            } else {
                console.log(`Vehicle with license: ${license} was not found!`);
            }
        }

        getVehiclesListSorted() {
            var sorted = this.vehicles.sort((v1, v2) => {
                return v1.make > v2.make;
            });

            return sorted
                        .map(v => v.toString())
                        .join('\n');
        }

        filterVehicle(filter) {
            return  this.vehicles
                .filter(v => v.make == filter || v.model == filter || v.licenseNum == filter);
        }
    }

    return Garage;
}());