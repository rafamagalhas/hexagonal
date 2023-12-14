import UserLogin from "./user/service/UserLogin.ts";
import UserRegister from "./user/service/UserRegister.ts";

const register = new UserRegister();

register.execute({
    name: 'John Doe',
    email: 'john@john.land',
    pass: '123456'
});

const login = new UserLogin();
const user = await login.execute({
    email: 'john@john.land',
    pass: '123456'
});

console.log(user); 