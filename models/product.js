const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    description: {
        type: String,
    },
    images: {
        type: Array
    },
    create_date: {
        type: Date,
        default: Date.now()
    },
    Snum: {
        type: Number
    }
});

module.exports = mongoose.model('product',productSchema); 