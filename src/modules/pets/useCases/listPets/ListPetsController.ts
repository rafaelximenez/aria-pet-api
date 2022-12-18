import { Request, Response } from 'express';
import { ListPetsUseCase } from './ListPetsUseCase';

class ListPetController{
    constructor(private listPetsUseCase: ListPetsUseCase){}

    handle(request: Request, response: Response): Response{
        const all = this.listPetsUseCase.execute();    
        return response.json(all);
    }
}

export { ListPetController }