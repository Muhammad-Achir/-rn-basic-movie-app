import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import fetchApi from './api';
import Logo from './components/Logo'
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store'
import { fetchMovies } from './redux/action';

export default function App() {

  // const [movies, setMovies] = useState([])

  const [favorite, setFavorite] = useState([])
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies)

  // function getMovies() {
  //   fetchApi('movies')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setMovies(data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
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
    // <SafeAreaProvider>
    // {/* <NavigationContainer> */}
    //   {/* <Stack.Navigator>
    //     <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    //     <Stack.Screen name='Details' component={DetailsScreen}></Stack.Screen>
    //   </Stack.Navigator> */}
    //   <MyTabs></MyTabs>
    //   {/* <Navbar movies={movies} remove={remove} addFavorite={addFavorite}></Navbar> */}
    // {/* </NavigationContainer> */}
    // </SafeAreaProvider>
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <Logo></Logo>
        <Navbar movies={movies} remove={remove} addFavorite={addFavorite}></Navbar>
      </SafeAreaProvider>
    </Provider>
  );

  // function HomeScreen({ navigation }) {
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <Movies movies={movies} remove={remove} addFavorite={addFavorite}></Movies>
  //     </SafeAreaView>
  //   )
  // }

  // function MyTabs() {
  //   const insets = useSafeAreaInsets();
  //   return (
  //     <NavigationContainer>
  //       <Tab.Navigator
  //         screenOptions={{
  //           tabBarStyle: {
  //             marginTop: insets.top
  //           }
  //         }}>
  //         <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
  //         <Tab.Screen name='Details' component={DetailsScreen}></Tab.Screen>
  //       </Tab.Navigator>
  //     </NavigationContainer>
  //   )
  // }
}

// const Tab = createMaterialTopTabNavigator()



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




// function DetailsScreen({ navigation }) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => navigation.push('Details')}
//         />
//         <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//         <Button
//           title="Go back to first screen in stack"
//           onPress={() => navigation.popToTop()}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const Stack = createNativeStackNavigator ()