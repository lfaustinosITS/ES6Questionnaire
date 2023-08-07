function tripletsWithZeroSum(arr) {
    const triplets = [];
    function formatCoordinates(x, y, z) {
        return `(${x}, ${y}, ${z})`;
    }
    // Take the sum of each pair of numbers in the array
    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            //Find the missing number to sum zero in the following items in the array
            let q = -arr[i] - arr[j];
            if (arr.includes(q)) {
                arr.forEach((value, index) => {//Find if each element appears more than once
                    if (value === q && index > j) {
                        triplets.push(formatCoordinates(arr[i], arr[j], arr[index]));
                        return;
                    }
                })

            }
        }
    }

    return triplets;
}
//Exxample:
const input = [3, 2, 1, 0, -3, 2, 2, -2];
const result = tripletsWithZeroSum(input);
console.log(result);
