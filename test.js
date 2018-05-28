(function() {
    "use strict";

    var vehicle1 =  new Car('VW', 'up', 'CA1111CA', 'electricity', 30, 5, 400);
    vehicle1.addLpg();
    console.log(vehicle1.hasLpg);
    var vehicle2 =  new Car('VW', 'up', 'CA2222CA', 'PEtrol', 40,3, 150);
    vehicle2.addLpg();
    console.log(vehicle2.hasLpg);

    console.log(vehicle1.toString());
    console.log(vehicle2.toString());
    debugger;

}());