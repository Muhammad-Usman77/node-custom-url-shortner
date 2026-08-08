const express = require("express")
const mongoose = require("mongoose")
const {connectDb} = require("./connection")
const URL = require("./model/linkModel")
const app = express()
const PORT = 8002


const linkRouter = require("./routes/linkRoutes")


connectDb("mongodb://127.0.0.1:27017/shorter-links").then(()=>console.log("MongoDb connected"))
.catch(()=>console.log("error to connect mongoDb"))

app.use(express.json())

app.use("/url", linkRouter)

app.get('/:shortId', async(req, res)=>{
    const shortId = req.params.shortId
const entry = await URL.findOneAndUpdate(
    {
        shortId,
    },
    {
        $push: {
            visitHistory: {
                timestemp: Date.now(),
            },
        },
    }
);
 res.redirect(entry.redirectUrl)
})
app.listen(PORT, ()=>{
    console.log(`db connecte port: ${PORT}`);
    
})

/*
http://localhost:8002/FukF3MLpX  // google.com
http://localhost:8002/FcnrN3yxy // gmail.com
*/