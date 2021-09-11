const express = require('express');
const router = express.Router();

const{ getAllProducts, getProductById} = require('../controller/productControllers')

//@desc get all products from db
//@route get /api/ products
//@access public
router.get('/', getAllProducts)

//@desc get all products from db
//@route get /api/ products/:id
//@access public

router.get('/:id', getProductById)

module.exports = router;