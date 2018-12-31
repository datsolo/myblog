import React, { Component } from 'react';
import "./style.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import WriterInformation from '../../components/writerinformation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  getAllUserBlog } from '../../actions/BlogAction';
import Hastag from '../../components/hastag';
import { getAccountDetail } from '../../actions/AccountAction';
import MyBlog from '../../components/myblog';

class ProfilePage extends Component {

    componentDidMount() {
        this.props.getBlogUser(this.props.match.params.id);
        this.props.getWriter(this.props.match.params.id);
    }

    showBlogs(blogs) {
        if (blogs.length <= 0) {
            return <p style={{fontSize: '1.4em'}}>Không có bài viết</p>;
        }
        else return blogs.map((blog) => {
            return <MyBlog key={blog._id} blog={blog}></MyBlog>
        })
    }

    showHastag(hastag) {
        if (hastag.length < 0) {
            return null;
        }
        else return hastag.map((tag) => {
            return <Hastag key={tag._id} id={tag._id}>#{tag.content}</Hastag>
        })
    }

    render() {


        return (
            <React.Fragment>
                <Header></Header>
                <div className='content'>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-7'>
                            <p style={{fontSize: '1.4em'}}>Bài viết của {this.props.user.username}</p>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-1'></div>
                        <div className='col-7'>
                            {this.showBlogs(this.props.listBlogs)}
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                {/* <div className='col-2'></div> */}
                                <div className='col-12'>
                                    <WriterInformation user={this.props.user} countBlog = {this.props.listBlogs.length}></WriterInformation>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-2'></div>
                                <div className='col-10 chude'>
                                    <p className='list-tag'><i class="zmdi zmdi-tag-more"></i> <i>Chủ đề nổi bật</i></p>
                                    {this.showHastag(this.props.hastag)}
                                </div>
                            </div>

                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        listBlogs: state.blog.blogUser,
        user: state.account.account,
        hastag: state.hastag.allHastag
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBlogUser: (id) => dispatch(getAllUserBlog(id)),
        getWriter: (id) => dispatch(getAccountDetail(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
