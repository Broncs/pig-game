'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties .
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
// const jhonatan = new Person('Johnatan', 1995);
// Person.hey = function () {
//   console.log('Hey There 😂');
// };
// console.dir(Person);
/*
console.log(jhonatan);
const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1975);

console.log(matilda);
console.log(jack);

console.log(jhonatan instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jhonatan.calcAge();
matilda.calcAge();

console.log(jhonatan.__proto__);
console.log(jhonatan.__proto__ === Person.prototype);

// props;
Person.prototype.species = 'home sapiens';

// Object.prototype ( top of prototype chain)
console.log(jhonatan.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 8, 7, 8];

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.brake());
console.log(bmw.accelerate());
*/

//class expression
// const Personcl = class{

// }
/*
// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a propery that already exist .
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name !`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there ');
    console.log(this);
  }
}

PersonCl.hey();
const john = new PersonCl('Jhonatan Mendes', 1995);

console.log(john);
john.calcAge();
console.log(john.age);

console.log(john.__proto__ === PersonCl.prototype);

john.greet();

const walter = new PersonCl('Walter white', 1995);

const account = {
  owner: 'jonas',
  movement: [200, 150, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movement);
*/

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();
console.log(steven.__proto__);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 2000);
sarah.calcAge();
