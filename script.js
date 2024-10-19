document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can replace this alert with your email service or handling logic
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById('contact-form').reset();
});
