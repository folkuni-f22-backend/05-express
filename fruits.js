let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']

function getAll(req, res) {
	console.log('GET /fruits')
	res.send(fruits)
}

export { getAll }
