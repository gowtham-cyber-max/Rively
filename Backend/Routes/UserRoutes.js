const express=require("express")

const router=express.Router();
const {addUser,getAllCompetitor,addInsightByCompanyName}=require("../Controllers/UserController")


router.route("/adduser")
            .post(addUser)

router.route("/getcompetitor")
            .get(getAllCompetitor)

router.route("/addinsight")
            .post(addInsightByCompanyName);


module.exports=router;