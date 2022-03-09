class Vehicle {
    constructor( public color: string) {}
    protected static honk(): void {
        console.log("Beep");
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private static drive(): void {
        console.log("Chugga chugga")
    }

    startDrivingProcess(): void {
        Car.drive();
        Car.honk();
    }
}

const vehicle = new Car(4,"orange");
vehicle.startDrivingProcess();