
function getRandomIntInRange(min, max,middle = null) {
    let oldMiddle = 0;
    if (min > max) {
        throw new Error("The minimum value must be less than or equal to the maximum value.");
    } 

    function generateUniqueNumber() {
         if (min > max) {
            throw new Error("The minimum value must be less than or equal to the maximum value.");
        } 
        if (min === max){
            min++
            return max 
        }else if (middle===min | middle===max){
            throw new Error("Not more random numbers");

        }else if (middle){
            if (max-middle>min-middle){
                max = middle;
            } else {
                min = middle
            }
        }
              
        const randomIndex = Math.floor(Math.random() * (max - min-1)+1);;
        const uniqueNumber = min + randomIndex;
        oldMiddle = middle;
        middle = uniqueNumber;
        if (middle === oldMiddle){
            throw new Error("Not more random numbers");
        }


        

        return uniqueNumber;
    }

    return generateUniqueNumber;
}

// Example
const minNumber = 10;
const maxNumber = 120;
const generateRandomNumber = getRandomIntInRange(minNumber, maxNumber);

for (let i = 0; i < (maxNumber - minNumber + 2); i++) {
    console.log(generateRandomNumber());
}
