const mongoose = require('../connection')
const Schema = mongoose.Schema

const PlayerSchema = new Schema ({
    name: String,
    ppg: Number,
    apg: Number,
    rpg: Number,
    spg: Number,
    bpg: Number,
    startYear: Number,
    endYear: Number,
    image: String,
    video: String
})

module.exports = mongoose.model("Player", PlayerSchema)