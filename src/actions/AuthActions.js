import api from '../api';
import { setCookie, removeCookie } from '../helper';
import {
    LOGIN_USER,
    LOGOUT_USER,
    GET_AUTH_ACCOUNT,
    REGISTER
} from '../constant';



export const loginAccount = (username, password) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: LOGIN_USER });
        return api.post('/login', { username: username, password: password })
            .then((response) => {
                setCookie('session_id', response.data.sessionid, 10);
                resolve(response.data.account);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

export const logoutAccount = () => (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    removeCookie('session_id');
}

export const getAuthAccount = () => dispatch => {
    return api.get('/admin/auth').then(res => {
        dispatch({ type: GET_AUTH_ACCOUNT, payload: res.data.account });
    }).catch(err => {
        console.log(err);
    })
}

export const registerAccount = (newUser) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return api.post('/register', newUser)
        .then(res => {
            var data = res.data;
            setCookie('token', data.token, 1);
            setCookie('session_id', data.sessionid, 1);
            dispatch({type: REGISTER, payload: data.account});
            resolve(data.account);
        })
        .catch(err => {
            console.log(err);
            reject(err);
        });
    });
};