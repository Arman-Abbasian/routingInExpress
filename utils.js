function Auth (req,res,next){
const {username,password}=req.query;
if(!username || !password){
    res.status(401).json({
        statusCode:res.statusCode,
        error:{
            message:"lack of data"
        }
    })
}else if(username==="arman"&& password==="1587"){
    console.log(username)
    req.user={username,password}
    console.log(req.user)
    next()
}else{
    res.status(401).json({
        statusCode:res.statusCode,
        error:{
            message:"Authetication failed"
        }
    })
}
}
module.exports={
    Auth
}