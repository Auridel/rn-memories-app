const initialState = {
    loading: true,
    posts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POSTS": {
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        }
        case "ADD_POST": {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        }
        case "DELETE_POST": {
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.payload)]
            }
        }
        case "UPDATE_POST": {
            const {id, favorite} = action.payload;
            return {
                ...state,
                posts: [...state.posts.map(post => {
                    if(post.id === id) post.favorite = favorite;
                    return post;
                })]
            }
        }
        default: return state;
    }
}

export default reducer;