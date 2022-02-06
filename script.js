'use strict';
// // // constructor function !== not arrow function because they don't have their own this keyword
// const Person = function(firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const david = new Person('David', 1991);
// console.log(david);
// // 1. A new {} is created
// // 2. function is called, this === new {}
// // 3. new {} linked to prototype
// // 4. constructor function automatically returns new {}
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 2001);
// console.log(matilda, jack);

// console.log(david instanceof Person); //true

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function() {
//   console.log(2022 - this.birthYear);
// };

// Person.hey = function() {
//   console.log('Hey there 👋');
// };

// Person.hey();

// // // works because prototype of david is Person.prototype
// // david.calcAge();
// // console.log(david.__proto__);
// // // console.log(david.__proto__ === Person.prototype); true

// // console.log(Person.prototype.isPrototypeOf(david)); //true

// // Person.prototype.species = 'Homo Sapiens';
// // console.log(david);
// // console.log(david.species);
// // console.log(david.hasOwnProperty('firstName'));
// // console.log(david.hasOwnProperty('species'));

// // console.log(david.__proto__.__proto__.__proto__);
// // console.dir(Person.prototype.constructor);

// // const arr = [2, 31, 5235, 346, 35, 35]; // new Array === []
// // console.log(arr.__proto__ === Array.prototype); // true
// // console.log(arr.__proto__.__proto__);

// // Array.prototype.unique = function() {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// // const h1 = document.querySelector('h1');
// // console.dir(h1);

// // Coding Challenge 1
// // Use a constructor function to implement a 'Car'

// // const Car = function(make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function() {
// //   this.speed += 10;
// //   console.log(`${this.speed} km/h`);
// // };

// // Car.prototype.break = function() {
// //   this.speed -= 5;
// //   console.log(`${this.speed} km/h`);
// // };

// // const bmw = new Car('BMW', 120);
// // const mercedes = new Car('Mercedes', 95);
// // bmw.accelerate();
// // bmw.accelerate();
// // mercedes.break();
// // mercedes.break();

// // // Class Expression
// // const PersonCl = class {};

// // Class Declaration
// // classes are functions
// class PersonCl {
//   // constructor function
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Method will be added to .prototype property of PersonCL which is prototype of object created by class
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   // set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     name.includes(' ')
//       ? (this._fullName = name)
//       : alert(`${name} is not a full Name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1994);
// console.log(jessica.fullName);
// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype); //true
// console.log(jessica.age);

// // jessica.greet();

// // 1. Classes are not hoisted
// // => cannot be used before they are declared
// // 2. First class citizens === functions
// // cann be passsed into functions and returned from functions
// // Classes are alwys executed in "strict mode"

// // get and set values
// const account = {
//   owner: 'David',
//   movements: [1234, 2131, 134, -12413, 80000],

//   get latestMov() {
//     return this.movements.slice(-1).pop();
//   },
//   // any setter method needs EXACTLY one parameter
//   set latestMov(mov) {
//     return this.movements.push(mov);
//   }
// };

// console.log(account.latestMov);
// account.latestMov = 65000;
// console.log(account.movements);

// Object.create
// => prototypal inheritance
// no prototype properties
// no constructor functions
// no "new" operator
// we can set the prototype to any object we want

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const david = Object.create(PersonProto);
// david.name = 'David';
// david.birthYear = 1991;
// david.calcAge();

// console.log(david.__proto__ === PersonProto); //true

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2002);
// sarah.calcAge();

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.speed} km/h`);
//   }

//   break() {
//     this.speed -= 5;
//     console.log(`${this.speed} km/h`);
//   }

//   get speedUS() {
//     return `${this.speed / 1.6} mph`;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//     return `${this.speed} km/h`;
//   }
// }

// const bmw = new CarCl('BMW', 120);

// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// bmw.break();

// console.log(bmw.speedUS);
// bmw.speedUS = 100;
// console.log(bmw);

// Inheritance ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // Acessor Properties, get and set value
  get age() {
    return 2022 - this.birthYear;
  }

  // Usefull for Data Validation
  set fullName(name) {
    // setter created for property that already exists
    // avoid max call stack esceeded error
    // new Property name _
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
// Linking prototypes behind scenes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // instead of PersonCl.call()
    // Allways needs to happen first so we can access this keyword
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2022 -
        this
          .birthYear} years old, but as a student I feel more like I'm ${2022 -
        this.birthYear +
        10}.`
    );
  }
}

const martha = new StudentCl('Martha Jones', 1991, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // Fake encapsulation
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface to our Objects (API)
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    // Making a mtheod chainable
    return this;
  }

  widthdraw(val) {
    this.deposit(-val);
    return this;
  }
}

const acc1 = new Account('David', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.widthdraw(140);
console.log(acc1.getMovements());

// Chaining
acc1
  .deposit(300)
  .deposit(500)
  .widthdraw(35);
