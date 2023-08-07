function moveZeros(array) {
    let nonZeroIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {//Put all elements non zero in order
            array[nonZeroIndex] = array[i];
            nonZeroIndex++;
        }
    }

    while (nonZeroIndex < array.length) {
        array[nonZeroIndex] = 0;//Fill the array with zeros
        nonZeroIndex++;
    }

    return array
}

const array = [2, 0, 4, 5, 0, 2, 0, 0, 3]
console.log(moveZeros(array));