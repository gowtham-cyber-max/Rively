const express=require("express")

const router=express.Router();

const {addInsight}=require("../Controllers/InsightController") 

router.route("/addManualInsight")
    .get(addInsight)



module.exports=router;