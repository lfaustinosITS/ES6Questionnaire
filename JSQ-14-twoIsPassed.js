function checkIfTwoIsPassed() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === 2) {
            return true;
        }
    }
    return false;
}

// Example:
console.log(checkIfTwoIsPassed(1, 3, 5)); // Output: false
console.log(checkIfTwoIsPassed(1, 2, 5)); // Output: true
