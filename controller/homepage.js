const Product = require('../models/product');

module.exports = {
    latestProduct: async (req, res, next) => {
        try {
            const result = await Product.find().sort({ create_date: -1 }).limit(4)
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
    
}