import React from "react";
import {StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, View} from "react-native";
import {THEME} from "../../theme";

const IconButton = ({children, onPress, color = THEME.COLOR_MAIN}) => {
    const Wrapper = Platform.OS === "android"? TouchableNativeFeedback: TouchableOpacity;

    return (
        <Wrapper activeOpacity={0.6} onPress={onPress}>
            <View style={{...styles.button, backgroundColor: color}}>
                {children}
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default IconButton;