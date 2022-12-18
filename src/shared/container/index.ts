import { container } from 'tsyringe';
import { IPetsRepository } from '../../modules/pets/repositories/IPetsRepository';
import { PetsRepository } from '../../modules/pets/repositories/implementations/PetsRepository';
import { BreedsRepository } from '../../modules/pets/repositories/implementations/BreedsRepository';
import { IBreedsRepository } from '../../modules/pets/repositories/IBreedsRepository';

container.registerSingleton<IPetsRepository>(
    "PetsRepository",
    PetsRepository
);

container.registerSingleton<IBreedsRepository>(
    "BreedsRepository",
    BreedsRepository
);