// what is a variable and what is it's purpose
// let = can be changed = mutable
// const = can not be changed = immutable
// var = can also be changed = mutable = however can also be redeclaired = not used as often


let x = 5
x =10
// let x =20

var y = 'hi'
y = 'hello'
var y = 30

const a = 'whats up'
// a = 'help'

// what other data types
// variable, boolean (true / false)


var arr = [] // an array = collection of data
var obj = {} // an object = collection of data with key / value pairs
var obj = {'name': 'Melissa'}
console.log(obj['name'])  // print to the console the value of the key called name in the object called obj

var arr01 = [1,2,3,4,5,6,7,8,9,10]
// the value of arr01[6] = 7

// Find the even numbers

var testArr = [1,2,3]
// index       0,1,2
// length = 3
// highest index = 2
// the value of testArr[0] = 1

console.log(arr01%2)  // Gives us NaN

//  Loop to move through the array and hit each entry
// A check to see if that value is even or not
// A place to store the even numbers

// for loop (start here; end here; proceed this way) { instruction for each loop here}

// i = index
// arr01[i] = equals the value at i
var arr01 = [1,2,3,4,5,6,7,8,9,10]
let even = []
for(let i = 0; i < arr01.length; i++) {
    if(arr01[i] %2 == 0) {
        even.push(arr01[i])
    } else {
        
    }
}
console.log(even)
