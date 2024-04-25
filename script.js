document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you can add code to send the form data
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        
        // Reset form fields
        contactForm.reset();
    });
});
