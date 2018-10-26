const Product = require('../models/Product');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))


const products = [
    new Product({
        name: "Brocolli - 1 Kg",
        price: 120,
        image: "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        category: "vegetables"
    }),
    new Product({
        name: "Cauliflower - 1 Kg",
        price: 60,
        image: "https://images.pexels.com/photos/277459/pexels-photo-277459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        category: "vegetables"
    }),
    new Product({
        name: "Cucumber - 1 Kg",
        price: 48,
        image: "https://images.pexels.com/photos/277316/pexels-photo-277316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        category: "vegetables"
    }),
    new Product({
        name: "Beetroot - 1 Kg",
        price: 32,
        image: "https://images.pexels.com/photos/66226/wrist-watch-watch-clock-time-66226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        category: "vegetables"
    }),
    new Product({
        name: "Carrot - 1 Kg",
        price: 56,
        image: "https://images.pexels.com/photos/236900/pexels-photo-236900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        category: "vegetables"
    }),
    new Product({
        name: "Tomato - 1 Kg",
        price: 16,
        image: "https://images.pexels.com/photos/1120275/pexels-photo-1120275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        category: "vegetables"  
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