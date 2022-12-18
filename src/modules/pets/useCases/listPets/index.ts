
import { PetsRepository } from '../../repositories/implementations/PetsRepository';
import { ListPetsUseCase } from './ListPetsUseCase';
import { ListPetController } from './ListPetsController';

export default (): ListPetController => {
    const petsRepository = new PetsRepository();
    const listPetUseCase = new ListPetsUseCase(petsRepository);
    const listPetController = new ListPetController(listPetUseCase);

    return listPetController;
}
