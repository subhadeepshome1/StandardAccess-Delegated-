import RestService from "./Rest";
// import { BASE_URL, LOGIN_URL } from '@env';
import { loginPayload } from "../models/userModels";
import axios from "axios";

const BASE_URL = "https://ballymorehub.com/api/";
const LOGIN_URL = "auth/login";
const sample_url = "https://dummy.restapiexample.com/api/v1/employees";

export const serviceClient = new RestService({
    baseURL: BASE_URL
})

export const LoginService = (data: loginPayload) => {
    return axios.get(sample_url);
}