import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {THEME} from "../theme";

const AboutScreen = () => {
    return (

            <View style={styles.container}>
                <View style={styles.title}>
                    <Ionicons name="ios-information-circle-outline" size={50} color={THEME.COLOR_MAIN}/>
                    <Text style={styles.titleText}>About</Text>
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.text}>
                        This application was made for educational purposes only. It's suitable for both IOS and
                        Android platforms.
                    </Text>
                    <Text style={styles.version}>Version 1.0.0</Text>
                    <Text style={styles.link}>https://github.com/Auridel</Text>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    titleText: {
        fontFamily: "roboto-bold",
        fontSize: 25,
        marginLeft: 20,
    },
    textWrap: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 50
    },
    text: {
        textAlign: "center",
        marginBottom: 20
    },
    version: {
        fontFamily: "roboto-bold",
        marginBottom: 10
    },
    link: {
        fontFamily: "roboto-regular"
    }
})

export default AboutScreen;