'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties .
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jhonatan = new Person('Johnatan', 1995);
console.log(jhonatan);
const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1975);

console.log(matilda);
console.log(jack);

console.log(jhonatan instanceof Person);
