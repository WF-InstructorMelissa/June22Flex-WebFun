var a =  document.getElementById('button')
console.log('the element', a)

function btn() {
    alert('Hello from js file')
}

// activate me when the function is called via a click in this case and apply it to the element that called it

function h1Color(element) {
    element.style.backgroundColor = 'orange'
    element.style.color = 'pink'
    element.style.fontSize = '2em'
}
// 1em = 16px = p

function hideCat(element) {
    element.style.display = 'none'
}

function showMe() {
    var a = document.getElementById('hideMe')
    a.style.display = 'flex'
}
function growMe() {
    var f = document.getElementById('footer')
    f.style.color = 'purple'
    f.style.fontSize = '4em'
}
function returnMe() {
    var f = document.getElementById('footer')
    f.style.color = 'white'
    f.style.fontSize = '1.17em'
}


var updateNum =  document.getElementById('theNum')
num = 27
// num = parseInt(num, 10)
function increase() {
    console.log('before', num)
    num++
    console.log('after', num)
    updateNum.innerText = num
}