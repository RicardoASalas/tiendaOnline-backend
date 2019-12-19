const {
    Invoice,
    Product
} = require('../models');
const Op = require('sequelize').Op;

async function getAllInvoicesController(req, res, next) {

    try {
        const invoices = await Invoice.findAll({
            include: [Product]
        });
        res.status(200).send(invoices);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

    }

}

async function getInvoiceByIdController(req, res, next) {

    try {
        const invoices = await Invoice.findAll({
            where: {
                id: req.params.id
            },
            include: [ { model: Product, as: 'products' } ]
        }, );
        res.json(invoices);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

    }

}

async function getInvoiceByUserController(req, res, next) {

    try {
        const invoices = await Invoice.findAll({
            where: {
                UserId: req.user.id
            },
            include: [Product],
        });

        res.status(200).send(invoices);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

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
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

    }

}

async function getInvoiceByProductController(req, res, next) {

    try {
        const productId = req.body.ProductId
        const invoices = await Invoice.findAll({
            JOIN: 'Invoice_Products',
            ON: {
                ProductId: productId
            }
        });
        res.status(200).send(invoices);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

    }
}

async function orderController(req, res, next) {

    try {
        const body = req.body;

        const products = await Product.findAll({
            where: {
                id: {
                    [Op.in]: body.products,
                },
            },
            //   include: [ { model: Invoice, as: 'invoices' } ]
        });
        console.log('hola')
        // const allProducts = body.products.map(id => {
        //   return products.find(p => p.id === id);
        // });
        const order = await Invoice.create({
            UserId: req.user.id,
            status: 'complete',
            totalAmount: body.totalAmount,
        });
        await order.addProducts(products);

        res.status(200).send(order);;
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
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