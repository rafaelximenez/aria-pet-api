import { IPetsRepository } from '../../repositories/IPetsRepository';

import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';

interface IRequest{
    name: string;
    yearsOld: number;
    genre: string; 
}

@injectable()
class CreatePetUseCase {    
    constructor(
        @inject('PetsRepository')
        private petsRepository: IPetsRepository
    ){}

    async execute({ name, yearsOld, genre }: IRequest): Promise<void> {
        const petAlreadyExists = await this.petsRepository.findByName(name);

        if(petAlreadyExists) throw new AppError('Pet already exists');
    
        this.petsRepository.create({ name, yearsOld, genre });
    }
}

export { CreatePetUseCase }