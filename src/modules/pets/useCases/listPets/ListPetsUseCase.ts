import { Pet } from '../../entities/Pet';
import { IPetsRepository } from '../../repositories/IPetsRepository';
class ListPetsUseCase{
    constructor(private petsRepository: IPetsRepository){}

    execute(): Pet[]{    
        const pets = this.petsRepository.list();

        return pets;
    }
}

export { ListPetsUseCase };