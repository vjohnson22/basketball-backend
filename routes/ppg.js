const express = require('express')
const router = express.Router()
const ppgController = require('../controllers/ppg')

router.get('/:startYear/:endYear', playerController.show)