import api from '../api';
import {
    GET_ACCOUNT_DETAIL
} from '../constant';

export const getAccountDetail = (id) => (dispatch) => {
    return api.get(`/account/${id}`).then((res) => {
        dispatch({type: GET_ACCOUNT_DETAIL, payload: res.data})
    })
    .catch(err => {
        // alert(err.response.data.message);
        console.log(err)
    })
} 