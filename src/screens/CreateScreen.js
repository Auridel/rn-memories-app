import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Button, ScrollView} from "react-native";
import {THEME} from "../theme";
import ImagePicker from "../components/ImagePicker";
import {ADD_POST} from "../redux/actions";

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const dispatch = useDispatch();

    const onPick = (image) => {
        setImg(image);
    }

    const clearInputs = () => {
        setTitle("");
        setText("");
        setImg(null);
    }

    const saveHandler = () => {
        if(title.trim() && text.trim() && img){
            dispatch(ADD_POST({
                title, img, text, date: Date.now(), favorite: false
            }));
            clearInputs();
            navigation.navigate("Main");
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.titleWrap}>
                        <TextInput value={title}
                                   onChangeText={setTitle}
                                   maxLength={25}
                                   style={styles.titleInput}
                                   placeholder="Enter title..."/>
                    </View>
                    <ImagePicker onPick={onPick} img={img}/>
                    <View style={styles.textWrap}>
                        <TextInput value={text}
                                   onChangeText={setText}
                                   style={styles.titleInput}
                                   multiline={true} placeholder="Enter text..."/>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Create Memories"
                                disabled={!title.trim() || !text.trim() || !img}
                                color={THEME.COLOR_MAIN}
                                onPress={saveHandler}
                        />
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