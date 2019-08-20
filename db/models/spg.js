const mongoose = require('../connection')
const Schema = mongoose.Schema

const SpgSchema = new Schema({
    startYear: Number,
    steal1: Number,
    steal2: Number,
    steal3: Number,
    steal4: Number,
    steal5: Number,
    steal6: Number,
    steal7: Number,
    steal8: Number,
    steal9: Number,
    steal10: Number,
    avg: Number
    
})

module.exports = mongoose.model('Spg', SpgSchema)