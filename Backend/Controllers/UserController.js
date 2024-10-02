const UserModel=require("../Model/User")
const HobbieModel=require("../Model/Hobbie");
const {PythonInsightRequest}=require("./InsightController")
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

async function addInsightByCompanyName(req,res) {
    const {userId}=req.body;
    try{
        const competitor=await UserModel.findById(userId).select("competitors");
        PythonInsightRequest(competitor);
        // getUserById(userId);
    }
    catch(er){
        res.status(400).json({message:er.message});
    }
}

async function getUserById(req,res){

    const {userId}=req.body;
    try{
        const competitor=await UserModel.findById(userId);
        res.json(competitor);
    }
    catch(er){
        res.status(400).json({message:er.message});
    }
}



module.exports={getAllCompetitor,addUser,addInsightByCompanyName,getUserById};