// Guess the number

// check getting number from form
// check getting random number 1-100
// run game via console before going to html
// test visual printout of past guesses and current guess

// Globals
var answer
var btn = document.getElementById('startStop')
var result = document.getElementById('theGuess')
var past = []

// Get random number
function randnum() {
    console.log('in randnum function')
    if(btn.innerText == 'Stop Game') {
        console.log('in if of randnum')
        answer = null
        past = []
        result = ''
        btn.innerText = 'Start Game'
        return
    }
    answer = Math.floor(Math.random() * 100) + 1
    console.log('answer',answer)
    btn.innerText = 'Stop Game'
}
// Previous 3 guesses
function updatePast() {
    var arr = document.getElementById('pastGuess')
    if(past.length > 3) {
        past.shift()
    }
    arr.innerText = past
}
// Check guesses
function check(guess) {
    switch (true) {
        case (guess < 1 || guess > 100):
            console.log("Invalid guess.");
            result.innerText = 'Check the rules'
            break;
        case (guess < answer):
            console.log("Your guess is less than the answer.");
            result.innerText = 'Low'
            break;
        case (guess > answer):
            console.log("Your guess is greater than the answer.");
            result.innerText = 'Hi'
            break;
        case (guess == answer):
            console.log("Congratulations! Your guess is correct.");
            result.innerText = 'Congrats'
            break;
    }
}


// Current guess (and adds to previous)
function clicked() {
    // var num = document.getElementById('guess')
    var guess = document.guessNumForm.guess.value
    console.log(guess)
    past.push(guess)
    check(guess)
    updatePast()
}











// Minesweeper

// build the board - board size maybe start with 10x10 easier to expand
// timer
// logic for game
// buttons

// Pause Game
function changeText() {
    let text = document.getElementById('pause')
    console.log(text.innerText)
    if(text.innerText == "Hesitate") {
        text.innerText = "Persevere"
    } else {
        text.innerText = "Hesitate"
    }
}

// 10 across and 10 down 

let rows = 10
let cols = 10

function makeEmptyGrid() {
    let grid = [];
    for (let y = 0; y < rows; y++) {
        grid.push([])
        for (let x = 0; x < cols; x++) {
            grid[y].push([0])
        }
    }
    console.log('the grid', grid)
    return grid;
}
// makeEmptyGrid()

function createBoard() {
    var board = document.getElementById('board')
    // board.innerText = makeEmptyGrid()
    let theGrid = makeEmptyGrid()
    for(let y = 0; y < theGrid.length; y++) {
        let rowDiv = document.createElement('div')
        rowDiv.className = 'gridRow'
        for(let x = 0; x < theGrid[y].length; x++) {
            let cell = document.createElement('div')
            cell.innerHTML = theGrid[y][x]
            cell.className = 'cell'
            rowDiv.appendChild(cell)
        }
        // rowDiv.innerHTML = theGrid[y]
        board.appendChild(rowDiv)
    }
}
createBoard()