
import { PetsRepository } from '../../repositories/implementations/PetsRepository';
import { CreatePetUseCase } from './CreatePetUseCase';
import { CreatePetController } from './CreatePetController';

export default (): CreatePetController => {
    const petsRepository = new PetsRepository();
    const createPetUseCase = new CreatePetUseCase(petsRepository);
    const createPetController = new CreatePetController(createPetUseCase);

    return createPetController;
}