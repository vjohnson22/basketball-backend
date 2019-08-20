const mongoose = require('../connection')
const Schema = mongoose.Schema

const ApgSchema = new Schema({
    startYear: Number,
    assist1: Number,
    assist2: Number,
    assist3: Number,
    assist4: Number,
    assist5: Number,
    assist6: Number,
    assist7: Number,
    assist8: Number,
    assist9: Number,
    assist10: Number,
    avgAssist: Number
    
})

module.exports = mongoose.model('Apg', ApgSchema)