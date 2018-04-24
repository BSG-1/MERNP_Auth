//create abstract function that uses a schema to validate the requests
//using joi (hapijs framework) - 
const Joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        //receives one schema at a time
        return (req, res, next) => {
            //check whether data got passed by validation
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            }

            //check if req.value is there, and if it isnt, set it to an empty object
            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value;
            next()

        }
    },

    schemas: {
        authSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
    }
}