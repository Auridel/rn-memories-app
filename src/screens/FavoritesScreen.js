import React from "react";
import {View, StyleSheet, Text} from "react-native";

const FavoritesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>FavoritesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FavoritesScreen;