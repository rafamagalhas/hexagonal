import User from "../core/user/model/User.ts";
import UserCollection from "../core/user/model/UserCollection.ts";

export default class UserCollectionMemory implements UserCollection {
    static readonly users: User[] = [];

    //deno-lint-ignore require-await
    async add(user: User): Promise<void> {
        UserCollectionMemory.users.push(user);
    }

    // deno-lint-ignore require-await
    async findByEmail(email: string): Promise<User | null> {
        return UserCollectionMemory.users.find(user => user.email === email) ?? null;
    }
}