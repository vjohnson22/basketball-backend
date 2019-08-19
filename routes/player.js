const express = require('express')
const router = express.Router()
const playerController = require('../controllers/player')

router.get('/', playerController.index)
router.get('/:name', playerController.showName)
router.get('/id/:id', playerController.showId)
router.post('/', playerController.create)
router.patch('/:name', playerController.update)
router.delete('/', playerController.destroy)

module.exports = router
