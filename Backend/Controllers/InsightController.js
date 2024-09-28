const InsightModel=require("../Model/Insight")

const {getCompanyIdByName,addInsightToCompetitor}=require("../Controllers/CompetitorController");

const axios=require("axios");

async function addInsight(req,res){
    try{
        const {head,description}=req.body;

        const companyId=getCompanyIdByName(req.body.companyName);

        const insight=new InsightModel({head,companyId,description});
        
        await insight.save();

        addInsightToCompetitor(companyId,insight._id);

        res.insight=insight;
    }
    catch(er){
        res.status(400).json({message:er.message});

    }


}
async function getInsightById(req,res){
    try{
        const insight=await InsightModel.find({
            _id:{$in:req.insightList}
        });
        
        res.json(insight);
    }
    catch(er){
        res.status(400).json({message:er.message});

    }
}

async function PythonInsightRequest(competitors){
    try{
            const Insight=await axios.post("",competitors);
            Insight.forEach(element => {
                req.body=element;
                addInsight(req,res);    
            });




    }
    catch(er){
        console.log(er)
    }

}

module.exports={addInsight,getInsightById}