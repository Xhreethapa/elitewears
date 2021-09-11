require('dotenv').config();

const productsData= require("./data/Products");
const connectDB = require("./config/db");
const product= require("./models/Product");

connectDB();

const importData = async () =>{
    try{
        await product.deleteMany({});
        await product.insertMany(productsData);

        console.log('data import success');
        process.exit();

    } catch (error){
        console.error('error with data import');
        process.exit(1);
    }
}

importData();