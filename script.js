let mate = document.getElementById("mate");
let english = document.getElementById("english");
let country = document.getElementById("country");

let englishModal = document.getElementById("englishModal");


english.addEventListener('click', kuisInggris);

function kuisInggris() {
    setTimeout(() => {
        englishModal.style.display="flex";
    },100)
    inggris.style.boxShadow="none";
}