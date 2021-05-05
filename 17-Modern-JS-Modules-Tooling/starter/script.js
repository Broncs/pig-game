// importing module
import {
  addToCart,
  totalQuantity,
  totalPrice as price,
} from './shoppingCart.js';

import * as ShoppingCart from './shoppingCart.js';
console.log(ShoppingCart);

console.log('importing module');

addToCart('bread', 5);

console.log(totalQuantity);
console.log(price);
