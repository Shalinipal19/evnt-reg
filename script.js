document.getElementById('eventRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var event = document.getElementById('event').value;
    var consent = document.getElementById('consent').checked;

    if (fullName && email && event && consent) {
        alert('Registration successful! Thank you for registering.');
        // Here, implement submission logic, e.g., sending data to a server
    } else {
        alert('Please fill out all fields and agree to the terms and conditions.');
    }
});
