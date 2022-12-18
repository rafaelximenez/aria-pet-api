import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePetUseCase } from './CreatePetUseCase';

class CreatePetController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, yearsOld, genre } = request.body;
        
        const createPetUseCase = container.resolve(CreatePetUseCase)

        await createPetUseCase.execute({ name, yearsOld, genre });
        
        return response.status(201).send();
    }
}

export { CreatePetController };