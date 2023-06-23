const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    Phone_No:Number,
    email:{
        unique:true,
        type:String},
    Name:String,
    password:String,
    role:String,
    course:String,
    verify:Boolean
})

const UserModel=mongoose.model("user",userSchema);

module.exports={UserModel}