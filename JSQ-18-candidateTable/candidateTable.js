
const BASE_URL = 'http://localhost:3000';

// Function to fetch candidate data from the server
function fetchCandidates() {
    return fetch(`${BASE_URL}/db`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching candidates:', error);
        });
}

// Function to add a new candidate
function addCandidate(name, lastName, phone) {
    const url = new URL(`${BASE_URL}/candidates`);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            lastName: lastName,
            phone: phone
        })
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error adding candidate:', error);
        });
}

// Function to update a candidate
function updateCandidate(candidateId, updatedCandidate) {
    const url = new URL(`${BASE_URL}/candidates/${candidateId}`);

    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: updatedCandidate.name,
            lastName: updatedCandidate.lastName,
            phone: updatedCandidate.phone
        })
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error updating candidate:', error);
        });
}

// Function to delete a candidate
function deleteCandidate(candidateId) {
    const url = new URL(`${BASE_URL}/candidates/${candidateId}`);

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error deleting candidate:', error);
        });
}

// Function to render candidates in the table
function renderCandidates(candidates) {
    const tableBody = document.querySelector('#candidatesTable tbody');
    tableBody.innerHTML = '';

    candidates.forEach(candidate => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.className = 'name-cell';
        nameCell.textContent = candidate.name;

        const lastNameCell = document.createElement('td');
        lastNameCell.className = 'lastName-cell';
        lastNameCell.textContent = candidate.lastName;

        const phoneCell = document.createElement('td');
        phoneCell.className = 'phone-cell';
        phoneCell.textContent = candidate.phone;

        const actionsCell = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.className = 'editBtn';
        editButton.setAttribute('data-id', candidate.id);
        editButton.textContent = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteBtn';
        deleteButton.setAttribute('data-id', candidate.id);
        deleteButton.textContent = 'Delete';

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(lastNameCell);
        row.appendChild(phoneCell);
        row.appendChild(actionsCell);


        tableBody.appendChild(row);
    });
}

// Function to handle Add link click
document.getElementById('addLink').addEventListener('click', function () {
    const addForm = document.getElementById('addCandidateForm');
    addForm.style.display = 'block';
});

document.getElementById('addCandidateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form input values
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phone').value = '';

    addCandidate(name, lastName, phone);

    // Hide the form
    const addForm = document.getElementById('addCandidateForm');
    addForm.style.display = 'none';
    
}).then(initializeCandidates());

let isEditing = false;

// Function to toggle between editing view and normal view.
function toggleEditView(row, candidate) {
    if (isEditing) {
        // Update the candidate's data with the values from the input fields.
        const nameInput = row.querySelector('.edit-name');
        const lastNameInput = row.querySelector('.edit-lastName');
        const phoneInput = row.querySelector('.edit-phone');

        const updatedCandidate = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            phone: phoneInput.value,
        };

        updateCandidate(candidate.id, updatedCandidate)
            .then(() => {
                isEditing = false;
                initializeCandidates(); // Reload the normal view
            });
    } else {
        // Display input fields with the candidate's current data.
        const nameCell = row.querySelector('.name-cell');
        const lastNameCell = row.querySelector('.lastName-cell');
        const phoneCell = row.querySelector('.phone-cell');

        const nameInput = document.createElement('input');
        nameInput.className = 'edit-name';
        nameInput.value = candidate.name;

        const lastNameInput = document.createElement('input');
        lastNameInput.className = 'edit-lastName';
        lastNameInput.value = candidate.lastName;

        const phoneInput = document.createElement('input');
        phoneInput.className = 'edit-phone';
        phoneInput.value = candidate.phone;

        // Replace the cells with input fields.
        nameCell.textContent = '';
        nameCell.appendChild(nameInput);

        lastNameCell.textContent = '';
        lastNameCell.appendChild(lastNameInput);

        phoneCell.textContent = '';
        phoneCell.appendChild(phoneInput);

        // Change the button text to 'Save'.
        event.target.textContent = 'Save';

        isEditing = true;
    }
}

// Function to handle Edit and Delete button clicks
document.getElementById('candidatesTable').addEventListener('click', function (event) {
    if (event.target.classList.contains('editBtn')) {
        const row = event.target.closest('tr');
        const candidateId = event.target.getAttribute('data-id');

        // Retrieve the current candidate's data.
        const candidate = {
            id: candidateId,
            name: row.querySelector('.name-cell').textContent,
            lastName: row.querySelector('.lastName-cell').textContent,
            phone: row.querySelector('.phone-cell').textContent,
        };

        // Toggle between the edit view and the normal view.
        toggleEditView(row, candidate);

    } else if (event.target.classList.contains('deleteBtn')) {
        const candidateId = event.target.getAttribute('data-id');
        const candidateName = event.target.closest('tr').querySelector('td:first-child').textContent;
        const confirmDeletion = confirm(`Are you sure you want to delete the candidate "${candidateName}"?`);

        if (confirmDeletion) {
            deleteCandidate(candidateId)
                .then(() => {
                    initializeCandidates();
                });
        }
    }

}
);

// Function to initialize the table with candidate data
function initializeCandidates() {
    fetchCandidates()
        .then(data => {
            renderCandidates(data.candidates);
        });
}

// Call initializeCandidates() to load the candidates when the page loads
initializeCandidates();
