const GET_POSTS = () => {
    return async (dispatch) => {
        dispatch({
            type: "GET_POSTS",
            payload: []
        })
    }
}


export {
    GET_POSTS
}