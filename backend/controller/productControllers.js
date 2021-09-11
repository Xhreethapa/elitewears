const product = require('../models/Product');



const getAllProducts = async (req, res)=>{
    try{
        const products = await product.find({});

        res.json(products);

    } catch(error){
        console.error(error);
        res.status(500).json({
            message:"server error"
        })

    }
}

const getProductById = async (req, res)=>{
    try{
        const Product = await product.findById(req.params.id);

        res.json(Product);

    } catch(error){
        console.error(error);
        res.status(500).json({
            message:"server error"
        })

    }
}



module.exports = {
    getAllProducts,
    getProductById,
};