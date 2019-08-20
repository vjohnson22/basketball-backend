const express = require('express')
const router = express.Router()
const bpgController = require('../controllers/bpg')

router.get('/bpg', bpgController.index)
router.get('/bpg/:startYear/:endYear', bpgController.show)

module.exports = router