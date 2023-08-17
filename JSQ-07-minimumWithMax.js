function maxArray(array){
    return Math.max(...array);
}

array = [-2, 3, 4, 5, -7, 2, 1];
console.log(maxArray(array));


// function minimunWithMax(array) {
//     array.forEach((element, index, array) => {
//         array[index] = element * (-1);//Multiply all numbers by -1 to make the maximum minimum
//     });
//     return Math.max(...array) * (-1)//Take the maximun of the inverted array and multiply it by -1
// }

// array = [-2, 3, 4, 5, -7, 2, 1];
// console.log(minimunWithMax(array));