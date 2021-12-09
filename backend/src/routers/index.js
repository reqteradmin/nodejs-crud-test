import express from 'express';
import healthRouter from './health.router.js';
import customerRouter from './customer.router.js';

const router = express.Router();

router.use('/health', healthRouter);
router.use('/customers', customerRouter);

export default router;
