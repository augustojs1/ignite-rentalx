import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase"

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemmory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
    beforeEach(() => {
        rentalsRepositoryInMemmory = new RentalsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemmory);
    });

    it("should be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute({
            user_id: "12345",
            car_id: "12121212",
            expected_return_date: new Date(),
        });

        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    })

    it("should be able to create a new rental if there is another rental open to the same user", async () => {
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: "12345",
                car_id: "12121212",
                expected_return_date: new Date(),
            });
    
            await createRentalUseCase.execute({
                user_id: "12345",
                car_id: "12121212",
                expected_return_date: new Date(),
            });
        }).rejects.toBeInstanceOf(AppError);
    })

    it("should be able to create a new rental if there is another rental open to the same car", async () => {
        expect(async () => {
            await createRentalUseCase.execute({
                user_id: "12",
                car_id: "test",
                expected_return_date: new Date(),
            });
    
            await createRentalUseCase.execute({
                user_id: "321",
                car_id: "test",
                expected_return_date: new Date(),
            });
        }).rejects.toBeInstanceOf(AppError);
    })
})