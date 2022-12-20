const express = require('express');
const Game = require("../model/game.model")
const app = express.Router()

// ------------------------Get All user--------------------------------

app.get("/", async(req, res) => {
    const alluser= await Game.find({})
    res.send(alluser)
})


// ------------------------Get Random text--------------------------------


app.get("/random", async (req, res) => {
    try {
        let text ='';
        let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
        for (let i=0;i<5;i++) {
            text+=alpha.charAt(Math.floor(Math.random()*alpha.length))
        }
        console.log(text)
        res.send(text)

    } catch (err) {
        console.log(err);
        res.send(500).json({ error: true, message: "Internal Server Error" })
    }
})


// ------------------------Post USer--------------------------------

// app.post("/user", async(req, res) => {
//     const {name,difficulty} = req.body;
//     try {
//         const User = await Game.create({ name, difficulty })
//         res.send(User)
//     } catch (err) {
//         console.log(err)
//     }
// })



module.exports=app
