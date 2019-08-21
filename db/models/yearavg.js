const mongoose = require('../connection')
const Schema = mongoose.Schema

const yearAvgSchema = new Schema({
    startYear: Number,
    avgPpg: Number,
    avgApg: Number,
    avgBpg: Number,
    avgRpg: Number,
    avgSpg: Number
})

module.exports = mongoose.model('yearAvg', yearAvgSchema)