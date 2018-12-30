import {
    GET_ALL_BLOG,
    CREATE_A_BLOG,
    GET_ALL_BLOG_USER,
    GET_BLOG_DETAIL
} from '../constant';

const INIT_STATE = {
    blogs: [],
    blogDetail: {
        like: [],
        hastag: [],
        user_id: {}
    }
}

export default (state=INIT_STATE, action) => {
    switch(action.type) {
        case GET_ALL_BLOG : {
            return {...state, blogs: action.payload};
        }
        case GET_BLOG_DETAIL: {
            return{...state, blogDetail: action.payload}
        }
        default: return state;
    }
}