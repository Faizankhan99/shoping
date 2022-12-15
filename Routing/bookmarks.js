const express = require('express');
const bookmark = require("../model/Bookmarks")
const app = express.Router()

app.post("/", async (req, res) => {
    const { title, quantity, priority,description } = req.body;
    try {
        let data = await bookmark.create({title,quantity,priority,description})
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})


app.get("/", async(req, res) => {
    const data=await bookmark.find({})
    res.send(data)
})


module.exports=app