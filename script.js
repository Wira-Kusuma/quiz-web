function closeModal() {
    let soalbenar = document.getElementById("soalbenar");
    let soalsalah = document.getElementById("soalsalah");

    soalbenar.style.display="none";
    soalsalah.style.display="none";
}

function cekSoal1(nilai) {
    let scoreElem = document.getElementById("score");
    let scoreElemB = document.getElementById("scoreb");
    let stageElem = document.getElementById("stage");

    let soalbenar = document.getElementById("soalbenar");
    let soalsalah = document.getElementById("soalsalah");

    let soal1 = document.getElementById("soal1");
    let soal2 = document.getElementById("soal2");


    const benar = 17.380;
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
        currentScore -= 100;
        currentScoreB -= 100;
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
    const benar = 4;

    let scoreElem = document.getElementById("score");
    let scoreElemB = document.getElementById("scoreb");
    let stageElem = document.getElementById("stage");

    let soalbenar = document.getElementById("soalbenar");
    let soalsalah = document.getElementById("soalsalah");

    let soal2 = document.getElementById("soal2");
    let soal3 = document.getElementById("soal3");

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
        currentScore -= 100;
        currentScoreB -= 100;
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
    const benar = 5;

    let scoreElem = document.getElementById("score");
    let scoreElemB = document.getElementById("scoreb");
    let stageElem = document.getElementById("stage");

    let soalbenar = document.getElementById("soalbenar");
    let soalsalah = document.getElementById("soalsalah");

    let soal3 = document.getElementById("soal3");
    let soal4 = document.getElementById("soal4");

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
        currentScore -= 100;
        currentScoreB -= 100;
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
    const benar = 5;

    let scoreElem = document.getElementById("score");
    let scoreElemB = document.getElementById("scoreb");
    let stageElem = document.getElementById("stage");

    let soalbenar = document.getElementById("soalbenar");
    let soalsalah = document.getElementById("soalsalah");

    let soal5 = document.getElementById("soal5");
    let soal4 = document.getElementById("soal4");

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
        currentScore -= 100;
        currentScoreB -= 100;
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
    const benar = 5;

    let scoreElem = document.getElementById("score");
    let scoreElemB = document.getElementById("scoreb");
    let stageElem = document.getElementById("stage");

    let soalbenar = document.getElementById("soalbenar");
    let soalsalah = document.getElementById("soalsalah");

    let soal5 = document.getElementById("soal5");
    let hasil = document.getElementById("hasil");

    let currentScore = Number(scoreElem.innerText);
    let currentScoreB = Number(scoreElemB.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        currentScore += 100;
        currentScoreB += 100;
        currentStage += 1;
        soalbenar.style.display="flex";
        soal5.style.display="none";
        hasil.style.display="flex";
    } 

    else {
        currentScore -= 100;
        currentScoreB -= 100;
        currentStage += 1;
        soalsalah.style.display="flex";
        soal5.style.display="none";
        hasil.style.display="flex";

    }
    scoreElem.innerText = currentScore;
    scoreElemB.innerText = currentScoreB;
    stageElem.innerText = currentStage;
}