import { LOGIN_USER, LOGOUT_USER } from "../constants/ActionTypes"

const initialState = {
    user: {
        auth: true,
        username: "",
        password: null,
    },
    fetching: false,
    error: null
}

export default function user(state = initialState, action) {

    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                fetching: false,
                user: { ...state.user, auth: action.payload }
            }
        }

        case LOGOUT_USER: {
            return {
                ...state,
                fetching: false,
                user: { ...state.user, auth: false }
            }
        }

        default:
            return state
    }
}
