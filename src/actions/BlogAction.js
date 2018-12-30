import api from '../api';
import {
    GET_ALL_BLOG,
    CREATE_A_BLOG,
    GET_ALL_BLOG_USER,
    GET_BLOG_DETAIL,
    LIKE_BLOG,
    UPDATE_A_BLOG,
    DELETE_A_BLOG,
    GET_ALL_BLOG_HASTAG,
    SEARCH_BLOG
} from '../constant';

export const getAllBlog = () => (dispatch) => {
    return api.get('/blogs').then((res) => {
        return dispatch({ type: GET_ALL_BLOG, payload: res.data.blogs, current: res.data.current, pages: res.data.pages });
    })
        .catch(err => {
            alert(err.response.data.message);
        })
};

export const getBlogDetail = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return api.get(`blog/${id}`).then(res => {
            dispatch({ type: GET_BLOG_DETAIL, payload: res.data })
            resolve(res.data)
        })
            .catch(err => {
                alert(err.response.data.message);
                reject(err);
            })
    })
}

export const getAllUserBlog = (id) => (dispatch) => {
    return api.get(`/myblog/${id}`).then(res => {
        dispatch({type: GET_ALL_BLOG_USER, payload: res.data.blogs})
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const getAllHastagBlog = (hastag_id) => (dispatch) => {
    return api.get(`/blog/hastag?hastag=${hastag_id}`).then(res => {
        dispatch({type: GET_ALL_BLOG_HASTAG, payload: res.data.blogs})
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const searchBlog = (keyword) => (dispatch) => {
    return api.get(`/blog/search?keyword=${keyword}`).then(res => {
        dispatch({type: SEARCH_BLOG, payload: res.data.blogs})
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const deleteBlog = (id) => (dispatch) => {
    return api.delete(`/blog/${id}`).then(res => {
        dispatch({type: DELETE_A_BLOG, payload: res.data.blog});
        alert("xóa thành công");
        window.location.reload();
    })
    .catch(err => {
        console.log(err.response);
    })
}

export const like = (id) => (dispatch) => {
    return api.put(`/like/${id}`).then(res => {
        dispatch({type: LIKE_BLOG});
        window.location.reload();
    })
    .catch(err => {
        console.log(err.response);
    })
}

export const creatBlog = (data) => (dispatch) => {
    return api.post('/blog', data).then(res => {
        dispatch({type: CREATE_A_BLOG, payload: res.data.blog });
        window.location.reload();
    })
    .catch(err => {
        console.log(err.response);
    })
}

export const editBlog = (id,data) => (dispatch) => {
    return api.put(`/blog/${id}`, data).then(res => {
        dispatch ({type: UPDATE_A_BLOG})
        window.location.reload();
    })
    .catch(err => {
        console.log(err.response)
    })
}