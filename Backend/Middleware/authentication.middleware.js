const jwt=require('jsonwebtoken');
const { BlacklistingModel } = require('../Models/blacklist.model');


 let authentication=async (req,res,next)=>{
    let token=req.headers.authorization.split(' ')[1];
    let balcktoken=await BlacklistingModel.find({btoken:token});
    if(balcktoken.length>0){
        res.status(200).send({msg:"Please login agian !"})
    }
    if(token){
        let decoded=jwt.verify(token,'masai');
       // console.log(decoded)
        if(decoded.userID){
            req.body.userID=decoded.userID;
          //  console.log(req.body);
            next();
        }
        else{
            res.status(400).send({msg:"Please login !"})
        }
    }else{
        res.status(400).send({msg:"Please login !"});
    }
    
    
}

module.exports={authentication}