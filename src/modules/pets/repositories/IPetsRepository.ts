import { Pet } from '../entities/Pet';

interface ICreatePetDTO{
    name: string;
    yearsOld: number;
    genre: string; 
}

interface IPetsRepository{
    findByName(name: string): Promise<Pet>;
    list(): Promise<Pet[]>;
    create({
        name,
        yearsOld,
        genre,
    }: ICreatePetDTO): Promise<void>;
}

export { IPetsRepository, ICreatePetDTO };