const { Schema, model } = require('mongoose')

const bookmarkShema = new Schema({
    title: { type: 'string', required: true },
    quantity: { type: 'Number', required: true },
    priority: { type: 'string', required: true },
    date:{type:"String",default:new Date()},
    description: { type: 'string', required: true },
},
    {timestamps:true}
)

const bookmark = model("bookmark",bookmarkShema)

module.exports = bookmark