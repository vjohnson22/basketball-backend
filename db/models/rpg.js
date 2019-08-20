const mongoose = require('../connection')
const Schema = mongoose.Schema

const RpgSchema = new Schema({
    startYear: Number,
    rebound1: Number,
    rebound2: Number,
    rebound3: Number,
    rebound4: Number,
    rebound5: Number,
    rebound6: Number,
    rebound7: Number,
    rebound8: Number,
    rebound9: Number,
    rebound10: Number,
    avg: Number
    
})

module.exports = mongoose.model('Rpg', RpgSchema)