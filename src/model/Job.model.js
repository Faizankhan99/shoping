const { Schema, model } = require("mongoose")

const JobData = new Schema({
    company: { type: 'String', require: true },
    postedAt: { type: 'String', require: true },
    city: { type: 'String', require: true },
    role: { type: 'String', require: true },
    level: { type: 'String', require: true },
    contract: { type: 'String', require: true },
    position: { type: 'String', require: true },
    language: { type: 'String', require: true }
},
{timestamps:true}
)
const Job = model("job",JobData)

module.exports = Job