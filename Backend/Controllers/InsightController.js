const InsightModel=require("../Model/Insight")

const {getCompanyIdByName,addInsightToCompetitor}=require("../Controllers/CompetitorController");

const axios=require("axios");

async function addInsight(element){
    try{
        const {insights}=element;
        console.log(insights)
        
        const insight=new InsightModel(insights);
        
        await insight.save();
        console.log(insight);
        
    }
    catch(er){
        console.log(er)

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

async function PythonInsightRequest(comp){
    try{
        const company=comp.competitors;
            const Res=await axios.post("http://localhost:8000/scrape/insights",{company});
            console.log(Res.data[0].insights);
            for (const element of Res.data) {
               
                await addInsight(element); 

            }

    }
    catch(er){
        console.log(er)
    }

}

module.exports={addInsight,getInsightById,PythonInsightRequest}