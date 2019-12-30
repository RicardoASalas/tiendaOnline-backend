var express = require('express');
var router = express.Router();
const {
    authorizationMiddleware,
  } = require('../middlewares/auth');

const {
    getAllInvoicesController,
    getInvoiceByIdController,
    getInvoiceByUserController,
    getInvoiceByAmountController,
    getInvoiceByProductController,
    orderController
} = require('../controllers/invoice');

router.get('/invoices',getAllInvoicesController);
router.get('/num/:id',authorizationMiddleware, getInvoiceByIdController);
router.get('/myproducts/:UserId',/* authorizationMiddleware,  */getInvoiceByUserController);
router.get('/amount',authorizationMiddleware, getInvoiceByAmountController);
router.get('/product',authorizationMiddleware, getInvoiceByProductController);
router.post('/order',authorizationMiddleware, orderController);

module.exports = router;