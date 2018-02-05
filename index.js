const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app =express()
app.use(bodyParser.json())
const bodyPath = path.join(__dirname, '/public')
app.use (express.static(bodyPath))
app.set('view engine', 'ejs')


app.get('/:id', (req, res)=>{
    res.render('person', {ID: req.params.id})
})
const port = process.env.PORT ||3000

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})