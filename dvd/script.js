const obj = document.getElementById("obj");
let px = 0;
let py = 0;
let vx = 1;
let vy = 1;

function rndNum(min, max) {
    return Math.round(Math.random()*(max - min) + min)
}
function changeClr() {
    return obj.style.color = `hsl(${rndNum(0, 360)},${rndNum(50, 100)}%,${rndNum(35, 100)}%)`
}
changeClr()

setInterval(() => {
    py += vy;
    px += vx;
    obj.style.top = `${py}px`;
    obj.style.left = `${px}px`;
    if (px < 0 || px > window.innerWidth - obj.clientWidth) {
        vx = -vx
        changeClr()
    }
    if (py < 0 || py > window.innerHeight - obj.clientHeight) {
        vy = -vy
        changeClr()
       }

}, 1/60);
