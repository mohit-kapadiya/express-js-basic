
const express = require('express');
const path = require('path')
const app = express();

const staticPath = path.join(__dirname , "../public")

//built in middleware
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send("Hello! Welcome to Express JS")
})

app.get('/about', (req,res)=>{
    res.status(200).send("Hii ! welcome to about page")
})

app.listen(8000, ()=>{
    console.log("listing the port at 8000")
})