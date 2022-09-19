const express = require('express');
const app = express();
const externalMiddleware = require('./externalMiddleware');
const route = express.Router();


const singleRoute = (req,res,next)=>{
    console.log("This is route level middleware");
    next();
}

const multiRoute = (req,res,next)=>{
    console.log("This is  multiple route level middleware");
    next();
}

route.use(multiRoute)

// single route-level middleware
app.get('/home', singleRoute , (req,res)=>{
    res.send("Hiee this is the home page")
})

app.get('/about', externalMiddleware , (req,res)=>{
    res.send("Hiee this is the about page")
})

route.get('/user1' , (req,res)=>{
    res.send("Hiee this is First User Page")
})

route.get('/user2', (req,res)=>{
    res.send("Hiee this is Second User Page")
})

app.use('/',route)


app.listen(3000,()=>{
    console.log("listing the port at 3000");
})




/*
    application level middleware is used to apply changes on specific route
*/

/*
    group of route level middleware , appply only these route , where calling
      the method using route object
*/