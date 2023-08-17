// Given candidate object
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

// Select the second div with class "info"
const secondInfoDiv = document.querySelector('.info:nth-child(2)');

// Insert the candidate's first name into the first child of the second div
const firstNameDiv = secondInfoDiv.querySelector(':first-child');
firstNameDiv.textContent = candidate.name.firstname;

// Insert the full name into the second div using the printName method
const fullNameDiv = secondInfoDiv.querySelector(':nth-child(2)');
fullNameDiv.textContent = candidate.printName();