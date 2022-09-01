const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port=process.env.PORT || 7000;
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())


// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug');
    
})
app.get('/project.pug', (req, res)=>{
    const params = {}
    res.status(200).render('project.pug');
    
})
app.get('/class4.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class4.pug');
    
})
app.get('/class5.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class5.pug');
    
})
app.get('/class6.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class6.pug');
    
})
app.get('/class7.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class7.pug');
    
})
app.get('/class8.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class8.pug');
    
})
app.get('/class9.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class9.pug');
    
})
app.get('/class10.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class10.pug');
    
})
app.get('/class11.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class11.pug');
    
})
app.get('/class12.pug', (req, res)=>{
    const params = {}
    res.status(200).render('class12.pug');
    
})
app.get('/home.pug', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug');
    
})
app.get('/about.pug', (req, res)=>{
    const params = {}
    res.status(200).render('about.pug');
    
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
