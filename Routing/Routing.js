const express = require('express');
const Job = require("../model/job.model")
const app = express.Router()

// console.log(Job)
/// ------------------------Get all--------------------------------

app.get("/", async(req, res) => {
    const data=await Job.find({})
    res.send(data)
})
// -----------------------Getbylanguage--------------------------------

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

// -----------------------Posting--------------------------------

app.post("/", async(req, res) => {
    const { company, postedAt, city,role,level,contract,position,language } = req.body;
    try {
        let data = await Job.create({company, postedAt, city,role,level,contract,position,language })
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})

// -----------------------Sorting--------------------------------

app.get("/", async (req, res) => {
    const{page=1,limit=16,orderBy="id",order="asc"}=req.query
  const data = await Job.find({})
  .sort({[orderBy]:order==="asc"?1:-1})
  .skip((page-1)*limit)
  .limit(limit)
  res.send(data);
});




module.exports=app
