const express = require("express")

const {handleGenerateShorterLink,handleGetAnalytics} = require("../controller/linkController")

const router = express.Router()

router.post("/", handleGenerateShorterLink)
router.get("/analytics/:shortId",handleGetAnalytics)

module.exports = router

