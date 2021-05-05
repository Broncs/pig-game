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
