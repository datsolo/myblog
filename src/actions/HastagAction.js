import api from '../api';
import {
    GET_ALL_HASTAG,
    GET_HASTAG_DETAIL
} from '../constant';

export const getHastag = () => (dispatch) => {
    return api.get('/hastag').then((res) => {
        dispatch({type: GET_ALL_HASTAG, payload: res.data})
    })
    .catch(err => {
        alert(err.response.data.message);
    })
}

export const hastagDetail = (id) => (dispatch) => {
    return api.get(`/hastagdetail/${id}`).then(res => {
        dispatch({type: GET_HASTAG_DETAIL, payload: res.data })
    })
    .catch(err => {
        console.log(err.response);
    })
}