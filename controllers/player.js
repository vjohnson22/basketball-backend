const Player = require('../db/models/player')

module.exports = {

    index: (req,res) => {
        Player.find({}).then(player => {
            res.json(player)
        })
    },
    showName: (req,res) => {
        Player.findOne({name: req.params.name}).then(player => {
            res.json(player)
        })
    },
    showId: (req,res) => {
        Player.findById({_id: req.params.id}).then(player => {
            res.json(player)
        })
    },
    create: (req,res) => {
        Player.create(req.body).then(player => {
            res.json(player)
        })
    },
    update: (req,res) => {
        Player.findOneAndUpdate({name: req.params.name},req.body,{new: true}).then(player => {
            res.json(player)

        })
    },
    destroy: (req,res) => {
        Player.findOneAndDelete({name:req.params.name}).then(player => {
            console.log(`${req.params.name} has been deleted`)
        })
    }
}