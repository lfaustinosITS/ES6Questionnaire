function tripletsWithZeroSum(array){
    const triplets = [];
    function formatCoordinates(x,y,z){
        return `(${x}, ${y}, ${z})`;
    }
    array.sort((a, b) => a - b);
    
    let n = array.length;
    for (let i=0;i<n-1;i++){
        let l = i+1;
        let r = n-1
        let x = array[i];
        while(l<r){
            if (x+array[l]+array[r]===0){
                triplets.push(formatCoordinates(x, array[l], array[r]));
                r--;
            }else if (x+array[l]+array[r]<0){
                l++;
            }else if (x+array[l]+array[r]>0){
                r--;
            }
        }
    }
    if(triplets.length===0){
        return null;
    } 
     return triplets;
}

// function tripletsWithZeroSum(arr) {
//     const triplets = [];
//     function formatCoordinates(x, y, z) {
//         return `(${x}, ${y}, ${z})`;
//     }
//     // Take the sum of each pair of numbers in the array
//     for (let i = 0; i < arr.length - 3; i++) {
//         for (let j = i + 1; j < arr.length - 1; j++) {
//             //Find the missing number to sum zero in the following items in the array
//             let q = -arr[i] - arr[j];
//             if (arr.includes(q)) {
//                 arr.forEach((value, index) => {//Find if each element appears more than once
//                     if (value === q && index > j) {
//                         triplets.push(formatCoordinates(arr[i], arr[j], arr[index]));
//                         return;
//                     }
//                 })

//             }
//         }
//     }

//     return triplets;
// }
//Example:
const input = [3, 2, 1, 0, -3, 2, 2, -2];
const result = tripletsWithZeroSum(input);
console.log(result);
