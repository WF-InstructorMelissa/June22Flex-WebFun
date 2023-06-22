hey()
function hey() {
    console.log('yall are killing it')
}

let x = -77

// if(x < 5) {
//     console.log('less than 5')
// }
// if(x < 10) {
//     console.log('less than 10')
// }
// else if(x < -20) {
//     console.log('less than -20')
// } else (
//     console.log('just to darn big')
// )

if(x < 5) {
    console.log('less than 5')
}
if(x == 10) {
    console.log('less than 10')
}
else if(x < -20) { // this will still trigger because it will only print if the if directly above it is false but this is true
    console.log('less than -20')
} else (
    console.log('just to darn big')
)

// function fizzBuzz() {
//     for(var i = 1; i <=20; i++) {
//         if(i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz", i)
//         }         
//         if(i % 3 == 0) {
//             console.log("Fizz", i)
//         }
//         if(i % 5 == 0) {
//             console.log("Buzz", i)
//         }else { // can act like the else if and only if the if directly before it is false this will print
//             console.log(i)
//         }
//     }
// }
// fizzBuzz()

// function fizzBuzz() {
//     for(var i = 1; i <=20; i++) {
//         if
//         (i % 3 == 0) {
//             console.log(i, "Fizz")
//         }         
//         else if(i % 3 == 0 && i % 5 == 0) {
//             console.log(i, "FizzBuzz")
//         }
//         else if(i % 5 == 0) {
//             console.log(i, "Buzz")
//         }else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz()

// function fizzBuzz() {
//     for(var i = 1; i <=20; i++) {
//         if
//         (i % 3 == 0) {
//             console.log(i, "Fizz")
//         }         
//         else if(i % 5 == 0) {
//             console.log(i, "Buzz")
//         }
//         if(i % 3 == 0 && i % 5 == 0) {
//             console.log(i, "FizzBuzz")
//         }else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz()

function fizzBuzz() {
    for(var i = 1; i <=20; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log(i, "FizzBuzz")
        }         
        else if(i % 3 == 0) {
            console.log(i, "Fizz")
        }
        else if(i % 5 == 0) {
            console.log(i, "Buzz")
        }else {
            console.log(i)
        }
    }
}
fizzBuzz()