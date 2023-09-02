function getRandomInt(min, max) {
    if (min >= max) {
      throw new Error("The minimum value must be less than or equal to the maximum value.");
    }
  
    const range = max - min + 1;
    let remainingNumbers = new Array(range);
  
    for (let i = 0; i < range; i++) {
      remainingNumbers[i] = min + i;//Make an array with all the numbers in the range
    }
  
    let currentIndex = range;
    let temporaryValue, randomIndex;//Variables to do the permutation
  
    return function() {
      if (currentIndex <= 0) {
        throw new Error("Not more random numbers");
      }
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      
      //Make te permutation between the random index and the last allowed index
      temporaryValue = remainingNumbers[currentIndex];
      remainingNumbers[currentIndex] = remainingNumbers[randomIndex];
      remainingNumbers[randomIndex] = temporaryValue;
      
      //Return the number with the random index at the last allowed index position
      return remainingNumbers[currentIndex];
    };
  }
  
  // Example:
  const min = 10;
  const max = 20;
  
  const getRandomUniqueInt = getRandomInt(min, max);
  
  for (let i = 0; i < (max-min)+2; i++) {
    const randomNum = getRandomUniqueInt();
    console.log(randomNum);
  }
  