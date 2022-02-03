import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from "./HomeScreen"
import ActionScreen from "../screens/ActionScreen"
import ScifiScreen from "../screens/ScifiScreen"
import FavoritesScreen from "../screens/FavoritesScreen"

export default function Navbar(props) {
    const Tab = createMaterialTopTabNavigator()
    // console.log(props.movies)
    return (
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
                <Tab.Screen name='Action' component={ActionScreen}></Tab.Screen>
                <Tab.Screen name='Scifi' component={ScifiScreen}></Tab.Screen>
                <Tab.Screen name='Favorites' component={FavoritesScreen}></Tab.Screen>
            </Tab.Navigator>
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