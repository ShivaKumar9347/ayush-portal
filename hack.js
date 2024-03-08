document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('#register form');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Basic form validation
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Submit the form to the server (in a real scenario)
        alert('Registration successful! (Note: This is a demo.)');
        registrationForm.reset();
    });
});

// JavaScript for opportunity showcase section
document.addEventListener('DOMContentLoaded', function () {
    const opportunities = document.querySelectorAll('#opportunities .opportunity');

    opportunities.forEach(function (opportunity) {
        const applyButton = opportunity.querySelector('a');

        applyButton.addEventListener('click', function (event) {
            event.preventDefault();

            // Perform actions when the "Apply Now" button is clicked
            alert('Application submitted! (Note: This is a demo.)');
        });
    });
});