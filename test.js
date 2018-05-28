(function () {
    "use strict";

    var vehicle1 = new Car('Opel', 'Insignia', 'CA1111CA', 'electricity', 30, 5, 400);
    vehicle1.addLpg();
    console.log(vehicle1.hasLpg);
    var vehicle2 = new Car('Audi', 'a3', 'CA2222CA', 'PEtrol', 40, 3, 150);
    vehicle2.addLpg();
    console.log(vehicle2.hasLpg);

    console.log(vehicle1.toString());
    console.log(vehicle2.toString());

    var g = new Garage('asdas', 10);
    console.log(g);

    g.parkVehicle(vehicle1);
    console.log(g.currentVehicleCount);
    g.parkVehicle(vehicle2);
    console.log(g.currentVehicleCount);
    debugger;
    g.removeVehicle('CA2242CA');
    console.log(g.currentVehicleCount);
    debugger;
    
    console.log(g.getVehiclesListSorted());
    var found = g.filterVehicle('dasas');

    if (found && found.length) {
        console.log('FOUND!!!!');
    }
}());