Array.prototype.duplicate = function () {
    return [...this, ...this];// Put two copies of the original array into a new array
};

const originalArray = [1, 2, 3, 4];
const duplicatedArray = originalArray.duplicate();
console.log(duplicatedArray); // Output: [1, 2, 3, 4, 1, 2, 3, 4]