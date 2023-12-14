// import CriptoInverter from "./adapters/CriptoInverter.ts";
import CriptoReal from "./adapters/CriptoReal.ts";
import UserCollectionMemory from "./adapters/UserCollectionMemory.ts";
import UserLogin from "./core/user/service/UserLogin.ts";
import UserRegister from "./core/user/service/UserRegister.ts";

const criptoProvider = new CriptoReal();
const userCollection = new UserCollectionMemory();
const register = new UserRegister(userCollection, criptoProvider);

await register.execute({
    name: 'John Doe',
    email: 'john@john.land',
    pass: '123456'
});

const login = new UserLogin(userCollection, criptoProvider);
const user = await login.execute({
    email: 'john@john.land',
    pass: '123456'
});

console.log(user); 