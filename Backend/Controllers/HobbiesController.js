const HobbieModel=require("../Model/Hobbie");

async function addOneUser(req, res) {
    try {
        const user = new HobbieModel(req.body);
        await user.save();
        res.status(201).json(user); // Status 201 for successful creation
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding user", error: err.message }); // Respond with error
    }
}

const getTriggerAdvice = async (req, res) => {
  const { userEmail, triggerName } = req.body;

  try {
    // Find the user by email
    const user = await HobbieModel.findOne({ email: userEmail });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the specific trigger
    const trigger = user.triggers.find(t => t.trigger_name === triggerName);
    
    if (!trigger) {
      return res.status(404).json({ message: 'Trigger not found' });
    }

    // Randomly select 3 to 4 pieces of advice from the trigger's advice list
    const adviceList = trigger.advice;
    const randomAdvices = [];

    // Ensure we don't exceed the length of adviceList
    const numberOfAdvicesToSelect = Math.min(4, adviceList.length);
    
    // Shuffle the advice list and select the first few
    const shuffledAdvices = adviceList.sort(() => 0.5 - Math.random());
    
    for (let i = 0; i < numberOfAdvicesToSelect; i++) {
      randomAdvices.push(shuffledAdvices[i]);
    }

    return res.status(200).json({ randomAdvices });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
async function getdata(req,res){
  try{
      const user=await HobbieModel.findById(req.body.id);
      res.json(user);  
    }
  catch(er){
    console.log(er);
  }
}



module.exports = { addOneUser,getTriggerAdvice,getdata };
