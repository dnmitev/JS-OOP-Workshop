(function() {
    "use strict";

    var vehicle1 =  new Vehicle('VW', 'up', 'CA1111CA', 'electricity', 30);
    vehicle1.drive(123);
    vehicle1.loadFuel(50, 'electricity');
    console.log(vehicle1.fuelQty);

    var vehicle2 =  new Vehicle('VW', 'up', 'CA2222CA', 'PEtrol', 40);
    vehicle2.drive(123);
    vehicle2.loadFuel(50, 'petrol');    
    console.log(vehicle2.fuelQty);
    console.log(vehicle1.toString());
    console.log(vehicle2.toString());

}());