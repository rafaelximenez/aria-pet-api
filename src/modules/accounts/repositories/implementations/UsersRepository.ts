import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

import { getRepository, Repository } from "typeorm";

class UserRepository implements IUsersRepository{
    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }

    async create({ 
        name,  
        email, 
        password,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, 
            email, 
            password,
            avatar,
            id,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.repository.findOne({ email });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = this.repository.findOne({ id });
        return user;
    }

    
}

export { UserRepository };