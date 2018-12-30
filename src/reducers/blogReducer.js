import {
    GET_ALL_BLOG,
    CREATE_A_BLOG,
    GET_ALL_BLOG_USER,
    GET_BLOG_DETAIL,
    GET_ALL_BLOG_HASTAG,
    SEARCH_BLOG,
    LIKE_BLOG,
    UPDATE_A_BLOG,
    DELETE_A_BLOG
} from '../constant';

const INIT_STATE = {
    blogs: [],
    blog:{},
    blogDetail: {
        like: [],
        hastag: [],
        user_id: {}
    },
    blogUser: [],
    blogHastag: [],
    blogSearch: [],
    current: 0,
    pages: 0

}

export default (state=INIT_STATE, action) => {
    switch(action.type) {
        case GET_ALL_BLOG : {
            return {...state, blogs: action.payload, current: action.current, pages: action.pages };
        }
        case GET_BLOG_DETAIL: {
            return{...state, blogDetail: action.payload}
        }
        case SEARCH_BLOG: {
            return {...state, blogSearch: action.payload};
        }
        case GET_ALL_BLOG_HASTAG: {
            return{...state, blogHastag: action.payload};
        }
        case GET_ALL_BLOG_USER:{
            return{...state, blogUser: action.payload};
        }
        case CREATE_A_BLOG: {
            return{...state, blog: action.payload};
        }
        case UPDATE_A_BLOG: return state;
        case DELETE_A_BLOG: return state;
        case LIKE_BLOG: return state;
        default: return state;
    }
}