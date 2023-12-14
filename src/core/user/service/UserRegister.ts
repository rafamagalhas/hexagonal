import UseCase from "../../shared/UseCase.ts";
import UserCollection from "../model/UserCollection.ts";
import CriptoProvider from "../model/CriptoProvider.ts";
import User from "../model/User.ts";

export default class UserRegister implements UseCase<Required<User>, void> {

    constructor(
        private collection: UserCollection,
        private criptoProvider: CriptoProvider
    ) {}
    
    async execute(user: Required<User>): Promise<void> {
        const passCripto = await this.criptoProvider.cypher(user.pass);
        const userWithPass = {...user, pass: passCripto};

        await this.collection.add(userWithPass);
    }
}