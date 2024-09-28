const express=require("express")

const router=express.Router();
const {addUser,getAllCompetitor}=require("../Controllers/UserController")

router.route("/adduser")
            .post(addUser)

router.route("/getcompetitor")
            .get(getAllCompetitor)

module.exports=router;