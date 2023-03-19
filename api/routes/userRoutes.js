const express = require('express')
const router = express.Router()
const { addEmploye } = require('../controllers/employéesController')

router.post('/addEmploye', addEmploye)

module.exports = router