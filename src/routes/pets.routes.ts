import { Router } from 'express';
import multer from 'multer';

import createPetController from '../modules/pets/useCases/createPet';
import listPetController from '../modules/pets/useCases/listPets';
import importPetController from '../modules/pets/useCases/importPet';

const petsRoutes = Router();

const upload = multer({
    dest: './tmp',

});

petsRoutes.get('/', (request, response) => { 
    return listPetController().handle(request, response);
});

petsRoutes.post('/', (request, response) => { 
    return createPetController().handle(request, response);
});

petsRoutes.post('/import', upload.single("file"), (request, response) => {
    return importPetController().handle(request, response);
})

export { petsRoutes };