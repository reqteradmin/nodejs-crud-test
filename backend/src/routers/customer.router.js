import express from 'express';
import { celebrate } from 'celebrate';
import * as controller from '../modules/customer/customer.controller.js';
import vmodel from '../modules/customer/customer.validation.js';

const router = express.Router();

const validate = (vModel) => {
  const vmodelObject = vModel;
  return celebrate(vmodelObject);
};

/**
 * Send Pdf
 * @group Send Pdf
 * @route post /api/customer
 * @returns { JSON Object } 200 - role object
 * @param { string } fileName.body.required The File Name
 * @param { string } base64.body.required ImageUri
 * @produces application/json
 * @consumes application/json
 */
router.get(
  '/',
  controller.createCustomer,
);

/**
 * Send Pdf
 * @group Send Pdf
 * @route post /api/customer
 * @returns { JSON Object } 200 - role object
 * @param { string } fileName.body.required The File Name
 * @param { string } base64.body.required ImageUri
 * @produces application/json
 * @consumes application/json
 */
router.post(
  '/',
  validate(vmodel.createCustomer),
  controller.createCustomer,
);

export default router;
