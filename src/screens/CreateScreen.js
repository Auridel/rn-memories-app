import React from "react";
import {View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Button, ScrollView} from "react-native";
import {THEME} from "../theme";
import ImagePicker from "../components/ImagePicker";

const CreateScreen = () => {


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.titleWrap}>
                        <TextInput maxLength={25} a style={styles.titleInput} placeholder="Enter title..."/>
                    </View>
                    <ImagePicker/>
                    <View style={styles.textWrap}>
                        <TextInput style={styles.titleInput} multiline={true} placeholder="Enter text..."/>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Create Memories" color={THEME.COLOR_MAIN}/>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",

    },
    titleWrap: {
        paddingVertical: 20,
        paddingHorizontal: 40
    },
    titleInput: {
        paddingVertical: 10,
        fontSize: 20,
        minWidth: 200,
        fontFamily: "roboto-regular",
        borderBottomColor: THEME.COLOR_MAIN,
        borderBottomWidth: 1,
        borderStyle: "solid"
    },
    textWrap: {
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 20
    },
    buttons: {
        paddingHorizontal: 40,
        paddingBottom: 40
    }
})

export default CreateScreen;