const express = require('express')
const { mongoose } = require('mongoose')
const app = express()
const Shoping = require("../Routing/shoping")
const Bookmark=require("../Routing/bookmarks")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT || 9000;
const mongo_url=process.env.mongo_url||""
app.use(cors())
app.use("/all", Shoping)
app.use("/bookmark",Bookmark)
app.get('/', (req, res) => res.send('hello'))


app.listen(PORT, async () => {
    await mongoose.connect(mongo_url)
    console.log(`server started on port ${PORT}`)
})