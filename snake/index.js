const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const points = document.querySelector("#display>p")


let snake = [[50, 50], [50, 50], [50, 50]] // [[x,y], [x,y], ...]
let direction = "up" // up, down, left, right 
let inGame = false
let foodPosition = []

document.addEventListener("keydown", ({ key }) => {
    switch (key) {
        case " ":
            start()
            break;
        case 'w':
            direction = "up"
            break;
        case 's':
            direction = "down"
            break;
        case 'a':
            direction = "left"
            break;
        case 'd':
            direction = "right"
            break;

        default:
            break;
    }
})


function move(direction) {
    switch (direction) {
        case "up":
            moveBody()
            snake[0][1] -= 8
            break;
        case "down":
            moveBody()
            snake[0][1] += 8
            break;
        case "left":
            moveBody()
            snake[0][0] -= 8
            break;
        case "right":
            moveBody()
            snake[0][0] += 8
            break;

        default:
            console.log("WTF there is no direction to go");
            break;
    }
}
function moveBody() {
    for (let i = 1; i < snake.length; i++) {
        snake[snake.length - i][0] = snake[snake.length - (i + 1)][0]
        snake[snake.length - i][1] = snake[snake.length - (i + 1)][1]
    }
}
function eat(food) {
    console.log("Nom Nom");
    switch (food) {
        default:
            points.innerText = Number(points.innerText) + 1
            foodPosition = [rndNum(0, canvas.width), rndNum(0, canvas.height)]
            snake.push([-1, -1])
            break
    }
}
function spawnFood() {
    ctx.beginPath()
    ctx.lineWidth = "5"
    ctx.strokeStyle = "red"
    ctx.rect(foodPosition[0], foodPosition[1], 2, 2)
    ctx.stroke()
}

function die(dieCode) {
    inGame = false
    let reason = ""
    switch (dieCode) {
        case "wall":
            reason = "falba ütköztél"
            break;
        case "self":
            reason = "magadba ütköztél"
            break
    }
    alert(`Meghaltál mert ${reason}`)
}
function start() {
    points.innerText = 0
    snake = [[50, 50], [50, 50], [50, 50]]
    foodPosition = [rndNum(0, canvas.width), rndNum(0, canvas.height)]
    inGame = true
    console.log(foodPosition);
}
setInterval(() => {
    if (!inGame) return;


    //clear screen
    ctx.beginPath()
    ctx.lineWidth = "1"
    ctx.strokeStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.stroke()

    spawnFood()
    if (foodPosition[0] - 6 < snake[0][0] && snake[0][0] < foodPosition[0] + 6 && foodPosition[1] - 6 < snake[0][1] && snake[0][1] < foodPosition[1] + 6) eat("asd");


    if (!searchForArray()) {
        console.log("bbooom");
        die("self")
    }

    //head to direction
    move(direction)
    snake.forEach(node => {
        ctx.beginPath()
        ctx.lineWidth = "5"
        ctx.strokeStyle = "#1F6E35"
        ctx.rect(node[0], node[1], 2, 2)
        ctx.stroke()
    })
    if (snake[0][0] < 0 || snake[0][0] > canvas.width || snake[0][1] < 0 || snake[0][1] > canvas.height) die("wall");

}, 300);


// random number
function rndNum(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function searchForArray(needle){
    needle = snake[0]
    let haystack = snake.slice(2,snake.length-1)
    var i, j, current;
    for(i = 0; i < haystack.length; ++i){
      if(needle.length === haystack[i].length){
        current = haystack[i];
        for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
        if(j === needle.length)
          return i;
      }
    }
    return -1;
  }