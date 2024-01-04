const getSum = require('./get-sum');

const result = getSum(1, 10);
const anotherResult = getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const zeroResult = getSum();

console.log(result);
console.log(anotherResult);
console.log(zeroResult);
