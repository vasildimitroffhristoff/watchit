const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    tag: {
        type: String
    },
    featured: {
        type: Boolean
    }
})

module.exports = Product = mongoose.model('products', ProductSchema)