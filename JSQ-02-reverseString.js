// Instance method to reverse a string
String.prototype.reverse = function () {
    let reversedString = '';
    for (let i = this.length - 1; i >= 0; i--) {
        reversedString += this.charAt(i);
    }
    return reversedString;
};

// Instance method to reverse words in a string
String.prototype.reverseWords = function () {
    const reversedWords = this.split(' ')
        .map(word => word.reverse())
        .join(' ');
    return reversedWords;
};

// Test the instance methods
const str1 = "hello world";
console.log(str1.reverse()); // Output: "dlrow olleh"
console.log(str1.reverseWords()); // Output: "olleh dlrow"

const str2 = "web development is fun";
console.log(str2.reverse()); // Output: "nuf si tnempoleved bew"
console.log(str2.reverseWords()); // Output: "bew tnempoleved si nuf"
