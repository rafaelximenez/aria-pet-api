import { Request, Response } from "express";
import { CreateBreedUseCase } from "./CreateBreedUseCase";

class CreateBreedController{
    constructor(private createBreedUseCase: CreateBreedUseCase){}

    handle(request: Request, response: Response){
        const { name, description } = request.body;

        this.createBreedUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateBreedController };