var express = require('express');
var router = express.Router();

const {

    allProductController,
   // productByCategoryController,
    productByNameController
  } = require('../controllers/product.js');
  
  /* GET products listing. */

router.get('/allProduct', allProductController);
//router.get('/cat/:category', productByCategoryController);
router.get('/search', productByNameController);




module.exports = router;
