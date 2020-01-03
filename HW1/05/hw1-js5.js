var day = "Friday"
if (day !== String("Saturday") && day !== String("Sunday")){
    console.log("Тебе пора работать!")
} else {
    console.log("Выходные! Завязывай с работой!")
}

// тернарка

var day = "Friday"
var mes = (day !== "Saturday" && day !== "Sunday") ? 'Тебе пора работать!' :
  'Выходные! Завязывай с работой!';
  console.log(mes)