var express = require('express');
var router = express.Router();

const {

    allProductController
  } = require('../controllers/product.js');
  
  /* GET products listing. */

router.get('/allProduct', allProductController);

module.exports = router;
