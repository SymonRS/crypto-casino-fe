import { environment, Endpoint } from "../environment";
import { ISignupForm } from "../components/SignupForm/SignupForm";
import axios from "../client/interceptor";


export {doSignup, doLogin};

const doSignup = (userCred: ISignupForm) => {
    const credential: Pick<ISignupForm, 'username' | 'email' | 'password' > = { username: userCred.username, email: userCred.email, password: userCred.password };

    return axios.post(`${environment.bsUrl}${Endpoint.signup}`, credential)
}

const doLogin = (userCred: Pick<ISignupForm, 'email' | 'password'>) => {
    return axios.post(`${environment.bsUrl}${Endpoint.login}`, userCred)
}