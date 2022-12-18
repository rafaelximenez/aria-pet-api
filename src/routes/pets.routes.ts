import { Router } from 'express';
import multer from 'multer';

import { CreatePetController } from '../modules/pets/useCases/createPet/CreatePetController';
import { ListPetController } from '../modules/pets/useCases/listPets/ListPetsController';
import importPetController from '../modules/pets/useCases/importPet';

const petsRoutes = Router();

const upload = multer({
    dest: './tmp',

});

const createPetController = new CreatePetController();
const listPetController = new ListPetController();

petsRoutes.get('/', listPetController.handle);
petsRoutes.post('/', createPetController.handle);

export { petsRoutes };