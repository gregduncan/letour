import * as types from "../constants/ActionTypes"

export const login = (auth) => {
    return { type: types.LOGIN_USER, payload: auth }
}

export const logout = () => {
    return { type: types.LOGOUT_USER, payload: false }
}


