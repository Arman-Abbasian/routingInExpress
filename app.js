const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.json({
        message:("your request is got successfully"),
        users:[
            {id:1,name:"Arman"},
            {id:2,name:"javad"},
            {id:3,name:"Ahmad"},
        ]
    })
});
app.get("/html",(req,res)=>{
    res.send('<h1>Hello Express</h1>')
})
app.listen(3000,()=>{
    console.log("connect to server")
})