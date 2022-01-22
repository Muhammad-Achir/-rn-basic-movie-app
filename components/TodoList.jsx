import React from "react";
import { StyleSheet, FlatList, SafeAreaView, View, Text, Image, StatusBar } from "react-native";

function TodoList(props) {
    const todos = props.todos

    return (
        <SafeAreaView style={styles.header}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Image style={{ width: 200, height: 200 }} source={{ uri: item.poster }} />
                        <View style={styles.side}>
                            <Text style={styles.text}>{item.title}</Text>
                            <Text style={styles.text}>{item.year}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.title}
            >
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 29,
    },
    container: {
      flex: 1,
      // flexWrap: "wrap",
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'grey',
      height: 200,
      marginBottom: 8,
      paddingRight: 8,
      alignContent: "space-around",
    },
    text: {
      fontSize: 32,
    },
    side: {
      flexDirection: "column",
      flex: 1,
      paddingLeft: 8,
    },
  })

export default TodoList