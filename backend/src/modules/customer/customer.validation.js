import { Joi } from 'celebrate';

const validationModel = {
  createCustomer: {
    body: {
      FirstName: Joi.string().required(),
      LastName: Joi.string().required(),
      DateOfBirth: Joi.string().required(),
      PhoneNumber: Joi.string().required(),
      Email: Joi.string().required(),
      BankAccountNumber: Joi.string().required(),
    },
  },
};

export default validationModel;
