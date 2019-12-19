var express = require('express');
var router = express.Router();

const {

  allProductController,
  idProductController,
  productCategoryController,
  productBrandController,
  productSearchController,
} = require('../controllers/product.js');

/* GET products listing. */

router.get('/allProduct', allProductController);
router.get('/id/:id', idProductController);
router.get('/cat/:category', productCategoryController);
router.get('/br/:brand', productBrandController);
router.get('/search/:input', productSearchController);




module.exports = router;