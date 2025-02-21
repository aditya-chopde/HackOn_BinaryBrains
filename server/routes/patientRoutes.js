const express = require("express")
const router = express();

router.get("/", async (req, res)=>{
    return res.json({success: true,message: "working"})
})

module.exports = router;