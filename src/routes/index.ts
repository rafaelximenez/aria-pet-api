import { Router } from 'express';
import { breedsRoutes } from './breeds.routes';
import { petsRoutes } from './pets.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/pets', petsRoutes);
router.use('/breeds', breedsRoutes);
router.use('/users', usersRoutes);

export { router };