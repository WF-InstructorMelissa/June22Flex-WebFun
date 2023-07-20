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
let bombs = 10

function makeEmptyGrid() {
    let grid = [];
    // Make rows
    for (let y = 0; y < rows; y++) {
        grid.push([])
        // Make cells in each row
        for (let x = 0; x < cols; x++) {
            grid[y].push('')
        }
    }
    console.log('the grid', grid)
    return grid;
}
// makeEmptyGrid()



function createBoard() {
    // grab div from html
    var board = document.getElementById('board')
    // make grid
    let theGrid = makeEmptyGrid()
    let allBombs = []
    // for(let b=0; b< bombs; b++) {
    //     allBombs.push(createBombs())
    //     console.log('all bombs', allBombs)
    // }
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
    for(let b = 0; b < bombs; b++) {
        let create = true
        while(create) {
            let target = createBombs()
            let xCord = target[0]
            let yCord = target[1]
            let theCell = document.getElementById(xCord+','+yCord)
            if(theCell.innerHTML == '') {
                theCell.innerHTML = '&#x1f4a3;'
                create = false
            }
        }
    }
    for(i = 0; i<theGrid.length; i++) {
        for(let c = 0; c< theGrid[i].length; c++) {
            let currCell = document.getElementById(i+','+c)
            let leftCell = document.getElementById((i)+','+(c-1))
            let leftTopCell = document.getElementById((i-1)+','+(c-1))
            let topCell = document.getElementById((i-1)+','+(c))
            let rightTopCell = document.getElementById((i-1)+','+(c+1))
            let rightCell = document.getElementById((i)+','+(c+1))
            let rightBotCell = document.getElementById((i+1)+','+(c+1))
            let botCell = document.getElementById((i+1)+','+(c))
            let leftBotCell = document.getElementById((i+1)+','+(c-1))
            // console.log("the current cell", currCell, 'leftCell',leftCell)
            let adjBomb = 0
            if(leftCell != null && leftCell.innerHTML != '' ) {
                console.log('leftCell',leftCell.innerHTML)
                adjBomb++
                console.log('adjBomb', adjBomb)
            }
            if(leftTopCell != null && leftTopCell.innerHTML != '' ) {
                console.log('leftCell',leftTopCell.innerHTML)
                adjBomb++
                console.log('adjBomb', adjBomb)
            }
            if(topCell != null && topCell.innerHTML != '' ) {
                console.log('leftCell',topCell.innerHTML)
                adjBomb++
                console.log('adjBomb', adjBomb)
            }
            if(rightTopCell != null && rightTopCell.innerHTML != '' ) {
                console.log('leftCell',rightTopCell.innerHTML)
                adjBomb++
                console.log('adjBomb', adjBomb)
            }
            if(rightCell != null && rightCell.innerHTML != '' ) {
                console.log('leftCell',rightCell.innerHTML)
                adjBomb++
                console.log('adjBomb', adjBomb)
            }
        }
    }
}
createBoard()

function createBombs() {
    let xCord
    let yCord
    let theCord = []
    xCord = Math.floor(Math.random() * 9)
    yCord = Math.floor(Math.random() * 9)
    theCord.push(yCord)
    theCord.push(xCord)
    return theCord
}
