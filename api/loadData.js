const mongoose  = require("mongoose");
const dotenv = require("dotenv");
const Data = require("./models/Data");
const sampleData = require("./sample_data.json");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{ console.log("Connected to MongoDB") }
);

const load = async ()=> {
    try{
        await Data.create(sampleData);
        console.log("Database created successfully");
    } catch (err) {
        console.log(err);
    }
};

load();