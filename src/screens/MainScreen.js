import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {View, StyleSheet, Text, FlatList} from "react-native";
import Post from "../components/Post";

const MainScreen = ({navigation}) => {
    const loading = useSelector(state => state.loading);
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();

    const openPostHandler = (post) => {
        navigation.navigate("Post", post)
    }

    return (
        <View style={styles.container}>
            {posts.length?
                <View style={styles.wrapper}>
                    <FlatList keyExtractor={post => post.id.toString()}
                              data={posts}
                              renderItem={({item}) => <Post post={item} onOpen={openPostHandler}/>}
                    />
                </View>
                :
                <Text>No memories yet...</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    wrapper: {
        width: "100%"
    }
})

export default MainScreen;