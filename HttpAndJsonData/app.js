const express = require('express')
const app = express();

app.get('/',(req,res)=>{
   res.send("Hello! Welcome to Express JS");
})


app.get('/home', (req, res)=>{
    /* res.send("<h1>Welcome to my home page</h1>"); */
    res.write("<h1>Welcome to my home page</h1>");
    res.send();
}
)

app.get('/about', (req, res)=>{
    const student={
        name :'mohit',
        rollNo : 1,
        city : 'jetpur'
    }
    res.send(student);

    // we can use res.json also

    /* 
            res.json(student); 
    */
}
)

app.listen(8000,()=>{
    console.log("listing the port at 8000");
})


/*
    note :
    1) res.send()
    This method automatically sets the Content-Type response header as well based on the argument passed to the send() method.

    2) res.json()
    It sends a JSON response. This method is identical to res.send() when an object or array is passed, but it also converts non-objects to json.

    3) res.end()
    We can use res.end() if we want to end the response without providing any data.

    But the main difference between res.json and res.send comes into picture when you have to pass non objects as a response. 
    res.json will convert non objects (ex. null, undefined etc) as well which are actually not a valid JSON 
    whereas res.send will not convert them.


*/