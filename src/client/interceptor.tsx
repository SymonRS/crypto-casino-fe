import axios from "axios";
import { environment } from "../environment";


const customAxios = axios.create({
    baseURL: environment.bsUrl,
    timeout: 5000
})

const requestHandler = request => {
    const jwtToken = JSON.parse(localStorage.getItem('authToken')) || '';
    
    if(!jwtToken) return;
    if(jwtToken.length <= 0) return;

    request.headers.Authorization = `Bearer ${jwtToken}`;

    return request;
}


const errorHandler = error => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

export default customAxios;
