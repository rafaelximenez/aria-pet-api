import { Request, Response } from "express";
import { container } from 'tsyringe';

import { ListBreedUseCase } from "./ListBreedUseCase";

class ListBreedController{    
    async handle(request: Request, response: Response): Promise<Response> {
        const listBreedsUserCase = container.resolve(ListBreedUseCase);

        const all = await listBreedsUserCase.execute();
        return response.json(all);
    }
}

export { ListBreedController };