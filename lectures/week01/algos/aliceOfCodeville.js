// Challenge #1 code:
let notKey = true
let theKey = Math.floor(Math.random() * 21)
console.log("the guess", theKey)
while(notKey) {
    for(let key = 0; key < 21; key++) {
        if(key != theKey) {
            console.log("Sorry not the correct key try again")
        } else {
            console.log("The time loop is broken")
            notKey = false
            return "Time Loop Broken Please exit the building"
        }
    }
}


// Challenge #2 code:
let container = []
for(let i = 1; i <= 5; i++) {
    container.push(Math.floor(Math.random() * 50))
}
console.log("filled container", container)
// let evenNums = []
let answer = 0

function keyPad() {
    for(let even = 0; even < container.length; even++) {
        if(container[even] % 2 == 0) {
            // evenNums.push(container[even])
            answer = answer + container[even]
            console.log("the current value of answer", answer)
        }
    }
    return answer
}
keyPad()
