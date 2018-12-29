import {
    GET_ALL_BLOG,
    CREATE_A_BLOG,
    GET_ALL_BLOG_USER
} from '../constant';

const INIT_STATE = {
    blogs: []
}

export default (state=INIT_STATE, action) => {
    switch(action.type) {
        case GET_ALL_BLOG : {
            return {...state, blogs: action.payload};
        }
        default: return state;
    }
}