const mongoose=require('mongoose');

const blacklistschema=mongoose.Schema({
    btoken:String
})

const BlacklistingModel=mongoose.model("blacklist",blacklistschema);

module.exports={BlacklistingModel}