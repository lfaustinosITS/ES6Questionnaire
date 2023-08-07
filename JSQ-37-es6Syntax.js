
String.prototype.exclamation = function () {
    return `${this}!`;
};

console.log("hello".exclamation()); // Output: "hello!"
console.log("hello world".exclamation()); // Output: "hello world!"

const add = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(add(2, 5)); // Output: 7
console.log(add(7, 11)); // Output: 18
console.log(add(12, 8, 5, 6)); // Output: 31
