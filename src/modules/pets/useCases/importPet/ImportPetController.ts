import { Request, Response } from 'express';
import { ImportPetUseCase } from './ImportPetUseCase';

class ImportPetController{
    constructor(private importPetUseCase: ImportPetUseCase){}
    
    handle(request: Request, response: Response): Response{
        const { file } = request;

        this.importPetUseCase.execute(file);

        return response.send();
    }
}

export { ImportPetController }