function getRandomInt(min, max) {
    if (min >= max) {
      throw new Error("The minimum value must be less than or equal to the maximum value.");
    }
    function gcd(x,y){//Greatest common divisor function
      let M=Math.max(x,y)
      let m=Math.min(x,y)
      while(m!==0){
        let temp = m;
        m=M%m;
        M=temp
      }
      return M
    }
    const range = max - min + 1;
    const inf = Math.floor(range/3);
    let currentIndex = range;
    function  randomNumber() { return Math.floor(Math.random() * (range))};
    let a = randomNumber();
    while (gcd(range,a)!==1||a<inf){//We are looking for a number that is coprime with the range, to avoiding duplicate numbers, and greater than one-third of the range.
      a = randomNumber();
    }
    
    let b= randomNumber();

    let sequenceElement = 1;
    function generateNumbers() {
      if (currentIndex <= 0) {
        throw new Error("Not more random numbers");
      }
      pseudoRandom = (a*sequenceElement+b)%range//We created a linear function that generates all numbers modulo the range
      
      
      sequenceElement++
      currentIndex--;
      return pseudoRandom + min
    };
    
    return generateNumbers;

  }
  
let randomFunction = getRandomInt(-25,-1);
for(let i =0;i<20;i++){
console.log(randomFunction())
  }