import api from '../api';
import {
    GET_ACCOUNT_DETAIL,
    UPDATE_ACCOUNT
} from '../constant';

export const getAccountDetail = (id) => (dispatch) => {
    return api.get(`/account/${id}`).then((res) => {
        dispatch({type: GET_ACCOUNT_DETAIL, payload: res.data})
    })
    .catch(err => {
        // alert(err.response.data.message);
        console.log(err.response)
    })
} 

export const updateAccount = (id, data) => (dispatch) => {
    return api.put(`/account/${id}`, data).then(res => {
        dispatch({type: UPDATE_ACCOUNT, payload: res.data})
        window.location.reload();
    })
    .catch(err => {
        console.log(err.response)
        alert(err.response.data.message)
    })
}