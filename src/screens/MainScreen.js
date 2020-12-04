import React from "react";
import {View, StyleSheet, Text} from "react-native";

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MainScreen</Text>
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

export default MainScreen;