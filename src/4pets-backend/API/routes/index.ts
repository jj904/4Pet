import express from 'express';

import accountRoutes from './accountRoutes';
import featureRoutes from './featureRoutes';
import petRoutes from './petRoutes';

const router = express.Router();

router.use('/account', accountRoutes);
router.use('/feature', featureRoutes);
router.use('/pet', petRoutes);

export default router;