import {LOGIN, LOGOUT} from "../../utils/constant";

export function login(loginInfo) {
    return {
        type: LOGIN,
        payload: loginInfo
    }
}

export function logout() {
    return {
        type: LOGOUT,
    }
}
