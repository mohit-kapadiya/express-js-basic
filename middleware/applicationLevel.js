const express = require('express');
const app = express();

const appLevelMiddleware =((req,res,next)=>{
    console.log("This is Application level middleware");
    next();
})

const secondAppLevelMiddleware =((req,res,next)=>{
    console.log("This is second Application level middleware");
    next();
})

app.use(appLevelMiddleware , secondAppLevelMiddleware)

app.get('/user/:id' , (req,res)=>{
    res.send("Hii This is an Application level middleware")
})

app.get('/home', (req,res)=>{
    res.send("Hii Welcome to home page")
})

app.listen(3000 ,()=>{
    console.log("listing the port at 3000");
})



/* 
    Bind application-level middleware to an instance of the app object by using the app.use() and 
    app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
*/

/*
    application level middleware is used to apply changes on all route , not specific route
*/