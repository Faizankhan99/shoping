const express = require('express');
const shoping = require("../model/shoping")
const app = express.Router()

app.get("/", async(req, res) => {
    const data=await shoping.find({})
    res.send(data)
})


app.post("/", async(req, res) => {
    const { title, quantity, priority,description } = req.body;
    try {
        let data = await shoping.create({title,quantity,priority,description})
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})



app.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const data= await shoping.deleteOne({ id })
        res.send("Date deleted succesfull")
    } catch (err) {
     console.log(err)   
    }
})


module.exports=app
