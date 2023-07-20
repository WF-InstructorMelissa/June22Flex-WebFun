let url = 'https://dojo.navyladyveteran.com/squishies/'


async function getSquish() {
    var res = await fetch(`${url}`)
    let data = await res.json()
    console.log('the res.json', data)
    console.log(data[0].name)
    var p = document.createElement('p')
    var testName = document.createTextNode(data[0].name)
    p.appendChild(testName)
    document.getElementById('test').innerText = data[0].name
    for(let i = 0; i < data.length; i++) {
        var div = document.createElement('div')
        var img = new Image()
        var h3 = document.createElement('h3')
        var button = document.createElement('button')
        var id = data[i].id
        button.setAttribute('onClick', `hide(${id})`)
        button.innerText = 'hideMe'
        div.className = 'img'
        div.setAttribute('id', `${data[i].id}`)
        h3.innerText = data[i].name
        img.src = data[i].img
        img.alt = data[i].name
        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(button)
        document.getElementById('squishies').appendChild(div)
    }
}

getSquish()

function hide(id) {
    let ele = document.getElementById(id)
    ele.style.display = 'none'
}