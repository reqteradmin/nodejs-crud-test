/* eslint-disable consistent-return */
import * as createCustomerLogic from './customer.logic.js';

const createCustomer = async (req, res, next) => {
  try {
    // const { base64, fileName } = req.body;
    const customer = await createCustomerLogic.createCustomerLogic();
    return res.send(customer);
  } catch (error) {
    next(error);
  }
};

const editCustomer = async (req, res, next) => {
  try {
    const { base64, fileName } = req.body;
    const customer = await createCustomerLogic.createCustomerLogic({ base64, fileName });
    return res.send(customer);
  } catch (error) {
    next(error);
  }
};

export { createCustomer, editCustomer };
