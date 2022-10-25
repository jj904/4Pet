import express from 'express';

import * as pet from '../controllers/petController';

const router = express.Router();

router.route('/:accountId').get(pet.getPets);

export default router;