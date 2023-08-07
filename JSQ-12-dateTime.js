
Date.prototype.addDays = function (days) {
    const newDate = new Date(this);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
};

// Example:
const today = new Date();
const tomorrow = today.addDays(1); // Add one day to the current date
const yesterday = today.addDays(-1); // Subtract one day from the current date

console.log(today); // Output: Current date and time
console.log(tomorrow); // Output: Date and time of tomorrow
console.log(yesterday); // Output: Date and time of yesterday
