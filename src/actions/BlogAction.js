import api from '../api';
import {
    GET_ALL_BLOG,
    CREATE_A_BLOG,
    GET_ALL_BLOG_USER,
    GET_BLOG_DETAIL,
    LIKE_BLOG,
    UPDATE_A_BLOG,
    DELETE_A_BLOG
} from '../constant';

export const getAllBlog = () => (dispatch) => {
    return api.get('/blogs').then((res) => {
        return dispatch({type: GET_ALL_BLOG, payload: res.data.blogs});
    })
    .catch(err => {
        alert(err.response.data.message);
    })
};

export const getBlogDetail = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return api.get(`blog/${id}`).then(res => {
            dispatch({type: GET_BLOG_DETAIL, payload: res.data})
            resolve(res.data)
        })
    .catch(err => {
        alert(err.response.data.message);
        reject(err);
    })
})
}