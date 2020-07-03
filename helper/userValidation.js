const joi = require('joi')

module.exports = {
    validateBody: schema => {
        return (req, res, next) => {
            const result = joi.validate(req.body, schema)
            if (result.error) {
                res.status(400).json({ error: result.error })
            }
            if (!req.value) { 
                req.value = {}
            }
            req.value['body'] = result.value
            next()
        }
    },
    schema: {
        userSchema: joi.object().keys({
            username: joi.string().lowercase().required(),
            password: joi.string().min(6).required()
        })
    }
}