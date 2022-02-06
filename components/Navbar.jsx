import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen"
import ActionScreen from "../screens/ActionScreen"
import ScifiScreen from "../screens/ScifiScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import Movies from "./Movies"

const Stack = createNativeStackNavigator()

export default function Navbar(props) {
    const Tab = createMaterialTopTabNavigator()
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
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
            <Tab.Screen name='Action' component={ActionScreen} options={{ tabBarLabel: 'Action' }}></Tab.Screen>
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