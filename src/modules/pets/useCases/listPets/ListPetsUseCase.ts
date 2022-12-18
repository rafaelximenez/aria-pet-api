import { Pet } from '../../entities/Pet';
import { IPetsRepository } from '../../repositories/IPetsRepository';

import { inject, injectable } from 'tsyringe';

@injectable()
class ListPetsUseCase{
    constructor(
        @inject('PetsRepository')
        private petsRepository: IPetsRepository
    ){}

    async execute(): Promise<Pet[]> {    
        const pets = await this.petsRepository.list();

        return pets;
    }
}

export { ListPetsUseCase };