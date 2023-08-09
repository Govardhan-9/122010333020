const express = require("express")

const router = express.Router()

const numbersController = require('../controllers/numbers.controllers')

router.get('/', numbersController.getNumbers)

module.exports = router