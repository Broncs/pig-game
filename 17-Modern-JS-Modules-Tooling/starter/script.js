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
/*
import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('apples', 2);
add('bread', 2);

console.log(cart);
*/

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
