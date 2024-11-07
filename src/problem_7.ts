class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getCarAge() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}
const myCar = new Car("Honda", "civic", 2018);
console.log(`${myCar.getCarAge()} (assuming current year is 2024)`);
