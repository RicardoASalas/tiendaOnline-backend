const { Product } = require('../models');

async function allProductController(req,res, next){

    try{
        const products = await Product.findAll({});
        res.status(200).send(products);
    }
    catch(err){
        console.log(err);

    }

}

async function productByCategoryController(req,res, next){

    try{
        const categoryInput = new RegExp(req.brand,'i');
        const products = await Product.findAll({
            
            where:{
                 category: categoryInput
                }
        });
        
        res.status(200).send(products);
    }
    catch(err){
        console.log(err);

    }

}

module.exports = {
    allProductController,
    productByCategoryController
  };

