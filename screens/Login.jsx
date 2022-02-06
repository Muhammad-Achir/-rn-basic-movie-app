import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { StyleSheet, ImageBackground, View, Image, Text, TextInput, TouchableOpacity } from "react-native"

function Login({ navigation }) {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function login() {
        console.log(user)
        fetch('https://movie-app-g2.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then (response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error ('error')
            }
        })
        .then(data => {
            AsyncStorage.setItem ('token', data.token)
            navigation.navigate ('Main')
        })
        .catch (err => {
            console.log (err, 'eroreeee')
            alert("Cannot login, please make sure your email and password are true!")
        })
    }

    return (
        <ImageBackground
            style={styles.background}
            source={{ uri: "https://cdn.pixabay.com/photo/2016/07/13/08/24/analog-1513893_960_720.jpg" }}
        >
            <View style={styles.main}>
                <View style={styles.viewLogo}>
                    <Image style={styles.logo} source={{ uri: "https://www.freepnglogos.com/uploads/film-reel-png/film-reel-south-side-semhs-eagle-nest-online-7.png" }}
                    ></Image>
                    <Text style={styles.textLogin}>Login</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => setUser((currState) => ({ ...currState, email: text }))}
                        value={user.email}
                        placeholder="Email"
                    ></TextInput>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => setUser((currState) => ({ ...currState, password: text }))}
                        value={user.password}
                        placeholder="Password"
                    ></TextInput>
                </View>

                <TouchableOpacity onPress={login} style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    main: {
        backgroundColor: "#ffffff90",
        width: 300,
        height: 350,
        padding: 20,
        borderRadius: 20,

        justifyContent: "center",
        alignItems: "center"
    },
    viewLogo: {
        flex: 1,
        flexDirection: "row",
    },
    textLogin: {
        flex: 5,
        fontSize: 54,
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: 10,
        color: "#2C3333",
    },
    logo: {
        width: 80,
        height: 80,
    },
    inputView: {
        marginBottom: 40
    },
    inputStyle: {
        width: 250,
        borderRadius: 10,
        margin: 10,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    button: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        height: 40,
        backgroundColor: "#00BFFF"
    }
})