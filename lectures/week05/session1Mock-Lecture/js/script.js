console.log('js connected')

function alertContact() {
    alert('Contact me at 555-555-5555 or me@me.com')
}
var num = 0

function liked() {
    var like = document.getElementById('like')
    num++
    like.innerText = num
}

function remove(ele) {
    ele.style.display = 'none'
}