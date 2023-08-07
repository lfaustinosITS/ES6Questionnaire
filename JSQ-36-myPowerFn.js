function myPowerFn(base) {
    return function (exponent) {
        return Math.pow(base, exponent);
    };
}

// Example:
var n = myPowerFn(3);
console.log(n(2)); // Output: 9 (3^2)
