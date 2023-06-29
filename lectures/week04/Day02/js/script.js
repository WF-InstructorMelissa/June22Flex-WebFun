// #1 Click to change Text
function changeText(ele) {
    var newText = 'Back to the Future'
    if(ele.innerText == newText) {
        ele.innerText = '4th Content Block'
    }else {
        ele.innerText = newText
        surprise()
    }
    
}

// #2 Display Date
function displayDate() {
    var myTime = new Date()
    alert(myTime)
}

// #3 Hover Event
function changeMe() {
    // var a = document.getElementsByName('a')
    var a = document.getElementById('hover')
    // console.log("YOu found me")
    a.style.color = '#000080'
    a.style.textDecoration = 'none'
}
function returnMe() {
    // var a = document.getElementsByName('a')
    var a = document.getElementById('hover')
    // console.log("YOu found me")
    a.style.color = 'white'
    a.style.textDecoration = 'underline'
}

// #4 Increment/Decrement
// #5 Button click increase 
// #6 while loop - while x is a color hide y

function surprise() {
    var a = document.getElementById('surprise')
    a.style.display = 'block'
}

var hi = document.getElementById('hello')
var one = "Hello there"
var two = "Hey"
var three = 'Later Dude'
hi.innerText = one
hi.innerHTML =`<span> ${two}</span>`
hi.innerText = three
