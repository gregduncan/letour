import { combineReducers } from "redux"
import user from "./user"
import stages from "./stages"

const rootReducer = combineReducers({
    user,
    stages
})

export default rootReducer