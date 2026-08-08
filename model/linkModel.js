const mongoose = require("mongoose")

const linkSchema = new mongoose.Schema({
    shortId:{
        type:String, 
        // required:true,
        // unique :true
    },
    redirectUrl:{
        type:String,
        required:true,
    
    },
    visitHistory:[{
        timesstemp:{type:Number}
    }]
},
{timestamps:true}
)

const URL = mongoose.model("url", linkSchema)

module.exports = URL