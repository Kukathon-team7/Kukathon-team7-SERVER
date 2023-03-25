var express = require('express')
var router = express.Router()
const AlertController = require('../controllers/alertController')

router.post('/', AlertController.postAlert)
router.get('/', AlertController.getAlert)

module.exports = router