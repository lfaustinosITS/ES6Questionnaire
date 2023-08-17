
function addDaysToDate(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

// Example:
const today = new Date();
const tomorrow = addDaysToDate(today, 1); // Add one day to the current date
const yesterday = addDaysToDate(today, -1); // Subtract one day from the current date

console.log(today); // Output: Current date and time
console.log(tomorrow); // Output: Date and time of tomorrow
console.log(yesterday); // Output: Date and time of yesterday
