class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

class Medic extends Person {
    constructor(name, lastName, specialty) {
        super(name, lastName);
        this.specialty = specialty;
    }
}

function sendPersonData(person) {
    // Assuming you have a URL to send the data to
    const url = new URL('https://example.com/senddata');

    const params = new URLSearchParams();
    params.append('name', person.name);
    params.append('lastName', person.lastName);

    url.search = params.toString();
    // Perform the AJAX GET request
    // I'll use Fetch
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error sending data:', error);
        });
}

// Example:
const person = new Person('John', 'Doe');
console.log(person.getFullName()); // Output: "John Doe"

const medic = new Medic('Jane', 'Smith', 'Cardiology');
console.log(medic.getFullName()); // Output: "Jane Smith"
console.log(medic.specialty); // Output: "Cardiology"

// Sending Person data via AJAX GET request
sendPersonData(person);
