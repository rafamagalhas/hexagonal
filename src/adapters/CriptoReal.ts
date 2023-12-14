import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import CriptoProvider from "../core/user/model/CriptoProvider.ts";

export default class CriptoReal implements CriptoProvider {
    cypher(pass: string): Promise<string> {
        return bcrypt.hash(pass);
    }

    compare(pass: string, hash: string): Promise<boolean> {
        return bcrypt.compare(pass, hash);
    }
}