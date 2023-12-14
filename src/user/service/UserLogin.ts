import UseCase from "../../shared/UseCase.ts";
import UserCollection from "../data/UserCollection.ts";
import User from "../model/User.ts";

export type UserLoginDTO = {
    email: string;
    pass: string;

}

export default class UserLogin implements UseCase<UserLoginDTO, User | null> {
    async execute(dto: UserLoginDTO): Promise<User | null> {
        const collection = new UserCollection();
        const user = await collection.findByEmail(dto.email);
        
        if (!user) return null;

        const passCripto = dto.pass.split('').reverse().join('');
        if (user.pass !== passCripto) return null;

        return {
            name: user.name,
            email: user.email
        };
    }
}