const express = require('express');
const app = express();

app.get('/' , (req, res)=>{
    res.send("Hello");
})
app.get('/home' , (req, res)=>{
    res.sendFile(__dirname+'/home.html');
})

app.get('/about' , (req, res)=>{
    res.sendFile(__dirname+'/about.html')
})

app.listen(3000 , ()=>{
    console.log("listing the port at 3000");
})