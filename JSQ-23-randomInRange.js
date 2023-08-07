function getRandomIntInRange(min, max) {
    if (min > max) {
        throw new Error("The minimum value must be less than or equal to the maximum value.");
    }

    const range = max - min + 1;
    const shuffledNumbers = Array.from({ length: range }, (_, index) => index + min);//Create an array with integers from min to max

    function getRandomIndex() {
        return Math.floor(Math.random() * shuffledNumbers.length);
    }

    function generateUniqueNumber() {
        if (shuffledNumbers.length === 0) {
            throw new Error("All possible numbers within the range have been generated.");
        }

        const randomIndex = getRandomIndex();
        const uniqueNumber = shuffledNumbers.splice(randomIndex, 1)[0];//Extrac selected number from the array
        return uniqueNumber;
    }

    return generateUniqueNumber;
}

// Example
const minNumber = 1;
const maxNumber = 10;
const generateRandomNumber = getRandomIntInRange(minNumber, maxNumber);

for (let i = 0; i < (maxNumber - minNumber + 2); i++) {
    console.log(generateRandomNumber());
}
