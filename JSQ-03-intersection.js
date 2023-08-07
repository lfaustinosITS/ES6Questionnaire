function getIntersection(arr1, arr2) {
    const intersection = [];
    const frequencyMap = {};

    // Create a frequency map for elements in the second array
    for (const num of arr2) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Iterate through the first array and check for common elements
    for (const num of arr1) {
        if (frequencyMap[num] > 0) {
            intersection.push(num);
            frequencyMap[num]--;
        }
    }

    return intersection;
}

// Test the function with the given input
const arr1 = [2, 3, 5, 3];
const arr2 = [3, 4, 3, 5, 3, 6, 8];
const result = getIntersection(arr1, arr2);
console.log(result); // Output: [3, 5, 3]
