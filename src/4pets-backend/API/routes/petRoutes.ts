import express from 'express';

import * as pet from '../controllers/petController';

const router = express.Router();

router.route('/:accountId').get(pet.getPets);
router.route('/').get(pet.getAllPets);
router.route('/search/:petType').get(pet.getCertainPets);
router.route('/search/:petType/:accountId').get(pet.petMatching);

export default router;