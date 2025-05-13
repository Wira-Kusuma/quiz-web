function cekJawaban(nilai) {
    let score = document.getElementById("score");
    const benar = 15744755;
    if (nilai === benar) {
        alert("Benar!");
        score.innerText= + " +100";
    } else {
        alert("Salah!");
    }
}
