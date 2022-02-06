import Constant from "./constAction";

import fetchApi from "../api";

export function setMovies(payload) {
    return { type: Constant.SET_MOVIES, payload }
}

//middleware
export function fetchMovies() {
    return function (dispatch) {
        fetchApi('movies')
            .then(response => {
                if (response.ok) {
                    return response.json()    
                } else {
                    throw new Error ("error")
                }                
            })
            .then(data => {
                dispatch(setMovies(data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}