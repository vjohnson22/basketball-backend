const express = require('express')
const router = express.Router()
const ppgController = require('../controllers/ppg')

router.get('/ppg', ppgController.index)
router.get('/ppg/:startYear', ppgController.show)

module.exports = router