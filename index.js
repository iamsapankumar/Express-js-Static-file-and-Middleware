const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const bodyPath = path.join(__dirname, '/public')
const app =express()
app.use(bodyParser.json())
app.use (express.static(bodyPath))

app.use('/', ()=>{
    console.log()
})

const port = process.env.PORT ||3000

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})