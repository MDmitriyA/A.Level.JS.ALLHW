var ladysBag = {
  money: 5000,
  cosmetic: "pomade",
  cosmetic1: "carcass",
  cosmetic2: "powder",
  pen: "ballpoint"
}

ladysBag.putInBag = function (books){
  this.books =  String(books)
}

delete ladysBag.money


//


function LibraryBook (title, year, author) {


	var bookTitle = bookTitle
	var year = year
	var author = author
	var readerName = ''
	var readerDate = ''


	function giveTheBook (client) {
    readerName = client 
		readerDate = new Date().toLocaleString()
    }

	this.getBookInfo = function() {
		console.log(readerDate)
    }

	this.getTheBook = function (client) {
		if (readerName === "") {
			giveTheBook(client)
			return bookTitle
    }
		  return null
    }

	this.returnBook = function () {
		readerName = ""
		readerDate = ""
    }

}

var book = new LibraryBook("First PG", 1916, "Petr I")
book.getTheBook("Dmitriy")


//


function sampleFunc () {
	console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}
		
function modificator ( func ) {
	return function() {
		func.call(null, "test", "sample")
	}
}
		
xFunc = modificator( sampleFunc )
		
xFunc()


//

function sampleFunc () {
  console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}

function modificator ( func ) {
var x = String(func).length
console.info( `Symbols in my code: ${x}` )
}

modificator( sampleFunc )

sampleFunc()


//

function testArguments () {
	function generateError (numArgs) {
		throw({
			name: "Application", 
			message: "Invalid arguments", 
			stack: ` Function needs 3 arguments, but only 1 present ` 
		})
	}
	try {
		arguments.length >= 3 ? null : generateError (arguments.length)
	} 
	catch ( err ) {
		console.error ( `${err.name}: ${err.message}\n${err.stack}` )
	}
}
		
testArguments ( "Google" )


//

