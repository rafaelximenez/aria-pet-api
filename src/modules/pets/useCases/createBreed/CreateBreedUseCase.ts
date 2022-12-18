import { IBreedsRepository } from '../../repositories/IBreedsRepository';

import { inject, injectable } from 'tsyringe';

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateBreedUseCase {
    constructor(
        @inject('BreedsRepository')
        private breedsRepository: IBreedsRepository
    ){}

    async execute({ name, description }: IRequest): Promise<void> {    
        const breedAlreadyExists = await this.breedsRepository.findByName(name);

        if(breedAlreadyExists) throw new Error('Breed already exists');

        this.breedsRepository.create({ name, description });
    }
}

export { CreateBreedUseCase }