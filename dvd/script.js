const obj = document.getElementById("obj");
let px = 0;
let py = 0;
let vx = 2;
let vy = 2;


setInterval(() => {
    py += vy;
    px += vx;
    obj.style.top = `${py}px`;
    obj.style.left = `${px}px`;
    if (px < 0 || px > window.innerWidth - obj.clientWidth) {
        vx = -vx
    
    }
    if (py < 0 || py > window.innerHeight - obj.clientHeight) {
        vy = -vy
       }

}, 1/60);
