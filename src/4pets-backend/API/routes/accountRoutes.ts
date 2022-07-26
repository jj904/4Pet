import express from 'express';

import * as account from '../controllers/accountController';

const router = express.Router();


router.route('/').get(account.getAccount);
router.route('/:accountId').get(account.getAccount);
router.route('/').post(account.createAccount);
router.route('/:accountId').delete(account.deleteAccount);

export default router;