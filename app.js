const express = require('express')


const app = express()

// listen for request 

app.listen(3000);

app.get('/', (req, res)=> {
    res.sendFile('./frontEnd/index.html', {root: __dirname})
})
app.get('/login', (req, res)=> {
    res.sendFile('./frontEnd/login.html', {root: __dirname})
})

// redirect 
app.get('/login-us', (req, res)=>{
    res.redirect('/login')
})