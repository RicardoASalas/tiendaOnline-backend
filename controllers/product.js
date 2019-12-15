const { Product } = require('../models');

async function allProductController(req,res, next){
    console.log("entra aqui")
    try{
        const products = await Product.findAll({});
        res.status(200).send(products);
    }
    catch(err){
        console.log(err);

    }

}

module.exports = {
    allProductController
  };

