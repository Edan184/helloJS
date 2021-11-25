// Following  three lines typically required for all express servers
const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.listen(PORT, (req,res) => {
    console.log("Whas goood: listening on " + PORT)
})