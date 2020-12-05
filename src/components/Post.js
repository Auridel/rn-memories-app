import React from "react";
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback} from "react-native";

const Post = ({post, onOpen}) => {

    return (
        <TouchableWithoutFeedback onPress={() => onOpen(post)}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{post.title}</Text>
                <Image style={styles.image} source={{uri: post.img}}/>
                <Text style={styles.date}>{new Date(post.date).toLocaleString("ru-RU")}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    title: {
        fontSize: 18,
        fontFamily: "roboto-bold"
    },
    image: {
        width: "100%",
        height: 200
    },
    date: {
        fontSize: 14,
        fontFamily: "roboto-regular"
    }
})

export default Post;