
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
                entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(element => observer.observe(element));


function boom() {
    document.body.style.animationName = "break"
    document.getElementById("boom").style.animationName = "crash"
}

let phase = 0;
let isActive = false;
let combo = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
addEventListener("keydown", ({ key }) => {

    let next = combo[phase];
    if (key == next) {
        phase++;
        if (next == "a") {
            phase = 0;
            if (isActive) {
                document.querySelector("html").style.animation = ``
                phase = 0;

            } else {
                isActive = true;
                console.log("asd");
                document.querySelector("html").style.animation = `huerotate infinite forwards 20s`
            }

        }
    } else {
        phase = 0
    }

})

const allElement = document.querySelectorAll('*')

function hueChange(param) {
    document.querySelector("html").style.filter = `hue-rotate(${param}deg)`
}

function toggleOutline(checkbox) {
    if (checkbox.checked) {
        allElement.forEach((node) => { node.style.outline = "rgba(0,80,20,.5) 3px solid" })
    } else {
        allElement.forEach((node) => { node.style.outline = "" });
    }
}
console.log(`
 _____    __   _ 
|  __ \\   | | (_)
| |__) |__| |_ _ 
|  ___/ _ \\ __| |
| |  |  __/ |_| |
|_|   \\___|\\__|_|
`);