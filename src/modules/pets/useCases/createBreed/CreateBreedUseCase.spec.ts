import { AppError } from "../../../../errors/AppError";
import { BreedsRepositoriesInMemory } from "../../repositories/in-memory/BreedRepositoriesInMemory";
import { CreateBreedUseCase } from "./CreateBreedUseCase";


let createBreedUseCase: CreateBreedUseCase;
let breedsRepositoryInMemory: BreedsRepositoriesInMemory;

describe("Criar raça", () => {
    beforeEach(() => {
        breedsRepositoryInMemory = new BreedsRepositoriesInMemory();
        createBreedUseCase = new CreateBreedUseCase(breedsRepositoryInMemory);
    });

    it("Espero que a seja criada uma nova raça", async () => {
        const breed = {
            name: "SRD",
            description: "Sem raça definida"
         };

        await createBreedUseCase.execute(breed);

        const breedCreated = await breedsRepositoryInMemory.findByName(breed.name);

        expect(breedCreated).toHaveProperty("id");
    });

    it("Espero que a não seja criada uma raça quando já existir", async () => {
        expect(async () => {
            const breed = {
                name: "SRD",
                description: "Sem raça definida"
             };
    
            await createBreedUseCase.execute(breed);
            await createBreedUseCase.execute(breed);
        }).rejects.toBeInstanceOf(AppError);
    });
})