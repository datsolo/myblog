import {
    GET_ALL_HASTAG
} from '../constant';

const INIT_STATE = {
    allHastag: []
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case GET_ALL_HASTAG: {
            return {...state, allHastag: action.payload} ;
        }
        default: return state;
    }
}