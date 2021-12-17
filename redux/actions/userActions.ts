import { loginPayload } from "../../models/userModels";
import { LoginService } from "../../services/user";
import { ApiCallErrorAction, ApiCallInitiateAction } from "./apiCallInitiationActions";

export enum UserActionTypes {
    Login_sucess_action = "[USER] Login Success Action",
}

export const LoginAction = (payload: loginPayload) => {
    return(dispatch: any, getState: any) => {
        console.log("login payload", payload);
        dispatch(ApiCallInitiateAction({
            loading: true,
            message: "Logging you in..."
        }))
        return LoginService(payload).then((response) => {
            console.log('login response', response.data);
            dispatch(LoginSuccessAction(true));
        }).catch(error => {
            dispatch(ApiCallErrorAction(error));
        })
    }
}

export const LoginSuccessAction = (payload: any) => {
    return { type:UserActionTypes.Login_sucess_action, payload: payload }
}