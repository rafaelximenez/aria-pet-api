import { Breeds } from "../../entities/Breeds";
import { IBreedsRepository } from "../../repositories/IBreedsRepository";

import { inject, injectable } from 'tsyringe';

@injectable()
class ListBreedUseCase{
    constructor(
        @inject('BreedsRepository')
        private breedsRepository: IBreedsRepository
    ){}

    async execute(): Promise<Breeds[]> {
        const breeds = await this.breedsRepository.list();

        return breeds;
    }
}

export { ListBreedUseCase };