const mongoose=require("mongoose")

const DomainSchema=new mongoose.Schema({
    domainName:{
        type:String,
        required:true
    },
    competitors:{
        type:[String],
        required:true,
        default:[]
    }
});

const DomainModel=mongoose.model("Domain",DomainSchema)

module.exports=DomainModel;