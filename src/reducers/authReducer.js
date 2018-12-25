/**
 * Auth User Reducers
 */
import {
    LOGIN_USER,
    LOGOUT_USER,
    GET_AUTH_ACCOUNT
} from '../constant';

/**
 * initial auth user
 */
const INIT_STATE = {
    user: {}

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return { ...state};
        case LOGOUT_USER: 
            return {user: null}

        case GET_AUTH_ACCOUNT: {
            return {
                user: action.payload
            }
        }
        default: return { ...state };
    }
}
