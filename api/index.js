function fetchApi (route) {
    return fetch('http://movie-app-g2.herokuapp.com/'+route)
}

export default fetchApi