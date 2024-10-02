const mongoose=require("mongoose")

const InsightSchema=mongoose.Schema({
    company:{
        type:String
    },
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
    sourceUrl:{
        type:String
    },
    tag:{
        type:String
    }

});

const InsightModel=mongoose.model("Insight",InsightSchema);

module.exports=InsightModel;