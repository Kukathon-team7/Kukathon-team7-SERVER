var express = require('express')
var router = express.Router()
const FoodController = require('../controllers/foodController')

router.get('/list', FoodController.getList)
router.get('/search', FoodController.getSearch)
router.post('/alert', FoodController.postAlert)
router.get('/alert', FoodController.getAlert)

module.exports = router