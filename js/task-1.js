let quantity = null;
let pricePerDroid = null;
let totalPrice = quantity * pricePerDroid;
const makeTransaction = message;
const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
quantity = 3;
pricePerDroid = 1000;
console.log(message);
 



console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
