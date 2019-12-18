const { Product } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function allProductController(req,res, next){

    try{
        const products = await Product.findAll({});
        res.status(200).send(products);
    }
    catch(err){
        console.log(err);

    }

}

async function productByNameController(req,res, next){

    try{
        const products = await Product.findAll({
            
            where:{
                 name:{
                     [Op.like]: `%${req.body.name}%`
                 } 
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
    productByNameController
  };

