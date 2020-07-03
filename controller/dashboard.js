const Product = require('../models/product')

module.exports = {
    findProduct: async (req, res, next) => {    
        try {
            const name = req.query.name
            
            const criteria = RegExp(name, 'i')
            const result = await Product.find({ name: criteria }).limit(2)
                .select({ _id: 1, name: 1, images: 1, price: 1 })

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
    findProductById: async (req, res, next) => {
        try {
            const id =  req.params.id    
            const result = await Product.findById(id).select({name: 1, price: 1, category: 1, images:1, link:1, description:1})  
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
            const { name, price, category, images, description, link } = req.value.body
            const newProduct = new Product({
                name,
                price,
                category,
                images,
                description,
                link
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
            const id = req.params.id

            await Product.findByIdAndUpdate(id, req.body);
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
            const id = req.params.id
            await Product.findByIdAndRemove({_id: id})
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