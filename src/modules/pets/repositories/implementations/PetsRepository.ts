import { Pet } from '../../entities/Pet';
import { IPetsRepository, ICreatePetDTO } from '../IPetsRepository';

import { getRepository, Repository } from 'typeorm';

class PetsRepository implements IPetsRepository{
    private repository: Repository<Pet>;

    constructor(){
        this.repository = getRepository(Pet);
    }

    async create({ name, yearsOld, genre }: ICreatePetDTO): Promise<void> {
        const pet = this.repository.create({
            name, 
            yearsOld,
            genre
        });
        

        await this.repository.save(pet);
    }

    async list(): Promise<Pet[]>{
        const pets = await this.repository.find();
        return pets;
    }

    async findByName(name: string): Promise<Pet>{
        const pet = await this.repository.findOne({ name });
        return pet;
    }
}

export { PetsRepository }