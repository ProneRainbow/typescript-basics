const carMakers = ['ford', 'toyota', 'nissan'];
const dates = [new Date(), new Date()]

//Nested string array
const carsByMake: string[][] = []

//Help with inference whe extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Preventing incompatible values

//carMakers.push(100);

//Help with map
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

//Flexible types
const importantDates: (string | Date)[] = [];

importantDates.push("2030-10-10");
importantDates.push(new Date());




