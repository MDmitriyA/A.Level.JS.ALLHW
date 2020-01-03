var a = {
  name: 'Dmitriy',
  surname: 'Maryenko',
  age: 28
}

var b = {
  name: 'Viktor',
  surname: 'Petrenko',
  lastname: 'Anatolevich'
}

var c = {
  name: 'Viktoria',
  surname: 'Viktorivna',
  sex: "Women"
}

//

function Obj(obj) {
  for (var i in obj) {
    if (i == "name" || i == "surname" || i == "age")
    alert(i)
  }
}

//

var persons = [a, b, c, {}]
for (var i = 0; i < persons.length; i++) {
  console.log(persons[i])
}

//

for (var i = 0; i < persons.length; i++) {
  for (var x in persons[i]) {
    if (x == 'name') {
      console.log(persons[i].name)
    }
    if (x == "surname") {
      console.log(persons[i].surname)
    }
  }
}

//

for (var i = 0; i < persons.length; i++) {
  for (var x in persons[i]) {
    console.log(persons[i][x])
  }
}

//

for (var i = 0; i < persons.length; i++) {
  persons[i].fullname = String(persons[i].name + persons[i].surname)
}

//

var json = JSON.stringify(person);

console.log(json[1](${key}: ${value}))

// deserialize
?
persons.push(?)
// end deserialize

var str = "<table border='1'>"
  for (let i = 0; i < persons.length; i++) {
    for (var x in persons[i]) {
      if (x == "name" || x == "surname")
        str += `<tr>
                  <td>${x}</td>
                  <td>${persons[i][x]}</td>
                </tr>`
    }
}
str += "</table>"
console.log(str)
document.write(str)

//

var str = "<table border='1'>"
  for (let i = 0; i < persons.length; i++) {
    for (var x in persons[i]) {
        str += `<tr>
                  <td>${x}</td>
                  <td>${persons[i][x]}</td>
                </tr>`
    }
}
str += "</table>"
console.log(str)
document.write(str)

//

var str = "<table border='1'>"
  for (let i = 0; i < persons.length; i++) {
    for (var x in persons[i]) {
      str += `<tr>
                <style>tr{color:red}</style>
                <td>${x}</td>
                <td>${persons[i][x]}</td>
              </tr>`
      }
}
str += "</table>"
console.log(str)
document.write(str)

//

var str = "<table border='1'<tr>"
  for (let i=0; i < persons.length; i++) {
    for(var x in persons[i]) {
      str += `<th>${x}</th><style>tr{text-align:center}</style>`
      }
  }
  str += "</tr><tr>"
  for (let i=0; i < persons.length; i++) {
    for (var x in persons[i]) {
      str += `<td text-align='center'>${persons[i][x]}</td>`
    }
  }
  str += " </tr> </table>"
  document.write(str)

//

function htmlConstructor(textTh, textTd){
    var str = "<table border='1'>"
    this.__proto__ = String
      str += `<tr><th>${textTh}</th></tr>
              <tr><td>${textTd}</td></tr>`
  document.write(str)
}
var html = new htmlConstructor("first", "second")


//
//
//
//
//
//
// HTML optional fields
// HTML tr color
// HTML th optional
// Задание на синий пояс.
// Задание на черный пояс