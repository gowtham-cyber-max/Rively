const UserModel=require("../Model/User")

async function addUser(req,res){
    try{
        const user=new UserModel(req.body);
        await user.save();
        res.json(user);
    }
    catch(err){
        res.status(400).json({message:err.message});
        }

}

async function getAllCompetitor(req,res){
    const {userId}=req.body;
    try{
        const competitor=await UserModel.findById(userId).select("competitors");
        res.json(competitor);
    }
    catch(err){
            res.status(400).json({message:err.message});
    }
}

module.exports={getAllCompetitor,addUser};