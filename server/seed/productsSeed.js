const Product = require('../models/Product');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))


const products = [
    new Product({
        name: "Suunto 25G",
        price: 145,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315274/watchit/smart-watch-821559_960_720.jpg",
        category: "suunto",
        featured: true
    }),
    new Product({
        name: "Suunto XI",
        price: 495,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315274/watchit/smart-watch-821557_960_720.jpg",
        category: "suunto",
        featured: true
    }),
    new Product({
        name: "Suunto GF",
        price: 219,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315274/watchit/smart-watch-889639_960_720.jpg",
        category: "suunto",
        featured: true
    }),
    new Product({
        name: "Garmin XF",
        price: 239,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315274/watchit/smartwatch-828786_960_720.jpg",
        category: "garmin"
    }),
    new Product({
        name: "Garmin XG30",
        price: 329,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315274/watchit/watch-2910920_960_720.jpg",
        category: "garmin",
        featured: true
    }),
    new Product({
        name: "Garmin XG30",
        price: 429,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315273/watchit/smart-watch-821563_960_720.jpg",
        category: "garmin",
        featured: true
    }),
    new Product({
        name: "Suunto X0",
        price: 199,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315273/watchit/watch-2996385_960_720.jpg",
        category: "suunto",
        featured: true
    }),
    new Product({
        name: "Suunto X++",
        price: 259,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315273/watchit/apple-916402_960_720.jpg",
        category: "suunto"
    }),
    new Product({
        name: "Suunto XG30",
        price: 329,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315273/watchit/apple-2561475_960_720.jpg",
        category: "suunto"
    }),
    new Product({
        name: "Polar XX",
        price: 329,
        image: "https://res.cloudinary.com/dctggpdo6/image/upload/v1541315273/watchit/polar-a360-2059937_960_720.jpg",
        category: "polar"
    })
]    

let done = 0;

for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
          exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
  }