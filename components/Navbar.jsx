import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { useSafeAreaInsets } from "react-native-safe-area-context"

import HomeScreen from "./HomeScreen"
import ActionScreen from "../screens/ActionScreen"
import ScifiScreen from "../screens/ScifiScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import Movies from "./Movies"

export default function Navbar(props) {
    const Tab = createMaterialTopTabNavigator()
    const insets = useSafeAreaInsets();
    console.log(props.movies)
    // let movies = props.movies
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                swipeEnabled: false,
                tabBarStyle: {
                    // marginTop: insets.top
                }
            }}>
                <Tab.Screen name='Home'>
                    {() =>
                        <HomeScreen {...props}></HomeScreen> 
                    }

                </Tab.Screen>
                <Tab.Screen name='Action' component={ActionScreen}></Tab.Screen>
                <Tab.Screen name='Scifi' component={ScifiScreen}></Tab.Screen>
                <Tab.Screen name='Favorites' component={FavoritesScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    list: {
        marginHorizontal: 4,
        marginVertical: 12,
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: "salmon",
        borderRadius: 10,
    }
})