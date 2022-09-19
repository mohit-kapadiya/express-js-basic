const express = require('express');
const app = express();

const errorMiddleware = (err , req, res, next)=>{
    console.log("Hiee this is error level middleware");
    res.status(500).send("something wrong");
    res.next();
}

app.get('/',errorMiddleware , (req,res)=>{
    res.send("Hiii  this is error handling middleware")
})

app.listen(3000,()=>{
    console.log("listing the port at 3000");
})
