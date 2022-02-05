import { combineReducers } from "redux";

import moviesReducer from "./movieReducer";

const reducer = combineReducers({
    movies: moviesReducer
})

export default reducer