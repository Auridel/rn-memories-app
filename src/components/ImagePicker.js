import React, {useEffect, useState} from "react";
import IconButton from "./ui/IconButton";
import {Ionicons} from "@expo/vector-icons";
import {THEME} from "../theme";
import {View, StyleSheet, Platform, Alert, ScrollView, Image, ImageBackground} from "react-native";
import * as Picker from "expo-image-picker";


const ImagePicker = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if(Platform.OS !== "web"){
                await Picker.getCameraPermissionsAsync();
                await Picker.getCameraRollPermissionsAsync()
            }
        })()
    }, [])

    const pickImage = async () => {
        let res = await Picker.launchImageLibraryAsync({
            quality: 1,
            allowsEditing: true,
            allowsMultipleSelection: false
        })

        if(res.uri) setImage(res.uri);
    }

    const shootImage = async () => {
        let res = await Picker.launchCameraAsync({
            quality: 1,
            allowsEditing: true,
            allowsMultipleSelection: false,
            mediaTypes: "Images"
        })

        if(res.uri) setImage(res.uri);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <IconButton color="transparent" onPress={shootImage}>
                        <Ionicons name="ios-camera" size={50} color={THEME.COLOR_MAIN}/>
                    </IconButton>
                    <IconButton color="transparent" onPress={pickImage}>
                        <Ionicons name="md-images" size={50} color={THEME.COLOR_MAIN}/>
                    </IconButton>
                </View>
                {image? <ImageBackground source={{uri: image}} style={styles.image}>
                    <View style={styles.close}>
                    <IconButton color="rgba(255,255,255, 0.3)" onPress={() => setImage(null)}>
                        <Ionicons name="ios-close" size={20} color={THEME.COLOR_MAIN}/>
                    </IconButton>
                    </View>
                </ImageBackground> : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    buttons: {
        width: "100%",
        paddingVertical: 40,
        paddingHorizontal: 40,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    image: {
        position: "relative",
        width: "100%",
        height: 300,
        resizeMode: "cover"
    },
    close: {
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1
    }

})

export default ImagePicker;