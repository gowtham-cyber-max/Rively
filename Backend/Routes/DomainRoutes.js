const express=require("express")

const router=express.Router();
const {addDomain,getAllDomainOnly,getCompetitors}=require("../Controllers/DomainController")

router.route("/adddomain")
            .post(addDomain)

router.route("/getdomains")
        .get(getAllDomainOnly)

router.route("/getallcompetitors")
        .get(getCompetitors)


module.exports=router;