function cekSoal1(nilai) {
    let scoreElem = document.getElementById("score");
    let stageElem = document.getElementById("stage");

    let soalbenar = document.getElementById("soalbenar");
    let soalsalah = document.getElementById("soalsalah");

    let soal1 = document.getElementById("soal1");
    let soal2 = document.getElementById("soal2");


    const benar = 15744755;
    let currentScore = Number(scoreElem.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        currentScore += 100;
        currentStage += 1;
        soalbenar.style.display="flex";
        soal1.style.display="none";
        soal2.style.display="flex";
        
    } 

    else {
        currentScore -= 100;
        currentStage += 1;
        soalsalah.style.display="flex";
        soal1.style.display="none";
        soal2.style.display="flex";
    }

    scoreElem.innerText = currentScore;
    stageElem.innerText = currentStage;
}

function closeModal() {
    let soalbenar = document.getElementById("soalbenar");
    let soalsalah = document.getElementById("soalsalah");

    soalbenar.style.display="none";
    soalsalah.style.display="none";
}

function cekSoal2 (nilai) {
    const benar = 4;
    let currentScore = Number(scoreElem.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        currentScore += 100;
        currentStage += 1;
        soalbenar.style.display="flex";
        
        
    } 

    else {
        currentScore -= 100;
        currentStage += 1;
        soalsalah.style.display="flex";
        
    }

}