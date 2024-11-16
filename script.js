// Add an event listener for the contact form
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Thank you for your message! We will get back to you soon.');
    form.reset(); // Reset form fields
});
