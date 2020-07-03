const Product = require('./../models/product');

module.exports = {
    getProduct: async (req, res, next) => {
        try {
            var page = req.params.page
            var limit = page*8
            var skip = limit -8
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
            var limit = page*8
            var skip = limit -8
            var category = RegExp("Áo", "i")
            const result = await Product.find({category}).sort({ create_date: -1 }).limit(limit).skip(skip);
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
            var limit = page*8
            var skip = limit -8
            var category = RegExp('Quần', "i")
            const result = await Product.find({category}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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
            var limit = page*8
            var skip = limit -8
            var category = RegExp('Váy', "i")
            const result = await Product.find({category}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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
            var limit = page*8
            var skip = limit -8
            var category = RegExp('Set', "i")
            const result = await Product.find({category}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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
            var limit = page*8
            var skip = limit -8
            var category = RegExp('Phụ Kiện', "i")
            const result = await Product.find({category}).sort({ create_date: -1 }).limit(limit).skip(skip);
            
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