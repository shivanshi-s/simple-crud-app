const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const app  = express()

app.use(express.json)

app.get('/', (req, res)=> {
    res.send("Hello from Node API Server")
})

app.post('/api/products', async(req, res) => {
    // res.send("Data Received")
    try {
        const product = await Product.create( req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://shivanshi:j2z9u57SpgfgMUJZ@backenddb.iybdkl8.mongodb-qa.net/NODE-API?retryWrites=true&w=majority&appName=BACKENDDB")
    .then(() => {
        console.log("Connected to the database");
        app.listen(3000, () => {
            console.log("Server running on port 3000")
        });
    })
    .catch(() => {
        console.log("Connection Failed");
        
    })