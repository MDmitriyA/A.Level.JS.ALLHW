// 1
var num = Number(prompt('Введите число'))
var sum = 0

for (var i = 1; i <= num; i+=2) {
   sum+= i
}

// 2
var str = "abcde"
console.log(str.charAt(0))
console.log(str.charAt(1))
console.log(str.charAt(2))
console.log(str.charAt(3))
console.log(str.charAt(5))
var arr = str.split("")
for (var i = 0; i < arr.length; i++){
    if (arr[i] === "a" || arr[i] === "b" || arr[i] === "e"){
        console.log("Я знаю эту букву!")
    }
}

// 3
var hours = Number(prompt("Сколько сейчас часов (без минут)"))
var secondsInHours = hours * 3600
alert(secondsInHours)

// 3.1
var hours = Number(prompt("Сколько сейчас часов (без минут)"))

if (isNaN(hours) == false) {
  var secondsInHours = hours * 3600
alert(secondsInHours)
} else {
  alert('Выведите число!!!')
}

// 6
var a = 10
var b = 2
if (typeof a === "number" &&  typeof b === "number") {
    console.log("Умножение", a * b)
    console.log("Деление", a / b)
    console.log("Сумма", a + b)
    console.log("Разница", a - b)
    }

// 7
var c = 15
var d = 2
var result = c + d
alert(result)

// 8
var str = 'Привет, Мир!'
var sumCharCode = 0
for (var i = 0 ; i < str.length; i++){
 sumCharCode += str.charCodeAt(0)
} 

// 9
var name = String(prompt('Как твоё имя?'))
alert('Привет' + ' ' + name)

// 10
var num = Number(prompt("Введите число"))
alert('Квадрат числа' + ' ' + Math.pow(num, num))

// 11
var numb = Number(prompt('Введите число')) 
var item = prompt('Обозначение числа которое вы написали в прошлом окне (h-часов, d-дней, w-недели, m-месяц')

var secondsInHours = 3600
var secondsInDays = 24
var secondsInWeek = 7
var secondsInMonth = 30

if (item === 'h') {
  console.log(numb * secondsInHours)
} else if (item === 'd') {
  console.log(numb * secondsInDays * secondsInHours)
} else if (item === 'w') {
  console.log(numb * secondsInWeek * secondsInDays * secondsInHours)
} else if (item === 'm') {
  console.log(numb * secondsInMonth * secondsInWeek * secondsInDays * secondsInHours)
}