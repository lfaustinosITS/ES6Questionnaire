// Function to fetch candidate data from the server
function fetchCandidates() {
    return fetch('https://example.com/candidates', {
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
function addCandidate(candidate) {
    return fetch('https://example.com/candidates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(candidate)
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error adding candidate:', error);
        });
}

// Function to update a candidate
function updateCandidate(candidateId, updatedCandidate) {
    return fetch(`https://example.com/candidates/${candidateId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCandidate)
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error updating candidate:', error);
        });
}

// Function to delete a candidate
function deleteCandidate(candidateId) {
    return fetch(`https://example.com/candidates/${candidateId}`, {
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
        nameCell.textContent = candidate.name;
        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = candidate.lastName;
        const phoneCell = document.createElement('td');
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
});

// Function to handle Edit and Delete button clicks
document.getElementById('candidatesTable').addEventListener('click', function (event) {
    if (event.target.classList.contains('editBtn')) {
        const candidateId = event.target.getAttribute('data-id');

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
        .then(candidates => {
            renderCandidates(candidates);
        });
}

// Call initializeCandidates() to load the candidates when the page loads
initializeCandidates();
