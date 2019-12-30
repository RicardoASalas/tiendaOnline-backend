const {
    Invoice,
    Product,
    Invoice_Product
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
            include: [{
                model: Product,
                as: 'products'
            }]
        }, );
        res.json(invoices);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

    }

}

async function getInvoiceByUserController(req, res, next) {
    console.log("el id es: "+req.params.UserId)
    try {
        const invoices = await Invoice.findAll({
            where: {
                UserId: req.params.UserId
            },
            include: ['products']
        });
        res.status(200).send(invoices);
    } catch (error) {
        // console.error(error);
        // res.status(500).json(error);

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
                    [Op.in]: Object.keys(body.products),
                },
            }
        });


        const order = await Invoice.create({
            UserId: req.user.id,
            status: 'complete',
            totalAmount: body.totalAmount,
/*             include: [{
                model: Invoice_Product,
                as: 'invoices',
                Quantity: body.Quantity
            }] */
        });

        await order.addProducts(products);

        const invoiceProducts = await Invoice_Product.findAll({
            where: {
                productId: {
                    [Op.in]: Object.keys(body.products),
                },
                invoiceId: order.id
            }
        });

        await invoiceProducts.forEach(function(invoiceProduct) {
            invoiceProduct.update({
                Quantity: body.products[invoiceProduct.ProductId]
            })
        })
        
        await products.forEach(function(product) {
            product.update({
                stock: product.stock - body.products[product.id]
            })
        })
        
        res.status(200).send(order);
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