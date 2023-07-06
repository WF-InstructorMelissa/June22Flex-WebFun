console.log('js connected')

function contact() {
    alert("Reach me at 555-555-5555 or me@me.com")
}

function changeImg() {
    var i = document.getElementById('img')
    console.log('the value of i', i, i.alt)
    if(i.alt == "image01") {
        i.src = './images/image02.jpeg'
        i.alt = 'image02'
    } else {
        i.src = './images/image01.jpeg'
        i.alt = 'image01'
    }
}