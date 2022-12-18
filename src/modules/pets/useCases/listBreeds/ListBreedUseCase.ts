import { Breeds } from "../../entities/Breeds";
import { IBreedsRepository } from "../../repositories/IBreedsRepository";

class ListBreedUseCase{
    constructor(private breedsRepository: IBreedsRepository){}

    execute(): Breeds[]{
        const breeds = this.breedsRepository.list();

        return breeds;
    }
}

export { ListBreedUseCase };