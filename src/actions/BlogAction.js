import api from '../api';
import {
    GET_ALL_BLOG,
    CREATE_A_BLOG,
    GET_ALL_BLOG_USER
} from '../constant';

export const getAllBlog = () => (dispatch) => {
    return api.get('/blogs').then((res) => {
        return dispatch({type: GET_ALL_BLOG, payload: res.data.blogs});
    })
    .catch(err => {
        alert(err.response.data.message);
    })
}