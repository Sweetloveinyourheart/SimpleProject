const Product = require('../models/product');

module.exports = {
    latestProduct: async (req, res, next) => {
        try {
            const result = await Product.find().limit(4).sort({ create_date: -1 })
            res.status(200).json({
                success: true,
                product: result
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                error
            })
        }
    },
    mostExpensiveProduct: async (req, res, next) => {
        try {
            const r = Math.floor(Math.random()*8)
            const result = await Product.find().limit(1).skip(r)
            res.status(200).json({
                success: true,
                product: result
            })
            
        } catch (error) {
            res.status(404).json({
                success: false,
                error
            })
        }
    }
    
}