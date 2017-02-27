import { FETCH_STAGES, FETCH_STAGES_FULFILLED, FETCH_STAGES_REJECTED } from "../constants/ActionTypes"

const initialState = {
    stages: [],
    fetching: false,
    error: null
}

export default function stages(state = initialState, action) {

    switch (action.type) {

        case FETCH_STAGES: {
            return { ...state, fetching: true }
        }

        case FETCH_STAGES_REJECTED: {
            return { ...state, fetching: false, error: action.payload }
        }

        case FETCH_STAGES_FULFILLED: {
            return {
                ...state,
                fetching: false,
                stages: action.payload
            }
        }    

        default:
            return state
    }
}