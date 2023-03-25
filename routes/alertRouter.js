var express = require('express')
var router = express.Router()
const FcmController = require('../controllers/alertController')

router.post('/', FcmController.postAlert)
router.get('/', FcmController.getAlert)

module.exports = router