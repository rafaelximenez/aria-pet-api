import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase{
    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ 
        name, 
        username, 
        email, 
        password 
    }: ICreateUserDTO): Promise<void>{
        await this.usersRepository.create({
            name, 
            username, 
            email, 
            password
        });
    }
}

export { CreateUserUseCase }