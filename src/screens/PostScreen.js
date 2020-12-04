import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, Image, ScrollView, Button} from "react-native";
import {THEME} from "../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderIcon from "../components/ui/HeaderIcon";

const PostScreen = ({route, navigation}) => {
    const post = route.params;
    const [favorite, setFavorite] = useState(post.favorite);

    useEffect(() => {
        navigation.setOptions({
            title: post.title,
            headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                <Item title="open menu"
                      iconName={favorite? "ios-star" : "ios-star-outline"}
                      onPress={() => setFavorite(!favorite)}/>
            </HeaderButtons>
        })
    }, [favorite])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{post.title}</Text>
                <Image style={styles.image} source={{uri: post.img}}/>
                <Text style={styles.text}>{post.text}</Text>
                <Text style={styles.date}>{new Date(post.date).toLocaleString("en-US")}</Text>
                <View style={styles.buttons}>
                    <Button title="Back" color={THEME.COLOR_GREY} onPress={() => navigation.goBack()}/>
                    <Button title="Delete" color={THEME.COLOR_DANGER}/>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontFamily: "roboto-bold",
        fontSize: 20,
        marginVertical: 20
    },
    image: {
        width: "100%",
        height: 400,
        marginBottom: 20
    },
    text: {
        fontFamily: "roboto-regular",
        fontSize: 18,
        marginBottom: 20
    },
    date: {
        fontFamily: "roboto-regular",
        fontSize: 14,
        marginBottom: 20
    },
    buttons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 40,
        marginBottom: 40
    }
})

export default PostScreen;