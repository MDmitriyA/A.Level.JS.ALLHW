// assign: evaluation
var a = 5
var b, c

b = ((a * 5)/2)

console.log(b) // ответ 12,5


// semicolon: error
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}
for (let i = 0 i < 5 i++) // выведет 0, затем 1, затем 2, затем 3, затем 4
alert( i )


// semicolon: mistake



// Number: age
var age = prompt('Сколько тебе лет?')
var d = new Date()
var year = d.getFullYear()
alert('Вы родились в' + ' ' + Number(year - age) + ' ' + 'году.')


// Number: temperature
var celsus = prompt('Какая сейчас температура в градусах Цельсия?')
var farengeit = celsus *1.8 + 32;
 
alert(celsus + ' ' + 'Градусов по цельсию' + ' ' + '=' + ' ' + farengeit + ' ' + 'Градусов по фаренгейту');


// Number: divide
var firstNumber = Number(prompt('Введи первое число'))
var secondNumber = Number(prompt('Введи второе число'))
alert(Math.floor(firstNumber/secondNumber))


// Number: odd
var num = prompt('Введите любое число')

if (isNaN(num) == false) {
  console.log(num)
} else {
  alert('Выведите четное число!')
}

// String: greeting
var name = String(prompt('Как твоё имя?'))
alert('Привет' + ' ' + name)


// String: lexics
var str = String(prompt('Напишите сюда текст'))
if(str.includes('не хочу', 'Вася')) {
  alert('Вы точно не это хотели написать')
} else {
  alert('Всё верно!')
}


// confirm
var yesNo = confirm('Идём дальше?') 

if (yesNo === true) {
    console.log('Идём дальше')
} else {
    console.log('Ну и как хочешь')
}

// Boolean
var firstQuestion = Boolean(confirm('А ты, сдал ДЗ?'))
var secondQuestion = Boolean(confirm('А на занятие придёшь?'))

if ( firstQuestion === true) {
    console.log('Красава!')
  } else if (firstQuestion !== true) {
    console.log('Жаль что ты не сдал!')
  } if ( secondQuestion === true) {
    console.log('Конечно!')
  } else if (secondQuestion !== true){
    console.log('Даже не хочу слышть НЕТ!!!!')
}

// Boolean: if
var firstQuestion = Boolean(confirm('Ты мужчина?'))

if ( firstQuestion === true) {
    alert('Вы мужчина!')
  } else if (firstQuestion !== true) {
    alert('Вы женщина!')
}

// Array: real
var myLife = ['car', 'work', 'home', 'sport']

// Array: booleans
var question = [firstQuestion, secondQuestion]

// Array: plus
var arr = [3,2,5]

function arraySum(array) {
var sum = 0

for(var i = 0; i < array.length - 1; i++) {
    sum += array[i]
    }
console.log(sum)
}
arr.splice(2,1, arraySum)

// Array: plus string
var arr = ['3', '2', '5']
var mas = ''

for(var i = 0; i < arr.length; i++) {
    mas += arr[i]
    }

var y = Number(arr.length);
arr[y] = mas
console.log(arr[y])

// Object: real
var car = {
  mark: "BMW", 
  color: "black",
  year: "2002",
  kM: 168591, 
}

// Object: change
var car = {
  name: "BMW", 
  color: "black",
  year: "2002",
  kM: 168591, 
}
car.name = "Volvo"
car.color = "White"

// Comparison if
var age = prompt("Сколько вам лет?")
if (age < 0){
  alert("ты ещё не родился))")
}
else if (age > 0 && age < 18){
    alert("школьник")
}
else if (age > 17 && age < 30) {
    alert("молодеж")
}
else if (age > 29 && age < 45) {
    alert("зрелость")
}
else if (age > 44 && age < 60) {
    alert("закат")
}
else if (age > 59) {
    alert("как пенсия?")
}
else {
    alert("то ли киборг, то ли ошибка");
}

// Comparison: sizes
var size = prompt("Какой у тебя размер одежды?")
if (String(size) === "S") {
  alert("Твой размер 40")
} else if (String(size) === "M") {
  alert("Твой размер 44")
} else if (String(size) === "L") {
  alert("Твой размер 46")
} else if(String(size) === "XL") {
  alert("Твой размер 50")
} else if (String(size) === "XXL") {
  alert("Твой размер 54")
}
if (Number(size) === 40) {
  alert("Твой размер S")
} else if (Number(size) === 44) {
  alert("Твой размер M")
} else if (Number(size) === 46) {
  alert("Твой размер L")
} else if (Number(size) === 50) {
  alert("Твой размер XL")
} else if (Number(size) === 54) {
  alert("Твой размер XLL")
} 


// Comparison: object

// Ternary

// Синий пояс Number: flats
var numberOfFloor = 9 // Количество этажей
var apPerFloor = 4 // Квартир на этаже
var porchInHouse  =  7 // Подьездов в доме
var flatsInPorch = numberOfFloor * apPerFloor // Квартир в подьезде
var flatsInHome = numberOfFloor * apPerFloor * porchInHouse // Квартир в доме
var numberFlat =  Number(prompt('Введите номер квартиры'))
var porch = Math.ceil(numberFlat / apPerFloor / numberOfFloor)
var floor = Math.ceil((numberFlat - (Math.floor(numberFlat / flatsInPorch) * flatsInPorch)) / apPerFloor)
if (numberFlat > flatsInHome) {
    alert('К сожалению в данном доме, нет квартиры с номером' + ' ' + numberFlat)
} 
  alert("Подъезд" + ' ' + porch + ',' + ' ' + 'Этаж' + ' ' + floor)


