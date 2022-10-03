import express from 'express';

import accountRoutes from './accountRoutes';
import featureRoutes from './featureRoutes';

const router = express.Router();

router.use('/account', accountRoutes);
router.use('/feature', featureRoutes);

export default router;