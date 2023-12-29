class Vehicle {
    //add code here
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    //add code here
    constructor(make, model, numberOfDoors) {
        super(make, model);
        this.numberOfDoors = numberOfDoors;
    }
    //add a method to describe the car
    describeCar() {
        return `This ${this.make} ${this.model} has ${this.numberOfDoors} doors.`;
    }
}

const car = new Car("Honda", "Civic", 4);

//uncomment this code to test:
console.log(car.describeCar()); // Output: This car is a 4-door Honda Civic.

if ("test" != "Test") {
    console.log("yayh");
}