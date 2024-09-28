const mongoose=require("mongoose")

const InsightSchema=mongoose.Schema({
    head:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    currentDate:{
        type:Date,
        default:Date.now
    },
    companyId:{
        type:mongoose.Types.ObjectId,
        ref:"Competitor",
        required:true
    }

});

const InsightModel=mongoose.model("Insight",InsightSchema);

module.exports=InsightModel;