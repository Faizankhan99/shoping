const express = require("express")
const Course = require("../model/Course")
const jwt = require("jsonwebtoken")
const app = express.Router();

app.get("/", async (req, res) => {
    const user = await Blog.find({})
    res.send(user)
})
app.post("/", async (req, res) => { 
    const { title,price, description,date} = req.body;
    try {
        const course = await Course.create({ title,price, description,date,imgUrl:"https://picsum.photos/200/300.jpg" })
        // blog.save()
        res.send({message:"Course Added succesfully"})
    } catch (err) { 
        res.send(err.message)
    }
})


module.exports = app

