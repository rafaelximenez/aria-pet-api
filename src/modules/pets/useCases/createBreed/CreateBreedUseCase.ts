import { IBreedsRepository } from '../../repositories/IBreedsRepository';

interface IRequest{
    name: string;
    description: string;
}

class CreateBreedUseCase {
    constructor(private breedsRepository: IBreedsRepository){}

    execute({ name, description }: IRequest): void{    
        const breedAlreadyExists = this.breedsRepository.findByName(name);

        if(breedAlreadyExists) throw new Error('Breed already exists');

        this.breedsRepository.create({ name, description });
    }
}

export { CreateBreedUseCase }