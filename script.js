const carouselText = [
    { text: "I am Jaysheel Modi." },
    { text: "I am a student at Sheridan College, Brampton, Canada." }
]

async function typeSentence(sentence, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        // console.log($(eleRef));
        // $("#sentence").append(letters[i]);
        document.getElementById("sentence").innerHTML += letters[i];
        i++;
    }
    return;
}

async function deleteSentence() {
    const sentence = document.getElementById("sentence").innerHTML;
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.getElementById("sentence").innerHTML = letters.join("");
    }
}

async function carousel(carouselList) {
    var i = 0;
    while (true) {
        await typeSentence(carouselList[i].text);
        await waitForMs(1500);
        await deleteSentence();
        await waitForMs(500);
        i++
        if (i >= carouselList.length) { i = 0; }
    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

carousel(carouselText);

// dark nav bar
const header = document.querySelector('.navbar');
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 300) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
