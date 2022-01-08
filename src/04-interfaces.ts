//! 2.14 - Properties
//* Overview
// Interfaces are often associated with the idea of coding with intent and defining what we're going to need for something before we get into the weeds of creating that thing. Let's look at a starter interface.

interface AnimalExample {
  name: string;
  numLegs: number;
}

//*No Instantiation
//! One rule of interfaces is that you can't instantiate them. Interfaces are NOT classes. The following would throw an error immediately:
// let a: Animal = new Animal();

//Interfaces aren't used to create objects. They are used to shape them. As the docs say: "One of TypeScript’s core principles is that type-checking focuses on the shape that values have."
//We impose an interface on an object or class to dictate certain aspects of how that object should be shaped.

//* Implementing An Interface

// interface Animal {
//     name: string;
//     numLegs: number;
// }

// let lassie: Animal = {
//     name: 'Lassie',
//     numLegs: 4,
//     type: 'dog',
//     breed: 'Collie',
//     age: 5
// };

//! 2.15 - Methods
//* Overview
// Interfaces have methods, but they can only have method signatures, not the implementation of the method. Let's review what a method signature is in TypeScript. Consider the following method:
// 
//1
// sayHelloToFirstname(name: string) : string {
//     //2
//     var someNum = 1 + 2;
//     var someOtherNum = 1 + 2;
//     return name;
// }
//* Analysis
// 1. This who line, up until the curly brace is the method/function signature. This includes the function's name, a name parameter and its type, and a return type of string.
// 2. The code within the curly braces is the method implementation. This is what is going to happen inside the function when it is called, and it includes the result.

//* Methods and Interfacts
// With that in mind, let's look back at interfaces. With a class, we could provide a full implementation of the method. In an interface, we simply create the method signature. Then, the object will provide its own implementation of the method, its own logic.

interface Product {
  name: string;
  price: number;
  stock: number;
  setTimeOfPurchase(d: Date);
}
//1
class Apples implements Product {
  name: 'Apples';
  price: 5.50;
  stock = 30;

  //2
  setTimeOfPurchase(d: Date) {
      console.log("Apples were purchased on ", d);
  }
}

//3
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));

//* Analysis
// 1. Notice that we are "implementing" an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
// 2. We implement the "setTimeOfPurchase" method in the class, and provide a basic implementation by logging the date to the console.
// 3. We then create a new instance of the "Apples" class and call the "setTimeOfPurchase" method.

//! START | Sharing Interface Types
//type is a keyword that allows us to create a new type that is a union of two or more types.
type id = Number; // adding "| undefined" to the end of the type allows us to have a type that is either a number or undefined.

interface UserObjInterface {
  id: id;
  username: string;
  avatar: string;
}

interface CommentObjInterface {
  id: id;
  user: UserObjInterface;
  text: string;
}

interface PostObjInterface {
  id: id;
  poster: UserObjInterface;
  title: string;
  text: string;
  comments: CommentObjInterface[];
}

// Posts -> hasMany -> Comments
const Posts: PostObjInterface[] = [
  {
      id: 1,
      poster: {
          id: 1,
          username: "user1",
          avatar: "user1.png",
      },
      title: "My first post",
      text: "Hello World",
      comments: [
          {
              id: 1,
              user: {
                  id: 3,
                  username: "user3",
                  avatar: "user3.png",
              },
              text: "Some comment!",
          },
          {
              id: 2,
              user: {
                  id: 2,
                  username: "user2",
                  avatar: "user2.png",
              },
              text: "Another comment!",
          },
      ],
  },
];
//! END | Sharing Interface Types

//! Interfaces and Classes
type Year = number | string;

interface Colors {
  interior: string;
  exterior: string;
}

interface CarInterface {
  year: Year;
  model: string;
  color: Colors;
  price: number;
  electric?: true;
  testDrive(): void;
}

class Car implements CarInterface {
  constructor(
      public year: Year, 
      public model: string, 
      public color: Colors,
      public price: number, 
      public electric?: true
      ) 
      {}

      testDrive() {
          console.log(`Test drove the ${this.model}`);
      }
}

class Tesla extends Car {
  private _owner: string = "Tesla Dealership";
  public electric: true = true;

  constructor(
      public year: Year,
      public model: string,
      public color: Colors,
      public price: number,
  ) {
      super(year, model, color, price);
  }

  purchase(price: number, purchaser: string) {
      if (price > this.price) {
          this.changeOwner(purchaser);
          console.log(`${this.model} has been purchased by ${this._owner} for $${price}`);
          return `The ${this.model} was purchased by ${purchaser} for ${price}.`;
          this.price = this.price - 15000;
      } else {
          console.log(`${this.model} was not purchased. You need to pay more than $${price}. You are short $${this.price - price}. `);
          return `The ${this.model} was not purchased. You need to pay more than $${price}. You are short $${this.price - price}.`;
      }
  }

  private changeOwner(newOwner: string) {
      this._owner = newOwner;
  }
}


let TeslaForSale = new Tesla(
  2019, 
  "Model S", 
      {
      interior: "black", 
      exterior: "red"}, 
  100000
);
//Shortcut to run: ctrl + alt + n
//! Error - Cannot access a private property.
// TeslaForSale._owner = "Me";
//! Error - Cannot access a private property.
// TeslaForSale._owner = "Me";
//! Not enough to purchase
// TeslaForSale.purchase(99999, "Me");

TeslaForSale.testDrive();
TeslaForSale.purchase(10000, "Me");
console.log({TeslaForSale});