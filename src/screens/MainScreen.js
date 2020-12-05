import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {View, StyleSheet, Text, FlatList, Button} from "react-native";
import Post from "../components/Post";
import {THEME} from "../theme";
import Loader from "../components/ui/Loader";

const MainScreen = ({navigation, route}) => {
    const loading = useSelector(state => state.loading);
    const allPosts = useSelector(state => state.posts);

    // useEffect(() => {
    //     console.log(route)
    //     navigation.setOptions({
    //         title: route.name === "All"? "Home" : "Favorite"
    //     })
    // })

    const posts = route.name === "All"? allPosts : allPosts.filter(p => p.favorite);

    const dispatch = useDispatch();

    const openPostHandler = (post) => {
        navigation.navigate("Post", post)
    }

    if(loading) return <Loader/>

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
                <View style={styles.center}>
                    <Text style={styles.noItems}>No memories yet...</Text>
                    <Button title="Create new one" onPress={() => navigation.navigate("Create")} color={THEME.COLOR_MAIN}/>
                </View>
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
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    noItems: {
        fontSize: 26,
        marginBottom: 20
    }
})

export default MainScreen;