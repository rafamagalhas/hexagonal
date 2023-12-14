import CriptoProvider from "../core/user/model/CriptoProvider.ts";

export default class CriptoInverter implements CriptoProvider {
    //deno-lint-ignore require-await
    async cypher(pass: string): Promise<string> {
        return pass.split('').reverse().join('');
    }

    //deno-lint-ignore require-await
    async compare(pass: string, hash: string): Promise<boolean> {
        return pass.split('').reverse().join('') === hash;
    }
}