const express=require("express")

const router=express.Router();

const {addInsight,add}=require("../Controllers/InsightController") 

router.route("/addManualInsight")
    .get(addInsight)



module.exports=router;