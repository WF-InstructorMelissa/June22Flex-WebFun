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

function print(a,) {
    console.log('Printing:', a)
}

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
let bombs = rows+cols
let theb = '&#x1f4a3;'

function makeGrid() {
    let grid = [];
    // Make rows
    for (let y = 0; y < rows; y++) {
        grid.push([])
        // Make cells in each row
        for (let x = 0; x < cols; x++) {
            grid[y].push('')
        }
    }
    // Place bombs
    for(let b = 0; b < bombs; b++) {
        let create = true
        while(create) {
            let target = createBombs()
            let xCord = target[0]
            let yCord = target[1]
            // console.log(xCord, yCord)
            let theCell = grid[xCord][yCord]
            if(theCell == '') {
                grid[xCord][yCord] = theb
                create = false
            }
        }
    }
    // Set Adjacent Cell counts
    for(r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] !== theb) {
                let adjB = 0
            // for each of the cords of the adjCells dr= row dc=column
                for(const [dr, dc] of adjCells) {
                    // if cell is in grid and it is a bomb
                    if(validCell(r + dr, c + dc) && grid[r+dr][c+dc] === theb) {
                        adjB++
                    }
                }
                grid[r][c] = adjB
            }
        }
    }
    // Get rid of all the 0's
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] == 0) {
                grid[r][c] = null
            }
        }
    }
    console.log('the grid', grid)
    return grid;
}
// makeEmptyGrid()

// checking that the cell we are looking at is actually part of our grid as we are using var rows and cols the grid size can be altered with out changing the code
function validCell(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols
}

// These are the cells that surround the currently selected cell when we are checking to see how many bombs are around it
const adjCells = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]

]

function createBoard() {
    // grab div from html
    var board = document.getElementById('board')
    // make grid
    let theGrid = makeGrid()
    for(let y = 0; y < theGrid.length; y++) {
        // Make a div for each row and give it a class name
        let rowDiv = document.createElement('div')
        rowDiv.className = 'gridRow'
        for(let x = 0; x < theGrid[y].length; x++) {
            // Make a div for each cell and give it a class in side 1 row
            let cell = document.createElement('div')
            cell.innerHTML = theGrid[y][x]
            cell.className = 'cell'
            cell.setAttribute('id', x+','+y)
            // push the cells to the row
            rowDiv.appendChild(cell)
        }
        // rowDiv.innerHTML = theGrid[y]
        // add row with cells to the main board div
        board.appendChild(rowDiv)
    }
}
createBoard()

function createBombs() {
    let xCord
    let yCord
    let theCord = []
    xCord = Math.floor(Math.random() * (rows))
    yCord = Math.floor(Math.random() * (cols))
    theCord.push(yCord)
    theCord.push(xCord)
    return theCord
}
