// PROPERTIES

class Person {
  firstName: string;
  lastName: string;
}

let user: Person = new Person();
user.firstName = "Willy";
user.lastName = "Harry";

class User {
  firstName: string;
  lastName: string;

  say() {
    console.log("Hello", this.firstName);
  }
}

let ken: User = new User();

ken.firstName = "Ken";
ken.say();

//Constructors

class Game {
  name: string;
  maker: string;
  constructor(name: string, maker: string) {
    (this.name = name), (this.maker = maker);
  }
}

let battleShip: Game = new Game('Battleship', 'Hasbro');

console.log(battleShip)

// Inheritance

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();


myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Kia';

// console.log({myCar});

class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = false;
myMotorcycle.topSpeed = 250;

console.log({myMotorcycle});

// Accessors

class Store {
  constructor(public name: string, public city: string){
  }
}

let ikea: Store = new Store('Ikea', 'Chicago');

console.log({ikea});

class Employee extends Person {
  private _salary: number;
  public badgeId: number;
  schedule: string[];

  getSalary(): number {
  return this._salary 
}

  setSalary(newSal: number) {
    this._salary = newSal;
  }

}

let newEmployee: Employee = new Employee();

newEmployee.badgeId = 83838;
newEmployee.schedule = ['test']
newEmployee.setSalary(30000);
console.log(newEmployee.getSalary()) 