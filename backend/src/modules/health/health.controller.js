/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import * as logic from './health.logic.js';

const echo = (req, res, next) => {
  try {
    const result = logic.echo();
    return res.send(result);
  } catch (error) {
    next(error);
  }
};

export { echo };
