const {
    Product
} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function allProductController(req, res, next) {

    try {
        const products = await Product.findAll({});
        res.status(200).send(products);
    } catch (err) {
        console.log(err);

    }

}



async function idProductController(req, res, next) {
    try {

        const product = await Product.findByPk(req.params.id);

        res.status(200).send(product);
    } catch (err) {
        console.log(err);

    }
}

async function productCategoryController(req, res, next) {

    try {
        const products = await Product.findAll({

            where: {
                category: req.params.category
            }


        })

        res.status(200).send(products);
    } catch (err) {
        console.log(err);

    }

}

async function productBrandController(req, res, next) {

    try {
        const products = await Product.findAll({

            where: {
                brand: req.params.brand
            }


        })

        res.status(200).send(products);
    } catch (err) {
        console.log(err);

    }

}

async function productSearchController(req, res, next) {

    try {
        const products = await Product.findAll({

            where: {
                [Op.or]: [{
                        name: {
                            [Op.like]: `%${req.params.input}%`
                        }
                    },
                    {
                        brand: {
                            [Op.like]: `%${req.params.input}%`
                        }
                    },
                    {
                        category: {
                            [Op.like]: `%${req.params.input}%`
                        }
                    },
                    {
                        description: {
                            [Op.like]: `%${req.params.input}%`
                        }
                    }
                ]
            }
        });

        res.status(200).send(products);
    } catch (err) {
        console.log(err);

    }

}

async function editProductController(req, res, next) {

    try {

        const NewProduct = await Product.create(req.body);
        
        res.status(200).send({
            message: 'Product created',
            NewProduct
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Product don't created",
            error: error,
          });
    }
}

module.exports = {
    allProductController,
    idProductController,
    productCategoryController,
    productBrandController,
    productSearchController,
    editProductController
};