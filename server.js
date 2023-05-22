// Importera npm-paket och filer
import express from 'express'


// Konfigurera webbservern
const app = express()  // app = server-objekt
const PORT = 1337


// Lägga till middleware


// Lägga till routes
app.get('/', (req, res) => {
	// request-objektet innehåller allt som har att göra med inkommande HTTP REQUEST
	// response-objektet använder vi för att skicka ett svar
	// Alla RUOTES måste anropa SEND exakt en gång
	res.send('Hello from server')
})
app.get('/hedgehog', (req, res) => {
	res.send('Hedgehogs are the best')
})

/*
4b Lägg funktionen som guestbook - endpoint använder i en separat fil och importera den till servern.
*/
// För att spara antalet besök permanent, behöver man en databas
let visits = 0
app.get('/guestbook', (req, res) => {
	visits = visits + 1
	// visits++
	res.send('Du är besökare nummer ' + visits)
})



// Starta servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`)
})
