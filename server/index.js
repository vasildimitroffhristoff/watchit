const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const productsRoute = require('./routes/api/products');

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());    

app.use('/api/products', productsRoute);    

const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})