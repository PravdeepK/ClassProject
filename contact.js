
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  

        if (validateEmail()) {  


            alert("Information submitted successfully!");  
            contactForm.reset(); 
        } else {
            alert("Please enter a valid email address.");
        }
    });
});

function validateEmail() {
    const email = document.getElementById('email').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  

    return email.match(pattern);
}
