const express=require("express")

const router=express.Router();
const {addOneUser,getTriggerAdvice}=require("../Controllers/HobbiesController")
router.route("/adduser")
    .post(addOneUser)
router.route("/get-trigger")
    .post(getTriggerAdvice)
    
module.exports=router;
