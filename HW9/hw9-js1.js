// 1
const url1 = document.getElementsByClassName('urllink');

for (const i of url1) {
    i.onmouseover = () => {
        i.title = i.textContent
    }
}

// 2
const url2 = document.getElementsByTagName('a');

const showPath = (event) => {
    event.preventDefault()
    if (!event.currentTarget.textContent.includes(event.currentTarget.href)) {
        event.currentTarget.textContent += `(${event.currentTarget.href})`
    }
}

for (item of url2) {
    item.onclick = showPath;
}

// 3 ПРОВЕРИТЬ!!!!
/* const url3 = document.getElementsByTagName('a');

const showPath = () => {
    let el = 0;
    return function (event) {
        el++
        event.preventDefault()
        if (!item.textContent.includes(item.href)) {
            item.textContent += `(${item.href})`;
        }
        if (el >= 3) {
            item.onclick = null;
        }
    }
}

for (let item of url3) {
    item.onclick = showPath();
} */

// 4
for (let item of document.getElementsByTagName('p')){
  item.addEventListener('click', () => item.textContent **= 2)
}
/* код p{$}*20 */

// 5
for (let item of document.getElementsByTagName('a')) {
  item.onclick = () => {
      event.preventDefault()
      if (!event.currentTarget.textContent.includes(event.currentTarget.href)) {
          event.currentTarget.textContent += `(${event.currentTarget.href})`
      }
  };
}

// 6
const button = document.createElement('button')
  button.textContent = 'Hey'
document.body.append(button)
button.onclick = () => alert('Hey!!!!!')

// 7
const button2 = document.createElement('button')
button2.textContent = 'Кнопка';
button2.onclick = () => {
    button2.textContent = 'Киприч'
}
document.body.append(button2)

// 8
var input = document.getElementById('input1')

input.oninput = () => {
    input.style.color = isNaN(input.value) ? 'red' : 'green'
}

// 9
const my = document.getElementById('myunique');
my.onclick = () => {
    my.classList.add('www')
}

// 10
const my2 = document.getElementById('myunique')
my2.onclick = () => {
    my2.classList.remove('www')
}

// 11
const my3 = document.getElementById('myunique')
my3.onclick = () => {
    my3.classList.toggle('www')
}

// 12 
const my4 = document.getElementById('myunique');
my4.onclick = () => {
    my4.innerText = my4.classList.value;
}

// 13 !!!!!!

// 14
const button1 = document.getElementById("delete");
const ol = document.getElementsByTagName("ol")[0];
button.onclick = () => {
    ol.lastElementChild.remove()
}

// 15
// 16
// 17
const button3 = document.getElementsByTagName('button1')[0];
button3.onclick = () => {
    scrollTo(0,2000)
}

// 18