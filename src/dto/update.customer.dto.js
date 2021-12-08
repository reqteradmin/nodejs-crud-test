const Joi = require('joi');

const  CreateCustomerDto =  Joi.object({
    FirstName: Joi.string(),
    LastName: Joi.string(),
    Email: Joi.string().email().required(),
    DateOfBirth: Joi.string(),
    PhoneNumber: Joi.string(),
    BankAccountNumber: Joi.number()
 });

 module.exports = Customer;