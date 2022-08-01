
const animation1 = [
    { text: "_", sleep: 500 },
    { text: " ", sleep: 500 },
    { text: "_", sleep: 500 },
    { text: " ", sleep: 500 },
    { text: "H_", sleep: 100 },
    { text: "Ho ", sleep: 100 },
    { text: "Hor", sleep: 100 },
    { text: "Horv  ", sleep: 100 },
    { text: "Horvá ", sleep: 100 },
    { text: "Horvát ", sleep: 100 },
    { text: "Horváth_", sleep: 100 },
    { text: "Horváth_ ", sleep: 250 },
    { text: "Horváth P_", sleep: 100 },
    { text: "Horváth Pé_", sleep: 100 },
    { text: "Horváth Pét_", sleep: 100 },
    { text: "Horváth Péte ", sleep: 100 },
    { text: "Horváth Péter ", sleep: 700 },
    { text: "Horváth Péte_", sleep: 100 },
    { text: "Horváth Pét_", sleep: 100 },
    { text: "Horváth Pé_", sleep: 100 },
    { text: "Horváth P_", sleep: 100 },
    { text: "Horváth _", sleep: 100 },
    { text: "Horváth ", sleep: 100 },
    { text: "Horvát ", sleep: 100 },
    { text: "Horvá ", sleep: 100 },
    { text: "Horv ", sleep: 100 },
    { text: "Hor ", sleep: 100 },
    { text: "Ho_", sleep: 100 },
    { text: "H_", sleep: 100 },
    { text: "_", sleep: 300 },
    { text: " ", sleep: 400 },
    { text: "P ", sleep: 100 },
    { text: "Pe_", sleep: 100 },
    { text: "Pet_", sleep: 100 },
    { text: "Peti_", sleep: 100 },
    { text: "Peti", sleep: 100 },
]
const animation2 = [
    { text: "D_", sleep: 100 },
    { text: "De_", sleep: 100 },
    { text: "Dev", sleep: 100 },
]

let target = document.querySelector("#name")
let frame = 0
let step = 0
function update(frames) {

    if (frame == frames.length) {
        if (step == 1) return;
        target = document.querySelector("#name2")
        frame = 0
        step++
        update(animation2)
    } else {
        target.innerText = frames[frame].text
        setTimeout(() => update(frames), frames[frame].sleep);
        frame++
    }

}
update(animation1)
