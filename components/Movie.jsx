import { Image, StyleSheet, Text, View } from "react-native"

export default function Movie (props) {
    const item = props.item

    return (
        <View style={styles.container}>
            <Image style={styles.poster} source={{uri: item.poster}}></Image>
            <Text style={styles.title}>{item.title} - {item.genre}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "#D9D7F1",
    },
    poster: {
        width: "100%",
        height: 200,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "salmon",
        marginBottom:20,
    }
})