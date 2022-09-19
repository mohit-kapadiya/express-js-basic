module.exports = (req,res,next)=>{
    console.log("This is a router level external middleware");
    next();
}