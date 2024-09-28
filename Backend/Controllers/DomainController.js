const DomainModel=require("../Model/Domain")


// add one domain
async function addDomain(req,res){
    try{

        const domain = new DomainModel(req.body);

        await domain.save();
        res.status(201).json(domain);
    }
    catch(er){
        console.log(er);
        res.status(500).json({ message: "error on add domain" });
    }
}
// get all domain name only
async function getAllDomainOnly(req,res){
    try{
        const domain = await DomainModel.find().select("domainName");
        res.json(domain);
        }
        catch(er){
            console.log(er);
            res.status(500).json({ message: "error on get all domain" });
        }
}

// get compettitors based on domain
async function getCompetitors(req, res) {
    try {
        const domain = await DomainModel.findOne({ domainName: req.body.domainName }).select("competitors");
        if (domain) {
            res.json(domain.competitors);  // Only return the competitors array
        } else {
            res.status(404).json({ message: "Domain not found" });
        }
    } catch (er) {
        console.log(er);
        res.status(500).json({ message: "Error fetching competitors" });
    }
}


module.exports={addDomain,getAllDomainOnly,getCompetitors};