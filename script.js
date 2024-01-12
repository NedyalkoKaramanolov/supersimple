// scripts.js

// Validate the form before submission
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Basic validation, you can customize this based on your requirements
    if (name === '' || email === '' || phone === '' || date === '' || time === '') {
        alert('Please fill in all fields.');
        return false;
    }

    return true;
}

// Add more functions if needed
