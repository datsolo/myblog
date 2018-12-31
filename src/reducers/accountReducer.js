import {
    GET_ACCOUNT_DETAIL,
    UPDATE_ACCOUNT
} from '../constant';

const INIT_STATE = {
    account: {
        username: "",
        _id:""
    }

}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case GET_ACCOUNT_DETAIL: {
            return {...state, account: action.payload};
        }
        case UPDATE_ACCOUNT: return state;
        default: return state;
    }
}
