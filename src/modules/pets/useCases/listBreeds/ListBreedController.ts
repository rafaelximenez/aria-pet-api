import { Request, Response } from "express";
import { ListBreedUseCase } from "./ListBreedUseCase";

class ListBreedController{
    constructor(private listBreedsUserCase: ListBreedUseCase){}

    handle(request: Request, response: Response): Response{
        const all = this.listBreedsUserCase.execute();
        return response.json(all);
    }
}

export { ListBreedController };