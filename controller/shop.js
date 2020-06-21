const Product = require('./../models/product');

module.exports = {
    getProduct: async (req, res, next) => {
        try {
            var page = req.params.page
            var limit = page*2
            var skip = limit -2
            const result = await Product.find().sort({ create_date: -1 }).limit(limit).skip(skip);
            
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
    getShirtsProduct: async (req, res, next) => {
        try {
            var page = req.params.page
            var limit = page*2
            var skip = limit -2
            const result = await Product.find({category: 'Áo'}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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
    getTrousersProduct: async (req, res, next) => {
        try {
            var page = req.params.page
            var limit = page*2
            var skip = limit -2
            const result = await Product.find({category: 'Quần'}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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
    getDressesProduct: async (req, res, next) => {
        try {
            var page = req.params.page
            var limit = page*2
            var skip = limit -2
            const result = await Product.find({category: 'Váy'}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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
    getCostumesProduct: async (req, res, next) => {
        try {
            var page = req.params.page
            var limit = page*2
            var skip = limit -2
            const result = await Product.find({category: 'Set'}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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
    getAccessoriesProduct: async (req, res, next) => {
        try {
            var page = req.params.page
            var limit = page*2
            var skip = limit -2
            const result = await Product.find({category: 'Phụ Kiện'}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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