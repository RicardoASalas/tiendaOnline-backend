var express = require('express');
var router = express.Router();

const {

    allProductController,
   // productByCategoryController,
    productSearchController
  } = require('../controllers/product.js');
  
  /* GET products listing. */

router.get('/allProduct', allProductController);
//router.get('/cat/:category', productByCategoryController);
router.get('/search/:input', productSearchController);




module.exports = router;
