const express = require('express');
const Job = require("../model/Job.model")
const app = express.Router()

app.get("/", async(req, res) => {
    const data=await Job.find({})
    res.send(data)
})

app.get("/:id", async (req, res) => { 
    const { id } = req.params
    // console.log(language)
    try {
        const data=await Job.find({language: id})
        // console.log(data)
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})
app.post("/", async(req, res) => {
    const { company, postedAt, city,role,level,contract,position,language } = req.body;
    try {
        let data = await Job.create({company, postedAt, city,role,level,contract,position,language })
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})





module.exports=app
