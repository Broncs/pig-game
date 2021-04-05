'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time,
    address,
    number = 'S/N',
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} n: ${number}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(` here is your delicios pasta with ${ing1} , ${ing2} ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//
// console.log('------or ----');
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 20;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;

// console.log(guests1);
// console.log(guests2);

// console.log('------ AND -----');

// console.log(0 && 'jonas');
// console.log('jonas' && 0);

// console.log('hello' && 23 && null && 'jonas');

// practical
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushRoom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('frango', 'catupiry');

// console.log('' || ' bla bla bla');
// console.log([] && 'This will return bcs arrays are true');
// console.log(0 && 'This will NOT return bcs 0 is falsy');
// console.log('' || null || 'this is the last,will return even if is falsy , ');

/////////////  rest patters and parameters ///////

// 1) destructuing
//Spread, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// //Rest, because on Left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [pizza, , risoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risoto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 4, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'jonas';
// const letters = [...str];
// console.log(...letters);

// const ingredients = [
//   prompt('Lets make pasta! Ingredient 1? '),
//   prompt('Ingredient 2? '),
//   prompt('Ingredient 3? '),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedin: 'baco', ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// console.log(`${...str} bla bla `); // this will not work !

// restaurant.orderDelivery({
//   time: '22:10',
//   address: 'bla bla bla',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;

// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objs, }
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arrr = [1, 2, 3, 4, [5, 6, 7]];
// const [a, b, c, d, [e, j, k], as = 'jaca'] = arrr;
// console.log(a, b, c, d, e, j, k, as);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6, ['a', 'b']]];

// const [i, , j] = nested;

// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// const [i, , [j, k, [sa, sb]]] = nested;

// console.log(i, j, k, sa, sb);

// //default values
// const [ba, ca, ra = 1] = [8, 9];
// console.log(ba, c, ra);
