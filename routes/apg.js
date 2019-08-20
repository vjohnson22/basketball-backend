const express = require('express')
const router = express.Router()
const apgController = require('../controllers/apg')

router.get('/apg', apgController.index)
router.get('/apg/:startYear/:endYear', apgController.show)

module.exports = router