import { IPetsRepository } from '../../repositories/IPetsRepository';

interface IRequest{
    name: string;
    yearsOld: number;
    genre: string; 
}

class CreatePetUseCase {
    constructor(private petsRepository: IPetsRepository){}

    async execute({ name, yearsOld, genre }: IRequest): Promise<void> {
        const petAlreadyExists = await this.petsRepository.findByName(name);

        if(petAlreadyExists) throw new Error('Pet already exists');
    
        this.petsRepository.create({ name, yearsOld, genre });
    }
}

export { CreatePetUseCase }