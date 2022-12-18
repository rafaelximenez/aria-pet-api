import { Request, Response } from "express";
import { container } from 'tsyringe';

import { CreateBreedUseCase } from "./CreateBreedUseCase";

class CreateBreedController{
    async handle(request: Request, response: Response){
        const { name, description } = request.body;

        const createBreedUseCase = container.resolve(CreateBreedUseCase)

        await createBreedUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateBreedController };