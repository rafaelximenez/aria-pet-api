import { Router } from 'express';
import createBreedController from '../modules/pets/useCases/createBreed';
import { listBreedController } from '../modules/pets/useCases/listBreeds';

const breedsRoutes = Router();

breedsRoutes.get('/', (request, response) => { 
    return listBreedController.handle(request, response);
});

breedsRoutes.post('/', (request, response) => { 
    return createBreedController().handle(request, response);
});

export { breedsRoutes };