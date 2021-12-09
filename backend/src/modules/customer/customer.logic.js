import config from 'config';
import debug from '../../helpers/debug.js';

const createCustomerLogic = async (params) => {
  // inser Customer
  debug({ params, config });
  return 'ok';
};

const editCustomerLogic = async (params) => {
  // inser Customer
  debug({ params, config });
  return 'ok';
};

export { createCustomerLogic, editCustomerLogic };
