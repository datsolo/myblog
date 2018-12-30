import {
    GET_ACCOUNT_DETAIL
} from '../constant';

const INIT_STATE = {
    account: {
        username: ""
    }

}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case GET_ACCOUNT_DETAIL: {
            return {...state, account: action.payload};
        }
        default: return state;
    }
}
