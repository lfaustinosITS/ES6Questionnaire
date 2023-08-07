var candidate = {
    name: {
        firstname: 'John',
        lastname: 'Galt',
        phone: '123-456-7890'
    },

    // Method to print the firstname plus the lastname
    printName: function () {
        return this.name.firstname + ' ' + this.name.lastname;
    }
};

// Example usage of the printName():
console.log(candidate.printName()); // Output: "John Galt"
