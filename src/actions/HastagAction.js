import api from '../api';
import {
    GET_ALL_HASTAG
} from '../constant';

export const getHastag = () => (dispatch) => {
    return api.get('/hastag').then((res) => {
        dispatch({type: GET_ALL_HASTAG, payload: res.data})
    })
    .catch(err => {
        alert(err.response.data.message);
    })
}