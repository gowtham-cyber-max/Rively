const express=require("express")

const router=express.Router();
const {addOneUser,getTriggerAdvice,getdata}=require("../Controllers/HobbiesController")
router.route("/adduser")
    .post(addOneUser)
router.route("/get-trigger")
    .post(getTriggerAdvice)
router.route("/get-data")
    .post(getdata)
    
module.exports=router;
