import UseCase from "../../shared/UseCase.ts";
import CriptoProvider from "../model/CriptoProvider.ts";
import User from "../model/User.ts";
import UserCollection from "../model/UserCollection.ts";

export type UserLoginDTO = {
    email: string;
    pass: string;

}

export default class UserLogin implements UseCase<UserLoginDTO, User | null> {

    constructor(
        private collection: UserCollection,
        private criptoProvider: CriptoProvider
    ) {}

    async execute(dto: UserLoginDTO): Promise<User | null> {
        const user = await this.collection.findByEmail(dto.email);
        
        if (!user) return null;
        console.log(user.pass);
        const isEquals = await this.criptoProvider.compare(dto.pass, user.pass!);
        if (!isEquals) return null;

        return {
            name: user.name,
            email: user.email
        };
    }
}