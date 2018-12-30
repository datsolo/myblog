import {
    GET_ALL_HASTAG,
    GET_HASTAG_DETAIL
} from '../constant';

const INIT_STATE = {
    allHastag: [],
    hastag: {}
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case GET_ALL_HASTAG: {
            return {...state, allHastag: action.payload} ;
        }
        case GET_HASTAG_DETAIL: {
            return {...state, hastag: action.payload}
        }
        default: return state;
    }
}