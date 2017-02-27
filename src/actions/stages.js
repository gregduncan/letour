import * as types from "../constants/ActionTypes"

import payload from "../data.json"

export const fetchStages = () => {
    return { type: types.FETCH_STAGES_FULFILLED, payload: payload["2017"] }
}


