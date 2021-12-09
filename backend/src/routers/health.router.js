import express from 'express';
import * as controller from '../modules/health/health.controller.js';

const router = express.Router();

/**
 * Print Hello
 * @group Monitoring Api
 * @route get /api/health
 * @returns { JSON Object } 200 - role object
 * @produces application/json
 * @consumes application/json
 */
router.get('/echo', controller.echo);

export default router;
