import { UserState } from "../../models/userModels";
import { UserActionTypes } from "../actions/userActions";
import InitialState from "./initialState";

const initialState: UserState = InitialState.user;

export default function UserReducer(
    state: UserState = initialState,
    action: any,
) {
    switch(action.type) {
        
        default:
            return state;
    }
}