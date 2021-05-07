// importing module
/*
import {
  addToCart,
  totalQuantity,
  totalPrice as price,
} from './shoppingCart.js';

addToCart('bread', 5);



console.log(totalQuantity);
console.log(price);
*/
// import * as ShoppingCart from './shoppingCart.js';

// console.log('importing module');
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('apples', 2);
add('bread', 2);

console.log(cart);

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart  (Shipping cost is ${shippingCost})`
    );
  };

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} prdered from supplier `);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apple', 4);
*/
/*
export.addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart  (Shipping cost is ${shippingCost})`
    );
  };
 
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
console.log('hi');

class Person {
  #greeting = 'hey';
  constructor(namee) {
    this.namee = namee;
    console.log(`${this.#greeting}, ${this.namee}`);
  }
}

const jonas = new Person('jonas');

console.log('jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
