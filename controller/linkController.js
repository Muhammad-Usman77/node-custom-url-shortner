const shortid = require("shortid");
const URL  = require("../model/linkModel")

async function handleGenerateShorterLink(req, res) {
    const body = req.body;
if(!body.redirectUrl) return res.status(400).json({erro:"url required"})
   const shortId = shortid.generate()
await URL.create({
    shortId:shortId,
    redirectUrl:body.redirectUrl,
    visitHistory:[]
});
return res.json({id:shortId})
   
}


async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId});
    return res.json({
        totalAnalytics: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {handleGenerateShorterLink,handleGetAnalytics}