// Navigate to Personal Details page when the button is clicked on the Home page
document.getElementById('personalDetailsButton')?.addEventListener('click', function () {
    window.location.href = 'personal-details.html'; // Navigate to personal-details.html
});

// Navigate to Contact Us page when the button is clicked on the Home page
document.getElementById('contactUsButton')?.addEventListener('click', function () {
    window.location.href = 'contact-us.html'; // Navigate to contact-us.html
});

// Navigate to Home page when the button is clicked on Personal Details or Contact Us pages
document.getElementById('homeButton')?.addEventListener('click', function () {
    window.location.href = 'index.html'; // Navigate to home page
});
