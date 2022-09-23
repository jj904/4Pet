import express from 'express';

import * as account from '../controllers/accountController';
import * as feature from '../controllers/featureController'
const router = express.Router();


router.route('/').get(account.getAccount);
router.route('/:accountId').get(account.getAccount);
router.route('/').post(account.createAccount);
router.route('/:zipcode').post(feature.zipFeature);
router.route('/:accountId').delete(account.deleteAccount);
router.route('/').post(account.registerAccount);
router.route('/').post(account.loginAccount);

export default router;