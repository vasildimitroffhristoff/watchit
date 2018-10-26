const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => console.log(err))

})

router.get('/featured', (req, res) => {
    Product.find().limit(5)
        .then(products => res.json(products))
        .catch(err => console.log(err))
})


module.exports = router;