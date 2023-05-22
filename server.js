// Importera npm-paket och filer
import express from 'express'
import { getGuestbook } from './guestbook.js'


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



// Starta servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`)
})
