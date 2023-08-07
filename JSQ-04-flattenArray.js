function flattenArray(arr) {
    const flattened = [];

    function flatten(arr) {
        for (const element of arr) {
            if (Array.isArray(element)) {
                // If the element is an array, recursively flatten it
                flatten(element);
            } else {
                // If the element is not an array, add it to the flattened array
                flattened.push(element);
            }
        }
    }

    flatten(arr);
    return flattened;
}

// Test the function with the given input
const input = [1, 2, 3, [4, 5, [6, 7]], 8, 9];
const output = flattenArray(input);
console.log(output); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
