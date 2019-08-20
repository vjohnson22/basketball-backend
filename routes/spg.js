const express = require('express')
const router = express.Router()
const spgController = require('../controllers/spg')

router.get('/spg', spgController.index)
router.get('/spg/:startYear/:endYear', spgController.show)

module.exports = router