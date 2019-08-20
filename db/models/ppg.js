const mongoose = require('../connection')
const Schema = mongoose.Schema()

const PpgSchema = new Schema({
    startYear: Number,
    score1: Number,
    score2: Number,
    score3: Number,
    score4: Number,
    score5: Number,
    score6: Number,
    score7: Number,
    score8: Number,
    score9: Number,
    score10: Number,
    
})

module.exports = mongoose.model('Ppg', PpgSchema)