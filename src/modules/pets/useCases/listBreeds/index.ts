
import { BreedsRepository } from '../../repositories/implementations/BreedsRepository';
import { ListBreedUseCase } from './ListBreedUseCase';
import { ListBreedController } from './ListBreedController';

export default () => {
    const breedsRepository =  new BreedsRepository();
    const listBreedUseCase = new ListBreedUseCase(breedsRepository);
    const listBreedController = new ListBreedController(listBreedUseCase);

    return listBreedController;
};
