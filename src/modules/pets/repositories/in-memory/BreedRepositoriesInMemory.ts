import { Breeds } from "../../entities/Breeds";
import { IBreedsRepository, ICreateBreedDTO } from "../IBreedsRepository";

class BreedsRepositoriesInMemory implements IBreedsRepository{
    breeds: Breeds[] = [];

    async findByName(name: string): Promise<Breeds>{
        const breed = this.breeds.find((breed) => breed.name === name);
        return breed;
    }

    async create({ name, description }: ICreateBreedDTO): Promise<void>{
        const breed = new Breeds();     

        Object.assign(breed, { name, description });

        this.breeds.push(breed);        
    }

    async list(): Promise<Breeds[]>{
        const all = this.breeds;
        return all
    }
}

export { BreedsRepositoriesInMemory }