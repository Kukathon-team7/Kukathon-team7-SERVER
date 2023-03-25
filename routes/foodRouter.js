var express = require('express')
var router = express.Router()
const FoodController = require('../controllers/foodController')

router.get('/list', FoodController.getList)
router.get('/search', FoodController.getSearch)


module.exports = router