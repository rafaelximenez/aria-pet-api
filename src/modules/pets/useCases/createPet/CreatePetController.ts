import { Request, Response } from 'express';
import { CreatePetUseCase } from './CreatePetUseCase';

class CreatePetController {
    constructor(private createPetUseCase: CreatePetUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, yearsOld, genre } = request.body;

        await this.createPetUseCase.execute({ name, yearsOld, genre });
        
        return response.status(201).send();
    }
}

export { CreatePetController };