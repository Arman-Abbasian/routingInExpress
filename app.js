const express=require("express");
const querystring=require("querystring");
const { users, products, posts } = require("./db");
const req = require("express/lib/request");
const app=express();
app.use(express.json());
app.use(express.urlencoded());

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
app.get("/file.txt",(req,res)=>{
    res.status(200).json({
        statusCode:res.statusCode,
        data:{
            file:req.url
        }
    })
});
//make routes with regex
app.get("/ab?cd/",(req,res)=>{
    res.status(200).json({
        statusCode:res.statusCode,
        data:{
            file:req.url
        }
    })
});
//qurystrings in routes
app.get("/querystrings",function(req,res){
    console.log((req.query))
    res.status(200).json({
        statusCode:res.statusCode,
        data:{
            message:"successfully",
            querysting:req.query,
            stringifyQuerystring:querystring.stringify(req.query)
        }
    })
})
//search in posts db qurystrings in routes
app.get("/posts",function(req,res){
    const {title}=req.query;
    const queryTitle=new RegExp(title ?? '','ig');
    const matchedTitles=posts.filter(item=>item.title.match(queryTitle))
    res.status(200).json({
        statusCode:res.statusCode,
        data:{
            message:"successfully",
            posts:matchedTitles
        }
    })
})
//send data with body
app.post("/body",(req,res)=>{
    res.status(201).json({
        statusCode:res.statusCode,
        data:{
            message:"send data successfully",
            data:{
                body:req.body
            }
        }
    })
})
app.listen(3000,()=>{
    console.log("connect to server")
})