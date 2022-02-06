import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react"
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useDispatch, useSelector } from "react-redux"

import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import { fetchMovies } from "../redux/action"

function Main() {
  const [favorite, setFavorite] = useState([])
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  function addFavorite(movie) {
    console.log('add favorite', movie)
    return setFavorite(...favorite, movie)
  }

  function remove(title) {
    console.log("delete", title)
    setMovies((oldMovies => {
      return oldMovies.filter(movie => movie.title != title)
    }))
  }

  return (
    // <SafeAreaProvider style={styles.container}>
    <View style={styles.container}>
      <Logo></Logo>
      <Navbar movies={movies} remove={remove} addFavorite={addFavorite}></Navbar>
    </View>
    // </SafeAreaProvider>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
  }
});