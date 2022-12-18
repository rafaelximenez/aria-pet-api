import { parse } from 'csv-parse';
import { response } from 'express';
import fs from 'fs';
import { IPetsRepository } from '../../repositories/IPetsRepository';

interface IImportPet{
    name: string;
    yearsOld: number;
    genre: string;
}

class ImportPetUseCase {
    constructor(private petRepository: IPetsRepository){}

    loadPets(file: Express.Multer.File): Promise<IImportPet[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const pets: IImportPet[] = [];

            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line)=> {
                const [ name, yearsOld, genre ] = line;
                if(name !== "name"){
                    pets.push({
                        name, 
                        yearsOld, 
                        genre
                    });
                }                
            })
            .on('end', () => {
                fs.promises.unlink(file.path);
                resolve(pets);
            })
            .on('error', (err) => {
                reject(err);
            });

        });
    }

    async execute(file: Express.Multer.File): Promise<void>{
        const pets = await this.loadPets(file);

        pets.map(async (pet) => {
            const { name, yearsOld, genre } = pet;

            const existPet = this.petRepository.findByName(name);

            if(!existPet){
                this.petRepository.create({
                    name, yearsOld, genre
                });
            }
        });
    }
}

export { ImportPetUseCase }