const express=require("express");
const { users, products } = require("./db");
const app=express();

app.get("/",(req,res)=>{
    res.json({
        message:("your request is got successfully"),
    })
});
app.get("/html",(req,res)=>{
    res.send('<h1>Hello Express</h1>')
});
//route to get one user based on the id
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
});
//route to get all products or one product based on the id
app.get("/products/:productId?",(req,res)=>{
    const {productId}=req.params;
    if(productId){
        const findedProduct= products.find(product=>product.id==productId);
        if(!findedProduct){
         res.status(404).json({
             statusCode:res.statusCode,
             error:{
                 message:"the product not found"
             }
         })
        }else{
             res.status(200).json({
                 statusCode:res.statusCode,
                 data:{
                    user:findedProduct
        }
     })
        }
    }else{
        res.status(200).json({
            statusCode:res.statusCode,
            data:{
               products
   }
})
    }
  
})
app.listen(3000,()=>{
    console.log("connect to server")
})