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
                document.body.style.animation = ""
                phase = 0;

            } else {
                isActive = true;
                document.body.style.animation = "huerotate infinite forwards 20s"
            }

        }
    } else {
        phase = 0
    }

})

function hueChange(param) {
    console.log(param);
    document.body.style.filter = `hue-rotate(${param}deg)`;
}
