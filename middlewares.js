const express=require("express");
const querystring=require("querystring");

const { users, products, posts } = require("./db");
const { Auth } = require("./utils");

const app=express();
app.use(express.json());
//app.use(express.urlencoded());
app.use((req,res,next)=>{
    console.log('Hello');
    next()
});
app.get("/auth",Auth,(req,res)=>{
    res.status(201).json({
        statusCode:res.statusCode,
        data:{
            username:req.user.username,
            password:req.user.password
        }
    })
})


app.listen(3000,()=>{
    console.log("connect to server")
})