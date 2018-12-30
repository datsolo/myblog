import {
    GET_ALL_COMMENT,
    WRITE_COMMENT
} from '../constant';

const INIT_STATE = {
    comments : [],
    comment: {}
}

export default (state = INIT_STATE, action ) => {
    switch(action.type){
        case GET_ALL_COMMENT: {
            return {...state, comments: action.payload};
        }
        case WRITE_COMMENT: {
            return {...state, comment: action.payload}
        }
        default: return state;
    }
}