// Magic function so that I don't have to misspell console.log I can just type print
function print(a,num) {
    console.log("printing line", num, a)
}
print('I am connected', 5)

function h4Style() {
    var x = document.getElementById('h4Style')
    x.style.fontSize = '32px'
    x.style.color = 'red'
}

function addImg() {
    var imgDiv = document.getElementById('addImg')
    var img = new Image()
    img.src = './images/DSCN1146.JPG'
    img.alt = 'An Image'
    imgDiv.appendChild(img)
}
function showImg() {
    var y = document.getElementById('hidden')
    y.style.display = 'flex'
    y.style.flexDirection = 'row'
    y.style.justifyContent = 'space-evenly'
    y.style.width = '1500px'
}
function stringAlert() {
    var word = 'Hello'
    alert(`I am a string ${word}`)
}
function likeMe() {
    var like = document.getElementById('like')
    var z = like.innerText
    z++
    like.innerText = z
}
function stringSpan() {
    var a = document.getElementById('stringSpan')
    var theForm = document.theString.string.value
    // console.log('what is the form', theForm)
    a.innerText = theForm
}
function adding(a,b) {
    var add = document.getElementById('add')
    var sum = a + b
    add.innerText = sum
}
function adding02() {
    var add = document.getElementById('add')
    var num1 = parseInt(document.form01.num01.value)
    var num2 = parseInt(document.form01.num02.value)
    var sum = num1 + num2
    add.innerText = sum
}
function ifLoop() {
    let arr01 = []
    var res = document.getElementById('results')
    for(var i = 0; i < 12; i++) {
        if(i % 2 == 0) {
            arr01.push({[i]: 'Even'})
        } else {
            arr01.push({[i]: "Odd"})
        }
    }
    console.log(arr01)
    // res.innerText = Object.values(arr01)
    let resultString = "";

            // Iterate through each object in the array and get its value
            for (let obj of arr01) {
                let value = Object.values(obj)[0];
                resultString += value + ", "; // Append the value to the result string
            }

            // Remove the last comma and space from the result string
            resultString = resultString.slice(0, -2);

            // Set the resultString as the innerText of the 'results' element
            res.innerText = resultString;
}