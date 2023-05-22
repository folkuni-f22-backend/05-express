let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']

function getAll(req, res) {
	console.log('GET /fruits')
	res.send(fruits)
}

function getOne(req, res) {
	let maybeIndex = req.params.index
	// index kommer från URL
	// index har datatypen String, eftersom det kommer från URL som också är String
	let index = Number(maybeIndex)
	// Om det inte gick att omvandla till ett Number, är index NaN
	if( isNaN(index) ) {
		// Felaktig index-parameter
		// 400 == Bad request, felaktigt utformat
		console.log('GET /fruits/:index , felaktigt värde på index-parametern')
		res.sendStatus(400)
	}
	else if( index > fruits.length - 1 ) {
		// Avrunda ett tal: floor, ceil(ing), round
		let r = Math.floor(Math.random() * fruits.length)
		res.send(fruits[r])
	}
	else if( index < 0 ) {
		console.log('GET /fruits/:index , index utanför arrayen')
		res.sendStatus(400)
		// res.status(400).send('index utanför arrayen')
	} else {
		let fruit = fruits[index]
		res.send(fruit)
	}
}

/*
5c* Men om ett request innehåller en URL parameter med namnet index så ska servern skicka tillbaka frukten med det indexet.Tänk på att skicka en lämplig HTTP status code om index inte är ett giltigt index.

5d* Om index är för högt ska servern skicka ett slumpvis valt element i arrayen, i stället för en felkod. 
*/


export { getAll, getOne }
