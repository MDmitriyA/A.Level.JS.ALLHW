// 1
setInterval(() => {
  window.scrollTo({
    top: 4000,
    behavior: 'smooth'
  })
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 1000)
}, 3000)

// 2 перепроверить перед сливом на GIThub

var x = document.querySelector('ol');
setTimeout(() => {
    x.lastElementChild.remove()
}, 3000)

// function Remove(){
//  var parent = document.getElementById('id1');
//  parent.removeChild(parent.lastElementChild);
//}

// 3
var input = document.getElementById('input1')

input.oninput = () => {
    input.style.color = isNaN(input.value) ? 'red' : 'green'
}

// 4
var idName = document.getElementById('myunique')
idName.classList.add('www')

// 5
var idName = document.getElementById('myunique')
idName.classList.remove('www')

// 6
var idName = document.getElementById('myunique')

for(var i in idName.classList) {
    if(idName.classList[i] === 'www') {
        console.log("В данном ID есть класс www")
    }
}

// 7
var idName = document.getElementById('myunique')

for(var i in idName.classList){
    if(idName.classList[i] === 'www'){
      idName.classList.remove('www')
    } else {
      idName.classList.add('www')
    }
}

// 8
console.log(idName.classList.length)

// 9
var idName = document.getElementById('myunique')
idName.onclick  = () => console.log(idName.tagName)

// 10
var id = document.getElementById('myunique')
idName.onclick  = () => console.log(idName.tagName.toLowerCase())

// 11
var clas = document.querySelectorAll('.www')
  for (i = 0; i < clas.length; i++) {
 	clas[i].innerHTML += "</br>" + clas[i].tagName;
 	clas[i].style.cssText = "text-transform: lowercase;" ;
}

// 12
var list = document.querySelector('ol')
var x = document.createElement("li")
  x.innerHTML = 'HELLO WORLD!';
  list.appendChild(x);

// 13
var a = document.getElementById('myunique_li').parentNode
var b = document.createElement('li')
  b.innerText = '!!!'
  a.appendChild(b)
var z = a.removeChild(document.getElementById('myunique_li'))
  a.append(z)

// 14
var element2 = document.getElementById('test')
element2.previousElementSibling.innerHTML += '!';