import express from 'express'
const router = express.Router()

// HTTP metoder: GET, POST, PUT, DELETE
// CRUD: Create, Read, Update, Delete


let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']

// Man skriver inte med "/fruits" eftersom det står i server.js!
router.get('/', (req, res) => {
	console.log('GET /fruits')
	res.send(fruits)
})

router.get('/:index', (req, res) => {
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
})

router.post('/', (req, res) => {
	console.log('POST /fruits, body är: ', req.body)
	// Plocka ut fruktens namn, om det finns
	let maybeFruit = req.body?.name

	if( maybeFruit !== '' ) {
		fruits.push(maybeFruit)
		res.sendStatus(200)
	}
	else {
		res.sendStatus(400)
	}
})

export default router
