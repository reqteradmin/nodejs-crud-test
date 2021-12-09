var express = require('express');
var router = express.Router();
const CustomerController = require('../controller/customerController');
const ValidationMiddleware = require('../middleware/vallidation.middleware');
const createDto = require('../dto/create.customer.dto');

router.get('/',new CustomerController().GetAll);
router.post('/',ValidationMiddleware(createDto),new CustomerController().Create);

module.exports = router;