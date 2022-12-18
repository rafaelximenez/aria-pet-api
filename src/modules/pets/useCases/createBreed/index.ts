
import { BreedsRepository} from '../../repositories/implementations/BreedsRepository';
import { CreateBreedUseCase } from './CreateBreedUseCase';
import { CreateBreedController } from './CreateBreedController';

export default (): CreateBreedController => {
    const breedsRepository = new BreedsRepository();
    const createBreedUseCase = new CreateBreedUseCase(breedsRepository);
    const createBreedController = new CreateBreedController(createBreedUseCase);

    return createBreedController;
}
