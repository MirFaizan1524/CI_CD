const express  = require("express");
const app = express();
require("dotenv").config();



// using middlewares to parseJson:

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// possible routes:
app.get('/',(req,res)=>{
    console.log("Get route was hit");
    res.json({success:true,message:"Welcome to the CI CD pipleines ldwhoeuho3f"});
})
app.get('/home',(req,res)=>{
    console.log("Get route was hit");
    res.json({success:true,message:"Welcome to the home page "});
})

module.exports = app;


