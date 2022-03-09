interface Vehicle {
    name: string,
    year: Date,
    broken: boolean,
    summary(): string
}

interface Summary {
    summary(): string
}

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const oldCivic : Vehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    }
};

const printSummary = (item: Summary ): void => {
   console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);