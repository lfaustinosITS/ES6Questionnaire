function removeSpecificElements(arr, elementsToRemove) {
    const filteredArray = arr.filter((element) => !elementsToRemove.includes(element));//This filter leaves the elements that are not in elementsToRemove

    return filteredArray;
}

const originalArray = [1, 2, 3, 4, 5];
const elementsToRemove = [2, 4];

const newArray = removeSpecificElements(originalArray, elementsToRemove);

console.log(newArray); // Output: [1, 3, 5]
