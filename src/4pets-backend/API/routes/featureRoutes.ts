import express from 'express';

import * as feature from '../controllers/featureController';

const router = express.Router();

//router.route('/').post(f.createAccount);
router.route('/:zipCode').get(feature.zipFeature);

export default router;