var express = require('express');
var router = express.Router();

const {

    allProductController,
    productByCategoryController
  } = require('../controllers/product.js');
  
  /* GET products listing. */

router.get('/allProduct', allProductController);
router.get('/allProduct', productByCategoryController);

module.exports = router;
