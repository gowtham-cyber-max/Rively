const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI)

async function connectToMongo() {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log('Connected to MongoDB');
      }).catch(err => {
        console.error('MongoDB connection error:', err);
      });
};

module.exports=connectToMongo;