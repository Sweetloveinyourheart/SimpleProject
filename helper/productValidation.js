const joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            
            const result = joi.validate(req.body, schema)
            if (result.error) {
                res.status(400).json(result.error)
            }
            if (!req.value) {
                req.value = {}
            }           
            req.value['body'] = result.value
            next()
        }
    },
    schema: {
        productSchema: joi.object().keys({
            name: joi.string().required(),
            price: joi.string().required(),
            category: joi.string().required(),
            link: joi.string().required(),
            images: joi.array(),
            description: joi.string(),
            
        })
    }
}
