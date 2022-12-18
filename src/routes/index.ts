import { Router } from 'express';
import { breedsRoutes } from './breeds.routes';
import { petsRoutes } from './pets.routes';

const router = Router();

router.use('/pets', petsRoutes);
router.use('/breeds', breedsRoutes);

export { router };