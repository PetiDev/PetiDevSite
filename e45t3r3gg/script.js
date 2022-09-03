const rick = new Audio("./rickroll.mp3")
const b = document.getElementById("b")
const p = document.getElementById("p")


function clicked() {
    let timer = 10


    b.style.display = "none"
    let inter = setInterval(() => {

        timer--
        p.innerText = `Van ${timer} másodperced elhagyni az oldalt`;
        if (timer <= 0) {
            rick.play()
            p.innerText = `Én szóltam`;
            clearInterval(inter)
        }

    }, 1000)



}