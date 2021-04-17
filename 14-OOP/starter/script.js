'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties .
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // NEVER DO THIS
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
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
/*
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
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`The new speed is ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`The new speed is ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  // set speedUS(speed) {
  //   return (this._speedUS = speed * 1.6);
  // }
}
const car1 = new CarCl('FORD', 120);
console.log((car1.speedUS = 100));
console.log(car1);
*/
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`
  );
};

const carOne = new EV('Tesla', 120, 23);

console.log(carOne);
carOne.accelerate();
carOne.accelerate();
carOne.chargeBattery(30);
carOne.accelerate();

carOne.brake();
carOne.brake();
*/
/*
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
    console.log(`Hey ${this.fullName}`);
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`my Name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('martha Jones', 2012, 'computer science');
martha.introduce();
martha.greet();
martha.calcAge();
*/
/*
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

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);

StudentProto.introduce = function () {
  console.log(`my Name is ${this.fullName} and I study ${this.course}`);
};

jay.init('Jay', 2010, 'computerscience');
jay.calcAge();
jay.introduce();
*/
/*
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protect property...
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public nethods ..
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.approveLoad(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4) private methods
  // #approveLoad(val) {
  approveLoad(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1.approveLoad(1000);
console.log(acc1);

// console.log(acc1.#moviments);

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
// console.log(acc1.getMovements());
*/
///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBaterry(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const carOne = new EVCl('Rivian', 120, 23);

console.log(carOne.accelerate().accelerate().accelerate().chargeBaterry(50));
*/
