// export module
console.log('Export module');

const shippingCost = 10;
const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart `);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalQuantity, totalPrice };
