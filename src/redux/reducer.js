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

const aaa = [{
    id: "1",
    title: "Test 1",
    img: "https://www.telegraph.co.uk/content/dam/news/2018/01/04/SecretLifeOfOwls_22_trans_NvBQzQNjv4BqgZ8XJcuE7Nj96CuD2rvGvQZO8B9HWmrBwwvkNm0OPhg.jpg",
    text: "some text",
    date: new Date().toString(),
    favorite: false
},{
    id: "2",
    title: "Test 2",
    img: "https://s3-production.bobvila.com/articles/wp-content/uploads/2018/05/owl.jpg",
    text: "some text 22",
    date: new Date().toString(),
    favorite: true
},{
    id: "3",
    title: "Test 3",
    img: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555388152/shape/mentalfloss/istock_000023765401_small.jpg?itok=5JSlbcIo",
    text: "some text",
    date: new Date().toString(),
    favorite: false
},{
    id: "4",
    title: "Test 4",
    img: "https://s3-production.bobvila.com/articles/wp-content/uploads/2018/05/owl.jpg",
    text: "some text 22",
    date: new Date().toString(),
    favorite: true
}]