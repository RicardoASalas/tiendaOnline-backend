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

module.exports = {
    allProductController,
    productSearchController
};