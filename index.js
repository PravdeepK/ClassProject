// home code

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

//contact code



