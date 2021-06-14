const express = require('express')

const app = express()

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    let file = path.resolve('src', 'contact-EN.html')

    res.sendFile(file)

})

app.get('/contact-EN', function(req, res) {
    let file = path.resolve('src', 'contact-EN.html')

    res.sendFile(file)

})

app.get('/contact-ES', function(req, res) {
    let file = path.resolve('src', 'contact-ES.html')

    res.sendFile(file)

})

app.get('/localJS', function(req, res) {
    let file = path.resolve('src', 'contact.js')

    res.sendFile(file)

})

app.listen(3000)

//https://rooftop.dev/contact