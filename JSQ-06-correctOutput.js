function addMissingMonth(input) {
    const monthsInOrder = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const inputArray = input.split(" ");

    const resultArray = [];

    let c = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let a = monthsInOrder.indexOf(inputArray[i]);//Locate the index of the month in monthsinOrder
        resultArray.push(inputArray[i]);
        if (monthsInOrder[a + 1] && inputArray[i + 1] && inputArray[i + 1] !== monthsInOrder[a + 1]) {
            resultArray.push(monthsInOrder[a + 1])
        }
        else if (a === 11 && inputArray[i + 1] !== monthsInOrder[0]) {
            resultArray.push(monthsInOrder[0])
        } else if (i === inputArray.length - 1) {
            resultArray.push(monthsInOrder[a + 1])
        } else {

        }
    }
    // for (month of inputArray) {
    //     let b = monthsInOrder.indexOf(month);//The condition b-a !==0 is to role out the case where there is only one month in inputArray
    //     if (b - a > -11 && a === 11 && b-a !==0) {//If it's December and it's not after January, put January
    //         resultArray.push(monthsInOrder[0]);console.log('a');
    //     }
    //     else if (b - a !== 1 && b !== 11 && b - a !== 0 && resultArray[resultArray.length-1]!== monthsInOrder[a + 1]) {//If it is not December and they are not consecutive, put the month following the last added
    //         resultArray.push(monthsInOrder[a + 1]);console.log('b');
    //     }
    //     resultArray.push(month);//Add the month being analyzed
    //     if (c === inputArray.length - 1 || (b-a === 0 && c !== inputArray.length - 1) ) {//If it's the last month on input, put the month following the last added
    //         if (b === 11) {
    //             b = -1;
    //         }
    //         resultArray.push(monthsInOrder[b + 1]);console.log('c');
    //     }

    //     a = b;
    //     c++;
    //     ;
    // }
    const output = resultArray.join(" ");
    return output;
}

// Test the function
const input1 = "June June April April January January December December";
const output = addMissingMonth(input1);
console.log(output);

const input2 = "January February March January February March"
const output2 = addMissingMonth(input2);
console.log(output2);

const input3 = "January"
const output3 = addMissingMonth(input3);
console.log(output3);