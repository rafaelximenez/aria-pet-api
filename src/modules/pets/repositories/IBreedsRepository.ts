import { Breeds } from '../entities/Breeds';

interface ICreateBreedDTO{
    name: string;
    description: string;
}

interface IBreedsRepository{
    findByName(name: string): Promise<Breeds>;
    create({ name, description }: ICreateBreedDTO): Promise<void>;
    list(): Promise<Breeds[]>;
}

export { IBreedsRepository, ICreateBreedDTO };