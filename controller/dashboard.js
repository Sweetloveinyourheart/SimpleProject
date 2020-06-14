const Product = require('../models/product');

module.exports = {
    getAllProduct: async (req, res, next) => {
        try {
            const product = await Product.find()

            res.status(200).json({
                success: true,
                product
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                error
            })
        }
    },
    findProduct: async (req, res, next) => {    
        try {
            const name = req.query.name;
            
            const criteria = RegExp(name, 'i')
            const result = await Product.find({ name: criteria })
                .select({ _id: 1, name: 1, images: 1 })

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
    createNewProduct: async (req, res, next) => {
        try {
            const { name, price, category, images, description } = req.value.body
            const newProduct = new Product({
                name,
                price,
                category,
                images,
                description
            })  
            await newProduct.save()

            res.status(200).json({
                success: true,
                message: 'Saved !'
            })

        } catch (error) {
            res.status(404).json({
                success: false,
                error
            })
        }
    },
    updateAProduct: async (req, res, next) => {
        try {
            const id = req.param.id

            await Product.findOneAndUpdate(id, req.body);
            res.status(200).json({
                success: true,
                message: 'Updated !~'
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                error
            })
        }
    },
    removeAProduct: async (req, res, next) => {
        try {
            const id = req.param.id
            await Product.findOneAndDelete(id)
            res.status(200).json({
                success: true,
                message: 'Removed !'
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                error
            })
        }
    }
}