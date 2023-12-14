export default interface CriptoProvider {
    cypher(pass: string): Promise<string>;
    compare(pass: string, hash: string): Promise<boolean>;
}