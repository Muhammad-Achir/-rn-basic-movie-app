import { Button, Text, View } from "react-native";
import Movies from "../components/Movies";

export default function HomeScreen(props) {
    // console.log(props)
    return (
        <Movies movies={props.movies} remove={props.remove} addFavorite={props.addFavorite}></Movies>
    )
}