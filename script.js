let mate = document.getElementById("mate");
let inggris = document.getElementById("inggris");
let country = document.getElementById("country");


inggris.addEventListener('click', kuisInggris);

function kuisInggris() {
    setTimeout(() => {
        window.location.href="inggris/index.html";
    },100)
    inggris.style.boxShadow="none";
}