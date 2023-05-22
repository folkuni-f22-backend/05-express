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


// Starta servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`)
})
