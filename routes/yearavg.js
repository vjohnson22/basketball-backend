const express = require('express')
const router = express.Router()
const yearAvgController = require('../controllers/yearavg')

router.get('/yearavg', yearAvgController.index)
router.get('/yearavg/:startYear/:endYear', yearAvgController.show)

module.exports = router