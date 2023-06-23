const jwt=require('jsonwebtoken')

 let otpverify=(req,res,next)=>{
    let token=req.headers.authorization.split(' ')[1];
    
    if(token){
        let decoded=jwt.verify(token,'masai');
       // console.log(decoded)
        if(decoded.Useremail){
            req.body.Useremail=decoded.Useremail;
          //  console.log(req.body);
            next();
        }  
}
 }
module.exports=otpverify