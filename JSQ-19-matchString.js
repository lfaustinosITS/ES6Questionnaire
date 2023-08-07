function matchPattern(pattern, text) {
    let patternIndex = 0;
    let textIndex = 0;

    while (textIndex < text.length) {
        //Search for pattern matches within the text
        if (patternIndex < pattern.length && (pattern[patternIndex] === text[textIndex] || pattern[patternIndex] === '*')) {
            patternIndex++;
            textIndex++;

        } else if (patternIndex === pattern.length) {//Stop when complete pattern is found
            break
        } else if (textIndex === text.length - 1) {//Stop when the text is finished without finding the pattern
            return false;
        } else {
            textIndex++;
            if (pattern[patternIndex - 1] !== '*')//Restart the search if the pattern is not complete
                patternIndex = 0;
        }
    }


    return patternIndex === pattern.length;
}

// Example:
console.log(matchPattern("a*c", "zykabcd")); // Output: true
console.log(matchPattern("a*b", "zxyabcd")); // Output: false
console.log(matchPattern("*a*", "zcvcabcd")); // Output: true
console.log(matchPattern("a****", "zxcabcd"));  // Output: false
