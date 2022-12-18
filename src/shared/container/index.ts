import { container } from 'tsyringe';

import { PetsRepository } from '../../modules/pets/repositories/implementations/PetsRepository';
import { IPetsRepository } from '../../modules/pets/repositories/IPetsRepository';

import { BreedsRepository } from '../../modules/pets/repositories/implementations/BreedsRepository';
import { IBreedsRepository } from '../../modules/pets/repositories/IBreedsRepository';

import { UserRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';

container.registerSingleton<IPetsRepository>(
    "PetsRepository",
    PetsRepository
);

container.registerSingleton<IBreedsRepository>(
    "BreedsRepository",
    BreedsRepository
);

container.registerSingleton<IUsersRepository>(
    "UserRepository",
    UserRepository
);