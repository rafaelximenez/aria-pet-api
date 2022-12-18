import { PetsRepository } from '../../repositories/implementations/PetsRepository';
import { ImportPetController } from './ImportPetController';
import { ImportPetUseCase } from './ImportPetUseCase';

export default (): ImportPetController => {
    const petsRepository = new PetsRepository();
    const importPetUseCase = new ImportPetUseCase(petsRepository);
    const importPetController = new ImportPetController(importPetUseCase);

    return importPetController;
}