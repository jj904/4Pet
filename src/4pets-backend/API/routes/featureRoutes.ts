import express from 'express';

import * as feature from '../controllers/featureController';

const router = express.Router();

//router.route('/').post(f.createAccount);
router.route('/:zipCode').get(feature.zipFeature);
router.route('/search/:zipCode').get(feature.zipMatching);
router.route('/search/:zipCode/:accountId').get(feature.zipFilterMatching);
router.route('/search/:zipCode/:accountId/:petType').get(feature.zipPetFilterMatching);
export default router;