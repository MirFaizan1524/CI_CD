let app =  require('./app.js');


const port = process.env.PORT_NUMBER || 3000;
app.listen(port,()=>{
   console.log(`listening to the portNumber ${port}`);
})

