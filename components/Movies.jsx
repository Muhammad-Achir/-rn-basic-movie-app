import { SwipeListView } from 'react-native-swipe-list-view';

import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native"
import Movie from "./Movie"

export default function Movies(props) {
    const movies = props.movies

    return (
        <SwipeListView
            data={movies}
            renderItem={({ item }) => (
                <Movie item={item} ></Movie>
            )}
            renderHiddenItem={(item) => (
                <View style={styles.rowBack}>
                    <TouchableOpacity
                        style={[styles.backRightBtn, styles.backRightBtnLeft]}
                        onPress={() => props.addFavorite(item.item)}
                    >
                        <Text>Favorite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.backRightBtn, styles.backRightBtnRight]}
                        onPress={() => props.remove(item.item.title)}
                    >
                        <Text style={styles.backTextWhite}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
            keyExtractor={(item) => item.title}
            leftOpenValue={75}
            rightOpenValue={-75}
        >

        </SwipeListView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backTextWhite: {
        color: '#FFF',
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
})