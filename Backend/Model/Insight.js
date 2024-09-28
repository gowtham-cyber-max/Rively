const mongoose=require("mongoose")

const InsightSchema=mongoose.Schema({
    insightHeading:{
        type:String,
        required:true

    },
    insightSubtext:{
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
    },
    sourceUrl:{
        type:String
    },
    tag:{
        type:String
    }

});

const InsightModel=mongoose.model("Insight",InsightSchema);

module.exports=InsightModel;