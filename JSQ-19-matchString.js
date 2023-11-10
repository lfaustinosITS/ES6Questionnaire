function matchPattern(pattern, text) {
    let patternIndex = 0;
    let textIndex = 0;
    let start = -1;

    while (textIndex < text.length) {
        //Search for pattern matches within the text
        if (patternIndex < pattern.length && (pattern[patternIndex] === text[textIndex] || pattern[patternIndex] === '*')) {
            if (start === -1) {
                if (patternIndex === 0) {
                    start = textIndex;
                }
            }
            ;
            patternIndex++;
            textIndex++;
        } else if (patternIndex === pattern.length) {//Stop when complete pattern is found
            break

        } else if (textIndex === text.length - 1) {//Stop when the text is finished without finding the pattern
            return null;
        
        }else if (pattern[0] === text[textIndex]){//If the pattern does not match, but is the first letter of the pattern, start the search again
            start=textIndex;
            textIndex++;
            patternIndex=1;
            
        } else {
            textIndex++;//Continue the search
            if(start!==-1){
                start++;}//If the pattern has '*' at the start, the beginning of the pattern is moved one place

            if (pattern[patternIndex - 1] !== '*') {//Restart the search if the pattern is not complete
                patternIndex = 0;
                start = -1
            }
        }
    }
    if (patternIndex === pattern.length) {
        const end = start + pattern.length - 1;
        const matchedPart = text.substring(start, end + 1); // Extract the matched part of the string
        return matchedPart;
    } else {
        return null;
    }


}

// Example:

console.log(matchPattern("t**o","tatototiao"));// Output: tato
console.log(matchPattern("to", "tato"));// Output: to
console.log(matchPattern("t*o", "tato"));// Output: null

console.log(matchPattern("lo", "lllllllllo"));// Output: lo
console.log(matchPattern("**o", "llllllllllo"));// Output: llo

console.log(matchPattern("a*c", "zykabcd")); // Output: abc
console.log(matchPattern("a*b", "zxyabcd")); // Output: null
console.log(matchPattern("**a***", "zcvcabcd")); // Output: vcabcd
console.log(matchPattern("a****", "zxcabcd"));  // Output: null
