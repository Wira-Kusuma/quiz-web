let soalbenar = document.getElementById("soalbenar");
let soalsalah = document.getElementById("soalsalah");

let scoreElem = document.getElementById("score");
let scoreElemB = document.getElementById("scoreb");
let stageElem = document.getElementById("stage");

let soal1 = document.getElementById("soal1");
let soal2 = document.getElementById("soal2");
let soal3 = document.getElementById("soal3");
let soal4 = document.getElementById("soal4");
let soal5 = document.getElementById("soal5");

// back to homepage
let = goHome = document.getElementById("goHome");

goHome.addEventListener('click', backToIndex)

function backToIndex() {
    window.location.href="../index.html";
}

// close when click
function closeModal() {

    soalbenar.style.display="none";
    soalsalah.style.display="none";
}


function cekSoal1(nilai) {

    const benar = 2;
    let currentScore = Number(scoreElem.innerText);
    let currentScoreB = Number(scoreElemB.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        currentScore += 100;
        currentScoreB += 100;
        currentStage += 1;
        soalbenar.style.display="flex";
        soal1.style.display="none";
        soal2.style.display="flex";
        
    } 

    else {
        currentScore += 0;
        currentScoreB += 0;
        currentStage += 1;
        soalsalah.style.display="flex";
        soal1.style.display="none";
        soal2.style.display="flex";
    }

    scoreElem.innerText = currentScore;
    scoreElemB.innerText = currentScoreB;
    stageElem.innerText = currentStage;
}

function cekSoal2 (nilai) {
    const benar = 3;

    let currentScore = Number(scoreElem.innerText);
    let currentScoreB = Number(scoreElemB.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        currentScore += 100;
        currentScoreB += 100;
        currentStage += 1;
        soalbenar.style.display="flex";
        soal2.style.display="none";
        soal3.style.display="flex";
    } 

    else {
        currentScore += 0;
        currentScoreB += 0;
        currentStage += 1;
        soalsalah.style.display="flex";
        soal2.style.display="none";
        soal3.style.display="flex";
    }
    scoreElem.innerText = currentScore;
    scoreElemB.innerText = currentScoreB;
    stageElem.innerText = currentStage;
}

function cekSoal3 (nilai) {
    const benar = 2;

    let currentScore = Number(scoreElem.innerText);
    let currentScoreB = Number(scoreElemB.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        currentScore += 100;
        currentScoreB += 100;
        currentStage += 1;
        soalbenar.style.display="flex";
        soal3.style.display="none";
        soal4.style.display="flex";
    } 

    else {
        currentScore += 0;
        currentScoreB += 0;
        currentStage += 1;
        soalsalah.style.display="flex";
        soal3.style.display="none";
        soal4.style.display="flex";
    }
    scoreElem.innerText = currentScore;
    scoreElemB.innerText = currentScoreB;
    stageElem.innerText = currentStage;
}

function cekSoal4 (nilai) {
    const benar = 3;

    let currentScore = Number(scoreElem.innerText);
    let currentScoreB = Number(scoreElemB.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        currentScore += 100;
        currentScoreB += 100;
        currentStage += 1;
        soalbenar.style.display="flex";
        soal4.style.display="none";
        soal5.style.display="flex";
    } 

    else {
        currentScore += 0;
        currentScoreB += 0;
        currentStage += 1;
        soalsalah.style.display="flex";
        soal4.style.display="none";
        soal5.style.display="flex";
    }
    scoreElem.innerText = currentScore;
    scoreElemB.innerText = currentScoreB;
    stageElem.innerText = currentStage;
}

function cekSoal5 (nilai) {
    const benar = 3;
    let hasil = document.getElementById("hasil");

    let currentScore = Number(scoreElem.innerText);
    let currentScoreB = Number(scoreElemB.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        currentScore += 100;
        currentScoreB += 100;
        soalbenar.style.display="flex";
        soal5.style.display="none";
        hasil.style.display="flex";
    } 

    else {
        currentScore += 0;
        currentScoreB += 0;
        soalsalah.style.display="flex";
        soal5.style.display="none";
        hasil.style.display="flex";

    }
    scoreElem.innerText = currentScore;
    scoreElemB.innerText = currentScoreB;
    stageElem.innerText = currentStage;
}