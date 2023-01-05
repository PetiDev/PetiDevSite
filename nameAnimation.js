const animation1 = [
    { text: "|", sleep: 300 },
    { text: " ", sleep: 400 },
    { text: "P ", sleep: 100 },
    { text: "P3|", sleep: 100 },
    { text: "P3T|", sleep: 100 },
    { text: "P3T1|", sleep: 100 },
    { text: "P3T1", sleep: 100 },
]
let target = document.querySelector("#name")
let frame = 0
let step = 0
function update(frames) {
    if (frame == frames.length) { return } else {
        target.innerText = frames[frame].text
        setTimeout(() => update(frames), frames[frame].sleep); frame++
    }
}
update(animation1)