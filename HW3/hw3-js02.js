// 01
var i = 1
do {
  console.log(i++)
} while ( i<=50 )

// 02
var arr = [1, 2, 3, 4, 5]

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 02 option_2 (for of)
var arr = [1, 2, 3, 4, 5]

for (var i of arr) {
  console.log(i)
}

// 03
var arr = [2, 3, 4, 5]
var x = 0

for (var i = 0; i < arr.length; i++) {
    x += arr[i]
}

// 03 option_2 (for of)
var arr = [2, 3, 4, 5]
var x = 0

for (var i of arr) {
  x += i
}

// 04
var obj = {
  'Минск': 'Беларусь',
  'Москва': 'Россия',
  'Киев': 'Украина'
 }

 for (var i in obj) {
  console.log(i, '- Это', obj[i])
}

// 05
var x = 0

while (x < 100) {
    console.log(x += 2)
}

// 06
var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

for (var i in obj) {
  console.log(i, obj[i])
  console.log('Ключ =', i)
  console.log('Элемент =', obj[i])
}

// 07
var arr = [2, 5, 9, 15, 0, 4]

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i])
  }
}

// 08
var x = [-2, 5, 7, -6, 4, -9, -2]
var y = 0

for (var i = 0; i < x.length; i++) {
  if (x[i] > 0) {
    console.log(y += x[i])
  }
}

// 08 option_2 (с выводом только суммы)
var x = [-2, 5, 7, -6, 4, -9, -2]
var y = []
var z = 0

for (var i = 0; i < x.length; i++) {
  if (x[i] > 0) {
    y.push(x[i])
  }
} 
for (var i = 0; i < y.length; i++) {
  z += y[i]
}

// 09
var arr = [1, 2, 5, 9, 4, 13, 4, 10]

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 4) {
    console.log('Есть!') 
    break
  }
}

// 10
var x = [10, 20, 30, 50, 235, 3000]

for (var i = 0; i < x.length; i++) {
    if (String(x[i]).charAt(0) === "1" || String(x[i]).charAt(0) === "2" || String(x[i]).charAt(0) === "5") {
        console.log(x[i])
    }
}

// 10 option_2 (искал в интернете, интересно было как сократить код)) )
var x = [10, 20, 30, 50, 235, 3000]

x.forEach(em => {
  if (String(em).search(/(1|2|5)/) == 0) console.log(em);
})

// 11
var st = Math.pow(2, 10)

// 12
var x = "aaa@bbb@ccc"

console.log(x.replace(/@/g, '!'))

// 13
var arr = 'aaa bbb ccc'

console.log(arr.substr(4, 3))
console.log(arr.substring(4, 7))
console.log(arr.slice(4, 7))

// 14
var date = '2025-12-31'

console.log(date.replace(/-/g, ' ').split(' ').reverse().join('/'))

// 15
var x = 'js'

console.log(x.toUpperCase())

// 16
var x = 'JS'

console.log(x.toLowerCase())

// 17
var txt = 'я учу javascript!'

console.log(txt.length)

// 18
var txt = 'я учу javascript!'

console.log(txt.slice(2, txt.length))
console.log(txt.substr(2, txt.length))
console.log(txt.substring(2, txt.length))

// 19
var txt = 'я учу javascript!'

console.log(txt.indexOf('учу'))

// 20
var txt = 'я-учу-javascript!'

console.log(txt.replace(/-/g, '!'))

// 21, 22
var txt = 'я учу javascript!'

console.log(txt.split(' '))

// 23
var date = '2025-12-31'

console.log(date.replace(/-/g, ' ').split(' ').reverse().join('.'))

// 24
var txt = ['я', 'учу', 'javascript', '!']

console.log(txt.join('+'))

// 25
var txt = 'я учу javascript!'

function Letter(txt) {
  return txt[0].toUpperCase() + txt.slice(1)
}

console.log(Letter(txt))

// 26
var txt = 'я учу javascript'

function Letter(txt) {
  return txt.slice(0, txt.length - 1) + txt[txt.length - 1].toUpperCase()
}

console.log(Letter(txt))

// 27
var txt = 'var_test_text'

function textUpper(txt) {
    var arr = txt.replace(/_/g, ' ').split(' ')
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[0]) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
          }
    }
    var txt2 = arr.join("")
    return txt2
}

console.log(textUpper(txt))

// 28
var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']
var sum = 0

for (var i of arr) {
    if (Number(i) === i || String(i) == Number(i)) {
        sum += Number(i)
    }
}
alert(sum)

// 29
var a = [ , , , , ]

for (var i = 0; i < a.length; i++) {
    a[i] = Math.random().toFixed(2)
}
var b = a.map(function(x) {
  return x*x*x*x*x
})

console.log(b)

// 30
var str = [ 'AngularJS', 'jQuery' ] 
var a = str.unshift('Backbone.js')
var b = str.push('ReactJS', 'Vue.js')
var c = str.splice(2, 0, 'CommonJS')
alert ( str.splice ( 3, 1 ) + ' Это здесь лишнее')

var dlyaLyudshix = []
for (var x of str) {
    if (x == 'Vue.js') {
        dlyaLyudshix.push('Vue.js')
    }
}
// аналог но без вывода Vue.js
var dlyaLyudshix = str.indexOf('Vue.js') // не придумал и не нашёл как вывести не индекст а саму строку Vue.js

// 31


// 32
var telephone = {
  "Brand": String(prompt("Напишите название бренда Вашего телефона?")),
  "Model": String(prompt("Какая у Вас модель телефона?")),
  "Year": String(prompt("Какого цвета Ваш телефон?")),
  "Price": String(prompt("За сколько Вы купили телефон?")),
}

for (var i in telephone) {
  console.log(i, telephone[i])
}

// 33
var str = "Как однажды Жак звонарь сломал фонарь головой"

console.log (str.replace("сломал фонарь головой", "головой сломал фонарь"))

// 34
for (i = 1; i < 7; i++) {
  for (j = 1; j < 10; j++) {
    document.write(i + 'x' + j + '=' + (i*j) + '<br>')  
  } 
  document.write('<br>')
}

// 34 option_2
var i = 1, j
while (i <= 6) { 
  j = 1
    while (j < 10) {
      document.write(i + "×" + j + "=" + (i * j) + '<br>')
    j++
    }
i++
document.write('<br>')
}



