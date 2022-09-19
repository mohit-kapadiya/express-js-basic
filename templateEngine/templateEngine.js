const express = require('express');
const app = express();
app.set('view engine' , 'ejs');

app.get('/profile/:name', (req, res)=>{
    data ={email :'mkpatel1234@gmail.com' , address :'jetpur' , skills:['node js' , 'php', 'java']}
    res.render('profile', {name :req.params.name , data : data})
})

app.get('/profile' , (req, res)=>{
    res.send("This is the profile page");
})

app.listen(3000 , ()=>{
    console.log("listing the port at 3000")
})



/*
    A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. 
    This approach makes it easier to design an HTML page. 
*/