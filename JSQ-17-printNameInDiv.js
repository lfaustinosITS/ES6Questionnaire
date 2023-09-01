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
const secondInfoDiv = document.querySelector('#body > .info');
;

// Insert the candidate's first name into the first child of the second div
const firstNameDiv = secondInfoDiv.children[0];
console.log(firstNameDiv);
firstNameDiv.textContent = candidate.name.firstname;

// Insert the full name into the second div using the printName method
const fullNameDiv = secondInfoDiv.children[1];  
fullNameDiv.textContent = candidate.printName();