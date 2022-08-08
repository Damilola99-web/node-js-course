const express = require('express')


const app = express()

// register app 
app.set('view engine', 'ejs')

// listen for request 

app.listen(3005);

app.get('/', (req, res)=> {
    res.render('index')
})
app.get('/login', (req, res)=> {
    res.render('login', { test : 'our sign in to our page'})
})

// redirect 
app.get('/login-us', (req, res)=>{
    res.redirect('/login')
})

app.use((req, res)=>{
    res.status(404).render('404')
})