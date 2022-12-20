const { Schema, model } = require("mongoose")

const GameSchema = new Schema({
    name: { type: 'String', require: true },
    score:{type: "String", require: true }
}
)
const Game = model("game",GameSchema)

module.exports = Game