import api from '../api';
import { setCookie, removeCookie } from '../helper';
import {
    LOGIN_USER,
    LOGOUT_USER,
    GET_AUTH_ACCOUNT,
    REGISTER,
    GET_AUTH_ACCOUNT_FAIL
} from '../constant';

// import { NotificationManager } from 'react-notifications';



export const loginAccount = (username, password) => (dispatch) => {
    return new Promise((resolve, reject) => {
       
        return api.post('/login', { username: username, password: password })
            .then((response) => {
                dispatch({ type: LOGIN_USER, payload: response.data.account });
                setCookie('session_id', response.data.sessionid, 10);
                resolve(response.data.account);
                // NotificationManager.success("Đăng nhập thành công","")
            })
            .catch((error) => {
                alert(error.response.data.message)
                reject(error);
                // NotificationManager.error("Đăng nhập thất bại")
            });
    })
}

export const logoutAccount = () => (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    removeCookie('session_id');
   
}

export const getAuthAccount = () => dispatch => {
    return api.get('/auth').then(res => {
        dispatch({ type: GET_AUTH_ACCOUNT, payload: res.data });
    }).catch(err => {
        dispatch({type: GET_AUTH_ACCOUNT_FAIL});
        removeCookie('session_id');
        console.log(err);
        
    })
}

export const registerAccount = (newUser) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return api.post('/account', newUser)
        .then(res => {
            var data = res.data;
            setCookie('session_id', data.sessionid, 1);
            dispatch({type: REGISTER, payload: data.account});
            resolve(data.account);
            // NotificationManager.success("Đăng ký thành công");
        })
        .catch(err => {
            alert(err.response.data.message);
            // NotificationManager.error(err.response.data.message)
            // console.log(err.response.data.message);
            reject(err);
            
        });
    });
};