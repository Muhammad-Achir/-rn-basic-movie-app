import { Button, Text, View } from "react-native";

export default function HomeScreen(props) {
    console.log(props)
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home</Text>
        </View>
    )
}