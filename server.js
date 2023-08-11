const express = require('express')
const path = require('path')

const app = express()

app.use('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'layouts/index.html'))
})

app.use('/about', (req, res)=>{
    res.send('About')
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening on port 3000')
})