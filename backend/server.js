require("dotenv").config();

const express = require('express');
const connectDB =require("./config/db");
const productRoutes = require("./routes/productRoutes")
const cors = require("cors");
const stripe = require("stripe");
const uuid = require("uuid");

connectDB();

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use(cors());


app.post("/payment",(req, res)=>{
    const {product, token}=req.body;
    console.log("PRODUCT", product);
    console.log("PRICE",product.price);
    const idempontencyKey =  uuid()

    return stripe.customers.create({
        email:token.email,
        source: token.id,

    })
    .then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: "aud",
            customer: customer.id,
            receipt_email: token.email,
            shipping: {
                name: token.card.name,
                address : {
                    country: token.card.address_country
                }
            }
        },{idempontencyKey})

    })
    .then(result => res.status(200).json(result))
    .catch(error => console.log(error))

})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server running in ${PORT}`))