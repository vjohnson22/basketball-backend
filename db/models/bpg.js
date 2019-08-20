const mongoose = require('../connection')
const Schema = mongoose.Schema

const BpgSchema = new Schema({
    startYear: Number,
    block1: Number,
    block2: Number,
    block3: Number,
    block4: Number,
    block5: Number,
    block6: Number,
    block7: Number,
    block8: Number,
    block9: Number,
    block10: Number,
    avg: Number
})

module.exports = mongoose.model('Bpg', BpgSchema)