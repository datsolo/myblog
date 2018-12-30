import {
    GET_ALL_COMMENT,
    WRITE_COMMENT
} from '../constant';
import api from '../api';

export const getComment = (id) => (dispatch) => {
    return api.get(`/comment/${id}`).then(res => {
        dispatch({type: GET_ALL_COMMENT, payload: res.data})
    })
    .catch(err => {
        console.log(err.response);
    })
}

export const writeComment = (id, data) => (dispatch) => {
    return api.post(`/comment/${id}`, data).then((res) => {
        dispatch({type: WRITE_COMMENT, payload: res.data.comment})
    })
    .catch(err => {
        console.log(err.response);
    })
}