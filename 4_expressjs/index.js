const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => res.send('Hello World! - Gobika P - 7376222IT138'))
app.get('/gobika', (req, res) => res.send('Hello World! - Gobika P - 7376222IT138'))
app.listen(PORT, () => console.log(
'Example app listing at http://localhost:${PORT}'))