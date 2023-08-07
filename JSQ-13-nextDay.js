Date.prototype.getNextDay = function () {
    const newDate = new Date(this);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
};

// Example:
const today = new Date();
const nextDay = today.getNextDay();

console.log(today); // Output: Current date and time
console.log(nextDay); // Output: Date and time of the next day
