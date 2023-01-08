import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';


class CreateUserController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, password, email } = request.body;
        
        const createUserCase = container.resolve(CreateUserUseCase);

        await createUserCase.execute(
            {
                name, password, email
            }
        )

        return response.status(201).send();
    }
}

export { CreateUserController };