/**
 * Auth User Reducers
 */
import {
    LOGIN_USER,
    LOGOUT_USER,
    GET_AUTH_ACCOUNT,
    REGISTER,
    GET_AUTH_ACCOUNT_FAIL
} from '../constant';

/**
 * initial auth user
 */
const INIT_STATE = {
    user: {},
    

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return { ...state, user: action.payload};

        case LOGOUT_USER: 
            return {...state , user: null}

        case GET_AUTH_ACCOUNT: {
            return {
                ...state,
                user: action.payload
            }
        }
        
        case GET_AUTH_ACCOUNT_FAIL: {
            return {user: {}}
        }

        case REGISTER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default: return { ...state };
    }
}
