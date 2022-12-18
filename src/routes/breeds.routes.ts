import { Router } from 'express';
import { CreateBreedController } from '../modules/pets/useCases/createBreed/CreateBreedController';
import { ListBreedController } from '../modules/pets/useCases/listBreeds/ListBreedController';

const breedsRoutes = Router();

const createBreedController = new CreateBreedController();
const listBreedController = new ListBreedController();

breedsRoutes.get('/', listBreedController.handle);
breedsRoutes.post('/', createBreedController.handle);

export { breedsRoutes };