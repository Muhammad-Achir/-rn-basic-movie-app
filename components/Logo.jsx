import { StyleSheet, Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Logo() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={{ uri: "https://png2.cleanpng.com/sh/9106f17700ae793970fb69138fcbb50b/L0KzQYm3VMExN5N8j5H0aYP2gLBuTgRpbV5yhAhyZYOwdrrzjb1kcZ9qhdM2cHB1hH77iPVifKNqRdN3aX3khLr2jr1pd51xkel4b3Swg7rujr02aZRoUNU8OEe6cbe6Vb46QGU3Tqg5NEG4QoS6VcQ3QGE5UaI7LoDxd1==/kisspng-the-movies-film-cinema-port-theatre-animation-hollywood-sign-5acc8c3877af35.9842660415233546804902.png" }}></Image>
            <Text style={styles.title}>TM Cinemas</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginVertical: 20,
        color: "salmon"
    }
})