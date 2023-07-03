console.log("I am connected correctly")


function changeMe() {
    // console.log('you moused over me')
    var i = document.getElementById('fun01')
    i.style.color = 'red'
}
function returnMe() {
    var i = document.getElementById('fun01')
    i.style.color = 'black'
}
function alertMe() {
    var i = document.getElementById('fun02')
    i.style.fontSize = '2em'
    alert("Yo I am an alert!")
}

function likeMe() {
    var i = document.getElementById('fun03')
    i.innerText++
}

function fixMe() {
    var i = document.getElementById('fun04')
    if(i.style.color == 'red') {
        i.style.color = 'blue'
        i.innerText = 'The Pen is blue'
    } else {
        i.style.color = 'red'
    }
}
var hide = false

function hideMe(ele) {
    ele.style.display = 'none'
    hide = true
    return hide
}
function bringBack() {
    var i = document.getElementById('fun05')
    if(hide) {
        i.style.display = 'inline-block'
    } else {
        console.log('already back')
    }
}