const Player = require('../db/models/player')

module.exports = {

    index: (req,res) => {
        Player.find({}).then(player => {
            res.json(player)
        })
    },
    index: (req,res) => {

    },
    index: (req,res) => {

    },
    index: (req,res) => {

    },
    index: (req,res) => {

    },


}