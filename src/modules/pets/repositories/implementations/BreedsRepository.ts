import { Breeds } from '../../entities/Breeds';
import { IBreedsRepository, ICreateBreedDTO } from '../IBreedsRepository';

import { getRepository, Repository } from 'typeorm';

class BreedsRepository implements IBreedsRepository {
    private repository: Repository<Breeds>;

    private static INSTANCE: BreedsRepository;

    constructor(){
        this.repository = getRepository(Breeds);
    }

    async create({ name, description }: ICreateBreedDTO): Promise<void> {
        const breed = this.repository.create({
            name, 
            description
        });
        
        await this.repository.save(breed);
    }

    async findByName(name: string): Promise<Breeds>{
        const breed = this.repository.findOne({ name });

        return breed;
    }

    async list(): Promise<Breeds[]> {
        const breeds = await this.repository.find();
        return breeds;
    }
    
}

export { BreedsRepository };