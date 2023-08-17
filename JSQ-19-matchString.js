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
                start = textIndex - patternIndex; //Adjust index when there are '*' at the beginning
            }
            patternIndex++;
            textIndex++;


        } else if (patternIndex === pattern.length) {//Stop when complete pattern is found
            break
        } else if (textIndex === text.length - 1) {//Stop when the text is finished without finding the pattern
            return null;
        } else {
            textIndex++;
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
console.log(matchPattern("a*c", "zykabcd")); // Output: abc
console.log(matchPattern("a*b", "zxyabcd")); // Output: null
console.log(matchPattern("**a***", "zcvcabcd")); // Output: vcabcd
console.log(matchPattern("a****", "zxcabcd"));  // Output: null
