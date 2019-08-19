const mongoose = require('../connection')
const Schema = mongoose.Schema

const SearchedSchema = new Schema ({
    name: String,
    playerId: {
        type: Schema.Types.ObjectId,
        ref: "Player"
    }
})

module.exports = mongoose.model("Searched", SearchedSchema)