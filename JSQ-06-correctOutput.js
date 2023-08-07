function addMissingMonth(input) {
    const monthsInOrder = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const inputArray = input.split(" ");

    const resultArray = [];
    let a = monthsInOrder.indexOf(inputArray[0]);//Locate the index of the month in monthsinOrder
    let c = 0;
    for (month of inputArray) {
        let b = monthsInOrder.indexOf(month);
        if (b - a > -11 && a === 11) {//If it's December and it's not after January, put January
            resultArray.push(monthsInOrder[0]);
        }
        else if (b - a !== 1 && b !== 11 && b - a !== 0) {//If it is not December and they are not consecutive, put the month following the last added
            resultArray.push(monthsInOrder[a + 1]);
        }
        resultArray.push(month);//Add the month being analyzed
        if (c === inputArray.length - 1) {//If it's the last month on input, put the month following the last added
            if (b === 11) {
                b = -1;
            }
            resultArray.push(monthsInOrder[b + 1]);
        }

        a = b;
        c++;
        ;
    }



    const output = resultArray.join(" ");
    return output;
}

// Test the function
const input = "January February March January February March";
const output = addMissingMonth(input);
console.log(output);
