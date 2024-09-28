const express = require('express') 


const cors = require('cors');
const dotenv = require('dotenv');
const connectToMongo=require("./DB/Mongo");

const conn=connectToMongo();

// middle
const app = express();
app.use(express.json());
app.use(cors());


//routes
const userRoutes = require('./Routes/UserRoutes');
const domainRoutes = require('./Routes/DomainRoutes');


app.use("/user",userRoutes);
app.use("/domain",domainRoutes);


app.listen( 5000,() => { console.log("server in 5000") } )

