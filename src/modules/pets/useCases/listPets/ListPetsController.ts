import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPetsUseCase } from './ListPetsUseCase';

class ListPetController{
    async handle(request: Request, response: Response): Promise<Response> {
        const listPetsUseCase = container.resolve(ListPetsUseCase)

        const all = await listPetsUseCase.execute();    
        return response.json(all);
    }
}

export { ListPetController }