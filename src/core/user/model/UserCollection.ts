import User from "./User.ts";

export default interface UserCollection {
    add(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
}