var express = require('express');
var router = express.Router();

const {
    getAllInvoicesController,
    getInvoiceByIdController,
    getInvoiceByUserController,
    getInvoiceByAmountController,
    getInvoiceByProductController,
    orderController
} = require('../controllers/invoice');

router.get('/invoices', getAllInvoicesController);
router.get('/invoice-id', getInvoiceByIdController);
router.get('/invoice-user', getInvoiceByUserController);
router.get('/invoice-amount', getInvoiceByAmountController);
router.get('/invoice-product', getInvoiceByProductController);
router.post('/order', orderController);

module.exports = router;