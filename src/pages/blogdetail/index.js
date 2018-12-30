import React, { Component } from 'react';
import "./style.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Blog from '../../components/blog';
import WriterInformation from '../../components/writerinformation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Hastag from '../../components/hastag';
import { getAccountDetail } from '../../actions/AccountAction';
import { getBlogDetail, like, editBlog } from '../../actions/BlogAction';
import ContentBlogDetail from '../../components/blogdetail';
import { getComment, writeComment } from '../../actions/CommentAction';
import Comment from '../../components/comment';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Select from 'react-select';


class BlogDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "",
            blog: {
                title: "",
                content: "",
                hastag: []
            },
            editBlog: false
        };
        this.onSetHastag = this.onSetHastag.bind(this);
        this.editBlog = this.editBlog.bind(this);
    }

    componentDidMount() {
        this.props.getBlogDetail(this.props.match.params.id).then(res => {
            this.props.getWriter(res.user_id._id);
            this.setState({
                ...this.state,
                blog: res
            })
        });
        this.props.getComment(this.props.match.params.id);

    }

    showBlogs(blogs) {
        if (blogs.length <= 0) {
            return null;
        }
        else return blogs.map((blog) => {
            return <Blog key={blog._id} blog={blog}></Blog>
        })
    }

    showHastag(hastag) {
        if (hastag.length <= 0) {
            return null;
        }
        else return hastag.map((tag) => {
            return <Hastag key={tag._id} id={tag._id}>#{tag.content}</Hastag>
        })
    }

    showComment(comments) {
        if (comments.length <= 0) return null;
        else return comments.map((comment) => {
            return <Comment key={comment._id} comment={comment}></Comment>
        })
    }

    change(e) {
        this.setState({
            content: e.target.value
        })
    }

    submit(e) {
        // e.preventDefault()
        let data = {
            ...this.state
        }
        console.log(data);
        this.props.writeComment(this.props.match.params.id, data);
    }

    likeBlog(id) {
        this.props.likeBlog(id);
    }

    openEditBlog() {
        this.setState({
            ...this.state,
            editBlog: true
        })
    }

    closeEditBlog() {
        this.setState({
            ...this.state,
            editBlog: false
        })
    }

    editBlog(e) {
        this.setState({
            ...this.state,
            blog: {
                ...this.state.blog,
                [e.target.name]: e.target.value
            }

        })
    }

    onSetHastag(selectedOption) {
        console.log(selectedOption);
        this.setState({
            ...this.state,
            blog: {
                ...this.state.blog,
                hastag: [selectedOption.value]
            }
        })
    }

    submitEditBlog = (e) => {
        e.preventDefault();
        let data = {
            title: this.state.blog.title,
            hastag: this.state.blog.hastag,
            content: this.state.blog.content
        }
        if (data.hastag.length == 0) return alert("Bạn cần chọn Hastag cho bài viết.");
        if (data.content === "") return alert("Bài viết cần có nội dung");
        console.log(data)
        this.props.editBlog(this.props.blog._id ,data);
    }



    render() {

        const hastags = this.props.hastag;
        var hastagOpition = hastags.map((hastag) => {
            return { value: hastag._id, label: hastag.content }
        });

        var user_id = this.props.user._id;
        const a = this;
        var like = (a) => {
            if (this.props.blog.like.indexOf(user_id) < 0) {
                return <a href="javascript:void(0)" ><i className="zmdi zmdi-thumb-up icon-blog-detail" onClick={() => a.likeBlog(this.props.blog._id)}></i></a>
            }
            else return <a href="javascript:void(0)" ><i className="zmdi zmdi-thumb-up icon-blog-detail-active" onClick={() => a.likeBlog(this.props.blog._id)}></i></a>
        }

        var edit = (a) => {
            if (user_id.toString() === this.props.writer._id.toString()) {
                return <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-10'>
                        <button className='btn btn-info' style={{ marginTop: "50px" }} onClick={() => a.openEditBlog()}><i className="zmdi zmdi-edit"></i> Sửa bài viết</button>
                    </div>
                    <div className='col-1'></div>
                </div>
            }
            else return null;
        }


        return (
            <React.Fragment>
                <Header></Header>
                <div className='content'>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-7'>
                            <ContentBlogDetail blog={this.props.blog}></ContentBlogDetail>
                            <br />
                            <i style={{ fontSize: '1.5em' }}>Bình luận</i>
                            <br />
                            <form onSubmit={(event) => this.submit(event)}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='content'
                                        className='form-control input-comment'
                                        placeholder='Nhập và enter để đăng bình luận...'
                                        onChange={(event) => this.change(event)}
                                        required
                                    ></input>
                                </div>
                            </form>
                            {this.showComment(this.props.comments)}
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <div className='col-2'></div>
                                <div className='col-10'>
                                    <div className='row icon-like-comment'>
                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-1'></div>
                                                <div className='col-4  ' style={{ borderRight: "0.3px solid rgba(0,0,0,0.7)" }}>
                                                    <span className='icon-blog-detail'>{this.props.blog.like.length}</span><br />
                                                    {/* <i className="zmdi zmdi-thumb-up icon-blog-detail"></i> */}
                                                    {like(a)}
                                                </div>
                                                <div className='col-1  '></div>
                                                <div className='col-4  '>
                                                    <span className='icon-blog-detail'>{this.props.comments.length}</span><br />
                                                    <i className="zmdi zmdi-comments icon-blog-detail"></i>
                                                </div>
                                            </div>
                                            {/* <div className='row'>
                                                <div className='col-1'></div>
                                                <div className='col-10'>
                                                    <button className='btn btn-info' style={{ marginTop: "50px" }}><i class="zmdi zmdi-edit"></i> Sửa bài viết</button>
                                                </div>
                                                <div className='col-1'></div>
                                            </div> */}
                                            {edit(a)}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                {/* <div className='col-2'></div> */}
                                <div className='col-12'>
                                    <WriterInformation user={this.props.writer}></WriterInformation>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-2'></div>
                                <div className='col-10 chude'>
                                    <p className='list-tag'><i className="zmdi zmdi-tag-more"></i> <i>Chủ đề nổi bật</i></p>
                                    {this.showHastag(this.props.hastag)}
                                </div>
                            </div>

                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
                <Footer></Footer>

                <Modal isOpen={this.state.editBlog} toggle={() => this.closeEditBlog()}>
                    <ModalHeader>
                        <span>Sửa bài viết</span>
                    </ModalHeader>
                    <ModalBody>
                        <form className='form-group' onSubmit={(event) => this.submitEditBlog(event)}>
                            <label className='title'>Tiêu đề</label>
                            <input type='text' name='title' className='form-control' placeholder="nhập tiêu đề cho bài viết của bạn..." value={this.state.blog.title} onChange={(event) => this.editBlog(event)} required></input>
                            <label className='title'>Hastag</label>
                            <Select
                                name="hastag"
                                options={hastagOpition}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={this.onSetHastag}
                                placeholder="Chọn một trong các Hastag..."
                            />
                            <label className='title'>Nội dung</label>
                            <textarea className='form-control' name='content' type='text' rows='8' cols='250' value={this.state.blog.content} placeholder="nhập nội dung bài viết..." onChange={(event) => this.editBlog(event)} required></textarea>
                            <button type='submit' className='btn btn-primary'>Cập nhật</button>
                        </form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        blog: state.blog.blogDetail,
        writer: state.account.account,
        hastag: state.hastag.allHastag,
        comments: state.comment.comments,
        user: state.auth.user

    }
}

function mapDispatchToProps(dispatch) {
    return {
        getWriter: (id) => dispatch(getAccountDetail(id)),
        getBlogDetail: (id) => dispatch(getBlogDetail(id)),
        getComment: (id) => dispatch(getComment(id)),
        writeComment: (id, data) => dispatch(writeComment(id, data)),
        likeBlog: (id) => dispatch(like(id)),
        editBlog: (id, data) => dispatch(editBlog(id, data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogDetail));
