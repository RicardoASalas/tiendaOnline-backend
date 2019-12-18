const {
    Invoice
} = require('../models');


async function getAllInvoicesController(req, res, next) {

    try {
        const invoices = await Invoice.findAll({});
        res.status(200).send(invoices);
    } catch (err) {
        console.log(err);

    }

}

async function getInvoiceByIdController(req, res, next) {

    try {
        const id = req.body.id
        const invoices = await Invoice.findAll({
            where: {
                id
            }
        });
        res.status(200).send(invoices);
    } catch (err) {
        console.log(err);

    }

}

async function getInvoiceByUserController(req, res, next) {

    try {
        const userId = req.body.UserId
        const invoices = await Invoice.findAll({
            where: {
                UserId: userId
            }
        });
        
        res.status(200).send(invoices);
    } catch (err) {
        console.log(err);

    }

}



async function getInvoiceByAmountController(req, res, next) {

    try {
        const amount = req.body.totalAmount
        const invoices = await Invoice.findAll({
            where: {
                totalAmount: amount
            }
        });
        res.status(200).send(invoices);
    } catch (err) {
        console.log(err);

    }

}

async function getInvoiceByProductController(req, res, next) {

    try {
        const productId = req.body.ProductId
        const invoices = await Invoice.findAll({
            JOIN: 'Invoice_Products', ON: {
                ProductId: productId
            }
        });
        res.status(200).send(invoices);
    } catch (err) {
        console.log(err);

    }
}

async function orderController(req, res, next) {

    try {
        console.log(req.body)

        const invoice = await Invoice.create(req.body);
        res.status(200).json({
            message: 'order done',
            invoice: invoice,
        });
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllInvoicesController,
    getInvoiceByUserController,
    getInvoiceByIdController,
    getInvoiceByAmountController,
    getInvoiceByProductController,
    orderController
};
