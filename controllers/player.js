const Player = require('../db/models/player')


router.get('/:name', playerController.showName)
router.get('/id/:id', playerController.showId)
router.post('/', playerController.create)
router.patch('/', playerController.update)
router.delete('/', playerController.destroy)


module.exports = {

    index: (req,res) => {
        Player.find({}).then(player => {
            res.json(player)
        })
    },
    showName: (req,res) => {

    },
    showId: (req,res) => {

    },
    create: (req,res) => {

    },
    update: (req,res) => {

    },
    destroy: (req,res) => {

    }
}