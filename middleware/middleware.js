const express = require('express');


const app = express();

app.get('/' , (req, res)=>{
    res.send("Hello Welcome to my Tutorial")
})

//middleware functions

const middleware = (req,res,next)=>{
    console.log("this is a middleware function");
    req.time = Date.now();
    next();
}

const requireJsonContent = ()=>{
    return (req, res, next)=>{
        if(req.headers['content-type'] !== 'application/json'){
            req.status(400).send('Server require application/json')
        }else{
            next();
        }
    }
}


app.post('/about' , requireJsonContent(),(req, res)=>{
    res.send("Yaa! It is json")
})


app.get('/home' ,middleware, (req, res)=>{
    console.log("this is home page")
    res.send(`Hello Welcome to Home Page ${req.time}`);
})

app.listen(3000 ,()=>{
    console.log("listing the port at 3000");
})


/*  

Note:
Middleware functions are functions that have access to the request object (req), the response object (res), 
and the next function in the application’s request-response cycle. The next function is a function in the Express router which, 
when invoked, executes the middleware succeeding the current middleware.

middleware functions that are loaded first are also executed first.

*/