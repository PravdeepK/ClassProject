// home code

let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 3500); // Change image every 5 seconds
        }

// News code

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const pop1 = document.getElementById("pop1");
const pop2 = document.getElementById("pop2");
const pop3 = document.getElementById("pop3");
const closepop1 = document.getElementById("closepop1");
const closepop2 = document.getElementById("closepop2");
const closepop3 = document.getElementById("closepop3");

btn1.addEventListener("click", open1);
btn2.addEventListener("click", open2);
btn3.addEventListener("click", open3);

function open1() {
    document.getElementById("pop1").style.display = "block"
}

function open2() {
    document.getElementById("pop2").style.display = "block"
}

function open3() {
    document.getElementById("pop3").style.display = "block"
}

closepop1.addEventListener("click", close1);
closepop2.addEventListener("click", close2);
closepop3.addEventListener("click", close3);

function close1() {
    document.getElementById("pop1").style.display = "none"
}

function close2() {
    document.getElementById("pop2").style.display = "none"
}

function close3() {
    document.getElementById("pop3").style.display = "none"
}
// services page code


//contact us code
function validateEmail() {
    var email = document.getElementById("email").value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("Validating email:", email);
    if (!pattern.test(email)) {
        console.log("Invalid email");
        alert("Please enter a valid email address.");
        return false;
    }
    console.log("Valid email");
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").style.color = "blue";

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submitted");
        if (validateEmail()) {
            console.log("Showing success alert");
            alert("Submitted successfully!");
        } else {
            console.log("Showing error alert");
        }
    });
});



