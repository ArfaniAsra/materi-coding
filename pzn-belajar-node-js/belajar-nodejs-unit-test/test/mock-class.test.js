import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository");

const repository = new UserRepository();
const service = new UserService(repository);

test('test mock class save', () => {
    const user = { id: 1, name: "Arfani" }
    service.save(user);
    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
})

test('test mock class findById', () => {
    const user = { id: 1, name: "Arfani" };

    repository.findById.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);

})

test('test mock class findAll', () => {
    const users = [{ id: 1, name: "Arfani" }, { id: 2, name: "Arfani" }];

    repository.findAll.mockReturnValueOnce(users);
    
    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
})