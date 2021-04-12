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

const jhonatan = new Person('Johnatan', 1995);
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

console.log(jhonatan);
