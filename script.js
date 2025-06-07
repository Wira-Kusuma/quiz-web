let mate = document.getElementById("mate");
let english = document.getElementById("english");
let country = document.getElementById("country");

let englishModal = document.getElementById("englishModal");
let closeM = document.getElementById("close");

let startEnglish = document.getElementById("startEnglish");


english.addEventListener('click',englishOpenModal);
closeM.addEventListener('click',closeModal);

startEnglish.addEventListener('click',englishStart);

function englishOpenModal() {
    setTimeout(() => {
        englishModal.style.display="flex";
    },100)
}

function closeModal() {
    englishModal.style.display="none";
}

function englishStart() {
    setTimeout(() => {
        window.location.href="inggris/index.html";
    },100)
}