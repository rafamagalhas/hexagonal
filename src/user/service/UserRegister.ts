import UseCase from "../../shared/UseCase.ts";
import UserCollection from "../data/UserCollection.ts";
import User from "../model/User.ts";

export default class UserRegister implements UseCase<Required<User>, void> {
    async execute(user: Required<User>): Promise<void> {

        const passCripto = user.pass.split('').reverse().join('');
        const userWithPass = {...user, pass: passCripto};

        const collection = new UserCollection();
        await collection.add(userWithPass);
    }
}