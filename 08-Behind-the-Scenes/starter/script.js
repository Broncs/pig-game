'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // create new variable with same name as outer scope's variable !
      const firstName = 'steven';

      // reassign outer function
      output = 'NEW OUTPUT !';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = 'jonas';
// calcAge(1991);

// add(1,2)
// function add(a, b) {
//   console.log(a + b);
// }

//variables hoisting
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'jhonatan'; //  are hoisted with undefined ;
let job = 'teacher'; // TDZ !!!  the top block until the declaration
const year = 1991;

//functions hoisting

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// // example error
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`all products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAgeee = function (birth) {
//   console.log(2020 - birth);
//   console.log(this);
// };

// calcAgeee(1995);

// const calcAgeeeArrow = birth => {
//   console.log(2020 - birth);
//   console.log(this);
// };

// calcAgeeeArrow(1995);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// // jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;

// f(); // here it's just a regular function, and do not have a this

// const jonas = {
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // const self = this; // self or that
//     // const isMililenial = function () {
//     //   console.log(self); // undefined ,this inside a function call  the THIS keyword must be undefined .
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMililenial();

//     const isMililenial = () => {
//       console.log(this); //not undefined bcs this arrow function use its parent scope , and in that the THIS key word is jonas
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMililenial();
//   },

//   greet: () => {
//     console.log(this); // global this
//     console.log(`hi ${this.firstName}`); //undefined
//   },
// };

// jonas.calcAge();

// const addExprr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// var addArroww = (a, b) => {
//   console.log(arguments); //  arguments is not defined
//   return a + b;
// };
// addArroww(1, 2, 3);

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const mee = {
//   name: 'jonas',
//   age: 30,
// };

// const friend = mee;

// friend.age = 27;

// console.log('friend: ', friend);
// console.log('mee: ', mee);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'davis';

// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'jessica',
//   lastName: 'williams',
//   age: 27,
// };

// const marriedJessica = jessica;

// marriedJessica.lastName = 'Davis';

// console.log('before marriage: ', jessica);
// console.log('after marriage: ', marriedJessica);

const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('john');
console.log('before marriage: ', jessica2);
console.log('after marriage: ', jessicaCopy);
