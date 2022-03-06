import { environment, Endpoint } from "../environment";
import { ISignupForm } from "../components/SignupForm/SignupForm";
/* import axios from "../client/interceptor"; */
import axios from "axios";


export {doSignup, doLogin};

const doSignup = (userCred: ISignupForm) => {
    const _userCred: Pick<ISignupForm, 'username' | 'email' | 'password' > = {
        username: userCred.username,
        email: userCred.email,
        password: userCred.password
    };

    return axios.post(`${environment.bsUrl}${Endpoint.signup}`, _userCred)
}

const doLogin = (userCred: Pick<ISignupForm, 'email' | 'password'>) => {

    const _userCred: { emailUsername: string, password: string } = {
        emailUsername: userCred.email,
        password: userCred.password
    };

    return axios.post(`${environment.bsUrl}${Endpoint.login}`, _userCred)
}


