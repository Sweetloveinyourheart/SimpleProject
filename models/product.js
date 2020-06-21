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
    link: {
        type: String
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
    
});

module.exports = mongoose.model('product',productSchema); 