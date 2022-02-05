import Constant from "../constAction";

const movies = []

function moviesReducer(state = movies, action) {
    switch (action.type) {
        case Constant.SET_MOVIES:
            return action.payload
            break;
        default:
            return state
            break;
    }
}

export default moviesReducer