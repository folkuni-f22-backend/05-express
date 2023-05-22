// Importera npm-paket och filer
import express from 'express'
import { getGuestbook } from './guestbook.js'
import { getAll } from './fruits.js'


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


// För att spara antalet besök permanent, behöver man en databas
app.get('/guestbook', getGuestbook)


app.get('/grilla/:korv', (req, res) => {
	let amount = req.params.korv
	console.log('GET /grilla/:korv, params=', req.params)
	res.send(`Vi ska grilla ${amount} korvar!`)
})
app.get('/grilla', (req, res) => {
	res.status(400).send(`Hur många korvar vill du grilla?`)
})


app.get('/fruits', getAll)


// Starta servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`)
})
