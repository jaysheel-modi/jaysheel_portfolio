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
