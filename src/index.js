const express=require('express')

var app=express()

let port = 10000;
app.get("/",function(req,res){
    res.send("this is my trying");
});
app.listen(port,() =>{
    console.log(`this server is running on port ${port}`)
});

app.post("/getch",(req,res)=>{
    res.send('chance')
});