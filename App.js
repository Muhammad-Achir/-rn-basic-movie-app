import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Logo from './components/Logo'
import Movies from './components/Movies';
import Navbar from './components/Navbar';
export default function App() {
  const [movies, setMovies] = useState(
    [
      {
        title: "No Time To Die",
        year: 2021,
        desc: "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond on the trail of a mysterious villain who's armed with a dangerous new technology",
        casts: ["Daniel Craig", "Rami Malek", "Léa Seydoux"],
        poster: "https://cdn1-production-images-kly.akamaized.net/3buPDf0MVwgDuGk-A63Wxi3943I=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2987071/original/060424900_1575520835-james_bond.jpg",
        genre: "action"
      },
      {
        title: "Squid Game",
        year: 2021,
        desc: "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
        casts: ["Lee Jung Jae", "HoYeon Jung", "Park Hae Soo", "Yeong-su Oh"],
        poster: "https://www.blackxperience.com/assets/blackattitude/blackstyle//squid-game-header-2-1633290690220-35-300x300.jpg",
        genre: "action"
      },
      {
        title: "12 Angry Men",
        year: 1957,
        desc: "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
        casts: ["Henry Fonda", "Lee J Cobb", "Jack Klugman"],
        poster: "https://i.pinimg.com/originals/40/10/ea/4010ea6e29cde26c2e4e501d14450bec.jpg",
        genre: "crime"
      },
      {
        title: "Parasite",
        year: 2019,
        desc: "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
        casts: ["Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam", "Lee Jeong-eun"],
        poster: "https://okeylah.com/wp-content/uploads/2020/11/parasite-300x300.jpg",
        genre: "thriller"
      },
      {
        title: "Fight Club",
        year: 1999,
        desc: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
        casts: ["Brad Pitt", "Edward Norton"],
        poster: "https://image.posterlounge.com/img/products/680000/676414/676414_poster_l.jpg",
        genre: "thriller"
      },
      {
        title: "Gone Girl",
        year: 2014,
        desc: "Nick Dunne discovers that the entire media focus has shifted on him when his wife, Amy Dunne, mysteriously disappears on the day of their fifth wedding anniversary.",
        casts: ["Rosemund Pike", "Ben Affleck", "Neil Patrick Harris"],
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0MWVkNzYtODljYS00MmM2LTlkMTEtYzU2ZTdkYjE2NGEyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
        genre: "thriller"
      }
    ]
  )

  const [favorite, setFavorite] = useState([])



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
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Details' component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator> */}
      <MyTabs></MyTabs>
      {/* <Navbar movies={movies} remove={remove} addFavorite={addFavorite}></Navbar> */}
    </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    //   <Logo></Logo>
    //   <Navbar></Navbar>
    //   <Movies movies={movies} remove={remove} addFavorite={addFavorite}></Movies>
    // </SafeAreaView>
  );

  function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <Movies movies={movies} remove={remove} addFavorite={addFavorite}></Movies>
      </SafeAreaView>
    )
  }

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='Details' component={DetailsScreen}></Tab.Screen>
      </Tab.Navigator>
    )
  }
}

const Tab = createMaterialTopTabNavigator()



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




function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </SafeAreaView>
  );
}

// const Stack = createNativeStackNavigator ()