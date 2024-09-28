const CompetitorModel=require("../Model/Competitor")

const {getInsightById}=require("../Controllers/InsightController")


// it will return the competitorid by company name 
async function getCompanyIdByName(companyName){
    try{
        const competitor=await CompetitorModel.findOne({$or:[{companyName:companyName},{companyUrl:companyName}]});
        if(competitor){
            
            return competitor._id;
        }
        else{
            const newCompetitor=new CompetitorModel(companyName);
            await newCompetitor.save();
            return newCompetitor._id;
        }
    
    }catch(er){
        console.log(er);    

    }    
}

async function addInsightToCompetitor(req,res){
    try{
        const {companyId,insightId}=req.body;

        const competitor=await CompetitorModel.findById(companyId);

        competitor.insightList.push(insightId);

        res.competitor=competitor;

    }
    catch(er){
        console.log(er);

    }
}

async function getInsightByCompetitorName(req,res) {
        try{
            const {competitorName}=req.body;

            const competitor=CompetitorModel.findOne({$or:[{companyName:competitorName},{companyUrl:competitorName}]});
           
            
            req.insightList=competitor.insightList
            getInsightById(req,res);

        }
        catch(er){
            console.log(er);

        }
}
module.exports={getCompanyIdByName,addInsightToCompetitor,getInsightByCompetitorName};