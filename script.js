function cekJawaban(nilai) {
    let scoreElem = document.getElementById("score");
    let stageElem = document.getElementById("stage");
    const benar = 15744755;
    let currentScore = Number(scoreElem.innerText);
    let currentStage = Number(stageElem.innerText);

    if (nilai === benar) {
        alert("Benar!");
        currentScore += 100;
        currentStage += 1;
    } else {
        alert("Salah!");
        currentScore -= 100;
        currentStage += 1;
    }

    scoreElem.innerText = currentScore;
    stageElem.innerText = currentStage;
}
