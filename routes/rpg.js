const express = require('express')
const router = express.Router()
const rpgController = require('../controllers/rpg')

router.get('/rpg', rpgController.index)
router.get('/rpg/:startYear/:endYear', rpgController.show)

module.exports = router