const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const points = document.querySelector("header>#score")
const snakeSize = 7 // how many pixel is the snake
const stepSize = snakeSize + 1 // how many pixels to move in one direction

let timeBetweenUpdates = 200 // ms
let snake = [[stepSize * 7, stepSize * 7], [stepSize * 7, stepSize * 7], [stepSize * 7, stepSize * 7]] // [[x,y], [x,y], ...]
let direction = "up" // up, down, left, right 
let inGame = false
let foodPosition = []
let effect = null
let effectTime = 0; //moves

let timeing;

document.addEventListener("keydown", ({ key }) => {
    console.log(key);
    switch (key) {
        case " ":
            start()
            break;
        case 'ArrowUp':
        case 'w':
            direction = "up"
            break;
        case 'ArrowDown':
        case 's':
            direction = "down"
            break;
        case 'ArrowLeft':
        case 'a':
            direction = "left"
            break;
        case 'ArrowRight':
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
            snake[0][1] -= stepSize
            break;
        case "down":
            moveBody()
            snake[0][1] += stepSize
            break;
        case "left":
            moveBody()
            snake[0][0] -= stepSize
            break;
        case "right":
            moveBody()
            snake[0][0] += stepSize
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
        case "apple":
            points.innerText = Number(points.innerText) + 1
            generateFood()
            snake.push([-1, -1])
            break
        default:
            points.innerText = Number(points.innerText) + 1
            generateFood()
            snake.push([-1, -1])
            break
    }
}
function spawnFood() {

    ctx.fillStyle = "red"
    ctx.fillRect(foodPosition[0], foodPosition[1], snakeSize, snakeSize)
    
}
function generateFood() {
    foodPosition = [Math.round(rndNum(0, canvas.width / stepSize)) * stepSize, Math.round(rndNum(0, canvas.height / stepSize)) * stepSize]
    //foodPosition = [0,0]
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
    snake = [[stepSize * 7, stepSize * 7], [stepSize * 7, stepSize * 7], [stepSize * 7, stepSize * 7]]
    generateFood()
    inGame = true
    clearInterval(timeing)
    timeing = setInterval(game, timeBetweenUpdates);
}
function applyEffect() {
    effectTime--
    switch (effect) {
        case "speed":
            console.log(effectTime);
            if (!effectTime) {
                effect = null;
                changeGameSpeed(timeBetweenUpdates)
            }
            break;

        default:
            break;
    }
}
function changeGameSpeed(speed) {
    clearInterval(timeing)
    timeing = setInterval(game, speed);
}
function game() {
    if (!inGame) return;
    if (effect) applyEffect();
    

    // clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // food spawn, eat
    spawnFood()
    if (foodPosition[0] - (snakeSize / 2) < snake[0][0] && snake[0][0] < foodPosition[0] + (snakeSize / 2) && foodPosition[1] - (snakeSize / 2) < snake[0][1] && snake[0][1] < foodPosition[1] + (snakeSize / 2)) eat("apple");

    

    //head to direction
    move(direction)
    snake.forEach(node => {
        ctx.fillStyle = "#1F6E35"
        ctx.fillRect(node[0], node[1], snakeSize, snakeSize)
    })

    // detect colision
    if (!searchForArray()) {
        console.log("bbooom");
        die("self")
    }
    if (snake[0][0] < 0 || snake[0][0] > canvas.width - snakeSize || snake[0][1] < 0 || snake[0][1] > canvas.height - snakeSize) die("wall");
}



//********** 
function randomFromArray(arr) {
    return arr[rndNum(0, arr.length - 1)]
}

// random number
function rndNum(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function searchForArray() {
    let needle = snake[0]
    let haystack = snake.slice(2, snake.length - 1)
    var i, j, current;
    for (i = 0; i < haystack.length; ++i) {
        if (needle.length === haystack[i].length) {
            current = haystack[i];
            for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if (j === needle.length)
                return i;
        }
    }
    return -1;
}
