import React from "react";
import {View, ActivityIndicator, StyleSheet} from "react-native";
import {THEME} from "../../theme";

const Loader = () => {
    return (
        <View style={styles.center}>
            <ActivityIndicator size="large" color={THEME.COLOR_MAIN}/>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
});

export default Loader;