const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        default:""
    },
    income:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    car:{
        type:String,
        default:""
    },
    quote:{
        type:String,
        default:""
    },
    phone_price:{
        type:Number,
        default:""
    }
}, {timestamps: true});

module.exports = mongoose.model("Data", dataSchema)