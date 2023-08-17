function removeSpecificElements(arr, elementsToRemove) {
    for (const element of elementsToRemove) {
        const index = arr.indexOf(element);
        if (index !== -1) {
            arr.splice(index, 1); // Remove the element from the array
        }
    }
}

const originalArray = [1, 2, 3, 4, 5];
const elementsToRemove = [2, 4];

removeSpecificElements(originalArray, elementsToRemove);

console.log(originalArray); // Output: [1, 3, 5]
