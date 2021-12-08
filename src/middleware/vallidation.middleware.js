const Joi = require('joi');
const HttpException = require('../exceptions/http.exception')

 function ValidationMiddleware(schema){
    return  (req, res, next) => {
    const options = {
        abortEarly: false
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(new HttpException(error.details.map(x => x.message).join(', '),400));
    } else {
        req.body = value;
        next();
    }
}
}
module.exports = ValidationMiddleware;
