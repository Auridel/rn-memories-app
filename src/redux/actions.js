import DB from "../db";
import * as FileSystem from "expo-file-system";

const GET_POSTS = () => {
    return async (dispatch) => {
        try {
            const data = await DB.getData();

            dispatch({
                type: "GET_POSTS",
                payload: data
            })
        }catch (e) {
            console.log(e)
        }
    }
}

const ADD_POST = (post) => {
    return async (dispatch) => {
        try {
            const fileName = post.img.split("/").pop();
            const newPath = `${FileSystem.documentDirectory}${fileName}`;

            await FileSystem.copyAsync({
                from: post.img,
                to: newPath
            })

            const newEntry = {...post, img: newPath}
            const id = await DB.addEntry(newEntry);

            dispatch({
                type: "ADD_POST",
                payload: {
                    ...newEntry,
                    id: id
                }
            })
        }catch (e) {
            console.log(e)
        }
    }
}

const DELETE_POST = (id, img) => {
    return async (dispatch) => {
        try {
            await DB.deleteEntry(id);
            await FileSystem.deleteAsync(img);

            dispatch({
                type: "DELETE_POST",
                payload: id
            })

        }catch (e) {
            console.log(e)
        }
    }
}

const UPDATE_POST = (id, favorite) => {
    return async (dispatch) => {
        try {
            await DB.updateEntry(id, favorite);

            dispatch({
                type: "UPDATE_POST",
                payload: {id, favorite}
            })
        }catch (e) {
            console.log(e);
        }
    }
}


export {
    GET_POSTS,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST
}