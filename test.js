(function() {
    "use strict";

    var vehicle1 =  new Vehicle('VW', 'up', 'CA1111CA');
    vehicle1.drive(123);
    console.log(vehicle1.miliage);

    var vehicle2 =  new Vehicle('VW', 'up', 'CA2222CA');
    vehicle2.drive(123);
    console.log(vehicle2.miliage);

    vehicle1.drive(124);
    console.log(vehicle1.miliage);
    debugger;
    vehicle2.drive(556);
    console.log(vehicle2.miliage);
    
}());