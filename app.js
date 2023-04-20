const express=require("express");
const { users } = require("./db");
const app=express();

app.get("/",(req,res)=>{
    res.json({
        message:("your request is got successfully"),
    })
});
app.get("/html",(req,res)=>{
    res.send('<h1>Hello Express</h1>')
});
app.get("/users/:id",(req,res)=>{
    console.log(users)
   const findedUser= users.find(user=>user.id==req.params.id);
   if(!findedUser){
    res.status(404).json({
        statusCode:res.statusCode,
        error:{
            message:"the user not found"
        }
    })
   }else{
        res.status(200).json({
            statusCode:res.statusCode,
            data:{
               user:findedUser
   }
})
   }
})
app.listen(3000,()=>{
    console.log("connect to server")
})