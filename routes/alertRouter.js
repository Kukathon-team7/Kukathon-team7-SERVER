var express = require('express')
var router = express.Router()
const FcmController = require('../controllers/alertController')

router.post('/alert', FcmController.postAlert)
router.get('/alert', FcmController.getAlert)


module.exports = router