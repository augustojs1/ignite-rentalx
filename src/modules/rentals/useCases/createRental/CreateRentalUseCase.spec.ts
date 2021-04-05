import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase"

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemmory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
   
    beforeEach(() => {
        rentalsRepositoryInMemmory = new RentalsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemmory);
    });

    it("should be able to create a new rental", async () => {

        await createRentalUseCase.execute({
            user_id: "12345",
            car_id: "12121212",
            expected_return_date: new Date(),
        });
    })
})