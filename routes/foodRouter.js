var express = require('express')
var router = express.Router()
const BoardController = require('../controllers/foodController')

router.get('/list', BoardController.getBoard)

module.exports = router