document.addEventListener('DOMContentLoaded', (event) => {
    // Start the slideshow
    showSlides();

    // Modal pop-up handlers
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const pop1 = document.getElementById("pop1");
    const pop2 = document.getElementById("pop2");
    const pop3 = document.getElementById("pop3");
    const closepop1 = document.getElementById("closepop1");
    const closepop2 = document.getElementById("closepop2");
    const closepop3 = document.getElementById("closepop3");

    btn1.addEventListener("click", () => openModal("pop1"));
    btn2.addEventListener("click", () => openModal("pop2"));
    btn3.addEventListener("click", () => openModal("pop3"));

    closepop1.addEventListener("click", () => closeModal("pop1"));
    closepop2.addEventListener("click", () => closeModal("pop2"));
    closepop3.addEventListener("click", () => closeModal("pop3"));

    // Interactive cards on the Services page
    const cards = document.querySelectorAll('.card_feed');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Thanks for your interest!');
        });
    });

    // Form validation and submission on Contact Us page
    document.querySelector("h1").style.color = "blue";
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateEmail()) {
            alert("Submitted successfully!");
        }
    });

    function validateEmail() {
        var email = document.getElementById("email").value;
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    }
});
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (!slides.length || !dots.length) return;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500);
}

