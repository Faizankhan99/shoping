const express = require('express')
const { mongoose } = require('mongoose')
const cors = require("cors")
const Job=require("../Routing/Routing")
require("dotenv").config()
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
require("dotenv").config()
const PORT = process.env.PORT || 9000;
const mongo_url=process.env.mongo_url||""


app.get('/', (req, res) => res.send('hello'))

app.use("/job", Job)

app.listen(PORT, async () => {
    await mongoose.connect(mongo_url)
    console.log(`server started on port ${PORT}`)
})