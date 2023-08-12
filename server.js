const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'layouts/index.html'))
})

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'layouts/about.html'))
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'layouts/contact.html'))
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening on port 3000')
})