const express  = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT_NUMBER || 3000;

// using middlewares to parseJson:

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// possible routes:
app.get('/',(req,res)=>{
    console.log("Get route was hit");
    res.json({success:true,message:"Welcome to the CI CD pipleines"});
})
app.get('/home',(req,res)=>{
    console.log("Get route was hit");
    res.json({success:true,message:"Welcome to the home page "});
})


app.listen(port,()=>{
   console.log(`listening to the portNumber ${port}`);
})

