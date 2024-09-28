const mongoose=require("mongoose")

const CompetitorSchema=mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    companyUrl:{
        type:String,
        required:true
    },
    companyLogo:{
        type:String,
        required:true
    },
    companyDescription:{
        type:String,
        required:true
    },
    insightList:{
        type:[mongoose.Types.ObjectId],
        ref:"Insight",
        default:[]
    }
});

const CompetitorModel=mongoose.model("Competotor",CompetitorSchema);

module.exports=CompetitorModel;